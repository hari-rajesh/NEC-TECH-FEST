import React from "react";
import { IconCheck } from "@tabler/icons-react";
import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";

export default function PricingCards() {
  return (
    <div className="w-full py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto grid gap-6 lg:grid-cols-3 px-4 relative z-10">
        {/* Basic Plan */}
        <Card className="bg-black/40 backdrop-blur-sm border border-white/10 text-white transition-transform duration-300 hover:-translate-y-2 hover:rotate-1 hover:shadow-xl hover:shadow-[#FF0080]/20">
          <CardHeader>
            <CardTitle className="text-2xl font-bold">Basic</CardTitle>
            <CardDescription className="text-gray-400">For individuals starting out</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col flex-grow">
            <p className="text-4xl font-bold mb-6">
              ₹150<span className="text-lg font-normal text-gray-400">/pass</span>
            </p>
            <ul className="space-y-3 flex-grow">
              <li className="flex items-center">
                <IconCheck className="mr-2 h-5 w-5 text-[#FF0080]" /> 1 Day Pass
              </li>
              <li className="flex items-center">
                <IconCheck className="mr-2 h-5 w-5 text-[#FF0080]" /> Basic Events
              </li>
              <li className="flex items-center">
                <IconCheck className="mr-2 h-5 w-5 text-[#FF0080]" /> Standard Support
              </li>
            </ul>
          </CardContent>
          <CardFooter className="mt-auto">
          <button className="w-full px-6 py-3 text-lg font-semibold text-white border-2 border-[#FF0080] rounded-xl bg-transparent hover:bg-[#FF0080]/20 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_25px_rgba(255,0,128,0.3)] relative group overflow-hidden">
  <span className="relative z-10">Get Started</span>
  <div className="absolute inset-0 bg-gradient-to-r from-[#FF0080]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
</button>
          </CardFooter>
        </Card>
        {/* Pro Plan */}
        <Card className="bg-black/40 backdrop-blur-sm border-2 border-[#FF0080]/20 text-white relative transform scale-105 transition-transform duration-300 hover:-translate-y-2 hover:-rotate-1 hover:shadow-xl hover:shadow-[#FF0080]/20">
          <div className="absolute top-0 right-0 bg-[#FF0080] text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
            POPULAR
          </div>
          <CardHeader>
            <CardTitle className="text-3xl font-bold">Pro</CardTitle>
            <CardDescription className="text-gray-400">Perfect for tech enthusiasts</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col flex-grow">
            <p className="text-5xl font-bold mb-6">
              ₹300<span className="text-xl font-normal text-gray-400">/pass</span>
            </p>
            <ul className="space-y-3 flex-grow">
              <li className="flex items-center">
                <IconCheck className="mr-2 h-6 w-6 text-[#FF0080]" /> 2 Days Pass
              </li>
              <li className="flex items-center">
                <IconCheck className="mr-2 h-6 w-6 text-[#FF0080]" /> All Events Access
              </li>
              <li className="flex items-center">
                <IconCheck className="mr-2 h-6 w-6 text-[#FF0080]" /> Priority Support
              </li>
              <li className="flex items-center">
                <IconCheck className="mr-2 h-6 w-6 text-[#FF0080]" /> Workshop Access
              </li>
            </ul>
          </CardContent>
          <CardFooter className="mt-auto">
          <button className="w-full px-6 py-3 text-lg font-semibold text-[#FF0080] border-2 border-[#FF0080] rounded-xl bg-white hover:bg-[#FF0080]/20 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_25px_rgba(255,0,128,0.3)] relative group overflow-hidden">
  <span className="relative z-10">Upgrade to Pro</span>
  <div className="absolute inset-0 bg-gradient-to-r from-[#FF0080]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
</button>

          </CardFooter>
        </Card>

        {/* Team Plan */}
        <Card className="bg-black/40 backdrop-blur-sm border border-white/10 text-white transition-transform duration-300 hover:-translate-y-2 hover:rotate-1 hover:shadow-xl hover:shadow-[#FF0080]/20">
          <CardHeader>
            <CardTitle className="text-2xl font-bold">Team</CardTitle>
            <CardDescription className="text-gray-400">For groups and organizations</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col flex-grow">
            <p className="text-4xl font-bold mb-6">
              ₹3999<span className="text-lg font-normal text-gray-400">/pass</span>
            </p>
            <ul className="space-y-3 flex-grow">
              <li className="flex items-center">
                <IconCheck className="mr-2 h-5 w-5 text-[#FF0080]" /> 5 Team Members
              </li>
              <li className="flex items-center">
                <IconCheck className="mr-2 h-5 w-5 text-[#FF0080]" /> All Events Access
              </li>
              <li className="flex items-center">
                <IconCheck className="mr-2 h-5 w-5 text-[#FF0080]" /> 24/7 Support
              </li>
              <li className="flex items-center">
                <IconCheck className="mr-2 h-5 w-5 text-[#FF0080]" /> Special Team Events
              </li>
            </ul>
          </CardContent>
          <CardFooter className="mt-auto">
          <button className="w-full px-6 py-3 text-white font-semibold rounded-xl border-2 border-[#FF0080] bg-transparent hover:bg-[#FF0080]/20 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(255,0,128,0.4)] relative overflow-hidden group">
  <span className="relative z-10">Contact Sales</span>
  <div className="absolute inset-0 bg-gradient-to-r from-[#FF0080]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
</button>

          </CardFooter>
        </Card>
      </div>
    </div>
  );
}