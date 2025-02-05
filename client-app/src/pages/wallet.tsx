import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
 

export default function Wallet(){
  return (
    <div className="flex flex-grow items-center justify-center">
      <Tabs defaultValue="withdraw" className="w-[400px]">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="withdraw">Withdraw</TabsTrigger>
        <TabsTrigger value="deposit">Deposit</TabsTrigger>
      </TabsList>
      <TabsContent value="withdraw">
        <Card>
          <CardContent className="space-y-2 pt-8">
            <div className="space-y-2">
                <div className="relative">
                  <Input className="peer pe-12 ps-6" type="number" />
                  <span className="pointer-events-none absolute inset-y-0 end-0 flex items-center justify-center pe-3 text-sm text-muted-foreground peer-disabled:opacity-50">
                    USDC
                  </span>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Approve</Button>
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="deposit">
          <Card>
            <CardContent className="space-y-2 pt-8">
              <div className="space-y-2">
                <div className="relative">
                  <Input className="peer pe-12 ps-6" type="text" />
                  <span className="pointer-events-none absolute inset-y-0 end-0 flex items-center justify-center pe-3 text-sm text-muted-foreground peer-disabled:opacity-50">
                    USDC
                  </span>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Approve</Button>
            </CardFooter>
          </Card>
        </TabsContent>

      </Tabs>
    </div>
  );
}
