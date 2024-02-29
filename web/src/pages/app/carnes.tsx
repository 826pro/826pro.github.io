import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";

import { Model } from "@/components/model";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";

interface Product {
  id: string;
  title: string;
  description: string;
  photo: string;
  size: number;
  serving: number;
  price: number;

  name: string;
  address: string;
  payment: string;
}

export function Carnes() {
  const [carnes, setCarnes] = useState<Product[]>([]);

  useEffect(() => {
    async function fetchCarnes() {
      try {
        const response = await fetch(
          "http://localhost:3333/products/category/2"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data: { products: Product[] } = await response.json();
        setCarnes(data.products);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchCarnes();
  }, []);

  return (
    <>
      <Helmet title="Carnes" />
      <div className="flex gap-5 flex-wrap justify-center items-center w-[250px] md:justify-around md:w-[950px]">
        {carnes.map((carne) => (
          <Dialog key={carne.id}>
            <DialogTrigger asChild>
              <Card className="w-52 md:h-[450px] mt-5 md:w-96">
                <CardHeader>
                  <img
                    className="w-auto h-40 object-cover"
                    src={carne.photo}
                    alt={carne.title}
                  />
                </CardHeader>
                <CardContent>
                  <CardTitle>{carne.title}</CardTitle>
                </CardContent>
                <CardContent>
                  <CardDescription>{carne.description}</CardDescription>
                </CardContent>
                <CardContent>
                  <p>
                    {carne.price.toLocaleString("pt-BR", {
                      style: "currency",
                      currency: "BRL",
                    })}
                  </p>
                </CardContent>
                <CardFooter>
                  <Button className="w-full font-semibold text-base">
                    Comprar
                  </Button>
                </CardFooter>
              </Card>
            </DialogTrigger>
            <Model cardData={carne} />
          </Dialog>
        ))}
      </div>
    </>
  );
}
