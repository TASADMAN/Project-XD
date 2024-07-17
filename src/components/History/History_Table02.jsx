export default function History_Table02(){
    const data = [
        { number: '1', name: 'SNOWMAN FOOTBALL', day: '24/05/1995', time: '12.00-13.00 PM', cancelStatus: 'ยกเลิกแล้ว', refundStatus: 'รอดำเนินการ' },
        { number: '2', name: 'SNOWMAN FOOTBALL', day: '24/05/1995', time: '13.00-14.00 PM', cancelStatus: 'ยกเลิกแล้ว', refundStatus: 'รอดำเนินการ' },
        { number: '3', name: 'SNOWMAN FOOTBALL', day: '24/05/1995', time: '14.00-15.00 PM', cancelStatus: 'ยกเลิกแล้ว', refundStatus: 'รอดำเนินการ' },
        { number: '4', name: 'SNOWMAN FOOTBALL', day: '24/05/1995', time: '15.00-16.00 PM', cancelStatus: 'ยกเลิกแล้ว', refundStatus: 'คืนเงินสำเร็จ' },
      ];
    return(
        <div className="overflow-x-auto p-4 bg-gray-50">
      <h1 className="text-xl font-bold text-gray-800 mb-4">ประวัติการยกเลิก</h1>
      <table className="min-w-full divide-y divide-gray-300 bg-white text-sm shadow-lg rounded-lg">
        <thead className="bg-gray-200">
          <tr>
            <th className="px-6 py-3 text-center text-xs font-semibold text-gray-700 uppercase tracking-wider">ลำดับ</th>
            <th className="px-6 py-3 text-center text-xs font-semibold text-gray-700 uppercase tracking-wider">ชื่อร้าน</th>
            <th className="px-6 py-3 text-center text-xs font-semibold text-gray-700 uppercase tracking-wider">วัน</th>
            <th className="px-6 py-3 text-center text-xs font-semibold text-gray-700 uppercase tracking-wider">เวลา</th>
            <th className="px-6 py-3 text-center text-xs font-semibold text-gray-700 uppercase tracking-wider">สถานะการยกเลิก</th>
            <th className="px-6 py-3 text-center text-xs font-semibold text-gray-700 uppercase tracking-wider">สถานะการคืนเงิน</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {data.map((item, index) => (
            <tr key={index} className="hover:bg-gray-100">
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 text-center">{item.number}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 text-center">{item.name}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 text-center">{item.day}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 text-center">{item.time}</td>
              <td className={`px-6 py-4 whitespace-nowrap text-sm text-center ${item.cancelStatus === 'ยกเลิกแล้ว' ? 'text-red-500' : ''}`}>{item.cancelStatus}</td>
              <td className={`px-6 py-4 whitespace-nowrap text-sm text-center ${item.refundStatus === 'รอดำเนินการ' ? 'text-yellow-500' : item.refundStatus === 'คืนเงินสำเร็จ' ? 'text-green-500' : ''}`}>{item.refundStatus}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    );
}