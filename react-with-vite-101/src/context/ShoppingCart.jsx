import { useContext, createContext, useState } from "react"
import ShoppingCart from "../components/ShoppingCart";
import { useLocalStorage } from "../hooks/UseLocalStorage";

export const ShoppingCartContext = createContext();

export const useShoppingCart = () => {
    return useContext(ShoppingCartContext);
}

export const ShoppingCartProvider = ({ children }) => {

    const [isOpen, setIsOpen] = useState(false);
    const [cartItems, setCartItems] = useLocalStorage('shopping-cart', []);

    const openCart = () => setIsOpen(true);
    const closeCart = () => setIsOpen(false);



    const cartQuantity = cartItems.reduce((quantity, item) => {
        return item.quantity + quantity
    }, 0);

    const getItemQuantity = (id) => {
        return cartItems.find(item => item.id === id)?.quantity || 0;
    };

    const increaseCartQuantity = (id) => {
        setCartItems(currentItem => {
            if (currentItem.find(item => item.id == id) == null) {
                return [...currentItem, { id, quantity: 1 }]
            } else {
                return currentItem.map((item) => {
                    if (item.id === id) {
                        return {
                            ...item, quantity: item.quantity + 1
                        }
                    } else {
                        return item
                    }
                })
            }
        })
    }
    const decreaseCartQuantity = (id) => {
        setCartItems(currentItem => {
            if (currentItem.find(item => item.id === id)?.quantity == 1) {
                return currentItem.filter(item => item.id !== id)
            } else {
                return currentItem.map((item) => {
                    if (item.id === id) {
                        return {
                            ...item, quantity: item.quantity - 1
                        }
                    } else {
                        return item
                    }
                })
            }
        })
    }

    const removeItem = (id) => {
        setCartItems(currentItem => {
            return currentItem.filter(item => item.id !== id)
        });
    }

    return (
        <ShoppingCartContext.Provider value={{
            getItemQuantity,
            increaseCartQuantity,
            decreaseCartQuantity,
            removeItem,
            openCart,
            closeCart,
            cartItems,
            cartQuantity
        }}>
            {children}
            <ShoppingCart isOpen={isOpen} />
        </ShoppingCartContext.Provider>
    )
}