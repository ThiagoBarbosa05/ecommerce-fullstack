const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const bcrypt = require("bcrypt");
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

passport.use(
  new LocalStrategy(
    { usernameField: "email" },
    async (email, password, done) => {
      const user = await prisma.customers.findUnique({
        where: { email },
      });

      if (!user) return done(null, false, { message: "Username is incorrect" });

      const match = await bcrypt.compare(password, user.password);

      if (!match)
        return done(null, false, { message: "Password is incorrect" });

      return done(null, user);
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  const user = await prisma.customers.findFirst({
    where: { id: parseInt(id) },
  });

  done(null, user);
});