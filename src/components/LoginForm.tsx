import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

export const LoginCard = () => {
  const [tabValue, setTabValue] = useState("login");

  return (
    <div className="relative flex justify-center items-center">
      <div className="absolute -inset-0.5 bg-gradient-to-tr from-green-400 to-blue-500 rounded-full blur-2xl opacity-50"></div>

      <Card className="relative w-full max-w-md md:max-w-lg flex flex-col items-center mx-auto">
        <CardHeader className="mt-8 flex flex-col items-center pb-2">
          <Avatar className="absolute -top-12 w-24 h-24">
            <AvatarImage alt="Logo" src="src/assets/icon-circle.png" />
            <AvatarFallback>MS</AvatarFallback>
          </Avatar>
          <CardTitle className="mt-16 text-center">Bem-vindo(a)!</CardTitle>
        </CardHeader>

        <CardContent className="w-full px-6">
          <Tabs defaultValue="login" value={tabValue} onValueChange={setTabValue}>
            <TabsContent value="login">
              <form>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input
                      type="email"
                      id="email"
                      placeholder="seuemail@exemplo.com"
                    />
                  </div>
                  <div>
                    <Label htmlFor="password">Senha</Label>
                    <Input
                      type="password"
                      id="password"
                      placeholder="Sua senha"
                    />
                  </div>
                  <Button type="submit" className="w-full">
                    Entrar
                  </Button>
                </div>
              </form>
            </TabsContent>

            <TabsContent value="signup">
              <form>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="name">Nome</Label>
                    <Input type="text" id="name" placeholder="Seu nome" />
                  </div>
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input
                      type="email"
                      id="email"
                      placeholder="seuemail@exemplo.com"
                    />
                  </div>
                  <div>
                    <Label htmlFor="password">Senha</Label>
                    <Input
                      type="password"
                      id="password"
                      placeholder="Sua senha"
                    />
                  </div>
                  <Button type="submit" className="w-full">
                    Cadastrar
                  </Button>
                </div>
              </form>
            </TabsContent>

            <TabsList className="grid grid-cols-2 my-4">
              <TabsTrigger value="login">Entrar</TabsTrigger>
              <TabsTrigger value="signup">Cadastrar</TabsTrigger>
            </TabsList>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
};
