import React from "react";
import "./Pages.css";

export default function Work() {

    return (
        <div className="section-container">
            <h1>Work history</h1>
            <br></br>
            <div className="section-wrap">
                <div className="section">
                    <div className="company-logo">
                        <img src="https://media-exp1.licdn.com/dms/image/C560BAQE1SSNniDh_RQ/company-logo_200_200/0?e=2159024400&v=beta&t=54V8LU9f6RZWjDyKFLJZY3G692PNz6yVGKYTve5Ja48" alt="company-logo"></img>
                    </div>
                    <div className="text">
                        <h3>Genpact</h3>
                        <br></br>
                        <div className="role-location">
                            <h5>Senior process associate</h5>
                            <p>Oct 2019 - present | 9 months</p>
                            <p>Cluj, Romania</p>
                        </div>
                        <br></br>
                        <p>I felt the need of a change, and it came from Genpact where I got the role of a senior analyst.</p>
                    </div>
                </div>
                <div className="section">
                    <div className="company-logo">
                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANwAAADcCAMAAAAshD+zAAAAY1BMVEX///8oJSXsMC1eXFzJyMiTkpI1MzPy8fHxZGLk5OTX1tb+8vL1l5b6y8pQTk74sbB5d3f72Neura3tPTq8u7uGhYVDQEDwV1Whn5/95eXuSkdraWnycW/zfnz3pKP5vr30i4lEz6AgAAAFuUlEQVR4nO2a63aiMBRGkTuI3BS0arXv/5QDJOcQgiDTGRZt1rf/VC5JzibJSaRaFgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAH8LH1gGsSZFtHcGaZEbbPYy2+zTaLjTZbn822a44PrcOYUWKY7F1CCuSGW33abRdeDR4J7Y/n/dbx7AexdFku6d93zqEFUnsz61DWJG7nWwdwnrsr7bBG7HiaBu83GW2yYv5p23wgrA/2+HWMaxHM+2+RicdJi8DOlne/F2DcwkG91TtgUdHsVX2Zb0T13jh6x0V31R54lRfzLtE3ZlYHKqXxi304b0ks8cpc6fgiwgDpz8TD+7pTOnAtTy1cC1lrFSe8OTTU29K25sGxfI2ZJeqH1zSW/DLWbu7PUqZg9p2sR6OH6n3xOqB1rS4tXk0dOy8kNv5gW6QLpbb7U7WDM1qd9SSyrB0G1A5OJOr9zSVx9NN37oKT3z8Sq6tTyvmLZerZ7vuYOspU0r5snhAw8pxL+JMpMh5auzUtM+Fuwor5YZerqbB6pOBT2fqt3K+MhXmSGxtl0nV5lQ6YKe6+1Aqco7aPDXdnLxxmX7K0aRz5OfgNjRwuM1Yl6s9QdTfKp/0ZVbOOtv245VcRBFzQ7LtSpGr2WMoF1OUNOUceUGR0w0cnp7li0uS/rhWntckzXpgH6bl6GGlas3dX1/cV7+Si/iByGFb8vGcnGzcWyInqnnTc9bDttXXDlRtTl3T18eafWe4Fnuqcjk/EDHlalfeocoJYX8c8RK5YNfXOEc4SCqiEOWEEyWEXm5Hcm0kF5c9lemecmE55RyLjHqBk2giH8vlEwnF6W+NbvRk3vBhq0lFra2LxpmSa62rC2lOLLGBrCflHtDWuWgs57yTY2bXOUGTMfukopZNT3NyFzZ8Ked0Q0ZOOZl3RnJ5ZH1fLl3g1mVMTirDR+PNyPGIvLyU6xYNOajpkqvL1ad/kPOrJXLNUs47FSnlySzoTsvxc3CHcs2qJGdsRKsc9WA/zBn3X4blIrvPxi5U5ZrJQvNdz5Y+y9HybA3l+qWgklPO97xcE8hdmVBuY7nqXbZMXZd3AO9pc4p8Y8SF6Cnqcg7LyQbSsZzeBYRvKUuB7GfVIJXX3i8FvMdY2HVi2o3kSophJCfHSD4jpw2jds/ynxbxv5Druu66t0bDUhn/fVjDK95YjgtrE6zdUczIxRTx/5UTXXfvC53khGqmhAj0RBGfWI53CUO5fkbkWu7tqpuSS7nNQL/ky2/f5Tfl2oTZDUwtmpL2Un4lmvYtlpPagTWxFOxKGaTbwNloSo5xJi9535SzOrmrLlcHPHe5gV6ui7O2puTSPr9yvPF7OXcluabrBrWJVyaXQcCKnKdKjl8zxMoaSWP40svJGRZoxUprkdyybwWCQsglqpyfi7cgVklfrXdVoMqdZJiv5Pz2TY8s1FVCyxrLWcOVVCA2bQvk5LeWaIncF8m5TNxfDcr2BV4lX7xZdDlo/zbn4u5EYEVa4UB8lq/r5PmYz4lPrlqM2qMj5VJXKOLK5ZX513uSKw1LAxHJ0raNfL8eCjcj/99KHWfkv+xkxx23jmMNqOOM/E8ydZyJ6cTojrsa3HGZwR23PxrccYnBa9yHdLtuHcgayGXAyC3zU7qZ+KONvVwGbBN/O0vZ5GvrQFaAsomRywBlExOXgczkbCL3Jkb+8PJu8KaSBuX1J2eTInsk2d9vMAoalD9+b3JI7ud78vyLOPfnX7XEFY/71b6GyeOwZLtx/w2DcsjH86tbu85hkhxm+nFPbj9/UGoU2RetzufwnjQTUuvLIqMt5S/NlMUzCVlB7LFCgXruVy/fjeJ9YDPEhN/efxweSXg2043oHJV+/DTIjSkOhyxJniZ+PwUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB8mz+N3TnAJgfJ2gAAAABJRU5ErkJggg==" alt="company-logo"></img>
                    </div>
                    <div className="text">
                        <h3>Bombardier</h3>
                        <br></br>
                        <div className="role-location">
                            <h5>Accounts Payable Analyst</h5>
                            <p>June 2018 - Oct 2019 | 1 year and 5 months</p>
                            <p>Cluj, Romania</p>
                        </div>
                        <br></br>
                        <p>It was the logical move for me after 13 months in the Scanning team. I'm working in a team of 23 people where the main task is to process invoices in SAP by checking that all invoicing requirements are met by our vendors.</p>
                    </div>
                </div>
                <div className="section">
                    <div className="company-logo">
                        <img alt="company-logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT_wbG1eypv5WoAlGooCYvYTt-n0YY5V_A9A-d72QSh6jGmXERd&usqp=CAU"></img>
                    </div>
                    <div className="text">
                        <h3>French Lick Resort</h3>
                        <br></br>
                        <div className="role-location">
                            <h5>International student of Work and Travel program</h5>
                            <p>Jul 2016 - Sept 2016 | 3 months</p>
                            <p>French Lick IN, USA</p>
                        </div>
                        <br></br>
                        <p>As it was my third experience in the United States and the second one at French Lick Resort it was not anything new for me in America, I returned there to meet my old friends and because it was the last chance to go to USA through this program. Mostly I worked as a restaurant server throughout the whole summer.</p>
                    </div>
                </div>
                <div className="section">
                    <div className="company-logo">
                        <img alt="company-logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTRyk1dQ4Bu0XIKKpDzDOF9TLNamp6DM94fzPNtUB1wUQ_L8m5c&usqp=CAU"></img>
                    </div>
                    <div className="text">
                        <h3>Hotel Opal</h3>
                        <br></br>
                        <div className="role-location">
                            <h5>Hotel Receptionist</h5>
                            <p>Dec 2015 - Jun 2016 | 7 months</p>
                            <p>Cluj, Romania</p>
                        </div>
                        <br></br>
                        <p>I worked as a night shift receptionist for a 4 star hotel. My main tasks were to welcome the guests, process the bookings, billing and cashing the guest services. I enjoyed verry much my time here because I had a verry good relationship with my co-workers and management.</p>
                    </div>
                </div>
                <div className="section">
                    <div className="company-logo">
                        <img alt="company-logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT_wbG1eypv5WoAlGooCYvYTt-n0YY5V_A9A-d72QSh6jGmXERd&usqp=CAU"></img>
                    </div>
                    <div className="text">
                        <h3>French Lick Resort</h3>
                        <br></br>
                        <div className="role-location">
                            <h5>International student of Work and Travel program</h5>
                            <p>June 2015 - Sept 2015 | 4 months</p>
                            <p>French Lick IN, USA</p>
                        </div>
                        <br></br>
                        <p>It was for the first time I came at French Lick, where I started as a steward, and by the end of the summer i used to be a server in the restaurant. In the same time I could pick up some shifts as housekeeping attendant, server assistant, food runner or banquet server.
As it was for the second time in USA I was used with the American culture and mentality, but i was really impressed about how such a big resort is managed. It was a pleasure to work in such a big team.</p>
                    </div>
                </div>
                <div className="section">
                    <div className="company-logo">
                        <img alt="company-logo" src="data:image/png;base64,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"></img>
                    </div>
                    <div className="text">
                        <h3>Vila Rao</h3>
                        <br></br>
                        <div className="role-location">
                            <h5>Hotel Receptionist</h5>
                            <p>Feb 2015 - May 2015 | 4 months</p>
                            <p>Cluj, Romania</p>
                        </div>
                        <br></br>
                        <p>It was my first experience in the hotel industry so every day of work was like a lesson for me because it was a lot of informations and a lot of thing that I knew theoretically but I have never done them practically until then.</p>
                    </div>
                </div>
                <div className="section">
                    <div className="company-logo">
                        <img alt="company-logo" src="data:image/png;base64,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"></img>
                    </div>
                    <div className="text">
                        <h3>McDonald's</h3>
                        <br></br>
                        <div className="role-location">
                            <h5>International student of Work and Travel program</h5>
                            <p>June 2013 - Sept 2013 | 4 months</p>
                            <p>Courthouse NJ, USA</p>
                        </div>
                        <br></br>
                        <p>It was my first trip across the ocean which was a truelly exciting one. For me this summer was a sort of exam because I was alone with my girlfriend and we had to think about the food, rent, shopping. As we were paid with the minimum wage whe had to count every penny.
As a crew member at McDonald's i used to work in the kitchen with people from each corner of the world wich was an experience to remember.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}