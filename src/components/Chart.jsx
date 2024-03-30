import React from "react";
import Stack from "@mui/material/Stack";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { LineChart } from "@mui/x-charts/LineChart";
import InsightsIcon from "@mui/icons-material/Insights";
import Button from "@mui/material/Button";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import MicrosoftIcon from "@mui/icons-material/Microsoft";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PeopleIcon from "@mui/icons-material/People";
import BarChartIcon from "@mui/icons-material/BarChart";
import ForumIcon from "@mui/icons-material/Forum";
import AutoAwesomeMotionIcon from "@mui/icons-material/AutoAwesomeMotion";
import LocalCafeIcon from "@mui/icons-material/LocalCafe";
import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData(
    "16 Mar, 2019",
    "Elves Presley",
    "Tupelo, MS",
    "VISA ....3719",
    "$312.44",
  ),
  createData(
    "16 Mar, 2019",
    "Paul McCartney",
    "London, UK",
    "AMEX ....2000",
    "$654.39",
  ),
  createData(
    "16 Mar, 2019",
    "Tom Scholz",
    "Boston, MA",
    "VISA ....2574",
    "$212.79",
  ),
  createData(
    "16 Mar, 2019",
    "Michael Jackson",
    "Gary, IN",
    "MC ....1253",
    "$866.99",
  ),
];

