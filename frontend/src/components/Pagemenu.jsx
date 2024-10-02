import React, { useState, useEffect } from "react";
import Button from "./elements/Button";
import axios from "axios";

function Pagemenu(props) {
    const { id } = props;
    const [data, setData] = useState([]);
    const [cart, setCart] = useState([
        {
            id: id,
            qty: 1,
        },
    ]);
    const [Totalprice, SettotalPrice] = useState(0);

    useEffect(() => {
        setCart([
            {
                id: 1,
                qty: 1,
            },
        ]);
    }, []);

    const handleCart = (id) => {
        if (cart.find((item) => item.id === id)) {
            setCart(
                cart.map((item) =>
                    item.id === id ? { ...item, qty: item.qty + 1 } : item
                )
            );
        } else {
            setCart([...cart, { id, qty: 1 }]);
        }
    };

    const fetchData = async () => {
        try {
            const response = await axios.get("http://localhost:3000/menu");
            const jsonData = await response.data.data;
            setData(jsonData);
        } catch (err) {
            console.log(err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    // menghitung total price
    useEffect(() => {
        const calculateTotalPrice = async () => {
          const promises = cart.map(async (item) => {
            const product = await data.find((produk) => produk.id === item.id);
            return product.price * item.qty;
          });
          const sum = await Promise.all(promises)
            .then((results) => results.reduce((acc, result) => acc + result, 0));
          SettotalPrice(sum);
        };
        calculateTotalPrice();
      }, [cart]);


    // const asyncReduce = async (array, callback, initialValue) => {
    //     let acc = initialValue;
    //     for (const item of array) {
    //       acc = await callback(acc, item);
    //     }
    //     return acc;
    //   };
      
    //   useEffect(() => {
    //     const calculateTotalPrice = async () => {
    //       const sum = await asyncReduce(cart, async (acc, item) => {
    //         const product = await data.find((produk) => produk.id === item.id);
    //         return acc + product.price * item.qty;
    //       }, 0);
    //       SettotalPrice(sum);
    //     };
    //     calculateTotalPrice();
    //   }, [cart]);

    return (
        <div className="relative left-[338px] w-3/4">
            <div className="h-96 bg-hero-pattern bg-cover bg-center"></div>
            <h1 className="border-2 border-black px-5 flex flex-col w-fit m-auto text-center text-4xl font-bold relative bottom-16 text-white">
                OUR{" "}
                <span className="text-6xl text-red-500 font-Courgette font-normal">
                    ALACARTE MENU
                </span>
            </h1>

            <div className="flex flex-wrap justify-center gap-3 mb-8">
                {data.map((item) => (
                    <div className="w-64 border-2 shadow-xl" key={item.id}>
                        <div className="h-48 w-[252px] overflow-hidden">
                            <img
                                className="h-60 object-cover"
                                src={item.image}
                                alt=""
                            />
                        </div>
                        <div className="p-3 flex flex-col gap-2">
                            <h1 className="text-xl font-bold capitalize underline">
                                {item.name}
                            </h1>
                            <p className="h-20">
                                {item.description.substring(0, 65) + " ..."}
                            </p>
                            <h2>
                                {item.price.toLocaleString("id-ID", {
                                    style: "currency",
                                    currency: "IDR",
                                })}
                            </h2>
                            <Button
                                onClick={() => handleCart(item.id)}
                                variant="bg-blue-600 hover:bg-blue-700 hover:text-white">
                                Order
                            </Button>
                        </div>
                    </div>
                ))}
            </div>

            <div className="max-w-max m-auto border">
                <table>
                    <thead>
                        <tr className="text-left">
                            <th className="w-56">makanan</th>
                            <th className="w-32">Price</th>
                            <th className="w-32">Quantity</th>
                            <th>Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cart.map((item) => {
                            const findData = data.find(
                                (product) => product.id === item.id
                            );
                            if (item.qty)
                                if (findData) {
                                    return (
                                        <tr>
                                            <td className="w-56">
                                                {findData.name}
                                            </td>
                                            <td className="w-32">
                                                {findData.price}
                                            </td>
                                            <td className="w-32">{item.qty}</td>
                                            <td>{findData.price * item.qty}</td>
                                        </tr>
                                    );
                                } else {
                                    return null;
                                }
                        })}

                        <tr>
                            <td colSpan={3}>
                                <b>Total Price</b>
                            </td>
                            <td>
                                <b>
                                    {Totalprice.toLocaleString("id-ID", {
                                        style: "currency",
                                        currency: "IDR",
                                    })}
                                </b>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Pagemenu;
