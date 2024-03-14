import React, { createContext, useContext, useState } from 'react';

// Criando o contexto do carrinho
const CartContext = createContext();

// Componente de provedor do contexto do carrinho
export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);
    const [isOpen, setIsOpen] = useState(false);

    // Função para adicionar um item ao carrinho
    const addToCart = (item) => {
        setIsOpen(!isOpen)
        setCartItems([...cartItems, item]);
    };

    // Função para remover um item do carrinho com base no índice
    const removeFromCart = (index) => {
        const updatedCartItems = [...cartItems];
        updatedCartItems.splice(index, 1);
        setCartItems(updatedCartItems);
    };

    // Função para retornar todos os itens do carrinho
    const getCartItems = () => {
        return cartItems;
    };

    // Função para calcular o total de todos os preços dos itens no carrinho
    const getTotal = () => {
        return cartItems.reduce((total, item) => total + item.price, 0);
    };


    // Criando um objeto de valor do contexto
    const contextValue = {
        addToCart,
        removeFromCart,
        getCartItems,
        isOpen,
        setIsOpen,
        getTotal,
        cartItems
    };

    // Retornando o componente de provedor do contexto com os filhos e o valor do contexto
    return (
        <CartContext.Provider value={contextValue}>
            {children}
        </CartContext.Provider>
    );
};

// Hook personalizado para acessar o contexto do carrinho
export const useCart = () => {
    return useContext(CartContext);
};
