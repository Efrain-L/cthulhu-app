import React, { createContext } from "react";
import { Investigator } from "@/types/Investigator";

type InvestigatorContextType = Investigator | null;

export const InvestigatorContext = createContext<InvestigatorContextType>(null);

const InvestigatorProvider = ({
    children,
    investigator,
}: {
    children: React.ReactNode;
    investigator: InvestigatorContextType;
}) => {
    return (
        <InvestigatorContext.Provider value={investigator}>
            {children}
        </InvestigatorContext.Provider>
    );
};

export default InvestigatorProvider;