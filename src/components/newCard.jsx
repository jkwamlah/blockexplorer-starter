import React, {Component} from "react";
import {list} from "../services/alchemyService"
import ethereumLogo from "../assets/images/ethereum-logo.png"


export default class MovieCard extends Component {
    state = {
        movie: {}
    }

    componentDidMount() {
        this.setState({movie: this.props.movie})
    }

    getRating() {
        const rating = this.props.movie.rating;
        const totalStars = 5;
        const items = [];

        for (let i = 0; i < totalStars; i++) {
            const starClass = i < rating ? "text-yellow-500" : "";

            items.push(<i key={i} className={`uil uil-star align-middle ${starClass}`} title="star"/>);
        }

        return items;
    }

    handleFavorite(movie) {
        let updatedMovie = {...movie}
        updatedMovie.favorite = !updatedMovie.favorite
        this.setState({movie: updatedMovie})
        console.log(this.state.movie)
    }


    render() {
        return (
            <div className="lg:col-span-3 md:col-span-6">
                <div
                    className="group relative rounded-md shadow hover:shadow-lg dark:shadow-gray-800 duration-500 ease-in-out overflow-hidden">
                    <div className="relative overflow-hidden">
                        <img src={this.state.movie.banner}
                             className="group-hover:scale-110 duration-500 ease-in-out h-200" alt=""/>
                        <div
                            className="absolute inset-0 bg-slate-900/50 opacity-0 group-hover:opacity-100 duration-500 ease-in-out"/>
                    </div>

                    <div className="content p-6 relative">
                        <div
                            className="text-lg font-medium block dark:text-white text-indigo-600 duration-500 ease-in-out mt-2">
                            <span className="dark:text-white">{this.state.movie.title}</span>
                        </div>
                        <div className="font-medium block text-indigo-600 dark:text-white">
                            <ul className="list-none mt-4">
                                <li className="inline">
                                    <span className="icons dark:text-gray-400">{this.getRating()}</span>
                                </li>
                            </ul>
                        </div>
                        <p className="text-slate-400 mt-3 mb-4">{this.state.movie.description}</p>

                        <ul className="pt-4 border-t border-gray-100 dark:border-gray-800 flex items-center justify-between list-none text-slate-400">
                            <li className="flex items-center me-4">
                                <i className="uil uil-clock text-lg leading-none me-2 text-slate-900 dark:text-white"/>
                                <span>{this.state.movie.runtime}</span>
                            </li>

                            <li className="flex items-center">
                                <i className="uil uil-eye text-lg leading-none me-2 text-slate-900 dark:text-white"/>
                                <span>{this.state.movie.year}</span>
                            </li>
                        </ul>

                        <div
                            className="absolute -top-7 end-6 z-1 opacity-0 group-hover:opacity-100 duration-500 ease-in-out">
                            <div
                                className="flex justify-center items-center w-14 h-14 bg-white dark:bg-slate-900 rounded-full shadow-lg dark:shadow-gray-800 text-indigo-600 dark:text-white">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}