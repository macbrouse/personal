'use client'
import { Link, Tab, TabList, TabPanel, Tabs } from "react-aria-components"

export function TabsExample() {
  return (
    <div className="bg-gradient-to-r from-lime-600 to-emerald-600 py-3 px-3 rounded-lg justify-center">
      <Tabs className="w-full max-w-[300px]">
        <TabList
          aria-label="Feeds"
          className="flex"
        >
          <MyTab id="blog">Home</MyTab>
          <MyTab id="releases">Projects</MyTab>
          <MyTab id="docs">About</MyTab>
        </TabList>
      </Tabs>
    </div>
  )
}

function MyTab(props) {
  return (
    <Tab
      {...props}
      className={({ isSelected }) => `
        w-full rounded-full py-2.5 font-medium text-[1.1em] text-center cursor-default ring-black outline-none transition-colors focus-visible:ring-2
        ${
          isSelected
            ? "text-emerald-700 bg-white shadow"
            : "text-white hover:bg-white/10 pressed:bg-white/10"
        }
      `}
    />
  )
}


