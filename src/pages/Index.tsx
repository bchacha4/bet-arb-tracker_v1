import React, { useState } from 'react';
import ArbitrageTable from '@/components/ArbitrageTable/ArbitrageTable';
import FilterSection from '@/components/ArbitrageTable/FilterSection';
import Navbar from '@/components/Navbar/Navbar';
import ArbitrageDescription from '@/components/ArbitrageDescription/ArbitrageDescription';
import { useIsMobile } from "@/hooks/use-mobile";
import { AVAILABLE_SPORTSBOOKS } from '@/constants/sportsbooks';
import { Option } from '@/components/ui/multi-select';

const Index = () => {
  const [bettingAmount, setBettingAmount] = useState("1000");
  const [selectedSportsbooks, setSelectedSportsbooks] = useState<string[]>([]);
  const [selectedSports, setSelectedSports] = useState<string[]>([]);
  const isSubscribed = false;
  const isMobile = useIsMobile();

  const availableSports: Option[] = [
    { label: 'NBA', value: 'NBA' },
    { label: 'NFL', value: 'NFL' },
    { label: 'MLB', value: 'MLB' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="max-w-[1400px] mx-auto p-6">
        <ArbitrageDescription />
        
        {!isMobile && (
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold text-gray-900">Arbitrage Props</h2>
          </div>
        )}
        
        {isMobile && (
          <div className="mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Arbitrage Props</h2>
          </div>
        )}
        
        <FilterSection 
          isSubscribed={isSubscribed} 
          bettingAmount={bettingAmount}
          onBettingAmountChange={setBettingAmount}
          onSportsbookFilter={setSelectedSportsbooks}
          onSportsFilter={setSelectedSports}
          availableSportsbooks={AVAILABLE_SPORTSBOOKS}
          availableSports={availableSports}
        />
        
        <ArbitrageTable 
          bettingAmount={bettingAmount}
          selectedSportsbooks={selectedSportsbooks}
          selectedSports={selectedSports}
        />
      </div>
    </div>
  );
};

export default Index;