export const Chart = () => {
  const [connectNulls, setConnectNulls] = React.useState(true);
  return (
    <>
      <div className="container relative top-[300px] right-5">
        <div className="w-[1200px] h-[908px] border border-blue-200 rounded-2xl shadow-2xl">
          <div className="flex justify-between p-8 h-[60px] border border-blue-200 rounded-2xl">
            <div className="flex space-x-6">
              <LocalCafeIcon className="text-red-300 relative bottom-3" />
              <h2 className="text-3xl font-semibold relative bottom-5">Aura</h2>
            </div>

            <div className="rounded-[50%] w-[40px] h-[40px] border border-blue-400 relative bottom-5">
              <AccessAlarmIcon className="mt-2 ml-2 text-blue-900" />
            </div>
          </div>

          <div className="flex space-x-10">
            <div className="w-[300px] h-[840px] border border-blue-300 rounded-xl p-8">
              <p className="text-gray-400 font-semibold">Main items</p>

              <div className="flex space-x-2 hover:bg-blue-50 w-[250px] h-[50px] rounded-2xl relative right-5 mt-2 hover:border-2 hover:border-blue-300 pl-5">
                <MicrosoftIcon className="mt-3 text-gray-400 hover:text-blue-600" />
                <h2 className="hover:text-blue-600 font-semibold text-xl text-gray-700 mt-[10px]">
                  Dashboard
                </h2>
              </div>

              <div className="flex space-x-2 hover:bg-blue-50 w-[250px] h-[50px] rounded-2xl relative right-5 mt-2 hover:border-2 hover:border-blue-300 pl-5">
                <ShoppingCartIcon className="mt-3 text-gray-400 hover:text-blue-600" />
                <h2 className="hover:text-blue-600 font-semibold text-xl text-gray-700 mt-[10px]">
                  Orders
                </h2>
              </div>

              <div className="flex space-x-2 hover:bg-blue-50 w-[250px] h-[50px] rounded-2xl relative right-5 mt-2 hover:border-2 hover:border-blue-300 pl-5">
                <PeopleIcon className="mt-3 text-gray-400 hover:text-blue-600" />
                <h2 className="hover:text-blue-600 font-semibold text-xl text-gray-700 mt-[10px]">
                  Customers
                </h2>
              </div>

              <div className="flex space-x-2 hover:bg-blue-50 w-[250px] h-[50px] rounded-2xl relative right-5 mt-2 hover:border-2 hover:border-blue-300 pl-5">
                <BarChartIcon className="mt-3 text-gray-400 hover:text-blue-600" />
                <h2 className="hover:text-blue-600 font-semibold text-xl text-gray-700 mt-[10px]">
                  Reports
                </h2>
              </div>

              <div className="flex space-x-2 hover:bg-blue-50 w-[250px] h-[50px] rounded-2xl relative right-5 mt-2 hover:border-2 hover:border-blue-300 pl-5">
                <ForumIcon className="mt-3 text-gray-400 hover:text-blue-600" />
                <h2 className="hover:text-blue-600 font-semibold text-xl text-gray-700 mt-[10px]">
                  Integrations
                </h2>
              </div>

              <div className="w-[270px] h-[6px] bg-blue-50 mt-6 relative right-4"></div>

              <p className="text-gray-400 font-semibold mt-6">Custom reports</p>

              <div className="flex space-x-2 hover:bg-blue-50 w-[250px] h-[50px] rounded-2xl relative right-5 mt-2 hover:border-2 hover:border-blue-300 pl-5">
                <AutoAwesomeMotionIcon className="mt-3 text-gray-400 hover:text-blue-600" />
                <h2 className="hover:text-blue-600 font-semibold text-xl text-gray-700 mt-[10px]">
                  Current month
                </h2>
              </div>

              <div className="flex space-x-2 hover:bg-blue-50 w-[250px] h-[50px] rounded-2xl relative right-5 mt-2 hover:border-2 hover:border-blue-300 pl-5">
                <AutoAwesomeMotionIcon className="mt-3 text-gray-400 hover:text-blue-600" />
                <h2 className="hover:text-blue-600 font-semibold text-xl text-gray-700 mt-[10px]">
                  Last quarter
                </h2>
              </div>

              <div className="flex space-x-2 hover:bg-blue-50 w-[250px] h-[50px] rounded-2xl relative right-5 mt-2 hover:border-2 hover:border-blue-300 pl-5">
                <AutoAwesomeMotionIcon className="mt-3 text-gray-400 hover:text-blue-600" />
                <h2 className="hover:text-blue-600 font-semibold text-xl text-gray-700 mt-[10px]">
                  Year-end sale
                </h2>
              </div>

              <div className="w-[270px] h-[6px] bg-blue-50 mt-2 relative right-4"></div>

              <p className="text-gray-400 font-semibold mt-6">
                Favorited groups
              </p>

              <div className="flex space-x-2 hover:bg-blue-50 w-[250px] h-[50px] rounded-2xl relative right-5 mt-2 hover:border-2 hover:border-blue-300 pl-5">
                <PeopleIcon className="mt-3 text-gray-400 hover:text-blue-600" />
                <h2 className="hover:text-blue-600 font-semibold text-xl text-gray-700 mt-[10px]">
                  Sales team
                </h2>
              </div>

              <div className="flex space-x-2 hover:bg-blue-50 w-[250px] h-[50px] rounded-2xl relative right-5 mt-2 hover:border-2 hover:border-blue-300 pl-5">
                <PeopleIcon className="mt-3 text-gray-400 hover:text-blue-600" />
                <h2 className="hover:text-blue-600 font-semibold text-xl text-gray-700 mt-[10px]">
                  Design team
                </h2>
              </div>

              <div className="flex space-x-2 hover:bg-blue-50 w-[250px] h-[50px] rounded-2xl relative right-5 mt-2 hover:border-2 hover:border-blue-300 pl-5">
                <PeopleIcon className="mt-3 text-gray-400 hover:text-blue-600" />
                <h2 className="hover:text-blue-600 font-semibold text-xl text-gray-700 mt-[10px]">
                  C-level
                </h2>
              </div>
            </div>

            <div className="mt-10">
              <div className="flex space-x-10">
                {/* chart */}
                <div className="">
                  <Stack
                    sx={{ width: "100%" }}
                    className="border rounded-2xl p-10"
                  >
                    <FormControlLabel
                      control={
                        <Checkbox
                          onChange={(event) =>
                            setConnectNulls(event.target.checked)
                          }
                        />
                      }
                      label="Today"
                      labelPlacement="end"
                    />
                    <LineChart
                      xAxis={[
                        { data: [1, 2, 3, 5, 8, 10, 12, 15, 16, 18, 20] },
                      ]}
                      series={[
                        {
                          data: [2, 5, 6.5, 3, 8, 10, 9.5, 2.5, 6, 10, 8],
                        },
                        {
                          data: [null, null, 5.5, 2, null, null, 8.5, 1.5, 5],
                          connectNulls,
                          area: true,
                        },
                      ]}
                      height={200}
                      margin={{ top: 10, bottom: 20 }}
                    />
                  </Stack>
                </div>

                {/* chart */}

                <div className="border rounded-2xl w-[300px] border-blue-300 h-[320px] p-4">
                  <h2 className="font-semibold text-2xl">Deposits</h2>

                  <div className="w-[50px] h-[50px] mt-5 bg-blue-100 rounded-xl border-blue-500 p-2 pl-3 border">
                    <InsightsIcon className="text-blue-700" />
                  </div>

                  <h1 className="text-blue-700 font-bold text-4xl mt-4">
                    $3,024.00
                  </h1>
                  <p className="text-gray-600 mt-6">As of March 14th, 2023</p>

                  <div>
                    <Button
                      variant="outlined"
                      sx={{
                        background: "#e0f2fe",
                        color: "#0c4a6e",
                        width: "250px",
                        marginTop: "40px",
                        borderRadius: "10px",
                      }}
                    >
                      View balance
                    </Button>
                  </div>
                </div>
              </div>

              <div className="mt-12">
                <TableContainer
                  // component={Paper}
                  sx={{ borderRadius: "10px", padding: "10px" }}
                >
                  <h2 className="ml-3 font-bold text-xl">Recent orders</h2>
                  <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                      <TableRow>
                        <TableCell>Date</TableCell>
                        <TableCell align="justify">Name</TableCell>
                        <TableCell align="justify">Ship to</TableCell>
                        <TableCell align="justify">Payment method</TableCell>
                        <TableCell align="justify">Sale amount</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {rows.map((row) => (
                        <TableRow
                          key={row.name}
                          sx={{
                            "&:last-child td, &:last-child th": { border: 0 },
                          }}
                        >
                          <TableCell component="th" scope="row">
                            {row.name}
                          </TableCell>
                          <TableCell align="justify">{row.calories}</TableCell>
                          <TableCell align="justify">{row.fat}</TableCell>
                          <TableCell align="justify">{row.carbs}</TableCell>
                          <TableCell align="justify">{row.protein}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
