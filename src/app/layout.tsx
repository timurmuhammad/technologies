'use client'

import "../shared/static/globals.scss";
//import type { Metadata } from "next";
//import { Inter } from "next/font/google";
import { Header } from "../components/header";
import { Footer } from "@/components/footer";
import { createContext, useEffect, useState } from "react";
import ProductService from "@/components/search/Product.service";
export const TotalContext = createContext<any>(undefined)
//const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "iase24",
//   description: "iase24",
// };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const test = 'sedthjsdftx'
  const [ searchString, setSearchString ] = useState('')
  const [ path, setPath ] = useState()
  const [ parentCategories, setParentCategories ] = useState<string[]>([])
  const [ category, setCategory ] = useState<string[]>([])
  const [categoryChilds, setCategoryChilds] = useState<string[]>([])

  useEffect(() => {
    const fetchData = async () => {
        const response = await ProductService.getParentCategories()
        if (response) {
            setParentCategories(response)
        }
    }
    fetchData()
}, [])

  return (
    <html lang="en">
      <body>
        <div className="wrapper">
          <TotalContext.Provider
            value = {{ searchString, setSearchString,
              path, setPath,
              parentCategories, setParentCategories,
              category, setCategory, 
              categoryChilds, setCategoryChilds}}
          >
            <Header />
              <main>{children}</main>
            <Footer />
          </TotalContext.Provider>
        </div>
      </body>
    </html>
  );
}
