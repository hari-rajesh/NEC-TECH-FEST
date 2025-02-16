import { useLocation } from "react-router-dom";
import { useState } from "react";
import QRCode from "react-qr-code";
import { motion } from "framer-motion";
import axios from "axios";

const Payment = () => {
    const location = useLocation();
    const Data = location.state;
    const [transactionId, setTransactionId] = useState("");
    const [paymentSuccess, setPaymentSuccess] = useState(false);
    const [image, setImage] = useState(null);
    const [isProcessing, setIsProcessing] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [modalMessage, setModalMessage] = useState("");

    const upiId = import.meta.env.VITE_UPIID;
    const upiLink = Data?.userData?.selectedOption === "Both" 
        ? `upi://pay?pa=${upiId}&pn=YourName&mc=&tid=&tr=&tn=Payment&am=300&cu=INR` 
        : `upi://pay?pa=${upiId}&pn=YourName&mc=&tid=&tr=&tn=Payment&am=200&cu=INR`;

    const handleDBStore = async (Data) => {
        console.log(Data);
        try {
            await axios.post("http://localhost:5200/api/registration/register", Data);
            setModalMessage( "Payment has been successfully made , For furthur details check your mail");
            setShowModal(true);
            setPaymentSuccess(true);
        } catch (err) {
            if(err.response.data==="Too many requests from the same IP, please try again after 3 minutes."){
                setModalMessage(err.response.data || "An error occurred. Please try again.");
                setShowModal(true);
            }
            else if (err.response) {
                setModalMessage(err.response.data.message || "An error occurred. Please try again.");
                setShowModal(true);
            }
            console.log(err);
        }
    };

    const handleTransactionSubmit = async () => {
        if (transactionId && image) {
            setIsProcessing(true);
            Data.transactionId = transactionId;
            Data.image = image;
            Data.paymentStatus = true;
            await handleDBStore(Data);
            setIsProcessing(false);
        }
    };

    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImage(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="min-h-screen flex flex-col items-center justify-center p-8 bg-gradient-to-br from-[#1E0F2D] via-[#2A1B3D] to-[#14092A] text-purple-200"
        >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 via-purple-600/10 to-purple-400/20 opacity-50 blur-3xl"></div>

            <div className="relative z-10 bg-[#2A1B3D] p-8 rounded-2xl shadow-2xl border border-purple-700/30 w-full max-w-md">
                <h2 className="text-2xl font-bold text-center text-purple-100 mb-6 drop-shadow-[0_0_5px_rgba(168,85,247,0.5)]">
                    Scan to Pay
                </h2>

                <div className="flex justify-center mb-6">
                    <div className="p-2 bg-white rounded-lg">
                        <QRCode value={upiLink} size={200} />
                    </div>
                </div>

                <div className="mb-4">
                    <input
                        type="text"
                        placeholder="Enter Transaction ID"
                        value={transactionId}
                        onChange={(e) => setTransactionId(e.target.value)}
                        className="w-full p-3 bg-[#3B2A4F] text-purple-200 border border-purple-700/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                </div>

                <div className="mb-4">
                    <input
                        type="file"
                        accept="image/*"
                        onChange={handleImageUpload}
                        className="w-full p-3 bg-[#3B2A4F] text-purple-200 border border-purple-700/30 rounded-lg file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:bg-purple-700 file:text-white"
                    />
                </div>

                {image && (
                    <div className="mb-4">
                        <img
                            src={image}
                            alt="Uploaded"
                            className="max-w-full h-auto border border-purple-700/30 rounded-lg"
                        />
                    </div>
                )}

                <button
                    onClick={handleTransactionSubmit}
                    className={`w-full py-3 rounded-xl font-bold bg-gradient-to-r from-purple-700 to-purple-900 text-white transition-all duration-300 border border-purple-600/30 shadow-lg shadow-purple-900/50 hover:shadow-xl hover:shadow-purple-900/70 ${!(transactionId && image) ? "opacity-50 cursor-not-allowed" : "hover:from-purple-800 hover:to-purple-950"}`}
                    disabled={!(transactionId && image) || isProcessing}
                >
                    {isProcessing ? "Processing..." : "Confirm Payment"}
                </button>

                {paymentSuccess && (
                    <p className="mt-4 text-green-400 font-semibold text-center drop-shadow-[0_0_3px_rgba(34,197,94,0.5)]">
                        Payment Successful
                    </p>
                )}
            </div>

            {showModal && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full text-center">
                        <p className="text-gray-700 mt-2">{modalMessage}</p>
                        <button
                            onClick={() => setShowModal(false)}
                            className="mt-4 bg-red-500 text-white px-4 py-2 rounded-lg"
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </motion.div>
    );
};

export default Payment;
