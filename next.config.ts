import type { NextConfig } from "next";
import createNextIntlPlugin from 'next-intl/plugin';


const nextConfig: NextConfig = {
    experimental: {
    // если используешь Next 15 с turbo, добавь эту строку —
    // иначе alias пишутся не туда (см. StackOverflow ссылку ниже)
    turbo: {}
  }
};

export default createNextIntlPlugin()(nextConfig);
