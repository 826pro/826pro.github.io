
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

import {
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { env } from "@/env";

import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

const modelSchema = z.object({
  name: z.string(),
  address: z.string(),
  payment: z.string(),
  title: z.string(),
  description: z.string(),
  photo: z.string(),
  price: z.number(),
});

type ModelSchema = z.infer<typeof modelSchema>;

interface ModelProps {
  cardData: ModelSchema;
}

export function Model({ cardData }: ModelProps) {
  const { register, handleSubmit, setValue } = useForm<ModelSchema>();
  const [error, setError] = useState<string | null>(null);
  console.log(error);

  const GZAPPY_URL = env.VITE_API_URL;

  useEffect(() => {
    setValue("title", cardData.title);
    setValue("description", cardData.description);
    setValue("price", cardData.price);
  }, [cardData]);

  const onSubmit = async (data: ModelSchema) => {
    try {
      // Traduzindo os dados para português antes de enviar
      const translatedData = {
        nome: data.name,
        endereço: data.address,
        pagamento: data.payment,
        título: data.title,
        descrição: data.description,
        foto: data.photo,
        preço: data.price,
      };

      const message = Object.entries(translatedData).map(([key, value]) => `${key}: ${value}`).join("\n");
      const requestBody = {
        instance_id: env.VITE_INSTANCE_ID,
        instance_token: env.VITE_INSTANCE_TOKEN,
        message: message,
        phone: [env.VITE_NUMERO_TELEFONE]
      };
  
      const response = await fetch(GZAPPY_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "user_token_id": env.VITE_USER_TOKEN,
        },
        body: JSON.stringify(requestBody)
      });
  
      if (response.ok) {
        console.log("Mensagem enviada com sucesso!");
        window.location.reload(); 
        toast.success("Pedido enviado com sucesso");
      } else {
        throw new Error("Erro ao enviar mensagem.");
      }
    } catch (error) {
      setError("Erro ao enviar mensagem. Por favor, tente novamente.");
      console.error(error);
      toast.error("Erro ao enviar pedido");
    }
  };
  
  return (
    <DialogContent className="w-72 md:w-auto">
      <DialogHeader>
        <DialogTitle>Dados do seu pedido</DialogTitle>
        <DialogDescription>
          Preencha seus dados para finalizar seu pedido
        </DialogDescription>
      </DialogHeader>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="space-y-4 py-4">
          
          <div className="grid grid-cols-4 items-center gap-4">
            <Input
              className="col-span-3"
              {...register("name")}
              placeholder="Nome"
              required
            />
          </div>

          <div className="grid grid-cols-4 items-center gap-4">
            <Input
              className="col-span-3"
              {...register("address")}
              placeholder="Endereço"
              required
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Select>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder=" Forma de Pagamento" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="cartão">Cartão</SelectItem>
                  <SelectItem value="Pix">Pix</SelectItem>
                  <SelectItem value="Dinheiro">Dinheiro</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>

          <div className="grid grid-cols-4 items-center gap-4">
            <span>Pedido:</span>
            <img className="w-96" src={cardData.photo} alt={cardData.title} />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Input
              className="col-span-3"
              {...register("title")}
              defaultValue={cardData.title}
              readOnly
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Textarea
              className="col-span-3"
              {...register("description")}
              defaultValue={cardData.description}
              readOnly
            />
          </div>
          <div className="relative grid grid-cols-4 items-center gap-4">
            <span className="absolute left-1">R$</span>
            <Input
              className="col-span-3 pl-6"
              {...register("price")}
              value={`R$ ${cardData.price}`}
              readOnly
            />
            <span className="absolute left-[45.5px]">,00</span>
          </div>
        </div>
        <DialogFooter>
          <Button type="submit">Enviar Pedido</Button>
        </DialogFooter>
      </form>
    </DialogContent>
  );
}
