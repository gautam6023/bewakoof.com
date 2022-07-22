import React, { useState } from "react";
import styles from "./SingleProduct.module.css";
import { AiOutlineHeart } from "react-icons/ai";
import { BiShoppingBag, BiPlus, BiMinus } from "react-icons/bi";
import Modal from "../SizeModal/Modal";

export default function SingleProduct() {
    const [visible, setVisible] = useState(false);
    const [accordion, setAccordion] = useState({
        offer: false,
        desc: false,
        return: false,
        delivery: false,
    });
    const handleSizeModal = () => {
        setVisible(true);
    };
    const handleOffer = () => {
        setAccordion({ ...accordion, offer: !accordion.offer });
    };
    const handleDesc = () => {
        setAccordion({ ...accordion, desc: !accordion.desc });
    };
    const handleReturn = () => {
        setAccordion({ ...accordion, return: !accordion.return });
    };
    const handleDelivery = () => {
        setAccordion({ ...accordion, delivery: !accordion.delivery });
    };

    return (
        <>
            {visible && <Modal setVisible={setVisible} />}
            <div className={styles.container}>
                <div className={styles.parent}>
                    <div className={styles.parent_left}>Left</div>
                    <div className={styles.parent_right}>
                        <div className={styles.product_brand}>Bewakoof</div>
                        <div className={styles.product_name}>
                            Men's Blue Voyage Graphic Printed Oversized T-Shirt
                        </div>
                        <div className={styles.product_price}>
                            Rs. 499{" "}
                            <span className={styles.striked_off}>Rs. 1299</span>{" "}
                            <span className={styles.discount}>61% OFF</span>
                        </div>
                        <div className={styles.taxes}>
                            inclusive of all taxes
                        </div>
                        <div className={styles.product_category}>
                            <div>OVERSIZED FIT</div>
                            <div>DESIGN OF THE DAY</div>
                        </div>
                        <div className={styles.tribe_member}>
                            TriBe members get an extra discount of Rs. 40 & FREE
                            shipping. <div>Learn more</div>
                        </div>
                        <div className={styles.size_wrapper}>
                            <span>SELECT SIZE</span>
                            <span onClick={handleSizeModal}>Size Guide</span>
                        </div>
                        <div className={styles.size}>
                            <div>S</div>
                            <div>M</div>
                            <div>L</div>
                            <div>XL</div>
                            <div>2XL</div>
                            <div>3XL</div>
                        </div>
                        <div className={styles.cart_menu}>
                            <div>
                                <BiShoppingBag />
                                ADD TO BAG
                            </div>
                            <div>
                                <AiOutlineHeart />
                                WISHLIST
                            </div>
                        </div>

                        {/* Accorion Section */}
                        <div className={styles.product_accordion}>
                            <div
                                className={styles.accordion_header}
                                onClick={handleOffer}
                            >
                                <div>
                                    SAVE EXTRA WITH 2 OFFERS
                                    <span>
                                        {accordion.offer ? (
                                            <BiMinus />
                                        ) : (
                                            <BiPlus />
                                        )}
                                    </span>
                                </div>
                            </div>
                            {accordion.offer && (
                                <div className={styles.accordion_desc}>
                                    <div>
                                        <span>
                                            <img
                                                src="https://images.bewakoof.com/web/discount-1-2x-1625212811.png"
                                                alt=""
                                            />
                                        </span>
                                        Get Rs.200 instant discount on your
                                        first Purchase above Rs.999
                                    </div>
                                    <div>
                                        Coupon Code-
                                        <span className={styles.coupon_code}>
                                            NEW-200
                                        </span>
                                    </div>
                                    <div>
                                        <span>
                                            <img
                                                src="https://images.bewakoof.com/web/discount-1-2x-1625212811.png"
                                                alt=""
                                            />
                                        </span>
                                        Whistles! Get extra 20% cashback on
                                        prepaid orders above Rs.499
                                    </div>
                                    <div>
                                        Coupon Code-
                                        <span className={styles.coupon_code}>
                                            NEW-20
                                        </span>
                                    </div>
                                </div>
                            )}

                            <div
                                className={styles.accordion_header}
                                onClick={handleDesc}
                            >
                                <div>
                                    PRODUCT DESCRIPTION
                                    <span>
                                        {accordion.desc ? (
                                            <BiMinus />
                                        ) : (
                                            <BiPlus />
                                        )}
                                    </span>
                                </div>
                            </div>
                            {accordion.desc && (
                                <div className={styles.accordion_desc}>
                                    <div className={styles.desc_title}>
                                        Men's Blue Voyage Graphic Printed
                                        Oversized T-Shirt
                                    </div>
                                    <div>
                                        Country of Origin
                                        <span
                                            className={styles.product_category}
                                        >
                                            India
                                        </span>
                                    </div>
                                    <div>
                                        Commodity -
                                        <span className={styles.desc_commodity}>
                                            Men's T-Shirt
                                        </span>
                                    </div>
                                    <div className={styles.desc_specifications}>
                                        Product Specifications
                                    </div>
                                    <ul>
                                        <li>
                                            Over-sized Fit- Falls loosely on
                                            body
                                        </li>
                                        <li>
                                            Single jersey, 100% Cotton Classic,
                                            Lightweight jersey
                                        </li>
                                    </ul>
                                </div>
                            )}

                            <div
                                className={styles.accordion_header}
                                onClick={handleReturn}
                            >
                                <div>
                                    15 DAYS RETURN & EXCHANGE
                                    <span>
                                        {accordion.return ? (
                                            <BiMinus />
                                        ) : (
                                            <BiPlus />
                                        )}
                                    </span>
                                </div>
                            </div>
                            {accordion.return && (
                                <div className={styles.accordion_desc}>
                                    <div>
                                        Easy returns utp 15 days of delivery.
                                        Exchange available on select pincodes.
                                    </div>
                                </div>
                            )}

                            <div
                                className={styles.accordion_header}
                                onClick={handleDelivery}
                            >
                                <div>
                                    DELIVERY DETAILS
                                    <span>
                                        {accordion.delivery ? (
                                            <BiMinus />
                                        ) : (
                                            <BiPlus />
                                        )}
                                    </span>
                                </div>
                            </div>
                            {accordion.delivery && (
                                <div className={styles.accordion_desc}>
                                    <div className={styles.desc_pincode}>
                                        <input
                                            type="number"
                                            placeholder="Enter Pincode"
                                        />
                                        <span>Check</span>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}