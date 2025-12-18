import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Wallet, AlertCircle } from "lucide-react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

const budgetData = [
  { name: "Flights", value: 16000, color: "hsl(200, 80%, 55%)" },
  { name: "Hotels", value: 12000, color: "hsl(174, 60%, 40%)" },
  { name: "Activities", value: 8000, color: "hsl(174, 60%, 60%)" },
  { name: "Food", value: 5000, color: "hsl(200, 60%, 70%)" },
  { name: "Transport", value: 4000, color: "hsl(174, 40%, 70%)" },
];

const totalBudget = 45000;
const totalSpent = budgetData.reduce((sum, item) => sum + item.value, 0);
const remaining = totalBudget - totalSpent;

const donutData = [
  { name: "Spent", value: totalSpent, color: "hsl(200, 80%, 55%)" },
  { name: "Remaining", value: remaining, color: "hsl(174, 60%, 40%)" },
];

const groupSplit = [
  { name: "Rahul", amount: 11250 },
  { name: "Priya", amount: 11250 },
  { name: "Amit", amount: 11250 },
  { name: "Sneha", amount: 11250 },
];

const BudgetDashboard = () => {
  return (
    <div className="space-y-4">
      {/* Main Budget Card */}
      <Card className="bg-card border-0 shadow-soft rounded-2xl">
        <CardHeader className="pb-2">
          <CardTitle className="text-lg font-semibold text-foreground flex items-center gap-2">
            <Wallet className="w-5 h-5 text-teal" />
            Smart Budget
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center gap-6">
            {/* Donut Chart */}
            <div className="w-32 h-32">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={donutData}
                    cx="50%"
                    cy="50%"
                    innerRadius={35}
                    outerRadius={50}
                    paddingAngle={2}
                    dataKey="value"
                  >
                    {donutData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
            </div>

            {/* Budget Summary */}
            <div className="flex-1 space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">Total Budget</span>
                <span className="font-bold text-foreground">₹{totalBudget.toLocaleString()}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-sky">Allocated</span>
                <span className="font-medium text-sky">₹{totalSpent.toLocaleString()}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-teal">Remaining</span>
                <span className="font-medium text-teal">₹{remaining.toLocaleString()}</span>
              </div>
            </div>
          </div>

          {/* Category Breakdown */}
          <div className="mt-4 space-y-2">
            {budgetData.map((item) => (
              <div key={item.name} className="flex items-center gap-2">
                <div 
                  className="w-3 h-3 rounded-full" 
                  style={{ backgroundColor: item.color }}
                />
                <span className="text-xs text-muted-foreground flex-1">{item.name}</span>
                <span className="text-xs font-medium text-foreground">
                  ₹{item.value.toLocaleString()}
                </span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Rebalancing Alert */}
      <Card className="bg-sky-light border-0 shadow-soft rounded-2xl">
        <CardContent className="p-4">
          <div className="flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-sky flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-sm font-semibold text-foreground mb-1">
                Live Rebalancing
              </p>
              <p className="text-xs text-muted-foreground">
                Flight prices rose by ₹1500. We swapped Day 2 Hotel from deluxe to standard, saving ₹2500. Your budget is safe! 🎉
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Group Split */}
      <Card className="bg-card border-0 shadow-soft rounded-2xl">
        <CardHeader className="pb-2">
          <CardTitle className="text-sm font-semibold text-foreground">
            Group Split
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            {groupSplit.map((person) => (
              <div 
                key={person.name} 
                className="flex justify-between items-center py-2 border-b border-border last:border-0"
              >
                <span className="text-sm text-foreground">{person.name}</span>
                <span className="text-sm font-semibold text-teal">
                  ₹{person.amount.toLocaleString()}
                </span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default BudgetDashboard;
