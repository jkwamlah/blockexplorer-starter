import React, {Component} from 'react';

export default class Transactions extends Component {
    state = {
        transactions: []
    }

    componentDidMount() {
        this.setState({
            transactions: this.props.transactions
        })
    }

    render() {
        return (
            <div className="lg:col-span-12 md:col-span-6">
                <div className="py-10">

                    <div className="flex flex-col">
                        <div className="my-2 overflow-x-auto sm:mx-6 lg:mx-2">
                            <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-3">
                                <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                                    <table className="min-w-full divide-y divide-gray-200 px-10 ">
                                        <thead className="bg-gray-50">
                                        <tr>
                                            <th scope="col"
                                                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                Block Number
                                            </th>
                                            <th scope="col"
                                                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                Origin
                                            </th>
                                            <th scope="col"
                                                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                Destination
                                            </th>
                                            <th scope="col"
                                                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                Hash
                                            </th>
                                            <th scope="col"
                                                className="px-1 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                Timestamp
                                            </th>
                                        </tr>
                                        </thead>
                                        <tbody className="bg-white divide-y-2 divide-gray-100 ">
                                        <tr>
                                            <td scope="col"
                                                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">

                                            </td>
                                            <td scope="col"
                                                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">

                                            </td>
                                            <td scope="col"
                                                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">

                                            </td>
                                            <td scope="col"
                                                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">

                                            </td>
                                            <td scope="col"
                                                className="px-1 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">

                                            </td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}