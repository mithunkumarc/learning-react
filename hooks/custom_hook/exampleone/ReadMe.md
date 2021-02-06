source : example based on 

https://dev.to/damcosset/how-to-create-custom-hooks-in-react-44nd  



##### example is about changing text depending on browser window screen size

#### without custom hook

            // App.js
            import React, { useEffect, useState } from 'react';

            function App() {
                const [onSmallScreen, setOnSmallScreen] = useState(false);

                useEffect(() => {
                    checkScreenSize();
                    // adding event listener resize, whenever screen is resized,
                    // checkScreenSize method will be called
                    window.addEventListener("resize", checkScreenSize);
                },[]);

                let checkScreenSize = () => {
                    // set true if window is smaller than 768
                    setOnSmallScreen(window.innerWidth < 768);
                }

                return (
                    <div>
                        <p>Resize browser window to see below text change to small/large</p>
                    <div>{onSmallScreen ? 
                        "This is small screen"
                        :
                        "This is large screen"
                    }</div>
                    </div>
                )
            }

            export default App;


#### with custom hook

            // custom hook
            import { useState, useEffect } from 'react';

            const useWindowsWidth = () => {
                const [isScreenSmall, setIsScreenSmall] = useState(false);
                let checkScreenSize = () => {
                    setIsScreenSmall(window.innerWidth < 600);
                }
                useEffect(() => {
                    // use effect called only once
                    console.log("useEffect");
                    checkScreenSize();
                    // add resize event to window
                    window.addEventListener("resize", checkScreenSize);
                }, []);
                return isScreenSmall;
            };

            export default useWindowsWidth;

            // App.js
            import React, { useEffect, useState } from 'react';
            import useWindowsWidth from './useWindowsWidth';

            function App() {
                //const [onSmallScreen, setOnSmallScreen] = useState(false);
                const onSmallScreen = useWindowsWidth(false); // custom hook
                // useEffect(() => {
                //     checkScreenSize();
                //     // adding event listener resize, whenever screen is resized,
                //     // checkScreenSize method will be called
                //     window.addEventListener("resize", checkScreenSize);
                // },[]);

                // let checkScreenSize = () => {
                //     // set true if window is smaller than 768
                //     setOnSmallScreen(window.innerWidth < 768);
                // }

                return (
                    <div>
                        <p>Resize browser window to see below text change to small/large</p>
                    <div>{onSmallScreen ? 
                        "This is small screen"
                        :
                        "This is large screen"
                    }</div>
                    </div>
                )
            }

            export default App;


