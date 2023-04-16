import {createSlice} from '@reduxjs/toolkit'

// const cartSlice = createSlice({
//   name: 'cart',
//   initialState: {items: []},
//   reducers: {
//     addItem: (state, action) => {
//       const existingItem = state.items.find(item => item.id === action.payload.id)

//       if(existingItem) {
//         existingItem.quantity += action.payload.quantity;
//       }

      
//       state.items.push(action.payload)
//     },
//     removeItems: (state, action) => {
//       state.items = state.items.filter(item => item.id !== action.payload)
//     },
//     clearCart: state => {
//       state.items = []
//     }
//   }
// })

const cartSlice = createSlice({
  name: 'cart',
  initialState: { items: [] },
  reducers: {
    addItem: (state, action) => {
      // Verificar se o item já está no carrinho
      const existingItem = state.items.find(item => item.id === action.payload.id);
      if (existingItem) {
        // Se o item já estiver no carrinho, apenas atualize a quantidade
        existingItem.qtd += action.payload.qtd;
        
      } else {
        // Caso contrário, adicione um novo item ao carrinho
        state.items.push(action.payload);
      }
    },
    updateItemQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const existingItem = state.items.find(item => item.id === id);
      if (existingItem) {
        existingItem.quantity = quantity;
      }},
    removeItems: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload);
    },
    clearCart: state => {
      state.items = [];
    }
}});

export const {addItem, removeItems, clearCart, updateItemQuantity} = cartSlice.actions

export default cartSlice.reducer