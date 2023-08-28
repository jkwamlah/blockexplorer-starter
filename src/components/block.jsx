import React, {Component} from 'react';
import Transactions from "./transactions";

export default class Block extends Component {
    state = {
        block: null,
        transactions: null,
        blockNumber: null
    }

    componentDidMount() {
        this.setState({
            block: this.props.block,
            blockNumber: this.props.blockNumber,
            transactions: this.props.transactions
        })
    }

    render() {
        return (
            <div>
                <div className="text-center">
                    <p className="py-5">Block Number: {this.blockNumber} </p>
                </div>

                <div className="lg:col-span-12 md:col-span-6">
                    <div
                        className="group relative rounded-md shadow-sm hover:shadow-lg dark:shadow-gray-800 duration-500 ease-in-out overflow-hidden">
                        <div className="relative overflow-hidden">
                            <div
                                className="absolute inset-0 bg-slate-900/50 opacity-0 group-hover:opacity-100 duration-500 ease-in-out"/>
                        </div>

                        <div className="content p-6 relative">
                            <div
                                className="text-lg font-medium block dark:text-white text-indigo-600 duration-500 ease-in-out mt-2">
                                <span className="dark:text-white">Block Number: {this.blockNumber}</span>
                            </div>
                            <div className="font-medium block text-indigo-600 dark:text-white">
                                <ul className="list-none mt-4">
                                    <li className="inline">
                                        <span className="icons dark:text-gray-400">{this.state.block}</span>
                                    </li>
                                </ul>
                            </div>

                        </div>
                    </div>
                </div>

                <div className="grid md:grid-cols-12 grid-cols-1 items-center mt-16 gap-[30px]">
                    <Transactions transactions={this.transactions}/>
                </div>
            </div>
        )
    }
}