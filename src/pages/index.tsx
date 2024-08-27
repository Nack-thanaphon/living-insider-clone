import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";
import {
  faBarcode,
  faPhone,
  faQrcode,
  faServer,
} from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center my-auto h-screen">
        <span className="loading loading-dots loading-xs"></span>
      </div>
    );
  }

  return (
    <div className="sm:p-[30px] p-[15px] sm:h-screen container mx-auto">
      lorem-hellowrld
    </div>
  );
}