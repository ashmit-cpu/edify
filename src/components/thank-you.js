import React from 'react'
import ComingSoon from '../components/ComingSoon'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect , useState} from "react";
import TagManager from "react-gtm-module";


function Thankyou() {
    const router = useRouter();

    useEffect(() => {
        // TagManager.initialize({ gtmId: "GTM-579PCB3X" });
      }, []);

    return (
        <>
            <Head>
                <title>Thank You | The Academic City Boarding School</title>
            </Head>
            <section className="global_section comingsoon-sec" id="">
                <div className="container">
                    <div className="title-wrap text-center">
                        <h2 className="mb-4 text-center">
                            Thank You
                        </h2>
                    </div>
                    <div className="mt-5 thank-wrap text-center">
                        <div className="check-sign">
                            <Image
                                src="/images/tick2.png"
                                alt="check sign"
                                width={50}
                                height={50}
                            />
                        </div>
                        <div className="thank-content text-center mt-4">
                            <h3 className="">
                                <span className="text-dark">You&apos;re</span> All Set!
                            </h3>
                            <p className="mt-4 grade-title text-center">
                                Greetings from The Academic City School
                            </p>
                            <p className="text-center grade-title">
                                Thank you for your Interest.
                                <br />
                                Our Team will get in touch with you shortly.
                            </p>
                            <div className="btn-wrap text-center">
                                <button onClick={() => window.location.href = "https://theacademiccity.com/"} className="btn primary-btn mt-4 text-uppercase">
                                    Go back to home
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Thankyou
