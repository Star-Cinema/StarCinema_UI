
import { TbAlertCircle } from "react-icons/tb";
function Transactions() {
    return (
        <table className="table">
            <thead>
                <tr>
                    <th scope="col">Mã giao dịch</th>
                    <th scope="col">Ngày</th>
                    <th scope="col">Phim</th>
                    <th scope="col">Đơn giá</th>
                    <th scope="col"></th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th scope="row">ADFDF12</th>
                    <td>12/12/2022</td>
                    <td>50 sắc thái đen</td>
                    <td>230000</td>
                    <td><button className="btn"><TbAlertCircle /></button></td>
                </tr>
                <tr>
                <th scope="row">ADFDF12</th>
                    <td>12/12/2022</td>
                    <td>50 sắc thái đen</td>
                    <td>230000</td>
                    <td><button className="btn"><TbAlertCircle /></button></td>
                </tr>
                <tr>
                <th scope="row">ADFDF12</th>
                    <td>12/12/2022</td>
                    <td>50 sắc thái đen</td>
                    <td>230000</td>
                    <td><button className="btn"><TbAlertCircle /></button></td>
                </tr>
            </tbody>
        </table>
    );
}

export default Transactions;
