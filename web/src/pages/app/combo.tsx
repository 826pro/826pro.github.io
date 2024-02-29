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

export function Combo() {
  const [cambo, setCambo] = useState<Product[]>([]);

  useEffect(() => {
    async function fetchCambo() {
      try {
        const response = await fetch(
          "http://localhost:3333/products/category/1"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data: { products: Product[] } = await response.json();
        setCambo(data.products);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchCambo();
  }, []);

  return (
    <>
      <Helmet title="Cambo" />
      <div className="flex gap-5 flex-wrap justify-center items-center w-[250px] md:justify-around md:w-[950px]">
        {cambo.map((product) => (
          <Dialog key={product.id}>
            <DialogTrigger asChild>
              <Card className="w-52 md:h-[450px] mt-5 md:w-96">
                <CardHeader>
                  <img
                    className="w-auto h-40 object-cover"
                    src={product.photo}
                    alt={product.title}
                  />
                </CardHeader>
                <CardContent>
                  <CardTitle>{product.title}</CardTitle>
                </CardContent>
                <CardContent>
                  <CardDescription>{product.description}</CardDescription>
                </CardContent>
                <CardContent>
                  <p>
                    {product.price.toLocaleString("pt-BR", {
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
            <Model cardData={product} />
          </Dialog>
        ))}
      </div>
    </>
  );
}
