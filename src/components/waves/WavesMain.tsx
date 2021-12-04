import React from "react";
import KUTE from 'kute.js';

//components
import InfoModal from "../common/modals/InfoModal";

//hooks 
import { useEffect } from 'react';

const WavesMain = () => {

    useEffect(() => {
        KUTE.fromTo('#blob1', { path: '#blob1' }, { path: '#blob2' }, {
            repeat: 999,
            duration: 3000,
            yoyo: true
        }).start();

        KUTE.fromTo('#blob3', { path: '#blob3' }, { path: '#blob4' }, {
            repeat: 999,
            duration: 2500,
            offset: 1000,
            yoyo: true
        }).start();
    }, []);

    return (
        <div className='waves--container'>
            <InfoModal />
            <section className='section -red'>
                <svg className='blob2' id="visual" viewBox="0 0 450 450" width="450" height="450" xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1">
                    <g transform="translate(230.42750118791506 229.26923651660317)">
                        <path id='blob3' d="M73.8 -118.8C95.3 -101 112.2 -80 117.7 -57C123.1 -34 117 -9 109.4 12.9C101.9 34.9 92.9 53.8 80.2 70.8C67.5 87.8 51.1 102.9 29.2 117.8C7.3 132.6 -20.1 147.3 -39.2 139.1C-58.3 131 -69 100 -85 76.5C-101 52.9 -122.3 36.8 -128.5 16.3C-134.8 -4.1 -126.1 -28.8 -114.3 -51.2C-102.6 -73.6 -87.8 -93.6 -68.2 -112.3C-48.7 -131 -24.3 -148.5 0.9 -149.9C26.1 -151.3 52.3 -136.7 73.8 -118.8"
                            fill="#511010"></path>
                    </g>
                    <g transform="translate(231.76587735130852 226.4874364878569)">
                        <path id='blob4' style={{ visibility: 'hidden' }} d="M60.8 -97C76.8 -84.2 86.6 -64.1 101.2 -43C115.8 -22 135.1 0.1 135.5 21.8C135.9 43.4 117.5 64.6 97.9 81.8C78.3 99.1 57.6 112.4 35.2 118.1C12.9 123.8 -11.2 121.9 -38.1 118.9C-65 116 -94.9 112 -116.8 96C-138.8 80 -152.9 52 -148.1 26.7C-143.3 1.4 -119.6 -21.2 -106 -47.4C-92.4 -73.5 -88.9 -103.2 -72.9 -116.1C-56.9 -128.9 -28.5 -125 -3.1 -120.2C22.3 -115.4 44.7 -109.9 60.8 -97"
                            fill="#511010"></path>
                    </g>
                </svg>
                <div className='container'>
                    <h1 className='header--h1 -white mb-12'>Nice Waves</h1>
                    <p className='paragraph--component -white'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quis libero eros. Quisque ac viverra eros, eu volutpat metus. Suspendisse ac consequat mauris. Sed finibus rutrum velit, a suscipit ex. Integer id dictum nunc. Aenean placerat mauris a placerat venenatis. Integer sapien quam, lacinia a sagittis dignissim, rhoncus et velit. Curabitur at augue ac sem mollis molestie id a urna. Vestibulum auctor nisi eu metus tempus, sit amet sodales nisi laoreet. Donec ornare, ligula nec vehicula pellentesque, massa velit efficitur leo, at volutpat purus massa sed justo. Etiam sed est sed elit gravida ultricies sed id ipsum. Curabitur lacinia dolor at felis laoreet molestie. Quisque pretium molestie ipsum, ac faucibus massa elementum in. Quisque libero dui, scelerisque vitae tincidunt sed, viverra eu libero.</p>
                </div>

                <svg id="visual" className='blob1' viewBox="0 0 450 450" width="450" height="450" xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1">
                    <g transform="translate(222.50590192099037 237.14148704657208)">
                        <path id='blob1' d="M83.9 -134.7C108.3 -114.8 127.4 -90.9 149.1 -62.5C170.9 -34.1 195.3 -1.2 199.2 34.5C203.2 70.2 186.6 108.8 156.6 126C126.6 143.2 83.1 139.1 46.9 141.4C10.6 143.7 -18.3 152.4 -46.7 148.8C-75.1 145.2 -102.9 129.3 -131.8 107.7C-160.7 86.1 -190.7 58.9 -194.4 28.4C-198.1 -2.1 -175.5 -35.9 -155.5 -67.5C-135.6 -99 -118.3 -128.1 -92.9 -147.5C-67.4 -166.9 -33.7 -176.4 -2 -173.4C29.7 -170.3 59.5 -154.5 83.9 -134.7"
                            fill="#952d2d"></path>
                    </g>
                    <g transform="translate(215.19482925967395 221.3298866907645)">
                        <path id='blob2' style={{ visibility: 'hidden' }} d="M79.6 -128.1C108.6 -105.3 141.2 -92.3 159.3 -68.2C177.5 -44 181.3 -8.7 179.4 28C177.6 64.7 170 102.7 149.7 134.3C129.5 165.8 96.4 190.9 59.9 199.4C23.5 207.9 -16.4 199.9 -54.8 188C-93.2 176.2 -130.1 160.4 -147.1 132.3C-164.1 104.1 -161.3 63.4 -156.8 28.6C-152.3 -6.1 -146.2 -35.1 -138.4 -67.9C-130.7 -100.7 -121.3 -137.4 -98 -162.8C-74.6 -188.1 -37.3 -202 -6 -192.7C25.3 -183.4 50.7 -150.9 79.6 -128.1"
                            fill="#952d2d"></path>
                    </g>
                </svg>
            </section>
            <section className='section -blue'>
                <div className="custom--wave">
                    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path fill="#6e1d1d" d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
                    </svg>
                </div>
                <div className='container'>
                    <h1 className='header--h1 -white mb-12'>Nice Waves</h1>
                    <p className='paragraph--component -white'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quis libero eros. Quisque ac viverra eros, eu volutpat metus. Suspendisse ac consequat mauris. Sed finibus rutrum velit, a suscipit ex. Integer id dictum nunc. Aenean placerat mauris a placerat venenatis. Integer sapien quam, lacinia a sagittis dignissim, rhoncus et velit. Curabitur at augue ac sem mollis molestie id a urna. Vestibulum auctor nisi eu metus tempus, sit amet sodales nisi laoreet. Donec ornare, ligula nec vehicula pellentesque, massa velit efficitur leo, at volutpat purus massa sed justo. Etiam sed est sed elit gravida ultricies sed id ipsum. Curabitur lacinia dolor at felis laoreet molestie. Quisque pretium molestie ipsum, ac faucibus massa elementum in. Quisque libero dui, scelerisque vitae tincidunt sed, viverra eu libero.</p>
                </div>
            </section>
            <section className='section -yellow'>
                <div className="custom--wave">
                    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path fill="#1c5e9c" d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" className="shape-fill"></path>
                        <path fill="#1c5e9c" d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" className="shape-fill"></path>
                        <path fill="#1c5e9c" d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" className="shape-fill"></path>
                    </svg>
                </div>
                <div className='container'>
                    <h1 className='header--h1 -white mb-12'>Nice Waves</h1>
                    <p className='paragraph--component -white'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quis libero eros. Quisque ac viverra eros, eu volutpat metus. Suspendisse ac consequat mauris. Sed finibus rutrum velit, a suscipit ex. Integer id dictum nunc. Aenean placerat mauris a placerat venenatis. Integer sapien quam, lacinia a sagittis dignissim, rhoncus et velit. Curabitur at augue ac sem mollis molestie id a urna. Vestibulum auctor nisi eu metus tempus, sit amet sodales nisi laoreet. Donec ornare, ligula nec vehicula pellentesque, massa velit efficitur leo, at volutpat purus massa sed justo. Etiam sed est sed elit gravida ultricies sed id ipsum. Curabitur lacinia dolor at felis laoreet molestie. Quisque pretium molestie ipsum, ac faucibus massa elementum in. Quisque libero dui, scelerisque vitae tincidunt sed, viverra eu libero.</p>
                </div>
            </section>
            <section className='section -green'>
                <div className='spacer layer1' />
                <div className='container'>
                    <h1 className='header--h1 -white mb-12'>Nice Waves</h1>
                    <p className='paragraph--component -white'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quis libero eros. Quisque ac viverra eros, eu volutpat metus. Suspendisse ac consequat mauris. Sed finibus rutrum velit, a suscipit ex. Integer id dictum nunc. Aenean placerat mauris a placerat venenatis. Integer sapien quam, lacinia a sagittis dignissim, rhoncus et velit. Curabitur at augue ac sem mollis molestie id a urna. Vestibulum auctor nisi eu metus tempus, sit amet sodales nisi laoreet. Donec ornare, ligula nec vehicula pellentesque, massa velit efficitur leo, at volutpat purus massa sed justo. Etiam sed est sed elit gravida ultricies sed id ipsum. Curabitur lacinia dolor at felis laoreet molestie. Quisque pretium molestie ipsum, ac faucibus massa elementum in. Quisque libero dui, scelerisque vitae tincidunt sed, viverra eu libero.</p>
                </div>
            </section>
            <section className='section -purple'>
                <div className='spacer layer2' />
                <div className='container'>
                    <h1 className='header--h1 -white mb-12'>Nice Waves</h1>
                    <p className='paragraph--component -white'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quis libero eros. Quisque ac viverra eros, eu volutpat metus. Suspendisse ac consequat mauris. Sed finibus rutrum velit, a suscipit ex. Integer id dictum nunc. Aenean placerat mauris a placerat venenatis. Integer sapien quam, lacinia a sagittis dignissim, rhoncus et velit. Curabitur at augue ac sem mollis molestie id a urna. Vestibulum auctor nisi eu metus tempus, sit amet sodales nisi laoreet. Donec ornare, ligula nec vehicula pellentesque, massa velit efficitur leo, at volutpat purus massa sed justo. Etiam sed est sed elit gravida ultricies sed id ipsum. Curabitur lacinia dolor at felis laoreet molestie. Quisque pretium molestie ipsum, ac faucibus massa elementum in. Quisque libero dui, scelerisque vitae tincidunt sed, viverra eu libero.</p>
                </div>
            </section>
        </div>
    );
};

export default WavesMain;