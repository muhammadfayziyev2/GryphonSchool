'use client'

import React from 'react'

const Kurs = () => {
    return (
        <div className="kurs">
            <section className="projects-section">
                <h2 className="section-title">КУРСЫ</h2>
                <div className="underline"></div>

                <div className="projects-grid">
                    <div className="project-card">
                        <div className="card-front">
                            IELTS/CEFR <br />
                            350 000 сум</div>
                        <div className="card-back">Фирменные учебники <br />
                            Дополнительные занятия<br />
                            В группе учеников 15-20 <br />
                            Student Support Teacher <br />
                            Speaking Club <br />
                            Writing Club <br />
                            Cinema Club
                        </div>
                    </div>
                    <div className="project-card">
                        <div className="card-front">Pre IELTS <br /> 300 000сум</div>
                        <div className="card-back">Фирменные учебники <br />
                            В группе учеников 15-20 <br />
                            Student Support Teacher <br />
                            Speaking Club <br />
                            Writing Club <br /></div>
                    </div>
                    <div className="project-card">
                        <div className="card-front">Elementary English group <br /> 280 000 сум</div>
                        <div className="card-back">Фирменные учебники <br />
                            Дополнительные занятия<br />
                            В группе учеников 15-20 <br />
                            Student Support Teacher <br />
                            Cinema Club</div>
                    </div>
                    <div className="project-card">
                        <div className="card-front">Русский Язык <br />250 000 сум</div>
                        <div className="card-back">Фирменные учебники <br />
                            Дополнительные занятия<br />
                            В группе учеников 15-20 <br />
                            Опытные ученики<br />
                            Гарантированные результаты<br />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Kurs