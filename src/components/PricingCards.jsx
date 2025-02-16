import React from "react";
import { IconCheck } from "@tabler/icons-react";
import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";

export default function PricingCards() {
  return (
    <div className="w-full py-16 relative overflow-hidden">
      <div className="max-w-4xl mx-auto grid gap-6 lg:grid-cols-2 px-4 relative z-10 place-items-center">
        {/* Basic Plan */}
        <Card className="w-full max-w-sm min-h-[450px] bg-black/40 backdrop-blur-sm border border-white/10 text-white transition-transform duration-300 hover:-translate-y-2 hover:rotate-1 hover:shadow-xl hover:shadow-[#FF0080]/20 flex flex-col">
          <CardHeader className="pb-4">
            <CardTitle className="text-2xl font-bold">Basic</CardTitle>
            <CardDescription className="text-gray-400">For individuals starting out</CardDescription>
          </CardHeader>
          <CardContent className="flex-1 py-2">
            <p className="text-4xl font-bold mb-4">
              ₹200<span className="text-xl font-normal text-gray-400">/pass</span>
            </p>
            <ul className="space-y-2 flex-grow">
              <li className="flex items-center">
                <IconCheck className="mr-2 h-5 w-5 text-[#FF0080]" /> 1 Day Pass
              </li>
              <li className="flex items-center">
                <IconCheck className="mr-2 h-6 w-6 text-[#FF0080]" />Access to all events for the day
              </li>
              <li className="flex items-center">
                <IconCheck className="mr-2 h-6 w-6 text-[#FF0080]" />Participate in tech & non-tech events
              </li>
            </ul>
          </CardContent>
          <CardFooter className="mt-auto pb-4">
            <button className="w-full px-6 py-3 text-lg font-semibold text-white border-2 border-[#FF0080] rounded-xl bg-transparent hover:bg-[#FF0080]/20 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_25px_rgba(255,0,128,0.3)] relative group overflow-hidden">
              <span className="relative z-10">Book Your Spot</span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#FF0080]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          </CardFooter>
        </Card>
        {/* Pro Plan */}
        <Card className="w-full max-w-sm min-h-[450px] bg-black/40 backdrop-blur-sm border-2 border-[#FF0080]/20 text-white relative transition-transform duration-300 hover:-translate-y-2 hover:-rotate-1 hover:shadow-xl hover:shadow-[#FF0080]/20 flex flex-col">
          <div className="absolute top-0 right-0 bg-[#FF0080] text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
            POPULAR
          </div>
          <CardHeader className="pb-4">
            <CardTitle className="text-3xl font-bold">Pro</CardTitle>
            <CardDescription className="text-gray-400">Perfect for tech enthusiasts</CardDescription>
          </CardHeader>
          <CardContent className="flex-1 py-2">
            <p className="text-4xl font-bold mb-4">
              ₹300<span className="text-xl font-normal text-gray-400">/pass</span>
            </p>
            <ul className="space-y-2 flex-grow">
              <li className="flex items-center">
                <IconCheck className="mr-2 h-6 w-6 text-[#FF0080]" /> 2 Days Pass
              </li>
              <li className="flex items-center">
                <IconCheck className="mr-2 h-6 w-6 text-[#FF0080]" />Access to all events for both day
              </li>
              <li className="flex items-center">
                <IconCheck className="mr-2 h-6 w-6 text-[#FF0080]" />Participate in tech & non-tech events
              </li>
            </ul>
          </CardContent>
          <CardFooter className="mt-auto pb-4">
            <button className="w-full px-6 py-3 text-lg font-semibold text-[#FF0080] border-2 border-[#FF0080] rounded-xl bg-white hover:bg-[#FF0080]/20 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_25px_rgba(255,0,128,0.3)] relative group overflow-hidden">
              <span className="relative z-10">Book Your Spot</span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#FF0080]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}