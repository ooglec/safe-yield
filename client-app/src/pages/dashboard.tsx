import { Button } from "@/components/ui/button"
import { BadgeInfo, DollarSign, RefreshCcw, TrendingUp, Triangle } from "lucide-react"
import { CartesianGrid, Line, LineChart, XAxis } from "recharts"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"

const chartData = [
  { month: "Jan", performance: 75 },
  { month: "Feb", performance: 80 },
  { month: "Mar", performance: 85 },
  { month: "Apr", performance: 90 },
  { month: "May", performance: 92 },
  { month: "Jun", performance: 88 },
  { month: "Jul", performance: 85 },
  { month: "Aug", performance: 80 },
  { month: "Sep", performance: 78 },
  { month: "Oct", performance: 82 },
  { month: "Nov", performance: 90 },
  { month: "Dec", performance: 95 },
]

const chartConfig = {
  performance: {
    label: "Performance",
    color: "hsl(var(--primary))",
  },
} satisfies ChartConfig


const Dashboard = () => {
  return (
    <div className="flex gap-8 flex-col w-full items-center justify-center">
      <div className="container">
        <h3 className="scroll-m-20 pb-2 text-2xl font-bold tracking-tight first:mt-0 text-primary self-start">
          Trading Account Dashboard
        </h3>
        

      </div>
      <div className="flex flex-row gap-4 items-center justify-end w-full">
        <Button variant="outline" className="border-primary rounded-3xl text-primary">
          PNL%
          <Triangle className="rotate-180 fill-primary" />
        </Button>
        <Button className="rounded-3xl">
          REFRESH
          <RefreshCcw />
        </Button>
      </div>
      <div className='flex flex-col lg:flex-row  lg:gap-2 gap-4 justify-center'>
        <div className='flex flex-row px-4 h-20 items-start gap-4 p-card items-center min-w-48 bg-gradient-to-b from-white/20 to-white/5 border border-[#4CFAC7] text-[#4CFAC7] rounded-3xl'>
          <div className='inline-block p-1.5 w-min h-min rounded-xl bg-gradient-to-b from-white/20 to-white/5'>
            <DollarSign className='w-8 h-8 stroke-2' />
          </div>
          <div className='flex flex-col'>
            <span className='text-white font-medium text-xs'>
              Initial Balance
            </span>
            <span className='font-bold text-lg'>
              $999.83
            </span>
            
          </div>
          <Popover>
            <PopoverTrigger>
          <Button className="self-start" variant="ghost" size="icon">
            <BadgeInfo />
          </Button>    
            </PopoverTrigger>
            <PopoverContent>
              <div className="flex flex-row items-center justify-center gap-8 w-md">
                <span> 120 $USDC</span>
                <Button>Claim</Button>
              </div>
            </PopoverContent>
          </Popover>

                    
        </div>
        <div className='flex flex-row px-4 h-20 items-start gap-4 p-card items-center min-w-48 bg-gradient-to-b from-white/20 to-white/5 border border-[#4CFAC7] text-[#4CFAC7] rounded-3xl'>
          <div className='inline-block p-1.5 w-min h-min rounded-xl bg-gradient-to-b from-white/20 to-white/5'>
            <DollarSign className='w-8 h-8 stroke-2' />
          </div>
          <div className='flex flex-col gap-2'>
            <span className='text-white font-medium text-xs'>
              Initial Balance
            </span>
            <span className='font-bold text-lg'>
              $999.83
            </span>
          </div> 
        </div>
        <div className='flex flex-row px-4 h-20 items-start gap-4 p-card items-center min-w-48 bg-gradient-to-b from-white/20 to-white/5 border border-[#4CFAC7] text-[#4CFAC7] rounded-3xl'>
          <div className='inline-block p-1.5 w-min h-min rounded-xl bg-gradient-to-b from-white/20 to-white/5'>
            <DollarSign className='w-8 h-8 stroke-2' />
          </div>
          <div className='flex flex-col gap-2'>
            <span className='text-white font-medium text-xs'>
              Initial Balance
            </span>
            <span className='font-bold text-lg'>
              $999.83
            </span>
          </div> 
        </div>
        <div className='flex flex-row px-4 h-20 items-start gap-4 p-card items-center min-w-48 bg-gradient-to-b from-white/20 to-white/5 border border-[#4CFAC7] text-[#4CFAC7] rounded-3xl'>
          <div className='inline-block p-1.5 w-min h-min rounded-xl bg-gradient-to-b from-white/20 to-white/5'>
            <DollarSign className='w-8 h-8 stroke-2' />
          </div>
          <div className='flex flex-col gap-2'>
            <span className='text-white font-medium text-xs'>
              Initial Balance
            </span>
            <span className='font-bold text-lg'>
              $999.83
            </span>
          </div> 
        </div>
        <div className='flex flex-row px-4 h-20 items-start gap-4 p-card items-center min-w-48 bg-gradient-to-b from-white/20 to-white/5 border border-[#4CFAC7] text-[#4CFAC7] rounded-3xl'>
          <div className='inline-block p-1.5 w-min h-min rounded-xl bg-gradient-to-b from-white/20 to-white/5'>
            <DollarSign className='w-8 h-8 stroke-2' />
          </div>
          <div className='flex flex-col gap-2'>
            <span className='text-white font-medium text-xs'>
              Initial Balance
            </span>
            <span className='font-bold text-lg'>
              $999.83
            </span>
          </div> 
        </div>
        
      </div>
      <Card className="text-primary w-full max-w-lg">
      <CardHeader>
        <CardTitle>Line Chart</CardTitle>
        <CardDescription>January - June 2024</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <LineChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Line
              dataKey="performance"
              type="natural"
              stroke="var(--color-performance)"
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
    </Card>
    </div>
  )
}

export default Dashboard
