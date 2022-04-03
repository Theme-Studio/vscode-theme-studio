import { Fragment, ReactNode } from "react";
import { useConfiguration } from "../../hooks/use-configuration";
import { Divider } from "../Divider";
import { clsx } from "@theme-studio/core";
import { Tab } from "../";
import { Button } from "../Button";
import { Heading } from "../Heading";

export interface ConfigurationSidebarProps {
  children: ReactNode;
}

export function ConfigurationSidebar({ children }: ConfigurationSidebarProps) {
  const { sections, configuration } = useConfiguration();

  const handleComplete = () => {
    console.log(configuration);
  };

  return (
    <div className="w-72 bg-[#f3f3f3] dark:bg-gray-900 p-2 flex flex-col h-full">
      <div className="flex items-center justify-between">
        <Heading className="text-2xl text-dark-700 dark:text-white">
          Theme Studio
        </Heading>
        {children}
      </div>
      <Divider space="my-3" color="bg-gray-400" darkColor="bg-gray-700" />
      <div className="flex-1 overflow-y-scroll scrollbar-hide">
        <Tab.List>
          {sections.map((section) => (
            <Tab as={Fragment} key={section}>
              {({ selected }) => (
                <button
                  className={clsx(
                    "group mb-2 rounded py-1 px-2 block w-full text-left hover:bg-blue-700 border border-blue-700",
                    {
                      "bg-blue-700": selected,
                    }
                  )}
                >
                  <Heading
                    type="h2"
                    className={clsx(
                      "group-hover:text-white text-lg text-dark-900 text-white",
                      {
                        "text-gray-700 dark:text-white": !selected,
                      }
                    )}
                  >
                    {section}
                  </Heading>
                </button>
              )}
            </Tab>
          ))}
        </Tab.List>
      </div>
      <Divider space="my-3" color="bg-gray-400" darkColor="bg-gray-700" />
      <Button onClick={handleComplete}>Done</Button>
    </div>
  );
}
