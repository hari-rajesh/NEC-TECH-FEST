import React from "react";
import { IconCheck } from "@tabler/icons-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { useNavigate } from "react-router-dom";

export default function PricingCards() {
  const navigate = useNavigate();

  const handleTechClick = () => {
    navigate("/associations/department/it-association");
  };

  const handleNonTechClick = () => {
    navigate("/events/non-tech");
  };

  return (
    <div className="w-full py-16 relative overflow-hidden bg-gradient-to-br from-[#1a0033] to-[#0c0019]">
      <div className="max-w-4xl mx-auto grid gap-6 lg:grid-cols-2 px-4 relative z-10 place-items-center">
        {/* Basic Plan */}
        <Card className="w-full max-w-sm min-h-[450px] bg-black/40 backdrop-blur-sm border border-white/10 text-white transition-transform duration-300 hover:-translate-y-2 hover:rotate-1 hover:shadow-xl hover:shadow-[#FF0080]/20 flex flex-col">
          <CardHeader className="pb-4 text-center">
            <CardTitle className="text-2xl font-bold">Basic</CardTitle>
            <CardDescription className="text-gray-400">Your 24-Hour All-Access Pass</CardDescription>
          </CardHeader>
          <CardContent className="flex-1 py-2 text-left">
            <p className="text-4xl font-bold mb-4 text-center">
              ₹200<span className="text-xl font-normal text-gray-400">/pass</span>
            </p>
            <ul className="space-y-4 flex-grow">
              <li className="flex items-start">
                <IconCheck className="mr-2 h-6 w-6 text-[#FF0080]" />
                <span>Access any one day of your choice (Day 1 or Day 2)</span>
              </li>
              <li className="flex items-start">
                <IconCheck className="mr-2 h-6 w-6 text-[#FF0080]" />
                <span>Enjoy all events happening on your chosen day</span>
              </li>
              <li className="flex items-start">
                <IconCheck className="mr-2 h-6 w-6 text-[#FF0080]" />
                <span>
                  Participate in both{" "}
                  <span
                    className="text-[#FF0080] cursor-pointer"
                    onClick={handleTechClick}
                  >
                    tech
                  </span>{" "}
                  &{" "}
                  <span
                    className="text-[#FF0080] cursor-pointer"
                    onClick={handleNonTechClick}
                  >
                    non-tech
                  </span>{" "}
                  events
                </span>
              </li>
            </ul>
          </CardContent>
        </Card>
        {/* Pro Plan */}
        <Card className="w-full max-w-sm min-h-[450px] bg-black/40 backdrop-blur-sm border-2 border-[#FF0080]/20 text-white relative transition-transform duration-300 hover:-translate-y-2 hover:-rotate-1 hover:shadow-xl hover:shadow-[#FF0080]/20 flex flex-col">
          <div className="absolute top-0 right-0 bg-[#FF0080] text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
            POPULAR
          </div>
          <CardHeader className="pb-4 text-center">
            <CardTitle className="text-3xl font-bold">Pro</CardTitle>
            <CardDescription className="text-gray-400">Ultimate 48-Hour Experience</CardDescription>
          </CardHeader>
          <CardContent className="flex-1 py-2 text-left">
            <p className="text-4xl font-bold mb-4 text-center">
              ₹300<span className="text-xl font-normal text-gray-400">/pass</span>
            </p>
            <ul className="space-y-6 flex-grow">
              <li className="flex items-start">
                <IconCheck className="mr-2 h-6 w-6 text-[#FF0080]" />
                <span>Full access for both days – no limits!</span>
              </li>
              <li className="flex items-start">
                <IconCheck className="mr-2 h-6 w-6 text-[#FF0080]" />
                <span>Enjoy all events on both days</span>
              </li>
              <li className="flex items-start">
                <IconCheck className="mr-2 h-6 w-6 text-[#FF0080]" />
                <span>
                  Participate in{" "}
                  <span
                    className="text-[#FF0080] cursor-pointer"
                    onClick={handleTechClick}
                  >
                    tech
                  </span>{" "}
                  &{" "}
                  <span
                    className="text-[#FF0080] cursor-pointer"
                    onClick={handleNonTechClick}
                  >
                    non-tech
                  </span>{" "}
                  events
                </span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}