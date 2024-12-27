import { useContext } from 'react';
import { InvestigatorContext } from '@/app/details/contexts/InvestigatorContext';

export const useInvestigator = () => {
    const context = useContext(InvestigatorContext);
    if (context === null) {
        console.warn("useInvestigator must be used within an InvestigatorProvider");
    }
    return context;
};

export default useInvestigator;