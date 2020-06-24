import React, { Component } from "react";
import "./Side-pannel.css"

class Pannel extends Component {
    constructor() {
        super();
        this.state = {
            display: false,
        };
    }
    burgerClick = () => {
        this.setState({ display: true })
    }
    minimzeClick = () => {
        this.setState({ display: false })
    }


    render() {
        return (
            <div className="container">
                <img onClick={this.burgerClick} className={this.state.display ? "burger-hide" : "burger"} alt="ceva" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAllBMVEX///8AAADz8/P09PT+/v79/f319fX8/Pz29vb39/f6+vr7+/v4+Pj5+fkEBATw8PAPDw8ZGRnLy8tiYmLl5eVJSUnk5OQUFBTr6+vFxcVeXl43NzcbGxvJycmSkpKBgYHY2NiampptbW2oqKhOTk62trZ2dnZAQEBWVlaNjY29vb1NTU2hoaHT09NDQ0Otra0tLS0kJCT9TRrJAAAVj0lEQVR4nN1dh3bbOgzV3orSxLGd6YymGS/p+P+fe5JIcIHQsGVHjs5pI9ugyCsOgMAl6TjsCgJ041A3+5ed9nHtFefsYxDH4ob9EubiJqRkkYhN1iFkQWSM7Jhisisr2NdBWbKvwzLjckXObvIi3kK27JWFxzkgImRjkN0ua3huexUJ+zpIE/Z1mKTsEXlS8vyTDMnyXJLCMWVzkOUlgsfFIJvJx3FZlLVNFmWNi5kbsu1TC599HUQ+yyX2I5Yy81KewOOPSHye0vd5QbyEPxxkU4+XKOKyIcjmUrbQZUXWIWSdW7Leophtm8047rrQ/Sk9U9aLHF1WAvTGAKRkC5DFWftm1riYbeONecuVr9GbFGAgCx2RAMmXgQFGMmu6mDzrpAigHpuCeAhgYqSMJEBooqLQW9RgIgEaWecoa/lupaxDAJTvtn0c1xpqrYyvwa0AWpooBkg20f5iiqyNlAMa95H0QZDlufQ30Yn7oKWJDuiDuJhkH9QB0oWeVx8cUkzj3fJcdlETO/XBDp3Z2UQHFzNs/gTpfvRgMKQPjlATgwAaTTTMwsbIS/bSB3dtogjgFn0wTluNX/aOvxP3wS5Tbci77SumyDqOml8CPg/5hmoiZiJc4x+JqTaqiULWkJJ6NbNQE2NMNbOY8OmbmGqKbKIC/II+6G0BcJtiBlou38dUE8VsNX6YHEpNHMxUE000z5oJYpl+lxk9LmbaZBRn4+v+cKbamBk9HgujJscAvG9d7cRoovsz1TrUBN2TKDUhsiZfzb5MtUnVBDbVkPOvH+CR9kED4J7VhCJ7IDVhAhzTuA/dB7dSE6KYAcvl25lqophx80OcHN5Um6gP9jbRrFGFYVHuF+DhZvSooRWtxs9zI+XMZvQOARBlbYkRRc3jQON/HzWB62F3gF8ZfBlQTD3lLGYTu8zoR9TgnE01FHzpiNOSAI+zD+JiBqxE385UE1m30VER5p9FH9xlRo+L2XI1wiLry2XewZcOgGlLOQGqzcxMtUkcD1EbeQr3AvALTTVUTPh0JKbacDWhAzx6NbEPgLMKvtDFRAC/i6kmZNunCl7b0czoB/fBoIlyO1kyvu5n1Qc7epLOazvW4EtHPUQ6r+0oTLUxaiL0Wx6qhddm5sK7qZNwkSDiIrEPDh+/NGUjDhDJliCb8lZcmx4BlIh9kfsFyGa6bIBkMx/b+cbL6AYYhFGVhs0V+17W3uSel7c3pee3f8O0SthNVBVM1pOyMZOtuGzCZWO/KnXZDGSLKgJZkXVpZu2FXLa3oXUCfDt153+dvg0CaOuD+cVXF37gdREX29XgneuenJywh8BfV37RcTOxrNsn+5ZRAA1emw4wvx6VyxcCdK9THaBolMBrs6uJ6tTdG8AdHmeRdU8rew0Cr43Qgw3CPQGc+GW4q8oKMNd5bUgPrk+ph8+rBgGhxR5ReW0YYLk4NR4+y6tF2iCkDS57E3XSiNdh/YSbHz9+3DT/NRf8FTfNLzfoZrCsKfJj+ONuoCprhEMBKlZsXp1ygK5fVdV6sajaS7lZ85slv1nwbwaIVCMeR8r60FZXVToeYOa0CNsntN2YJwgjLsK6sdPYojFUO1eyIBtHsDgL7EshCzysAMmWYNoWQLZPuEiAsoYetFpEFJ2n/RjaZxMNQvaEuc7oY+iMqwXY42YxY8Zrs89DpD4cxnQ6OE+mKATCigDIeW3QlIyJltSHzkxn9A4fTjlCnDXjteWZHSDrh+1VilqZWfAFBvsWocXxoPHa8FR5IRBmcw2+wGDfILQNFfxxBMBUaHzXIQDuFnzZiSfDsobBvkbYMRbquShRDanxewB+XfAFBvsa4XiAXiA1vj3ldsGXXTzbqKEJfVhF4wHGusbfe/ClBBME3LdDvGow2K8WCQUwYF9bvTmqxt+7mnAWZw+/Hs/PHzfP98TLwABzqfEdAqDOazO8OYrGx7TbiXky71crOV24vls7zgDHb1IaGh9rM53XZrqrFI2/Z1Pt+UbOhdjfxyU3Trv8076h8XENFmkb5c7tAFWNb6bMOL2/foTDU0OzT/lT4jTWZUk1cf/imgDr64HLdnq2NY1v6UmtPQ5Rbhx4kxo/N1JWt7efZ811e3nGbi4vz86MGyFy+5k6HX3wQ523K0j/W/fHJlSNbxsqeMHtAIPI1Pgi5Z079npQzTq9Bn8RAOv/752+4IsrNT4dIyIAhn7CWynXhzLlBrUpeeMaN8KhmRMDxysJsL5uSYuSF1Nq/JAcKkiAvqNrfJHyngTY4VVz71li05J57PI+ue5nN0Cp8dcRaVHaU7YWr6bxpYL52ALgiftkBXinpBawlOfeVA7dRB1V44PdgAByXpvVJ65qfFn35d0WAE/Y0Gj2wUutwl4e3s8u/zxqTeRnZwhb6sO1AVBoM85rszv9FY2vvJqmWOMBurcOVhPFqQLw8Z79FOZPN8pzP5yOAGgmEFb2GgwKxmvLrQAVjR+oKcO/WwC8ji2m2kYBeMlK1KoU/1HJYEHYI40ZrOtDC8B29xbBa0OzTuHzdgst5dIdfy0ts4m10uWWCsD6ehPxBPcXAbAtpobQYlFqvDYcl5IaX1DfWMry4fVizPX6EduU9y8JcKG/2zDfyOpfEDXYyIJMg5C2KAmAOWh8mAErdQ/jsNgRTdCPxA08G14gNrZlE2k7qWbWpY2e5A39jgaoanx60kMB9FJdH0698iV8ggp0NybAqG3CvCfXXZgMYUuNnw8EqPlFuT7kCLea0Xd41cpzAOiWGGCjKmGoWmZkCFvR+GObaFNopg+5xscz+t28an4letqd9m5hNpGKceihpAAqGl9kbRQTeG3WZtfqQ67xJ3f8xksxlKytL8MRqv+cqocYaXxcTJPXpnlUFY2/24ze6lX7AwBfrACz4hla8Y0OUBbTz0GEa3xczELdvQUVWmr8eA/BlwcYB9/swZdyLSpZA6gVU9OHlqFC47XhWpHDeSlqZbrgyxuMgx+EV83/BwNdSQF0QKW0CC3OP5XXZgnbSI3vmAAnCL4Ik+2ZcDpl1zDQ0SFseAcNQnqogBKhqIbh8544+LKBLvAns4+4haDzVDZt1soqUW6a9UnUSj2j0jX+1MGXN2ggb7nd8VsJ81t4wVExpcYvyKGCBFgYGn/i4Ev+YCgD5FW7F/OLnMxa0fhUnDbgJbL5xFWNP3nwJb0UJg28DEeXfYBmfF1SWQdCHy7AfeYZABmvLbFHNVSNP/nKl7ASyuDScSyO3/gais/MVltDk1HuNQA0so613VtMh6Oi8fex8uUCFOKFzfGb8zquK/KZAuiFusa3WJQarw15VKXGz/YRo5deqFsH1WCRv4hWTMTom2JqGt+izTReG/aoKhqfMgp2WaS8FKb1X2AyS68aePTq0l/xF2crpqrxZRM1tiLmQ6olqmH6vCfmybBJbns9QtYAsPwUAN1367tlxXSlxu/QZgTA1NT4uA9KplOEmE7QnYBJjxcpF6KnnTS2qQZwuRIAr8MOvpKi8enNpCmAXqxrfCWXrP7neX61Xvtec63XlX5T/+KJG6+BZBuQeCW2RdyotR1+nspfnrsIWTDYr6qUNJn5J1tUQ/N5K6Za8PlzdTrmWv38zGwx+qWA4bq/70PeDoJE9Tm/kH2QI+T6MKKaaPsxRjWYIF6bTBm+u+MvNuKb9uWD6vO+Omt2Gc2WENlivyy7aCSY14YAmrw2zZuj6EMllwJUNRlQsf7CJ3CGSnl1NdnfV6//XO0pfzrXkJlRbtwHdV6b6Y8jeG3P4wGesEpENJJgcWPIiot9senmDCJem1mDpcZrQx5VG68tYfHR8fzuOytPJu9uEJ0AmwYBsi1CizbTdm/BcSmF1+YoKZ+3AVjXoYVOmQeXv7ve1906J3kyFl4bqa7tAIOE4LVVVhg9AE/qCZxp1iXh+0tXDba1WKlZo2KCrJXX1geQ5rU9u+Ov99hsomG8BH1Ivy+3GWs6WJ9yBox5bQRAxRdA8dqKjOlDpBNX1M3q531ouiGC9MFe26hB/F7QdB6hD6tobBNtzHQ7r601tuuJQ1QbMFFz+bXd0t7UJo3f3lTyphGpK600m6izfh0IsKnGkCimjddmmsHt95mdymXltYnZRAfrHq0AxZv5f/4zcOFL+eWNAChjwCavTXpLGK/NHtVQNP7ElGbnXaAQMF7enp4vz86enx7OTzWAzc2VY+1JmNdmAiwZry0zU7JCW3ht0yxSZh59BeDft1toiC2K9bOcWTGRlyDHAElem8g6tfLaxFRZ0fii0FOw7sVgzAGen6VwRpOYO4bLuxutrf5XATlb9WyDCOe1oaytvDbhrsK8tmm2HXMuNYCv9/UkEsfo6w8PCkA+1TeLCe9A47WhdwufUFTDjHJPs0Os4FQxgJcdi5S9K1eR3ViKCe+g5bV1A7Q4/RMjyj3Nypew+qsAPE+6VmEH8ZP6Mp5x8EVq/Hg8QN/weU+08iV8VAr94HQBbGrl/kYZkBaZWUzF5z0MoB580aLcE618Kd8VgM82gMaMvvonVcpFYmStaHzhDjKLyaLc9qiG6vOeaIfYaP1DAny3AUQGdHIt2UMfRjFRlBsXk59KZl/5YuO17bjyJX6TAP8MAljrDTFLZp4CpSdluj601CDfvUXUfS+vbccdYou1BLgZBrD0gnstkRp8MaLc+N1yXlsIAI1+pfDazJTbrj77Jcp6PRRg0TLBob9UaozIiHJbGo92KhnyqMZS4wdUDY7cT6aSQ/9yzLY3r2K02QRa8AUe1yDsMKI4wF5e2+4LJKWL527Uvj4yxOGuNdqB4vPuBYhzKQyNP8EOsWJ1+U3UqSbQ2iUgz5+045NsaFLjZ70ALS5jk9e28yLlW9GdPsbtzBStxXD6UyumovGHNlHVF6Bp/Cl2iP0FAE8jglpuBdi8jA00p4ZuKorpCH24oObaTOOn/bw2/GrEGyK5peaAVP6FV75xRgJsQxzSCw71gDQ+XubY8trkqWR6LhqvTVUTxcPPi9+/OQHYclP/e/zEI+5SzIVu025TzcEzevF2fjmyocWGxscAtVPJkMtYavxc25RvGM97U5pUricxIIYj+iCv7Q9I/M9TnE7QO1f2sAg/lSwPiFwwr61NGf+lHb+q/4iNehIgU/fNxUO+ozay/RSvjjfIdkYPWbcIqfXRJK8tQ7w2lvJyEMAT9zfPBUbc6AJ+eeIwIEYLSwEcaLyhubKvHs5WkPpWKaaraHxaXbNnWqIahs8b1MTdIID1TawCLP3oBH754Ov4bvUFfbfoRhW5gNRPSjEVjW9bS60CtEQ1TF4bpHxyhwE8DfXYa67LbnXBtNnGa6MsSg7QRiPRNL5UE7qfhQTYLAXRmE7rDlnicdRzbbw2qokGNECD1yYM8xBWe4gX69oKUo8IumF+3wlwaNNvvMNy7ghFWC1CVIN8fGG8NntUQ9H4uqn24PZf/60dg6v2OQ3A2m6jeW2oiRK8toLktfFXk342C4DbC900C4A/P5eYq/Y5DUD3v1hYiZybKHhtqAZzdiqZyWsDX4DKazMbN4zrecp7Z2YO/Wju6LnuFADdTSgbGvwCu7eYszq+ewvFVcO8tp32k4kfzbJuBdC9V7IG2ZbXhtSEiKmZACGqYUa5d9wh1o9+uhNcz2rW8DIaXhv9bokaTEyNP8GBz8+P5+dXV+fsghv0he0G/m5EDZq8to4tNwiAXqhr/InOfAGjW4S8wBNWC/O/AdzEpCxkDc15VSWDa1CpFYPXttXxfPQa3t7ZxJDFAULjK7w2A6DOa9M9qmqUe7dtx7bcDhzRKVEIGzonRLkt4xuLctsDoBqvbdKNxHfd0B3GQjPKjftgpvHaTJ+4ymubdCPxjhl9iptoB/PaiHJbNi7SeG2oVlRem5FyqzNfJt/v3Ni9xfJujVPJjNgE5rXtdubLjk3U2pNgsG8Q2tQ1DMZWgJjXNtFe90MAmitfqBA2DPY1wg4HPAHQjypd409z5su0m2jKGXBAD/bWlC0bwtD44FUuI6CncB3Usb9oCSR+sbUpyIZia9Ool/AfW2RZ1soMeHQN1rUiNb7XbAy7MHeIXcKGs3AjRUjZ5YKSXVhk+x7nod1bMECd16YHX6TGv/nxYwVb+Iob+hogO9HjTI2vdH+V1yZOJTOCL5W6ucq8L67xcQ2avDZ96Fd3LO+ft42Z442QHfQ4jhAD5Ly22A5QavwDFHongByhZbC3n0oGY3Ugdyyfdw3WN82++rQ2I2ow9qvrQxV6Z9nr2DLIDDi0624PAPfzMu46LEqyBmu1Gx/NGSWh7eBtew0a9tLdUZwzc9fuSmQH2HcqWa1KguZqG3fzN2hm9M1N2LyM5qae4zGRxha1y8b1cwMmmzDZgskyW5TLxrpsJmULJgKyddZcts3asbGDxayO89p6eTL0uUsxOnepEAx9IAsMOR4KXBYgm484HqpjVqefSran4/lGzejplS/jyCA860Q/lWw/x/N94QlmAXkq2QDH7769alv4u2jnn5Fyll61nVifPJf9HM/XuUByhyba0ZMIgBNu5q/KzuEUQZ7LgO1WBgZfBgLs2h1t0gU6xqlk0zp+J/WqdQJMyWLCqWRj+uCXq4lR2sw8lWyGwZfdmNf6qWTfQE2gYrYiwGv7QlNtwO5oY0w1OytqnJqYkamGZvRYm/W/msMHX7Yytqmhgn0atfJlnn2QKmag5bJ3gLuqifHFbDV+mOzEk9kKoFnoqdUEPC7XeG3zMNWmURMw+2e8tuxAs4ndTDV6FO0IY2qnks1bTWzpeFB5bUdsqvUWk0h5vKbawBqc2FSjd4jtMtX6fWMDqAREynnP6JGp1tFEA5bLHEy1DmPbADjAVCNOJTuSGf2YJqqfSjYjnsxYU43SZvqpZPtSE9hU29eMHheT7d4SGykPaKrtWU3oRz4dMPgyqgbHW5S4HvSUczLVJnI82HM5gKk2afClo5ijc5mHqUY3UbMPBuzrg5lqw0+NmOawWYPXNm9TbSvHg34q2ZGZarZimk00LdoqFLy2OZtqQ2b0uJgGr21WppoBcEttpsRIj2dGP97515fL0ZpqJsBZBV9ogON7Eko5Q1NtQPCl4yTP9qkWXttxBV9sJ1pzgOapZN/FVDNOJSsmBXj44EtHQ7OfSnZswZeuYlK8th0AHlBNkKYaQRqaGuDBgi/9xWQpYTVVDKupMlhNVcBqqpSvvAqiBMmCtw52GElg4THI5iBbgmxqkXW4LOyWjbJOcNa4mEbWLGVRsE9hyvPPYVuILOUzj7II+2VjEOG5gGwsZeFxUtZ4XIyzTgdn7RRmMdmnHPaKyvgzw4wniOEmz3jKzJSNpSwXyXlEskNWPA6yDgZkvVUxQ/m/chOEAboxRMbI2kSCEY8bI4uKGfwPhudzuKflvk4AAAAASUVORK5CYII="></img>
                <div className={this.state.display ? "container-show" : "container-hidden"}>
                    {/* <img onClick={this.minimzeClick} alt="minimize" className="minimize" src="data:image/jpeg;base64,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" ></img> */}
                    <svg onClick={this.minimzeClick} className="minimize" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M9.5 2.036a.5.5 0 0 1 .5.5v3.5h3.5a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5v-4a.5.5 0 0 1 .5-.5z" />
                        <path fillRule="evenodd" d="M14.354 1.646a.5.5 0 0 1 0 .708l-4.5 4.5a.5.5 0 1 1-.708-.708l4.5-4.5a.5.5 0 0 1 .708 0zm-7.5 7.5a.5.5 0 0 1 0 .708l-4.5 4.5a.5.5 0 0 1-.708-.708l4.5-4.5a.5.5 0 0 1 .708 0z" />
                        <path fillRule="evenodd" d="M2.036 9.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V10h-3.5a.5.5 0 0 1-.5-.5z" />
                    </svg>
                    <div className="header-details">
                        <img className="cv-pic" alt="poza-cv" src="https://media-exp1.licdn.com/dms/image/C5603AQFGDFMxgfzBQA/profile-displayphoto-shrink_200_200/0?e=1598486400&v=beta&t=sytgf3rVDq30oOtt7zWox5cJFt6jpWNN52YaylixOHk"></img>
                        <div className="side-details">
                            <ul>
                                <li><span>Nume:</span> Luca</li>
                                <li><span>Prenume:</span> Vasile - Luca</li>
                                <li><span>Varsta:</span> 28 ani</li>
                                <li><span>Oras:</span> Cluj - Napoca</li>
                                <li><span>Tel:</span> 0748794107</li>

                            </ul>
                        </div>
                    </div>
                    <p>detalii despre mine</p>
                </div>
            </div>
        )
    }

}
export default Pannel;