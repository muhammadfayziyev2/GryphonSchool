'use client'

import React from 'react'

const About = () => {
    return (
        <div id="about" className="min-h-screen flex items-center relative py-12 sm:py-16 md:py-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-5xl mx-auto">
                    <div className="text-center md:text-left mb-8 md:mb-12">
                        <div className="mb-3">
                            <h2 className="gryphon text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                                Почему GRYPHON SCHOOL?
                            </h2>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 items-start">
                        {/* Card 1 */}
                        <div className="relative group">
                            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-xl blur-sm group-hover:bg-indigo-500/30 transition-all duration-500"></div>
                            <div className="relative bg-gray-900/70 backdrop-blur-lg border border-indigo-500/20 p-4 sm:p-6 rounded-xl shadow-xl group-hover:border-indigo-500/40 transition-all duration-300">
                                <p className="text-gray-400 text-base sm:text-lg">
                                    Gryphon — первый образовательный центр в Каттакургане с собственным сайтом!
                                </p>
                            </div>
                        </div>

                        {/* Card 2 */}
                        <div className="relative group">
                            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-xl blur-sm group-hover:bg-purple-500/30 transition-all duration-500"></div>
                            <div className="relative bg-gray-900/70 backdrop-blur-lg border border-purple-500/20 p-4 sm:p-6 rounded-xl shadow-xl group-hover:border-purple-500/40 transition-all duration-300">
                                <p className="text-gray-400 text-base sm:text-lg">
                                    Мы специализируемся на обучении Английскому и Русскому языку.
                                </p>
                            </div>
                        </div>

                        {/* Card 3 */}
                        <div className="relative group">
                            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-xl blur-sm group-hover:bg-purple-500/30 transition-all duration-500"></div>
                            <div className="relative bg-gray-900/70 backdrop-blur-lg border border-purple-500/20 p-4 sm:p-6 rounded-xl shadow-xl group-hover:border-purple-500/40 transition-all duration-300">
                                <p className="text-gray-400 text-base sm:text-lg">
                                    Наши учителя — это не только профессионалы, но и наставники, которые помогают каждому освоить материал легко и с уверенностью.
                                </p>
                            </div>
                        </div>

                        {/* Card 4 */}
                        <div className="relative group">
                            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-xl blur-sm group-hover:bg-purple-500/30 transition-all duration-500"></div>
                            <div className="relative bg-gray-900/70 backdrop-blur-lg border border-purple-500/20 p-4 sm:p-6 rounded-xl shadow-xl group-hover:border-purple-500/40 transition-all duration-300">
                                <p className="text-gray-400 text-base sm:text-lg">
                                    Индивидуальный подход к каждому ученику!
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
