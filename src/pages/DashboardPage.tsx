import { useEffect, useState } from 'react';
import { getLeads, type LeadRecord  } from '../services/GoogleSheetsService';
import { Users, Download, TrendingUp, Mail, BarChart3 } from 'lucide-react';

export default function DashboardPage() {
  const [leads, setLeads] = useState<LeadRecord[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLeads = async () => {
      const data = await getLeads();
      setLeads(data);
      setLoading(false);
    };
    fetchLeads();
  }, []);

  const programCounts = leads.reduce((acc, lead) => {
    acc[lead.programInterest] = (acc[lead.programInterest] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  const last7Days = Array.from({ length: 7 }, (_, i) => {
    const date = new Date();
    date.setDate(date.getDate() - (6 - i));
    return date.toISOString().split('T')[0];
  });

  const dailyCounts = leads.reduce((acc, lead) => {
    const date = new Date(lead.timestamp).toISOString().split('T')[0];
    acc[date] = (acc[date] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  const chartData = last7Days.map((date) => ({
    date,
    count: dailyCounts[date] || 0,
  }));

  const maxCount = Math.max(...chartData.map(d => d.count), 1);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 pt-20">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-fl-blue border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">Loading dashboard...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 mobile:px-6 desktop:px-8 py-12">
        <div className="mb-8">
          <h1 className="text-3xl desktop:text-4xl font-bold text-black mb-2">
            Admin Dashboard
          </h1>
          <p className="text-gray-600">Overview of lead submissions and program interest</p>
        </div>

          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <div className="flex items-center justify-between mb-4">
              <div className=''>
              <h3 className="text-black text-2xl font-bold mb-1">About your data</h3>
              <p className=" text-black">You can see your data being filled in real time or download the spreadsheet <a className='font-semibold underline text-blue-600' target="_blank" href="https://docs.google.com/spreadsheets/d/1_a-30v1kCeKZkupc9u3AgFn6nHgudkcx9JEFuwDOB-0/edit?usp=sharing">here</a>🔗</p>
              </div>
              <Download className="w-8 h-8 mobile:w-20 text-green-600" />
            </div>
          </div>
        
        <div className="grid mobile:grid-cols-1 desktop:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-gray-600 font-semibold">Total Leads</h3>
              <Users className="w-8 h-8 text-fl-blue" />
            </div>
            <p className="text-4xl font-bold text-black">{leads.length}</p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-gray-600 font-semibold">This Week</h3>
              <TrendingUp className="w-8 h-8 text-fl-blue" />
            </div>
            <p className="text-4xl font-bold text-black">
              {chartData.reduce((sum, day) => sum + day.count, 0)}
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-gray-600 font-semibold">Most Popular</h3>
              <BarChart3 className="w-8 h-8 text-fl-blue" />
            </div>
            <p className="text-lg font-bold text-black">
              {Object.entries(programCounts).sort((a, b) => b[1] - a[1])[0]?.[0]?.split('(')[0] || 'N/A'}
            </p>
          </div>
        </div>

       
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-xl font-bold text-black mb-6">Leads by Program</h2>
          <div className="space-y-4">
            {Object.entries(programCounts)
              .sort((a, b) => b[1] - a[1])
              .map(([program, count]) => {
                const percentage = (count / leads.length) * 100;
                return (
                  <div key={program}>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-700 font-medium">{program}</span>
                      <span className="text-gray-600">{count} leads</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div
                        className="bg-fl-blue h-3 rounded-full transition-all duration-500"
                        style={{ width: `${percentage}%` }}
                      ></div>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>

       
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-xl font-bold text-black mb-6">Leads - Last 7 Days</h2>
          <div className="flex items-end justify-between h-64 gap-4">
            {chartData.map((day, index) => (
              <div key={index} className="flex-1 flex flex-col items-center">
                <div className="w-full flex items-end justify-center h-52">
                  <div
                    className="w-full bg-fl-blue rounded-t-lg transition-all duration-500 hover:bg-blue-700"
                    style={{
                      height: `${(day.count / maxCount) * 100}%`,
                      minHeight: day.count > 0 ? '20px' : '0px',
                    }}
                  ></div>
                </div>
                <div className="mt-2 text-center">
                  <p className="text-sm font-semibold text-gray-700">{day.count}</p>
                  <p className="text-xs text-gray-500">
                    {new Date(day.date).toLocaleDateString('en-US', { 
                      month: 'short', 
                      day: 'numeric' 
                    })}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-bold text-black mb-6">All Submissions</h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 px-4 text-gray-600 font-semibold">Date</th>
                  <th className="text-left py-3 px-4 text-gray-600 font-semibold">Name</th>
                  <th className="text-left py-3 px-4 text-gray-600 font-semibold">Email</th>
                  <th className="text-left py-3 px-4 text-gray-600 font-semibold">Program</th>
                </tr>
              </thead>
              <tbody>
                {leads.slice(-10).reverse().map((lead, index) => (
                  <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="py-3 px-4 text-gray-700">
                      {new Date(lead.timestamp).toLocaleDateString('en-US', {
                        month: 'short',
                        day: 'numeric',
                        year: 'numeric',
                      })}
                    </td>
                    <td className="py-3 px-4 text-gray-700">{lead.fullName}</td>
                    <td className="py-3 px-4 text-gray-700">
                      <div className="flex items-center gap-2">
                        <Mail className="w-4 h-4 text-gray-400" />
                        {lead.email}
                      </div>
                    </td>
                    <td className="py-3 px-4">
                      <span className="inline-block bg-fl-blue desktop:px-3 desktop:rounded-full desktop:py-1 mobile:px-3 mobile:rounded-2xl text-white px-3 py-1  text-sm font-semibold">
                        {lead.programInterest}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            {leads.length === 0 && (
              <div className="text-center py-12 text-gray-500">
                No leads yet. Start collecting data!
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}