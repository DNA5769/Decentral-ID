import { useContext, useEffect, useState } from "react";
import { TransactionContext } from "../context/TransactionContext";
import { Navigate, useNavigate} from "react-router-dom";
import Nav from "../components/nav";

const Verifier = () => { 
	const { currentAccount,isAdmin } = useContext(TransactionContext);
	const navigate = useNavigate();

  useEffect(() => {
	console.log("SS")
    if (currentAccount != "") {
		console.log(currentAccount)
		if(isAdmin)
          navigate('/admin')
        else 
          navigate('/home')
      };
  }, [currentAccount]);

    return (
		<div className='w-full h-full overflow-x-hidden justify-center items-center'>
				<Nav />
				<div className='w-full h-full flex flex-col items-center'>

				<h1 className="text-4xl pb-10">Verification Panel</h1>
				<table class='w-2/4 rounded-lg border-2 border-gray'>
					<thead class='bg-cyan-500'>
						<tr>
							<th
								scope='col'
								class='text-sm font-medium text-white px-6 py-4 text-left'
							>
								Id
							</th>
							<th
								scope='col'
								class='text-sm font-medium text-white px-6 py-4 text-left'
							>
								Name
							</th>
							<th
								scope='col'
								class='text-sm font-medium text-white px-6 py-4 text-left'
							>
								Verified
							</th>
						</tr>
					</thead>
					<tbody>
						<tr class='bg-gray-100 border-b'>
							<td class='px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900'>
								1
							</td>
							<td class='text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap'>
								Mark
							</td>
							<td class='text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap'>
								Otto
							</td>
						</tr>
						<tr class='bg-white border-b'>
							<td class='px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900'>
								2
							</td>
							<td class='text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap'>
								Jacob
							</td>
							<td class='text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap'>
								Dillan
							</td>
						</tr>
						<tr class='bg-gray-100 border-b'>
							<td class='px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900'>
								3
							</td>
							<td class='text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap'>
								Mark
							</td>
							<td class='text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap'>
								Twen
							</td>
						</tr>
						<tr class='bg-white border-b'>
							<td class='px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900'>
								4
							</td>
							<td class='text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap'>
								Bob
							</td>
							<td class='text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap'>
								Dillan
							</td>
						</tr>
					</tbody>
				</table>
				</div>
			</div>
		)
}

export default Verifier