import React from "react";

function RealTimeTable({ processedData }) {
  return (
    <>
      <div className="bg-gray-800 p-4 rounded-lg shadow-lg col-span-1 lg:col-span-2 flex flex-col justify-center mx-12">
        <h2 className="text-xl font-semibold mb-4">Real-time Updates</h2>
        <table className="table-auto w-full text-left">
          <thead>
            <tr>
              <th className="px-4 py-2">Timestamp</th>
              <th className="px-4 py-2">Source IP</th>
              <th className="px-4 py-2">Destination IP</th>
              <th className="px-4 py-2">Port</th>
              <th className="px-4 py-2">Description</th>
            </tr>
          </thead>
          <tbody>
            {processedData.map((alert, index) => {
              if (index <= 20) {
                return (
                  <tr key={index} className="bg-gray-700">
                    <td className="border px-4 py-2">
                      {alert.timestamp.toLocaleString("en-US", {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                        hour: "2-digit",
                        minute: "2-digit",
                        second: "2-digit",
                        timeZoneName: "short",
                      })}
                    </td>
                    <td className="border px-4 py-2">{alert.src_ip}</td>
                    <td className="border px-4 py-2">{alert.dest_ip}</td>
                    <td className="border px-4 py-2">{alert.dest_port}</td>
                    <td className="border px-4 py-2">
                      {alert.alert?.signature}
                    </td>
                  </tr>
                );
              }
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default RealTimeTable;
