import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
import { DollarSign } from "lucide-react"
import { CartesianGrid, Line, LineChart, XAxis } from "recharts"

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
    <div className="flex gap-8 flex-col w-full items-center justify-center mt-20">
      <div className='flex flex-col lg:flex-row lg:gap-2 gap-4 justify-center'>
        <div className='flex flex-row h-32 p-card items-center min-w-48 bg-gradient-to-b from-white/20 to-white/5 border border-[#4CFAC7] text-[#4CFAC7] rounded-3xl'>
          <div className='flex flex-col items-center w-full'>
            <span className='text-white font-medium text-sm'>
              Staked $SAY
            </span>
            <span className='font-bold text-lg'>
              36.20
            </span>
            <span className='text-white font-medium text-sm'>
              Airdrop $SAY
            </span>
            <div className="flex flex-row gap-3">
              <span className='font-bold text-lg'>
                2.20
              </span>
              <button className="bg-[#9999FF] rounded-full px-5 my-1 text-white font-bold text-xs">
                Claim
              </button>
            </div>
          </div>
        </div>


        <div className='flex flex-row px-4 h-32 gap-4 p-card items-center min-w-48 bg-gradient-to-b from-white/20 to-white/5 border border-[#4CFAC7] text-[#4CFAC7] rounded-3xl'>
          <div className='inline-block p-1.5 w-min h-min rounded-xl bg-gradient-to-b from-white/20 to-white/5'>
            <DollarSign className='w-8 h-8 stroke-2' />
          </div>
          <div className='flex flex-col gap-2'>
            <span className='text-white font-medium text-sm'>
              Account Balance
            </span>
            <span className='font-bold text-xl'>
              $1011.56
            </span>
          </div>
        </div>

        <div className='flex flex-row px-4 h-32 gap-4 p-card items-center min-w-48 bg-gradient-to-b from-white/20 to-white/5 border border-[#4CFAC7] text-[#4CFAC7] rounded-3xl'>
          <div className='inline-block p-1.5 w-min h-min rounded-xl bg-gradient-to-b from-white/20 to-white/5'>
            <DollarSign className='w-8 h-8 stroke-2' />
          </div>
          <div className='flex flex-col gap-2'>
            <span className='text-white font-medium text-sm'>
              Average APY
            </span>
            <span className='font-bold text-xl'>
              2.5%
            </span>
          </div>
        </div>
        <div className='flex flex-row px-4 h-32 gap-4 p-card items-center min-w-48 bg-gradient-to-b from-white/20 to-white/5 border border-[#4CFAC7] text-[#4CFAC7] rounded-3xl'>
          <div className='inline-block p-1.5 w-min h-min rounded-xl bg-gradient-to-b from-white/20 to-white/5'>
            <DollarSign className='w-8 h-8 stroke-2' />
          </div>
          <div className='flex flex-col gap-2'>
            <span className='text-white font-medium text-sm'>
              PNL
            </span>
            <span className='font-bold text-xl'>
              $11.56
            </span>
          </div>
        </div>
        <div className='flex flex-row px-4 h-32 gap-4 p-card items-center min-w-48 bg-gradient-to-b from-white/20 to-white/5 border border-[#4CFAC7] text-[#4CFAC7] rounded-3xl'>
          <div className='inline-block p-1.5 w-min h-min rounded-xl bg-gradient-to-b from-white/20 to-white/5'>
            <DollarSign className='w-8 h-8 stroke-2' />
          </div>
          <div className='flex flex-col gap-2'>
            <span className='text-white font-medium text-sm'>
              Today's PNL
            </span>
            <span className='font-bold text-xl'>
              $4.56
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
