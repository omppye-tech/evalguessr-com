window.__already_played = [];
window.__games = [
  {
    lichess: "https://lichess.org/xiaLZnJh",
    fen: "4R3/1r3p1k/6p1/2p1b1qp/8/P6P/6P1/4Q2K w - - 0 43",
    score: -0.5,
  },
  {
    lichess: "https://lichess.org/EUA10Hr6",
    fen: "1kr4r/1bq1bppp/p2p4/1p2p1PP/P2RPP2/2N5/1PP1B1Q1/2KR4 w - - 0 21",
    score: 2.7,
  },
  {
    lichess: "https://lichess.org/sEt5XDVt",
    fen: "r1b2rk1/7p/1pp2q2/p2p1p2/3P1bp1/2PB1P2/PP2R1PP/2NQR1K1 w - - 0 22",
    score: 0,
  },
  {
    lichess: "https://lichess.org/sXDui58n",
    fen: "8/pb1n1rpp/1p1b1N1k/5P2/3P4/P7/BP4PP/5RK1 w - - 0 25",
    score: 7.1,
  },
  {
    lichess: "https://lichess.org/j8jJ4NQZ",
    fen: "2kr3r/ppp2pp1/1b4b1/4P1Pp/3np3/P1N1B2P/1PP2K2/3R2NR w - - 0 18",
    score: -4.1,
  },
  {
    lichess: "https://lichess.org/oig4D90W",
    fen: "rn3rk1/pp3pPp/2p1b3/8/1b6/3PBQ2/1qPK1P1P/3R1BNR w - - 1 14",
    score: -8.9,
  },
  {
    lichess: "https://lichess.org/sSw6N8nE",
    fen: "r2r1nk1/5p2/p1R3p1/3p3p/Pb2p1BP/1P1bP1N1/1B3PP1/2R3K1 w - - 0 29",
    score: 0.3,
  },
  {
    lichess: "https://lichess.org/2yikKgv4",
    fen: "3r1rk1/pp1q2bp/2n3p1/2p1p3/P1N2p2/2PP2P1/1P3P1P/R1BQR1K1 w - - 1 18",
    score: -1.6,
  },
  {
    lichess: "https://lichess.org/RXh0lqkI",
    fen: "2r3kb/p4p2/1p2bPp1/4N1p1/4P3/2r3NP/P4R1K/R7 w - - 1 33",
    score: -5,
  },
  {
    lichess: "https://lichess.org/FzXjTrAM",
    fen: "2kr1bnr/pp1b1ppp/q1n1p3/2p5/P3P3/1QP2N2/1P1N1PPP/R1B2RK1 w - - 3 11",
    score: -6.4,
  },
  {
    lichess: "https://lichess.org/X0UwbOag",
    fen: "r1bqk2r/pp1n1ppp/4p3/2pp4/2PP4/P1nBPN2/1P3PPP/R2QK2R w KQkq - 0 10",
    score: -0.1,
  },
  {
    lichess: "https://lichess.org/gSmbsw1e",
    fen: "8/3R1p2/4pkp1/3p3p/3P3P/6P1/1r2KP2/8 w - - 5 41",
    score: -2,
  },
  {
    lichess: "https://lichess.org/sE401kuR",
    fen: "r1bqk1r1/1pp1b3/2n2np1/p2pNp1p/3P3P/2NB4/PPP1QPP1/R1B1K2R w KQq - 4 12",
    score: 3.6,
  },
  {
    lichess: "https://lichess.org/z8upgK8k",
    fen: "6k1/pp1rrp2/4bB2/6p1/8/4P3/P3RPP1/R5K1 w - - 6 24",
    score: 5.5,
  },
  {
    lichess: "https://lichess.org/Yy4T62m9",
    fen: "2rr2k1/pp2b1pp/1q2p1n1/4P3/2b2P1P/P2p1NP1/1P1Q1RBK/1R2B3 w - - 0 27",
    score: 0.3,
  },
  {
    lichess: "https://lichess.org/An5WwOJk",
    fen: "r1bq1rk1/pp2ppbp/2np1np1/8/3BPP2/P1NB1N2/1PP3PP/R2Q1RK1 w - - 1 11",
    score: -0.2,
  },
  {
    lichess: "https://lichess.org/DHNiwSNM",
    fen: "2N2rk1/pp4p1/4p2p/2Q5/4q3/6R1/P4PK1/R7 w - - 2 31",
    score: 9.7,
  },
  {
    lichess: "https://lichess.org/4GU3ZhIS",
    fen: "3r1bkr/ppp3p1/7p/8/3n2P1/8/PPP2PpR/R1B1K1N1 w Q - 2 16",
    score: -7.4,
  },
  {
    lichess: "https://lichess.org/h45Cnvmm",
    fen: "3q2k1/6p1/Q3pb2/1p1b1p1p/2pP3P/2P2PB1/1PB3P1/6K1 w - - 4 40",
    score: 0,
  },
  {
    lichess: "https://lichess.org/2XNUILbj",
    fen: "4rr2/6k1/7p/p2P1p2/1pPp4/1P6/P5PP/4RR1K w - - 1 34",
    score: 5.3,
  },
  {
    lichess: "https://lichess.org/xYrBRZzR",
    fen: "rnbqkbnr/pp1ppppp/8/8/2pPP3/8/PPP2PPP/RNBQKBNR w KQkq - 0 3",
    score: 3.7,
  },
  {
    lichess: "https://lichess.org/xyLONFgn",
    fen: "r4rk1/pp2p1bp/1qp5/5bB1/4N1n1/2P3P1/PP4BP/R2Q1R1K w - - 1 18",
    score: 7.5,
  },
  {
    lichess: "https://lichess.org/eHZdQTDp",
    fen: "r5k1/4p2p/q1rpp1p1/1p6/1PnBPbPP/2NQ1P2/PPR5/1K1R4 w - - 1 25",
    score: 1.3,
  },
  {
    lichess: "https://lichess.org/y3diSAJ3",
    fen: "r1bq1rk1/pp2ppbp/5np1/1Pp1p3/8/2N2N1P/1PPP1PP1/R1BQR1K1 w - - 0 11",
    score: 0.2,
  },
  {
    lichess: "https://lichess.org/JFGQ6Qgu",
    fen: "r2n4/p2k1r2/3q2n1/1pp1p1Bp/3pPp1P/P2P4/1PPQbPPN/R3K2R w KQ - 0 25",
    score: 2.3,
  },
  {
    lichess: "https://lichess.org/1Dzy0Yan",
    fen: "r4r1k/pp6/nqp2p1p/7P/4Q3/6P1/PPP2P2/3R1RK1 w - - 1 22",
    score: 0.1,
  },
  {
    lichess: "https://lichess.org/aePTPOTX",
    fen: "rn3rk1/1p2n1bp/1q2b1p1/pPpp4/4pP2/2P1P3/PBN1B1PP/RN1Q1RK1 w - - 2 17",
    score: -2.6,
  },
  {
    lichess: "https://lichess.org/08t4NaAJ",
    fen: "r2qkb1r/pppn1ppp/3p1n2/3P4/2P1p1b1/2N1BP2/PP2P2P/R2QKBNR w KQkq - 0 8",
    score: 1.5,
  },
  {
    lichess: "https://lichess.org/WIZyK8iX",
    fen: "r1b2rk1/1pqnbppp/p3pn2/2p5/P1N5/2NP2P1/1PP2PBP/R1BQK2R w KQ - 1 11",
    score: 2.5,
  },
  {
    lichess: "https://lichess.org/cWuQ6PvF",
    fen: "r1bqr1k1/pp3pbp/3p1np1/2pP4/Pn2PB2/2N3N1/1P1QBPPP/R4RK1 w - - 3 14",
    score: 2,
  },
  {
    lichess: "https://lichess.org/2QStHbvW",
    fen: "r4rk1/pppbq1pp/3bp3/3p1p2/3Pn3/3BPNB1/PPP2PPP/R2QK2R w KQ - 0 11",
    score: -0.1,
  },
  {
    lichess: "https://lichess.org/519xznL9",
    fen: "8/4k3/1p2P3/p1pBK3/P1Pn2p1/8/8/8 w - - 0 49",
    score: -0.4,
  },
  {
    lichess: "https://lichess.org/t2gsL8On",
    fen: "r2r2k1/1p2Qpp1/1qp1pn1p/p3nb2/8/1P1P1NP1/P3PPBP/2R2RK1 w - - 0 19",
    score: 1,
  },
  {
    lichess: "https://lichess.org/FAYwdJep",
    fen: "r4r2/ppp3pk/1bn1b1p1/4p1B1/4P2N/2P4P/PP1N1PP1/R4RK1 w - - 4 16",
    score: 2.8,
  },
  {
    lichess: "https://lichess.org/daALpez6",
    fen: "r3k2r/1p2bppp/1pn1p3/1B1pPb2/3P4/5N2/PP3PPP/R1B2RK1 w kq - 2 13",
    score: 0,
  },
  {
    lichess: "https://lichess.org/UKdsRSZ7",
    fen: "6k1/pbr3p1/1pnN1p2/5B2/8/2N1r3/PP4PP/5RK1 w - - 4 29",
    score: 6.5,
  },
  {
    lichess: "https://lichess.org/STBemSOx",
    fen: "r1bqk2r/p2npp1p/2Q3p1/6B1/8/8/PbP3PP/2KR2NR w kq - 0 14",
    score: -3.7,
  },
  {
    lichess: "https://lichess.org/arR1vVGD",
    fen: "6k1/p1p2rp1/1p1p3Q/4p3/PPP1Pq2/6RP/6PK/8 w - - 1 32",
    score: 0,
  },
  {
    lichess: "https://lichess.org/EndGdAKH",
    fen: "r1bqr1k1/pp1n1pp1/2p1pb1p/3p4/2PP2PP/2N1PN2/PPQ2P2/R3KB1R w KQ - 1 11",
    score: 2.8,
  },
  {
    lichess: "https://lichess.org/uergl3Xv",
    fen: "r1bq1rk1/p4ppp/1pnp1n2/2p1p3/2PPP3/P1PBBP2/4N1PP/R2QK2R w KQ - 2 11",
    score: 1,
  },
  {
    lichess: "https://lichess.org/L3pPVQdU",
    fen: "1k4r1/1b1p4/p3p3/8/P5r1/1PR4P/5PP1/2R3K1 w - - 0 37",
    score: 7.1,
  },
  {
    lichess: "https://lichess.org/Vc6LAzwH",
    fen: "3r2k1/ppb2pp1/2p1p1qp/3n4/3P3P/P1BR1QP1/1P3PK1/3R4 w - - 3 30",
    score: 0.2,
  },
  {
    lichess: "https://lichess.org/0lhq90Jg",
    fen: "1rbq1r1k/1pn1b1p1/p2p1n1p/P1pP2N1/2P2P2/6NP/1P4B1/R1BQR1K1 w - - 0 20",
    score: 3.7,
  },
  {
    lichess: "https://lichess.org/mWkcBgYD",
    fen: "r4r1k/ppp4p/1bn1qp2/4p3/6bQ/2PP2PN/P1PB1PBK/R4R2 w - - 5 20",
    score: 2.8,
  },
  {
    lichess: "https://lichess.org/HnGNST2p",
    fen: "r2b1rk1/pp4p1/1qn4p/2pN1b2/2PpN3/1P3QP1/P3P1BP/R4RK1 w - - 7 21",
    score: 9.7,
  },
  {
    lichess: "https://lichess.org/D3qNKeca",
    fen: "r1b1qr1k/pp4bp/8/4npp1/5N2/1Q2P1P1/PP1B1PBP/R2R2K1 w - - 0 19",
    score: 4.1,
  },
  {
    lichess: "https://lichess.org/pE2tocQL",
    fen: "2r3k1/p4r1p/1pn1q1pB/2ppPp2/3P4/2P3P1/PP1QR2P/R5K1 w - - 5 22",
    score: 1.6,
  },
  {
    lichess: "https://lichess.org/QGizPB3W",
    fen: "1k4r1/1ppqp2p/p1n2n2/3p1P2/3P2rN/2PB1QP1/PP5P/4RR1K w - - 0 22",
    score: 3.8,
  },
  {
    lichess: "https://lichess.org/egfgr86O",
    fen: "r4rk1/ppqnppbp/2p1bnp1/2PpN3/3P1P2/1QNBP3/PP1B2PP/R3K2R w KQ - 4 12",
    score: 0.6,
  },
  {
    lichess: "https://lichess.org/QDHExvYy",
    fen: "2r1r3/5kpp/2p2p2/1p6/pPnP4/4P1P1/P4PKP/1RR1B3 w - - 1 34",
    score: 0.5,
  },
  {
    lichess: "https://lichess.org/JMraaoVM",
    fen: "r5k1/pb3p2/1p2r1pp/P2p4/2pPq3/2P1PN2/4QPPP/1R1R2K1 w - - 1 22",
    score: 1.1,
  },
  {
    lichess: "https://lichess.org/HqBAnlF2",
    fen: "3r3k/2b3p1/2P4p/5B2/pB4P1/P6P/5P2/6K1 w - - 1 39",
    score: 1.7,
  },
  {
    lichess: "https://lichess.org/UH7bwAOO",
    fen: "r2q1rk1/pp2ppbp/2np1np1/8/4PPP1/3BB2P/PP3Q2/RN3RK1 w - - 1 15",
    score: -1.6,
  },
  {
    lichess: "https://lichess.org/Q3Q71iLC",
    fen: "r3k2r/1pq1n1pp/p1p1bp2/4b3/4P3/3B4/PPPBN1PP/R2Q1R1K w kq - 0 15",
    score: -0.2,
  },
  {
    lichess: "https://lichess.org/P4ouhWYk",
    fen: "2kr1b1r/ppp2ppp/4pn2/q2P4/1n4b1/1BN1BN2/PPP2PPP/R2Q1RK1 w - - 2 12",
    score: -1.3,
  },
  {
    lichess: "https://lichess.org/6JqyeiK2",
    fen: "1r1q1rk1/p1pb1ppp/3p2n1/2p3b1/3QP3/1PN4P/PBP1BPP1/R3R1K1 w - - 0 17",
    score: 0,
  },
  {
    lichess: "https://lichess.org/btlxpmWJ",
    fen: "r1b2rk1/1pp2p2/p4bpp/3P4/2P4P/3B4/PP1Q2P1/4R2K w - - 0 22",
    score: 7.1,
  },
  {
    lichess: "https://lichess.org/KtWNYaGo",
    fen: "rnb2rk1/pp4bp/2pq4/4N2Q/3P4/2N3PP/PP3pB1/R4RK1 w - - 0 16",
    score: 1.2,
  },
  {
    lichess: "https://lichess.org/43J6WXFC",
    fen: "r1bq1r2/pp1nppkp/3p1np1/2p5/3PP3/2N2N2/PPPQ1PPP/R3KB1R w KQ - 0 9",
    score: 1.8,
  },
  {
    lichess: "https://lichess.org/GQzhQptE",
    fen: "r1bq1rk1/1p4b1/5np1/p1PPp2p/4P3/R2N4/4QBPP/2R3K1 w - - 1 26",
    score: -3.2,
  },
  {
    lichess: "https://lichess.org/8yW4dIlc",
    fen: "r6k/p1pp2bp/1p4p1/8/2P2P2/6P1/PP2n2P/R1B2RK1 w - - 2 22",
    score: 4.4,
  },
  {
    lichess: "https://lichess.org/eEcbnOFT",
    fen: "1r3rk1/2p1q1bp/p1n1b3/3p4/1p1PpBpN/1BP2P1P/PP3Q2/2KR2R1 w - - 0 20",
    score: -2.7,
  },
  {
    lichess: "https://lichess.org/3tpWmot6",
    fen: "r2r2k1/1q3pbp/3np1p1/1P1p4/p1pP1P2/2P1PN1P/1PQ3PB/4RRK1 w - - 0 24",
    score: -1.9,
  },
  {
    lichess: "https://lichess.org/XQ7aWnpl",
    fen: "4r3/p3P1p1/1p3n1p/2pk1P1P/3p1P2/8/PP6/4RR1K w - - 1 33",
    score: 5.5,
  },
  {
    lichess: "https://lichess.org/5U5fHVSS",
    fen: "r1b2rk1/pp2bpp1/3p1n1p/q3p1B1/3QPP1P/2N5/PPP3P1/1K1R1B1R w - - 0 13",
    score: 0.8,
  },
  {
    lichess: "https://lichess.org/WkM0t1MZ",
    fen: "1k1r1b1r/1p3p2/B1b1p2n/q3P1Np/3P3R/5PB1/P3Q1P1/2R2K2 w - - 1 23",
    score: 0.3,
  },
  {
    lichess: "https://lichess.org/GZVeBb1m",
    fen: "r2q1rk1/4n1bp/p2p2b1/1p1Npp2/8/2P1N3/PP2BPPP/R2Q1RK1 w - f6 0 17",
    score: 0.8,
  },
  {
    lichess: "https://lichess.org/4asgxV4O",
    fen: "2kr1bnr/ppq1p1p1/n1p1Pp1p/3p1N1P/3P4/3P3N/PP2QPP1/R1B1K2R w KQ - 5 15",
    score: 8.7,
  },
  {
    lichess: "https://lichess.org/6s3NNx0n",
    fen: "r3kn1r/1p1bb2p/1qn1pp2/3p3P/pp1P1B2/1N1B1NP1/P1P2PK1/R2QR3 w kq - 0 18",
    score: 0,
  },
  {
    lichess: "https://lichess.org/C6RnBoZL",
    fen: "2kr1b1r/1ppn2pp/p7/3Pqp2/QPP1p3/4B2P/P2RBPP1/1K5R w - f6 0 19",
    score: 7.7,
  },
  {
    lichess: "https://lichess.org/nQ0dfGxX",
    fen: "2r3k1/pb2q1bp/1p2p1p1/2ppP3/2PPp3/BP2P3/P2NQ1PP/5RK1 w - - 1 18",
    score: -0.1,
  },
  {
    lichess: "https://lichess.org/N5h6qMz9",
    fen: "r1b1r1k1/pp3pp1/1bpp1qn1/7p/3PPn2/2N1B2P/PPQ2PPK/3RRBN1 w - - 0 18",
    score: 2.3,
  },
  {
    lichess: "https://lichess.org/7ohfmdhn",
    fen: "r1bq1brk/p6p/2pP1nn1/2N1p1p1/1P2Pp2/2N2P2/P3BBPP/R2Q1RK1 w - - 3 20",
    score: 2.8,
  },
  {
    lichess: "https://lichess.org/X1okUfbK",
    fen: "2r2r1k/pppb1nbp/2n2pp1/3N4/2B2PP1/4BN1P/PPP2K2/R6R w - - 6 17",
    score: 1.2,
  },
  {
    lichess: "https://lichess.org/SR6QiX7z",
    fen: "3r1rk1/pp3p1p/6p1/8/1Q1b1q2/8/PP3BB1/1R3RK1 w - - 0 29",
    score: 1.9,
  },
  {
    lichess: "https://lichess.org/0PD7XABe",
    fen: "rnbq1rk1/pp3pbp/5np1/3pp3/8/2NP1NP1/PP1BPPBP/R2Q1RK1 w - - 0 10",
    score: 1.6,
  },
  {
    lichess: "https://lichess.org/eZhRYHIF",
    fen: "3r1rk1/pp4p1/1q2p2p/2bnN2P/2P1p3/8/PP2QPP1/1K1RR3 w - - 0 22",
    score: -7.6,
  },
  {
    lichess: "https://lichess.org/IPPTxtrj",
    fen: "r3r3/7k/2p4p/1p1b1p2/pPpPqNp1/P3P1P1/2Q2PP1/2R1R1K1 w - - 4 36",
    score: 0.2,
  },
  {
    lichess: "https://lichess.org/xdTmLS1D",
    fen: "r3kb1r/1pq2ppp/p1n1pn2/3p4/5Pb1/N1PQBNP1/PP2P1BP/R3K2R w KQkq - 0 11",
    score: -1.7,
  },
  {
    lichess: "https://lichess.org/plygu2mX",
    fen: "r7/1p2kp1p/1p1bp1p1/nB1p4/3P1P2/P1r1P3/1P1BKP1P/R7 w - - 0 18",
    score: 0,
  },
  {
    lichess: "https://lichess.org/HQAuBTg7",
    fen: "r1b2r2/ppp3Bp/3p2k1/6q1/2n1P3/4Q3/P4PP1/RN3RK1 w - - 2 21",
    score: 7,
  },
  {
    lichess: "https://lichess.org/SFdGWllF",
    fen: "2r1rn2/5pkp/1pp3p1/3pPP2/Pp1P2P1/1B6/7P/2R1R1K1 w - - 3 26",
    score: 0,
  },
  {
    lichess: "https://lichess.org/cGlpzXzh",
    fen: "3q2k1/5pp1/4n2p/p3P3/6P1/5N2/2P1Q2P/7K w - - 0 28",
    score: -6,
  },
  {
    lichess: "https://lichess.org/Lwn3UJF9",
    fen: "5bk1/5p2/2q1p1p1/4P2p/3B1P1P/2P3P1/3N4/5RK1 w - - 1 29",
    score: -0.2,
  },
  {
    lichess: "https://lichess.org/mSwIOG9i",
    fen: "2krr3/pp4pp/4p1b1/2P1B3/2P1n1P1/5B2/P6P/R4RK1 w - - 1 24",
    score: 3.1,
  },
  {
    lichess: "https://lichess.org/LlA5dbnF",
    fen: "4r1k1/pp2rppp/2pb4/3n1B2/PP1P4/4B2P/2R2KP1/4R3 w - - 2 26",
    score: -5.9,
  },
  {
    lichess: "https://lichess.org/PSzu7U8q",
    fen: "4r1k1/p4rp1/1bp3np/3pBp2/3PpP2/2P4P/PP2b1PN/R3R1K1 w - - 0 30",
    score: -6.1,
  },
  {
    lichess: "https://lichess.org/gDysDuom",
    fen: "r1b1kb1r/pp2q1pp/2n2n2/1B1p1p2/3P4/1QN2N2/PP3PPP/R1B1K2R w KQkq - 6 10",
    score: 2.9,
  },
  {
    lichess: "https://lichess.org/S6mgqgBu",
    fen: "3q1rk1/p3bppp/2r1pn2/1pp5/3pPP2/1P1P2N1/P1P3PP/R1BQ1RK1 w - - 0 14",
    score: 0,
  },
  {
    lichess: "https://lichess.org/d3P3xX62",
    fen: "1r1q1rk1/1b2pp1p/2n3p1/2p5/1p1bPPP1/3P2P1/R1P1N1B1/1N1Q1RK1 w - - 2 18",
    score: -2.7,
  },
  {
    lichess: "https://lichess.org/TGKqhTWm",
    fen: "8/1p1r2kp/2n3p1/1Q3p2/3qp3/8/1r3PPP/1R3BK1 w - - 0 46",
    score: -4.7,
  },
  {
    lichess: "https://lichess.org/V1tKkMsV",
    fen: "2k1b2r/pp5q/2n1pP2/8/3pQPP1/P1p5/2P1NK2/1RB5 w - - 0 25",
    score: 0,
  },
  {
    lichess: "https://lichess.org/OegoZUoS",
    fen: "3q1kr1/pb2bp2/1p3np1/3p1pBp/2pP3Q/2P1P1R1/PPB3PP/5RK1 w - - 0 24",
    score: 7.9,
  },
  {
    lichess: "https://lichess.org/apZ7ljLR",
    fen: "r4rk1/pb1n2p1/2pp4/4p1pP/1p1P4/5P1N/PPP1N3/2KR1n1R w - - 0 18",
    score: -2.2,
  },
  {
    lichess: "https://lichess.org/kX721JxG",
    fen: "1r4k1/pp2prbp/1q6/5p1p/3P4/2N1P3/PP3PPP/2RQK2R w K - 0 17",
    score: 3.3,
  },
  {
    lichess: "https://lichess.org/BR7r5US1",
    fen: "r4rk1/pp1bpp1n/2np2p1/4q1P1/4P2R/1NP1B3/P1PQBP2/R3K3 w Q - 1 17",
    score: 7.8,
  },
  {
    lichess: "https://lichess.org/bJ8IEXgW",
    fen: "4rr1k/p6p/5q2/1B1R1b2/P3p3/5PR1/6P1/4Q1K1 w - - 1 32",
    score: 7,
  },
  {
    lichess: "https://lichess.org/AFjsr060",
    fen: "3rr1k1/2qn2bp/1pp1b3/2p2p2/N1P1PP2/1P2B2P/P4QB1/2R1R2K w - - 0 25",
    score: 4,
  },
  {
    lichess: "https://lichess.org/HMRm6bnO",
    fen: "r1bq1rk1/1p2b2p/2p1p3/p3Npp1/1nPPpB2/2N1P3/PP2QPPP/1K1R3R w - g6 0 14",
    score: 2.6,
  },
  {
    lichess: "https://lichess.org/vCKGKGLz",
    fen: "6k1/3q4/r1pb2p1/1p1p1p1p/p2PrP2/P3PRP1/1PQB1R1P/6K1 w - - 2 32",
    score: -0.9,
  },
  {
    lichess: "https://lichess.org/IG8o6iHi",
    fen: "rn3rk1/ppq2pbp/3pbnp1/2p5/4P3/2N2N1P/P1PBBPP1/1R1Q1RK1 w - - 0 13",
    score: -0.2,
  },
  {
    lichess: "https://lichess.org/sbTdwKuD",
    fen: "r1bq1rk1/1pp3pp/3p4/pPn2p2/P1PNP3/3Pn1P1/4P1BP/RN1Q1RK1 w - - 0 16",
    score: -5.7,
  },
  {
    lichess: "https://lichess.org/4rpX4feS",
    fen: "rnbqk2r/pp3pb1/4p2p/2ppP1p1/3P1P2/6P1/PPPN2P1/R2QKBNR w KQkq - 1 10",
    score: 0.3,
  },
  {
    lichess: "https://lichess.org/vB6OvObN",
    fen: "rqb1k2r/3nbppp/p2ppn2/1p6/3NP3/1BN1B3/PP2QPPP/2RR2K1 w kq - 12 15",
    score: 6,
  },
  {
    lichess: "https://lichess.org/tzeedLOb",
    fen: "8/R2B1p2/5kp1/3P4/2p5/2P2nP1/P2r4/4K3 w - - 2 38",
    score: -1.3,
  },
  {
    lichess: "https://lichess.org/T2Od6skY",
    fen: "r3r1k1/3qbpp1/p1n4p/1ppbp3/8/2PP1N1P/PPB1QPPK/R1B1R3 w - - 0 19",
    score: -1.6,
  },
  {
    lichess: "https://lichess.org/Dlwrcuy8",
    fen: "5k2/p5p1/1b4K1/3B4/3p4/1p1P2P1/PP2PP2/8 w - - 0 44",
    score: 6.5,
  },
  {
    lichess: "https://lichess.org/woXGTAJD",
    fen: "3qr1k1/r4pb1/1pbp2pp/2n5/p1PpPPP1/3B2NP/PP2QB1K/1R2R3 w - - 2 25",
    score: -1.4,
  },
  {
    lichess: "https://lichess.org/ckSfUoDK",
    fen: "r2r2kb/1p3p1p/2ppb1p1/8/p3PP1q/P1N3N1/1P1Q2PP/2R2R1K w - - 3 30",
    score: -3,
  },
  {
    lichess: "https://lichess.org/Gq32PgwL",
    fen: "3r4/pp4k1/2ppr1p1/8/2P2P2/1P4P1/P2R2K1/7R w - - 0 32",
    score: 0.9,
  },
  {
    lichess: "https://lichess.org/VhxQXa1l",
    fen: "8/ppp4p/4k1p1/1Pb1p1P1/P1P1R2P/4r3/4K3/8 w - - 0 30",
    score: -8.5,
  },
  {
    lichess: "https://lichess.org/UHbeZLzg",
    fen: "r2q1rk1/1b3p1p/2nbp3/pp1p1p2/1P1P4/P1NBPNP1/5P1P/2RQ1RK1 w - - 0 15",
    score: 0.8,
  },
  {
    lichess: "https://lichess.org/zkWp8RYx",
    fen: "r6k/pp5p/5p2/3b1p2/P3pP2/2P1P1P1/7P/R2r1BK1 w - - 0 28",
    score: 0.1,
  },
  {
    lichess: "https://lichess.org/bXSZFb08",
    fen: "r1bqk1nr/pp1p1pbp/2n1p1p1/2p1P3/8/5N1Q/PPPP1PPP/RNB1KB1R w KQkq - 2 6",
    score: -2.1,
  },
  {
    lichess: "https://lichess.org/ag3IcO6A",
    fen: "1knr1r2/2p3p1/1p2p2p/PP1pP3/Q2P4/2N1q3/6PP/R2R2K1 w - - 5 28",
    score: 3.6,
  },
  {
    lichess: "https://lichess.org/KRgFfnnf",
    fen: "r5k1/3b1r1p/p1n1pBpP/1p1pP3/2p5/q1P5/2PQBPP1/1R3RK1 w - - 0 21",
    score: 0.7,
  },
  {
    lichess: "https://lichess.org/i0VDo4sj",
    fen: "r3k2r/ppqbnpp1/2n1p2p/2BpP3/PP3P2/2PB1N2/6PP/R2Q1RK1 w k - 3 17",
    score: 4.3,
  },
  {
    lichess: "https://lichess.org/Uposbk18",
    fen: "2r4k/1b1n2pp/p2P4/1p2pp2/1Pr1p3/P3P1P1/1Qq1NPBP/3R1RK1 w - - 9 25",
    score: -1.3,
  },
  {
    lichess: "https://lichess.org/FBI2xDuA",
    fen: "r5k1/pp3ppp/2n1b3/3n1q2/2B5/Q4N2/PP3PPP/2RR2K1 w - - 8 22",
    score: 7.1,
  },
  {
    lichess: "https://lichess.org/XxnQWvsk",
    fen: "3r2k1/1b3r1p/2n1q3/p1p1pp2/1pN3pP/3PP1P1/PPP1QRB1/R5K1 w - - 4 23",
    score: 0.5,
  },
  {
    lichess: "https://lichess.org/afJxtHLb",
    fen: "r1b2r2/ppp2pk1/3p2p1/6N1/3bP1q1/8/PPP3PP/R1B1QR1K w - - 3 18",
    score: 3.2,
  },
  {
    lichess: "https://lichess.org/jR2FDZvu",
    fen: "1r3r1k/2pqn1bp/3p2p1/pP2p3/2P2p2/P1NP2Pb/3NPP1P/1R1QR1KB w - - 0 19",
    score: 2.6,
  },
  {
    lichess: "https://lichess.org/shifPgS1",
    fen: "1r3rk1/4q2p/p1n1bbp1/2p1pp2/1pP5/P3PPP1/1PQN1BBP/R2R2K1 w - - 0 26",
    score: -1.6,
  },
  {
    lichess: "https://lichess.org/lFafAZAR",
    fen: "3rr3/1p3p2/p1p2nbk/2P3Rp/1PBPp2P/4P3/1P1KN3/6R1 w - - 4 29",
    score: 6.7,
  },
  {
    lichess: "https://lichess.org/NApN7JEH",
    fen: "r1bqr1k1/p5pp/1p1p1pN1/1B1pn2P/4p3/4P2Q/PPP2PP1/R3K2R w KQ - 4 17",
    score: -3.9,
  },
  {
    lichess: "https://lichess.org/Aip942HS",
    fen: "6k1/pb2q1pp/1p2p3/3pP1b1/3Pp3/BPP5/P3Q1PP/1N3rK1 w - - 0 22",
    score: -3.8,
  },
  {
    lichess: "https://lichess.org/NGaGMC77",
    fen: "1k6/p3bpp1/qp2p1r1/4Pn2/5P1p/2Nr3P/2PB2PK/3RQ3 w - - 0 24",
    score: -5.8,
  },
  {
    lichess: "https://lichess.org/S8jC3qOY",
    fen: "1q2k1nr/1r6/p2pp2p/1p2np2/6p1/P1N3P1/1PP2QPP/4RR1K w k - 0 22",
    score: -8.1,
  },
  {
    lichess: "https://lichess.org/7WnxbpB2",
    fen: "r7/pp3k1p/2pBp1b1/8/6n1/2P5/P4PPP/3RR1K1 w - - 2 31",
    score: 6.8,
  },
  {
    lichess: "https://lichess.org/bdNOhdvT",
    fen: "2r2rk1/pp3ppp/3p4/2pP2q1/4Pp2/2N1nP1P/PP2Q1P1/2R2RK1 w - - 2 18",
    score: -3.1,
  },
  {
    lichess: "https://lichess.org/xZG5gmmk",
    fen: "5bk1/2B2ppp/p5b1/5NP1/n1p1P3/6NP/P2r4/5RK1 w - - 4 34",
    score: -3.6,
  },
  {
    lichess: "https://lichess.org/WnKevCJ6",
    fen: "r1b2rk1/1p3ppp/p1n1pb2/2q5/3N4/2B1PB2/PP3PPP/R2Q1RK1 w - - 3 14",
    score: 2.5,
  },
  {
    lichess: "https://lichess.org/H88h1kN4",
    fen: "1r6/3kbrp1/1p1q1p2/pRpPpPp1/PnP1P2P/4B1R1/5Q2/1B5K w - - 0 49",
    score: -0.1,
  },
  {
    lichess: "https://lichess.org/iyZN3jvH",
    fen: "r1bq1rk1/pp1p1pbp/6p1/2n1p3/4P3/2N1PN2/PPP1B1PP/R2QK2R w KQ - 0 11",
    score: 0,
  },
  {
    lichess: "https://lichess.org/BWGApBI8",
    fen: "r1bq1rk1/1p1n2bp/3n2p1/p2Ppp2/4P3/2NBBN1P/PP4P1/2RQ1RK1 w - f6 0 17",
    score: 3.2,
  },
  {
    lichess: "https://lichess.org/oIRHOGVs",
    fen: "2b2rk1/p1q2ppp/1p3n2/4N3/8/1P6/P3BPPP/3Q1RK1 w - - 1 19",
    score: 0,
  },
  {
    lichess: "https://lichess.org/dDaWDprP",
    fen: "3r1rk1/2p1b1pp/p3p3/4P3/8/2P2NB1/P2n1PPP/2R2RK1 w - - 3 22",
    score: -0.3,
  },
  {
    lichess: "https://lichess.org/ymEGOPP5",
    fen: "rnb2rk1/ppq1ppbp/6p1/8/2BpP3/2P1B3/P3NPPP/R2Q1RK1 w - - 0 11",
    score: -4.1,
  },
  {
    lichess: "https://lichess.org/DCyv5Xa3",
    fen: "rn1q1rk1/ppb2pp1/2p1bn1p/2Pp4/3P4/2NB1N1P/PP3PP1/R1BQ1RK1 w - - 1 11",
    score: 1,
  },
  {
    lichess: "https://lichess.org/tJqBSfGh",
    fen: "r2qk2r/1b1n1pp1/ppn1p3/3pP3/3p1P1b/4BN1P/PPP1N1B1/R2Q1RK1 w kq - 0 15",
    score: 1.1,
  },
  {
    lichess: "https://lichess.org/zEim78Je",
    fen: "2qrr1k1/pp3pb1/1np3pp/3P4/4PP2/1PN2bP1/P1QR2BP/4R2K w - - 0 22",
    score: 0.4,
  },
  {
    lichess: "https://lichess.org/iVf5a2En",
    fen: "r2qkbr1/pp2nb1p/2n2Q2/3p1p2/3PpP2/1PN1P3/PB1N2PP/R3KB1R w KQq - 3 14",
    score: 0.4,
  },
  {
    lichess: "https://lichess.org/fukgDn2Q",
    fen: "8/1p2rpk1/p1p3p1/7p/P1Q4P/6q1/1P2n1BK/5R2 w - - 0 44",
    score: -10.7,
  },
  {
    lichess: "https://lichess.org/YKHbVem5",
    fen: "r3q1k1/2pr1ppp/1p2pb2/8/2PPQ3/pPBR2P1/P4P1P/5RK1 w - - 3 20",
    score: 0.5,
  },
  {
    lichess: "https://lichess.org/uBDCdLxW",
    fen: "r1b2k1r/3pnpb1/3Np1p1/n3q2p/4P3/1BP1B3/PP1Q1PPP/1K1R3R w - - 1 16",
    score: 0.9,
  },
  {
    lichess: "https://lichess.org/201YxWdU",
    fen: "r5k1/4p2p/pq1pprp1/1p2P3/5bQ1/2N4P/PPR3P1/3R2K1 w - - 1 21",
    score: -7.7,
  },
  {
    lichess: "https://lichess.org/ql7X7d0N",
    fen: "rn3rk1/pbpqn1pp/1p2pp2/8/2BP4/2P2NB1/PP3PPP/R2QK2R w KQ - 4 12",
    score: 1.1,
  },
  {
    lichess: "https://lichess.org/wJniXcnR",
    fen: "3rk2r/4pp2/1qp3p1/p1Np1n1p/P2P3P/1P3P2/2PQ1P2/2KRR3 w k - 2 21",
    score: 0.4,
  },
  {
    lichess: "https://lichess.org/VsXF1FA2",
    fen: "r1r4k/5p1p/3q4/p2p2R1/1p1Pn3/2PQ4/PP4PP/5RK1 w - - 3 23",
    score: -7.1,
  },
  {
    lichess: "https://lichess.org/qgOcvVZx",
    fen: "5r2/pp3pkp/n1p3p1/3b4/3P4/P3B1P1/1P3P1P/Q5K1 w - - 0 27",
    score: 3.9,
  },
  {
    lichess: "https://lichess.org/L3rqNUXR",
    fen: "4r2k/pp2r3/2p2n2/8/3R1P2/P5P1/1PP4P/2KR4 w - - 3 30",
    score: -0.9,
  },
  {
    lichess: "https://lichess.org/Vq3ytrUE",
    fen: "7r/2k1pp1r/pp3n2/3P3p/2P4R/1P2K3/4BP2/7R w - - 0 27",
    score: -0.1,
  },
  {
    lichess: "https://lichess.org/6WqV0Mxu",
    fen: "r3k2r/bpp1q3/p1nppn1p/4p1p1/4P3/2PP1NBP/PP1NQPP1/R3K2R w KQkq - 2 13",
    score: -0.6,
  },
  {
    lichess: "https://lichess.org/XjpzvZSy",
    fen: "r2r3k/pp3ppB/1q2bb1p/2p5/1n2Q3/4PNB1/PP3PPP/R4RK1 w - - 6 18",
    score: -1.6,
  },
  {
    lichess: "https://lichess.org/1wlRtnnM",
    fen: "8/p7/2P5/8/8/P3K1P1/1P3pk1/8 w - - 0 39",
    score: 0.3,
  },
  {
    lichess: "https://lichess.org/GUexHnqY",
    fen: "4rr2/5Pkp/3p2p1/p2B2P1/1pPp4/1P1b3P/P6K/4R3 w - - 0 38",
    score: 10.9,
  },
  {
    lichess: "https://lichess.org/EgBCK6yf",
    fen: "5rk1/1pqnprbp/p2p1np1/P1pP4/2P2P2/2N2B2/1P1BQ1PP/R4R1K w - - 3 20",
    score: 4.1,
  },
  {
    lichess: "https://lichess.org/GqtVnhWy",
    fen: "2b2rk1/pp4pp/4p3/nq2N3/3PpP2/8/P5PP/2RQ1R1K w - - 0 25",
    score: 5.9,
  },
  {
    lichess: "https://lichess.org/eTJZfAkF",
    fen: "4rrk1/5ppp/p1p5/1p6/3P1bb1/1BPQ2Pq/PP1N1P1P/R3R1K1 w - - 0 19",
    score: 4.6,
  },
  {
    lichess: "https://lichess.org/R8HuOlsD",
    fen: "1r2r1k1/5ppp/pq1n1n2/2pP4/5P2/4N1PB/1PRQ3P/2R4K w - - 8 30",
    score: -0.5,
  },
  {
    lichess: "https://lichess.org/KVhk7Dsv",
    fen: "r5k1/p1pp2p1/1p2p1qr/3n2N1/2nP1P1P/2P3Q1/P1P5/2B1R1RK w - - 7 27",
    score: -2.7,
  },
  {
    lichess: "https://lichess.org/tSrpFong",
    fen: "1k1r1r2/ppp3pp/2p5/4PB2/3P4/8/PPPRb2P/1K4R1 w - - 6 20",
    score: 3.8,
  },
  {
    lichess: "https://lichess.org/VrOM1Xh9",
    fen: "r1b1k2r/ppqp1pb1/2p3pp/4P3/2B2PnP/2NQ4/PPP3P1/R1B2RK1 w kq - 1 13",
    score: 1.3,
  },
  {
    lichess: "https://lichess.org/Iz6OgkRw",
    fen: "r1b2rk1/4ppbp/np1q1np1/2pp4/P1PP4/B3PN2/3N1PPP/R2QKB1R w KQ c6 0 11",
    score: -0.3,
  },
  {
    lichess: "https://lichess.org/1uukdE86",
    fen: "1r1r2k1/4qppp/4pn2/pNP5/1P1p1b2/3Q1B2/P4PP1/1R1R3K w - - 2 27",
    score: 1.3,
  },
  {
    lichess: "https://lichess.org/U4TAehtK",
    fen: "r5k1/6pp/p1p2p1n/8/3P1N2/5P1P/PPP1rP2/R5K1 w - - 0 23",
    score: 4,
  },
  {
    lichess: "https://lichess.org/my19e6D2",
    fen: "r1bq1rk1/pp4pp/2n2b2/2ppp3/5B2/2PP2PP/PP1NQ1B1/R4RK1 w - - 0 16",
    score: -1.3,
  },
  {
    lichess: "https://lichess.org/Ph6ANhQy",
    fen: "r1b2rk1/p4pp1/5n1p/3p4/1q6/2NQ2P1/PP3PBP/2R2RK1 w - - 0 17",
    score: 1.7,
  },
  {
    lichess: "https://lichess.org/rtabgIR4",
    fen: "4q1k1/1rn1b2p/p2p1np1/B2Pp3/N1P1P1b1/3N1B2/2Q3PP/5RK1 w - - 3 27",
    score: 3.3,
  },
  {
    lichess: "https://lichess.org/YDu5J7s5",
    fen: "r4rk1/pp3pbp/2n1bqp1/8/P2p4/1BN2P2/1PPQ2PP/1K1R2NR w - - 0 15",
    score: -1.3,
  },
  {
    lichess: "https://lichess.org/qKWTyB4o",
    fen: "8/ppp1r3/3k4/3P3p/2P5/4pK1P/PP2R3/8 w - - 2 35",
    score: 0.7,
  },
  {
    lichess: "https://lichess.org/lvcBSYbM",
    fen: "r2qr1k1/pppb2bp/2np2p1/5p1n/2PNPP2/1PN1B1PP/P5BK/R2Q1R2 w - f6 0 15",
    score: 1.9,
  },
  {
    lichess: "https://lichess.org/ZaONsvLO",
    fen: "8/2p4k/p5pp/4bp2/5N2/5KP1/P4P2/8 w - - 2 38",
    score: -6.8,
  },
  {
    lichess: "https://lichess.org/KuHi6Po6",
    fen: "2r5/4ppk1/3p2p1/pR5p/P2NP2P/2r2nP1/R1PK4/8 w - - 0 28",
    score: -0.9,
  },
  {
    lichess: "https://lichess.org/lRNjRmQI",
    fen: "rnbqkbnr/pppp1ppp/4p3/8/2P5/8/PP1PPPPP/RNBQKBNR w KQkq - 0 2",
    score: 0.4,
  },
  {
    lichess: "https://lichess.org/JZwC3Mri",
    fen: "r2q1rk1/1p1bppb1/p1np1np1/7p/3NP1PP/2N1BP2/PPPQ4/2KR1B1R w - h6 0 12",
    score: 2.8,
  },
  {
    lichess: "https://lichess.org/bEvKsnzq",
    fen: "5k2/1p1r1pb1/2p3p1/p2p2Np/2P2P1B/1P3K2/P7/3R4 w - - 4 35",
    score: 4.3,
  },
  {
    lichess: "https://lichess.org/6r3vkiGO",
    fen: "r4rk1/1pq3p1/1npp2p1/4n1b1/3BPNb1/pP6/P1PQN1B1/2KR3R w - - 7 22",
    score: -4.2,
  },
  {
    lichess: "https://lichess.org/faSFbGbf",
    fen: "r3k2r/1p2qppp/p1bp4/2n1p3/2P1P3/2NQ1N2/PP3PPP/R2R2K1 w kq - 2 15",
    score: 1.8,
  },
  {
    lichess: "https://lichess.org/LGTiI3n1",
    fen: "r4rkn/pppqn1p1/6b1/3Pp3/2P3p1/P1B4P/1P2N1B1/R2Q1RK1 w - - 0 18",
    score: -1.6,
  },
  {
    lichess: "https://lichess.org/JcA9a3yG",
    fen: "6k1/4rp2/p4Q2/1p2pP2/nP2P3/4b2P/5qB1/R6K w - - 0 35",
    score: 7.2,
  },
  {
    lichess: "https://lichess.org/OQke7hTa",
    fen: "3r4/4kpp1/3rp2p/p1p5/P4P2/1b1BK1P1/2P4P/4RR2 w - - 0 24",
    score: -1.4,
  },
  {
    lichess: "https://lichess.org/b6CofYS9",
    fen: "r7/5p1p/2kpnB1P/1pp1p3/p3Pp2/P2P4/1P3K2/6R1 w - - 2 30",
    score: -9.1,
  },
  {
    lichess: "https://lichess.org/ggQapuww",
    fen: "r1b1k1nr/pp3ppp/2n5/2q5/3p4/5N2/PP1BPPPP/R2QKB1R w KQkq - 0 10",
    score: 0.5,
  },
  {
    lichess: "https://lichess.org/GwzJUDCI",
    fen: "r2qkb1r/pp4p1/2n2p2/2P2b1p/3p1BnP/2N2NP1/PP2PPB1/R2QK2R w KQkq - 0 12",
    score: 1.6,
  },
  {
    lichess: "https://lichess.org/8Qoje1Uu",
    fen: "1r6/1ppnr1k1/3p2pp/pP1Bp1n1/P2PP3/2P1P1R1/3N2P1/5RK1 w - - 2 40",
    score: 0,
  },
  {
    lichess: "https://lichess.org/5nDEloOE",
    fen: "7k/1r1bNnpr/p2Bpp1p/3pP2P/P1pP2P1/1nP5/R1B2P2/3K3R w - - 10 33",
    score: 7.5,
  },
  {
    lichess: "https://lichess.org/J6ynqrn8",
    fen: "r2bb3/1p4pk/1p2p2p/2ppNr1P/3P1PR1/P1P1PN2/1P1K4/7R w - - 1 23",
    score: 0.9,
  },
  {
    lichess: "https://lichess.org/hV5KOhFv",
    fen: "2rq3r/p3nkp1/3bppp1/2pp4/3P1BPP/3Q4/PPP1NP2/2KR3R w - - 0 17",
    score: 0,
  },
  {
    lichess: "https://lichess.org/vVAsW75U",
    fen: "r4rk1/2p1pp2/1p3qp1/2pP3p/3bP2P/1Q3BP1/PP3P1K/3R1R2 w - - 1 23",
    score: -0.1,
  },
  {
    lichess: "https://lichess.org/OL9SQSgT",
    fen: "rn3rk1/pb1p2pp/1pp3q1/3P1p2/2P5/2PB4/P1QB1PPP/R4RK1 w - - 0 15",
    score: 0.9,
  },
  {
    lichess: "https://lichess.org/AorLhhss",
    fen: "r2qkb1r/ppp1p1pp/2n1p3/3p4/Q1nP4/5B1P/PP3PP1/RNB1K2R w KQkq - 0 11",
    score: -2.9,
  },
  {
    lichess: "https://lichess.org/mRyOiUGN",
    fen: "3r3r/pp3pk1/5b2/2pBp1p1/bP2P1P1/P1P2P2/2K1R2N/3R4 w - - 2 27",
    score: -2.8,
  },
  {
    lichess: "https://lichess.org/cmlW3ey8",
    fen: "r3k2r/ppqn1pp1/2p1p1b1/2b1P3/5Pp1/2N3P1/PPP1N1B1/R1BQ1RK1 w kq - 2 16",
    score: 0,
  },
  {
    lichess: "https://lichess.org/4yPFKB9q",
    fen: "8/5p2/p4p1r/1p3P2/3k4/P4n1r/1P4RP/4KB1R w - - 2 34",
    score: -0.5,
  },
  {
    lichess: "https://lichess.org/7juqDL3J",
    fen: "2R5/3r4/1P4k1/3bpp1p/6pP/4B1K1/5P2/8 w - - 0 43",
    score: -4.6,
  },
  {
    lichess: "https://lichess.org/9WpoHacK",
    fen: "2n2r2/r1pR1pk1/1p3p1p/pR1Bp3/P1P1P2P/6P1/1P3P2/6K1 w - - 1 31",
    score: 5.4,
  },
  {
    lichess: "https://lichess.org/DFdSg5L9",
    fen: "4r3/1pBr1pbk/p1n1p1qp/5p2/P2p1P2/1P1N1Q2/2PP2PP/1R3RK1 w - - 7 22",
    score: -0.1,
  },
  {
    lichess: "https://lichess.org/82hNzxIG",
    fen: "r1bq1rk1/ppp2p2/2n1pbp1/7p/3PN2P/2PB1N2/PP3PP1/R2QK2R w KQ h6 0 11",
    score: 1.1,
  },
  {
    lichess: "https://lichess.org/SbfSe3ls",
    fen: "r3k2r/1p3p1p/p1n1p1p1/q2p2N1/P1pP1n2/7Q/2P2PPP/3R1R1K w kq - 0 18",
    score: -8.8,
  },
  {
    lichess: "https://lichess.org/PR99Q9HN",
    fen: "r2q1rk1/3pbppp/p5n1/1p2Pp1Q/4N3/1P6/1P4PP/R1B2RK1 w - - 0 17",
    score: -3.2,
  },
  {
    lichess: "https://lichess.org/a9dqcUrr",
    fen: "r4rk1/pppq2bp/3p2p1/3N1b2/2Pp1P2/3P2PP/PP2Q1BK/4RR2 w - - 0 19",
    score: 4,
  },
  {
    lichess: "https://lichess.org/rEukRyOH",
    fen: "2rqr1k1/pn1n1pbp/1p1Pp1p1/8/2PN4/2N1B2P/P2Q1PP1/2RR2K1 w - - 0 22",
    score: 3.6,
  },
  {
    lichess: "https://lichess.org/GyXzZ2W6",
    fen: "R1bq1rk1/1r4pp/2p1pb2/1pPpBp2/3Pn3/6P1/1PQNPPBP/R5K1 w - - 3 17",
    score: 4.2,
  },
  {
    lichess: "https://lichess.org/nbQOgzHv",
    fen: "r3k1r1/ppp1qp2/2nb1Q1B/4p3/2BpP3/P2P3P/1PP2PP1/R3K2R w KQq - 1 15",
    score: 7.3,
  },
  {
    lichess: "https://lichess.org/fWRVAVwp",
    fen: "3r1rk1/pb1q2p1/1p2p2p/2p5/3nP3/P1NQ1NP1/1PP2RKP/5R2 w - - 4 26",
    score: -1.5,
  },
  {
    lichess: "https://lichess.org/l6SZIjAu",
    fen: "r2qr3/2p2kp1/p2pbn1p/1p6/4P2B/1Q3N1P/Pb3PP1/R4RK1 w - - 2 18",
    score: -1.4,
  },
  {
    lichess: "https://lichess.org/F59pHMFE",
    fen: "1r2r1k1/p1qb1p1p/2pp1bp1/8/2Pp4/2NP2P1/P1Q1PPBP/1R3RK1 w - - 0 19",
    score: -0.1,
  },
  {
    lichess: "https://lichess.org/yGh4xIJ7",
    fen: "r7/pp1b4/3p1Bpk/2p1b3/4P3/2NP2nP/PPP3BK/R7 w - - 0 33",
    score: 7.5,
  },
  {
    lichess: "https://lichess.org/mk3JP7pU",
    fen: "2kr1b1r/pp4p1/1q3nBp/3pn3/6PP/2N1P3/PP3P2/R1BQK2R w KQ - 0 15",
    score: -1.2,
  },
  {
    lichess: "https://lichess.org/mb468thb",
    fen: "r3brkn/1p4pp/4p3/2qpPp1P/pp3P2/3B2P1/P1P1Q2N/R4RK1 w - - 0 20",
    score: -2.4,
  },
  {
    lichess: "https://lichess.org/8NpH7dxs",
    fen: "3rrbk1/5p1p/p1q1p1p1/2p5/2P2P2/1P3P2/2N1Q1KP/1R1R4 w - - 0 29",
    score: -5.2,
  },
  {
    lichess: "https://lichess.org/rmdrXZnX",
    fen: "rr2n1k1/1b2p3/pqnp1pp1/2p4p/2P1PPNP/RPQP2P1/3N2B1/R5K1 w - h6 0 22",
    score: 0.4,
  },
  {
    lichess: "https://lichess.org/WIBZOMt4",
    fen: "7r/pp2kp2/1q2pn2/3p4/1P1p1PPr/P1P1PQRP/3N4/5RK1 w - - 0 26",
    score: 4.7,
  },
  {
    lichess: "https://lichess.org/KrCPs3rD",
    fen: "r5k1/1p1r1bbp/2pB4/2P2p2/8/p1N2P2/PPKN2PP/4R3 w - - 0 27",
    score: -5.3,
  },
  {
    lichess: "https://lichess.org/G9KgN1Km",
    fen: "rr4k1/5ppp/p1nqp3/1pNp4/3P4/P3PP2/1P4PP/2RQ1RK1 w - - 1 19",
    score: 0.4,
  },
  {
    lichess: "https://lichess.org/pMwnObea",
    fen: "6k1/p5p1/b1N1p2p/5p2/3PpP2/r3P3/6PP/4R1K1 w - - 2 28",
    score: -1.3,
  },
  {
    lichess: "https://lichess.org/f7nJRFvp",
    fen: "r3r1k1/2p2ppp/2nqbn2/p2pp3/Bp2P3/P1PP1N1P/1P2QPP1/1N1R1RK1 w - - 2 19",
    score: 1.4,
  },
  {
    lichess: "https://lichess.org/S2mBS6Q1",
    fen: "r1b1rnk1/ppq1bpp1/2p2n1p/2Pp4/3P4/1P1BBN1P/P3NPP1/R2Q1RK1 w - - 1 14",
    score: 0.9,
  },
  {
    lichess: "https://lichess.org/j4wLGDpN",
    fen: "r1bqk2r/ppp2ppp/2n2P2/2b5/2pp4/5N2/PPP2PPP/RNBQ1RK1 w kq - 0 8",
    score: 0.4,
  },
  {
    lichess: "https://lichess.org/hv4oCKHo",
    fen: "4r3/pp6/2p2kp1/8/3P4/2P3P1/PP3K2/R7 w - - 2 33",
    score: 3.5,
  },
  {
    lichess: "https://lichess.org/0yvwcdJt",
    fen: "6k1/2p2pp1/2Nn2p1/1p1P4/1Pp5/3n1BP1/6KP/4rR2 w - - 6 35",
    score: -5.1,
  },
  {
    lichess: "https://lichess.org/jfJjUU6p",
    fen: "r3r1k1/pp3p2/2pB2pp/5b1q/2P2Pn1/1Pb1pN2/P3P1B1/R1RN2K1 w - - 0 23",
    score: -9.1,
  },
  {
    lichess: "https://lichess.org/48lbo8q0",
    fen: "r4k1r/p4p2/4pP1p/1Q1p4/1ppPn3/4BKP1/1q5P/R4B1R w - - 6 32",
    score: 9.2,
  },
  {
    lichess: "https://lichess.org/wTUtmzeV",
    fen: "N6r/Bp2kppp/2bbp3/8/8/8/PPP1KP1P/3R4 w - - 3 22",
    score: -5.4,
  },
  {
    lichess: "https://lichess.org/oAsFePYH",
    fen: "r2q1rk1/p3bppp/3p4/1ppP1n2/4Np2/2PP2P1/PP4BP/R2Q1RK1 w - - 0 16",
    score: -0.8,
  },
  {
    lichess: "https://lichess.org/TNzBsD5n",
    fen: "r3k2r/5p2/1npppq2/3b4/pp1P4/4QPP1/1PPNB2P/1K1R3R w kq - 0 22",
    score: -1,
  },
  {
    lichess: "https://lichess.org/WvHchc6V",
    fen: "r4rk1/1ppq1pp1/p2p1n1p/4nN2/4P1PP/2N1P3/PPP1Q3/2KR3R w - - 1 18",
    score: 2.7,
  },
  {
    lichess: "https://lichess.org/EOJ3ZlnV",
    fen: "2r2rk1/1p1b1pp1/4p2p/pPbpP2P/P2NnPP1/2qBBQ2/2P3K1/R3R3 w - - 1 25",
    score: 3.9,
  },
  {
    lichess: "https://lichess.org/ZidtunzA",
    fen: "r2qk2r/pb1nppbp/1p1p2p1/2p5/2PPP1P1/P3BP2/1P1Q3P/2KR1BNR w kq c6 0 12",
    score: 0.2,
  },
  {
    lichess: "https://lichess.org/7l80sUm8",
    fen: "3r1n2/pp2rpk1/3q1p1p/3PpB1b/7N/8/PP1Q1PPP/2R1R1K1 w - - 10 26",
    score: 5,
  },
  {
    lichess: "https://lichess.org/TjTyUtZk",
    fen: "3rk1nr/pp4pp/2p5/3nPPb1/4N3/1N5P/PP6/2KR1R2 w - - 0 22",
    score: 5.6,
  },
  {
    lichess: "https://lichess.org/1QFurHxg",
    fen: "r3kb2/pb1nq3/2p1p1p1/1p1nP3/2pP2Q1/2N3P1/PP3PB1/R3K2R w KQq - 4 17",
    score: 1.1,
  },
  {
    lichess: "https://lichess.org/FWNzEpjX",
    fen: "2r5/pp1bkpr1/3pp3/n7/4N1Pp/P1P4P/2P2PB1/R4RK1 w - - 7 20",
    score: -3.2,
  },
  {
    lichess: "https://lichess.org/Ll9s2FaV",
    fen: "6k1/2p2pp1/2N2n2/p6p/2R2P2/5PPK/r7/8 w - a6 0 35",
    score: -1.7,
  },
  {
    lichess: "https://lichess.org/84YIfq2K",
    fen: "8/2q1bp2/3p2kp/3Bp2p/4P3/4BPP1/1P1Q2K1/8 w - - 4 40",
    score: 8.4,
  },
  {
    lichess: "https://lichess.org/fCHtDX2y",
    fen: "2b5/6kp/pq1p1pp1/1p1Pp3/1P2P3/P6P/3Q1PP1/4N1K1 w - - 0 29",
    score: 0.3,
  },
  {
    lichess: "https://lichess.org/I8C7z7Kb",
    fen: "1r2r1kb/4np1p/3q2pP/p1p1p3/Pp1pP1n1/1P1P1BP1/2PBQPK1/5R1R w - - 0 26",
    score: 1.7,
  },
  {
    lichess: "https://lichess.org/VOhkhNHs",
    fen: "rn1q1rk1/1b2bppp/pp3n2/2pp4/3P4/2NBPN2/PP1BQPPP/R2R2K1 w - - 0 12",
    score: 0.2,
  },
  {
    lichess: "https://lichess.org/iP3vIjy8",
    fen: "r1bq1rk1/ppp3pp/8/8/1n2Np2/N2p2PP/PPPP1bB1/R1BQK2R w KQ - 0 15",
    score: -3.9,
  },
  {
    lichess: "https://lichess.org/EGnTriDD",
    fen: "4RN2/p4r2/1p3k2/1n4p1/8/1P6/2P3P1/2K5 w - - 9 36",
    score: -0.6,
  },
  {
    lichess: "https://lichess.org/GA3CWVvu",
    fen: "r1bq1rk1/4bppp/p1n5/3p4/2pP4/5NP1/1PQBPPBP/R4RK1 w - - 0 15",
    score: 1.8,
  },
  {
    lichess: "https://lichess.org/bQRz7LRj",
    fen: "r2q1rk1/3bbppp/p3pn2/1pppn3/3P1BPP/2PBPQ2/PP1N1P2/R3K2R w KQ - 0 12",
    score: 1.9,
  },
  {
    lichess: "https://lichess.org/ZLliHAFI",
    fen: "2rq1rk1/3nnppp/2p1p3/pp1p4/3PP2P/P1N1BP2/1PPQ2P1/1K1R1R2 w - - 0 15",
    score: 1.2,
  },
  {
    lichess: "https://lichess.org/ZwkYnu26",
    fen: "r1b1k2r/1pq2ppp/p1nbpn2/2p5/P1BP4/2N1PN2/1P2QPPP/R1B2RK1 w kq - 6 10",
    score: 0.4,
  },
  {
    lichess: "https://lichess.org/DkCJz44n",
    fen: "r6r/1p3p1p/pBnk1np1/P3p3/3p4/1P2PP1B/3P1P1P/R3K1R1 w Q - 4 21",
    score: 0.2,
  },
  {
    lichess: "https://lichess.org/MGyyXr5S",
    fen: "6k1/5pp1/2pp1b1p/P2p4/3P4/1PP4P/2q2PP1/1N3QK1 w - - 1 31",
    score: 1.7,
  },
  {
    lichess: "https://lichess.org/a9G1Q669",
    fen: "7r/1ppq4/3p2pk/pP1Pp1b1/P3P1p1/2N1P1P1/4Q2P/5RK1 w - - 1 26",
    score: 1.3,
  },
  {
    lichess: "https://lichess.org/mhVmngeB",
    fen: "1r6/4ppk1/rq1p1np1/2pP2Np/1p2PPnP/6R1/1PPQ2P1/1NKR4 w - - 1 22",
    score: -4,
  },
  {
    lichess: "https://lichess.org/skuAdmPi",
    fen: "r5b1/p1k1n1p1/2p2pP1/b3pP2/N3P3/2P1B3/1P2B3/2K4R w - - 1 24",
    score: 5.6,
  },
  {
    lichess: "https://lichess.org/3CT7aVyG",
    fen: "r2qk2r/3bbppp/1p2pn2/3p4/1n1P1B2/2N2N2/PP2BPPP/R2QK2R w KQkq - 4 12",
    score: 0.9,
  },
  {
    lichess: "https://lichess.org/ZaQ65ElR",
    fen: "7k/8/3p1p2/1b1B4/1p1pPP1P/3P4/1P5K/8 w - - 1 36",
    score: 0,
  },
  {
    lichess: "https://lichess.org/04oboEN2",
    fen: "3r3k/ppb3pp/2p2p2/8/3Np3/2P3PP/PP3PK1/3R4 w - - 0 33",
    score: -1.4,
  },
  {
    lichess: "https://lichess.org/jDf8lKqY",
    fen: "rnbqkb1r/ppp3pp/5n2/3PNp2/2P1p3/8/PP4PP/RNBQKB1R w KQkq - 2 8",
    score: -5.1,
  },
  {
    lichess: "https://lichess.org/dufSDBqn",
    fen: "8/5kb1/7p/p2r2pP/P2P1p2/2r2P2/3R1K2/3RN3 w - - 2 39",
    score: -1.9,
  },
  {
    lichess: "https://lichess.org/3yMQO4sh",
    fen: "r1b2rk1/pp2qnbp/2p2p2/2P3p1/1PBnp3/1Q2N1BP/P2N1PP1/R4RK1 w - - 2 22",
    score: -1.6,
  },
  {
    lichess: "https://lichess.org/k1eGKgBZ",
    fen: "4r1k1/ppR1q1pp/1n3p2/8/6b1/1P6/PBQ1PPrP/4R1K1 w - - 0 21",
    score: 1.3,
  },
  {
    lichess: "https://lichess.org/PVJzWVko",
    fen: "4r1k1/1p4pp/2prP3/p1b5/P5P1/1PP1R2P/8/R4K2 w - - 1 31",
    score: -7.1,
  },
  {
    lichess: "https://lichess.org/6u03bhTg",
    fen: "5rk1/1p6/2p3n1/2Pp2pp/1P1P2Nq/5PpP/3Q2P1/4R1K1 w - h6 0 30",
    score: 0.4,
  },
  {
    lichess: "https://lichess.org/WjUjeU1R",
    fen: "r1b2rk1/6pp/p7/qp1ppPB1/6P1/P7/3NKP1P/Q4B1R w - b6 0 22",
    score: 2.9,
  },
  {
    lichess: "https://lichess.org/2bFDrmpw",
    fen: "r2r2k1/pp1nqppp/5n2/2p2b2/P1P1p3/BNP1P3/2BQ1PPP/R4RK1 w - - 2 16",
    score: -1.8,
  },
  {
    lichess: "https://lichess.org/0XaZDnnt",
    fen: "r1r2k2/1p4pp/q4pb1/p1PPp3/P2Q1B2/5P1P/1P4P1/R3R1K1 w - - 2 25",
    score: -0.8,
  },
  {
    lichess: "https://lichess.org/SynB00oT",
    fen: "3qr1k1/2n2pb1/3p1n1p/1p1P2p1/4P3/5P2/p3BBPP/1RQ2RK1 w - - 0 27",
    score: 0.1,
  },
  {
    lichess: "https://lichess.org/jTxRSBG9",
    fen: "8/p7/3p4/8/1P2k2p/P2p4/5K1P/1b1B4 w - - 1 37",
    score: -7.9,
  },
  {
    lichess: "https://lichess.org/AGyG4JpH",
    fen: "5rk1/2r1q3/1p2pn1p/p2p2p1/1b1Pp3/4P1P1/P2B1PKP/1R1Q1RN1 w - - 0 25",
    score: -1.6,
  },
  {
    lichess: "https://lichess.org/jlEHI5Yg",
    fen: "r1bq1r2/pp2n1bk/2n1p1pp/2pp4/4P3/1BNP1N2/PPP3PP/R1B1QRK1 w - - 2 12",
    score: 1,
  },
  {
    lichess: "https://lichess.org/GEJ82rNW",
    fen: "8/5pkp/1b3p2/pp1p4/8/qP2P3/P1R2PP1/3R2K1 w - a6 0 33",
    score: -5.1,
  },
  {
    lichess: "https://lichess.org/wTk0GRe2",
    fen: "8/p4rbk/1pn2rnp/2ppN2q/3P4/2P2p2/PP1BQPBP/4R1RK w - - 0 29",
    score: 6.2,
  },
  {
    lichess: "https://lichess.org/pDqudgoR",
    fen: "r4rk1/1p1bpp1p/3n2p1/1p1p4/2pP1PP1/P1P4P/1P1NBP2/3R1RK1 w - - 1 20",
    score: 0.5,
  },
  {
    lichess: "https://lichess.org/H6AjMXlL",
    fen: "1rr4k/5pp1/5p1p/1q6/1P6/6P1/PQ1R1P2/K2R4 w - - 3 37",
    score: 0.2,
  },
  {
    lichess: "https://lichess.org/kTgnGoqU",
    fen: "2rr2k1/6b1/4pqp1/1p3p2/p3P3/P1N2P2/1PP3PQ/2KR3R w - - 3 22",
    score: 2,
  },
  {
    lichess: "https://lichess.org/Bg6ARnZB",
    fen: "r1b2q1k/pp1n2pp/2pNQ3/2P5/3p4/6P1/PP4BP/R5K1 w - - 1 23",
    score: 6.8,
  },
  {
    lichess: "https://lichess.org/L63lJEfE",
    fen: "7k/1p2q1b1/p2p1n1p/P3pQ2/1nB5/5P2/5PPP/2B3K1 w - - 0 26",
    score: -0.6,
  },
  {
    lichess: "https://lichess.org/bsT4ob3W",
    fen: "r1b2k1r/pp3ppp/2p1q3/3pP3/3n4/3B3P/PPPQ2PK/R1B2R2 w - - 0 17",
    score: 9.7,
  },
  {
    lichess: "https://lichess.org/9OqcYDfQ",
    fen: "rn1qr1k1/pb3ppp/5n2/1p1p4/2pP4/P1P1PP2/2B1N1PP/R1BQ1RK1 w - - 2 13",
    score: 2.2,
  },
  {
    lichess: "https://lichess.org/VuGLQy0B",
    fen: "3rrnk1/ppq2ppp/3b1p2/3p1Q1P/3P4/2PBB3/PP3PP1/2R2RK1 w - - 4 18",
    score: 2.6,
  },
  {
    lichess: "https://lichess.org/8X9Fogul",
    fen: "3rrb1k/ppp4p/2n2p2/4pp2/7Q/2PP2B1/q1P2PPP/4RRK1 w - - 0 23",
    score: -7,
  },
  {
    lichess: "https://lichess.org/dRAGVJPb",
    fen: "r2q1r1k/pbpn2p1/1p2Bb1p/8/4N3/5N2/PPP1QPPP/2KR3R w - - 1 14",
    score: 7.9,
  },
  {
    lichess: "https://lichess.org/QnHybvgN",
    fen: "1rbqk2r/4ppb1/p1pp4/2p5/4P3/2NPQN2/PPP3PP/R4RK1 w k - 1 14",
    score: 1.5,
  },
  {
    lichess: "https://lichess.org/HMOwzpG1",
    fen: "1r2k2r/3q1p1p/p2pbpn1/4p2Q/1p2P3/2PBN1P1/PP3P1P/R3K2R w KQk - 0 18",
    score: 3,
  },
  {
    lichess: "https://lichess.org/3wksYieS",
    fen: "5r2/p7/1p1p2kb/3Pp3/1Pb5/P4PPP/6K1/R3R3 w - - 0 36",
    score: -2.2,
  },
  {
    lichess: "https://lichess.org/ORpReGmp",
    fen: "2rq1rk1/5pb1/p1n2npp/1p2p3/4P2B/2N4P/PP3PP1/2RQRBK1 w - - 0 18",
    score: 1.1,
  },
  {
    lichess: "https://lichess.org/Z2RtN7Pl",
    fen: "r1rq2k1/p3ppbp/4bnp1/p1PpB3/1P1Q4/2N1P3/P1P1NPPP/R4RK1 w - - 0 16",
    score: 4.5,
  },
  {
    lichess: "https://lichess.org/1cKvTkKI",
    fen: "r4rk1/pb1nqppp/npp1p3/3pP3/2PP4/1P3NP1/P1QN1PBP/R3R1K1 w - - 3 14",
    score: 1,
  },
  {
    lichess: "https://lichess.org/0mvKnvtm",
    fen: "rnb1k2r/pp2qp2/2pp1np1/4p1bp/4P2P/1BNP1P2/PPPQN1P1/R3K2R w KQkq - 0 13",
    score: 0.9,
  },
  {
    lichess: "https://lichess.org/xzy5CqdS",
    fen: "8/5ppk/7p/p3Nb2/3RQ3/4P2P/2r2qPK/8 w - - 6 34",
    score: -3.5,
  },
  {
    lichess: "https://lichess.org/UyYdRZVx",
    fen: "3r4/1p2kpp1/4p2p/1p2P3/2p2PP1/P1PpP1P1/1P1K2bR/8 w - - 0 25",
    score: -2.1,
  },
  {
    lichess: "https://lichess.org/ZULcfl9G",
    fen: "7k/pp4rp/2p2b2/3p1p2/3P4/1P2q2P/P2N2P1/3QB2K w - - 0 31",
    score: -6.9,
  },
  {
    lichess: "https://lichess.org/Gl2GZkee",
    fen: "r4rk1/1p1nbp2/2pp1np1/p7/P2PP2p/2NBBQ1P/1q3PP1/R3R1K1 w - - 0 19",
    score: 4.5,
  },
  {
    lichess: "https://lichess.org/BwC9d9aw",
    fen: "3rr1k1/pp3p1p/2p3p1/8/5q2/7P/PPQN4/R1K3R1 w - - 4 28",
    score: -7,
  },
  {
    lichess: "https://lichess.org/dcedppOH",
    fen: "r1bqk3/1p2pp2/3p1nr1/p1pPn2p/2PNP1p1/2N5/PP1Q1PPP/2KR1B1R w q c6 0 13",
    score: 2.2,
  },
  {
    lichess: "https://lichess.org/GI9ullij",
    fen: "r4k1r/3Rb2p/5pp1/4pP2/B1P5/1P2P3/4K2P/5R2 w - - 0 25",
    score: 6,
  },
  {
    lichess: "https://lichess.org/QREWH0mj",
    fen: "r1bq1rk1/pp2bpp1/1n2p2p/3nP3/3P4/1BN2NP1/PP3BKP/R2Q1R2 w - - 8 20",
    score: 0,
  },
  {
    lichess: "https://lichess.org/p8XCfQ95",
    fen: "2r4k/p5bp/2q1p1p1/7n/8/1Q2p1B1/PP4PP/K2R3R w - - 0 29",
    score: 1.8,
  },
  {
    lichess: "https://lichess.org/RYYBlWm9",
    fen: "1qr1k2r/p2nbppp/4p3/p2pP3/3P4/P2BBP2/1P2Q1PP/2R1R1K1 w k - 2 20",
    score: 3.9,
  },
  {
    lichess: "https://lichess.org/nSQOlwhT",
    fen: "1r1r2k1/p3ppbp/pn3n2/5p2/3P4/1PN3P1/P2B1PBP/2R2RK1 w - - 3 19",
    score: 5.7,
  },
  {
    lichess: "https://lichess.org/IJ8dgaMZ",
    fen: "3r2k1/p1q1ppb1/1p4pn/2p1P1N1/2P1NPP1/P5Q1/1P6/3R2K1 w - - 1 25",
    score: 0.8,
  },
  {
    lichess: "https://lichess.org/0o4yvDlF",
    fen: "2n3k1/5p1p/1p6/3N1pp1/8/1P2P1P1/P3KPBP/1b6 w - - 2 31",
    score: 7.6,
  },
  {
    lichess: "https://lichess.org/RvOcsTkF",
    fen: "4rrqk/1p1b2b1/p2pp2P/2p5/P1PnP1PB/2NP1n1N/1P1Q2B1/1R3RK1 w - - 1 25",
    score: -3.2,
  },
  {
    lichess: "https://lichess.org/Htx9lvkS",
    fen: "r4rk1/1p2bpp1/1q2pn1p/p1p1N3/P1PP4/3Q3P/1P3PPB/R4RK1 w - - 0 20",
    score: -0.2,
  },
  {
    lichess: "https://lichess.org/nfOMDMPy",
    fen: "1r1b2k1/1r1n1pp1/B1p1p2p/2Pp1b2/1P1PnB2/4PN1P/RP3PP1/5RK1 w - - 1 19",
    score: 7.7,
  },
  {
    lichess: "https://lichess.org/vNqeBC0P",
    fen: "r4rk1/ppp3pp/2n1p3/2npP3/5P1q/2P4P/PPQ3B1/R1B2RK1 w - - 1 18",
    score: -1.7,
  },
  {
    lichess: "https://lichess.org/4m9mhL63",
    fen: "8/1p3k1p/p2n2p1/5p2/8/1P3PP1/P1b3KP/B7 w - - 1 30",
    score: -6.8,
  },
  {
    lichess: "https://lichess.org/nZuF4O2d",
    fen: "8/p2n1k2/1p4p1/1P3p1p/2PBpP1K/P6P/6P1/8 w - - 3 41",
    score: 2.2,
  },
  {
    lichess: "https://lichess.org/vj1QjbOC",
    fen: "r2qr1k1/pppb1ppp/1nnp1b2/8/2PP4/2N1B1N1/PP2BPPP/R2Q1RK1 w - - 12 12",
    score: 2,
  },
  {
    lichess: "https://lichess.org/Sj5fimQY",
    fen: "r5k1/pN1n1pbp/2p3p1/2Pp1b2/7B/5N1P/Pr3PP1/R4RK1 w - - 0 18",
    score: -4.7,
  },
  {
    lichess: "https://lichess.org/ba9F2Kel",
    fen: "r4r1k/1pqn1ppp/p1p1p1b1/P3P1b1/1PBP4/2B5/4QPPP/R2RN1K1 w - - 4 19",
    score: 2.2,
  },
  {
    lichess: "https://lichess.org/rgOJy9az",
    fen: "r1b2rk1/1p2qppp/2n2n2/2P1p3/1pPp4/5NP1/PPQNPPBP/R2R2K1 w - - 2 13",
    score: -0.6,
  },
  {
    lichess: "https://lichess.org/wgGdwFdZ",
    fen: "1r2r1k1/5pp1/4b2p/p1P1R3/P4qP1/1PQB3P/1KP5/4R3 w - - 0 28",
    score: 8.7,
  },
  {
    lichess: "https://lichess.org/EjuEP74u",
    fen: "rn3rk1/pQ3ppp/2pqpn2/3p4/2PP4/4PP2/PP3P1P/RN2KB1R w KQ - 1 10",
    score: 2.8,
  },
  {
    lichess: "https://lichess.org/AFvLg799",
    fen: "3r1r2/6k1/1p4p1/p1pbpp2/8/P2P2P1/1P2nPBP/1R2NR1K w - - 0 24",
    score: -2.1,
  },
  {
    lichess: "https://lichess.org/JLib97Yh",
    fen: "r1bqk1r1/ppp2p2/1bnp1n2/6B1/2BpPP2/2P5/PP4PP/RN1Q1RK1 w q - 0 12",
    score: -3.3,
  },
  {
    lichess: "https://lichess.org/dMACuQ5c",
    fen: "7r/ppp3k1/3bR3/8/1n1pP3/3P2P1/PPP1BK2/R7 w - - 1 26",
    score: 6.8,
  },
  {
    lichess: "https://lichess.org/dIGCEpF9",
    fen: "4k1rr/4q1b1/8/1pPpPB2/pPbB4/P3Q3/5K2/6RR w - - 1 38",
    score: 10.5,
  },
  {
    lichess: "https://lichess.org/r5xl0Pe3",
    fen: "rnb1k2r/2q1bppp/p2ppn2/1p6/3NPP2/2NB4/PPP3PP/R1BQ1R1K w kq b6 0 10",
    score: 3.6,
  },
  {
    lichess: "https://lichess.org/tJwDItv6",
    fen: "r1bq1rk1/pp2b2p/2p3p1/3ppn2/5Q2/1BN5/PPPB2PP/4RRK1 w - - 0 16",
    score: -4.5,
  },
  {
    lichess: "https://lichess.org/N2uzAEge",
    fen: "3r2k1/5p1p/1p1r2p1/1Bp5/P2b4/6P1/5PKP/1R1R4 w - - 1 31",
    score: -0.5,
  },
  {
    lichess: "https://lichess.org/yvRPzFfl",
    fen: "r2q1rk1/Q3bpp1/1p3n1p/2p5/3nPB2/2N3P1/PP3PBP/3R1RK1 w - - 2 18",
    score: 3.8,
  },
  {
    lichess: "https://lichess.org/W0itubWL",
    fen: "2r3k1/4p3/1q1p2p1/p3p2P/Pp2P2P/1P3P2/1P1rQ3/1K5R w - - 0 28",
    score: 9.1,
  },
  {
    lichess: "https://lichess.org/nJ8P6dMQ",
    fen: "1k1r4/2p5/1pqp4/5Bp1/1P1nPp2/5P2/Q2B4/1K1R4 w - - 0 27",
    score: 3.2,
  },
  {
    lichess: "https://lichess.org/6fcSnQsr",
    fen: "2rq1rk1/1p3pp1/5n1p/3p2N1/1bnP3P/2N5/P1Q2PP1/R1B2K1R w - - 0 19",
    score: -6.2,
  },
  {
    lichess: "https://lichess.org/K97ro43N",
    fen: "5k2/2nq1ppp/1p3n2/p1bp4/5P2/P1N3PP/1P1BQPBK/8 w - - 2 24",
    score: 0.5,
  },
  {
    lichess: "https://lichess.org/NcQSF9hU",
    fen: "r5r1/pp2n1Pp/k1n2Q2/3p4/P7/4B3/1PP3PP/R5K1 w - - 1 25",
    score: 0,
  },
  {
    lichess: "https://lichess.org/D5KdN2lb",
    fen: "1rb1r1k1/5pbp/6p1/2qpP3/5P2/p1PBp3/P1Q1N1PP/4RR1K w - - 0 24",
    score: -1.3,
  },
  {
    lichess: "https://lichess.org/3Cdv76zc",
    fen: "1r2nrk1/5ppp/p2p1q2/2PQ4/1p6/BP3B2/P4PPP/4R1K1 w - - 0 21",
    score: -3.1,
  },
  {
    lichess: "https://lichess.org/7Xu1MNwq",
    fen: "3r1rk1/1pq1ppb1/pN2b1pp/P1p5/1n2NP2/3P2PP/1PP4K/R1BQR3 w - - 3 19",
    score: -0.9,
  },
  {
    lichess: "https://lichess.org/6DdV05Bw",
    fen: "r4r1k/p2P2pp/1pp5/4Pp2/3P1q2/1Q1Bn1R1/PP4PP/R5K1 w - - 2 20",
    score: 7.2,
  },
  {
    lichess: "https://lichess.org/DdLPhcbx",
    fen: "3n2rr/n1kb1pp1/p3p3/3pPPBP/1PpP3N/p1P1K3/8/3B2RR w - - 0 32",
    score: 0,
  },
  {
    lichess: "https://lichess.org/bHNYakXj",
    fen: "6k1/1b3p1p/p2p1n2/1p3Pp1/2r4b/1NN3P1/PP1B3P/4R1K1 w - - 0 29",
    score: 6.8,
  },
  {
    lichess: "https://lichess.org/lf3Ltkqw",
    fen: "2r1qrk1/2Bnb1pp/bp2p3/pN1p1p2/3Pn3/3BPN1P/PPR1QPP1/2R3K1 w - f6 0 17",
    score: 4,
  },
  {
    lichess: "https://lichess.org/8KVjieFA",
    fen: "r7/p4rpk/1p2p2p/2ppBp1P/q3n1PQ/2P1PR2/1P3P2/2KR4 w - - 5 27",
    score: -5.4,
  },
  {
    lichess: "https://lichess.org/3Y3k6eGH",
    fen: "r4rk1/ppp2ppp/3qbn2/1Q2p3/1b2P3/2N2P2/PPPB2PP/R3KB1R w KQ - 5 11",
    score: -0.6,
  },
  {
    lichess: "https://lichess.org/tUYiNWJo",
    fen: "5rk1/1p2qr1p/p1ppb1p1/7n/2P1PP2/1P2Q2P/P3N1BK/3R1R2 w - - 7 25",
    score: 0,
  },
  {
    lichess: "https://lichess.org/B6CBbg3h",
    fen: "1rr2n1k/4q1p1/5pQp/p1p1pP2/P1NpP2P/1P4R1/2P3P1/5RK1 w - - 3 29",
    score: 0.2,
  },
  {
    lichess: "https://lichess.org/GUJwRXZ9",
    fen: "4r3/1pp2k1p/3p2p1/3P1p1n/pPP2P2/5P2/P3NK1P/4R3 w - - 1 27",
    score: 0.5,
  },
  {
    lichess: "https://lichess.org/ePzkGyJe",
    fen: "1rb2bk1/p2p1ppp/2p1rn2/q1p3B1/2P1P3/2N2P2/PP1Q1P1P/2KR1BR1 w - - 11 15",
    score: 1.9,
  },
  {
    lichess: "https://lichess.org/UshiFtTq",
    fen: "2k4r/p1p3pp/1p1r4/3P1p2/4bP2/5N2/PP4PP/2R1R1K1 w - - 0 19",
    score: -2.6,
  },
  {
    lichess: "https://lichess.org/Qps09U5F",
    fen: "rnbq1rk1/5pp1/2pp1n1p/1pb5/p2pP3/2P2N1P/PPB1QPP1/RNB2RK1 w - - 0 12",
    score: 1.4,
  },
  {
    lichess: "https://lichess.org/x3fuU2hd",
    fen: "r4rk1/p5pp/4p1q1/1Pp2p2/4bP2/P3P3/1B2Q1PP/2R2RK1 w - - 0 23",
    score: 2.2,
  },
  {
    lichess: "https://lichess.org/sDq5nuXS",
    fen: "2bqk2r/r5b1/1pp4p/2p1Pnp1/p4p2/P1NP1N1P/1PPQ2PB/R4RK1 w k - 1 18",
    score: -2.6,
  },
  {
    lichess: "https://lichess.org/KrH3WPCH",
    fen: "6r1/4b3/ppkpp3/2n2ppp/2P5/1P2P3/PB1R1PPP/3R2K1 w - - 0 25",
    score: 3.4,
  },
  {
    lichess: "https://lichess.org/cI8SqpGi",
    fen: "r1b1k2r/pp3ppp/1qn2n2/8/1P1p4/5N2/P2BPPPP/2RQKB1R w Kkq - 1 12",
    score: -0.3,
  },
  {
    lichess: "https://lichess.org/C6jQHB87",
    fen: "rnR5/6kp/6p1/p7/8/BP3B2/r4PPP/6K1 w - - 11 30",
    score: 6.8,
  },
  {
    lichess: "https://lichess.org/BLlD3WI8",
    fen: "r4rk1/1pp2ppp/p2p2n1/4p3/PPBPP1q1/NQP5/5P2/R3R1K1 w - - 0 19",
    score: -4.4,
  },
  {
    lichess: "https://lichess.org/ADY1Nwig",
    fen: "r4rk1/ppq1bppp/2p1p3/8/2PPQ3/6P1/PP3P1P/R1BR2K1 w - - 1 17",
    score: 0.3,
  },
  {
    lichess: "https://lichess.org/b2r2CAoU",
    fen: "3rr1k1/p4ppp/1p6/2p5/5P2/2b2NP1/P3PK1P/3R1R2 w - - 2 25",
    score: -2.5,
  },
  {
    lichess: "https://lichess.org/wRhzdIKh",
    fen: "1q1r2k1/2p2pbp/p1n3p1/2pN4/P1P1P3/3P2pP/6B1/3Q1RK1 w - - 0 21",
    score: -7.7,
  },
  {
    lichess: "https://lichess.org/GaOiooO3",
    fen: "2r5/4k1b1/p1b1pn1p/4p3/2P1B2B/8/P1R3PP/6K1 w - - 3 31",
    score: -6.5,
  },
  {
    lichess: "https://lichess.org/B1ZxlFZ0",
    fen: "r1bqr1k1/2p3pp/p1n5/1pbn4/2Np1PP1/5N1P/PPP1P1B1/R1BQK2R w KQ b6 0 13",
    score: -0.2,
  },
  {
    lichess: "https://lichess.org/HWJdzyDG",
    fen: "r3k2r/2qnbppn/1p2p3/p2pP1p1/3P4/PP3BPP/1B1NQP2/R3K2R w KQkq - 0 20",
    score: 2.6,
  },
  {
    lichess: "https://lichess.org/KHi64jPI",
    fen: "r6r/5k2/1np1p2n/pp1pP3/3P1Pp1/2P1N3/PP3BP1/2KR3R w - - 6 33",
    score: 4.1,
  },
  {
    lichess: "https://lichess.org/vedvnp6M",
    fen: "8/2r3pk/R4p1p/P3p3/Rp5P/1r4P1/5PK1/8 w - - 0 37",
    score: -0.2,
  },
  {
    lichess: "https://lichess.org/GLyKdax9",
    fen: "r4r2/p2qnpbk/1p4pp/2ppP3/3P2PB/2PQ1N1P/PP3R2/5RK1 w - - 2 21",
    score: 5,
  },
  {
    lichess: "https://lichess.org/jTlS56l3",
    fen: "2r3k1/2r1q1p1/1p1bpn1p/pP1p1p1P/3P3R/1Q1BPNP1/1P3PK1/1R6 w - - 5 28",
    score: 0,
  },
  {
    lichess: "https://lichess.org/8WtuXak4",
    fen: "8/pppkn3/1b4Rp/6p1/8/P2r1NBP/1P3PP1/6K1 w - - 2 26",
    score: 3.4,
  },
  {
    lichess: "https://lichess.org/7Q65S2p3",
    fen: "3rr2k/1pp3p1/1b1pqp1p/7P/pPP1pPP1/P3P1R1/1KQ1B3/3R4 w - - 1 28",
    score: -0.1,
  },
  {
    lichess: "https://lichess.org/zCedTyBy",
    fen: "4r3/2p5/3p2k1/1p4N1/5r1P/PB6/1KP3P1/7R w - - 0 35",
    score: 7.2,
  },
  {
    lichess: "https://lichess.org/uyocXNTu",
    fen: "6k1/7p/p4pp1/1p6/3b1B2/PP6/4rPPP/1R4K1 w - - 2 24",
    score: -2.3,
  },
  {
    lichess: "https://lichess.org/JlooCWkC",
    fen: "1k5r/pp3ppp/1qn2n2/8/1P3P2/P2PbQ1P/4N1B1/2R2R1K w - - 1 22",
    score: 5.7,
  },
  {
    lichess: "https://lichess.org/Y0gm1b4r",
    fen: "1r5k/3q1p1p/3p1b2/p2PpN2/Nr5P/1P1Q2P1/5PK1/1R2R3 w - - 7 34",
    score: 7.3,
  },
  {
    lichess: "https://lichess.org/fPRe4yZb",
    fen: "2r1rbk1/2q2pp1/p2p1n1p/1pnPpN2/8/P3QB2/1PP2PPP/R1B1R1K1 w - - 3 19",
    score: -1.2,
  },
  {
    lichess: "https://lichess.org/m82OoFOA",
    fen: "5k2/pp3pp1/4pn1p/8/2q5/1BP4P/PP3PP1/6K1 w - - 0 29",
    score: -0.4,
  },
  {
    lichess: "https://lichess.org/Byk56t8L",
    fen: "3r1rk1/1p1qnpb1/p2pb1p1/2p3Pp/2P1PP2/2NQB3/PP4BP/3RK2R w K - 7 16",
    score: -0.4,
  },
  {
    lichess: "https://lichess.org/2ZtHU9Pc",
    fen: "6k1/5p1p/p2r1qpb/P3p3/2QpP3/3B4/1P3PPP/R5K1 w - - 4 29",
    score: 0.4,
  },
  {
    lichess: "https://lichess.org/lBDPr8rW",
    fen: "r1bq1rk1/ppp1nppp/8/8/3Pp3/P3P3/1PQ2PPP/R3KBNR w KQ - 0 11",
    score: 1.9,
  },
  {
    lichess: "https://lichess.org/0XKS5qVm",
    fen: "r2q1rk1/pp1n1ppp/2p1p3/3pP3/1bP5/2N1P2P/PP2QPP1/R1B2RK1 w - - 1 13",
    score: -1.2,
  },
  {
    lichess: "https://lichess.org/aXnNTKkm",
    fen: "rn3rk1/5ppp/2p1pn2/pNq5/6b1/RP1P2P1/2N1PPBP/Q4RK1 w - - 1 16",
    score: 3,
  },
  {
    lichess: "https://lichess.org/s0Y6RpNa",
    fen: "r1b2rk1/3nppbp/p2p1np1/2pP4/PqB1PP2/2N2N2/1P4PP/R1BQK2R w KQ - 1 12",
    score: -0.5,
  },
  {
    lichess: "https://lichess.org/3DaTdelh",
    fen: "8/5p1k/p3b1p1/K3P3/5PP1/5B1n/8/8 w - - 0 53",
    score: -5.3,
  },
  {
    lichess: "https://lichess.org/XeGotzaJ",
    fen: "4r2k/1p4pp/1p1p1r2/1P1q4/P1pP4/5P2/3Q2P1/R2R3K w - - 1 32",
    score: -2.5,
  },
  {
    lichess: "https://lichess.org/fa2TcitE",
    fen: "1r6/3bkp2/1r2pn1p/Rp1p2p1/6P1/2P1P1KP/1PN2PB1/R7 w - - 2 33",
    score: 0.6,
  },
  {
    lichess: "https://lichess.org/idaORx0X",
    fen: "1rbq1rk1/2b2pp1/2pp1n1p/1p6/1n1PP3/1BN1BN1P/1P1Q1PP1/R3R1K1 w - - 2 17",
    score: 4.5,
  },
  {
    lichess: "https://lichess.org/d4ujeQr8",
    fen: "q3rnk1/2r2pp1/2p2n1p/p1Np1B2/Pp1P4/4PPP1/1PQ2PK1/2R2R2 w - - 7 23",
    score: 3.1,
  },
  {
    lichess: "https://lichess.org/AWh76KRP",
    fen: "r1b2rk1/5p1p/p1pb4/1p4B1/3PR1n1/1BN3Pq/PPP2P1P/R2Q2K1 w - - 1 18",
    score: 2.6,
  },
  {
    lichess: "https://lichess.org/ZmiDkYHv",
    fen: "1r5r/3bkpp1/p1ppn2p/q3p3/B1P1P1PP/4Q3/PP2NP2/2KR3R w - - 7 24",
    score: -1.6,
  },
  {
    lichess: "https://lichess.org/BZymLULq",
    fen: "6k1/p3qp2/7p/1p2P1p1/5r2/1P3Q2/P6P/5R1K w - - 1 34",
    score: -1.6,
  },
  {
    lichess: "https://lichess.org/Gyitlfbz",
    fen: "r1b5/5k1p/p4q2/1pnp1p2/8/P7/1PPQ2PP/4RRK1 w - - 0 22",
    score: 9.1,
  },
  {
    lichess: "https://lichess.org/91p7olqM",
    fen: "Q2bk2r/1p3ppp/2r1p3/8/3P1P2/2P5/P2NKPqP/R7 w k - 4 20",
    score: -9,
  },
  {
    lichess: "https://lichess.org/3gSPQ5j8",
    fen: "r2q1r2/1bpnn1bk/pp1p2pp/3Pp3/1PP1Pp2/2NBBNP1/P2Q1P1P/R3R1K1 w - - 0 16",
    score: -2,
  },
  {
    lichess: "https://lichess.org/x7pTuP6h",
    fen: "r3qrk1/p1p2ppn/1p5p/3p1P2/3PpRP1/2P1R2Q/P1PN3P/6K1 w - - 2 19",
    score: -0.5,
  },
  {
    lichess: "https://lichess.org/N72gWhRf",
    fen: "r1b1k2r/3n2pp/pq1Bpp2/1p1pP3/2pP4/2N5/P1PQBPPP/1R4K1 w kq - 0 20",
    score: 8.8,
  },
  {
    lichess: "https://lichess.org/FJahDjLR",
    fen: "r2qb1rk/4bp1p/2p1pn2/1p2N3/p2P2p1/P1N2P2/BPP1Q2P/3R1R1K w - - 0 20",
    score: 0.1,
  },
  {
    lichess: "https://lichess.org/oduDH7NM",
    fen: "5rk1/1pp1brp1/p1n3p1/4p2p/4N2P/PPBPP3/5P2/R3K2R w KQ - 1 20",
    score: -0.1,
  },
  {
    lichess: "https://lichess.org/U3Bfkwvi",
    fen: "rr4k1/5p2/1qnp1bpp/2pbp3/1p2P2P/2PP1NP1/1PQ2PBK/RR6 w - - 0 21",
    score: 0.5,
  },
  {
    lichess: "https://lichess.org/YxZa6j32",
    fen: "r3r1k1/pp3pbp/1nq1b1p1/8/3P4/2P1PN2/PB2BPPP/R2QK2R w KQ - 7 15",
    score: 2.4,
  },
  {
    lichess: "https://lichess.org/ROEZIccA",
    fen: "4r1k1/4r1pp/2q2n2/2N1n3/1P4b1/P3B1N1/2Q2PPP/1BR2RK1 w - - 3 27",
    score: 10.9,
  },
  {
    lichess: "https://lichess.org/mvyxdYA4",
    fen: "1rbqk1nr/2ppppbp/2n3p1/8/pP6/2N3P1/3PPPBP/1RBQK1NR w Kk - 0 9",
    score: 0.5,
  },
  {
    lichess: "https://lichess.org/gGikLGkD",
    fen: "rnbq1rk1/pp1p1ppp/3P1n2/b1p5/8/2N2NP1/PP2PP1P/R1BQKB1R w KQ - 1 9",
    score: 2,
  },
  {
    lichess: "https://lichess.org/ZtuYh55R",
    fen: "1r6/p1p2pkp/3p1qp1/2r2b2/3Q1P2/5B2/PPP3PP/2KR3R w - - 5 19",
    score: -0.6,
  },
  {
    lichess: "https://lichess.org/xBVeIQp9",
    fen: "r4r1k/1bq3p1/3p4/4pP1N/1pPpPnQP/1P5B/2R4K/6R1 w - - 2 33",
    score: 6,
  },
  {
    lichess: "https://lichess.org/EDYY3eFF",
    fen: "3r1bk1/5ppp/4n3/8/3B4/1R1NP1P1/5PKP/8 w - - 5 31",
    score: 1.1,
  },
  {
    lichess: "https://lichess.org/EN68eBbu",
    fen: "1r1qr1k1/3b1pbp/p2p1np1/1ppPn3/P3P3/2N1BP1P/1P1QBNP1/R4RK1 w - - 0 17",
    score: 0.3,
  },
  {
    lichess: "https://lichess.org/159fTJdR",
    fen: "r2q1rk1/pppn1ppp/3pb3/6b1/3QPB2/2N2P2/PPP3PP/1K1R1B1R w - - 3 12",
    score: 1,
  },
  {
    lichess: "https://lichess.org/2Uegqgyj",
    fen: "r1bqr1k1/pp3pbp/2pp1np1/2n5/2PNP3/2N3PP/PP3PB1/R1BQR1K1 w - - 0 12",
    score: 1,
  },
  {
    lichess: "https://lichess.org/eRyRihNK",
    fen: "r5k1/p1q2p1p/4B1p1/2p5/2Qb2P1/5p2/PPP4P/1K5R w - - 0 22",
    score: -3.6,
  },
  {
    lichess: "https://lichess.org/ezvAwacr",
    fen: "8/5p2/1k4p1/1p1n3p/1P1PpP2/7P/P4K2/5B2 w - - 1 34",
    score: -6.7,
  },
  {
    lichess: "https://lichess.org/wP1fzeVq",
    fen: "r1b1kb1r/3p1ppp/pqn5/2pQ2B1/8/8/PP2PPPP/R3KBNR w KQkq - 0 10",
    score: -0.9,
  },
  {
    lichess: "https://lichess.org/0zy8EQQe",
    fen: "r7/pp3nkp/2n3p1/2p5/3pPq2/3P4/PPPBN1PP/5RK1 w - - 0 21",
    score: 3.6,
  },
  {
    lichess: "https://lichess.org/DNL0DIqr",
    fen: "2r4r/1bqkb1pp/3pp3/8/3PQ3/1Pn5/PB1K1PPP/3RR3 w - - 0 20",
    score: -7.4,
  },
  {
    lichess: "https://lichess.org/LiiT5ud1",
    fen: "3N4/5pk1/8/3n3p/2b5/7P/1KP2PP1/4R3 w - - 0 32",
    score: 8.1,
  },
  {
    lichess: "https://lichess.org/uVZGUPrr",
    fen: "5k2/p5p1/7p/2p2p2/2Pn1P2/P1KP3P/8/1r1B1R2 w - - 4 32",
    score: -2.2,
  },
  {
    lichess: "https://lichess.org/mwiKufXf",
    fen: "1r1q1rk1/pp2bpp1/2p1pn1p/4N3/2PPB3/1Q4P1/PP3P1P/R4RK1 w - - 1 20",
    score: -0.3,
  },
  {
    lichess: "https://lichess.org/1rCEYpLW",
    fen: "6k1/1p3ppp/5b2/8/2P3P1/1P2B2P/5PB1/3r2K1 w - - 0 31",
    score: -4.6,
  },
  {
    lichess: "https://lichess.org/j6EEdkVU",
    fen: "8/1R6/1P1n2kp/6p1/8/1r3PP1/5PK1/8 w - - 1 45",
    score: -2.5,
  },
  {
    lichess: "https://lichess.org/tsco4ahV",
    fen: "r3r1k1/2p2p1p/2p1bbp1/p2qP1B1/2p5/P5Q1/1P3PPP/R4RK1 w - - 0 22",
    score: 0.8,
  },
  {
    lichess: "https://lichess.org/zeYk93tO",
    fen: "2rr4/1pq1bpk1/p1n1b1p1/3pPp1p/BP3P1P/2P1BNP1/P3Q1K1/2R2R2 w - - 5 21",
    score: 0.6,
  },
  {
    lichess: "https://lichess.org/Zxte72pb",
    fen: "3r1r1k/pp1Q2bp/3B2p1/8/8/5B2/q4PPP/2R1R1K1 w - - 2 27",
    score: 8.8,
  },
  {
    lichess: "https://lichess.org/Lqtp4vN0",
    fen: "r2q1rk1/1p2bpp1/p1bp1n1p/4p3/2P1P3/2NQ4/PP1N1PPP/R1BR2K1 w - - 6 13",
    score: 0.8,
  },
  {
    lichess: "https://lichess.org/1Wfn872Z",
    fen: "2kr3r/p5pp/bp6/2p5/2P1pPn1/2B5/PNK3PP/R6R w - - 2 23",
    score: -2.6,
  },
  {
    lichess: "https://lichess.org/zW9IbyQ4",
    fen: "r1b1r1k1/1p1n1ppp/pqn1p3/3pP3/5P2/2NBP1B1/PP4PP/2RQK2R w K - 1 14",
    score: 1.5,
  },
  {
    lichess: "https://lichess.org/fBH5YKSx",
    fen: "r6r/3kb1p1/1n2p3/3bP3/1qpN2P1/5NK1/1P2Q2P/1R3R2 w - - 4 28",
    score: -5.8,
  },
  {
    lichess: "https://lichess.org/3UBqS1iK",
    fen: "8/2b1k1pp/5pn1/p3p3/PpNnP2P/1P1N2P1/5P2/2B2K2 w - - 2 35",
    score: 0.3,
  },
  {
    lichess: "https://lichess.org/VeuLftsv",
    fen: "r2qr1k1/1pp1bppp/2n5/3p1b2/p7/P2PBN1P/BPP2PP1/R2QR1K1 w - - 0 15",
    score: 0.2,
  },
  {
    lichess: "https://lichess.org/X9z7WUq0",
    fen: "r3q3/pp3pk1/2pp2pp/4P3/2Pb1P2/3P1QP1/PP5K/R4R2 w - - 0 22",
    score: 5.8,
  },
  {
    lichess: "https://lichess.org/z7ugauo6",
    fen: "rr4k1/p2n1ppp/2p2n2/2Pp4/3P4/5P1B/PP1K1P1P/RN5R w - - 3 15",
    score: 1.3,
  },
  {
    lichess: "https://lichess.org/0uXeqagu",
    fen: "r4rk1/pp1nppbp/2p2npB/q7/3P4/2N2B1P/PPPQ2P1/2KR3R w - - 1 13",
    score: -0.5,
  },
  {
    lichess: "https://lichess.org/5TukwZvx",
    fen: "7k/2p3q1/p6p/1pbp1Pn1/3p2P1/2P4P/PP2RPK1/4R3 w - - 0 33",
    score: -7.6,
  },
  {
    lichess: "https://lichess.org/Radvj4ka",
    fen: "3r1rk1/p4pp1/1pn3p1/2p5/4N3/q2P4/2B3PP/1R1Q1R1K w - - 0 27",
    score: 6.1,
  },
  {
    lichess: "https://lichess.org/EFmEch0u",
    fen: "r2qr1k1/p2n1pp1/2pb1p1p/8/PpPP4/4B2P/1PQ1BPP1/R3K2R w KQ - 1 15",
    score: 2.8,
  },
  {
    lichess: "https://lichess.org/ui1g96Vn",
    fen: "r2qk2r/3pb1pp/p1n1p3/1pp2p2/P7/3P1NP1/1PP2PKP/R1BQ1R2 w kq - 2 14",
    score: -1.6,
  },
  {
    lichess: "https://lichess.org/ni6peVjw",
    fen: "5rk1/1p2bppp/4p3/4P3/2QP2q1/P4N2/1P4PP/4R1K1 w - - 1 25",
    score: 3.4,
  },
  {
    lichess: "https://lichess.org/DjySV1e9",
    fen: "r2q1rk1/6bp/3p2p1/p2Npp1n/2PpP3/1P3P2/P2QB1PP/R2R2K1 w - - 0 20",
    score: 0,
  },
  {
    lichess: "https://lichess.org/Nh4F0Qih",
    fen: "1rqr4/p3bpk1/1p2p1p1/2p1P3/2P3QP/1P6/P4P2/2BRR1K1 w - - 1 25",
    score: 0.9,
  },
  {
    lichess: "https://lichess.org/w3gRlcxp",
    fen: "5rk1/1ppn1rpp/p2p2q1/3Pp3/2PnNP2/2NQ2P1/PP5P/3R1R1K w - - 1 24",
    score: -0.3,
  },
  {
    lichess: "https://lichess.org/a3EA8eh4",
    fen: "r1q2rk1/pp2p1bp/3ppnp1/8/2n1P1P1/1BN1BP2/PPPQ3P/R4RK1 w - - 6 14",
    score: 0.6,
  },
  {
    lichess: "https://lichess.org/UiCFh6HT",
    fen: "2r3r1/1p1kbp2/4p3/1q1P1p1p/p3pP2/P1B1P2P/1P3QP1/R1R4K w - - 1 27",
    score: 0.5,
  },
  {
    lichess: "https://lichess.org/t2s63NKk",
    fen: "r5k1/pp1n2pp/2q2n2/3p4/5P2/Q5P1/PP3BBP/4R1K1 w - - 1 21",
    score: 2.3,
  },
  {
    lichess: "https://lichess.org/5roLtZ0H",
    fen: "r2q2k1/p2b1rbp/1p1n2n1/1N1Pp1p1/PP2Pp2/1Q3P2/4BBPP/2R1K2R w K - 0 21",
    score: 3.9,
  },
  {
    lichess: "https://lichess.org/nYa26cre",
    fen: "5rk1/p4rp1/1pn1p1pp/2n1P3/P1Pp2P1/R5BP/2qN1P2/1R2Q1K1 w - - 4 24",
    score: -6.4,
  },
  {
    lichess: "https://lichess.org/iTddKCDm",
    fen: "2r5/5qbk/4p2p/1p1p1p2/2nP1B2/2P4P/5PPN/2Q3RK w - - 0 27",
    score: 1.3,
  },
  {
    lichess: "https://lichess.org/zMbZk7u5",
    fen: "r1b1k3/pp1n1p1p/2p1pr1p/8/3P3P/2qBQ3/P4PP1/4RRK1 w q - 0 18",
    score: -6.6,
  },
  {
    lichess: "https://lichess.org/db7G1nkQ",
    fen: "1k3r2/1pp2b2/p2b4/7p/3B3P/6P1/1P3PB1/4R1K1 w - - 3 27",
    score: 0.7,
  },
  {
    lichess: "https://lichess.org/LGjvRtqo",
    fen: "r1bq1r2/4pp1k/2pp1b1P/p5p1/2B1P1p1/2N1QP2/PPP5/1K1R3R w - - 1 19",
    score: -1.6,
  },
  {
    lichess: "https://lichess.org/wAE3IeZo",
    fen: "r3k2r/ppp1qpp1/2n5/3np2P/3P4/N1P5/PP3P2/R2QKB1R w KQkq - 0 16",
    score: -3.4,
  },
  {
    lichess: "https://lichess.org/Jec7cpJf",
    fen: "r4rk1/1pqbb1pp/4p3/p3pp2/2P1n3/N3B3/PPQ1BPPP/1R3RK1 w - f6 0 17",
    score: -2.7,
  },
  {
    lichess: "https://lichess.org/b4y4ZGSb",
    fen: "6k1/1p3pp1/p3p2p/Pr6/8/5K1P/5PP1/R7 w - - 4 34",
    score: -5.7,
  },
  {
    lichess: "https://lichess.org/IlUqkjO9",
    fen: "r1bq1rk1/1p2npbp/3pp1p1/p7/3pPP2/1B1P4/PPP1N1PP/R1B1QRK1 w - a6 0 12",
    score: 0.4,
  },
  {
    lichess: "https://lichess.org/kkBjlL0A",
    fen: "3r4/p1p5/b5k1/2p2p2/2P5/rPB5/P4RPP/R5K1 w - - 0 25",
    score: 5.7,
  },
  {
    lichess: "https://lichess.org/QDTuVyDx",
    fen: "r4rk1/5pbp/1q1p2p1/pp1Q4/4P3/P1P2P2/1P2N1PP/R3K2R w KQ - 1 18",
    score: 0.3,
  },
  {
    lichess: "https://lichess.org/SK9yCAI4",
    fen: "2b1r1k1/5pb1/pq1p2p1/2pP4/1r2n1P1/2N1N1Rp/RP1QBB1P/4K3 w - - 0 24",
    score: 0,
  },
  {
    lichess: "https://lichess.org/KOFBNrTx",
    fen: "1r4k1/p5pp/b3p3/2ppP3/5R1P/2N5/PPP3P1/6K1 w - - 1 20",
    score: 0.8,
  },
  {
    lichess: "https://lichess.org/9rcmIm3o",
    fen: "r1b1r1k1/1p2qp2/2p2bpp/p3p3/2PnP3/P1N2N1P/1PQ1BPP1/R2R2K1 w - - 3 18",
    score: -1.7,
  },
  {
    lichess: "https://lichess.org/6mFiqMUX",
    fen: "1r3rk1/pp2ppbp/2n3p1/2q5/4b3/PQ2PNP1/1P3PBP/R1B2RK1 w - - 0 15",
    score: -1.8,
  },
  {
    lichess: "https://lichess.org/KvmeRlUM",
    fen: "5rk1/P1b2ppp/RnB5/8/3P4/6P1/1P2KPP1/8 w - - 3 30",
    score: 7.2,
  },
  {
    lichess: "https://lichess.org/Rl59ECcV",
    fen: "r4rk1/4qppp/b3p3/2npP2P/p2N1P2/1p1B4/PPPQ2P1/1K1R3R w - - 0 19",
    score: -0.9,
  },
  {
    lichess: "https://lichess.org/j9esJZm9",
    fen: "r1b2rk1/1p2qppp/2p2n2/p7/3NP3/PnN2P2/1PQ3PP/2KR3R w - - 0 16",
    score: 0.1,
  },
  {
    lichess: "https://lichess.org/YR97ppgI",
    fen: "3rr1k1/1bp2pb1/1p2qn1p/p3pNp1/P1P1P1P1/1PBB3P/1Q3P2/3RR1K1 w - - 2 28",
    score: 2.1,
  },
  {
    lichess: "https://lichess.org/PMqzX6Ba",
    fen: "1r3rk1/pp3ppp/2nqpn2/3p4/3P2b1/2PB1N2/PP1N1PPP/R3QRK1 w - - 4 12",
    score: 0.3,
  },
  {
    lichess: "https://lichess.org/4ZYJ6wJd",
    fen: "4r2r/ppp2k2/3b1n1p/3p2p1/2bP4/2P2PN1/P2B1RPP/3R2K1 w - - 4 28",
    score: -7.9,
  },
  {
    lichess: "https://lichess.org/AcDBdImK",
    fen: "r3r3/3N3p/2k5/3pb3/1p2p3/1P6/P1P2PPP/3RR1K1 w - - 0 30",
    score: 0.8,
  },
  {
    lichess: "https://lichess.org/SrcCxDll",
    fen: "r3r3/pp3p1k/2n2Bpq/4P3/5QP1/7P/P2RR3/4K3 w - - 1 28",
    score: 10.1,
  },
  {
    lichess: "https://lichess.org/8vdnDXKa",
    fen: "8/pp6/2p1k1pp/8/3p2PP/5r2/PPP2N2/3K1R2 w - - 13 31",
    score: 5.9,
  },
  {
    lichess: "https://lichess.org/Bs6iaiuC",
    fen: "rnb2rk1/p3b1pp/2pp1n2/4p2q/2P2p2/2NP1NP1/P3PPBP/1RBQ1RK1 w - - 0 12",
    score: 1.8,
  },
  {
    lichess: "https://lichess.org/XNb3lVEm",
    fen: "3q2k1/3bb1n1/3p1ppB/n1pPp3/1pP1P1N1/rP1B1QNP/r5P1/1R3RK1 w - - 0 29",
    score: 2.5,
  },
  {
    lichess: "https://lichess.org/Nau4tcOF",
    fen: "r4rk1/pp2p1bp/2n1b1p1/3RP3/8/4BN2/PPP3PP/2K2B1R w - - 1 17",
    score: 1.7,
  },
  {
    lichess: "https://lichess.org/v8XOzv1G",
    fen: "2k2r2/1pp5/p1p2bp1/5n1p/PPP5/2B2N2/6P1/5RK1 w - - 0 31",
    score: -3.2,
  },
  {
    lichess: "https://lichess.org/9ZQGFF44",
    fen: "1r4k1/5p1p/p3ppb1/N2P4/8/bP2BP2/P1r3PP/5RK1 w - - 0 26",
    score: -8,
  },
  {
    lichess: "https://lichess.org/0A25aPBY",
    fen: "r2r2k1/pp3ppp/2p2n2/3P1q2/1n6/2N2B2/PP1Q1PPP/3RR1K1 w - - 0 18",
    score: 1.6,
  },
  {
    lichess: "https://lichess.org/Ch6x4uXw",
    fen: "6k1/5ppp/2p1r3/1p6/8/n1B5/5PPP/2R2K2 w - - 2 29",
    score: 3.6,
  },
  {
    lichess: "https://lichess.org/SX9qlXAh",
    fen: "2kr3r/ppqn1ppp/2p2n2/4p3/1P1bPPb1/P1NB1N2/2PBQ1PP/R4R1K w - - 1 14",
    score: 0.9,
  },
  {
    lichess: "https://lichess.org/wRYwbCiK",
    fen: "6k1/p4ppp/1rp5/5b2/8/1P1p1P2/P2K2PP/2R5 w - - 1 25",
    score: -7.6,
  },
  {
    lichess: "https://lichess.org/pqWSRW9J",
    fen: "r1r3k1/1pq1bppp/4p3/4N1P1/p2PQP2/8/PPPR3P/1K5R w - - 1 21",
    score: 4,
  },
  {
    lichess: "https://lichess.org/LExvd9O2",
    fen: "6k1/2p2pp1/1b1p3p/3P4/2B1K3/6P1/7r/5R2 w - - 0 30",
    score: -7.5,
  },
  {
    lichess: "https://lichess.org/RAj6p6WV",
    fen: "r1b1k3/pp2p3/3p1nR1/2pPnp2/2P5/3BPN1q/PB1QKP2/8 w q - 1 18",
    score: 1.9,
  },
  {
    lichess: "https://lichess.org/LuDrVIdw",
    fen: "r3b1k1/p3bppp/1p2p3/2PpN3/1R1Pn3/2R3B1/1P3PPP/6K1 w - - 4 26",
    score: 0,
  },
  {
    lichess: "https://lichess.org/3WQGPvJs",
    fen: "r2qkb1r/ppp2pp1/2npbn1p/4p3/2B1P3/2PP1N2/PP1N1PPP/R1BQK2R w KQkq - 2 7",
    score: 0.6,
  },
  {
    lichess: "https://lichess.org/3zvPC3nm",
    fen: "r4rk1/pb1nq1pp/3p4/2p1pp2/2PP4/P2BPP2/1B1Q2PP/R4RK1 w - - 0 17",
    score: 0.5,
  },
  {
    lichess: "https://lichess.org/QkkUH3Om",
    fen: "3r4/pp3kp1/3r1b1p/3p4/8/PP3B1P/4RPP1/4R1K1 w - - 0 28",
    score: 0.2,
  },
  {
    lichess: "https://lichess.org/WX8bxfuZ",
    fen: "r2qkb1r/ppp2pp1/2n2n1p/5bN1/2N1p3/6P1/PP1PPPBP/R1BQ1RK1 w kq - 0 9",
    score: -0.7,
  },
  {
    lichess: "https://lichess.org/SeWvZsHT",
    fen: "r4rk1/5pb1/pq2pBpp/np1bP3/2pPNP2/2P5/P1B1Q1PP/4RRK1 w - - 3 24",
    score: 5.2,
  },
  {
    lichess: "https://lichess.org/YXpooVzQ",
    fen: "r2q1rk1/2pbbppp/3p4/p1pPp2n/2P1P3/1PNB3P/P3NPP1/R2Q1RK1 w - - 1 13",
    score: -1.2,
  },
  {
    lichess: "https://lichess.org/F4RsZIlI",
    fen: "2r1r1k1/1b1n1pbp/p4np1/Bp1P4/3N4/1N1B1P2/PP2q1PP/R3R1K1 w - - 0 20",
    score: -1.2,
  },
  {
    lichess: "https://lichess.org/XxS3Z9bO",
    fen: "r1bqr1k1/1p1nbppp/p1n1p3/2ppP3/5B2/2NP1NP1/PPP2PBP/R2QR1K1 w - - 1 11",
    score: 0,
  },
  {
    lichess: "https://lichess.org/BY23XGDC",
    fen: "r4rk1/5pp1/2pn2p1/pp1p4/3P2P1/2P1P2P/P4PB1/3R1RK1 w - - 0 22",
    score: -0.4,
  },
  {
    lichess: "https://lichess.org/IMovi8nH",
    fen: "1rr3k1/p4p1p/4bnpb/4q3/Q1P1P3/2N2P2/PPK1N1PP/3R1B1R w - - 7 18",
    score: 0.8,
  },
  {
    lichess: "https://lichess.org/ImHBHWj9",
    fen: "6k1/1p6/p3p1pp/b3p3/P3P3/2rK1P1P/6P1/1RN5 w - - 2 29",
    score: -0.6,
  },
  {
    lichess: "https://lichess.org/3UvCeCH8",
    fen: "r1bq1r2/p3n1kp/4ppp1/8/N1p1PP2/1PQ2N2/P5PP/R4RK1 w - - 0 17",
    score: 4.5,
  },
  {
    lichess: "https://lichess.org/gQ43QmG1",
    fen: "r4rk1/2qn2b1/p2pp1pp/1pp5/4PP2/2P1B2P/PP1NQ1P1/R3R1K1 w - - 0 20",
    score: 1.3,
  },
  {
    lichess: "https://lichess.org/gN06Vt28",
    fen: "r1bq1b1k/1p1n3p/3r2n1/pPpNpNp1/2B1Pp2/P4P2/5BPP/R2QK2R w KQ - 7 22",
    score: 7.1,
  },
  {
    lichess: "https://lichess.org/g6gPRCZm",
    fen: "2q2rk1/1bpn2pp/3p4/1P1Ppp2/2B5/1Q2PP2/1B4PP/R5K1 w - - 1 25",
    score: 1.1,
  },
  {
    lichess: "https://lichess.org/572WBAWi",
    fen: "4r1k1/p2r1p2/6p1/1Ppb1n1p/P3NB1P/3B1P2/1b2K1P1/2R4R w - - 1 27",
    score: -1.4,
  },
  {
    lichess: "https://lichess.org/liYCVxzm",
    fen: "8/8/7k/1R1p1bpp/8/5PK1/4r1PP/3R4 w - - 2 35",
    score: 6.2,
  },
  {
    lichess: "https://lichess.org/ehnIEy2T",
    fen: "r1b2rk1/pp3p1p/5Rp1/3B4/6n1/1NP5/P5PP/R5K1 w - - 1 20",
    score: -0.6,
  },
  {
    lichess: "https://lichess.org/Ov1aUvEq",
    fen: "8/pp2p3/4k3/8/5p2/P3n3/1PqBQ3/1K6 w - - 0 37",
    score: -6.7,
  },
  {
    lichess: "https://lichess.org/zByiJ3vl",
    fen: "r4rk1/pp1bppbp/3p1np1/q2P4/n2N4/P1N3PP/1P2PPB1/R1BQ1RK1 w - - 1 15",
    score: 0,
  },
  {
    lichess: "https://lichess.org/022DQ15C",
    fen: "r3b3/pp2k1p1/2n1p2p/5p2/2N2P2/2P5/P1P3BP/1K1r3R w - - 0 20",
    score: -6.1,
  },
  {
    lichess: "https://lichess.org/OF1taxYH",
    fen: "4r1k1/2R2ppp/2N1b3/8/8/7P/5PP1/6K1 w - - 2 31",
    score: 0,
  },
  {
    lichess: "https://lichess.org/OdSrKL4s",
    fen: "r5k1/1r3pp1/2p1pq1p/p1Pp4/1P2PP2/P1PQ3P/6P1/2R2RK1 w - a6 0 24",
    score: 1.8,
  },
  {
    lichess: "https://lichess.org/hYJkvWi2",
    fen: "2r1r1k1/1pq2ppp/p7/8/8/P3Q1P1/1P2P1KP/R2R4 w - - 1 25",
    score: -0.6,
  },
  {
    lichess: "https://lichess.org/e8g5Rdxc",
    fen: "4k3/1R6/1N1bppp1/8/P6P/2n2NP1/5P1K/3r4 w - - 1 33",
    score: 1.2,
  },
  {
    lichess: "https://lichess.org/RleAAKpJ",
    fen: "8/1p2bkp1/pnq1pp1r/3pPb2/3P1P1p/PBN4P/1P2QBP1/4R1K1 w - - 1 23",
    score: 0.2,
  },
  {
    lichess: "https://lichess.org/DCW2AiYv",
    fen: "2r2rk1/1p3ppp/p3p3/4n3/4PN2/3p2P1/PP3PPK/2R2R2 w - - 0 24",
    score: -6.8,
  },
  {
    lichess: "https://lichess.org/80g6VwUE",
    fen: "2r1k2r/1b2qpn1/p1n1p1p1/1p1pP2p/3P1PP1/PP1B1N2/2R1Q2P/1NR3K1 w k - 0 26",
    score: 2.1,
  },
  {
    lichess: "https://lichess.org/YaQqZ6hR",
    fen: "2qr2r1/kpp2p2/p1n5/2Np3p/3PpPnP/1P2B1P1/P1P1QP2/1K1R3R w - - 5 22",
    score: -0.3,
  },
  {
    lichess: "https://lichess.org/ALhOGf4q",
    fen: "2rr1b2/7p/5p2/2p1pk2/2p1n3/B1P5/PP2PPBP/R2R2K1 w - - 0 29",
    score: 6.1,
  },
  {
    lichess: "https://lichess.org/2cGlxVdv",
    fen: "r1bq1rk1/4npb1/p5p1/2B1p3/3pP3/2N5/PP2BPP1/R2QK2R w KQ - 0 16",
    score: 0.7,
  },
  {
    lichess: "https://lichess.org/1CBmUTCl",
    fen: "1rb2rk1/2q1ppbp/3p2p1/2p5/2P1PP1P/1p1RB1P1/P3Q1BK/3R4 w - - 0 22",
    score: -0.4,
  },
  {
    lichess: "https://lichess.org/E1GAZJ0K",
    fen: "1rb2rk1/pp3p1p/4p1p1/4b3/2P5/2N2B2/PP3PPP/R2R2K1 w - - 4 17",
    score: 0,
  },
  {
    lichess: "https://lichess.org/F11qMiBy",
    fen: "8/p3kppp/1p2p3/3r2P1/4n3/2P2N2/PP2KPP1/7R w - - 3 27",
    score: 0,
  },
  {
    lichess: "https://lichess.org/8fgbiEpq",
    fen: "r1bqkb1r/ppp2pp1/8/4P2p/3p2P1/6P1/PPP1BP2/RNBQK2R w KQkq - 0 11",
    score: 7.8,
  },
  {
    lichess: "https://lichess.org/Q3cRa4H7",
    fen: "6k1/5p2/R5p1/3b3p/5P2/2R5/7r/5K2 w - h6 0 35",
    score: -0.1,
  },
  {
    lichess: "https://lichess.org/A39sPeW0",
    fen: "4r1k1/pp3ppp/2p2p2/7b/2BPqn2/2P2N1P/PP3PP1/R2Q2K1 w - - 4 22",
    score: -2.7,
  },
  {
    lichess: "https://lichess.org/TfpIlAwG",
    fen: "5knr/pp3ppp/8/b3PP2/N3p3/8/Pq2B2P/2r1QRK1 w - - 0 22",
    score: -0.5,
  },
  {
    lichess: "https://lichess.org/WkBvKMAV",
    fen: "r4rk1/pb2nppp/1q1b4/1B6/3N4/8/PPP2PPP/R1BQ1RK1 w - - 1 13",
    score: 2.5,
  },
  {
    lichess: "https://lichess.org/TwV3KxYr",
    fen: "8/1R6/1p2bk2/5ppp/8/8/1P3PPP/6K1 w - - 0 33",
    score: 7.8,
  },
  {
    lichess: "https://lichess.org/AUT1Xu7r",
    fen: "1k1r2nr/bpp2q2/p3b2p/3pP1p1/1P6/6N1/P1B2PPP/R1BQ1R1K w - - 1 19",
    score: 0.9,
  },
  {
    lichess: "https://lichess.org/n2m5YnT3",
    fen: "8/6pk/7p/8/7P/5RK1/1r4P1/8 w - - 4 42",
    score: 0,
  },
  {
    lichess: "https://lichess.org/pG9P4nCR",
    fen: "4r1k1/pbpn2pp/1p1ppr2/5p1q/2PP4/1P1B1P2/PBQ1R1PP/4R2K w - - 8 21",
    score: -0.2,
  },
  {
    lichess: "https://lichess.org/GEl9Ijvo",
    fen: "2rq1r1k/1p2bpp1/p1npbn1p/4p3/1P2P3/PBN1BN1P/4QPP1/2RR2K1 w - - 3 17",
    score: 0.3,
  },
  {
    lichess: "https://lichess.org/KC4KWlSB",
    fen: "2k5/pp3pr1/n1p1b3/2n5/5P2/7P/P5P1/1B1R1RK1 w - - 0 23",
    score: -1.5,
  },
  {
    lichess: "https://lichess.org/IE2o1esi",
    fen: "5r1k/1p2b1pp/p7/6P1/4p2P/P3Br2/1PP1K3/5R1R w - - 6 30",
    score: 2.1,
  },
  {
    lichess: "https://lichess.org/kT20juaf",
    fen: "r3k2r/1bqp1ppp/pb2pn2/1p2n3/1P1NP3/P1N1BP2/2PQB1PP/R4RK1 w kq - 1 14",
    score: 1.8,
  },
  {
    lichess: "https://lichess.org/44vE03sC",
    fen: "r2q1rk1/pp2bppp/2n5/2p1p3/8/PPBbP1N1/3PBPPP/2RQK2R w K - 8 13",
    score: 0.3,
  },
  {
    lichess: "https://lichess.org/tmfNaegw",
    fen: "r2qk3/p2b1p2/1p1Bpb2/6p1/8/2P1QP1N/PP4P1/2KR4 w q - 1 22",
    score: 7.6,
  },
  {
    lichess: "https://lichess.org/AqAPDDw9",
    fen: "3n4/7p/1p2p1k1/1P2B3/3Pp3/4K1P1/P3P2P/8 w - - 2 31",
    score: 10,
  },
  {
    lichess: "https://lichess.org/e5iNv7DP",
    fen: "r2q1rk1/pb1nbppp/1pp1p3/6B1/2PPn3/3B1N2/PP2QPPP/R2R2K1 w - - 0 13",
    score: 1.2,
  },
  {
    lichess: "https://lichess.org/3H1fjR3n",
    fen: "r1b1k2r/pppp1pb1/2n3n1/6q1/2BPPpp1/1QP5/PP1N2P1/R1B2RK1 w kq - 0 13",
    score: -9.5,
  },
  {
    lichess: "https://lichess.org/5x1qyT0G",
    fen: "1k1n1r1r/p1pb4/1p1p1p2/3P2b1/2BqP2p/1PP4P/P3R1P1/1K3RB1 w - - 0 29",
    score: -5.1,
  },
  {
    lichess: "https://lichess.org/0TTUTzMH",
    fen: "r5k1/5p1p/6p1/3p4/2q5/8/1Q3PPP/r1R3K1 w - - 0 31",
    score: -2,
  },
  {
    lichess: "https://lichess.org/gvdwmgqU",
    fen: "4r1k1/2qn2pp/2p1p1r1/2Pp1p1b/3Pn3/4PN1P/2QNBPP1/1R2R1K1 w - - 0 22",
    score: 3.5,
  },
  {
    lichess: "https://lichess.org/veNJy4bO",
    fen: "6k1/4pp1p/3p2p1/2p5/2qbPP2/6PP/2PRR1K1/r4Q2 w - - 7 32",
    score: -0.2,
  },
  {
    lichess: "https://lichess.org/OdTw3t0G",
    fen: "2k3nr/pp3pbp/4p1p1/1r6/2P5/8/PP1B1PPP/2KRR3 w - - 0 16",
    score: 6.7,
  },
  {
    lichess: "https://lichess.org/Ftp0iIr9",
    fen: "rn2k2r/1p2bpp1/p3b2p/3qp3/6PP/1N6/PPP1BP2/R1BQK1R1 w Qkq - 0 13",
    score: 0.1,
  },
  {
    lichess: "https://lichess.org/VPbXJqy2",
    fen: "4q3/p1R1p1kp/1p2nbp1/3P4/P7/B3P3/5PPP/1R4K1 w - - 0 27",
    score: 2.9,
  },
  {
    lichess: "https://lichess.org/Hx1PYMU6",
    fen: "2r2rk1/pp2qppp/3p4/4p3/3pPP2/PP1Pn3/1P1QNRPP/R5K1 w - - 1 17",
    score: -3.6,
  },
  {
    lichess: "https://lichess.org/uaqhA6DS",
    fen: "r2qr1k1/p1p1b1pp/1p2bp2/n2pN3/3P4/2N1P1P1/PP2QPBP/R1R3K1 w - - 0 16",
    score: 3,
  },
  {
    lichess: "https://lichess.org/qBdeCnT3",
    fen: "r7/p4kp1/1p2p2p/r7/2pP1P2/2P3P1/PR3P1P/2R3K1 w - - 3 28",
    score: 1.4,
  },
  {
    lichess: "https://lichess.org/mv3yNwWN",
    fen: "3r2k1/5ppp/qp2pb2/2p5/1p1rB3/5QP1/PP3P1P/R1B1R1K1 w - - 2 24",
    score: 5,
  },
  {
    lichess: "https://lichess.org/d3080qU7",
    fen: "r5k1/pb1p2p1/1p3r1p/2pp3q/2P1Pb2/P1N2P2/1P3Q1P/1K1R1B1R w - - 0 19",
    score: -1,
  },
  {
    lichess: "https://lichess.org/7KxwGGM6",
    fen: "3r4/1p2kpb1/3rp2p/p4p2/P7/2PN4/1P1R1PPP/3R2K1 w - - 4 24",
    score: -0.4,
  },
  {
    lichess: "https://lichess.org/tifpNgYb",
    fen: "r6k/p5pp/1p2Q3/2p1pP2/8/2Pq2P1/PP3K1P/4R3 w - - 0 26",
    score: 2.2,
  },
  {
    lichess: "https://lichess.org/OfECQzES",
    fen: "2r2rk1/pp1nq2p/2p2pp1/3np3/3PN3/P2BP3/1PQ2PPP/2R2RK1 w - - 0 18",
    score: 0.9,
  },
  {
    lichess: "https://lichess.org/F1DWlq6q",
    fen: "r1b2rk1/ppq1npbp/2n1p1p1/1B1pP1B1/3P2P1/2N2N2/PP1Q1P1P/R4RK1 w - - 1 13",
    score: 4,
  },
  {
    lichess: "https://lichess.org/Ocp07fyy",
    fen: "rb1qr3/3n1p1k/b4npp/p1pPp3/PpN1P3/1P1B1N2/1BR2PPP/3QR1K1 w - - 2 21",
    score: 4,
  },
  {
    lichess: "https://lichess.org/f3Ny85b4",
    fen: "4r1k1/p1qn1ppp/1p3b2/8/2rPB3/4B1P1/PP3P1P/R2Q1RK1 w - - 7 19",
    score: 5.9,
  },
  {
    lichess: "https://lichess.org/J4djrmSC",
    fen: "r1bqk2r/pp2ppbp/2np2p1/8/2P1P3/2N1N3/PP3PPP/R2QKB1R w KQkq - 1 10",
    score: -0.7,
  },
  {
    lichess: "https://lichess.org/Cwq8c2Qa",
    fen: "5rk1/p3Rp1p/3P1np1/8/3R1P2/6PP/b7/6K1 w - - 1 29",
    score: -1.9,
  },
  {
    lichess: "https://lichess.org/WEH9Qepr",
    fen: "r2q1rk1/1p1n2bp/3N2p1/2QPpbP1/p6P/4B3/PP2BP2/R3K2R w KQ - 5 22",
    score: 3.5,
  },
  {
    lichess: "https://lichess.org/0Nfx2DDJ",
    fen: "5k2/p5pp/1b6/1n1B4/5P2/1P3KPP/1r6/4R3 w - - 5 33",
    score: -5.8,
  },
  {
    lichess: "https://lichess.org/jwwQpyPl",
    fen: "3r4/pp4kp/5pP1/2p2r2/2B5/2P3P1/P3PP2/5RK1 w - - 0 31",
    score: 0.1,
  },
  {
    lichess: "https://lichess.org/E8t6UJMv",
    fen: "2r3k1/1p3ppp/p2q1n2/4b3/4P3/PP2NQpP/RB4K1/8 w - - 3 32",
    score: -0.9,
  },
  {
    lichess: "https://lichess.org/MLUHgCUH",
    fen: "2r1nr1k/1pq3pp/p2p1p2/2nP1N2/2P2BQ1/8/6PP/5R1K w - - 3 29",
    score: -9.1,
  },
  {
    lichess: "https://lichess.org/rp1oq5h8",
    fen: "3rr1k1/1pp1q2p/p5p1/3nnp1B/1P6/P2PP2P/1BQ2PP1/R4RK1 w - - 0 18",
    score: 3.8,
  },
  {
    lichess: "https://lichess.org/iiBMBh5L",
    fen: "r4rk1/1bqn1pp1/p2bpn1p/1pp1N3/3P4/1BN1P1B1/PP2QPPP/3R1RK1 w - - 4 16",
    score: -0.3,
  },
  {
    lichess: "https://lichess.org/rfMMJwD4",
    fen: "1rr3k1/1bqnb1pp/1p1p4/pP1P1p2/P1N1pP2/1QP1B3/4B1PP/1R3R1K w - - 1 22",
    score: 1.4,
  },
  {
    lichess: "https://lichess.org/ddOBXcOn",
    fen: "r4rk1/p1pnqpb1/1p4p1/4p1Rp/P1Npn2P/5N2/1PPB1PP1/3QKB1R w K - 0 15",
    score: 0.4,
  },
  {
    lichess: "https://lichess.org/MbfTXvm9",
    fen: "2rq1rk1/pp1n3p/2pbbn2/3p1p2/2PPpR2/1PN1P1P1/PB1NB2P/2RQ2K1 w - - 1 15",
    score: -1.5,
  },
  {
    lichess: "https://lichess.org/125dyKvL",
    fen: "r6k/ppp2p2/2nbr3/5q1P/3Pp3/P1P1Q2N/1P3P2/2K3RR w - - 2 26",
    score: -3.4,
  },
  {
    lichess: "https://lichess.org/B3KoYhaE",
    fen: "3rk2r/3n1ppp/2RPpn2/1p1p4/3P4/3BP2P/1P3PP1/5RK1 w k - 1 21",
    score: -4.6,
  },
  {
    lichess: "https://lichess.org/eNgZBcVL",
    fen: "r2qk1r1/ppp2p2/2npb2p/4p3/2B1P2P/2NPPN2/PPP2QP1/R5K1 w q - 1 16",
    score: -0.3,
  },
  {
    lichess: "https://lichess.org/Un8i54UZ",
    fen: "2b1rk2/2r2pp1/p1pRp2p/8/5P2/P1P5/BP4PP/3R3K w - - 6 23",
    score: 0,
  },
  {
    lichess: "https://lichess.org/0VQFmCp2",
    fen: "3r4/pBn1r1p1/1pP4p/3p1k1n/PP1P4/4B3/5P1P/2R1R1K1 w - - 0 29",
    score: 3.9,
  },
  {
    lichess: "https://lichess.org/02gAu1oW",
    fen: "r1b1k2r/1p2bp2/1qp5/2npP2p/p4Bp1/2P1P3/PPBN1PP1/R1Q2RK1 w kq - 2 19",
    score: -0.5,
  },
  {
    lichess: "https://lichess.org/b43qATpP",
    fen: "r2q1rk1/pp3pbp/2n1b1p1/2p5/P1n1PP2/2PP4/3N2BP/R1BQR1K1 w - - 0 16",
    score: -5.9,
  },
  {
    lichess: "https://lichess.org/wirdRfoY",
    fen: "r1bq1rk1/1p2npbp/p1n3p1/2ppp1N1/4P3/1QPP4/PP1NBPPP/R1B1R1K1 w - - 8 12",
    score: -0.9,
  },
  {
    lichess: "https://lichess.org/XirLSRUN",
    fen: "4r1k1/1p3nbp/pN4p1/P1rP1p2/1B2p3/6P1/4BP1P/4R1K1 w - - 0 34",
    score: 7.8,
  },
  {
    lichess: "https://lichess.org/68S9gmNG",
    fen: "r4rk1/pppbqp2/2n1p1pp/3nP3/4NP2/3B1N2/PP2Q1PP/R4RK1 w - - 4 17",
    score: 0.8,
  },
  {
    lichess: "https://lichess.org/utN8XBSy",
    fen: "4rrk1/1p1q1pb1/p2p4/3P1R2/2P1p1p1/1n2B3/PP1Q2PP/5RK1 w - - 0 23",
    score: 1.4,
  },
  {
    lichess: "https://lichess.org/C9APmzQC",
    fen: "6k1/pbq1np2/1p3bpp/2p1p2P/4P3/2P1NNP1/PPQ2PB1/3r2K1 w - - 0 20",
    score: -0.3,
  },
  {
    lichess: "https://lichess.org/gBvSeJF6",
    fen: "r7/6pk/4npqp/3p4/3p4/1N2PP2/P2R1KPP/2Q5 w - - 0 36",
    score: 0.4,
  },
  {
    lichess: "https://lichess.org/nixeBtrO",
    fen: "r3k2r/pp1nbpp1/q1p1p3/3pPnBp/2PP3P/PP1Q1N2/3N1PP1/R4RK1 w kq - 1 14",
    score: 1.5,
  },
  {
    lichess: "https://lichess.org/Pu6np6mT",
    fen: "8/pp3n2/3k1p2/2p3p1/4P3/1P1PK1P1/P5B1/8 w - - 0 29",
    score: -0.6,
  },
  {
    lichess: "https://lichess.org/0yYT5G4k",
    fen: "rnbqkb1r/5ppp/p2p4/1p1Np3/4n3/N7/PPP2PPP/R1BQKB1R w KQkq - 0 9",
    score: 0.6,
  },
  {
    lichess: "https://lichess.org/rGV6I0F0",
    fen: "2r3r1/p2kbp2/1p2p3/nP1pPp1p/3P1P2/4B2P/P2N2P1/1RR2K2 w - - 3 24",
    score: -1.9,
  },
  {
    lichess: "https://lichess.org/2eoklXOv",
    fen: "3r2k1/pR3p1p/2p3p1/4pb2/4NKn1/3B4/P1P3P1/8 w - e6 0 27",
    score: -7.2,
  },
  {
    lichess: "https://lichess.org/8ozZblzo",
    fen: "r1bq1rk1/pp3pb1/2n1p1p1/2p3Np/2BP1B1P/1QP1P3/P4PP1/R3K2R w KQ - 0 13",
    score: 0.1,
  },
  {
    lichess: "https://lichess.org/xt5XffRh",
    fen: "2r2rk1/p1qnbppp/1p2p3/P1p1P3/2p2P2/1P1QP2P/1B1N2P1/R4RK1 w - - 0 18",
    score: 1,
  },
  {
    lichess: "https://lichess.org/sXoCdsJA",
    fen: "8/6p1/8/5p2/2k5/8/PP3PK1/3B4 w - - 0 46",
    score: 12.9,
  },
  {
    lichess: "https://lichess.org/PwhHysGY",
    fen: "r4rk1/4nppp/p2qp3/1p6/1P1Pb3/2P2N2/P4PPP/R2QR1K1 w - - 0 19",
    score: -1.2,
  },
  {
    lichess: "https://lichess.org/70zfrFxx",
    fen: "r2q1rk1/3n2bp/bpp1p1p1/p2pPp2/2P2P2/1P2P1P1/PB1N2BP/R2QR1K1 w - - 1 15",
    score: 0.8,
  },
  {
    lichess: "https://lichess.org/9M8aatqf",
    fen: "q4r2/2p1bpk1/2R1p1pp/1n1rP3/1pRPN2P/4QN2/5PP1/6K1 w - - 12 28",
    score: -1,
  },
  {
    lichess: "https://lichess.org/Lp2imvhL",
    fen: "2rq1rk1/pb1nbppp/1p2pn2/4N3/3p1P2/1PN1P2R/1B2B1PP/R2Q2K1 w - - 0 15",
    score: -2.1,
  },
  {
    lichess: "https://lichess.org/lLFfdyLk",
    fen: "3rr1k1/p4pp1/1p2bbp1/2p5/q2P4/4BP2/P2Q2PP/2N1RRK1 w - - 1 24",
    score: -8.1,
  },
  {
    lichess: "https://lichess.org/nzAiQ1Ca",
    fen: "r1bn1bk1/1p1p1p1p/p2P2p1/3Bp3/8/1N4P1/PP2PP1P/R4RK1 w - - 1 18",
    score: 5.4,
  },
  {
    lichess: "https://lichess.org/T5qApMXq",
    fen: "1rb1r3/2qn1pbk/p2p1np1/Pp1P2Bp/2p1PP2/2N3N1/1P1QB1PP/R4R1K w - b6 0 18",
    score: 1.1,
  },
  {
    lichess: "https://lichess.org/jMgyhYLL",
    fen: "r1b2rk1/pp3pbp/2n1p1p1/2p5/4n3/5NP1/PPP2PBP/R1BR1NK1 w - - 0 12",
    score: -0.2,
  },
  {
    lichess: "https://lichess.org/4jKVeEof",
    fen: "2r2rk1/pb3ppp/1pnqpn2/2pp4/3P4/2PBPN2/PP1N1PPP/2RQ1RK1 w - - 0 12",
    score: -0.1,
  },
  {
    lichess: "https://lichess.org/LPZcCF3e",
    fen: "r4rk1/pp2qpb1/2n3pp/2p2b2/2Npn2P/1P1Q1NP1/PBP1PPB1/R3K2R w KQ - 2 15",
    score: -7.7,
  },
  {
    lichess: "https://lichess.org/ENpBUrJ6",
    fen: "2kr4/7n/pbq1p1n1/1pp1p2p/4P1pP/2P1B1P1/PP2QP1N/2K2N1R w - - 5 26",
    score: 0.6,
  },
  {
    lichess: "https://lichess.org/j5uQNY9F",
    fen: "rn1q1rk1/pb2ppbp/1p1p1np1/2p5/3P4/1P2PN2/PBPNBPPP/R2Q1RK1 w - - 2 9",
    score: 0,
  },
  {
    lichess: "https://lichess.org/lcxstzvI",
    fen: "1r1q1rk1/1pp1npb1/3p2pp/p4b2/2P4P/1PNnP3/PBN1BPP1/R1Q1K2R w KQ - 8 15",
    score: 0.6,
  },
  {
    lichess: "https://lichess.org/ggpj4vFO",
    fen: "r4rk1/ppqn1pp1/2p1pn1p/7P/2PP1b2/4NN2/PP1BQPP1/R3K2R w KQ - 5 18",
    score: -0.3,
  },
  {
    lichess: "https://lichess.org/PzDKPTt6",
    fen: "r2q1rk1/pp1bbppp/2n2n2/3p2B1/B2N4/2N5/PPP2PPP/R2Q1RK1 w - - 7 11",
    score: 0.4,
  },
  {
    lichess: "https://lichess.org/D614EosG",
    fen: "r1bq1rk1/pp4b1/2n1pn2/3p2Bp/2pP2PP/2P5/PPQNB1P1/R3K1NR w KQ - 1 17",
    score: 5.2,
  },
  {
    lichess: "https://lichess.org/CWqQUrAW",
    fen: "r1r2bn1/2qb1ppk/3p3p/3PpN2/1B2P3/4NQ1P/1p3PP1/3RR1K1 w - - 0 30",
    score: -1.5,
  },
  {
    lichess: "https://lichess.org/zCz9DzU3",
    fen: "r1b1k2r/1pqp1ppp/p1n1pn2/8/1b1NP3/2N1B3/PPP1BPPP/R2Q1RK1 w kq - 4 9",
    score: 0.6,
  },
  {
    lichess: "https://lichess.org/aMiqx4di",
    fen: "6k1/6b1/1p1p2p1/nRpPp1q1/2P1P3/P2Q2Pp/4N2P/4Kr2 w - - 0 29",
    score: 5.9,
  },
  {
    lichess: "https://lichess.org/FL4saCBI",
    fen: "r3kb2/ppp1q3/4p1r1/3pP3/3Pb2P/2P5/PP3QP1/R1B1KB1R w KQq - 0 19",
    score: 2.8,
  },
  {
    lichess: "https://lichess.org/PjM2XTyY",
    fen: "q4r1k/p1p1b1pp/3p4/1P2p3/2P1P1n1/2NP1Ppb/P6P/1RBQR1K1 w - - 0 19",
    score: 4.6,
  },
  {
    lichess: "https://lichess.org/oWjLb46m",
    fen: "1r1qr1k1/1p3ppp/5b2/pBPNnb2/3n1B2/P4P2/1P4PP/2RQ1R1K w - - 0 20",
    score: 5.7,
  },
  {
    lichess: "https://lichess.org/xWTFNhyM",
    fen: "3r2k1/4np2/2pb1q1p/1N1p1bp1/p2P4/2R1PN2/4BPPP/5QK1 w - - 0 25",
    score: -2.4,
  },
  {
    lichess: "https://lichess.org/xjqqO2vb",
    fen: "r1bqr1k1/pppp1ppp/2n5/2b1n3/2P5/2NBPN2/PP3PPP/R1BQ1RK1 w - - 0 9",
    score: 0.8,
  },
  {
    lichess: "https://lichess.org/pSQzxUa2",
    fen: "r1bq1rk1/pppp1p1p/2nb1np1/3Np1N1/2P5/4P3/PPQP1PPP/R1B1KB1R w KQ - 0 8",
    score: 0.8,
  },
  {
    lichess: "https://lichess.org/pv3yeyXi",
    fen: "r2q2k1/p4rbp/2n5/1pB2p2/Q1b1p2N/2P3P1/P5BP/R3R1K1 w - b6 0 21",
    score: -5.2,
  },
  {
    lichess: "https://lichess.org/6Zl9XY3r",
    fen: "r1b3k1/pp3pbp/6p1/3pn3/3N4/1P2P1P1/PB3P1P/R3K2R w KQ - 4 16",
    score: 3.9,
  },
  {
    lichess: "https://lichess.org/Si13f4Bc",
    fen: "r5nr/ppp1k1pp/1bn1bp2/4p3/2N5/1P2P1N1/PBP2PPP/2KR1B1R w - - 2 12",
    score: 1.9,
  },
  {
    lichess: "https://lichess.org/3b82cIh4",
    fen: "2kr3r/pp2b1pp/5q2/3npp1b/3p4/PN1P2PP/1PPN1PB1/4RQKR w - - 2 20",
    score: 1.9,
  },
  {
    lichess: "https://lichess.org/oTbRqGQs",
    fen: "2r2rk1/1pN2ppp/p3pn2/8/2B3b1/1P1P4/PRP2PPP/5RK1 w - - 1 18",
    score: -1,
  },
  {
    lichess: "https://lichess.org/IbM0STIp",
    fen: "r1b1k2r/1p3ppp/p1n1p3/q2p4/3P1P2/P1RBP3/1P2Q1PP/4K1NR w Kkq - 1 14",
    score: 1.1,
  },
  {
    lichess: "https://lichess.org/4KTRoxRo",
    fen: "5rk1/pp2b1pp/2n1pr2/q7/8/P1N1PN2/1P2QPPP/2R2RK1 w - - 13 23",
    score: 3.8,
  },
  {
    lichess: "https://lichess.org/L5DL2Wb0",
    fen: "r4rk1/p4p1p/3n1q2/2pp4/3N4/4PPP1/PQ3P2/R2R2K1 w - - 1 23",
    score: -2.2,
  },
  {
    lichess: "https://lichess.org/kEcwGMg7",
    fen: "r4rk1/p4ppp/bppRp3/8/7q/1B2PQ2/PPP3PP/5RK1 w - - 1 18",
    score: -0.5,
  },
  {
    lichess: "https://lichess.org/EI30Jaz8",
    fen: "r3k2r/p2qbppb/n2p3p/2p4P/2PPp1P1/1PB5/P2N1P2/R2QKBR1 w Qkq - 0 19",
    score: -2,
  },
  {
    lichess: "https://lichess.org/g0QpOqb7",
    fen: "1q1rrbk1/pp1n1ppp/2pp2b1/4n3/2PNP3/1PN2PP1/PB3QBP/2RR3K w - - 16 23",
    score: 0.7,
  },
  {
    lichess: "https://lichess.org/QNk7GdpW",
    fen: "r1b2rk1/ppp1q1pp/8/3pbp2/3Pn3/1QPB4/PP1N2PP/R1B2RK1 w - - 0 13",
    score: 7.6,
  },
  {
    lichess: "https://lichess.org/BKQCtcPg",
    fen: "3r1rk1/ppp3p1/6qP/4PpN1/8/4b3/PPQ3P1/1K1R3R w - - 0 28",
    score: 24.7,
  },
  {
    lichess: "https://lichess.org/0j1QSYHn",
    fen: "2r3k1/4R1b1/6p1/p1n5/7P/1b2BP2/6P1/6K1 w - - 0 31",
    score: -7.3,
  },
  {
    lichess: "https://lichess.org/NVTkgWXL",
    fen: "r2qk2r/pp3ppp/2nbp3/3p4/3P4/2PQB1N1/PP3PPP/R3K2R w KQkq - 1 14",
    score: -0.3,
  },
  {
    lichess: "https://lichess.org/Xq8YOlgt",
    fen: "r3r1k1/1p1nq1p1/p1p4p/5b2/P2Pp3/1PR2PB1/6B1/2Q1R1K1 w - - 0 27",
    score: -0.7,
  },
  {
    lichess: "https://lichess.org/vdREAz7F",
    fen: "1k1r3r/1pp2qpp/p1pb1p2/4nP2/5B2/P1N5/1PP1QPPP/3RR1K1 w - - 3 18",
    score: 0.2,
  },
  {
    lichess: "https://lichess.org/XOcCTvZ2",
    fen: "rnb1k2r/pp1pbppp/2pn4/8/8/1BN5/PPPP1PPP/R1B1K1NR w KQkq - 0 8",
    score: 1.1,
  },
  {
    lichess: "https://lichess.org/lkOykmDr",
    fen: "r4rk1/pppq2pp/2nb1p2/3p4/3P2b1/2PB1NP1/PP1N1PP1/R2Q1RK1 w - - 1 13",
    score: 1,
  },
  {
    lichess: "https://lichess.org/tvhP5GIQ",
    fen: "5rk1/1p3ppb/n1p2n1p/q2p4/1b6/1QNP1NP1/4PPBP/BR4K1 w - - 6 16",
    score: -0.3,
  },
  {
    lichess: "https://lichess.org/Y4LUWWh3",
    fen: "2rq1rk1/1p4p1/3p3p/p1bPpp2/2Pn4/PP3B1P/1B3PP1/R2Q1RK1 w - f6 0 18",
    score: -1.2,
  },
  {
    lichess: "https://lichess.org/4vDoc2f9",
    fen: "rnbqk2r/ppp1ppbp/5np1/8/2BP4/4PN2/PP3PPP/RNBQK2R w KQkq - 1 6",
    score: 0.9,
  },
  {
    lichess: "https://lichess.org/iC3op4mT",
    fen: "3rr1k1/1b1q1pb1/p1n3pp/1ppp4/5B2/1BP1PN1P/PP2QPP1/R4RK1 w - - 2 23",
    score: -1.1,
  },
  {
    lichess: "https://lichess.org/qqAH7rVF",
    fen: "r3r1k1/1bqn1pbp/pp1p1np1/2pP4/P1N1P3/2N5/1PQ1BPPP/R1B1R1K1 w - - 6 15",
    score: 2.6,
  },
  {
    lichess: "https://lichess.org/Dx6dfxMI",
    fen: "2r1kb1r/1p1n1ppp/p3p3/1q1p4/1NnP1BPP/PQ3P2/1PP1N3/1K1R3R w k - 9 19",
    score: 0.5,
  },
  {
    lichess: "https://lichess.org/mANkTN1y",
    fen: "1b3rk1/ppq2pp1/4p2p/2Pp4/3P4/PQN1P2P/3n1PP1/2R2NK1 w - - 3 26",
    score: 0,
  },
  {
    lichess: "https://lichess.org/xth73NK8",
    fen: "rn2kbnr/pp3pp1/1qp1p3/3pP1Bp/3P3P/3Q4/PPP2PP1/RN2K1NR w KQkq - 0 8",
    score: 0.1,
  },
  {
    lichess: "https://lichess.org/WCixd8BM",
    fen: "1r4k1/R4p1p/2b1p1p1/8/1P3r2/4N3/P2b1PPP/2R3K1 w - - 0 30",
    score: -0.3,
  },
  {
    lichess: "https://lichess.org/1Vr8WEKR",
    fen: "r2q4/5kpp/p1p5/1pbn4/2P5/2N5/PPP3PP/R1B1Q1K1 w - - 1 18",
    score: -1.3,
  },
  {
    lichess: "https://lichess.org/HvjQWngx",
    fen: "r2rq2k/1p1n1ppp/3B1n2/1P4Q1/2P1p3/p6P/P3BPP1/3R1RK1 w - - 1 27",
    score: 3.7,
  },
  {
    lichess: "https://lichess.org/peiUCtcc",
    fen: "6k1/p2n1pbp/3P2p1/1N3P2/1R1pq3/4r2P/P5P1/3QR1K1 w - - 1 24",
    score: 1.6,
  },
  {
    lichess: "https://lichess.org/YyB6X2zh",
    fen: "3r2k1/1p2bpp1/p1n1p2p/8/1P2q3/P3rNP1/1N3PP1/1QR2RK1 w - - 0 22",
    score: 4.6,
  },
  {
    lichess: "https://lichess.org/WKh7YeCM",
    fen: "r4rk1/qp1nbpp1/2p2n1p/p2p1b2/N2P1B2/1P2PN1P/P3BPP1/2RQ1RK1 w - - 0 14",
    score: 0,
  },
  {
    lichess: "https://lichess.org/v2HQHzg9",
    fen: "1r1q1r2/1b2b1k1/3pp1p1/pN3p2/P3nPQ1/2P1B2P/1PB3P1/2KR2R1 w - f6 0 26",
    score: 5.6,
  },
  {
    lichess: "https://lichess.org/q9edzoGQ",
    fen: "r1b1kb1r/1p3ppp/p1n1p3/2p5/4PP2/5NP1/PPP3BP/R1BqK2R w KQkq - 0 10",
    score: 0.3,
  },
  {
    lichess: "https://lichess.org/TviD00Gr",
    fen: "rnbq1rk1/pp1pppbp/5np1/2p5/3PPB2/2N5/PPPQ1PPP/R3KBNR w KQ c6 0 6",
    score: 1.5,
  },
  {
    lichess: "https://lichess.org/8E5iXeU2",
    fen: "8/1p6/p1p2k2/2Pprb2/1P3Rp1/P3P1P1/2B5/6K1 w - - 1 45",
    score: 2.1,
  },
  {
    lichess: "https://lichess.org/uCt5Kk77",
    fen: "6rk/pp6/2p1p1rq/2Pp1pp1/1P1P1P1p/3QP1P1/P5RP/6RK w - - 0 28",
    score: 0,
  },
  {
    lichess: "https://lichess.org/Gz1kYXo7",
    fen: "1r1q1rk1/5ppp/2R1pn2/1B1p4/P2P4/4PP2/1P3P1P/3Q1R1K w - - 3 18",
    score: 6.1,
  },
  {
    lichess: "https://lichess.org/r137MfPS",
    fen: "3q1rk1/pp1bppb1/3p2p1/7n/2rNP3/2N1BPp1/PPPQ4/1K4RR w - - 0 18",
    score: 0.7,
  },
  {
    lichess: "https://lichess.org/bqpaOJCB",
    fen: "r1b1qr1k/1pp3pp/p1np1n2/2b1p3/P1B1P3/2P2N1P/1P2QPP1/RNB2RK1 w - - 2 12",
    score: -1.8,
  },
  {
    lichess: "https://lichess.org/nxixSrC7",
    fen: "6k1/4q1pp/bp3n2/p3Np2/3rpP2/1P4PP/P3Q1B1/2r1R2K w - - 0 27",
    score: -12,
  },
  {
    lichess: "https://lichess.org/7cg6IAYA",
    fen: "r4rk1/pbpp2pp/1p2p2q/4P3/5p2/2PB4/PP1NQPPP/R4RK1 w - - 0 15",
    score: 8.1,
  },
  {
    lichess: "https://lichess.org/X6QPhznR",
    fen: "3q1rk1/pb2b1Np/1p1n1p2/3Pn1P1/2rQ1p1P/2N4B/PP2PP2/1K1R2R1 w - - 1 20",
    score: -1.7,
  },
  {
    lichess: "https://lichess.org/WFqMQ6LU",
    fen: "2r2rk1/p1q2ppp/4p3/1pbbP3/2p2P2/2P1B3/PPB1Q1PP/R4R1K w - - 2 19",
    score: -0.2,
  },
  {
    lichess: "https://lichess.org/AvVrftyA",
    fen: "2r1k2r/pp1bppbp/3p1p2/8/3qP3/1BN5/PPP2PPP/1K1R3R w k - 0 14",
    score: -1.3,
  },
  {
    lichess: "https://lichess.org/oCQ7YUX4",
    fen: "rn2k2r/p2qppb1/2p1b1p1/1p1pP1N1/3P3p/2NBP2P/PPPQ2P1/2K2R1R w kq b6 0 14",
    score: 4.5,
  },
  {
    lichess: "https://lichess.org/ZWJKds5M",
    fen: "r1b2rk1/p3bppp/2np4/qpp5/7P/P1P1BN2/1PPQ1PP1/2KR1B1R w - - 1 12",
    score: 2.9,
  },
  {
    lichess: "https://lichess.org/GTP6OvKD",
    fen: "r2q1rk1/pb1nppbp/1p1p2p1/P7/2P5/2n1QNP1/1P2PPBP/R1BR2K1 w - - 0 13",
    score: -2,
  },
  {
    lichess: "https://lichess.org/tqUXzHCr",
    fen: "r1bqnbk1/pp3r2/3p2n1/3Pp1pp/4Pp2/2N2P1P/PP1BBNP1/2RQ1RK1 w - - 1 18",
    score: -0.3,
  },
  {
    lichess: "https://lichess.org/5cDjzxYb",
    fen: "2r3k1/4n1pp/2b5/1p6/4PP2/1RN1B1P1/2r4P/5BK1 w - - 5 35",
    score: 4.3,
  },
  {
    lichess: "https://lichess.org/XB2dH4lp",
    fen: "2r3k1/5p1p/p2p2p1/3P1b2/1N1q3P/1P6/1K6/4Q2R w - - 4 31",
    score: -8.7,
  },
  {
    lichess: "https://lichess.org/Ufrqv9re",
    fen: "r4rk1/1pq1b1pp/5n2/1P1p1p2/pBn1p3/P3P1PP/NP2QP2/1K1R1B1R w - - 4 24",
    score: 2,
  },
  {
    lichess: "https://lichess.org/Wy4bX8Ou",
    fen: "r2qkb1r/p2nnp2/1p2p1p1/2ppP3/P2P1P1p/1PPQB2P/3NN1P1/2R2RK1 w kq - 3 17",
    score: 2.3,
  },
  {
    lichess: "https://lichess.org/gqF7Nrnk",
    fen: "r2q1rk1/1bp1bppp/1p2p3/4N1P1/1n1P3P/pPN5/P1P1QP2/1K1R1BR1 w - - 1 21",
    score: 1.2,
  },
  {
    lichess: "https://lichess.org/69MdI8pk",
    fen: "2b1r1k1/6p1/pp1Rp2p/5P2/P1B1Pn2/6P1/7P/6K1 w - - 0 35",
    score: 5.4,
  },
  {
    lichess: "https://lichess.org/tygdZUxX",
    fen: "r4rk1/1q2bppp/p1b2n2/1p1ppP2/4P3/P1NB4/1PP1QBPP/3R1RK1 w - - 0 17",
    score: -0.2,
  },
  {
    lichess: "https://lichess.org/3pa6QvfO",
    fen: "1qrr2k1/1b1nbppp/pp1ppn2/8/PPPQP3/2N1BP2/4B1PP/RNR3K1 w - - 9 18",
    score: -0.8,
  },
  {
    lichess: "https://lichess.org/Z3FKW00D",
    fen: "rn2r1k1/2p2pp1/p1Pp1q1p/1p1Ppb2/1b6/3PBN1P/PPB2PP1/R2Q1RK1 w - - 1 16",
    score: 3.7,
  },
  {
    lichess: "https://lichess.org/svCsDFKN",
    fen: "r1b2rk1/pp4pp/2n2q2/3pn3/8/P2B1N2/1P1QNPPP/R3K2R w KQ - 0 15",
    score: -3.3,
  },
  {
    lichess: "https://lichess.org/ISoelrcA",
    fen: "1k1r2nr/pp1q1ppp/3b4/3N4/2Q2B2/8/PPP2PPP/R3K2R w KQ - 5 13",
    score: 5.2,
  },
  {
    lichess: "https://lichess.org/7SG1NdXJ",
    fen: "r3nrk1/nQ3ppp/4b3/1p6/3pPB2/3P2P1/4qNBP/R4RK1 w - - 4 23",
    score: 9.6,
  },
  {
    lichess: "https://lichess.org/Bth1bDWG",
    fen: "8/2Rn3k/1p6/1P1p1p2/3B1Prp/4q3/6P1/6K1 w - - 0 44",
    score: 4.5,
  },
  {
    lichess: "https://lichess.org/MXwcodDb",
    fen: "r1bqk2r/2ppbppp/p1n2n2/1p2p3/B2PP3/5N2/PPP2PPP/RNBQ1RK1 w kq b6 0 7",
    score: 1,
  },
  {
    lichess: "https://lichess.org/lXPHfhyM",
    fen: "3r1rk1/p3b2p/1p6/2pnPp2/2Np1P2/1P4P1/P5RP/3q1RBK w - - 0 30",
    score: -2.9,
  },
  {
    lichess: "https://lichess.org/2d9NjIO9",
    fen: "2n2r2/5p1k/2pp1bpp/4p3/2P1PnPN/3P1P1b/2RR1Q1P/q1B3KB w - - 2 30",
    score: 0,
  },
  {
    lichess: "https://lichess.org/RukqvMc2",
    fen: "r4rk1/pp2n1bp/2np2p1/2p1p3/2P1PP1q/P1NPBQ2/1P3P1N/R4RK1 w - - 0 17",
    score: -0.8,
  },
  {
    lichess: "https://lichess.org/qQDkh3hl",
    fen: "6k1/p4pp1/1p5p/2n5/3b1P2/7P/PPB3P1/2B3K1 w - - 3 36",
    score: 1,
  },
  {
    lichess: "https://lichess.org/jDzN6ROR",
    fen: "r1q2rk1/1p3ppp/p2bpn2/4Nb2/2pP1B2/1Q6/PP1N1PPP/2R2RK1 w - - 0 15",
    score: 3.5,
  },
  {
    lichess: "https://lichess.org/2BGjQreJ",
    fen: "r2qr1k1/pb1nbppp/1pp2n2/3p2B1/3P4/1QN1PN2/PP2BPPP/2R2RK1 w - - 2 12",
    score: 0.7,
  },
  {
    lichess: "https://lichess.org/KUl5Vppc",
    fen: "r1bqk2r/pp3pp1/2nb1n2/2p1pP1p/3pP3/P4NN1/1PPP2PP/R1BQKB1R w KQkq h6 0 9",
    score: -0.2,
  },
  {
    lichess: "https://lichess.org/jsE2eE86",
    fen: "6rk/p5pp/2pp3q/4n1n1/3PQ3/6B1/PP5P/4RRK1 w - - 1 30",
    score: 5.8,
  },
  {
    lichess: "https://lichess.org/ZCZXx0jg",
    fen: "4rr1k/1p4pp/2pq1n2/p1np4/P2Q4/2N1R2P/BPP2PP1/3R2K1 w - - 2 20",
    score: -0.6,
  },
  {
    lichess: "https://lichess.org/63Mj9eFZ",
    fen: "r4r2/pq2bp1k/1p2p1p1/2p1B2p/5Q1P/3P2P1/PPP2P2/R3R1K1 w - - 2 18",
    score: 0.5,
  },
  {
    lichess: "https://lichess.org/KbzrSlnD",
    fen: "2rq2k1/pp1n2p1/2pbp2r/7p/2PPP1nP/3B4/PPQBN1P1/2KR3R w - - 1 19",
    score: 8.8,
  },
  {
    lichess: "https://lichess.org/Hyae3i6r",
    fen: "rn1qkb1r/pbppp2p/5np1/1B3p2/4P3/2NP4/PPP1QPPP/R1B1K1NR w KQkq - 0 6",
    score: 4.5,
  },
  {
    lichess: "https://lichess.org/Fow9RUJi",
    fen: "1k1r3r/ppp3p1/2n2pq1/2b1Pb2/7p/PP2Q1P1/1BP1PPBP/R3K2R w KQ - 0 16",
    score: 0,
  },
  {
    lichess: "https://lichess.org/G5M5LSC1",
    fen: "rnbqk2r/pp2bppp/1n1pp3/2pPP3/2P5/2N2N2/PP3PPP/R1BQKB1R w KQkq - 2 8",
    score: 2.1,
  },
  {
    lichess: "https://lichess.org/u4jVJU8X",
    fen: "1r6/3bkp2/B1pRn1p1/4P1Pr/8/2N5/PPP5/2K3R1 w - - 1 24",
    score: 4.4,
  },
  {
    lichess: "https://lichess.org/kzVtWyNC",
    fen: "r1b2qk1/pppn1p1p/2np2p1/8/2P4P/1P1PP3/P2NKPP1/R2Q3R w - - 2 13",
    score: -3,
  },
  {
    lichess: "https://lichess.org/djLRKc2Y",
    fen: "r1b1r1k1/pp3p2/2n1pBpn/q2pP2p/2pP3P/P1P2N1R/1QP2PP1/R2K1B2 w - - 10 18",
    score: 4.2,
  },
  {
    lichess: "https://lichess.org/AxxIXT9f",
    fen: "3rr1k1/1p1q1ppp/1p1p1nn1/4p3/2P5/2BP1NPb/4PPBP/R2Q1RK1 w - - 0 17",
    score: -0.7,
  },
  {
    lichess: "https://lichess.org/ZiSh4AuM",
    fen: "r5k1/1p4pp/p2p3r/3Pp3/P1N1Bq2/4pP2/1PP5/R2K1Q2 w - - 2 29",
    score: 3.1,
  },
  {
    lichess: "https://lichess.org/jvtLmldF",
    fen: "8/p2kp3/1p1p4/4b2R/r5P1/8/P3K3/6R1 w - - 9 34",
    score: -1.4,
  },
  {
    lichess: "https://lichess.org/42BXVntj",
    fen: "5r2/2p1qp1k/5p1p/p3p3/PpQ1P3/2Pr3P/1P3PP1/3R2K1 w - - 0 29",
    score: 3.5,
  },
  {
    lichess: "https://lichess.org/WOtomEzk",
    fen: "1k3b1r/ppp1pp2/7p/5b2/3r4/6R1/P2N3P/R3KB2 w Q - 0 27",
    score: -8.5,
  },
  {
    lichess: "https://lichess.org/IPE3y3NC",
    fen: "r3k2r/p1p2pp1/bnp1q2p/3pP3/1bP1Q2P/1PN5/P2B1PP1/R3KB1R w KQkq d6 0 14",
    score: 2.2,
  },
  {
    lichess: "https://lichess.org/njX5Ts6o",
    fen: "2k2b1r/ppp2Bpp/q4n2/4pb2/8/1NN1B2P/PPP2PP1/R4RK1 w - - 1 14",
    score: -2.5,
  },
  {
    lichess: "https://lichess.org/vfCrpVT1",
    fen: "8/5Qpk/2p4p/p3qp1P/Pn6/4PBP1/5PK1/8 w - - 2 38",
    score: 2.8,
  },
  {
    lichess: "https://lichess.org/If48odiO",
    fen: "4r1k1/p1qn1ppp/2pb1nb1/6B1/2B3P1/2N2N1P/PP3P2/R2Q2K1 w - - 1 17",
    score: -0.4,
  },
  {
    lichess: "https://lichess.org/A3Aj9El5",
    fen: "5rk1/p1pBr1pp/3p3q/P1pbp3/5P2/2P1P2P/2Q3PB/2R2RK1 w - - 1 23",
    score: 6.9,
  },
  {
    lichess: "https://lichess.org/6aSqckfe",
    fen: "4r3/1p4k1/5q1b/2p1pp2/2P1R2Q/1P3P2/6PP/4R1K1 w - - 0 33",
    score: 7.2,
  },
  {
    lichess: "https://lichess.org/zSYPQ6xP",
    fen: "1rb2rk1/p2n1pbp/4p1p1/q5B1/2P4Q/2Nn2P1/PP2NPBP/1R3RK1 w - - 7 17",
    score: 2.7,
  },
  {
    lichess: "https://lichess.org/eMvwVsPT",
    fen: "rn3rk1/pbp2ppp/1p3n2/2b2N2/2P1pP2/2N5/PP2B1PP/R1Bq1R1K w - - 0 14",
    score: -2.3,
  },
  {
    lichess: "https://lichess.org/ISuKBbAc",
    fen: "1rbq1r2/1p4bk/3p2pp/3B1p2/1RP1p3/2NP2P1/2N1PP1P/3Q1RK1 w - - 2 19",
    score: 8,
  },
  {
    lichess: "https://lichess.org/8imnS53s",
    fen: "2rq1rk1/1p3pp1/p2p4/4p3/4P2p/2P1N2P/bP2QPP1/3R1RK1 w - - 0 20",
    score: 0.7,
  },
  {
    lichess: "https://lichess.org/v1q8oYw5",
    fen: "3r2k1/pp1nqppp/1np1p3/4N3/2P5/1PB1P1P1/P1Q2PBP/6K1 w - - 1 18",
    score: -3,
  },
  {
    lichess: "https://lichess.org/1IVXyCP9",
    fen: "6k1/4pp1p/3p2p1/1P1P4/3N4/2n1B2P/4KPP1/r7 w - - 2 24",
    score: -7.1,
  },
  {
    lichess: "https://lichess.org/JIF5aNbX",
    fen: "8/p1p1k1pp/bp2B3/8/2P1P3/P1P5/6PP/6K1 w - - 1 26",
    score: 0,
  },
  {
    lichess: "https://lichess.org/ZuHDjiuI",
    fen: "2r1r1k1/pp1q1ppp/1n2b3/8/2Pp4/P2PB1P1/2Q2PBP/R4RK1 w - - 0 20",
    score: -0.9,
  },
  {
    lichess: "https://lichess.org/NDASBOJb",
    fen: "r3r3/3b2k1/3b3p/5p2/2PNp3/p6P/P2B1PP1/R3R1K1 w - f6 0 26",
    score: 0.5,
  },
  {
    lichess: "https://lichess.org/q8YotfFJ",
    fen: "2rq1rk1/3b1ppp/pp3n2/3pn3/1P1N4/P3P1P1/1B3PBP/2RQ1RK1 w - - 2 20",
    score: 1.9,
  },
  {
    lichess: "https://lichess.org/FjyZVL7r",
    fen: "8/p4pk1/4bn2/2Kp4/2p3p1/P7/1PB1r1P1/2R5 w - - 10 39",
    score: -10.1,
  },
  {
    lichess: "https://lichess.org/qXRFfM45",
    fen: "rnbqk2r/ppp4p/3b2p1/3pNp1Q/3Pn3/2NB4/PPP2PPP/R1B1K2R w KQkq - 0 8",
    score: 8.3,
  },
  {
    lichess: "https://lichess.org/apqkadH0",
    fen: "r1bqr1k1/pp1nbpp1/2p2n1p/3p2B1/3P4/2NBP3/PPQ1NPPP/R4RK1 w - - 0 11",
    score: 0.3,
  },
  {
    lichess: "https://lichess.org/ZMiRA6sZ",
    fen: "1rr3k1/2p2pp1/p1B1pn1p/7q/P2P1P2/1pQ1P1P1/1P3PK1/2R2R2 w - - 0 27",
    score: 4.2,
  },
  {
    lichess: "https://lichess.org/qiXvwG1C",
    fen: "r2q1rk1/pp1bppbp/2np1np1/2p5/4P3/2NP1NPP/PPP2PB1/R1BQ1RK1 w - - 1 9",
    score: 0,
  },
  {
    lichess: "https://lichess.org/RVEi2EuM",
    fen: "r2r2k1/pbq1bp1p/1p2p1pB/2p1N2n/2PP4/7Q/PPB2PPP/3RR1K1 w - - 0 19",
    score: 6.5,
  },
  {
    lichess: "https://lichess.org/4YRSzXKa",
    fen: "r1bqk2r/ppp2ppp/2n2P2/b7/2pp4/2P2N2/P4PPP/RNBQ1RK1 w kq - 0 10",
    score: -1.2,
  },
  {
    lichess: "https://lichess.org/94TqnW8e",
    fen: "rq2r3/3b1pbk/R2p1npp/3Pp3/nP2P3/2N1B1PP/3NQPB1/2R3K1 w - - 3 21",
    score: 7.3,
  },
  {
    lichess: "https://lichess.org/tdt8P95w",
    fen: "r1bqkb1r/pp2pppp/2n2n2/3p4/2PP4/5N2/PP3PPP/RNBQKB1R w KQkq - 1 6",
    score: 0.4,
  },
  {
    lichess: "https://lichess.org/OllC8IiJ",
    fen: "r4rk1/ppp2ppp/5q2/5n2/2B5/7P/PPQ2PP1/R3R1K1 w - - 2 17",
    score: 0.2,
  },
  {
    lichess: "https://lichess.org/bGa99aLr",
    fen: "5k2/5ppp/p3p3/1p1r4/1R6/P3PP1P/5P2/5K2 w - - 3 30",
    score: -4.9,
  },
  {
    lichess: "https://lichess.org/taojRhuM",
    fen: "r2q1rk1/1p2b1pp/4b3/2p1p3/p1PpP3/Pn3N1P/1PQBPPB1/1K1R2R1 w - - 4 18",
    score: -1.8,
  },
  {
    lichess: "https://lichess.org/889zE5HE",
    fen: "r2r4/pp4k1/3qbpp1/8/3nP3/3p1BP1/P2N1P1R/R2QK3 w Q - 2 23",
    score: -6.1,
  },
  {
    lichess: "https://lichess.org/z8s91uva",
    fen: "r5k1/p4p1p/4p3/4N3/1Rp1nP2/2P3P1/P3P2P/6K1 w - - 3 25",
    score: 6,
  },
  {
    lichess: "https://lichess.org/BgA4y2GE",
    fen: "r1qr2k1/pp3pbp/3p2p1/3Pp1P1/5n2/4B2P/PPPQ1PB1/R3K2R w KQ - 1 18",
    score: -0.4,
  },
  {
    lichess: "https://lichess.org/GCN8RbiH",
    fen: "5rk1/1b1nqp2/p1p2bpp/1p6/5P1P/1P2P3/PBQPB1P1/R3K2R w KQ - 0 17",
    score: 6.4,
  },
  {
    lichess: "https://lichess.org/fDwDojZ2",
    fen: "4rrk1/ppq2pp1/1npb1pp1/8/3P2P1/1BP2Q1P/PP3P2/R1B2RK1 w - - 1 16",
    score: 0.7,
  },
  {
    lichess: "https://lichess.org/rvDd4Okh",
    fen: "4nrk1/1R3ppp/2pp4/p1q2Pb1/8/2NQ4/P4PPP/4R1K1 w - - 1 24",
    score: 6.9,
  },
  {
    lichess: "https://lichess.org/wZayXsYZ",
    fen: "1r4k1/4ppbp/p1p3p1/2p1n3/N1P3b1/BPNrP1P1/P4P1P/2R2RK1 w - - 5 17",
    score: -0.4,
  },
  {
    lichess: "https://lichess.org/kqcAaJn8",
    fen: "2b5/2k3p1/p3p2p/p1N1Pp2/2P1pP2/1P2P2P/3K2P1/8 w - - 7 30",
    score: 1.5,
  },
  {
    lichess: "https://lichess.org/XeaBzZSx",
    fen: "Qqkr3r/1p3p2/B3p2p/4nbp1/8/2n2P1N/PPP5/2KR2R1 w - - 2 27",
    score: -8,
  },
  {
    lichess: "https://lichess.org/G1HusU5p",
    fen: "r2q2k1/pp1nb1pp/2n5/3P4/2pP4/P1P1P2P/1PBN2r1/R1B2RK1 w - - 0 18",
    score: -4.9,
  },
  {
    lichess: "https://lichess.org/nNHvnXnV",
    fen: "r1b1r1k1/p4pp1/2pq4/3pn1PR/1p1PnPP1/3B4/PPQ2P2/2K3R1 w - - 0 20",
    score: 7.9,
  },
  {
    lichess: "https://lichess.org/nJZPBq79",
    fen: "r1b1nrk1/ppq3p1/2pb3p/4n3/2pPNB2/5B2/PP1Q2PP/R3R1K1 w - - 0 17",
    score: -0.6,
  },
  {
    lichess: "https://lichess.org/w4rKRj0p",
    fen: "6k1/5ppp/5n2/pp2r3/1n6/PPN2B2/1P1R2PP/6K1 w - - 0 23",
    score: 7.1,
  },
  {
    lichess: "https://lichess.org/nQtLG8xd",
    fen: "5rk1/2pqbppp/Q1bp1n2/1p2p1B1/4P3/3P1N2/1PPN1PPP/5RK1 w - - 3 16",
    score: -0.6,
  },
  {
    lichess: "https://lichess.org/uHg4oDlk",
    fen: "r3k2r/5pp1/p1q1p2p/1p1b3P/8/P2Q1P2/1PPR2P1/2K2B1R w kq - 0 18",
    score: 0.3,
  },
  {
    lichess: "https://lichess.org/O9gbBPLa",
    fen: "2r2r1k/1R4pp/p4p2/3p4/1P1q4/P4QP1/5P1P/2R3K1 w - - 1 28",
    score: 2.5,
  },
  {
    lichess: "https://lichess.org/AAp1t2t3",
    fen: "r2qk1r1/ppp3Bp/2n3p1/3p1P2/4n1P1/1P2PQb1/P1PPK3/RN3B1R w q - 1 15",
    score: 0.4,
  },
  {
    lichess: "https://lichess.org/2HNmcsbl",
    fen: "2kr3r/pp3ppp/2pbq3/2n1p3/1P6/2n1BN1P/P3QPP1/R3RNK1 w - - 0 17",
    score: -1.7,
  },
  {
    lichess: "https://lichess.org/hf8Qo6Us",
    fen: "6k1/3R4/6pp/8/1P6/2b4r/P4P2/6K1 w - - 4 34",
    score: -0.1,
  },
  {
    lichess: "https://lichess.org/0fjlIwrk",
    fen: "2br2rk/p4pp1/1p5p/2pPpN1P/P1n1P2R/2P2P2/2B2KP1/R7 w - - 2 35",
    score: 2.7,
  },
  {
    lichess: "https://lichess.org/JkUA7QCj",
    fen: "5rk1/1b4pp/1pn1pq2/2np4/3p1P2/3B1N2/PPPQ2PP/R4RK1 w - - 0 17",
    score: 7.1,
  },
  {
    lichess: "https://lichess.org/S0TsRcXp",
    fen: "r1b1kb1r/pp1pqnpp/8/2p1PP1Q/3P4/8/PPP3PP/RNB1KB1R w KQkq c6 0 9",
    score: 9.2,
  },
  {
    lichess: "https://lichess.org/nsNzp3FL",
    fen: "r1bq1rk1/pp3pbp/2n3p1/2ppn3/5B2/2P1PN1P/PP1NBPP1/R2Q1RK1 w - - 0 11",
    score: 0.8,
  },
  {
    lichess: "https://lichess.org/S24omZM6",
    fen: "1q1r1bk1/p2Rnb1p/2p2pp1/4p3/1P2P3/PN2B1P1/2Q2PBP/6K1 w - - 3 33",
    score: 6.3,
  },
  {
    lichess: "https://lichess.org/Kaa9LjOr",
    fen: "r2q3r/pp3k1p/4pbn1/3p2BQ/3P4/2N5/PPP3P1/R3KB2 w Q - 2 16",
    score: -0.5,
  },
  {
    lichess: "https://lichess.org/xpUq6AeT",
    fen: "r1q1r3/1p4kn/3pbpNp/pP5P/2PpPPpB/6Q1/P3B1P1/4K2R w K - 1 27",
    score: 2.6,
  },
  {
    lichess: "https://lichess.org/HEVLV6gJ",
    fen: "r2q1rk1/5pbp/p1npb3/1p1Np3/4Pp2/N1PB4/PP3PPP/R2QK2R w KQ - 1 15",
    score: -1.1,
  },
  {
    lichess: "https://lichess.org/hM9npRgg",
    fen: "2kr3r/pp1bqppp/1bn1pn2/6B1/2B5/1N3N2/PPP1QPPP/3R1RK1 w - - 10 13",
    score: 1.3,
  },
  {
    lichess: "https://lichess.org/liHch1kh",
    fen: "1rb1k2r/2p2pp1/1bnp1q1p/1p2p3/3PP3/1BP2N2/1P3PPP/RN1Q1RK1 w k - 0 13",
    score: -0.5,
  },
  {
    lichess: "https://lichess.org/xRW9zODh",
    fen: "8/p1p4p/1bp3rk/3p4/8/6NK/PP2Qr1P/8 w - - 10 33",
    score: -0.8,
  },
  {
    lichess: "https://lichess.org/FMIpFtVm",
    fen: "8/7p/p1k1nB2/1pp3PP/5p2/2P5/PP3r2/2K4R w - - 0 36",
    score: 0,
  },
  {
    lichess: "https://lichess.org/AIas5h9z",
    fen: "5rk1/3qbppp/r3pn2/p1Pp4/Q2P1B2/5N2/P4PPP/R3K2R w KQ - 0 16",
    score: 1.7,
  },
  {
    lichess: "https://lichess.org/VYLZtxQL",
    fen: "2k1r2r/ppp3pp/3b1n2/6N1/2BPbp2/2P4P/P2B1PP1/R3R1K1 w - - 6 22",
    score: 3.6,
  },
  {
    lichess: "https://lichess.org/W9bwPtfd",
    fen: "r2q1b1k/pp4p1/2n1Qp1p/8/3PR2B/5N2/PP4PP/5K2 w - - 2 22",
    score: 0.8,
  },
  {
    lichess: "https://lichess.org/fhUTLttW",
    fen: "5r1k/p1p3pp/2Q5/4rp1b/5B2/2Pq3P/PP3PP1/R5K1 w - - 0 19",
    score: 6.3,
  },
  {
    lichess: "https://lichess.org/U021ysNQ",
    fen: "r2q1rk1/5ppp/b4b2/2ppN3/1n6/6P1/PP2PPBP/R1BQ1RK1 w - - 2 15",
    score: 1.2,
  },
  {
    lichess: "https://lichess.org/6POZ2OpT",
    fen: "rr4k1/4pp1p/q2p2p1/2pP4/P1Q1PP2/2P5/6PP/R4RK1 w - - 1 23",
    score: 0.6,
  },
  {
    lichess: "https://lichess.org/XGCioi3q",
    fen: "2b2rk1/5pbp/1p3qp1/3Pp3/2P2B2/r1N1QP2/4B1PP/2R3K1 w - - 0 24",
    score: -1.7,
  },
  {
    lichess: "https://lichess.org/CVG2r2jG",
    fen: "5nk1/2qn1pp1/2p1p1p1/3pP3/1Q1P2P1/1P5P/5PB1/R5K1 w - - 2 30",
    score: 6.2,
  },
  {
    lichess: "https://lichess.org/nNJ302vX",
    fen: "r2r2k1/1pqnbppp/6b1/p1ppP3/P1P3P1/1BB4P/3N1P2/R2RQ1K1 w - - 0 23",
    score: 5.5,
  },
  {
    lichess: "https://lichess.org/EQoaiCS5",
    fen: "r1bq1rk1/ppp2ppp/2np1n2/2b1p3/2P5/2N2NP1/PP1PPPBP/R1BQ1RK1 w - - 2 7",
    score: 0.5,
  },
  {
    lichess: "https://lichess.org/tvg1CkOf",
    fen: "3b1nk1/p4p2/2pq2pp/Np2p3/1P2P3/2P3PB/P1Q2P1P/6K1 w - - 2 25",
    score: 0,
  },
  {
    lichess: "https://lichess.org/wn03Hw0N",
    fen: "r2qr1k1/ppp2pbp/2np2p1/5b2/2PPn3/2N2N1P/PP2BPPB/R2Q1RK1 w - - 1 12",
    score: -0.1,
  },
  {
    lichess: "https://lichess.org/lqwm52rT",
    fen: "2r2rk1/pp1n1ppp/4b3/q1pp2B1/3P1Q2/2PB4/P1PK1PPP/3R3R w - - 0 15",
    score: 0,
  },
  {
    lichess: "https://lichess.org/8Nhwkb54",
    fen: "2rq1rk1/pp1bppbp/3p1np1/8/3nP3/1BN1BP2/PPPQ2PP/2KR3R w - - 0 12",
    score: 0.6,
  },
  {
    lichess: "https://lichess.org/Lb3v87c4",
    fen: "1qrr2k1/pb3pbp/1p3np1/4p3/2Pp4/PP2P3/3NBPPP/B1R1QRK1 w - - 0 18",
    score: -1.5,
  },
  {
    lichess: "https://lichess.org/IR5ZBaAG",
    fen: "r2r2k1/pp2ppbp/2n2np1/5bN1/4p3/2N1B3/PPP1BPPP/1R2K2R w K - 2 13",
    score: -5,
  },
  {
    lichess: "https://lichess.org/5zMNm32M",
    fen: "2kr1b1r/pppbqp2/2n1p3/5p1p/3P3P/2P2NN1/PP2BPP1/R2QK2R w KQ - 5 12",
    score: -0.4,
  },
  {
    lichess: "https://lichess.org/dObRqRiW",
    fen: "2r1r1k1/pb3pbp/1p3np1/1Ppp3q/2P5/P3P1P1/1BQN1PBP/2R1R1K1 w - - 1 19",
    score: 1.1,
  },
  {
    lichess: "https://lichess.org/Yt1jkuug",
    fen: "1r1q1rk1/ppn1ppbp/3p2p1/2p5/3nPP2/3PB1PP/PPP2QB1/R2N1RK1 w - - 7 14",
    score: 1.3,
  },
  {
    lichess: "https://lichess.org/XIadvvpq",
    fen: "5rk1/5ppp/4bn2/p3r2q/3NpQ2/P1P4P/1PB3P1/4RR1K w - - 3 30",
    score: 2,
  },
  {
    lichess: "https://lichess.org/VyOfh8B2",
    fen: "r3rbk1/1bqn1ppp/p2p1n2/1p3PB1/3pP1P1/2PB4/2N1Q2P/R3NRK1 w - - 2 18",
    score: -7.6,
  },
  {
    lichess: "https://lichess.org/OdWQFoB4",
    fen: "2r2k2/p3bppp/1p2p3/P1Nn4/2rP4/B3PP1P/5RP1/1R4K1 w - - 0 27",
    score: -1.1,
  },
  {
    lichess: "https://lichess.org/aufJcMXI",
    fen: "5k2/5pp1/1p2p2p/1Pb5/p1R4P/P4KP1/1r2BP2/8 w - - 0 36",
    score: -3.9,
  },
  {
    lichess: "https://lichess.org/T4djk0D3",
    fen: "r1q2r1k/1pp3pp/1nnp1p2/p1b1pPB1/4P2N/1BPP3P/PP3P2/R2QK1R1 w Q - 0 17",
    score: 17.8,
  },
  {
    lichess: "https://lichess.org/wywh8hsx",
    fen: "r1r3k1/1b1nbppp/pq1ppn2/1pp5/2P1P3/1PNP1NP1/PB3PBP/1R1QR1K1 w - - 9 13",
    score: 0.2,
  },
  {
    lichess: "https://lichess.org/RwXqJcW5",
    fen: "rnbqk2r/pp1p1ppp/4p3/4P3/1bP2n2/8/1B1P1PPP/RN1QKBNR w KQkq - 1 8",
    score: 0.1,
  },
  {
    lichess: "https://lichess.org/tyxI8tcH",
    fen: "r3r1k1/1p3pbp/pq1Pbnp1/2p1B3/P7/2N2B1P/1P3PP1/R2QR1K1 w - - 1 20",
    score: 4.1,
  },
  {
    lichess: "https://lichess.org/Ac8F2vFG",
    fen: "3r1rk1/2p1qppp/p1n1bn2/1p2p3/4P3/2P1BPP1/PP1NQKBP/R4R2 w - - 2 14",
    score: 0.7,
  },
  {
    lichess: "https://lichess.org/2rodQar7",
    fen: "r4rk1/p2qbpp1/4p2p/1p1pP2P/1PpN1B2/2PnP3/P3QPP1/2R2RK1 w - - 1 20",
    score: -1.8,
  },
  {
    lichess: "https://lichess.org/i4Gd4fji",
    fen: "r2q1rk1/1pp1ppbp/6p1/2pP4/4P2P/1Q3P2/PP3P2/3RKB1R w K - 0 16",
    score: -2.1,
  },
  {
    lichess: "https://lichess.org/8yzgEkBu",
    fen: "rnb2rk1/ppN1q1pp/8/4ppb1/2P5/6P1/PP2PPBP/R2Q1RK1 w - - 1 15",
    score: 1.9,
  },
  {
    lichess: "https://lichess.org/q9WmWBjN",
    fen: "r3k2r/pp1q1ppp/3bpn2/3p4/1P3B2/2P2QP1/P4P1P/RN3RK1 w kq - 2 16",
    score: -3.5,
  },
  {
    lichess: "https://lichess.org/bqFMe5ME",
    fen: "3n4/7p/3kp1p1/1p2p3/N3P3/P4PP1/5K1P/8 w - b6 0 42",
    score: 0,
  },
  {
    lichess: "https://lichess.org/ggcS4tzH",
    fen: "r1bq1r1k/pp2b2p/2n1p2P/1N3p2/2P2P2/3B1N2/PP1QK3/3R3R w - - 4 22",
    score: 1.7,
  },
  {
    lichess: "https://lichess.org/bOFDzyXr",
    fen: "2r1nrk1/1p2bppp/p2pb3/B3p3/4P1P1/2P2P2/1KP2Q1P/3R3R w - - 6 20",
    score: 1.3,
  },
  {
    lichess: "https://lichess.org/5QKBakiF",
    fen: "r2bqr1k/ppp1n1p1/3p3p/3NpB1n/4P3/4B2P/PPP2PP1/R2Q1RK1 w - - 5 16",
    score: 1.4,
  },
  {
    lichess: "https://lichess.org/3p8HEsr2",
    fen: "r3r1k1/pp3p1p/n1pb1q1B/5p1P/3P4/2P5/PPQ1NP2/R3K2R w KQ - 0 16",
    score: 8,
  },
  {
    lichess: "https://lichess.org/oqyPwvR6",
    fen: "r1b2rk1/pp1nq1pp/2p2n2/2b2p2/2Np4/1PN1P1P1/PB3PBP/R2Q1RK1 w - - 0 14",
    score: 3.3,
  },
  {
    lichess: "https://lichess.org/q8SA9wWm",
    fen: "3qr1k1/pp3ppp/6n1/8/2PnN1P1/1P1PQ2P/1P3RK1/2N5 w - - 1 27",
    score: -0.2,
  },
  {
    lichess: "https://lichess.org/8mVYwUW6",
    fen: "r2r2k1/pp3pbp/6p1/2p1nb2/8/PBP1P3/1P4PP/RNB2RK1 w - - 2 15",
    score: -2.7,
  },
  {
    lichess: "https://lichess.org/518I37yk",
    fen: "3rr1k1/1p3pb1/p1n3p1/q6p/3p1P2/P1P1BBPP/1P1Q4/3R1RK1 w - - 0 21",
    score: -0.5,
  },
  {
    lichess: "https://lichess.org/ZRNINhsp",
    fen: "2b2rk1/2q3p1/3b3p/2p5/2Pp2n1/3P1NP1/3B1PB1/Q3R1K1 w - - 1 25",
    score: -1.1,
  },
  {
    lichess: "https://lichess.org/TYcoKz1H",
    fen: "5k2/p3qbpQ/1pp4p/3p4/3P4/2P4P/PPB2PP1/6K1 w - - 10 34",
    score: 6.7,
  },
  {
    lichess: "https://lichess.org/50Dix8pz",
    fen: "rnbqkb1r/pppp1ppp/5n2/4p3/4P3/2N5/PPPP1PPP/R1BQKBNR w KQkq - 2 3",
    score: 0.2,
  },
  {
    lichess: "https://lichess.org/9Zl27d3b",
    fen: "r1bq1rk1/p1p2p2/2p2n2/3pB1p1/1b1P3p/2N1P3/PPQ2PPP/R3K1NR w KQ - 0 13",
    score: 0,
  },
  {
    lichess: "https://lichess.org/tf1osanU",
    fen: "5r2/8/1np2kpp/1p3p2/4p3/1P2B3/P4PPP/5RK1 w - - 0 30",
    score: 6.2,
  },
  {
    lichess: "https://lichess.org/SCC7BuG7",
    fen: "r1b2rk1/ppqnbpp1/2pp1n1p/4p3/P1BPP3/2N2N2/1PP1QPPP/R1BR2K1 w - - 0 10",
    score: 0.5,
  },
  {
    lichess: "https://lichess.org/BxMSbtQR",
    fen: "6k1/pb3p1n/5np1/2p1b3/Pp1pP1B1/1P1P3P/2P3P1/4RRK1 w - - 2 29",
    score: -1.5,
  },
  {
    lichess: "https://lichess.org/KGzBKmRq",
    fen: "r3r2k/1p4bp/2nB2p1/3BNp2/p7/2P4P/PP3PP1/3b1RK1 w - - 5 27",
    score: 0.6,
  },
  {
    lichess: "https://lichess.org/tscj98Qv",
    fen: "6k1/ppqnppbp/3p2p1/3P4/1P4P1/P3P2P/1B1Q1PB1/6K1 w - - 1 27",
    score: 0,
  },
  {
    lichess: "https://lichess.org/zUrT5HOt",
    fen: "r4r1k/p1q3pp/8/1b3p2/3Np3/1P2P3/P4PPb/R2Q1R1K w - - 0 22",
    score: 0,
  },
  {
    lichess: "https://lichess.org/zRLvEhoW",
    fen: "1r2qr2/3b1pbk/2pPp1pp/p2pN2P/p2PnBP1/2PB4/1PQ2P2/3RR1K1 w - - 1 30",
    score: 4.2,
  },
  {
    lichess: "https://lichess.org/jzRPfQIi",
    fen: "r1b3qk/ppp1n2p/3p1p1B/1Bb1p3/4r3/2P5/PP3PPP/R2QNRK1 w - - 0 16",
    score: -2.7,
  },
  {
    lichess: "https://lichess.org/MBy2lsJd",
    fen: "2rr2k1/pp3pbp/4p1p1/3nP2q/3P4/P4PQ1/1PB2R1P/2BR2K1 w - - 5 23",
    score: 0.1,
  },
  {
    lichess: "https://lichess.org/uAwzwyZZ",
    fen: "2R5/pp3rkp/3p1bp1/3P4/1P2p3/7P/PB3PP1/6K1 w - - 0 28",
    score: 0,
  },
  {
    lichess: "https://lichess.org/2kreFNWp",
    fen: "6k1/p4p1p/1p2p1p1/8/2P1P3/8/Pb1B1PKP/8 w - - 0 25",
    score: -2.8,
  },
  {
    lichess: "https://lichess.org/ke68rogn",
    fen: "r1r3k1/4bppp/1q2pn2/p2p4/5B2/PPNQ4/2P2PPP/R3R1K1 w - - 1 17",
    score: -1.3,
  },
  {
    lichess: "https://lichess.org/bOQG00O2",
    fen: "3rr1k1/1q1n1pp1/p3p2p/1p1b4/3N3Q/P1PB1P2/1P4PP/4RR1K w - - 2 22",
    score: -0.6,
  },
  {
    lichess: "https://lichess.org/svf8XTdH",
    fen: "r2r2k1/pp3pp1/2n1pn2/1q5p/3P1Q1P/P5N1/1P2NPP1/3R1K1R w - - 8 19",
    score: -3.5,
  },
  {
    lichess: "https://lichess.org/Z6VBdxkr",
    fen: "r3k2r/pbpnqppp/1p2pb2/6B1/3P3P/3B1N2/PPP1QPP1/R3K2R w KQkq - 4 11",
    score: 0.8,
  },
  {
    lichess: "https://lichess.org/JAuCmkGj",
    fen: "r1b2r2/3n1qbk/2p3p1/2Ppp2p/3Pp3/1N2P2P/4BPPB/2RQ1RK1 w - - 0 23",
    score: 0.9,
  },
  {
    lichess: "https://lichess.org/21cB80Y9",
    fen: "3q4/ppn3bk/2p2pp1/4p3/1PQ1P3/2P1N1PB/P4P2/6K1 w - - 2 26",
    score: 1.3,
  },
  {
    lichess: "https://lichess.org/63sPNOgp",
    fen: "r3k2r/ppp3pp/2nq4/3p1p2/3Pn1b1/2P2N2/PP1NBPPP/R2QK2R w KQkq - 0 11",
    score: -0.2,
  },
  {
    lichess: "https://lichess.org/AjMzybX5",
    fen: "7r/2k2pp1/p1p5/2B4p/2bPp3/4P3/P1P3PP/1R4K1 w - - 5 27",
    score: 0.3,
  },
  {
    lichess: "https://lichess.org/kapEl8e3",
    fen: "rnbqkb1r/p1p2ppp/1p2pn2/3p4/3P4/3BPN2/PPP2PPP/RNBQK2R w KQkq - 0 5",
    score: 0.2,
  },
  {
    lichess: "https://lichess.org/aFZG1DOD",
    fen: "r4rk1/4bpp1/1B3n2/p4P2/Pp2p2p/8/1P2B1PP/R1R4K w - - 2 26",
    score: -1.7,
  },
  {
    lichess: "https://lichess.org/8h8gTC5T",
    fen: "2r3k1/2r2p1q/p3p2p/1p1pb1p1/P2P2P1/1PP1R3/4QPP1/2R3K1 w - - 0 29",
    score: -2.8,
  },
  {
    lichess: "https://lichess.org/5TwptA5K",
    fen: "r7/1p1bkp2/p1n1p1Pp/3p4/3P4/8/PPP1NP2/R3K2B w Q - 0 20",
    score: -0.1,
  },
  {
    lichess: "https://lichess.org/c3QoDoOH",
    fen: "5r2/p4pk1/1b4p1/8/8/1B1R2p1/Pr3PKP/5R2 w - - 0 28",
    score: -0.1,
  },
  {
    lichess: "https://lichess.org/g8UORiZd",
    fen: "rnbqk3/p4pr1/2p1p3/1p4p1/PbpP4/2N2NP1/1P3P1P/R2QKB1R w KQq - 0 12",
    score: 2,
  },
  {
    lichess: "https://lichess.org/31f75aHx",
    fen: "1rb1k2r/2Rpbppp/2p5/4P3/2P1N3/3K4/3B1PPP/7R w k - 1 24",
    score: 3.1,
  },
  {
    lichess: "https://lichess.org/ggQiQQjf",
    fen: "3q1rk1/R1pb3p/3p2p1/2pPp3/2P3P1/2P2P1P/3BQ3/6K1 w - - 3 31",
    score: 0.6,
  },
  {
    lichess: "https://lichess.org/GvBMHYGM",
    fen: "r2q1rk1/pp2bpp1/2n1bn1p/3pN1B1/2pP4/2N1P1P1/PP3PBP/R2Q1RK1 w - - 0 12",
    score: 0.5,
  },
  {
    lichess: "https://lichess.org/Whlhd5OT",
    fen: "rkb2qr1/1pp3b1/p1n4p/P6Q/3pNP2/8/1PP3PP/R1B2RK1 w - - 11 21",
    score: -4.1,
  },
  {
    lichess: "https://lichess.org/LKrRAWZU",
    fen: "2brr1k1/1pp2ppp/pb1p2q1/3n4/3NPB2/1NP2P2/PP2Q1PP/3RR2K w - - 7 20",
    score: -0.1,
  },
  {
    lichess: "https://lichess.org/pcb8vSpZ",
    fen: "2r3k1/5ppp/1p2pn2/p3Nb2/P2P4/1r2P3/1P1B1PPP/R4RK1 w - - 0 17",
    score: 1.8,
  },
  {
    lichess: "https://lichess.org/qsrPU1AC",
    fen: "8/1q3p1k/1P2p3/1Q3p1p/7P/4P1P1/2r2P2/1R4K1 w - - 3 36",
    score: 6.7,
  },
  {
    lichess: "https://lichess.org/yiVME0c7",
    fen: "rn3rk1/2ppb1pp/1p2pn2/4Np1q/NPP5/P5P1/1B1PPPbP/R2Q1RK1 w - - 0 13",
    score: 0.3,
  },
  {
    lichess: "https://lichess.org/gigiMjhW",
    fen: "r2r2k1/pp2bppp/2n1pn2/2pq4/6b1/2PPBN2/PP1NBPPP/R2QR1K1 w - - 7 11",
    score: -0.2,
  },
  {
    lichess: "https://lichess.org/3ZEnXGfO",
    fen: "r3r1k1/1bqn1pp1/p6p/1p2p2P/4n3/1NP1Q1B1/P1P3P1/2KR1B1R w - - 0 19",
    score: -7.5,
  },
  {
    lichess: "https://lichess.org/iemXBnfI",
    fen: "r1bqk2r/ppp2pbp/3p4/4n3/2P3p1/2N1P1B1/PP2BPPP/R2QK2R w KQkq - 0 11",
    score: 1.4,
  },
  {
    lichess: "https://lichess.org/ubHchEVO",
    fen: "r4r2/1bpnqpk1/p4bpp/1p1Pp3/4P3/P1NB1N2/1P2QPPP/R2R2K1 w - - 1 17",
    score: 0,
  },
  {
    lichess: "https://lichess.org/PZD0wEW4",
    fen: "r1b1k2r/2qnbppp/p2ppn2/1p4B1/3NPPP1/2N2Q2/PPP4P/2KR1B1R w kq b6 0 11",
    score: 0.7,
  },
  {
    lichess: "https://lichess.org/8TAiA49w",
    fen: "rnbq1rk1/1p2bp1p/4pnpP/p1pp4/P3P3/1NPP1N2/1P2QPP1/R1B1KB1R w KQ - 0 12",
    score: 0.7,
  },
  {
    lichess: "https://lichess.org/XhG21H6L",
    fen: "r1b1r1k1/1p3ppp/p2R1n2/2p5/2n5/1N2P1P1/PP3PBP/R1B3K1 w - - 0 17",
    score: 1.5,
  },
  {
    lichess: "https://lichess.org/54AzRaIM",
    fen: "5k2/4bpp1/2p1b2p/1p6/p3PP1P/1n2N1P1/1P2K3/3N1B2 w - - 4 37",
    score: -5.9,
  },
  {
    lichess: "https://lichess.org/ARIBDMQa",
    fen: "5r1k/1bq3pp/p2p4/1p2n1b1/4P3/PQ3P2/1PP2BPP/3RR1K1 w - - 5 21",
    score: -0.5,
  },
  {
    lichess: "https://lichess.org/PlRlWHHv",
    fen: "r4rk1/pp2qpbb/2p1p1pp/4P3/2B2BnP/4Q1N1/PPP2PP1/1K1R3R w - - 1 17",
    score: 3.3,
  },
  {
    lichess: "https://lichess.org/sfu8g7wx",
    fen: "1rb1k2r/1pq1bp2/p1npp1p1/7p/3NPPn1/2N2B2/PPP1Q1PP/R4RBK w k - 2 14",
    score: 1.8,
  },
  {
    lichess: "https://lichess.org/K3qYpEfM",
    fen: "8/3k4/1P1p3b/8/4r3/3N2p1/P7/1K3R2 w - - 1 35",
    score: -1.9,
  },
  {
    lichess: "https://lichess.org/O3vSGflg",
    fen: "1kbr1b2/ppp1p2p/2nq1n2/3p1P2/3P3N/2PB1NrP/PP2Q1P1/R1B2RK1 w - - 3 15",
    score: 6.5,
  },
  {
    lichess: "https://lichess.org/Gm0YS3Gw",
    fen: "r1bqk2r/pp3pbp/6p1/2pnp3/8/5NP1/PPPP1PBP/R1BQ1RK1 w kq - 0 10",
    score: 1.2,
  },
  {
    lichess: "https://lichess.org/E982Z8F6",
    fen: "2rq1rk1/p3bppp/1pP5/1bn5/8/1PB3P1/3N1PBP/R2QR1K1 w - - 1 19",
    score: 2.7,
  },
  {
    lichess: "https://lichess.org/2WAzAwg7",
    fen: "3rq2k/pp3b1p/2p2Pp1/8/2P5/1P5R/P4QP1/6K1 w - - 1 29",
    score: -6.3,
  },
  {
    lichess: "https://lichess.org/y5wWzmpN",
    fen: "r4rk1/3n1ppp/2p1pn2/pp6/2pPP3/RP4P1/1PbN1PBP/2B1R1K1 w - - 0 17",
    score: 2.3,
  },
  {
    lichess: "https://lichess.org/vqWshFlo",
    fen: "r2q1rk1/p3ppb1/1p3np1/2pp4/1n6/1PN1PN2/PB1PQ1PP/2R2RK1 w - - 2 15",
    score: -1.9,
  },
  {
    lichess: "https://lichess.org/ZCE1FuXZ",
    fen: "r1b2k1r/pp2npp1/4p2p/2np3P/1RP3P1/P7/2PB1P2/R3KBN1 w Q - 0 18",
    score: 0,
  },
  {
    lichess: "https://lichess.org/RARLTwTZ",
    fen: "r1bqkb1r/ppp2ppp/2n1p3/3Pp3/8/5N1P/PPP2KP1/RNBQ1B1R w kq - 0 8",
    score: 2.7,
  },
  {
    lichess: "https://lichess.org/5RuR7kWK",
    fen: "1r4k1/2p2p2/p1b2b2/2p2Pq1/1rN1P1Bp/1P3Q2/4R1P1/4R2K w - - 8 34",
    score: -4,
  },
  {
    lichess: "https://lichess.org/1UXiwGdb",
    fen: "1r6/3b2p1/p1pkp2p/2R1Nr2/3P4/8/PP3PPP/4R1K1 w - - 6 32",
    score: 4.5,
  },
  {
    lichess: "https://lichess.org/oIbpgMw4",
    fen: "6k1/3R4/2p3pp/1p2B1p1/1P2n3/5P1P/1P4P1/r5K1 w - - 1 35",
    score: 4.1,
  },
  {
    lichess: "https://lichess.org/a8MxsQLH",
    fen: "r1bqr1k1/pp3pp1/2pb1nnp/1P1p2B1/3P4/2NBPN2/P1Q2PPP/1R3RK1 w - - 0 14",
    score: 0.2,
  },
  {
    lichess: "https://lichess.org/CX6pDckx",
    fen: "r4rk1/ppp1ppbp/6p1/4P3/5P2/2N1Q1P1/PPq4P/3R1RK1 w - - 0 17",
    score: 0.3,
  },
  {
    lichess: "https://lichess.org/O4SFzZPe",
    fen: "7k/3r3p/1p5R/p1p5/3n1p2/1P3P2/P2K2PP/5B2 w - - 8 33",
    score: 1.8,
  },
  {
    lichess: "https://lichess.org/Qk295ZGP",
    fen: "r6r/1bqnkppp/1p2p3/p2nP3/1P3P2/2PB4/6PP/RNB1QRK1 w - - 0 18",
    score: 1.9,
  },
  {
    lichess: "https://lichess.org/ZsgQByC4",
    fen: "3q1rk1/rp4pp/p1p1b3/2npPp2/P1P5/4PP2/2Q1B1PP/1RB2RK1 w - - 1 17",
    score: 7.4,
  },
  {
    lichess: "https://lichess.org/RQkKEqty",
    fen: "r4rk1/3bb1pp/1p2pp2/q2pn3/3N2P1/P4N1P/4BP2/1RBQ1RK1 w - - 0 18",
    score: 3.1,
  },
  {
    lichess: "https://lichess.org/6mqiSCxE",
    fen: "r1bqnrk1/1pp1npbp/p2p2p1/4p3/PPP5/2NP1NP1/4PPBP/1RBQ1RK1 w - - 1 11",
    score: 1.1,
  },
  {
    lichess: "https://lichess.org/xMZqJ3RP",
    fen: "8/p1p4k/1p2pB2/3pP2b/3P2r1/2P5/PP3K2/R7 w - - 2 25",
    score: -0.2,
  },
  {
    lichess: "https://lichess.org/U9B2FDEV",
    fen: "rr4k1/2q1ppbp/2np1np1/2pP4/P3P3/2B2P2/1P2N1PP/R2QK2R w KQ - 0 17",
    score: -1.6,
  },
  {
    lichess: "https://lichess.org/XiXsCgcq",
    fen: "r1r2nk1/4bppp/b4n2/1q2N3/1ppP1P2/4P1B1/1NB1Q1PP/R4R1K w - - 0 23",
    score: 1.4,
  },
  {
    lichess: "https://lichess.org/zb7JfTYK",
    fen: "rn3rk1/pp1bb1pp/3p1nq1/2pP4/P3pB2/2N1N3/1PP1BPPP/R2Q1RK1 w - - 3 13",
    score: 2.5,
  },
  {
    lichess: "https://lichess.org/xW2ZJ3LM",
    fen: "rnb2rk1/ppq1p1bp/2pp1np1/5p2/2PP4/1PN2NP1/P3PPBP/R1BQ1RK1 w - - 1 9",
    score: 0.7,
  },
  {
    lichess: "https://lichess.org/H324qMoi",
    fen: "6k1/2R2p2/5p1p/1B6/8/5bPP/r7/5K2 w - - 0 34",
    score: -0.1,
  },
  {
    lichess: "https://lichess.org/IJ9EpO8R",
    fen: "2r5/1p1kqr1p/p1bb2p1/3p1pP1/1P1Q1P2/P2BP3/1B1PK3/R6R w - - 7 29",
    score: 3.8,
  },
  {
    lichess: "https://lichess.org/mq2RyYRK",
    fen: "5nk1/5pp1/R6p/P7/1p2B3/4pPP1/7r/5K2 w - - 0 38",
    score: -0.2,
  },
  {
    lichess: "https://lichess.org/gPEpgoAN",
    fen: "3br1k1/p5pp/2r2p2/2P5/3P1B2/8/PP3P1P/2KR3R w - - 1 22",
    score: 7.9,
  },
  {
    lichess: "https://lichess.org/vn8Rh6mz",
    fen: "r5k1/ppp2rpp/3p1bq1/8/3B3P/2P5/PPP1QPP1/1K1R3R w - - 1 17",
    score: 2.6,
  },
  {
    lichess: "https://lichess.org/2H8O5sGS",
    fen: "2qrr1k1/3n1ppp/3bpn2/8/R3P3/PN3P2/4B1PP/1RQ3BK w - - 1 28",
    score: 5.1,
  },
  {
    lichess: "https://lichess.org/11Ki5fK5",
    fen: "2r3k1/pp3p1p/2n4p/4p3/1P1P2P1/P2P2P1/1B2Nq1K/R3R2B w - - 1 24",
    score: 0,
  },
  {
    lichess: "https://lichess.org/XA7rmUP3",
    fen: "2k1r3/2p3pb/1p2r2p/p1p1n2P/5B2/1P2NP2/PKP3P1/3RR3 w - - 0 26",
    score: -0.7,
  },
  {
    lichess: "https://lichess.org/zVRs9NK0",
    fen: "5R2/6k1/6p1/7p/7P/5R1K/1rr3P1/8 w - - 6 46",
    score: 0,
  },
  {
    lichess: "https://lichess.org/SaAQ2mbA",
    fen: "2kr3r/pp1qnpb1/2np2p1/6P1/3pPN1p/2P1B2P/PP4B1/R2Q1R1K w - - 0 19",
    score: 3.7,
  },
  {
    lichess: "https://lichess.org/pBYHGgmh",
    fen: "6k1/p2r1pbp/3B4/2N5/2n2p1q/P7/1PPQ4/1K1R4 w - - 2 33",
    score: -7.8,
  },
  {
    lichess: "https://lichess.org/4VWm85o3",
    fen: "r3b1k1/pp2b1pq/2n1p3/3pPpP1/2pP1B1P/2P5/6Q1/R2B1RK1 w - - 3 25",
    score: 0.9,
  },
  {
    lichess: "https://lichess.org/ecnrdRG7",
    fen: "8/5p1p/p1k3p1/8/p2KPPb1/B1P5/2P3PP/8 w - - 6 36",
    score: 1.5,
  },
  {
    lichess: "https://lichess.org/bh4PVoOM",
    fen: "r5k1/5ppp/2p5/1p1nr3/P7/1P2P1P1/5PKP/R1NR4 w - b6 0 26",
    score: 4.3,
  },
  {
    lichess: "https://lichess.org/ljkwh5Db",
    fen: "r1bq1rk1/p3ppbp/1pn2np1/2pp4/4P3/3P1NP1/PPPN1PBP/R1BQR1K1 w - - 0 9",
    score: 0,
  },
  {
    lichess: "https://lichess.org/mQWhD9Kz",
    fen: "r1bq1rk1/p3p1bp/2p2pp1/3pP1B1/N2P4/8/PP3PPP/R2QR1K1 w - - 0 15",
    score: 2.5,
  },
  {
    lichess: "https://lichess.org/pbAl9Ufd",
    fen: "7r/ppp2nk1/2qp2b1/3Np1P1/8/1B6/PPPQ4/2K4R w - - 3 25",
    score: 2.9,
  },
  {
    lichess: "https://lichess.org/0Zk6B81H",
    fen: "r6r/1b2k1p1/p2b1p2/1p2pP2/1P1q4/PQ5P/6P1/4RR1K w - - 0 25",
    score: -11.5,
  },
  {
    lichess: "https://lichess.org/6JUtS4aH",
    fen: "r1b1kb1r/2q2ppp/p2ppnn1/8/1pPNPP2/1PN5/PB2B1PP/R2Q1RK1 w kq - 0 13",
    score: 0.1,
  },
  {
    lichess: "https://lichess.org/0JllgY01",
    fen: "r2q1r1k/p3bppp/bp6/2p5/4PP2/2PP3P/PP2Q1B1/3RNRK1 w - - 2 19",
    score: 1.8,
  },
  {
    lichess: "https://lichess.org/UQjXDvBa",
    fen: "r4rk1/p2q3p/2p2ppb/3pp3/3P1P2/2P2Q1b/PPBN1P1P/R3R1K1 w - - 2 17",
    score: -4.1,
  },
  {
    lichess: "https://lichess.org/L5Jqb4AA",
    fen: "r1bqkb1r/pp1n1ppp/5n2/2pPp3/B7/8/PPP2PPP/RNBQR1K1 w kq - 0 10",
    score: 8,
  },
  {
    lichess: "https://lichess.org/PlTM5luS",
    fen: "1r1q2k1/p4pbp/1p1P2p1/2p1N3/Pn3P2/8/5PBP/2RQ1bK1 w - - 0 22",
    score: -0.9,
  },
  {
    lichess: "https://lichess.org/MkRFwx1e",
    fen: "4rrk1/6p1/2bq1bp1/pp1p4/2pB4/P1P3N1/1P1Q1PPP/3RR1K1 w - b6 0 23",
    score: 1.7,
  },
  {
    lichess: "https://lichess.org/tUtRnpCG",
    fen: "1kr2br1/1pqb1p2/p2ppP1p/5P2/3NP2B/2NB4/PPP4P/1K1R3R w - - 3 20",
    score: -1.2,
  },
  {
    lichess: "https://lichess.org/NCuNZYeK",
    fen: "2kr3r/pp3b2/5n2/5p1p/4pN2/6PB/PPP1nP1P/2KR3R w - - 0 20",
    score: 2.5,
  },
  {
    lichess: "https://lichess.org/JU9d0al0",
    fen: "rnbqkb1r/p4p2/2p1pn1p/1p2P1p1/2pP3B/2N2N2/PP3PPP/R2QKB1R w KQkq g6 0 9",
    score: 0.4,
  },
  {
    lichess: "https://lichess.org/evYCfywd",
    fen: "r2q1rk1/1p1b1pbp/3p1np1/p1nPp3/4P3/P1N1B2P/1PB1NPP1/R2QK2R w KQ - 1 13",
    score: 0.1,
  },
  {
    lichess: "https://lichess.org/5NcjWzqK",
    fen: "r4rk1/pqpn1pp1/1p2pn1p/8/1PpP4/P5P1/3BPPNP/2QR1RK1 w - - 0 17",
    score: -0.4,
  },
  {
    lichess: "https://lichess.org/BvJq74Ru",
    fen: "4rr2/1p4kp/p1n1q1p1/1B1ppnB1/6Q1/2P5/P4PPP/3RR1K1 w - - 0 23",
    score: 0,
  },
  {
    lichess: "https://lichess.org/vgNVUdez",
    fen: "r1bqk1nr/pp1pppbp/2n3p1/8/2PN4/2N5/PP2PPPP/R1BQKB1R w KQkq - 1 6",
    score: 0,
  },
  {
    lichess: "https://lichess.org/0RuqP0QB",
    fen: "3r1rk1/pp3pbp/8/P2Bpbq1/8/6B1/1PP3PP/R2Q1R1K w - - 2 21",
    score: 1.6,
  },
  {
    lichess: "https://lichess.org/qrtSk6MG",
    fen: "2k1r1rb/pp1n1p1p/2p1pn2/q2p2Bp/2BPPP2/2N5/PPPQ1P2/1K4RR w - - 0 17",
    score: 0.1,
  },
  {
    lichess: "https://lichess.org/QrGFjkEm",
    fen: "2r2k1r/5p1p/p1b3p1/1p3n2/PP6/1BN2P1P/1KPR2P1/4R3 w - b6 0 24",
    score: 6.7,
  },
  {
    lichess: "https://lichess.org/nj4hFfjM",
    fen: "q4r1k/2p3pp/1p4r1/8/2Q3n1/P5B1/1PP4P/R3R1Kb w - - 1 34",
    score: -12.8,
  },
  {
    lichess: "https://lichess.org/zKhUycOB",
    fen: "r3k2r/1p3ppp/p1nqpnb1/3p4/3P4/P1NBPP2/1P2N1PP/R2Q1RK1 w kq - 0 13",
    score: -0.3,
  },
  {
    lichess: "https://lichess.org/EyRqaCnI",
    fen: "r1b4r/ppNk1ppp/4p3/2bp4/2n2B2/8/P1P2PPP/2Q2RK1 w - - 4 16",
    score: 6.6,
  },
  {
    lichess: "https://lichess.org/Q39uMKML",
    fen: "r2qk2r/1b2bppp/p3p3/1pn1P1P1/2pN1P1P/P1N1B3/1PPQ4/R3K2R w KQkq - 0 17",
    score: -0.3,
  },
  {
    lichess: "https://lichess.org/KpLmOIGt",
    fen: "r1b4r/ppp2kpp/2n2n2/8/4P3/8/PB1N1PPP/R3K1NR w KQ - 1 11",
    score: 0.1,
  },
  {
    lichess: "https://lichess.org/51URTC1M",
    fen: "r3r1k1/1p4bp/1pp2pb1/3pn3/3N1B2/2P4P/PP2BPP1/R4RK1 w - - 0 20",
    score: -0.2,
  },
  {
    lichess: "https://lichess.org/Ubycpgoq",
    fen: "r6k/pp1n2bp/4q1p1/2p4n/3P1p2/5N2/PP4PP/R1BQ1R1K w - - 0 20",
    score: 3.1,
  },
  {
    lichess: "https://lichess.org/KdyGCVwV",
    fen: "r5k1/4ppbp/3p2p1/2pP4/2n1P1P1/PrN4P/RP1B1P2/1R1K4 w - - 0 23",
    score: 0,
  },
  {
    lichess: "https://lichess.org/2e1RoMun",
    fen: "r1bqkbnr/ppp2p2/2np3p/4P1p1/5B2/2N2N2/PPP1PPPP/R2QKB1R w KQkq g6 0 6",
    score: 2.3,
  },
  {
    lichess: "https://lichess.org/UMWI83ny",
    fen: "r3r1k1/q1n2pb1/6pp/4p3/1NQ5/4PbBP/5PP1/2RR2K1 w - - 0 31",
    score: 6,
  },
  {
    lichess: "https://lichess.org/2n03NduX",
    fen: "2bq1rk1/5ppp/p3pn2/1pp5/1bpP4/2NnP1P1/PP2QPBP/R1B2RK1 w - c6 0 13",
    score: -0.4,
  },
  {
    lichess: "https://lichess.org/hEwm5Xr6",
    fen: "r2q1r2/1pp1b1kp/p1n1p1p1/3p2P1/3P1B1P/2N2R2/PPPQ4/2K4R w - - 1 21",
    score: 1.6,
  },
  {
    lichess: "https://lichess.org/UZNwsk83",
    fen: "2rq1rk1/1n2bppp/p7/1ppPp3/4P3/N3BP2/P2QB1PP/2R2RK1 w - - 0 19",
    score: 5.7,
  },
  {
    lichess: "https://lichess.org/l6ppiPyM",
    fen: "8/5pk1/R4b2/Pp5p/6p1/1P3K2/2r1r3/5RB1 w - - 0 39",
    score: -8.7,
  },
  {
    lichess: "https://lichess.org/1KMoXXxN",
    fen: "1r4k1/5pb1/p2p2pp/8/2pNbP2/2P4P/PP2NKP1/3R4 w - - 1 26",
    score: -0.3,
  },
  {
    lichess: "https://lichess.org/Pl4Y0U8h",
    fen: "4r1k1/p2n1pp1/bp5p/2p5/P7/2P1Pp2/3N2PP/R2R2K1 w - - 0 24",
    score: 1.3,
  },
  {
    lichess: "https://lichess.org/aEcYhWzm",
    fen: "2kr3r/ppq2ppp/2pbpn2/7b/3P4/2PB1N1P/PP1BQPP1/2KR3R w - - 5 14",
    score: 0.8,
  },
  {
    lichess: "https://lichess.org/Y6UToWdn",
    fen: "1r2r1k1/3n1pbp/p1p1b1p1/8/N3P2P/5P2/PPPB2P1/2KR3R w - - 1 20",
    score: -4.3,
  },
  {
    lichess: "https://lichess.org/gxYAtNhN",
    fen: "r4rk1/pbpp1ppp/1p6/2nP4/1bP2Pn1/3QpBPN/2R1P2P/5K1R w - - 4 19",
    score: 0,
  },
  {
    lichess: "https://lichess.org/50DaRPW6",
    fen: "3R4/5p2/1r2pnk1/2R2b1p/1p6/5BP1/1P3P2/6K1 w - - 6 36",
    score: 3.5,
  },
  {
    lichess: "https://lichess.org/shG8MHAz",
    fen: "3r2k1/2p1bp2/p5qp/1p2Pb1n/4NP2/5BP1/PP3N1P/R3Q2K w - - 3 26",
    score: 6.5,
  },
  {
    lichess: "https://lichess.org/CqYPNEDC",
    fen: "2krr3/1p1n1ppp/1qpbbn2/p3p1B1/P2PP3/2PB1N2/1P2Q1PP/RN3R1K w - a6 0 13",
    score: 1.4,
  },
  {
    lichess: "https://lichess.org/vyfWJyis",
    fen: "2b1kb1r/1pp2p1p/1nn1pp2/r7/p2P4/P1N2N2/BPP2PPP/R1B1K2R w KQk - 1 12",
    score: 1,
  },
  {
    lichess: "https://lichess.org/pNqxG8Ow",
    fen: "3r1rk1/ppq2ppb/2p2n1p/2n1p3/P3P3/R1N2N1P/2P2PP1/1Q2RBK1 w - - 3 19",
    score: -3,
  },
  {
    lichess: "https://lichess.org/hysYcN7Q",
    fen: "1rr3k1/1q3pbp/6p1/3pP3/5P2/1pN3PP/3Q3K/1R3R2 w - - 0 32",
    score: -3.3,
  },
  {
    lichess: "https://lichess.org/aSboC9og",
    fen: "1r2r1k1/2qb2bp/pp2pnp1/2p1p3/P1P5/R7/1P1N1PPP/2BQRBK1 w - - 0 18",
    score: -0.2,
  },
  {
    lichess: "https://lichess.org/xjrbeoVt",
    fen: "2r1r1k1/1bqn1pbp/p2p2p1/1ppP4/4P1n1/1P1B1N2/PBQN1PPP/2R1R1K1 w - - 4 20",
    score: 1.5,
  },
  {
    lichess: "https://lichess.org/5RApPuQf",
    fen: "r3k1nr/p2b1ppp/1pn1p3/3pP3/3P4/B2B1N2/2P2PPP/RR4K1 w kq - 0 16",
    score: 0.4,
  },
  {
    lichess: "https://lichess.org/PRD6oGrl",
    fen: "3r2k1/1p3p2/1p2p1p1/2r2n1p/3b3P/P5B1/1P2QPPK/3R4 w - - 6 25",
    score: 0,
  },
  {
    lichess: "https://lichess.org/BaTxW1hb",
    fen: "3r1rk1/1ppn2p1/p2p1pPq/3Pp2p/8/P6P/1PPNQP2/1K1R3R w - - 4 26",
    score: -0.7,
  },
  {
    lichess: "https://lichess.org/wrA8P2rp",
    fen: "r3k2r/ppq1bpp1/2n1b1n1/2pp3p/7P/2NP1NP1/PPP2PB1/R1BQR1K1 w kq - 2 13",
    score: 2.6,
  },
  {
    lichess: "https://lichess.org/cai5OlOw",
    fen: "2r1k2r/1pq1bp2/p2pbn2/4p1pp/4P3/2NQ2B1/PPPN1PPP/3RR1K1 w k - 0 16",
    score: -0.2,
  },
  {
    lichess: "https://lichess.org/i9VRsZcH",
    fen: "6k1/1p2b1p1/p3p2p/3pPr2/1Pq2P2/P2QB2P/6P1/4R1K1 w - - 1 27",
    score: 0.1,
  },
  {
    lichess: "https://lichess.org/HlVxCjUN",
    fen: "rb1q3r/pp2n1k1/3pbpp1/3p3p/3Pp3/1BP1B2P/PP1Q1PPN/R3R1K1 w - - 2 20",
    score: 0,
  },
  {
    lichess: "https://lichess.org/SzSmV0FC",
    fen: "2rq1rk1/4bp1b/p2ppp2/6BP/1p4p1/3n1PN1/PPPQN3/1K1R3R w - - 0 20",
    score: -4.4,
  },
  {
    lichess: "https://lichess.org/er4aSjvj",
    fen: "5b1k/8/5p1p/1r2pPpP/1P4P1/PR3P2/8/6K1 w - - 1 36",
    score: 0,
  },
  {
    lichess: "https://lichess.org/JZI4IRZb",
    fen: "r1r3k1/2q1ppbp/p2p2p1/1pnP4/6P1/3BBP2/PPP2Q1P/1K1R3R w - - 1 18",
    score: 1.3,
  },
  {
    lichess: "https://lichess.org/zNG6GKMo",
    fen: "2r1r1k1/3p1ppp/b2B4/pp1P4/4P3/1n1B1P2/1P2N1PP/3K3R w - - 6 23",
    score: -2,
  },
  {
    lichess: "https://lichess.org/Gbzqzgfm",
    fen: "r3k2r/1pqbbn1p/2n1p3/p2pPppQ/Pp1P4/1N1B3P/2PN1PPB/R4RK1 w kq - 4 18",
    score: 0.9,
  },
  {
    lichess: "https://lichess.org/nXMOEyJG",
    fen: "8/p4R2/1kp5/7p/P4PnP/4P1P1/2r3B1/5K2 w - - 1 36",
    score: 2,
  },
  {
    lichess: "https://lichess.org/27MWaLr7",
    fen: "r4rk1/pppq1ppp/1bn5/3pPn2/3P2b1/2N1BN2/PP1QBPPP/R4RK1 w - - 9 13",
    score: 0,
  },
  {
    lichess: "https://lichess.org/umXmuEWl",
    fen: "r2q1rk1/pb1nbppp/1p2p3/2ppN3/5P2/1P1BP1n1/PBPP2PP/R2Q1RK1 w - - 0 12",
    score: 0,
  },
  {
    lichess: "https://lichess.org/UXNbvSIv",
    fen: "2r4r/pp2p1k1/2p1Ppbq/3p4/3P4/P4NQ1/1PP3P1/1K2RB2 w - - 3 28",
    score: 2.1,
  },
  {
    lichess: "https://lichess.org/THPUQyT8",
    fen: "r4rk1/b1p2pp1/p1npbq1p/1p2p3/4Pn2/2PPBN1P/PPB2PP1/R2QRNK1 w - - 9 15",
    score: 1.3,
  },
  {
    lichess: "https://lichess.org/ZOqO5IFw",
    fen: "r1q3k1/pp1b1p1p/2pb2p1/2nP2Pn/3N1P2/2N4P/PPP2QBK/R1B1r3 w - - 0 19",
    score: -1.4,
  },
  {
    lichess: "https://lichess.org/YSMOzrfC",
    fen: "2rr2k1/1q2bppp/p2pp3/1pn5/3N1P2/2P1N3/PPQ2PPP/3R1RK1 w - - 0 19",
    score: -0.3,
  },
  {
    lichess: "https://lichess.org/ogasfx5M",
    fen: "1r1b3k/p2b1qpp/r4n2/3p4/N2Pp3/QP2NP2/P2B2PP/K2R3R w - - 1 27",
    score: -3.8,
  },
  {
    lichess: "https://lichess.org/3N36YYCG",
    fen: "r1b2rk1/1p2qppp/2p2n2/p3n3/Pb2P3/2NQ1NP1/1P1B1PBP/R3R1K1 w - - 0 16",
    score: 0,
  },
  {
    lichess: "https://lichess.org/bdgn3Xbw",
    fen: "r4rk1/ppq3pp/2p1Pnb1/8/6P1/2P4P/PP2Q1B1/R1B2RK1 w - - 1 21",
    score: 3.5,
  },
  {
    lichess: "https://lichess.org/lFXXCOmS",
    fen: "3B4/7k/3p3p/3P2p1/pp6/5r2/PP1R3P/6K1 w - - 0 42",
    score: 8.2,
  },
  {
    lichess: "https://lichess.org/9oyLBMH2",
    fen: "r2q1rk1/4bpp1/4p1p1/1N1p4/Q2P4/4PPB1/1P4PP/5RK1 w - - 1 23",
    score: -4.5,
  },
  {
    lichess: "https://lichess.org/ai3wgu7l",
    fen: "rnb2k2/ppp4p/3p4/4b3/2P5/2NP4/PP2N3/1RB2K2 w - - 0 19",
    score: -1.1,
  },
  {
    lichess: "https://lichess.org/81K06Fqj",
    fen: "r2q2k1/p4r1p/1pp1bbp1/3pBp2/2PP4/3B1Q2/P1P2PPP/1R2R1K1 w - - 1 17",
    score: 1.7,
  },
  {
    lichess: "https://lichess.org/HD8e1RWr",
    fen: "rnbqk2r/pp3ppp/4pn2/2pp4/1b2P3/2NP2P1/PPPB1P1P/R2QKBNR w KQkq - 1 6",
    score: 0.7,
  },
  {
    lichess: "https://lichess.org/NtDLcwju",
    fen: "r1bqkb1r/ppp2ppp/2n5/3np3/8/5NP1/PP1PPPBP/RNBQK2R w KQkq - 2 6",
    score: 0.4,
  },
  {
    lichess: "https://lichess.org/nNTeTeJH",
    fen: "r1bq1rk1/pp3pbp/2n5/2p1pp2/3pP3/4PNP1/PPP3BP/R1BQ1RK1 w - - 0 12",
    score: 0,
  },
  {
    lichess: "https://lichess.org/5V3I2jDV",
    fen: "r1b1kb1r/pp1n1p2/2p1p1p1/2P1Nn1p/3PNB1q/8/PP2BP2/R2QK1R1 w Qkq - 0 17",
    score: -2,
  },
  {
    lichess: "https://lichess.org/O40zBzzS",
    fen: "r4rk1/p2nppbp/1qp3p1/3pP3/1p1P1P2/5B1P/PPP2BP1/R2QK2R w KQ - 0 17",
    score: 1.1,
  },
  {
    lichess: "https://lichess.org/jASNs3JX",
    fen: "6k1/1p2pp2/6p1/1Rp5/P5Pp/1P5P/1r6/6K1 w - - 0 37",
    score: -2.4,
  },
  {
    lichess: "https://lichess.org/J64DD4IE",
    fen: "4r1k1/1prb1ppp/p1nq4/3pp3/NP1Pn3/P3PN1P/4BPP1/2RQ1RK1 w - - 0 18",
    score: 0.3,
  },
  {
    lichess: "https://lichess.org/muDWNuly",
    fen: "r1b2k1r/p1q2pp1/2pb1n1p/1p6/4P3/P1N2NP1/1P3PBP/R2Q1RK1 w - - 0 14",
    score: 5.8,
  },
  {
    lichess: "https://lichess.org/RVnurhyq",
    fen: "r4rk1/p4pp1/3R3p/qpn1pb2/2B4P/P3BN2/1P2QPP1/K6R w - b6 0 21",
    score: 7.9,
  },
  {
    lichess: "https://lichess.org/eygvfJfI",
    fen: "r4rk1/pp2ppbp/1q3np1/8/3P1Pb1/1B3N2/PP2Q1PP/R1BR2K1 w - - 5 16",
    score: -1.2,
  },
  {
    lichess: "https://lichess.org/LjmLpFnr",
    fen: "2k4r/pp3pp1/2pb3r/7P/2pPpPq1/1P2P1NR/P1Q5/2K4R w - - 0 23",
    score: 0,
  },
  {
    lichess: "https://lichess.org/uOHXFMmM",
    fen: "r5k1/1p3ppp/p4n2/1P2q3/P2pp3/7P/4QPP1/3RR1K1 w - - 0 26",
    score: 1.1,
  },
  {
    lichess: "https://lichess.org/fYnVCPsy",
    fen: "r4rk1/pppq1pbp/2n1p3/3p1P2/2PPnp2/4B3/PPQ2PBN/R4RK1 w - - 0 17",
    score: -5.1,
  },
  {
    lichess: "https://lichess.org/gpkW2sVT",
    fen: "8/p2r2k1/5qp1/2rb1p1p/4pP1P/P3P1Q1/1P2BP2/2R3K1 w - - 0 30",
    score: 1,
  },
  {
    lichess: "https://lichess.org/Tui5Mxti",
    fen: "rnbqk2r/pp3pp1/4pn1p/2pp2B1/2PP4/P1P5/2Q1PPPP/R3KBNR w KQkq - 0 8",
    score: -0.4,
  },
  {
    lichess: "https://lichess.org/TVzkGx09",
    fen: "5r1k/6bp/p3Q1p1/1p1Np1p1/8/P1P4P/1P1n1P2/5K2 w - - 1 31",
    score: 4.5,
  },
  {
    lichess: "https://lichess.org/7EkeD37K",
    fen: "2k3r1/4Rp2/2pp1B1p/6pB/1pb5/7P/PP3PP1/6K1 w - - 2 27",
    score: 7.6,
  },
  {
    lichess: "https://lichess.org/QcDvFraU",
    fen: "r2qr1k1/pp3pbp/2pp1np1/4n3/2PBP3/2N3PP/PP3PB1/R2Q1RK1 w - - 3 14",
    score: 1.2,
  },
  {
    lichess: "https://lichess.org/cH24d61I",
    fen: "r1bqk2r/pp1nppbp/3p2p1/3P4/5P2/6P1/PP4BP/RNBQR1K1 w kq - 1 14",
    score: -2,
  },
  {
    lichess: "https://lichess.org/XBnoDjor",
    fen: "3rb1k1/p3nppp/B3pn2/2b5/2N5/PrN1P1P1/1P1B1P1P/R2R2K1 w - - 0 18",
    score: 3.2,
  },
  {
    lichess: "https://lichess.org/hUQuegub",
    fen: "r3kb1r/1p6/1q2p1p1/2pn1pNp/p2PpP2/P1P1P3/1P3RPP/R1B1Q2K w kq - 4 18",
    score: 0,
  },
  {
    lichess: "https://lichess.org/uWoWtynN",
    fen: "2rqrbk1/pb3p1p/1pn1pnp1/6B1/3P4/P1NQ1N2/1P3PPP/1B1RR1K1 w - - 0 16",
    score: 7.2,
  },
  {
    lichess: "https://lichess.org/IFwDnEvw",
    fen: "2k2rr1/ppp3q1/2nbp2p/4p1pQ/4P3/2P1N1PP/PP3PB1/R1B1R1K1 w - - 1 18",
    score: 8.9,
  },
  {
    lichess: "https://lichess.org/7xzI6O99",
    fen: "r2qr3/pp1n1kp1/2p2b2/3p2p1/3P1BP1/4RN1P/PP2QP2/R5K1 w - - 0 20",
    score: 4.8,
  },
  {
    lichess: "https://lichess.org/dOA0cTpp",
    fen: "r4rk1/3R1ppp/p3p3/b2p4/3N1B2/4P3/PP1n1PPP/5RK1 w - - 0 19",
    score: 1.5,
  },
  {
    lichess: "https://lichess.org/pxVf7ID6",
    fen: "2kr4/pppb3r/2nb1P2/3p2P1/4n2N/2pB2P1/PP5P/RNB2RK1 w - - 0 17",
    score: 8,
  },
  {
    lichess: "https://lichess.org/7GigjoAw",
    fen: "r4rk1/pbq2ppp/1p2pb2/2P5/8/P2B3Q/1P2nPPP/R1B1R1K1 w - - 0 17",
    score: -1,
  },
  {
    lichess: "https://lichess.org/tEmMJVaD",
    fen: "1r6/3qn2k/Rr2b1pp/3pPn2/2pP1P2/2B3NP/2B1Q2K/6R1 w - - 6 32",
    score: -2.4,
  },
  {
    lichess: "https://lichess.org/GMhGrluF",
    fen: "8/1p4pp/2p2p2/2k1p3/B3P3/P1K2PP1/1P2b2P/8 w - - 1 28",
    score: -0.2,
  },
  {
    lichess: "https://lichess.org/XumQw8sS",
    fen: "Rrr3k1/3n1pbp/4p1p1/4n3/4P3/2N1BP2/4N1PP/R5K1 w - - 2 24",
    score: -0.2,
  },
  {
    lichess: "https://lichess.org/47aRYUPT",
    fen: "r2q1rk1/pp2np1p/6p1/3P4/8/4BB1P/P4PP1/Q4RK1 w - - 1 17",
    score: 1.1,
  },
  {
    lichess: "https://lichess.org/TUelCbZd",
    fen: "2rq1rk1/pb1nbppp/1p2pn2/2p1N3/2pP1P2/1PNBP3/P1Q3PP/R1B2RK1 w - - 0 12",
    score: -2.3,
  },
  {
    lichess: "https://lichess.org/yHqxghJI",
    fen: "2r4r/6k1/p2pp1p1/1p4P1/8/PP1K1P2/2P4R/7R w - - 0 28",
    score: 6.8,
  },
  {
    lichess: "https://lichess.org/vxjekF84",
    fen: "3r4/1p2bkp1/1n2pp2/3b3p/3PN2P/1PP2P2/P1B2KP1/R3R3 w - - 1 29",
    score: 7.2,
  },
  {
    lichess: "https://lichess.org/oPKLZHH9",
    fen: "2r1q1k1/1p1rppbp/pBnpbnp1/8/4PP2/1NN2B1P/PPPR2P1/R2Q2K1 w - - 7 16",
    score: 1.7,
  },
  {
    lichess: "https://lichess.org/ltYH20X4",
    fen: "r1bq1rk1/pp2bppp/2p2n2/4pP2/3np3/P1NP1N2/BPP3PP/R1BQ1RK1 w - - 0 11",
    score: 0.8,
  },
  {
    lichess: "https://lichess.org/41efzK9y",
    fen: "r1b1nrk1/pp2q1pp/4p3/3pPp2/3P4/3BPR2/PP1N2PP/R2Q2K1 w - - 1 15",
    score: 1.6,
  },
  {
    lichess: "https://lichess.org/GUnGxxhq",
    fen: "r2r2k1/p4p1p/npqPp1p1/4P3/3Q1P1P/6P1/P3N1K1/3R1R2 w - - 1 28",
    score: 2.8,
  },
  {
    lichess: "https://lichess.org/EuPgx7H7",
    fen: "r1r3k1/5ppp/bqn1p3/1p1pP3/p3nP2/P1P2NP1/1P2N1BP/R2Q1R1K w - - 2 18",
    score: -1.8,
  },
  {
    lichess: "https://lichess.org/IGaqNE8K",
    fen: "rnbqkbnr/p4ppp/1p1p4/2pPp3/2P1P3/2N2N2/PP3PPP/R1BQKB1R w KQkq - 2 7",
    score: 1.9,
  },
  {
    lichess: "https://lichess.org/Jq2F1e1q",
    fen: "r3k2r/ppp4p/2n2b2/6p1/5pb1/1PP2N2/PB1PN1P1/R3K2R w KQkq - 3 16",
    score: -6.3,
  },
  {
    lichess: "https://lichess.org/Fw7bZTNL",
    fen: "6k1/1p1n1ppp/p1p1p3/2b5/4P3/1P2B1PP/1PP2PB1/5K2 w - - 2 22",
    score: 0.4,
  },
  {
    lichess: "https://lichess.org/OY2VSLGk",
    fen: "r2q2rk/p3bp1p/2pp1p2/4pb2/2P1P3/2NQ4/PP3PPP/3R1RK1 w - - 0 16",
    score: 1.6,
  },
  {
    lichess: "https://lichess.org/r5r2z8n0",
    fen: "r3r1k1/p4ppp/4bpB1/2p5/8/5NPP/PPPq1PK1/3R3R w - - 0 20",
    score: 0.5,
  },
  {
    lichess: "https://lichess.org/Iq95j4RB",
    fen: "2r4k/p7/Pp4qp/1P3r2/2pP1p2/3npP2/Q3R1PP/2BR2K1 w - - 1 33",
    score: -6.3,
  },
  {
    lichess: "https://lichess.org/p4kNsSPs",
    fen: "r1b2r1k/ppp3b1/2n2q1p/2n1p3/5p2/2P2N1P/PPQ1BPP1/2BRRNK1 w - - 2 18",
    score: 0.1,
  },
  {
    lichess: "https://lichess.org/cyANFJ5k",
    fen: "4b1k1/5p2/1B2p1p1/3p4/3P1P1p/2P3P1/5K1P/2b2B2 w - - 0 34",
    score: -0.1,
  },
  {
    lichess: "https://lichess.org/X8vlS89B",
    fen: "3r2k1/p4pb1/1pR3p1/7p/1P5P/3Np1P1/q4P2/2Q3K1 w - - 0 30",
    score: -7.5,
  },
  {
    lichess: "https://lichess.org/qqFOUssV",
    fen: "r1b5/pp1nk1p1/2p5/2PppBq1/3P2p1/2N1P3/PPQ2P2/2KR3r w - - 0 18",
    score: -5.9,
  },
  {
    lichess: "https://lichess.org/BpHcJmDp",
    fen: "7k/1n1R2q1/Q6p/8/7P/2r5/PPP2r2/2KR4 w - - 0 28",
    score: 56.8,
  },
  {
    lichess: "https://lichess.org/8PxS6nRI",
    fen: "2b3r1/k1qpnp1R/1p1b1Q2/p1pPn1r1/P1P1B3/1P2N3/1B1PK1P1/4R3 w - - 12 28",
    score: -1.2,
  },
  {
    lichess: "https://lichess.org/GERzPSUR",
    fen: "rr6/3kbpp1/1p2p3/2ppPn1p/1P3P2/P1P5/3N1BPP/R3R1K1 w - - 1 21",
    score: -1,
  },
  {
    lichess: "https://lichess.org/fF0RLIXs",
    fen: "3rkb1r/pp2pppp/5n2/2n1p3/8/5N2/PPP2PPP/RNB1K2R w KQk - 0 9",
    score: -1,
  },
  {
    lichess: "https://lichess.org/ikaoNhJo",
    fen: "4rrk1/1p1nq1pp/2pb1n2/p2p1b2/P2P4/1PNN2P1/4PPBP/R1BQR1K1 w - - 6 18",
    score: 1.1,
  },
  {
    lichess: "https://lichess.org/xHoY53RK",
    fen: "2rq2rk/pp3p1p/4bp2/1Pbp4/3N1P2/P1NQ4/2P3PP/R4R1K w - - 3 19",
    score: 1,
  },
  {
    lichess: "https://lichess.org/FxTIQsB2",
    fen: "6k1/p4p2/5bp1/1pp5/4b2p/PP2PN1P/5PP1/3B2K1 w - b6 0 28",
    score: -1.7,
  },
  {
    lichess: "https://lichess.org/YgI1fbyE",
    fen: "2rq2k1/pp1bb2n/2n1pr1Q/5p2/3P4/P1NB1N1P/1P3PP1/3R1RK1 w - - 2 18",
    score: -0.6,
  },
  {
    lichess: "https://lichess.org/XTJsrfet",
    fen: "2k4r/ppp2p1p/2b1q3/8/1Q2n3/4P3/P2P1PPP/3RK2R w K - 0 17",
    score: -4.2,
  },
  {
    lichess: "https://lichess.org/egbTJ4jS",
    fen: "4r1k1/1pp3pp/p2p1b2/3q4/8/P1Q4P/1P3PP1/3R2K1 w - - 0 25",
    score: -7.6,
  },
  {
    lichess: "https://lichess.org/l1icsa6t",
    fen: "8/R2N1ppk/1P2p2p/3p4/3P1P2/8/5PKP/qr6 w - - 0 40",
    score: 5.4,
  },
  {
    lichess: "https://lichess.org/o7OmQcoi",
    fen: "3rr2k/1p1bq1bp/6p1/p1p1pp2/2Pn4/PP1P2P1/1BQN1PBP/1R2R1K1 w - - 0 20",
    score: 0.3,
  },
  {
    lichess: "https://lichess.org/7GHCN5GI",
    fen: "r1b2rk1/p2np2p/3p2pQ/2p3Pn/1p1PP3/5P2/qPP5/1NKR1BNR w - - 1 17",
    score: 0.9,
  },
  {
    lichess: "https://lichess.org/CqwTP0OD",
    fen: "8/p1k2pbp/1pp1bnp1/2B1p3/2P5/1P4PP/P3PPB1/3N2K1 w - - 0 19",
    score: -0.5,
  },
  {
    lichess: "https://lichess.org/IsVDLB5l",
    fen: "r2qk2r/1Q3ppp/p1P1b3/2bp1P2/P1nN4/8/1PP3PP/RNB1R1K1 w kq - 1 19",
    score: 9.8,
  },
  {
    lichess: "https://lichess.org/3ayQsOot",
    fen: "2kr1bnr/ppp2ppp/4p3/8/Q1Pq4/8/PP2BPPP/RN3RK1 w - - 0 13",
    score: 0.2,
  },
  {
    lichess: "https://lichess.org/2Tn22jX7",
    fen: "6k1/p3bp2/1p2b1pp/3p4/1P1N4/PN2PPP1/2q3P1/6K1 w - - 0 28",
    score: -0.3,
  },
  {
    lichess: "https://lichess.org/TCtXnTUj",
    fen: "rq1r2k1/1b1pnppp/p2Np3/1p2P3/1n3P2/1B1Q4/PB4PP/R4RK1 w - - 3 19",
    score: 4.9,
  },
  {
    lichess: "https://lichess.org/VQ68X0km",
    fen: "k2rr3/1p6/2b1p3/4B1p1/p1NR4/2P5/P1P3PP/2K5 w - - 5 38",
    score: -0.5,
  },
  {
    lichess: "https://lichess.org/lQxLnGCm",
    fen: "7r/1p1knp2/1np1p3/1p1pP2p/r2P1P2/P1P4P/1P1NBK2/1R5R w - - 0 24",
    score: 1.6,
  },
  {
    lichess: "https://lichess.org/4XzRJKmK",
    fen: "r4rk1/1q1bbppp/p2pp3/1p3P2/3nP3/PBN1Q3/1PP3PP/4RRK1 w - - 0 17",
    score: -0.2,
  },
  {
    lichess: "https://lichess.org/BgWvRNhL",
    fen: "r1kb3r/1pp1q2p/6p1/p3p3/2NnN3/1Q5P/PPPR1PP1/3R2K1 w - - 2 28",
    score: 6,
  },
  {
    lichess: "https://lichess.org/I1r0B4tX",
    fen: "r5k1/2Bb1r1p/2p1p3/1p2P2q/2p2PnP/P3p1P1/1P4B1/R3QRK1 w - - 2 26",
    score: 1.9,
  },
  {
    lichess: "https://lichess.org/HrnhsoqK",
    fen: "1r1q1rk1/p4p2/1pnp1bpp/2p1p3/1PP3b1/P1NP1NP1/4PPBP/1R1QR1K1 w - - 0 14",
    score: 1.2,
  },
  {
    lichess: "https://lichess.org/h74H1FDs",
    fen: "r1bqr1k1/pp3p1p/1n1p2p1/3Pn3/2PQ4/1PN5/P3B1PP/2R1K1NR w K - 2 16",
    score: -0.3,
  },
  {
    lichess: "https://lichess.org/W1oOi5Et",
    fen: "r4rk1/pp3p1p/6p1/5b2/2NP1n2/1N6/PP1KB1PP/3R3n w - - 0 21",
    score: -7.7,
  },
  {
    lichess: "https://lichess.org/JgteyLII",
    fen: "5rk1/1rq2pbp/4p1pB/p2p4/8/1PP4Q/P4RPP/5R1K w - - 2 23",
    score: -2.4,
  },
  {
    lichess: "https://lichess.org/zb9pHSpE",
    fen: "4r1k1/p5p1/1pq1r2p/2p4Q/4p3/1P1P2P1/P1P2P1P/4RRK1 w - - 2 24",
    score: 1.8,
  },
  {
    lichess: "https://lichess.org/aIV0drKJ",
    fen: "r3r1k1/pp3p2/4qQ1p/8/3R4/8/PPP2PPP/5RK1 w - - 1 20",
    score: 6.6,
  },
  {
    lichess: "https://lichess.org/eeKLdUYk",
    fen: "r2q1rk1/1p2ppbp/p2p1np1/5b2/1P1n1B2/P1N1P3/2P1BPPP/2RQ1RK1 w - - 0 14",
    score: -1.2,
  },
  {
    lichess: "https://lichess.org/nIuEncPS",
    fen: "r1b1r1k1/1p2qppp/p1p1n3/3p4/2n5/3N3P/PPP1BPP1/R1BQR1K1 w - - 0 17",
    score: -0.3,
  },
  {
    lichess: "https://lichess.org/bL5NUHt0",
    fen: "5r2/ppkb1r2/2p2P1R/4p1n1/PP2B3/2P5/7P/5RBK w - - 3 39",
    score: 2.9,
  },
  {
    lichess: "https://lichess.org/JFw6tpco",
    fen: "1r3rk1/1pb2pp1/p1p1b2p/P4q2/3B4/2P3P1/1PQ2PBP/R4RK1 w - - 8 19",
    score: 0.5,
  },
  {
    lichess: "https://lichess.org/BfNbBLmT",
    fen: "6k1/1p3pp1/1rpq3p/p2p4/P2Pr3/1P2P2P/1RQ2PP1/1R4K1 w - - 2 29",
    score: 0,
  },
  {
    lichess: "https://lichess.org/tD8cQBUn",
    fen: "6k1/p3n1p1/1npN1p2/1p6/3P4/P4NP1/1P2KP2/8 w - - 2 35",
    score: 0,
  },
  {
    lichess: "https://lichess.org/BNON2bML",
    fen: "4rrk1/p1qn3p/2p1p1p1/2pp1pP1/3bPP1P/1PNP1Q2/P1PB4/4RR1K w - - 0 19",
    score: 1.1,
  },
  {
    lichess: "https://lichess.org/Dh0RG0tc",
    fen: "6k1/3pn3/4p2p/p3Ppp1/Pp1B1P2/3P2P1/1P1K3P/2r5 w - - 0 30",
    score: 0,
  },
  {
    lichess: "https://lichess.org/tS4SvSdY",
    fen: "3r1r2/pp2p1bp/4k1p1/4p2n/2NnP3/P1N1BP1P/1P4P1/1RR3K1 w - - 3 23",
    score: 0.3,
  },
  {
    lichess: "https://lichess.org/5qWrDS04",
    fen: "r6r/1p1n1kpb/p2p3p/2pP4/2P1pP1N/2N5/PP4PP/R4RK1 w - - 0 17",
    score: 1.5,
  },
  {
    lichess: "https://lichess.org/NFoPOyt0",
    fen: "R1b1r1k1/1q3ppp/2p5/2Ppn3/1P2p3/1NP1P1Q1/4BPPP/6K1 w - - 3 22",
    score: 4.1,
  },
  {
    lichess: "https://lichess.org/6AgoHZ2C",
    fen: "1k5r/1prbqppp/p3p3/2npP3/3N1P1P/3BQ3/PPP3P1/1K1R3R w - - 1 19",
    score: 1.3,
  },
  {
    lichess: "https://lichess.org/nWK9cz23",
    fen: "r2qr1k1/pb3pbp/1p1p2p1/P1pnn3/8/2P1PNBP/1P1NBPP1/R2Q1RK1 w - - 0 14",
    score: 2.1,
  },
  {
    lichess: "https://lichess.org/3cnEMkdt",
    fen: "1nR5/5ppk/1p2pP1p/5P2/8/3r2NP/6P1/7K w - - 0 32",
    score: 5.9,
  },
  {
    lichess: "https://lichess.org/xQDYuUXV",
    fen: "1B6/8/8/1p6/p1b1kpp1/P7/1P3K1P/8 w - - 4 48",
    score: -0.2,
  },
  {
    lichess: "https://lichess.org/e6GEznwL",
    fen: "1r3rk1/pp2bppp/1np1p3/B3P3/2P1N1PP/1P3P2/1P6/2KR3R w - - 3 21",
    score: 2.8,
  },
  {
    lichess: "https://lichess.org/AcvJzGRC",
    fen: "3r2k1/pp3p1p/6p1/4b2P/8/1BP1qN2/PP2r1PK/5Q1R w - - 3 27",
    score: -15.4,
  },
  {
    lichess: "https://lichess.org/3LmtuA6o",
    fen: "r3r1k1/1p1nqpp1/2p4p/3nP3/p2N2b1/1P6/PQ1N1PPP/2R1RBK1 w - - 1 20",
    score: 0.8,
  },
  {
    lichess: "https://lichess.org/REpmhCaC",
    fen: "r2q1rk1/1p4b1/2npb2p/p1pNp1p1/P3Pp2/2PP1NP1/1PQ2PBP/R4RK1 w - - 0 17",
    score: -0.5,
  },
  {
    lichess: "https://lichess.org/lowdwpY4",
    fen: "3rr1k1/p4p1p/1p4p1/1Pp1p3/2P5/P1BPPn1q/4QP1P/3R2RK w - - 10 25",
    score: -7.8,
  },
  {
    lichess: "https://lichess.org/b7bolfeQ",
    fen: "6k1/r3qpp1/r3p1p1/3pP3/6P1/1Q5P/1P3RK1/5R2 w - - 0 34",
    score: 0,
  },
  {
    lichess: "https://lichess.org/TE7KWHqK",
    fen: "r4rk1/p3ppb1/2ppb1pp/q6P/np1PP3/3BPN2/PPPQ2P1/1KNR3R w - - 3 17",
    score: 1.5,
  },
  {
    lichess: "https://lichess.org/nt0pp6Dc",
    fen: "r2qk2r/1b2bppp/1pn1p3/pN1n4/3P4/P2B1N2/1P3PPP/R1BQ1RK1 w kq - 2 12",
    score: 0.2,
  },
  {
    lichess: "https://lichess.org/pBCHxTVU",
    fen: "6k1/5p1p/3Rp3/ppr3p1/8/2P2P2/PP3KPP/8 w - - 0 29",
    score: 0,
  },
  {
    lichess: "https://lichess.org/wS8KwjaU",
    fen: "r5k1/p3b2p/1q2p1p1/3pBp2/5Q2/1P3R2/P1r2PPP/5RK1 w - f6 0 20",
    score: -0.5,
  },
  {
    lichess: "https://lichess.org/JKN3yyyK",
    fen: "r7/5p2/3kpPp1/pK1n1nBp/5P1P/1N6/8/8 w - - 2 50",
    score: -15.9,
  },
  {
    lichess: "https://lichess.org/RvzaQZBr",
    fen: "5rk1/p2bqpp1/1p2p2p/3nb3/2BP4/1Q6/PP1B2PP/2R3K1 w - - 0 25",
    score: -3.1,
  },
  {
    lichess: "https://lichess.org/zckofhpo",
    fen: "5r1k/8/5qp1/pp1p3p/3P4/1P2P3/2R2PPP/3Q2K1 w - - 0 37",
    score: 3.2,
  },
  {
    lichess: "https://lichess.org/HFVvPFYT",
    fen: "8/p3R1pk/2r2p1p/3p4/2pP4/2P2PP1/P5PK/8 w - - 0 36",
    score: 0.7,
  },
  {
    lichess: "https://lichess.org/RcD6u9lh",
    fen: "r4r2/p2n2bk/1p1q3p/2pP1p2/4pP1P/4B3/PP1QB3/2K3RR w - - 0 23",
    score: -0.8,
  },
  {
    lichess: "https://lichess.org/2dKZYYyN",
    fen: "r1b2r2/1p4k1/p1nqpb2/5p2/N1p3p1/PP2PN2/2QPBP2/2KR2R1 w - - 0 19",
    score: -3.7,
  },
  {
    lichess: "https://lichess.org/GbsHm2V0",
    fen: "r3k1nr/1b1pbp2/p3p2p/1p2P1p1/3qN3/3B2B1/PP2QPPP/R4RK1 w kq - 0 16",
    score: 3.4,
  },
  {
    lichess: "https://lichess.org/sih7SuzW",
    fen: "r1b1k2r/pp4pp/1q2Pp2/3pn3/1b1P4/8/PPB3PP/RNBQK2R w KQkq - 1 13",
    score: 0.2,
  },
  {
    lichess: "https://lichess.org/Vei2oDJN",
    fen: "3r3k/4nb1p/1bp1qppP/1p2p3/1P2P3/3BNQP1/2PB1P2/5RK1 w - - 2 23",
    score: 1.5,
  },
  {
    lichess: "https://lichess.org/rQAon7uP",
    fen: "3B4/2p2k1p/1p4p1/p4p2/2PP4/1P3P2/1r2nPKP/3R4 w - - 8 34",
    score: 2.3,
  },
  {
    lichess: "https://lichess.org/iOAyLFUC",
    fen: "1r1qr1k1/5p1p/p1npb1p1/1p1N4/4PPP1/1P5P/P4QB1/4RRK1 w - - 0 25",
    score: 2.3,
  },
  {
    lichess: "https://lichess.org/DZtH4YJ0",
    fen: "1k1r3r/pppQ1p2/7p/5b2/2N1pp2/2P5/PP2nPPP/2KRR3 w - - 0 19",
    score: 0.6,
  },
  {
    lichess: "https://lichess.org/YbPmRRzh",
    fen: "1r1q1rk1/5pbp/2n1p1p1/1ppn4/8/3P2PP/1PP2PB1/R1BQR1K1 w - - 0 19",
    score: -7.9,
  },
  {
    lichess: "https://lichess.org/SP3q5VlD",
    fen: "r2q1k1r/ppp5/5p2/2b1N3/3nP1Q1/2NP3p/PPP3PP/R4R1K w - - 2 17",
    score: 12.7,
  },
  {
    lichess: "https://lichess.org/VCSYCA72",
    fen: "8/1p2kr2/p6p/3R1pp1/4p2P/2P1K3/PP3PP1/8 w - g6 0 29",
    score: 0.4,
  },
  {
    lichess: "https://lichess.org/dhxzen8O",
    fen: "1r1q1r1k/4bppp/2ppb3/p6Q/PpBBP3/7P/1PP2PP1/R4RK1 w - - 2 19",
    score: 0.4,
  },
  {
    lichess: "https://lichess.org/oKpQFkQ1",
    fen: "r2q1rk1/1b2ppbp/pn3np1/2p5/2P5/Rp2PN2/1B1NBPPP/Q2R2K1 w - - 0 16",
    score: 0.7,
  },
  {
    lichess: "https://lichess.org/2EFBe2XN",
    fen: "r1b2rk1/ppq3bp/8/2pPp1pn/P1P1Pp2/3B1P2/3QNBPP/1R3RK1 w - - 0 19",
    score: 2.5,
  },
  {
    lichess: "https://lichess.org/TYiAKYdl",
    fen: "3Q1bk1/Bpq2ppp/4p3/3n4/8/P1P4P/1P3PP1/6K1 w - - 1 26",
    score: -5.8,
  },
  {
    lichess: "https://lichess.org/wzQALdc2",
    fen: "r2qrk2/pp1n1pp1/n3p1p1/3pP3/Q2P1B2/P1P5/5PPP/R3KB1R w KQ - 1 20",
    score: 3.4,
  },
  {
    lichess: "https://lichess.org/nnwsdOTi",
    fen: "r2q1rk1/1b2npbp/p1np2p1/1pp1p1B1/P1N1P3/1BPP1N1P/1P3PP1/R2QR1K1 w - - 0 15",
    score: 0.8,
  },
  {
    lichess: "https://lichess.org/hw4p5bNN",
    fen: "6k1/5p2/5n1p/1Q6/3Ppp2/2q1P1P1/2r2PP1/1R4K1 w - - 0 32",
    score: -4.5,
  },
  {
    lichess: "https://lichess.org/Xh5jqss9",
    fen: "8/4r1k1/Rp1rb1pp/2p1n3/2P1P3/2P5/3NB2P/4KR2 w - - 2 32",
    score: -2.9,
  },
  {
    lichess: "https://lichess.org/HyAKByK3",
    fen: "2r4k/1pq1prbp/p2p4/3b1p2/3BP2P/1P3P2/1PP3R1/R2Q2K1 w - - 0 21",
    score: 0.2,
  },
  {
    lichess: "https://lichess.org/VHr4hFOU",
    fen: "8/8/p3p3/1p6/2k1P3/1b3P2/1P1R3P/1KB4r w - - 7 36",
    score: -0.4,
  },
  {
    lichess: "https://lichess.org/TatAo1GV",
    fen: "8/4B3/2b3p1/1p5p/5Pp1/P2k2P1/5K2/8 w - - 3 44",
    score: 0,
  },
  {
    lichess: "https://lichess.org/y7AiAHNu",
    fen: "5rk1/6pp/1R1nbn2/4p3/8/2P2p2/3N1PPP/5BK1 w - - 0 25",
    score: 0,
  },
  {
    lichess: "https://lichess.org/7xlX6SRN",
    fen: "8/5pk1/1pN3pp/p2n4/Pn6/1P3P2/4K1PP/8 w - - 2 35",
    score: -7,
  },
  {
    lichess: "https://lichess.org/MAeEZfeu",
    fen: "r4rk1/1b3pp1/pq2pb1p/1p1n4/P2N4/2P3P1/1P2QPBP/R1B1R1K1 w - - 3 17",
    score: 0,
  },
  {
    lichess: "https://lichess.org/PYp1pitw",
    fen: "1r4k1/4pp1p/1q4pP/4P3/pp6/4P3/P3QPP1/2R3K1 w - - 0 29",
    score: 0,
  },
  {
    lichess: "https://lichess.org/nH9wJEKn",
    fen: "2rq2k1/pp3pp1/5np1/6B1/3N4/n1P4P/1PQ2PP1/4R1K1 w - - 0 22",
    score: 1.7,
  },
  {
    lichess: "https://lichess.org/0T5PhrP8",
    fen: "8/1R3pk1/8/1N3p1p/p6P/Pn4P1/1P1r4/1K6 w - - 1 41",
    score: 0,
  },
  {
    lichess: "https://lichess.org/LR61PL1F",
    fen: "1r1q1rk1/5p1p/1p4p1/pQp5/Pn1p4/5N1P/3B1PP1/3R1RK1 w - - 2 23",
    score: 4.3,
  },
  {
    lichess: "https://lichess.org/LNqIKgEW",
    fen: "r1q2k1r/p3npp1/np2p2p/1QppP3/3P4/B1P2N2/P1P2PPP/1R3RK1 w - - 0 14",
    score: 1.6,
  },
  {
    lichess: "https://lichess.org/eNZ26kd7",
    fen: "5rk1/1br1qpp1/p2Np2p/1pPn4/1P6/P2BP2P/2Q2PP1/3R1RK1 w - - 5 22",
    score: 6.6,
  },
  {
    lichess: "https://lichess.org/zeBXaXyh",
    fen: "4rr2/1p3k2/p1p2n2/2Pp1pp1/1P1P4/3K1PP1/1P4B1/4R2R w - - 3 28",
    score: -1.3,
  },
  {
    lichess: "https://lichess.org/6TJOGo8P",
    fen: "8/7p/1KPpk1p1/4pp2/2rbP3/3R1P2/1P1R2PP/8 w - - 5 37",
    score: 8,
  },
  {
    lichess: "https://lichess.org/FBlJOkE2",
    fen: "6r1/pb2k2p/4r3/3pP1p1/3R4/1P6/P1P4P/2K1R3 w - g6 0 27",
    score: -6.1,
  },
  {
    lichess: "https://lichess.org/EtuytEW0",
    fen: "2r1kb1r/2q2pp1/p2p1n2/1p1BpP1p/4P3/8/PPP1N1PP/R2QK2R w KQk - 1 16",
    score: -1.3,
  },
  {
    lichess: "https://lichess.org/IXi4ANgJ",
    fen: "5rk1/5ppp/1Q1P4/4P3/2qr1P2/3b2P1/2p3BP/2R1R2K w - - 3 33",
    score: -0.8,
  },
  {
    lichess: "https://lichess.org/Juu1GI7H",
    fen: "r2qr3/ppp1npk1/3p1n1p/4pPp1/4P3/2PP1N1P/PP2BP2/R2QR1K1 w - - 1 17",
    score: -0.1,
  },
  {
    lichess: "https://lichess.org/jBsSYW9L",
    fen: "2kr3r/ppp2pp1/2n3p1/3n4/3P2P1/PP1P1N1P/3KPp2/RN3B1R w - - 1 20",
    score: 7.5,
  },
  {
    lichess: "https://lichess.org/zRNfHrbi",
    fen: "r4rk1/p7/2pbb1pp/n4p1N/5p2/3PqB2/PPP1N1PP/R2Q1R1K w - - 2 20",
    score: 2,
  },
  {
    lichess: "https://lichess.org/fCusxHer",
    fen: "rnb1k2r/2qp1ppp/p3p3/1P6/1b1Nn3/2NQ4/PP2BPPP/R1B1K2R w KQkq - 0 10",
    score: 3.2,
  },
  {
    lichess: "https://lichess.org/UMULaXiy",
    fen: "r3r1k1/1pN2ppp/6b1/p1bp4/8/P3PB1P/1q3PP1/R2QR1K1 w - - 0 19",
    score: 4.8,
  },
  {
    lichess: "https://lichess.org/ulaqINbD",
    fen: "nr1qrbk1/R1n2ppp/3p4/Q2PpNP1/8/1P2B2P/5PB1/R5K1 w - - 7 25",
    score: 3.2,
  },
  {
    lichess: "https://lichess.org/WFh1vYFG",
    fen: "r2r2k1/1pq3pp/5b2/p1P1pp1b/1PP1n3/P3BN1P/2Q1BPP1/R4RK1 w - - 2 19",
    score: 1.7,
  },
  {
    lichess: "https://lichess.org/vnoJxsI2",
    fen: "r3r1k1/ppp2pp1/2n2q1p/3p4/B2PnBb1/2PQ1N2/P4PPP/R3R1K1 w - - 2 15",
    score: -1.1,
  },
  {
    lichess: "https://lichess.org/8YPaRIan",
    fen: "8/4P1n1/8/8/1NK3p1/p5P1/Pk6/8 w - - 1 49",
    score: 5.7,
  },
  {
    lichess: "https://lichess.org/z0Rga08q",
    fen: "r4rk1/1p4b1/2pp2p1/1P2p2p/2P1P3/2NP1pP1/5P1P/RR4K1 w - - 0 28",
    score: 0,
  },
  {
    lichess: "https://lichess.org/B8RtYDG5",
    fen: "r3b1k1/p4pqp/1nprp1p1/2N5/2BPQR1P/1P6/P4PP1/4R1K1 w - - 9 27",
    score: 4.4,
  },
  {
    lichess: "https://lichess.org/YmbfNAOd",
    fen: "r1b1k2r/1pq1bpp1/p2ppn1p/8/3NPPP1/2N2Q2/PPP4P/2KR1B1R w kq - 0 12",
    score: 1.8,
  },
  {
    lichess: "https://lichess.org/xfAgafwh",
    fen: "5rk1/1p1b2pp/1q2p3/3pPpP1/pP1P1R1P/P2Q4/6P1/RNr3K1 w - - 1 27",
    score: -8,
  },
  {
    lichess: "https://lichess.org/OwwpMvTu",
    fen: "r1b2rk1/pp1pq1pp/2n1p3/2P2pP1/2P1n2P/P4N2/1P1BPP2/R2QKB1R w KQ - 3 11",
    score: 1.1,
  },
  {
    lichess: "https://lichess.org/pI7Nzw5S",
    fen: "5rk1/pp1q1ppp/1np3b1/8/3P4/1BP3QP/PP1B1PP1/R3r1K1 w - - 0 21",
    score: 3.6,
  },
  {
    lichess: "https://lichess.org/KIHbbGA4",
    fen: "4rrk1/1bqp2pp/p1nbp1n1/1p2Pp2/8/2PB1NBP/PP2QPP1/3RR1K1 w - - 0 18",
    score: 0.5,
  },
  {
    lichess: "https://lichess.org/xCj6lqkS",
    fen: "r1b2rk1/5qpp/p2Qp3/8/2B1p3/PR6/5PPP/5RK1 w - - 2 24",
    score: 1.3,
  },
  {
    lichess: "https://lichess.org/ZfoPoNfj",
    fen: "1r4k1/7p/2rpn1p1/p3p3/1pP1P3/3P1NPP/PR5K/1R6 w - - 6 32",
    score: -1.9,
  },
  {
    lichess: "https://lichess.org/RRV9FqBP",
    fen: "3n1r1k/1pp2qp1/p2p2Rp/4p3/4Br2/2PP3P/PP2QPP1/5RK1 w - - 8 26",
    score: 0.9,
  },
  {
    lichess: "https://lichess.org/MLagq2LV",
    fen: "8/2p1r1kp/6p1/2PQ1p2/8/8/4qPPP/R5K1 w - - 1 31",
    score: 0,
  },
  {
    lichess: "https://lichess.org/oht4ueIV",
    fen: "2k4r/1pp2pp1/p1n1p2p/1r2P3/RP2NP2/8/1P4PP/5RK1 w - - 3 23",
    score: -6.3,
  },
  {
    lichess: "https://lichess.org/aTVPVs99",
    fen: "r2qk2r/ppp2ppp/1nn1p3/4P3/1bPP2b1/2N1BN2/PP4PP/2RQKB1R w Kkq - 4 11",
    score: 0.4,
  },
  {
    lichess: "https://lichess.org/phll6lXI",
    fen: "rn1qk2r/ppp2ppp/1n2p3/4Pb2/1bPP4/2N1B3/PP4PP/R2QKBNR w KQkq - 2 9",
    score: 0.5,
  },
  {
    lichess: "https://lichess.org/oqbHT1Hp",
    fen: "4kb1r/pp3pp1/2p1pn1p/4P2P/1P6/2Pr2N1/P4PP1/R3K2R w KQk - 0 17",
    score: -3.7,
  },
  {
    lichess: "https://lichess.org/f6drBFq3",
    fen: "r1r2bk1/1bq2pp1/p1npp2p/3n4/3P4/2PB1NB1/1P1N1PPP/RQ2R1K1 w - - 6 18",
    score: 0.3,
  },
  {
    lichess: "https://lichess.org/2xRLdQMA",
    fen: "3r1rk1/2p1nppp/p3pq2/1p6/3P4/1PP1QN2/P4PPP/R3R1K1 w - - 3 20",
    score: 0.4,
  },
  {
    lichess: "https://lichess.org/HRUBQhKc",
    fen: "1r1q1rk1/1p2n1bp/p2pbpp1/2p1p3/4PP2/2PPBN1P/PP2Q1B1/1R3RK1 w - - 1 17",
    score: -0.7,
  },
  {
    lichess: "https://lichess.org/NoBYxhRD",
    fen: "r3n3/3b1pkp/1q4p1/1p1P4/1Pp1nQP1/r4NKP/2B2P2/3RR3 w - - 0 29",
    score: -1.2,
  },
  {
    lichess: "https://lichess.org/Qltdzbf7",
    fen: "2r3k1/1p6/p3r2p/6p1/3B4/P1P4P/1P4PK/R4n2 w - - 0 32",
    score: -3.9,
  },
  {
    lichess: "https://lichess.org/EcgRcw7d",
    fen: "r1bq1rk1/1pp1p1b1/p5pp/3Pp2n/2P3pP/2N1PN2/PPQ2P2/2KR1B1R w - - 0 14",
    score: 0.7,
  },
  {
    lichess: "https://lichess.org/8J2VUrMx",
    fen: "3r3r/pk2npp1/3Bb2p/4n3/2p5/5N2/R5PP/3K1B1R w - - 0 20",
    score: -7,
  },
  {
    lichess: "https://lichess.org/5habQ1ks",
    fen: "r4rk1/pb3ppp/1pnqpn2/8/1PBP4/P1N5/4NPPP/2RQ1RK1 w - - 0 15",
    score: -0.9,
  },
  {
    lichess: "https://lichess.org/MAX3pikS",
    fen: "2rr1bk1/3n1p1p/p1q2np1/2p5/1p3B2/1P3N2/1N2QPPP/2RR2K1 w - - 3 26",
    score: -4,
  },
  {
    lichess: "https://lichess.org/K3JE5q3y",
    fen: "rnb1k2r/ppp1ppbp/3qn1p1/8/2PP4/1P4P1/PB3P1P/RN1QKBNR w KQkq - 0 9",
    score: -2.5,
  },
  {
    lichess: "https://lichess.org/kZebDTV4",
    fen: "r1b2rk1/pp2ppbp/1q1p2p1/8/3n4/1PN2N1P/P3BPP1/R1BQK2R w KQ - 0 13",
    score: 3.4,
  },
  {
    lichess: "https://lichess.org/tz3CaDaV",
    fen: "5rk1/1b2b1pp/p5q1/1pp1B3/2P1N3/1P1P1Q2/P5PP/5RK1 w - - 5 23",
    score: 1.3,
  },
  {
    lichess: "https://lichess.org/pmHLo3OG",
    fen: "3r2k1/pBrq1pp1/Pp3bp1/3p4/1pP3P1/1P5P/4QP2/3R1K1R w - - 0 26",
    score: 0.6,
  },
  {
    lichess: "https://lichess.org/8uMMmJxZ",
    fen: "8/2pr4/5bk1/NpB1p1pp/2p1P3/2N4P/4K1P1/8 w - - 4 42",
    score: 1.3,
  },
  {
    lichess: "https://lichess.org/YBjNr8di",
    fen: "3qk1nr/3n1pb1/rpp1p1p1/p2pP2p/3P2P1/2N1BP1P/PPPQN3/2KR3R w k - 1 14",
    score: 3.4,
  },
  {
    lichess: "https://lichess.org/aMJleEiZ",
    fen: "4r3/5pk1/1p4p1/p1p3Q1/P2pq2P/5R2/1P3PK1/8 w - - 6 39",
    score: -4.6,
  },
  {
    lichess: "https://lichess.org/jUTh0qpp",
    fen: "r2q1rk1/1p2b1p1/p1n4p/3bpp2/8/3B1N1P/PPPB1PP1/R2QR1K1 w - f6 0 16",
    score: 1,
  },
  {
    lichess: "https://lichess.org/RDQLrX8k",
    fen: "2rr2k1/p3qppp/4pn2/N1pb4/3P4/4P1P1/PP2QP1P/R1B2RK1 w - - 5 16",
    score: -1,
  },
  {
    lichess: "https://lichess.org/kpuRPM2P",
    fen: "3r4/3nkppp/2p1p3/p3P3/1r3K2/1PN5/P1P3PP/3R1R2 w - - 3 26",
    score: -2.1,
  },
  {
    lichess: "https://lichess.org/06MKn1LD",
    fen: "r1bq1rk1/p3b1p1/2p4p/n2npp2/4N3/2NB4/PPPP1PPP/R1BQR1K1 w - f6 0 13",
    score: 0.4,
  },
  {
    lichess: "https://lichess.org/ALKC7ySg",
    fen: "1k1r4/R2nrp2/1p2p1p1/4P2p/1nPpN2P/3P1NP1/5PK1/4R3 w - - 1 30",
    score: 1.3,
  },
  {
    lichess: "https://lichess.org/LS8Ut41g",
    fen: "r4rk1/ppp3bp/2p1bp2/4p2Q/7N/1P1P4/P1P2PPP/q1B2RK1 w - - 0 13",
    score: -8.1,
  },
  {
    lichess: "https://lichess.org/iGKIQiVq",
    fen: "5rk1/pp1bq1pp/4p3/2ppP3/2Pn4/P2BQP2/1P3P1P/R4RK1 w - - 3 18",
    score: -2.1,
  },
  {
    lichess: "https://lichess.org/5JTAeImP",
    fen: "r3k2r/p1qnbppp/1pN5/3p4/Q2p4/6P1/PP2PP1P/R1B2RK1 w kq - 2 14",
    score: 2,
  },
  {
    lichess: "https://lichess.org/IQMQ9Vej",
    fen: "r1b1kb1r/pp2pp1p/3p4/nN6/4PB2/8/PP3PP1/R3KBN1 w Qkq - 0 12",
    score: 2.5,
  },
  {
    lichess: "https://lichess.org/ZpvXcVhz",
    fen: "4k3/ppq2p2/7Q/3r4/5p2/3Bn3/PPP3PP/1K5R w - - 1 26",
    score: 4,
  },
  {
    lichess: "https://lichess.org/g2cSeApA",
    fen: "r3k2r/2qnppb1/3p1npp/pbp5/Pp1PP2P/2P1BP1N/1P1Q1NP1/3R1RK1 w kq - 0 16",
    score: -1.3,
  },
  {
    lichess: "https://lichess.org/LY7vigBs",
    fen: "7k/p3r1pp/1pb2r2/2p5/P1B1pP2/1P6/5PPP/3R1RK1 w - - 0 25",
    score: 4.9,
  },
  {
    lichess: "https://lichess.org/AAvlZbEo",
    fen: "r2qr1k1/pp3pp1/2n2n1p/b2pNb2/3P4/1P2RB2/NBP2PPP/R2Q2K1 w - - 5 16",
    score: -0.1,
  },
  {
    lichess: "https://lichess.org/5rW2ph2m",
    fen: "rnbqkbnr/ppp1pppp/8/3p4/3P4/8/PPP1PPPP/RNBQKBNR w KQkq d6 0 2",
    score: 0.2,
  },
  {
    lichess: "https://lichess.org/thYPx2g0",
    fen: "1Bb4r/3pk1pp/p3pn2/2b2q2/1QP5/4PN2/4BPPP/R4RK1 w - - 1 23",
    score: 10.2,
  },
  {
    lichess: "https://lichess.org/A65Hq9hY",
    fen: "2rn1bnr/pp3kpp/2bp1p2/3N4/7q/2N5/PPP1BPPP/R1BQ1RK1 w - - 2 14",
    score: 10,
  },
  {
    lichess: "https://lichess.org/u5yPxB2z",
    fen: "r1b1r1k1/1p2qpb1/2pp2pp/2n5/p1P1N3/5PP1/PP1QB2P/R1N2R1K w - - 2 18",
    score: -7.5,
  },
  {
    lichess: "https://lichess.org/eMZovJ1T",
    fen: "r3k2r/1bq1b2p/p3Qp2/8/Np6/1P3P2/1PP3PP/2KR3R w kq - 1 19",
    score: 0,
  },
  {
    lichess: "https://lichess.org/qFOzAK79",
    fen: "2r3k1/2N2ppp/8/2R5/7n/5P1P/r4P1B/5RK1 w - - 1 26",
    score: 4.7,
  },
  {
    lichess: "https://lichess.org/ucuO5I8d",
    fen: "3R1n2/pp2qnbk/2p2p2/2P1p1p1/1Pb1P2p/2N2N1P/P4PPB/3Q2K1 w - - 2 25",
    score: 3.2,
  },
  {
    lichess: "https://lichess.org/KQEkPiJG",
    fen: "r2r2k1/5ppp/4p3/2R3P1/p2P4/5P2/5P2/R5K1 w - - 1 27",
    score: -3.4,
  },
  {
    lichess: "https://lichess.org/kQ7hGZUE",
    fen: "2k1b2r/1ppn1ppp/p3p3/8/r6P/3B1NK1/P1P2P1P/R6R w - - 0 21",
    score: -8.1,
  },
  {
    lichess: "https://lichess.org/D7ZJUafa",
    fen: "5rk1/5pbp/3Rp1p1/8/4p3/4B1P1/r1q2P1P/3Q1RK1 w - - 2 24",
    score: -1.7,
  },
  {
    lichess: "https://lichess.org/HlOCuTa1",
    fen: "4r3/1p1Rbp2/2p3kp/p1P3p1/2BB4/P1N4P/1P4P1/6K1 w - - 6 33",
    score: 12.5,
  },
  {
    lichess: "https://lichess.org/yqiFSRwA",
    fen: "r1b2rk1/pp2p1bp/6p1/5p2/4nn2/1P2BNP1/P4PBP/2RR2K1 w - - 0 20",
    score: 0.1,
  },
  {
    lichess: "https://lichess.org/WFpgzida",
    fen: "r1b1r1k1/pp4p1/7p/4p3/2P2PP1/7P/P1P5/R4RK1 w - - 0 19",
    score: -7.1,
  },
  {
    lichess: "https://lichess.org/CnEbaR42",
    fen: "8/1p1b3R/p3k1r1/3pPpb1/1P2nB2/P1P3P1/6K1/R7 w - - 4 34",
    score: -6.9,
  },
  {
    lichess: "https://lichess.org/YDRsRi9b",
    fen: "rb1q2k1/1p3ppp/5n2/pNPpr3/1P1Np3/P3P2P/4QPP1/R4RK1 w - - 4 22",
    score: 2.7,
  },
  {
    lichess: "https://lichess.org/IGA5N00f",
    fen: "r1bqnrk1/pp3pbp/4n1p1/3pp3/1P6/P1NPPNP1/1B3PBP/1R1Q1RK1 w - - 0 14",
    score: 0.7,
  },
  {
    lichess: "https://lichess.org/OEBWhOWg",
    fen: "6r1/2br3p/2N2k2/p2P1p2/R7/4P3/4KP1P/1R6 w - - 6 37",
    score: 4.9,
  },
  {
    lichess: "https://lichess.org/AKNKiK1S",
    fen: "1r1r2k1/1p1n1pp1/1P1qpn1p/p6P/3P4/5BN1/P3QPP1/1R1R2K1 w - - 1 27",
    score: 0.4,
  },
  {
    lichess: "https://lichess.org/eH4NgcXM",
    fen: "r4rk1/pp1bppbp/3p1np1/q3n3/3NP1P1/1BN1BP2/PPPQ3P/R3K2R w KQ - 1 12",
    score: 1,
  },
  {
    lichess: "https://lichess.org/Vujm4N9I",
    fen: "2kr4/ppp1qpp1/2nb1n2/8/Q1P4P/8/PP1NbPBP/R1B2RK1 w - - 0 13",
    score: 0,
  },
  {
    lichess: "https://lichess.org/IkFv5aEq",
    fen: "r5k1/2q1pp1p/3p1bp1/2p5/2PP4/4P1P1/P2Q1P1P/1R3RK1 w - - 0 29",
    score: 4.4,
  },
  {
    lichess: "https://lichess.org/3VXLK8lp",
    fen: "1q1rr3/1b1n1pk1/pp3npb/2pNp2p/P1P1P3/1P3P2/1BQNB1PP/1R1R2K1 w - - 3 20",
    score: 0.9,
  },
  {
    lichess: "https://lichess.org/AanTJMHW",
    fen: "3r2k1/1pp3pp/4qp2/1P2p3/2PrP3/1R2Q1P1/5PKP/2R5 w - - 3 26",
    score: 0,
  },
  {
    lichess: "https://lichess.org/AhlWXATk",
    fen: "r4rk1/pp2ppb1/2p2n2/3qNpp1/3P4/P1P5/5K2/R1BQ3R w - - 2 24",
    score: -7.8,
  },
  {
    lichess: "https://lichess.org/zPcVTgT1",
    fen: "1r1r2k1/p7/2q1p2p/2p1Ppp1/4p3/1PQ1P3/P4PPP/2RR2K1 w - - 6 26",
    score: 2,
  },
  {
    lichess: "https://lichess.org/uuVLOH5r",
    fen: "r3kbnr/4p1pp/p1p1p3/q1Pp4/4bPP1/2N2N2/PPP4P/R1BQ1RK1 w kq - 0 13",
    score: 5.3,
  },
  {
    lichess: "https://lichess.org/UsAYU1sm",
    fen: "r2qk2r/3pb1pp/bnn1p3/p3Pp2/1pP5/5NP1/PP2QPBP/RNBR2K1 w kq - 1 14",
    score: 1.1,
  },
  {
    lichess: "https://lichess.org/red8YeUi",
    fen: "5rk1/pp1q1ppp/4p1b1/3pPn2/2rP1B2/b1N2N1P/1P1R1PP1/3Q1RK1 w - - 0 18",
    score: -1.9,
  },
  {
    lichess: "https://lichess.org/oJh10Unn",
    fen: "4r1k1/1p3pp1/p1n2qp1/2R5/1P3B2/P2QPP2/6PP/6K1 w - - 1 29",
    score: 1.5,
  },
  {
    lichess: "https://lichess.org/CHx9mc3v",
    fen: "r2q1rk1/4bppb/1n2p2p/n2pP3/2pP1B2/2P2N1P/2NQBPP1/R3R1K1 w - - 1 20",
    score: -3.4,
  },
  {
    lichess: "https://lichess.org/sQ0IB7wJ",
    fen: "r1bq2k1/ppp1nrp1/2np3p/7Q/2BPP3/8/PP1N1PPP/R3K2R w KQ - 0 12",
    score: 6.6,
  },
  {
    lichess: "https://lichess.org/e2RJtFYX",
    fen: "2kr3r/pppb1ppp/4n3/4R3/3B1p2/3B4/q1P2QPP/7K w - - 0 22",
    score: -10.5,
  },
  {
    lichess: "https://lichess.org/9X7nZOjn",
    fen: "2bqr1k1/r2n1pbp/pp1p1np1/2pP4/P1P2P2/2NB1QNP/1P1B2P1/R4RK1 w - - 5 16",
    score: 1.3,
  },
  {
    lichess: "https://lichess.org/vTiyjSpd",
    fen: "r2r2k1/p4p1p/1p3p2/3p4/8/1Pb1PB2/P4PPP/3RR1K1 w - - 2 22",
    score: 2,
  },
  {
    lichess: "https://lichess.org/MYWAMiYi",
    fen: "r2q1rk1/pp1nppbp/1n4p1/3P4/P1p1P1b1/1QN1BN2/1P2BPPP/R3K2R w KQ - 0 13",
    score: 1.3,
  },
  {
    lichess: "https://lichess.org/BP4qkiUV",
    fen: "3B4/5k2/2p3p1/1p3p2/2bP1K1P/P1P2P2/1P6/8 w - - 7 41",
    score: 7.1,
  },
  {
    lichess: "https://lichess.org/sQJkwUiW",
    fen: "r4rk1/1b1q3p/p1npp1p1/1p1nPp1P/3P4/P2B1N2/1P2QPP1/RN1R2K1 w - - 0 19",
    score: 0.1,
  },
  {
    lichess: "https://lichess.org/vRfrxZFO",
    fen: "r3kb1r/1p6/p1n2pn1/2p1p3/2PpP1p1/P2P1NPq/1P1BQ2P/R3RNK1 w kq - 0 21",
    score: -2.6,
  },
  {
    lichess: "https://lichess.org/hXTrIDSE",
    fen: "r5k1/5ppp/5nb1/3p4/1RpP1BP1/2P2P1P/5K2/5B2 w - - 3 27",
    score: 1.2,
  },
  {
    lichess: "https://lichess.org/bn5rLOz9",
    fen: "1k1r3r/1pp3pp/p1n2p2/4p3/Q3N1P1/P2PP2P/qP2P3/2KR3R w - - 2 20",
    score: 0.1,
  },
  {
    lichess: "https://lichess.org/L5GLOb4h",
    fen: "r4rk1/p4qp1/1p1p3p/2p1pb1n/2PPQ2P/2P1P1BN/P4PP1/2R2RK1 w - - 1 24",
    score: -0.9,
  },
  {
    lichess: "https://lichess.org/nkUt45j5",
    fen: "2k2r2/1p6/p4rp1/3Pp2p/1PP1P3/8/6P1/R2R2K1 w - h6 0 30",
    score: 0.8,
  },
  {
    lichess: "https://lichess.org/VKnu8quG",
    fen: "rnbq1rk1/1pp3pp/3ppb2/p4p2/2PP1P2/2N2N2/PPQ1BPPP/2KR3R w - a6 0 11",
    score: 1.6,
  },
  {
    lichess: "https://lichess.org/2lEEN8SW",
    fen: "r5k1/pq1n2bp/1p4p1/1Q1p3n/2pPp3/2P1P2P/PP1N2PB/R4RK1 w - - 0 21",
    score: 5.2,
  },
  {
    lichess: "https://lichess.org/WCAj9pWO",
    fen: "5rk1/pp3pp1/2n1bn1p/2Np4/3q4/3B1P2/P1P3PP/R2QR1K1 w - - 2 22",
    score: -8,
  },
  {
    lichess: "https://lichess.org/qW6YjFQd",
    fen: "r4rk1/2nqb1p1/4pn1p/1bpp3P/p4BN1/2PP1NP1/1P1Q1PB1/R3R1K1 w - - 0 21",
    score: 4,
  },
  {
    lichess: "https://lichess.org/dixlAXBG",
    fen: "rn1q2k1/ppp2ppp/3b4/3P1b2/4r3/3QBN2/PPP2PPP/R3KB1R w KQ - 2 11",
    score: 1.3,
  },
  {
    lichess: "https://lichess.org/icQZl3it",
    fen: "2kr1b2/p2n1p1r/b1p2npp/qp2p3/4P3/PBN1BN2/1PP2P1P/1K1RQ1R1 w - - 1 16",
    score: 0.5,
  },
  {
    lichess: "https://lichess.org/4TxItGUR",
    fen: "r5k1/p3nppp/b1q1p3/8/N1p5/1P2PN2/P2Q1PPP/2R3K1 w - - 0 22",
    score: 1.8,
  },
  {
    lichess: "https://lichess.org/o0wvXBnH",
    fen: "5r2/p1pk2p1/1p6/4p1r1/3bB2p/1P1P2P1/P4PKP/2R2R2 w - - 3 27",
    score: 0.5,
  },
  {
    lichess: "https://lichess.org/whqnXv6R",
    fen: "r1bq1rk1/pp3pb1/2np2p1/4p3/3P4/2PB1N2/P1P2PP1/R1BQK2R w KQ - 0 12",
    score: 0,
  },
  {
    lichess: "https://lichess.org/z9BTgjjb",
    fen: "r4rk1/pp1qbppp/3pbn2/2p5/3N1B2/2PB1P2/PPPQ2PP/2KR3R w - c6 0 13",
    score: 2.4,
  },
  {
    lichess: "https://lichess.org/RLsrDoSQ",
    fen: "r3r1k1/pp1q2p1/1b3p2/3pn2p/3N4/1NP3P1/PP2RPP1/3RQ1K1 w - h6 0 21",
    score: -0.1,
  },
  {
    lichess: "https://lichess.org/llmxFaej",
    fen: "r3kb1r/ppp1pppp/5n2/q2P4/1nB3b1/2N2N2/PPP2PPP/R1BQK2R w KQkq - 3 8",
    score: 1.5,
  },
  {
    lichess: "https://lichess.org/fE7lK0VO",
    fen: "B2q1rk1/p4ppp/np6/8/1b1P1P2/4P3/PP4PP/R1B2QK1 w - - 1 17",
    score: 7.1,
  },
  {
    lichess: "https://lichess.org/Hs7AnBao",
    fen: "r1b2rk1/1pq1ppbp/2p2np1/p1p5/4P3/3P1N1P/PPPN1PP1/1RBQ1RK1 w - a6 0 10",
    score: 0.4,
  },
  {
    lichess: "https://lichess.org/ukidowa4",
    fen: "r3r1k1/p1q2p1p/2p3p1/2Qn4/4N3/7P/PP3PP1/R4RK1 w - - 1 21",
    score: 0.3,
  },
  {
    lichess: "https://lichess.org/7eXc9Y8P",
    fen: "2rq1rk1/1p1bppbp/pn1p1np1/8/2PNP3/1BN4P/PP3PP1/R1BQR1K1 w - - 5 13",
    score: -0.7,
  },
  {
    lichess: "https://lichess.org/XNaxF3yH",
    fen: "r4rk1/1p4p1/1b2q2p/2ppPp1Q/p1nP1P2/2P3PB/P6P/R1BR2K1 w - c6 0 24",
    score: 2.6,
  },
  {
    lichess: "https://lichess.org/7yiXa8Z6",
    fen: "r1bq1rk1/pp1nbppp/3p1n2/2pPp3/2P5/2N2NP1/PP2PPBP/R1BQK2R w KQ - 5 8",
    score: 1.3,
  },
  {
    lichess: "https://lichess.org/MOwgw01y",
    fen: "2rr2k1/3q1pb1/n3pnpp/p1pp4/1pP5/PP1PPBN1/1BQ2PPP/1R2R1K1 w - - 0 24",
    score: -0.2,
  },
  {
    lichess: "https://lichess.org/EHKvUD6L",
    fen: "r1b2rk1/1pp2pb1/p3q2p/3np2P/4N3/N1PP2Q1/PP3PP1/R1B1K2R w KQ - 2 16",
    score: -1.5,
  },
  {
    lichess: "https://lichess.org/CYDayzwl",
    fen: "2rq1rk1/pp1bppbp/3p1np1/4n3/3NP1P1/1BN1BP2/PPPQ3P/R3K2R w KQ - 5 12",
    score: 0.6,
  },
  {
    lichess: "https://lichess.org/MeLeX9hy",
    fen: "r1r2b2/1p1n1q1k/2pPbpp1/pP2p2p/4P2B/Q1N2N1P/P3BPP1/1R4K1 w - - 3 23",
    score: -2.9,
  },
  {
    lichess: "https://lichess.org/GgcCJRwG",
    fen: "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1",
    score: 0.6,
  },
  {
    lichess: "https://lichess.org/QV6PlwKo",
    fen: "r3r1k1/p6p/1np3p1/1p3p2/3q4/2N2Q2/P4PPP/RR4K1 w - - 0 22",
    score: -2.8,
  },
  {
    lichess: "https://lichess.org/DS9GG8aa",
    fen: "r4rk1/3b3p/Pn1p1qp1/1P1Ppp2/4Pn2/2NB1P2/3QN1PP/1R3RK1 w - - 2 21",
    score: 8.2,
  },
  {
    lichess: "https://lichess.org/vrjqQVg8",
    fen: "3rr1k1/ppp1np1p/2n3pq/2Pp3P/3P4/2NNP3/PP2Q3/1K3RR1 w - - 0 25",
    score: 3.8,
  },
  {
    lichess: "https://lichess.org/NsGuTvuu",
    fen: "r2q1rk1/5pb1/2n3p1/pp1N2Np/3n1PbP/1B2B3/PP1Q2P1/R4RK1 w - a6 0 17",
    score: -4.8,
  },
  {
    lichess: "https://lichess.org/WC1aVg7t",
    fen: "r1bq1rk1/pp2ppbp/n2p1np1/2pP4/5B2/2P1PN2/PP2BPPP/RN1QK2R w KQ - 3 8",
    score: -1,
  },
  {
    lichess: "https://lichess.org/T0U6CZMs",
    fen: "r2q1rk1/pp2bpp1/2n3p1/3B4/3P4/1Q4P1/P3PP1P/R1B2RK1 w - - 3 16",
    score: 4.3,
  },
  {
    lichess: "https://lichess.org/aKUaQxEV",
    fen: "3r4/pk1q4/1p6/2P1p3/Q1Pn1p2/P2r1Pp1/8/KR2R1B1 w - - 3 34",
    score: -8.3,
  },
  {
    lichess: "https://lichess.org/riyVBnoW",
    fen: "1kbr4/p1p5/1p3b2/1P1Pqp2/P1P1p1p1/8/K2Q1PP1/3RRB1N w - - 2 29",
    score: 5.9,
  },
  {
    lichess: "https://lichess.org/YetKt2dH",
    fen: "5rkb/R6p/1R3pp1/4pb2/N7/r5BP/5PPK/8 w - - 3 37",
    score: -0.9,
  },
  {
    lichess: "https://lichess.org/RVWmqhOo",
    fen: "6k1/5p1p/6p1/3N3n/8/p5P1/Pb3PBP/1N4K1 w - - 2 28",
    score: 7,
  },
  {
    lichess: "https://lichess.org/EJL0cMLa",
    fen: "r1b2rk1/pp2ppbp/n5p1/1N6/3N4/2P1Q3/qP3PPP/2KR1B1R w - - 0 13",
    score: -6.3,
  },
  {
    lichess: "https://lichess.org/DIvMEVyU",
    fen: "5rk1/p4pp1/4p2p/4P2P/2pPR3/2P1P3/P4R1P/1r4K1 w - - 3 29",
    score: 0,
  },
  {
    lichess: "https://lichess.org/CNdNXzDa",
    fen: "r2k3r/4ppbp/3p2p1/1Bp5/1n2b3/5N2/PP1N1PPP/R1B1K2R w KQ - 1 19",
    score: 4.2,
  },
  {
    lichess: "https://lichess.org/nilDxQWt",
    fen: "r3k2r/pp1bbppp/4p2n/3pP3/3P1P2/2N2N2/PP2K1PP/R1B4R w kq - 1 14",
    score: 0,
  },
  {
    lichess: "https://lichess.org/XclqphWe",
    fen: "2rqkb1r/pp1bpppp/2np1n2/6B1/3NP3/2N5/PPPQ1PPP/R3KB1R w KQk - 4 8",
    score: 0.6,
  },
  {
    lichess: "https://lichess.org/pUN3gtAi",
    fen: "2kr3r/5pp1/p3p3/1p1qP3/3p1Pnp/P2Q4/1PP3PP/3NRR1K w - - 0 22",
    score: -0.1,
  },
  {
    lichess: "https://lichess.org/nJAF3Wth",
    fen: "r4rk1/1pp1q2p/2n2b2/p3pb2/4Nnp1/PP1P1N2/1BQ1BPPP/R3R1K1 w - - 0 17",
    score: -1.1,
  },
  {
    lichess: "https://lichess.org/6PlEDdeD",
    fen: "3q2n1/1bp3k1/1p3r1p/3pN3/r2P4/P7/NPPQ1PP1/2KR3R w - - 0 22",
    score: 9.8,
  },
  {
    lichess: "https://lichess.org/AZbVJfUF",
    fen: "3rr3/2k2pp1/3p1n2/2pP3p/1p3P2/6P1/1PP3BP/2KRR3 w - - 1 29",
    score: -0.6,
  },
  {
    lichess: "https://lichess.org/LVJK5HcQ",
    fen: "1r1q1rk1/2n1bppp/1n1p4/p2PpNP1/1p5P/1P2B3/P1PQ1PB1/R3K2R w KQ - 1 19",
    score: 2.7,
  },
  {
    lichess: "https://lichess.org/7EqzEfUc",
    fen: "rn2kb1r/pp3p2/2p1p2p/6p1/3PN3/6PP/PPP3K1/R1B4R w kq - 0 14",
    score: -0.8,
  },
  {
    lichess: "https://lichess.org/HeZOvCjx",
    fen: "r3r1k1/4ppbp/p1np2p1/3q4/1p1Pb2P/4BPN1/PP1Q2P1/1K1R3R w - - 0 18",
    score: -1.2,
  },
  {
    lichess: "https://lichess.org/xaBgAbXE",
    fen: "r1b2rk1/pp3ppp/1n3q2/4p3/3pnNQ1/1B6/PPP2PPP/RN3RK1 w - - 0 17",
    score: -8.4,
  },
  {
    lichess: "https://lichess.org/00nDf2EM",
    fen: "2r2rk1/3qb1pp/p1p1bp2/1p3p2/Pn1P4/2N1PN2/1P2BPPP/R1Q2RK1 w - - 0 17",
    score: 0,
  },
  {
    lichess: "https://lichess.org/OviUzS3o",
    fen: "rn2r1k1/1pq2pbp/p2p2p1/2pP4/P3nBb1/1QN2NP1/1P2PPBP/R3R1K1 w - - 5 14",
    score: 3.8,
  },
  {
    lichess: "https://lichess.org/Oaiy4bIq",
    fen: "8/2p5/1p3kp1/2p4p/P3K3/2P3P1/8/8 w - - 1 40",
    score: -7.5,
  },
  {
    lichess: "https://lichess.org/ksyHWEss",
    fen: "2krr3/ppq3p1/2pbpn1p/5p1P/2PP4/2B2NP1/PP2QP2/2KR3R w - - 2 19",
    score: 1.1,
  },
  {
    lichess: "https://lichess.org/YOFTL3X3",
    fen: "6k1/1p3p1p/p2n1qp1/P1pP4/Q4P2/2b2BN1/6PP/4rR1K w - - 0 32",
    score: -6.9,
  },
  {
    lichess: "https://lichess.org/AAahtLIk",
    fen: "r4rk1/6pp/4p3/3bNp2/1p6/1PR2PP1/4P2P/2R3K1 w - - 0 27",
    score: 0.5,
  },
  {
    lichess: "https://lichess.org/7eH2yOxU",
    fen: "r2q1rk1/2p1n1b1/2bpp1pp/p1p5/2P1PP2/3B1N2/PPQ1N1PP/3R1RK1 w - - 0 17",
    score: 0.4,
  },
  {
    lichess: "https://lichess.org/N1UPhoL8",
    fen: "r3k2r/1pp2p2/p2pq1p1/2b4n/4PB1p/P1NP3P/1PP1Q1PK/R4R2 w kq - 1 19",
    score: 0,
  },
  {
    lichess: "https://lichess.org/kGlwcHht",
    fen: "3r1rk1/1b1nqppp/pp6/3np3/8/5P2/PPPNBBPP/R2Q1RK1 w - - 2 16",
    score: -0.6,
  },
  {
    lichess: "https://lichess.org/nO9drcS7",
    fen: "r1bq1b1r/pp3kpp/4p1p1/2p1n3/4NNQ1/3BP3/P1P2PP1/R3K2R w KQ - 14 17",
    score: 0,
  },
  {
    lichess: "https://lichess.org/5VAjCcZk",
    fen: "rR2r1k1/p4pbp/2pB4/2Pp4/4p3/4P2P/P4PP1/1R4K1 w - - 0 23",
    score: 2.6,
  },
  {
    lichess: "https://lichess.org/vEFLI8by",
    fen: "3r4/1r1bbk2/p4pp1/3P3p/2p5/2N3P1/PPB2P1P/2BR2K1 w - - 1 33",
    score: -1.8,
  },
  {
    lichess: "https://lichess.org/UnKIy5kE",
    fen: "1rr3k1/5pb1/p2q2p1/2p1p3/2Q4p/P1B1P1nP/3P1NP1/2R1R1K1 w - - 7 29",
    score: 0.1,
  },
  {
    lichess: "https://lichess.org/uxIv58IF",
    fen: "r4rk1/3bqp2/p2p2p1/1ppP1PNp/3bPBnP/5n2/PPQ1B3/2KR1R2 w - - 0 19",
    score: -1.9,
  },
  {
    lichess: "https://lichess.org/e5SMm4oK",
    fen: "2r1r1k1/1b3ppp/2nq1n2/p7/PpRp4/1P1P1N2/1B2BPPP/3QR1K1 w - - 0 22",
    score: -0.2,
  },
  {
    lichess: "https://lichess.org/dYRpJxGc",
    fen: "r5k1/p2qbrpp/Ppn1pnp1/2p5/6PP/2NP4/1PP2PB1/R1BQ1K1R w - - 1 17",
    score: -1.4,
  },
  {
    lichess: "https://lichess.org/7GVxcHUs",
    fen: "2r1r1k1/5ppp/2p1nb2/qp1p1B2/p2P2P1/4P2P/PPQ1NP2/1KR4R w - - 0 20",
    score: 1.6,
  },
  {
    lichess: "https://lichess.org/UO1I70Ue",
    fen: "r6r/p1p2p1p/1pPbb2k/3Np2P/2B5/4P1N1/PP3P2/2KR3R w - - 1 22",
    score: 9.6,
  },
  {
    lichess: "https://lichess.org/iwrDvWQN",
    fen: "2r2rk1/1bqnbppp/ppn1p3/4P3/2P5/1NNB4/PP1BQ1PP/4RR1K w - - 1 17",
    score: -1,
  },
  {
    lichess: "https://lichess.org/ILyFGCgD",
    fen: "r1bq1k2/1p1n3p/p2p2p1/2pPp1b1/P1P1Pp2/2N3P1/1P1Q1PBP/R4RK1 w - - 0 16",
    score: 3,
  },
  {
    lichess: "https://lichess.org/BdrwxG0F",
    fen: "2k5/ppp3p1/5b1p/1P5P/P3R3/r4P2/2K5/8 w - - 2 36",
    score: -9.5,
  },
  {
    lichess: "https://lichess.org/RrQdVxiI",
    fen: "rn1qkb1r/pp3ppp/2p1pn2/8/3P4/2N1BQ1P/PPP2PP1/R3KB1R w KQkq - 0 9",
    score: 1.1,
  },
  {
    lichess: "https://lichess.org/Jct3lr3f",
    fen: "5r1k/pQp2rqp/1b1p3p/1B2n3/8/1N6/PPP3P1/1K1R1R2 w - - 7 25",
    score: -0.6,
  },
  {
    lichess: "https://lichess.org/FELBw0xr",
    fen: "4rqk1/pp3p1p/2n2BpQ/3p1b2/8/5N2/P2NrPPP/5RK1 w - - 2 26",
    score: -7.4,
  },
  {
    lichess: "https://lichess.org/rcJzfvnx",
    fen: "r4k1r/5ppp/p1n2n2/1pq5/8/1B6/PPP1QRPP/RN4K1 w - - 1 19",
    score: -0.1,
  },
  {
    lichess: "https://lichess.org/f5vAXRHI",
    fen: "2rr2k1/1Q5p/4p1p1/pp2P1P1/2pP3P/2P5/6P1/6K1 w - - 2 30",
    score: 1,
  },
  {
    lichess: "https://lichess.org/OVzBiZ7N",
    fen: "4kb1r/1pq1pppp/p1r5/8/Q7/2P1BP2/PP3P1P/3RK2R w Kk - 2 14",
    score: 0.5,
  },
  {
    lichess: "https://lichess.org/eddqxdJq",
    fen: "3r1rk1/2q1bppp/p1b1pn2/1ppp1P2/2P1P3/3PNN2/PP1B2PP/R3QRK1 w - - 0 15",
    score: 5.3,
  },
  {
    lichess: "https://lichess.org/9FRwTYGQ",
    fen: "r5k1/1b4pp/pqp1p1r1/1p1nPpB1/P1p5/6P1/1PQ1PPBP/R2R2K1 w - - 1 21",
    score: -0.8,
  },
  {
    lichess: "https://lichess.org/Y716XH7Z",
    fen: "r4rk1/1p2qppp/p2p1n2/4p3/2B1P3/8/PP2QPPP/R2R2K1 w - - 1 20",
    score: -1.3,
  },
  {
    lichess: "https://lichess.org/YJiDPQij",
    fen: "r1rq2k1/3nbppp/b3p3/2ppP1B1/pp1n2NP/P2P1NP1/1PP1QPB1/R3R1K1 w - - 2 18",
    score: 1.1,
  },
  {
    lichess: "https://lichess.org/pvMtOduW",
    fen: "4k2r/r1pqnpp1/pp2p2p/3p4/3P2P1/2P2P2/PP1Q1PP1/RN2K2R w KQk - 0 14",
    score: 0.4,
  },
  {
    lichess: "https://lichess.org/PbOtQSb8",
    fen: "4k3/p6p/1p3pp1/3P4/5N2/P1r1P3/n4PPP/3R2K1 w - - 0 28",
    score: 1.7,
  },
  {
    lichess: "https://lichess.org/VlqiJjVg",
    fen: "4rk2/5p2/2R4p/3N3P/3bPPK1/2p3P1/8/8 w - - 1 38",
    score: 7.4,
  },
  {
    lichess: "https://lichess.org/J0fbfVKl",
    fen: "3qr1k1/1br1bpp1/1p1p2n1/p2Pp2p/4P2P/PP1Q2PB/1B1N1P1K/3RR3 w - - 1 25",
    score: 2.7,
  },
  {
    lichess: "https://lichess.org/rkrCwhPF",
    fen: "3rr1k1/pp6/2n1b2p/4qpp1/4p3/2N1P3/PPQ1NPPP/3R1RK1 w - g6 0 19",
    score: 0.3,
  },
  {
    lichess: "https://lichess.org/DPhgq6qu",
    fen: "8/1p6/4k3/P7/2p1PpP1/2B1K3/P7/3b4 w - - 0 37",
    score: 2.2,
  },
  {
    lichess: "https://lichess.org/Ac4Js6mT",
    fen: "2r3k1/p2q1ppp/1p2p1n1/3p4/2bP3P/P1Q1B1P1/1P3P2/2RR2K1 w - - 8 23",
    score: 2.4,
  },
  {
    lichess: "https://lichess.org/qct7579P",
    fen: "r4rk1/2pn4/1p1p2qb/p2Pp3/2P1N2p/1P3P2/P1Q3PB/2R2R1K w - - 1 26",
    score: -1,
  },
  {
    lichess: "https://lichess.org/ywtJhgue",
    fen: "2r1k1r1/pp3p1p/q3pp2/2Pp4/8/2PnP3/P2NKPPP/RQ4NR w - - 3 16",
    score: 8.5,
  },
  {
    lichess: "https://lichess.org/MQF4u34W",
    fen: "1r2n2k/p3P1bp/bq3pp1/1Np1p3/P1Q1P3/7P/1P1B1PP1/R3R1K1 w - - 2 21",
    score: 9.6,
  },
  {
    lichess: "https://lichess.org/HCy2xFTX",
    fen: "r1bq1r2/ppp1n1k1/3p2pp/3n4/4PQ1P/1NN5/PPP1BP2/R3K2R w KQ - 0 17",
    score: 0.4,
  },
  {
    lichess: "https://lichess.org/9fuUt6Yw",
    fen: "8/4k3/1n1p2p1/3Pb2p/1P2PpP1/p2B3P/N3K3/8 w - - 3 38",
    score: -2.5,
  },
  {
    lichess: "https://lichess.org/sBL4RTPS",
    fen: "1r1q4/5rkp/8/3Ppp2/1p3p2/5N2/1P3PPP/n2QR2K w - - 0 27",
    score: -0.9,
  },
  {
    lichess: "https://lichess.org/l4bVNq7V",
    fen: "6rk/2p1qr1p/1p1p1n2/p2Pp1p1/2P1p3/1P2P2P/PBQ1RPP1/2R3K1 w - - 4 25",
    score: -2.3,
  },
  {
    lichess: "https://lichess.org/kvDvP5nB",
    fen: "r4rk1/5ppp/1p2p3/3n4/1q1QN3/5P2/P4P1P/2R1K1R1 w - - 4 23",
    score: -6.1,
  },
  {
    lichess: "https://lichess.org/wUeSQE3N",
    fen: "3n4/3k1pb1/p2p2p1/Np1Pp1P1/1P2P2K/P4P2/5N2/8 w - - 5 38",
    score: 0.9,
  },
  {
    lichess: "https://lichess.org/3cQQnEAM",
    fen: "r3r1k1/p1p3p1/1bp2q1p/3p2N1/6Q1/7P/PP3pP1/R4R1K w - - 0 21",
    score: -8.8,
  },
  {
    lichess: "https://lichess.org/iAf8OvtU",
    fen: "1r1qk2r/ppp2ppp/4b3/3pP3/5B2/3B4/PQP3PP/5R1K w k - 3 15",
    score: -4.1,
  },
  {
    lichess: "https://lichess.org/zgbampmm",
    fen: "2bk4/1p6/p2r4/4R3/8/2N5/PPK5/8 w - - 2 39",
    score: 0.1,
  },
  {
    lichess: "https://lichess.org/twBb0U9U",
    fen: "rn2kbnr/pp3ppp/1q6/2ppP3/2p5/P4N2/1P3PPP/RNBQK2R w KQkq - 0 10",
    score: 0.5,
  },
  {
    lichess: "https://lichess.org/GgSfFQlH",
    fen: "rnb1k2r/pp2ppbp/5np1/2qp4/8/1PN1PN2/PBP2PPP/R2QKB1R w KQkq - 0 8",
    score: 1.2,
  },
  {
    lichess: "https://lichess.org/2ejY3SNt",
    fen: "2b1r1k1/1p1n1p2/2pp2p1/2n4p/2PBP3/1q3PPP/N1Q3B1/R5K1 w - - 0 23",
    score: -2.8,
  },
  {
    lichess: "https://lichess.org/J8Lc3jyy",
    fen: "r2q1r1k/1p3p1p/p2p1np1/2pP1Pb1/P3P3/1P1B1QNP/2P2P2/R3K1R1 w Q - 3 22",
    score: 0.4,
  },
  {
    lichess: "https://lichess.org/ioL4F4Pt",
    fen: "5bk1/P4p2/6p1/7p/5p2/4qP2/6PP/R6K w - h6 0 32",
    score: 0.2,
  },
  {
    lichess: "https://lichess.org/C2hCM9oK",
    fen: "8/R4p2/5k2/1p4pp/1Pb2K2/6P1/7P/8 w - - 0 29",
    score: 5.8,
  },
  {
    lichess: "https://lichess.org/3Af9cIiG",
    fen: "r1b1k2r/p2p1ppp/1pn1p3/8/1b1Pn2B/1P2PN2/1P1N1PPP/R3KB1R w KQkq - 0 11",
    score: -0.5,
  },
  {
    lichess: "https://lichess.org/YsS3lrvl",
    fen: "r7/1pn1k1p1/r1p1ppp1/P7/3PP3/8/1P1B1PPP/R1R2K2 w - - 3 23",
    score: 2.8,
  },
  {
    lichess: "https://lichess.org/7krZl8Ox",
    fen: "3r1rk1/1b3pp1/pq2p3/2bn2Pp/1p1N1PnP/8/PPPQNBB1/K2RR3 w - - 1 21",
    score: -2.9,
  },
  {
    lichess: "https://lichess.org/dDftYM38",
    fen: "r1r2bk1/2q2p1p/p2p2p1/3bp1P1/1p2PP1Q/1P2B1R1/1PPR3P/2K5 w - - 0 24",
    score: -1.9,
  },
  {
    lichess: "https://lichess.org/OToVWdmU",
    fen: "1k1n3r/1p6/p3p1p1/2npP1P1/3Q4/P4q1p/1PP2P1R/1K5R w - - 0 26",
    score: 5.3,
  },
  {
    lichess: "https://lichess.org/1HF2YU1u",
    fen: "3r2k1/1p2b1p1/1pn5/4p3/2P1QpP1/2P5/Pq1B1P1P/2R1K2R w K - 2 26",
    score: 1.5,
  },
  {
    lichess: "https://lichess.org/HLc59YUm",
    fen: "2rr2k1/pp3pp1/4p3/7p/3P2nP/2N2QP1/Pq3P2/R2R2K1 w - - 2 21",
    score: -3.3,
  },
  {
    lichess: "https://lichess.org/Zjs70ze8",
    fen: "4r3/1pk2p2/2b3pp/1pP5/6P1/1N2PP1P/4K3/2R5 w - - 1 39",
    score: 0,
  },
  {
    lichess: "https://lichess.org/PhcgsLDl",
    fen: "1r2r3/p2bqpk1/6pp/2pPp3/1pN1P3/8/PPQ2PPP/2R1R1K1 w - - 2 24",
    score: 2.4,
  },
  {
    lichess: "https://lichess.org/HdJeRYBd",
    fen: "r1bq1rk1/p3bppp/1p1pp3/n3P3/3P4/2NR1N2/PP2QPPP/R1B3K1 w - - 0 14",
    score: 0.5,
  },
  {
    lichess: "https://lichess.org/ClwCMHi9",
    fen: "2bq1b1r/r3n1kp/p2n1pp1/1p1p4/3P1B2/1PNB1N1P/P3RPP1/2RQ2K1 w - - 1 18",
    score: 2.8,
  },
  {
    lichess: "https://lichess.org/suG4r9iM",
    fen: "r2q2k1/1pp2ppp/pnn1rb2/4p3/P7/N1PP1N1P/1P3PP1/R1BQR1K1 w - - 0 14",
    score: -0.2,
  },
  {
    lichess: "https://lichess.org/xJ03LALo",
    fen: "rn1qrbk1/1b3pp1/1pp2n1p/p2pN1B1/3PP3/2N3P1/PP3PBP/2RQ1RK1 w - - 0 14",
    score: 2.7,
  },
  {
    lichess: "https://lichess.org/2eAF8JtU",
    fen: "rn2kbnr/pp2pppp/2pqP1b1/3p4/3N4/8/PPPP1PPP/RNBQKB1R w KQkq - 1 6",
    score: -0.4,
  },
  {
    lichess: "https://lichess.org/59lHLIpl",
    fen: "3r4/ppk5/6p1/3Pnp1r/3B2n1/1B3PKp/PP6/R4R2 w - - 2 25",
    score: 5.6,
  },
  {
    lichess: "https://lichess.org/uwgfbetx",
    fen: "8/3r4/p2p1kp1/1ppP4/4Pn2/6R1/PPPKr3/4R3 w - - 0 37",
    score: -1,
  },
  {
    lichess: "https://lichess.org/hLjikjuR",
    fen: "r2qk2r/1b2bppp/2p1p3/np2P3/3P4/2P2N2/2BB1PPP/RQ3RK1 w kq - 0 17",
    score: 1.1,
  },
  {
    lichess: "https://lichess.org/YxY8tZ7S",
    fen: "1B6/5p1p/r4kp1/P3p3/4Pb2/5P2/4KP1P/R7 w - - 1 28",
    score: 3,
  },
  {
    lichess: "https://lichess.org/KHeWE0Sn",
    fen: "r3k2r/1p2bppp/pqn1p3/3p4/1P1P1B2/P1n2N2/2P1BPPP/R2Q1RK1 w kq - 1 14",
    score: -0.9,
  },
  {
    lichess: "https://lichess.org/faYUnuuk",
    fen: "7k/pp1bq1rp/1n6/3p3N/3Q2P1/1P2p2P/P7/5R1K w - - 2 37",
    score: 5.5,
  },
  {
    lichess: "https://lichess.org/nzR9eOO4",
    fen: "3r1r1k/pp2qpp1/4pn2/8/8/1QN4P/PP3PP1/R4RK1 w - - 1 19",
    score: 0,
  },
  {
    lichess: "https://lichess.org/oPMlcQLu",
    fen: "r2q1rk1/bpp1nppb/p2p1n1p/3Pp3/2P4N/2N1P1PP/PP3PB1/R1BQ1RK1 w - - 3 13",
    score: -0.3,
  },
  {
    lichess: "https://lichess.org/pLB5tuzb",
    fen: "r1b1k3/ppq1p2p/5rp1/2p5/2B2P2/3P4/PPP1Q1PP/R3R1K1 w q - 0 20",
    score: 5.9,
  },
  {
    lichess: "https://lichess.org/WJJcgjJU",
    fen: "2r2rk1/pp1qb1pp/2n1pn2/3p4/8/1PN3P1/PB2PPBP/2RQ1RK1 w - - 2 14",
    score: 1.3,
  },
  {
    lichess: "https://lichess.org/03PIQUyy",
    fen: "8/6pk/4r2p/3R2p1/4p3/4P1P1/3r1PKP/8 w - - 0 29",
    score: 0.2,
  },
  {
    lichess: "https://lichess.org/W1l81Pga",
    fen: "r1bq1rk1/pp2npb1/3p2pp/2p2p2/2BnP3/2NP1N2/PPPB2PP/R3QRK1 w - - 4 12",
    score: -0.6,
  },
  {
    lichess: "https://lichess.org/BFfDfpmR",
    fen: "2rq1rk1/1b2ppbp/p4np1/8/Pp4P1/3QBN1P/1P2PPB1/R4RK1 w - - 2 17",
    score: -0.6,
  },
  {
    lichess: "https://lichess.org/oMy4XE3a",
    fen: "r2q1rk1/5pp1/2p4p/2Pn1R2/p1b3P1/7P/PP2Q1B1/R5K1 w - - 0 29",
    score: -6.8,
  },
  {
    lichess: "https://lichess.org/AU5vXdKa",
    fen: "2r3k1/2q1pp2/p2p1bp1/3Q4/2pP4/P1P4P/BP3RP1/6K1 w - - 3 27",
    score: 0,
  },
  {
    lichess: "https://lichess.org/iERNXg6Y",
    fen: "r4r1k/1p4p1/1b1pp2p/pP5q/P2P4/5P2/4N1PP/2RQ1R1K w - - 1 23",
    score: 0,
  },
  {
    lichess: "https://lichess.org/mUQ88JrQ",
    fen: "3r4/p3kp2/4p2p/8/2p3P1/6KP/PP3R2/8 w - - 0 35",
    score: -1.9,
  },
  {
    lichess: "https://lichess.org/bK9vvoOP",
    fen: "r1q1r1k1/p4pbp/2pBn1p1/1p6/2n5/1BN2Q1P/PPP2PP1/3R1RK1 w - - 4 19",
    score: 0.3,
  },
  {
    lichess: "https://lichess.org/35WemsOH",
    fen: "5rk1/5r1p/pR2p1p1/Q1Pb4/3Pp3/4P1BP/1R3PP1/3q2K1 w - - 9 33",
    score: 9.2,
  },
  {
    lichess: "https://lichess.org/AwE42tV2",
    fen: "8/1p1n1ppp/p1k1p3/4P3/3b1PP1/P1N2K1P/1P6/4B3 w - - 1 29",
    score: -0.6,
  },
  {
    lichess: "https://lichess.org/tGPA6FDK",
    fen: "r1b1k2r/2q1bpp1/p1p1p2p/3nN1B1/7Q/2N5/PPP2PPP/2KRR3 w kq - 1 14",
    score: 4,
  },
  {
    lichess: "https://lichess.org/txAo7Auz",
    fen: "2rq1rk1/1p4bp/2n1b1p1/p3p1Q1/3pP2P/1P1N2P1/P1P1N1B1/2R2RK1 w - - 1 21",
    score: -1.9,
  },
  {
    lichess: "https://lichess.org/eZaUmJDQ",
    fen: "3r1rk1/p2n1ppp/2q1p3/P1p5/R7/1P1N2Q1/2P2PPP/5RK1 w - - 2 25",
    score: 1.3,
  },
  {
    lichess: "https://lichess.org/aC0zvSer",
    fen: "3r2k1/ppp2ppp/2n5/8/6b1/2BB4/PPP2bPP/2K3NR w - - 0 18",
    score: -2.7,
  },
  {
    lichess: "https://lichess.org/mcK30AWT",
    fen: "5rk1/Q4p1p/3ppqp1/P1n5/2P5/6P1/4rPBP/R4RK1 w - - 2 20",
    score: 0.2,
  },
  {
    lichess: "https://lichess.org/ZSJXp6wD",
    fen: "r3k2r/1p1b1ppp/4p1n1/2qpP3/P1nN2Q1/2PB4/5PPP/R1B2RK1 w kq - 3 16",
    score: 1.5,
  },
  {
    lichess: "https://lichess.org/MKHJbiAE",
    fen: "r1b1r1k1/5p2/2p4p/5Pp1/p3P1P1/1p1P1N1P/1qPQ4/R4RK1 w - - 0 25",
    score: 1.7,
  },
  {
    lichess: "https://lichess.org/R74Rlx3x",
    fen: "5k2/pp1Q2p1/q3pb1p/8/P2B4/6P1/1P3P1P/6K1 w - - 7 28",
    score: 3.4,
  },
  {
    lichess: "https://lichess.org/igKY8QSE",
    fen: "2kr2nr/ppp1qppp/2nb4/8/4P1b1/2N2N2/PPP1BPPP/R1BQK2R w KQ - 6 8",
    score: 0.3,
  },
  {
    lichess: "https://lichess.org/tA5Efyt6",
    fen: "r1br2k1/pp3ppp/2n1pn2/b1P5/1P6/P1N2B2/2P1NPPP/R1BK3R w - - 1 12",
    score: 2,
  },
  {
    lichess: "https://lichess.org/BkCu0mNa",
    fen: "r2q1rk1/1b2B1p1/p3p2p/P2n4/1p1Ppn2/1N1B1N2/1P3PPP/R4RK1 w - - 0 21",
    score: -8.2,
  },
  {
    lichess: "https://lichess.org/5DHlWN7T",
    fen: "1r2b2k/2p3p1/B3pr1p/3p1n1P/7N/5P2/PP4P1/1K1R3R w - - 0 24",
    score: -0.3,
  },
  {
    lichess: "https://lichess.org/OyyFwVnY",
    fen: "r4k1r/1ppb1p2/1bnp1qp1/1B2p3/4P1n1/2PP1NPp/P1R2P1P/R1BQ1NK1 w - - 3 19",
    score: -1.4,
  },
  {
    lichess: "https://lichess.org/7eB9YNxP",
    fen: "1rb2k1r/p4p2/2np3b/1p2p2N/5N1P/3B4/PPP2PP1/2KRR3 w - - 0 20",
    score: -3,
  },
  {
    lichess: "https://lichess.org/XMfcZzEc",
    fen: "2n3k1/1p3pp1/p3p1p1/3pP3/Pb1P3P/1P2BN2/5PP1/6K1 w - - 0 27",
    score: -0.2,
  },
  {
    lichess: "https://lichess.org/yyjf6HFd",
    fen: "1rbq1rk1/3nppbp/p1np2p1/1pp5/2PP4/1PN1PNPP/PB3PB1/R2Q1RK1 w - b6 0 12",
    score: 0,
  },
  {
    lichess: "https://lichess.org/AwV8i88x",
    fen: "rn1q1rk1/pp2bppp/2p5/3pP2n/6b1/1BNP1N2/PPPB2PP/R2QK2R w KQ - 3 11",
    score: 0,
  },
  {
    lichess: "https://lichess.org/e8NE3R7f",
    fen: "5r1k/1pn2q2/pb1pN2p/3P1r2/2P1Q2P/1P4R1/6K1/5R2 w - - 0 41",
    score: 7.2,
  },
  {
    lichess: "https://lichess.org/LpfhcsN1",
    fen: "8/p3kp1p/4p1p1/2P5/1n6/7P/1N2KPP1/8 w - - 4 30",
    score: -4.3,
  },
  {
    lichess: "https://lichess.org/aU6mpI8M",
    fen: "r1b2rk1/ppq2ppp/2n1pn2/8/1PB5/2P1P3/4NPPP/R1BQ1RK1 w - - 1 12",
    score: 0.1,
  },
  {
    lichess: "https://lichess.org/OCg9pqm8",
    fen: "1k1r3r/pp2b1p1/3pN3/3P2pp/1q6/4B3/PPP2PPP/1R1Q1RK1 w - - 2 18",
    score: 10.2,
  },
  {
    lichess: "https://lichess.org/4GjTpgzm",
    fen: "1rb2rk1/1p2q2p/1N1bp1p1/pP1pNp1n/3P1P2/P2BPQ2/6PP/2R2RK1 w - - 3 23",
    score: 1.5,
  },
  {
    lichess: "https://lichess.org/B7m7IOTz",
    fen: "2r1kb1r/2qb1p2/p2ppnpp/1p6/2nNP1PP/P1N1BP2/1PPQB3/1K1R3R w k - 2 16",
    score: 2.5,
  },
  {
    lichess: "https://lichess.org/e1tHHaOy",
    fen: "r2q1rk1/1p1bnpbp/p1npp1p1/2p5/P1B1PP2/2NP1N2/1PP3PP/R1B1QRK1 w - - 0 11",
    score: -0.3,
  },
  {
    lichess: "https://lichess.org/khKuPtqm",
    fen: "r4b2/1p1k1p2/p1n1p3/3pP1Pp/3P1P1N/P1R1B3/1P2q3/5K2 w - - 0 26",
    score: 0,
  },
  {
    lichess: "https://lichess.org/KEGSw30P",
    fen: "3rkb1r/p4ppp/5n2/3bp3/3N4/8/PPP2PPP/RNB1R1K1 w - - 2 14",
    score: 5.9,
  },
  {
    lichess: "https://lichess.org/VcYhdlor",
    fen: "5rk1/Rbr1q1p1/1p5p/2p1pB2/1PP1P3/5PP1/3Q3P/3R2K1 w - - 0 32",
    score: 6.3,
  },
  {
    lichess: "https://lichess.org/VkD8yQML",
    fen: "r7/4pNbk/6pp/2N5/3n3P/6B1/3RnPP1/6K1 w - - 1 29",
    score: -4.7,
  },
  {
    lichess: "https://lichess.org/XEG7Ma7W",
    fen: "8/8/1k6/7R/8/r1K5/8/8 w - - 4 50",
    score: 0,
  },
  {
    lichess: "https://lichess.org/vbBkTacz",
    fen: "6k1/1b2q2p/p3p1pQ/1p1p1n1P/1Pn5/P1R3N1/6P1/4KB2 w - - 1 27",
    score: 0,
  },
  {
    lichess: "https://lichess.org/etGknOZ9",
    fen: "r3k2r/p2q1pp1/2p1p3/3pPn2/N1P2Pb1/1PN3Pp/P1Pb3P/1R2QR1K w kq - 0 21",
    score: -0.5,
  },
  {
    lichess: "https://lichess.org/WYJi9My8",
    fen: "3rb1k1/8/3q2p1/1p1N1p1p/2p1B3/4P1N1/1b1PRPPP/1R4K1 w - f6 0 32",
    score: -5.5,
  },
  {
    lichess: "https://lichess.org/hItdY3wn",
    fen: "3r2k1/8/1p1rp3/pBp3p1/P1P3p1/3P2P1/2P2PK1/4R3 w - - 0 37",
    score: -0.7,
  },
  {
    lichess: "https://lichess.org/PhYJZXgl",
    fen: "2kr3r/1ppq2pB/p2bbp2/3n4/3B4/PP2P3/2Q2PPP/RN2K2R w KQ - 1 14",
    score: -0.6,
  },
  {
    lichess: "https://lichess.org/EvQvra1j",
    fen: "3r2k1/pbq3p1/1p1rp2n/6NQ/3P3P/8/PP1R1PP1/3R2K1 w - - 5 28",
    score: 0.6,
  },
  {
    lichess: "https://lichess.org/bkgQEbek",
    fen: "4rrk1/p1n3q1/1p3p2/3pPR2/P1pP2Q1/2P3P1/2P4P/R6K w - - 3 23",
    score: 1.7,
  },
  {
    lichess: "https://lichess.org/X0oMITx3",
    fen: "8/1p2k3/7n/3B4/p1P2P2/PnK5/8/8 w - - 0 43",
    score: 0,
  },
  {
    lichess: "https://lichess.org/QQv8YgWs",
    fen: "r2r2k1/pp2qp2/2n4p/4p1pn/P3P3/2P2NBP/4QPP1/R2R2K1 w - - 2 22",
    score: 0.8,
  },
  {
    lichess: "https://lichess.org/qZLi4RK1",
    fen: "r1b1k2r/pp2np1p/6p1/4q3/4N3/8/P1P1BPPP/R2Q1RK1 w kq - 2 14",
    score: 5,
  },
  {
    lichess: "https://lichess.org/cMxOHmTL",
    fen: "3rkb1r/p4ppp/2R1p3/8/6n1/4BQPq/PP3P1P/RN4K1 w k - 1 17",
    score: -3.2,
  },
  {
    lichess: "https://lichess.org/8juG7tBa",
    fen: "1k2b2r/pnr2p2/1p2p2p/3p2pR/1QP2qP1/P4PN1/1P2B1P1/1KR5 w - - 3 25",
    score: -3.6,
  },
  {
    lichess: "https://lichess.org/ZwmVYiwO",
    fen: "r2q1rk1/pQ1nbppp/4pn2/8/2BP4/4PP2/5P1P/RNB2RK1 w - - 3 14",
    score: 0,
  },
  {
    lichess: "https://lichess.org/eOfh1oQH",
    fen: "3r2k1/1pq2pp1/2p1p1b1/1r2P2p/5R2/1P1P2PP/2P1Q1B1/4R2K w - - 0 25",
    score: 0,
  },
  {
    lichess: "https://lichess.org/aHoQt9zj",
    fen: "3r1rk1/pp4p1/4bp2/q2pp3/8/P1P5/1P1NQPPP/3RR1K1 w - - 3 21",
    score: -0.4,
  },
  {
    lichess: "https://lichess.org/HFbjQaiP",
    fen: "3R4/pp3k1p/6p1/1r3p2/4p3/1Pbn2P1/P3RPNP/6K1 w - - 0 26",
    score: 3.2,
  },
  {
    lichess: "https://lichess.org/fzY3dZ6c",
    fen: "r1b3k1/pp2rp1p/2p3p1/8/N1P1P3/1P3BP1/P4P1P/R5K1 w - - 0 18",
    score: -3.1,
  },
  {
    lichess: "https://lichess.org/NOdq8cU1",
    fen: "3q1rk1/5ppp/2n1pb2/1RPp4/3PnB2/r5N1/4NPPP/3Q1RK1 w - - 5 19",
    score: 0.4,
  },
  {
    lichess: "https://lichess.org/6bG0i6Nz",
    fen: "3r4/6kp/3ppnp1/2p5/2P5/P1K1P1P1/3R1P1P/7R w - - 6 29",
    score: 6.6,
  },
  {
    lichess: "https://lichess.org/XcfkqhXu",
    fen: "8/ppn2k2/3p1np1/2pP1p1p/2P2P2/2N1K1PP/PP2B3/8 w - - 5 31",
    score: 0.2,
  },
  {
    lichess: "https://lichess.org/ZCnWdTTn",
    fen: "2R5/3k1p2/1r2pKp1/1p5p/p2PP2P/6P1/P4P2/8 w - - 2 29",
    score: 3.6,
  },
  {
    lichess: "https://lichess.org/zJDGoxQ8",
    fen: "r2qr1k1/pp3p1p/2pp4/b3nbpn/2P5/P1N1P3/QP1BBPPP/2RR2K1 w - - 0 18",
    score: -0.7,
  },
  {
    lichess: "https://lichess.org/cSqDvmks",
    fen: "3rr1k1/p4p1p/2p1bbp1/1p6/N3P3/5P1P/PPP1B1P1/3RR1K1 w - b6 0 18",
    score: -0.6,
  },
  {
    lichess: "https://lichess.org/LuhJLKaO",
    fen: "2kr4/ppbq1p1p/5pr1/8/4PP2/3p1Q2/PP1N2PP/R4R1K w - - 2 20",
    score: -1.1,
  },
  {
    lichess: "https://lichess.org/hu1LO8jq",
    fen: "6k1/5pp1/3B2bp/8/2p1P3/1r4P1/R1K4n/5B2 w - - 0 36",
    score: -1.1,
  },
  {
    lichess: "https://lichess.org/kVpyys2G",
    fen: "2b3k1/pp3ppp/2pb4/3p4/3P1P1q/2Q4P/PP1Br1P1/R4RK1 w - - 0 22",
    score: 1.5,
  },
  {
    lichess: "https://lichess.org/iF2OxWeU",
    fen: "rn1qk2r/1p2bppp/p2pb3/3Np3/4n3/1N2B3/PPP1BPPP/R2QK2R w KQkq - 0 10",
    score: 2,
  },
  {
    lichess: "https://lichess.org/GmuPzlnh",
    fen: "3n4/p1p2kb1/1p4p1/2p1pb2/2P1N3/1P3PP1/PB5P/4R1K1 w - - 3 32",
    score: 7.8,
  },
  {
    lichess: "https://lichess.org/d4HuAnkR",
    fen: "rn1q1rk1/ppp1ppbp/3p1np1/6B1/3PP1b1/2P2N2/PP1N1PPP/R2QKB1R w KQ - 1 7",
    score: 1,
  },
  {
    lichess: "https://lichess.org/3DwdcCeR",
    fen: "r1r3k1/4q1pp/3n1p2/2pP4/pp2nP2/4PN2/P1R3PP/2B1RQK1 w - - 2 29",
    score: -6.6,
  },
  {
    lichess: "https://lichess.org/S0lp9scB",
    fen: "4r1k1/5p1p/p1N5/1pn5/2p3B1/P1Pb4/5KPP/2R5 w - - 2 28",
    score: -3.1,
  },
  {
    lichess: "https://lichess.org/sYk6kDYC",
    fen: "5k2/p3p3/1p1r2p1/3r1pP1/P1P5/1P2R1P1/5P2/6K1 w - - 0 30",
    score: 0,
  },
  {
    lichess: "https://lichess.org/wQb9NKZ2",
    fen: "2kr3r/pp1n1p2/1qp3p1/4p1Pp/1P1PB3/2P3P1/P3QP2/R3K2R w KQ - 0 17",
    score: 0,
  },
  {
    lichess: "https://lichess.org/gNgJ0of3",
    fen: "r2qr1k1/1bpn1p2/pb1p3p/1p1P2p1/Pn2P3/1BN2NB1/1P3PPP/R2QR1K1 w - - 1 17",
    score: 1.7,
  },
  {
    lichess: "https://lichess.org/nAFvsDDd",
    fen: "5k2/1p3p1p/p1r1p1p1/2P5/8/1P2P2P/P4KP1/2R5 w - - 2 27",
    score: 0.8,
  },
  {
    lichess: "https://lichess.org/pmcL7yZk",
    fen: "rnbq1rk1/ppppppbp/5np1/8/3P4/5NP1/PPP1PPBP/RNBQK2R w KQ - 1 5",
    score: 0.3,
  },
  {
    lichess: "https://lichess.org/uhUinDLQ",
    fen: "2r1qrk1/pp3ppp/3Ppn2/2PnN3/1P5P/P5P1/2Q2P2/R2R1BK1 w - - 5 24",
    score: 8.1,
  },
  {
    lichess: "https://lichess.org/ZtODN5Jw",
    fen: "1q1r1rk1/3n1ppp/Bp1bp3/8/P2Nn3/4B2P/1P2QPP1/2RR2K1 w - - 0 18",
    score: 7.3,
  },
  {
    lichess: "https://lichess.org/vpXDnJIy",
    fen: "2rqr1k1/1b3pbp/p2p2p1/3P4/R3PP2/2p3PP/1PQN2BK/2R5 w - - 0 23",
    score: 0.6,
  },
  {
    lichess: "https://lichess.org/7dD0Ipy6",
    fen: "3r1bk1/N4p2/3p1npp/3Pp3/np2P3/1q2B1PP/1P2QPB1/1Rr3K1 w - - 0 27",
    score: 0.3,
  },
  {
    lichess: "https://lichess.org/lc6vAV7s",
    fen: "2r2rk1/3bqp2/p3pn1p/4p1p1/1p2P3/2N3BP/PPB2PP1/R2QR1K1 w - - 0 19",
    score: 6.5,
  },
  {
    lichess: "https://lichess.org/jhTzdiq7",
    fen: "2k5/ppp2ppp/8/3rP3/3r4/3PK3/PP3PPP/R2R4 w - - 4 17",
    score: 1.4,
  },
  {
    lichess: "https://lichess.org/cvupAr7T",
    fen: "5rk1/6p1/6np/4p1B1/2Np4/2b5/5PPP/2R3K1 w - - 0 27",
    score: -1.3,
  },
  {
    lichess: "https://lichess.org/0z7UYn0Z",
    fen: "r2q1rk1/pb1n1ppp/2pbpn2/1p6/3P4/2NBPN2/PPQB1P1P/2KR2R1 w - - 2 13",
    score: 0.7,
  },
  {
    lichess: "https://lichess.org/W5F5SvHv",
    fen: "5r2/pkpQ2pp/1b3q2/8/8/8/2P3PP/3RR2K w - - 9 27",
    score: 2.9,
  },
  {
    lichess: "https://lichess.org/BCrpBRGV",
    fen: "r1b5/2p2pk1/8/8/7p/1Q3N2/P3B2P/2q2K2 w - - 0 32",
    score: -7.2,
  },
  {
    lichess: "https://lichess.org/xqzG3KEe",
    fen: "r1bq1r2/pp1n1knQ/3p2p1/2pp2P1/2P1PP2/2P5/P3B3/R1B1K1NR w KQ - 1 17",
    score: 10.8,
  },
  {
    lichess: "https://lichess.org/4F8rHozD",
    fen: "6k1/1R5p/4qpp1/5p2/2rP4/4nBP1/Q4PP1/6K1 w - - 0 29",
    score: 8.6,
  },
  {
    lichess: "https://lichess.org/4C3cEbZt",
    fen: "r3nrk1/2P2pbp/1q2p1p1/pNp5/P4B2/7P/1P2RPP1/R2Q2K1 w - - 2 20",
    score: 7.3,
  },
  {
    lichess: "https://lichess.org/7T3U6LPN",
    fen: "2r2rk1/pp1nbpp1/1qp1pnp1/8/P2PP3/6PP/NPQB1PB1/R2R2K1 w - - 5 22",
    score: 2.1,
  },
  {
    lichess: "https://lichess.org/J6aJfOPM",
    fen: "3r1rk1/pp4bp/2p3p1/3N4/2Pp2n1/1P5P/P4PB1/R3R1K1 w - - 0 23",
    score: 0.5,
  },
  {
    lichess: "https://lichess.org/fHSRG4em",
    fen: "r1b2rk1/p4pp1/1p2p3/3qQ3/5B1P/4P2R/1P3PP1/2R2K2 w - - 2 20",
    score: 0.4,
  },
  {
    lichess: "https://lichess.org/l1u8L8W3",
    fen: "2r1r3/pp1b1pkp/1q3np1/3p4/1P1N4/P2BPQ1P/5PP1/2R2RK1 w - - 3 20",
    score: 0.9,
  },
  {
    lichess: "https://lichess.org/jP4Eh4pG",
    fen: "r1q2rk1/pp2bppp/4b3/4p3/1nBnP3/NN6/PP2QPPP/R1B2RK1 w - - 7 14",
    score: -1.5,
  },
  {
    lichess: "https://lichess.org/7oAhppWY",
    fen: "r1b1r1k1/1p3pbp/1qn3p1/p1pp4/5B2/1P1P1NP1/P2QPPBP/2R2RK1 w - a6 0 14",
    score: 0.7,
  },
  {
    lichess: "https://lichess.org/P3Q2MON8",
    fen: "2r2rk1/1p3ppp/4p3/bB1p3n/P2P4/2N1PP2/1P3P1P/R4RK1 w - - 0 17",
    score: 3,
  },
  {
    lichess: "https://lichess.org/yOJVlgp2",
    fen: "3r4/ppk2r1p/3p2pQ/q1p2b2/2P2B2/2P5/P4PPP/3R1RK1 w - - 12 22",
    score: -0.9,
  },
  {
    lichess: "https://lichess.org/7Bn8KhJQ",
    fen: "1r3rk1/2q1bp1p/2n1pnp1/pp1pN3/3P1P2/P1PB3R/1P4PP/R1B1Q1K1 w - a6 0 16",
    score: 1.4,
  },
  {
    lichess: "https://lichess.org/BjiCFqmZ",
    fen: "r5k1/1n5p/2p1n1p1/1P1p1p2/8/1P1PN1P1/4P1BP/5N1K w - - 0 28",
    score: 0.4,
  },
  {
    lichess: "https://lichess.org/pVO7UOGr",
    fen: "3r1rk1/6p1/p4p1p/1pp5/3P1R2/1PP2q1P/P5P1/5RK1 w - - 0 28",
    score: -0.5,
  },
  {
    lichess: "https://lichess.org/ZswEIOZB",
    fen: "2r3k1/5pp1/p2qp3/1p1p4/2r5/1N2P3/PP1Q1PPP/2R2RK1 w - - 4 24",
    score: 7,
  },
  {
    lichess: "https://lichess.org/SaXZShQp",
    fen: "3r1k2/1b4pp/p7/4P3/PP6/8/6PP/3R2K1 w - - 0 34",
    score: 9.7,
  },
  {
    lichess: "https://lichess.org/vIXqUXdq",
    fen: "5rk1/1p4p1/p1p3p1/3q4/PP1Qp3/8/6PP/4R1K1 w - - 2 32",
    score: -0.7,
  },
  {
    lichess: "https://lichess.org/z5NUfT46",
    fen: "6nr/1pk3pp/pN1p1pb1/2p5/2N1P3/8/PPP2PPP/3R2K1 w - - 4 19",
    score: 6.5,
  },
  {
    lichess: "https://lichess.org/e0BrFKpp",
    fen: "2kr3r/pp1n1pp1/2p1pnp1/8/7q/2NB2Q1/PPP2PPP/R3R1K1 w - - 2 17",
    score: -3.3,
  },
  {
    lichess: "https://lichess.org/5Bb6HSRV",
    fen: "8/p4p1p/P4k2/8/4rp1P/r2p1KP1/3R1P2/8 w - - 0 38",
    score: -0.6,
  },
  {
    lichess: "https://lichess.org/7w5LJB54",
    fen: "r2qk2r/ppp2pp1/2n2n1p/PPb1p2P/3q2b1/2P5/3K2P1/RNB2B1R w kq - 0 13",
    score: 0,
  },
  {
    lichess: "https://lichess.org/us6ksaC9",
    fen: "4r1k1/4r1p1/8/R6p/3B2b1/4p1P1/PP5P/4R1K1 w - - 0 31",
    score: 0.3,
  },
  {
    lichess: "https://lichess.org/fIoHFTB5",
    fen: "r5r1/p2kb2p/1nppp3/8/2P5/2N5/PP3PPP/R1B1R1K1 w - - 0 17",
    score: 2.5,
  },
  {
    lichess: "https://lichess.org/H42Gl5Cf",
    fen: "r2qrnk1/1b3pp1/pp3b1p/2ppN3/P2P4/2P5/1PBN1PPP/R2QR1K1 w - - 0 17",
    score: 0.5,
  },
  {
    lichess: "https://lichess.org/Hy0jRZWp",
    fen: "7r/p5p1/5pk1/8/2B1P3/7p/PPPq3P/2K5 w - - 0 32",
    score: -5,
  },
  {
    lichess: "https://lichess.org/3rZZ8NEU",
    fen: "1r3rk1/2q1b3/2ppb1p1/1P2p1Pp/4Pp1P/2N2P2/2PQ1BK1/1R5R w - - 1 26",
    score: 2.2,
  },
  {
    lichess: "https://lichess.org/ObaWvWX3",
    fen: "2kr1b1r/p1pp1pp1/bnp5/4P2p/2P4P/1PB2QP1/2qN1PB1/5RK1 w - - 2 18",
    score: -5.1,
  },
  {
    lichess: "https://lichess.org/2CifEpD6",
    fen: "r3qrk1/1pp3p1/pbn1p2p/4p1Bn/PP2P3/N1PP1N1P/2Q3P1/2KR3R w - - 0 16",
    score: -0.2,
  },
  {
    lichess: "https://lichess.org/GzxZ5Joe",
    fen: "8/1b1k4/p1r5/3p4/1P1Bp3/P3P2P/5PP1/3R2K1 w - - 2 37",
    score: 8.4,
  },
  {
    lichess: "https://lichess.org/BrkYHeHh",
    fen: "4r1k1/p4p1p/1p1R2p1/2n5/4r3/2P5/P3NPPP/4RK2 w - - 3 24",
    score: -0.9,
  },
  {
    lichess: "https://lichess.org/Vbl9t45A",
    fen: "3r2k1/5pp1/R6p/4b3/1P2P3/B4P2/7P/7K w - - 0 31",
    score: 0.1,
  },
  {
    lichess: "https://lichess.org/o3lDd4sZ",
    fen: "2rr2k1/1p3pbp/2q1pnp1/pNP2n2/P2P4/8/1B3PPP/2RQRBK1 w - - 1 23",
    score: 2.2,
  },
  {
    lichess: "https://lichess.org/8bFfsjzG",
    fen: "3q1rk1/1B2pp2/1pp2bpp/4n3/8/3P2P1/1PP2P1P/2BQ1RK1 w - - 0 18",
    score: 0,
  },
  {
    lichess: "https://lichess.org/X43Wbotw",
    fen: "r1rq2k1/3nbpp1/b1n4p/2ppP2P/pp3B2/P1PP1NP1/1P2QPB1/R3R1K1 w - - 0 19",
    score: -0.9,
  },
  {
    lichess: "https://lichess.org/HuXsXhwg",
    fen: "rn1qk2r/ppp2ppp/4bn2/8/1bPP4/8/PP3PPP/RNBQKBNR w KQkq - 1 6",
    score: 0.3,
  },
  {
    lichess: "https://lichess.org/MJRuAsDI",
    fen: "1r1q1rk1/5ppp/4pn2/pp1p4/2nP4/P1PB1NP1/1P2QPP1/R4RK1 w - a6 0 18",
    score: 0.9,
  },
  {
    lichess: "https://lichess.org/vcPRblV1",
    fen: "r5k1/1rp1pnbp/2p1N1p1/2P2p2/p2P4/2B1PN2/P5PP/5RK1 w - - 3 25",
    score: -4.7,
  },
  {
    lichess: "https://lichess.org/tzMTiRm4",
    fen: "4k2r/2r1qpp1/B1n1p3/3p3P/Np1Pn3/5Q2/PPP2P2/2KR3R w k - 1 19",
    score: 0.2,
  },
  {
    lichess: "https://lichess.org/tuv5WmG7",
    fen: "r3k2r/2nqbppp/1p2p3/p2pP3/P2P2Pn/N1PQ1N2/5P1P/R1B1K2R w KQkq - 1 16",
    score: -0.3,
  },
  {
    lichess: "https://lichess.org/yaHXvNVl",
    fen: "2rqnrk1/3nbppp/p2p4/1p1bp1P1/4P2P/4B1N1/PPP2PB1/R2QK2R w KQ - 0 15",
    score: 0.5,
  },
  {
    lichess: "https://lichess.org/ORJhi3AN",
    fen: "r3r1k1/pNP2p1p/np3qp1/8/2P5/1P2P3/P1Q1BPPP/b4RK1 w - - 1 19",
    score: -5.8,
  },
  {
    lichess: "https://lichess.org/hxlnoB1K",
    fen: "r2qr1k1/pp1bppb1/3p1np1/4n1B1/4P1pP/1NN2P2/PPPQB3/2KR3R w - - 0 14",
    score: 2.2,
  },
  {
    lichess: "https://lichess.org/X57IcUZv",
    fen: "5b1r/6pp/k2n1p2/2pNpP2/4P3/1P2B3/2P3PP/3R2K1 w - - 1 24",
    score: 6.6,
  },
  {
    lichess: "https://lichess.org/HFVOrGJF",
    fen: "r2q1rk1/pp1nppb1/2p2nbp/6p1/4P3/2N2NP1/PPPB1PBP/R2QR1K1 w - - 1 12",
    score: 0.1,
  },
  {
    lichess: "https://lichess.org/nmUeRVU5",
    fen: "r1q2rk1/pp3pp1/3bp2p/2p5/2PPb1n1/1Q2BNP1/PP2P1BP/R4R1K w - - 2 16",
    score: -1.5,
  },
  {
    lichess: "https://lichess.org/eVMwlLcm",
    fen: "1k2rb1r/1bq3p1/p3pn2/1pn1P1p1/2p5/2N1B2Q/PPB2PPP/3R1RK1 w - - 0 20",
    score: 2.3,
  },
  {
    lichess: "https://lichess.org/zb4SiXOR",
    fen: "1nbqr1nk/r4ppp/pp1p1b2/2pPpP2/P1P1P2P/2N3P1/1P2N1B1/R1BQ1RK1 w - - 1 14",
    score: 2.4,
  },
  {
    lichess: "https://lichess.org/RDbyU7Au",
    fen: "r3kb1r/1pp2ppp/p1n1pn2/5b2/2B5/2NP1N2/PPP2PPP/R1B2RK1 w kq - 2 9",
    score: -0.2,
  },
  {
    lichess: "https://lichess.org/lQvOLLE9",
    fen: "r3kb1r/pp3pp1/2n1pn2/3q2P1/3pNP1p/3P2NP/PPP3K1/R1BQ1R2 w kq - 0 16",
    score: -0.1,
  },
  {
    lichess: "https://lichess.org/sKqoj6bG",
    fen: "1r6/p1p1kpp1/2p4p/3p4/3P4/2P5/P1PK1PPP/R7 w - - 3 21",
    score: 0,
  },
  {
    lichess: "https://lichess.org/ovchtHNC",
    fen: "2kr3r/1b2bpp1/pnq1p2p/4P3/p2p4/2P1BN2/2B1QPPP/R3RNK1 w - - 0 20",
    score: 8.7,
  },
  {
    lichess: "https://lichess.org/oAZdoXXU",
    fen: "r2qr1k1/pb1p1ppp/np6/1npP4/4PP2/2N3P1/PP4BP/R2Q1RK1 w - - 0 18",
    score: 1.1,
  },
  {
    lichess: "https://lichess.org/NR4pW2RW",
    fen: "2bqnrk1/3nb1pp/1r1p1p2/2pPp3/4PP2/2NN2P1/1PQ3BP/R1B2RK1 w - - 0 17",
    score: 0.9,
  },
  {
    lichess: "https://lichess.org/CoCu01h3",
    fen: "rnb1rnk1/pp2ppbp/2p5/2P1P1p1/1PBN1P2/2N1B3/P5PP/3RK2R w K - 0 15",
    score: 2.9,
  },
  {
    lichess: "https://lichess.org/D5gySAw4",
    fen: "r7/1r2kbp1/3p1b1p/q1pP4/5BP1/1P1B3P/P1Q5/1K1R3R w - - 3 26",
    score: 1.3,
  },
  {
    lichess: "https://lichess.org/tGWMXw6V",
    fen: "2r3k1/1b3p2/p2pp1r1/1p2n3/2n1P2p/PNN2q1B/KPP2B2/4Q2R w - - 8 38",
    score: -6,
  },
  {
    lichess: "https://lichess.org/cnmY6HBB",
    fen: "r1r3k1/1p1b1p1p/4p3/1P4p1/P2BKn2/2N5/5PPP/RR6 w - g6 0 24",
    score: 0.3,
  },
  {
    lichess: "https://lichess.org/hIQ86uOc",
    fen: "5r2/pp1kn1bp/3pp1p1/8/3pP3/3B1rB1/PPN1KP1P/R6R w - - 2 18",
    score: 5,
  },
  {
    lichess: "https://lichess.org/yTHBzW7F",
    fen: "r1bq1rk1/1ppp1pp1/2n2n1p/p1b1p3/2B1P3/2PP1N2/PP3PPP/RNBQR1K1 w - - 0 8",
    score: 1.2,
  },
  {
    lichess: "https://lichess.org/8riMDw0T",
    fen: "3q3k/pp6/3p2Q1/3Nr3/7P/1P6/1P3r2/1K5R w - - 1 27",
    score: 22.1,
  },
  {
    lichess: "https://lichess.org/3TDhT0X7",
    fen: "r6r/2k2pp1/Qnp1pn1p/1p6/5N1P/6N1/1PP2P2/1K1R4 w - - 0 26",
    score: -5.6,
  },
  {
    lichess: "https://lichess.org/LkKSJ4CN",
    fen: "r2r2k1/1p3ppp/p3q3/3n4/1PQ5/P5P1/1B2PPKP/R2R4 w - - 1 21",
    score: 2.6,
  },
  {
    lichess: "https://lichess.org/jwFnX7Wa",
    fen: "2kr1r2/ppp3pp/2nbR3/3q4/3p4/5N1P/PPP1QPP1/R1B3K1 w - - 3 15",
    score: 0.5,
  },
  {
    lichess: "https://lichess.org/bLwXS7MX",
    fen: "1r1q1rk1/1p1bp1bp/p2p2p1/1PpN1p2/P1PnPP2/3PB1PP/4Q1B1/1R3RK1 w - - 1 18",
    score: 0,
  },
  {
    lichess: "https://lichess.org/6ERARb6V",
    fen: "6k1/p3bpp1/N3p1bp/3p4/1P1P4/4P1P1/1r3P1P/3R1BK1 w - - 3 25",
    score: -0.3,
  },
  {
    lichess: "https://lichess.org/qmIhSKgu",
    fen: "6k1/pp1bRrpp/3p1n2/P1pP1p1q/2P2P2/1NP2PPP/3Q1BBK/8 w - - 4 25",
    score: 8.7,
  },
  {
    lichess: "https://lichess.org/orNGE3Uf",
    fen: "8/1p6/6pk/Pp2p2p/1p2P2P/2P3P1/6K1/8 w - - 0 43",
    score: 0,
  },
  {
    lichess: "https://lichess.org/Ghcw08mN",
    fen: "r4k1r/p3n1p1/1q3p2/1Bbp1b1p/4N3/1P1Q1PP1/PBP4P/2KR3R w - - 1 17",
    score: 2.3,
  },
  {
    lichess: "https://lichess.org/topH6s4X",
    fen: "r4rk1/p4ppp/2p5/1p6/n2b4/5P2/P1PK3P/3R1B1R w - - 0 26",
    score: -9.3,
  },
  {
    lichess: "https://lichess.org/BrmXWid0",
    fen: "4k1r1/p2b1p2/4p3/1p2Pp1r/3b3P/5BP1/PPP1N3/2KR4 w - - 0 24",
    score: -0.4,
  },
  {
    lichess: "https://lichess.org/eZyIpybj",
    fen: "r1bq1rk1/pppp1pp1/5n1p/4p3/2P1P3/P1PP3P/4BPP1/R1BQK2R w KQ - 0 10",
    score: 1.7,
  },
  {
    lichess: "https://lichess.org/HBckzDvC",
    fen: "r2r1k2/pp2b1pp/1np1B3/8/P1nP4/2N3P1/1P3P1P/R1B1R1K1 w - - 1 23",
    score: 6.3,
  },
  {
    lichess: "https://lichess.org/DZLKoqaz",
    fen: "rnbq1rk1/ppp1ppbp/6p1/8/2BPP3/2P5/P4PPP/R1BQK1NR w KQ - 3 8",
    score: 0.4,
  },
  {
    lichess: "https://lichess.org/otp2qOqV",
    fen: "8/p1p5/1p6/1P5p/4K1k1/2P3b1/P3N3/8 w - h6 0 29",
    score: -5.5,
  },
  {
    lichess: "https://lichess.org/B37IF7MI",
    fen: "1r3rk1/1p3ppp/pq2b3/8/4Q3/1P4P1/P3PPBP/R4RK1 w - - 3 20",
    score: 1.8,
  },
  {
    lichess: "https://lichess.org/1j5dNrNL",
    fen: "r1bq1r2/pp3p1k/n1pb2pP/5p2/2BP2p1/2N1P3/PPQ1NP2/2KR3R w - - 3 15",
    score: -3.6,
  },
  {
    lichess: "https://lichess.org/878K5Hne",
    fen: "2kr4/1pb2p1p/p1p2nb1/5N2/1PPPP1PN/1R5P/1P4B1/5K2 w - - 1 27",
    score: 6.8,
  },
  {
    lichess: "https://lichess.org/FhFBrjbv",
    fen: "r4rk1/2p1pp1p/b5p1/8/3b4/2N5/PP3PPP/R1B2RK1 w - - 0 16",
    score: -0.6,
  },
  {
    lichess: "https://lichess.org/glGVR3i6",
    fen: "8/6pk/3p3p/8/6Q1/1P4P1/1q5K/8 w - - 9 48",
    score: -0.1,
  },
  {
    lichess: "https://lichess.org/CRNjGfDU",
    fen: "2rq1r2/pb4k1/1p3b2/1P1p4/P2Qp1P1/5N2/5P1P/R4RK1 w - - 2 28",
    score: -10.8,
  },
  {
    lichess: "https://lichess.org/I3IZ4xqM",
    fen: "2b1r3/8/R2p4/2pPr3/1pP1k1pR/1P2N3/1P3PK1/8 w - - 1 38",
    score: 2,
  },
  {
    lichess: "https://lichess.org/5ozhxh6y",
    fen: "r3kbnr/p3pppp/2p5/8/3Nq3/8/P2BbPPP/2RQ1RK1 w kq - 0 15",
    score: 0.4,
  },
  {
    lichess: "https://lichess.org/9Ir8CleC",
    fen: "rnbqkbnr/pp1pp1pp/8/2p2p2/4P3/2P5/PP1P1PPP/RNBQKBNR w KQkq f6 0 3",
    score: 2.4,
  },
  {
    lichess: "https://lichess.org/ecRAYZzN",
    fen: "r1b2rk1/2q2p2/1pp3pp/8/pP1NP3/2Q4P/2P2PP1/R4RK1 w - - 1 21",
    score: 0.3,
  },
  {
    lichess: "https://lichess.org/lwjtgpUA",
    fen: "5b2/p5pp/1p2kp2/nb6/3P4/P1n2R1P/1B1N1PP1/6K1 w - - 0 33",
    score: 2.8,
  },
  {
    lichess: "https://lichess.org/5pZnCT90",
    fen: "8/p7/1k6/6b1/K7/8/4B3/8 w - - 19 46",
    score: 0,
  },
  {
    lichess: "https://lichess.org/leQEXykJ",
    fen: "r1b2rk1/ppq2pp1/5n1p/2ppp1NP/8/2PBP3/PP3PP1/2RQK2R w K - 0 16",
    score: -6.3,
  },
  {
    lichess: "https://lichess.org/dkB6WeFT",
    fen: "7k/p3n3/1p4p1/5p2/3n4/3N2PP/PPr3BK/4rR2 w - - 0 28",
    score: -4.2,
  },
  {
    lichess: "https://lichess.org/k5cAIXtA",
    fen: "1k3r2/p1p3b1/1p1q3p/7R/3P2p1/2PQ1NP1/PP1K1P2/8 w - - 0 28",
    score: 0,
  },
  {
    lichess: "https://lichess.org/5FlsxmO5",
    fen: "6rk/5p1p/p2q1P2/3p1bP1/2pP3Q/PrN5/1P3R1P/2R4K w - - 1 28",
    score: 9.7,
  },
  {
    lichess: "https://lichess.org/2G2aZjWy",
    fen: "r5rk/1ppb4/3p1qBP/p2Pp2R/2P1QpP1/5P2/PP6/1K5R w - - 9 33",
    score: 7.1,
  },
  {
    lichess: "https://lichess.org/CpU6h8yr",
    fen: "2b2rk1/5pbp/p5p1/1r4QP/4P3/P3B1P1/5PB1/6K1 w - - 3 24",
    score: 0,
  },
  {
    lichess: "https://lichess.org/bQoPqVdi",
    fen: "r1b2rk1/ppp2p2/1n2p1pp/2q1P2P/2P1QP2/2Nn1N2/PP4P1/R3K2R w KQ - 0 16",
    score: 3,
  },
  {
    lichess: "https://lichess.org/RoRZ7LKV",
    fen: "r3k2r/1pp1npp1/p1pb1q2/4p2p/4P1b1/3PBN1P/PPPN1PP1/R2Q1RK1 w kq - 5 10",
    score: 0.8,
  },
  {
    lichess: "https://lichess.org/POhZkwmG",
    fen: "1brq2k1/pb1p2p1/1p2p1np/n1p2r2/8/2PP2PP/PPQBNPBK/R4RN1 w - - 2 16",
    score: -0.3,
  },
  {
    lichess: "https://lichess.org/r9eKsnBg",
    fen: "2kr3r/pppn1pp1/8/4p3/1n1PP1Pp/1bN1B2P/1P3PB1/2KR3R w - - 5 18",
    score: -3.2,
  },
  {
    lichess: "https://lichess.org/TaK4cqQY",
    fen: "2rq1rk1/p3pp1p/1p3bp1/8/3n1B2/1P1Q1N2/P4PPP/R3R1K1 w - - 0 16",
    score: -2.1,
  },
  {
    lichess: "https://lichess.org/Mek5dZ4j",
    fen: "1n1r1rk1/1pp3q1/1b2bp2/pP2p3/P5PN/2PB4/3NQPP1/3RR1K1 w - - 1 23",
    score: 8.7,
  },
  {
    lichess: "https://lichess.org/6QGw0unQ",
    fen: "2rq1rk1/pp2ppbp/6p1/3Pnb2/8/2N3PP/PP2QPB1/R1BR2K1 w - - 3 17",
    score: 0.8,
  },
  {
    lichess: "https://lichess.org/17QBSFsy",
    fen: "rnb1k2r/1p3ppp/p3pn2/2b5/2p5/2N1PN2/PP2BPPP/R1BK3R w kq - 0 9",
    score: -0.7,
  },
  {
    lichess: "https://lichess.org/ZFAXH8Rx",
    fen: "r4rk1/pp2qppp/3p2n1/1bpPp3/P1N1P3/8/1PP2PPP/R1Q2RK1 w - - 0 14",
    score: 0.5,
  },
  {
    lichess: "https://lichess.org/r54qFrHe",
    fen: "r2q1rk1/pp2ppbp/n1p2np1/3b4/P1NP4/1P3NP1/4PPBP/R1BQ1RK1 w - - 1 11",
    score: 0.9,
  },
  {
    lichess: "https://lichess.org/Ob9oSrYd",
    fen: "r1b1rbk1/1pqn1pp1/p1pp1n1p/8/P2PPBP1/2N3NP/1PP3B1/R2Q1RK1 w - - 1 15",
    score: 2.2,
  },
  {
    lichess: "https://lichess.org/EHNXqqeb",
    fen: "rnbq1rk1/2p2pp1/p4b1p/1p1P4/2p5/P1N2N2/1PQ2PPP/3RKB1R w K - 0 16",
    score: -4.3,
  },
  {
    lichess: "https://lichess.org/PGP5J8yZ",
    fen: "8/2r3k1/bp2ppp1/p2p4/P2P1P1r/2PN1R2/1P4PP/R5K1 w - - 2 30",
    score: 1.9,
  },
  {
    lichess: "https://lichess.org/33WSP4L6",
    fen: "r1bqr1k1/2p3pp/p2b1p2/1pp1pN2/3nP1P1/3P1N2/PPPBQP1P/R3K1R1 w Q - 2 16",
    score: 0.6,
  },
  {
    lichess: "https://lichess.org/jg08FtrN",
    fen: "2kr1b2/1p3q2/p1p2r2/P3R1p1/2pP1p2/2P2P2/1P1BQ1P1/R5K1 w - - 0 26",
    score: 0,
  },
  {
    lichess: "https://lichess.org/SKn8MQrP",
    fen: "8/3k4/3br1p1/3p3p/2R4P/B4P1K/6P1/8 w - - 0 33",
    score: -0.2,
  },
  {
    lichess: "https://lichess.org/xuPn8PK9",
    fen: "r4rk1/pp2qppp/2bp4/4n3/8/1P2BN1P/1PP1QPP1/R3R1K1 w - - 3 17",
    score: 1.2,
  },
  {
    lichess: "https://lichess.org/JCMqgGan",
    fen: "8/p3kp2/1p1p1qpQ/2bP4/4P2P/5N2/r4PP1/4R1K1 w - - 2 38",
    score: -5.3,
  },
  {
    lichess: "https://lichess.org/42o5jWm0",
    fen: "1r4k1/p1r2q1p/2p2pp1/Q3p3/1b1pPP2/1P6/1PP1N1PP/3RR2K w - - 1 27",
    score: -5.3,
  },
  {
    lichess: "https://lichess.org/YvzKOsgb",
    fen: "rn1qk2r/pbpp1ppp/1p2p3/4P3/3P4/2bB1N2/P1P2PPP/R1BQ1RK1 w kq - 0 9",
    score: 0.2,
  },
  {
    lichess: "https://lichess.org/t2gCf8dC",
    fen: "1r1r2k1/2q3pp/2N1pn2/5p2/2P1n3/4BB2/P1Q3PP/5RK1 w - - 3 30",
    score: 0.3,
  },
  {
    lichess: "https://lichess.org/9llCgsTk",
    fen: "2r2rk1/5ppp/p2qp3/1p6/2p5/P2bPBP1/1P1Q1PP1/2R1R1K1 w - - 2 23",
    score: -3.5,
  },
  {
    lichess: "https://lichess.org/GrVHYtaw",
    fen: "r4rk1/pp4pp/2q1pP2/2b1n1B1/P1pp2P1/2P5/1P4QP/RN3R1K w - - 0 21",
    score: -1.5,
  },
  {
    lichess: "https://lichess.org/SpKnvYG9",
    fen: "2r5/5p1p/4p1p1/p1Pk2P1/3P1P2/1R1K2P1/p7/8 w - - 0 35",
    score: -0.1,
  },
  {
    lichess: "https://lichess.org/6Os4y9bU",
    fen: "r1bq1rk1/p1p4p/8/3p1p2/3P1Bpb/3B4/PPP3P1/R2Q1RK1 w - - 0 15",
    score: 0.5,
  },
  {
    lichess: "https://lichess.org/1cQ7M9W4",
    fen: "r2q1rk1/pp2nppp/1bn5/1B1p3b/8/1NP2N1P/PP3PP1/R1BQR1K1 w - - 1 13",
    score: 0.6,
  },
  {
    lichess: "https://lichess.org/s9GwWgjs",
    fen: "8/6bp/1p1pk1p1/pP1npp2/P1KP4/4P1BP/2N2PP1/8 w - - 4 32",
    score: 0,
  },
  {
    lichess: "https://lichess.org/gG4p1NbD",
    fen: "r1bq1rk1/1pp2pp1/p1np3p/2bNp3/4P3/2PP1N2/PP2BPPP/R2Q1RK1 w - - 1 11",
    score: 0,
  },
  {
    lichess: "https://lichess.org/obBz2e06",
    fen: "2kr1b1r/ppp1ppp1/5n2/nq6/2p3p1/3P2P1/P3PPBP/RNBQR1K1 w - - 2 12",
    score: -0.8,
  },
  {
    lichess: "https://lichess.org/ip9TqXsz",
    fen: "5r1k/1bqn3p/p2b1rp1/1p1Pp3/2p1P1Q1/3BN1B1/PP3PP1/R3R1K1 w - - 0 27",
    score: -0.7,
  },
  {
    lichess: "https://lichess.org/5KtPYand",
    fen: "5r1r/1bqpk2p/p3pb2/1p4NQ/1n2B3/8/PPP2PPP/R1B1R1K1 w - - 3 18",
    score: 7.2,
  },
  {
    lichess: "https://lichess.org/dHpUimMU",
    fen: "r2q1r2/1pp2p1k/3p1p1p/p1b1p3/2PnP1BB/3P4/PP3PPP/R2Q1RK1 w - - 3 14",
    score: 2.3,
  },
  {
    lichess: "https://lichess.org/rgyAKT6d",
    fen: "r1bq1r2/p3n1kp/1p3pp1/2pPp3/2P1P1B1/2P3NP/P4RP1/R2Q2K1 w - - 2 19",
    score: 1.3,
  },
  {
    lichess: "https://lichess.org/XdwOd55x",
    fen: "8/pQ3p2/2n1k1p1/3pPbBp/q6P/2p5/P1P2PP1/R3K2R w KQ - 1 21",
    score: 13.5,
  },
  {
    lichess: "https://lichess.org/LB5Mbzfb",
    fen: "2r1kbr1/pp1q1p1p/4p2p/3pP3/2nP2P1/2N2N1P/PP3P2/2RQ1R1K w - - 5 16",
    score: 2.3,
  },
  {
    lichess: "https://lichess.org/PIScA04G",
    fen: "r3k1r1/1pp1qp2/1b2nn1p/pP2B1pb/P1B1P3/2PP3P/2QN1PP1/R4RK1 w q - 1 19",
    score: -2.5,
  },
  {
    lichess: "https://lichess.org/M9guVeHp",
    fen: "rn1qk2r/1b2bpp1/p3p2p/1p2P3/2pP4/B1P2N2/2Q1BPPP/R4RK1 w kq - 0 14",
    score: -1,
  },
  {
    lichess: "https://lichess.org/4WI68kDu",
    fen: "r2r2k1/pp2ppbp/2n3p1/q1n2b2/2B2B2/P1N1PN2/1P3PPP/2RQ1RK1 w - - 1 15",
    score: -2,
  },
  {
    lichess: "https://lichess.org/3bxfq42x",
    fen: "4r2k/pp4p1/7p/3R4/2PQpq2/1P5P/P4PPK/8 w - - 7 30",
    score: 3.7,
  },
  {
    lichess: "https://lichess.org/lv7P5rJg",
    fen: "4r1k1/pp3qp1/5n1p/2bpR3/6PB/2PQ3P/PP1N1P2/6K1 w - - 1 22",
    score: 5.5,
  },
  {
    lichess: "https://lichess.org/iILvJkRf",
    fen: "3r1rk1/pp1n1pp1/2p1pn1p/q6P/3P4/P2Q2N1/1PPN1PP1/1K1R3R w - - 5 17",
    score: 0,
  },
  {
    lichess: "https://lichess.org/6tGXJiLE",
    fen: "3q1rk1/4bppp/2n2n2/1p1p2N1/2rpP1b1/1N4P1/3B1PBP/1R1QR1K1 w - - 2 19",
    score: -5.9,
  },
  {
    lichess: "https://lichess.org/Bnqupf3M",
    fen: "5k2/3r2bp/3nppp1/B2N4/4P3/1P3PP1/P5KP/2R5 w - - 2 35",
    score: 7.8,
  },
  {
    lichess: "https://lichess.org/Dk895BH6",
    fen: "r1bq1rk1/1ppnppbp/2np2p1/6P1/7P/1pN1PQ2/PBPP1P2/2KR1BNR w - - 0 11",
    score: 0.1,
  },
  {
    lichess: "https://lichess.org/Gn5AEMYe",
    fen: "6k1/pr3pp1/4p2p/2Rn1b2/3Pp3/BN2P2P/P4PP1/6K1 w - - 3 25",
    score: 1.1,
  },
  {
    lichess: "https://lichess.org/JTsRUXPj",
    fen: "6r1/1b5p/p2k4/1prnp3/3R3B/1B6/PP4PP/4R1K1 w - - 0 31",
    score: 5.5,
  },
  {
    lichess: "https://lichess.org/8TC2o3IF",
    fen: "r1b2rk1/pp3pp1/1q5p/3Bb3/2pP4/8/PPP3PP/R1BQ1RK1 w - - 0 15",
    score: -0.4,
  },
  {
    lichess: "https://lichess.org/6YBekMvJ",
    fen: "2rq1r2/1p3pkp/p2p2p1/2pP4/1P1nP3/3B1P2/P2Q2PP/3R1R1K w - - 1 23",
    score: 0.6,
  },
  {
    lichess: "https://lichess.org/E1F48N0H",
    fen: "8/8/3b2p1/3k1p1p/3B1PP1/3KP2P/8/8 w - h6 0 52",
    score: 0,
  },
  {
    lichess: "https://lichess.org/CQfcgtKK",
    fen: "r1b2rk1/1p2npb1/2n3p1/1BN1p2p/P1ppP2P/2P5/1P2NPPB/R3K2R w KQ - 1 18",
    score: 1.2,
  },
  {
    lichess: "https://lichess.org/XtGlQExb",
    fen: "8/1r2k3/1r1ppp2/p3n1p1/P1P1P2p/1P3P1P/2KR1P2/3R2N1 w - - 12 38",
    score: -2.5,
  },
  {
    lichess: "https://lichess.org/IZsVYshf",
    fen: "r3kb1r/p1nq1pp1/1pp1p3/3pPnNp/Q1PP4/2N1B3/PP3PPP/R4RK1 w kq - 6 13",
    score: 0.5,
  },
  {
    lichess: "https://lichess.org/GCFpxBas",
    fen: "8/8/1b4k1/1p2Kp2/p1p5/P1B5/1P3P2/8 w - - 4 48",
    score: 0,
  },
  {
    lichess: "https://lichess.org/Wdeqw5nf",
    fen: "r2r2k1/pp2bnpp/5p2/PP2p3/5n1B/2P1NN2/5PPP/R2R2K1 w - - 4 23",
    score: -1.2,
  },
  {
    lichess: "https://lichess.org/1M70Um52",
    fen: "1k1r3r/2p1q2p/Bp2pp2/8/4b3/4B1Q1/PP3P1P/1KR3R1 w - - 2 24",
    score: 6.7,
  },
  {
    lichess: "https://lichess.org/I2dKdVSz",
    fen: "r2r2k1/2q2ppp/p2bpn2/8/P1PN4/1PBQ3P/5PP1/R4RK1 w - - 1 22",
    score: 2.4,
  },
  {
    lichess: "https://lichess.org/hUFfx9x0",
    fen: "1rbr2k1/4np1p/4p1p1/q1N5/p2PB3/P3P1P1/2Q2P1P/2R2RK1 w - - 0 21",
    score: 5.3,
  },
  {
    lichess: "https://lichess.org/BJnDRoMk",
    fen: "rn2k2r/pp2qpnp/2p3p1/3p4/3P4/2NbP2P/PPQ1NPP1/2KR3R w kq - 0 13",
    score: -0.1,
  },
  {
    lichess: "https://lichess.org/rLIh0GAJ",
    fen: "r3k2r/1pqn3p/2p2np1/p2p3B/P1PPp3/NP2P3/6PP/R2Q1RK1 w kq - 0 15",
    score: 1.1,
  },
  {
    lichess: "https://lichess.org/8ZK187IQ",
    fen: "r1b4r/1p1k1ppp/2nBp3/b2p3n/2pP4/P3PN2/1P1NBPPP/2R2RK1 w - - 8 15",
    score: 0,
  },
  {
    lichess: "https://lichess.org/zQ6rIA8j",
    fen: "3rr1k1/1q1n1bp1/pp5p/2pP4/P1P5/4PN1P/1P1n1PPQ/R1R3K1 w - - 0 24",
    score: -1.9,
  },
  {
    lichess: "https://lichess.org/BGn3yjvX",
    fen: "3rr1k1/ppq2ppb/2p2n1p/4p3/1bPnP3/1PN1N1PP/PB3PBK/R2QR3 w - - 11 20",
    score: -2.6,
  },
  {
    lichess: "https://lichess.org/DuOZGhGD",
    fen: "2r3k1/pp3p1p/4p1p1/1b1pP1Qn/1P1P4/q4P2/3B1P1P/1R2K1R1 w - - 0 25",
    score: -5.6,
  },
  {
    lichess: "https://lichess.org/g1vQSI32",
    fen: "2k2r2/Qp4p1/4p2p/4r3/4Nq2/2NPnP2/PPP3Pb/R4K1R w - - 1 21",
    score: 5.7,
  },
  {
    lichess: "https://lichess.org/3Ewg7nnt",
    fen: "r2r2k1/1p2p1bp/4p1p1/q1p5/2P1PP2/1P2B3/4B1PP/2QR2K1 w - - 1 22",
    score: -4,
  },
  {
    lichess: "https://lichess.org/ZI3Ekgct",
    fen: "1k6/p4pp1/7p/2p5/4B3/5K2/Pr3rPP/1R5R w - - 0 26",
    score: 4.2,
  },
  {
    lichess: "https://lichess.org/VrsStlxj",
    fen: "8/8/1pk1Kb2/2p5/r1Pp1B2/8/8/4R3 w - - 0 40",
    score: -0.2,
  },
  {
    lichess: "https://lichess.org/yMRPHRgg",
    fen: "8/p4kp1/1p2p3/4P3/1P6/P5RP/4r1P1/6K1 w - - 1 35",
    score: 0.6,
  },
  {
    lichess: "https://lichess.org/Ryk7LuSg",
    fen: "3rr1k1/6p1/1qp2p2/p2pn2p/2Pb2bP/1P2P1P1/PBQ2PB1/R3R1K1 w - - 0 20",
    score: 1.4,
  },
  {
    lichess: "https://lichess.org/aZc1xviT",
    fen: "1r3rk1/3R1pp1/4p1q1/4P2p/7P/5QP1/5PK1/3R4 w - - 0 38",
    score: 0,
  },
  {
    lichess: "https://lichess.org/IK4dZ8fR",
    fen: "1qr2b1k/3R1Bpp/2r5/p1P3P1/Np2Pp2/5P2/P4Q1P/2R3K1 w - - 1 32",
    score: 9.1,
  },
  {
    lichess: "https://lichess.org/Srty0iaG",
    fen: "8/pknr2pp/1pp1bp2/8/2P5/P4PP1/1P2BB1P/2KR4 w - - 1 24",
    score: 0.7,
  },
  {
    lichess: "https://lichess.org/zVfagJ0O",
    fen: "2r1r1k1/5ppp/p7/1pq1pNQn/8/2n2b2/P4PPP/1BRR2K1 w - - 2 24",
    score: -8.7,
  },
  {
    lichess: "https://lichess.org/i4cLonYa",
    fen: "3r2rk/1p6/p1n1p3/2P1P1qp/1P1BR1p1/P7/5PpP/2RQ2K1 w - - 1 27",
    score: -2.3,
  },
  {
    lichess: "https://lichess.org/wKb0P2E8",
    fen: "r1bqkb1r/pp3ppp/2n1pn2/2pp4/3P4/5NP1/PPP1PPBP/RNBQ1RK1 w kq - 1 6",
    score: 0.5,
  },
  {
    lichess: "https://lichess.org/nc6yEHUZ",
    fen: "r4rk1/pbpn1pp1/1p1bpq1p/8/3P4/4BN2/PPPQBPPP/1K1R3R w - - 8 12",
    score: 0,
  },
  {
    lichess: "https://lichess.org/zlb6wYjy",
    fen: "3r2k1/p1q3pp/1p3p2/3b4/2nB4/1NP4P/P4PP1/2Q1R1K1 w - - 2 27",
    score: -0.7,
  },
  {
    lichess: "https://lichess.org/UhkMjtxo",
    fen: "2k5/2p2p2/p3p3/2p4p/4r2P/2P3P1/PP1R1KP1/8 w - - 0 35",
    score: 3,
  },
  {
    lichess: "https://lichess.org/yDwgw1CK",
    fen: "4n1k1/Q1p3p1/1n1p3p/1P1Pp1q1/1P2P3/1N3P1P/8/2R3K1 w - - 1 32",
    score: 0.3,
  },
  {
    lichess: "https://lichess.org/s4qenndx",
    fen: "r4br1/1k2nb1p/6p1/Pp2Bp2/2pPp1P1/2P1PP1P/1K2B3/R3N2R w - - 2 25",
    score: 2.2,
  },
  {
    lichess: "https://lichess.org/nakI1sg7",
    fen: "3R4/6pk/5p1p/5P2/6P1/6K1/3p2P1/3r4 w - - 0 49",
    score: 0,
  },
  {
    lichess: "https://lichess.org/i4NggoZh",
    fen: "3q1rk1/5ppp/p3p3/1p1p4/1brP2b1/Q1N1P1P1/P4PBP/R1R3K1 w - - 0 19",
    score: -7,
  },
  {
    lichess: "https://lichess.org/LDJ6Sncd",
    fen: "8/p4kp1/1pr2nn1/5B1p/2PB4/1P4P1/PK5P/3R4 w - - 1 30",
    score: 5.4,
  },
  {
    lichess: "https://lichess.org/o84RvaFL",
    fen: "5r1k/p5b1/1p1N3p/2p1p1pq/P3Q3/2P1B3/1P3PK1/8 w - - 4 32",
    score: -7.2,
  },
  {
    lichess: "https://lichess.org/zF0VhLgV",
    fen: "3rk3/1bq2p2/p1p4Q/1pb1p3/P3P3/1BP4P/1P3PP1/4R1K1 w - - 6 33",
    score: -1.3,
  },
  {
    lichess: "https://lichess.org/wcqTpVU9",
    fen: "3rkb1r/pp4pp/2n5/2pQ4/8/4P3/Pq3PPP/3RKBNR w Kk - 2 13",
    score: 0,
  },
  {
    lichess: "https://lichess.org/ktKlbFxW",
    fen: "r2qk2r/ppbb1ppp/4pn2/1BP5/1P6/P1N2Q2/1B3PPP/R3K2R w KQkq - 3 14",
    score: 6.7,
  },
  {
    lichess: "https://lichess.org/7O2q81Nn",
    fen: "r1b2rk1/pp3ppp/4pb2/1P6/2N5/6P1/Q4PBP/6K1 w - - 2 28",
    score: 0,
  },
  {
    lichess: "https://lichess.org/wjWUcmQJ",
    fen: "1r3rk1/2q1ppbp/3p2p1/2pP4/Qpn1P3/2P1B1PP/1P3PB1/R1R3K1 w - - 2 20",
    score: -3.7,
  },
  {
    lichess: "https://lichess.org/9YYWJPnS",
    fen: "2kr1b2/pp1nppp1/1q3n2/2pPpPBb/Q1P4P/2N4P/PP3RB1/R5K1 w - - 5 19",
    score: 5.5,
  },
  {
    lichess: "https://lichess.org/Hq1PGxCp",
    fen: "r1bqr2k/pppn1pp1/1b3n1p/4p3/5P1B/1NN3Q1/PPP1B1PP/2KR3R w - - 0 15",
    score: 3.5,
  },
  {
    lichess: "https://lichess.org/nbpcLSBJ",
    fen: "8/6k1/1p1p2p1/1R2p1P1/n4p2/5PK1/8/8 w - - 0 41",
    score: 0,
  },
  {
    lichess: "https://lichess.org/qCiIu9f1",
    fen: "r3kb2/pp1n2rp/1n3qp1/3pp1N1/4p2Q/1BP1B3/PP3PPP/R4RK1 w q - 4 18",
    score: 3.8,
  },
  {
    lichess: "https://lichess.org/JyAQx7k8",
    fen: "2rr2k1/1p2qpp1/p2pbn1p/4p1Q1/1n2P3/1PNB4/PBP2PPP/1K1R3R w - - 0 16",
    score: -0.1,
  },
  {
    lichess: "https://lichess.org/bp0Qw2Zy",
    fen: "r3kbnr/2qn1p1p/p1ppp1p1/1p2P3/3PNP2/3BBQ1P/PPP3P1/R4RK1 w kq - 2 13",
    score: 4.4,
  },
  {
    lichess: "https://lichess.org/t0PXoZ0H",
    fen: "3r2k1/4b1pp/p7/1p1r1p2/8/P2P1R2/1P3B1P/3R2K1 w - f6 0 25",
    score: -4.5,
  },
  {
    lichess: "https://lichess.org/nSsTzh0r",
    fen: "1r1qnrk1/pp1n1pbp/3p2p1/2pP2P1/4PP2/2N2B2/PP5P/R1BQ1RK1 w - - 1 14",
    score: 1.1,
  },
  {
    lichess: "https://lichess.org/CN75IdvM",
    fen: "3R4/5pkp/p4Nr1/1p2pQ2/Pq6/7K/BP5P/2r5 w - - 11 33",
    score: 0,
  },
  {
    lichess: "https://lichess.org/xjX3sq75",
    fen: "4r3/2p3kp/2Pb2p1/p2B1p2/2P5/5P1P/P5P1/1R3K2 w - a6 0 33",
    score: 0,
  },
  {
    lichess: "https://lichess.org/a7aXgmhx",
    fen: "2r1n3/3qkppp/4p3/3b4/1R1B4/5BP1/1P3P1P/Q5K1 w - - 1 31",
    score: 0.4,
  },
  {
    lichess: "https://lichess.org/MezcCX3R",
    fen: "r2q1rk1/1p2nppp/3pb3/pPn1p1P1/4P3/P1N1P2P/2P1N1B1/R2Q1RK1 w - - 3 17",
    score: -1.4,
  },
  {
    lichess: "https://lichess.org/wcLVesvp",
    fen: "r1b1kn1r/pp2qpp1/2p2n1p/2b5/2B1PB2/2N5/PPPNQ1PP/R4R1K w kq - 3 14",
    score: 7.6,
  },
  {
    lichess: "https://lichess.org/YRVdYRIn",
    fen: "rnbq1rk1/p1p1bppp/1p2p3/3nP3/3P4/2NB1N2/PPP3PP/R1BQK2R w KQ - 1 9",
    score: 2.1,
  },
  {
    lichess: "https://lichess.org/X0w6TI4o",
    fen: "1nr1r1k1/1p1qppbp/1B1p4/1N2P2p/P1b2P2/2N5/1PPR2PP/R2Q2K1 w - - 0 22",
    score: 7.4,
  },
  {
    lichess: "https://lichess.org/sjhQhBRf",
    fen: "1rr3k1/4pp1p/3p1qp1/p7/4P3/1P1Q4/1PP3PP/2KRR3 w - - 0 21",
    score: -1.2,
  },
  {
    lichess: "https://lichess.org/kPk1x6WC",
    fen: "r7/5p1p/P5p1/1B2p3/RPbk4/8/3r1PPP/5RK1 w - - 0 31",
    score: 3,
  },
  {
    lichess: "https://lichess.org/KJCnNNaM",
    fen: "1r4k1/p4pp1/1b2pq1p/3p4/r7/2P5/PP1NQPPP/1R3RK1 w - - 8 20",
    score: -1.4,
  },
  {
    lichess: "https://lichess.org/ikwGE0V9",
    fen: "3q1rk1/1p4pp/5p2/pBr5/QnPnp1b1/4P3/PP3BPP/R4RK1 w - - 0 19",
    score: -1.3,
  },
  {
    lichess: "https://lichess.org/hlKhmQO8",
    fen: "r4rk1/1pn2ppp/3qp3/PB1p4/3Pn3/2P2N1P/1P3PP1/R2QR1K1 w - - 2 19",
    score: 3,
  },
  {
    lichess: "https://lichess.org/xFj95pBn",
    fen: "1r1r2k1/p4p2/n1p3p1/1pPp4/6R1/4P3/2PK3P/5BR1 w - - 0 30",
    score: -5.7,
  },
  {
    lichess: "https://lichess.org/etfYAOn1",
    fen: "3r1rk1/p4p1p/6p1/1p6/2p1B3/8/K4PPP/3R3R w - - 2 26",
    score: 0.5,
  },
  {
    lichess: "https://lichess.org/yuHFL0qu",
    fen: "2rr2k1/5pp1/4p3/3b2N1/pBpP3P/Pp3P2/3K2P1/3R3R w - - 2 33",
    score: 5.5,
  },
  {
    lichess: "https://lichess.org/3NrDImNW",
    fen: "5k2/1p3p2/pq1p2p1/2pP2b1/P1P3N1/5P2/1PQ3P1/4BK2 w - - 0 34",
    score: 8.8,
  },
  {
    lichess: "https://lichess.org/GKKuAW13",
    fen: "r3kb1r/pppq1ppp/2n2n2/1B6/4pP2/2N5/PPPP2PP/R1BQK2R w KQkq - 2 8",
    score: -1.5,
  },
  {
    lichess: "https://lichess.org/06DCpnJg",
    fen: "r4rk1/p2nqppp/2ppb3/4p3/2P1P3/1PNB4/P4PPP/R2Q1RK1 w - - 0 13",
    score: -0.1,
  },
  {
    lichess: "https://lichess.org/VaTJaVlr",
    fen: "r3r1k1/1q1bbp1p/n2p1np1/pp1Pp3/4P3/P2B1NN1/1P2QPPP/R1B1R1K1 w - - 5 21",
    score: -0.2,
  },
  {
    lichess: "https://lichess.org/5AxDF2JZ",
    fen: "2rq1rk1/1b1nbppp/p2ppn2/1p6/3NP3/P1NBBP2/1PP3PP/R3QRK1 w - - 5 13",
    score: -0.6,
  },
  {
    lichess: "https://lichess.org/2YDwzRly",
    fen: "r1b1k2r/pp2ppbp/1qn3p1/1B1nN3/3P4/8/PP3PPP/RNBQ1RK1 w kq - 2 10",
    score: 0.2,
  },
  {
    lichess: "https://lichess.org/ke3ipHL2",
    fen: "r5k1/1p3pp1/p1p1r1Qp/4q3/1P5P/P3P3/4KPP1/3R3R w - - 0 23",
    score: -1.3,
  },
  {
    lichess: "https://lichess.org/CkvDnAGk",
    fen: "8/3q1ppk/7p/8/8/6P1/4QP2/6K1 w - - 2 38",
    score: -0.4,
  },
  {
    lichess: "https://lichess.org/U4Q3kkXs",
    fen: "r2q1r1k/1p2b1pp/2pp4/pPn5/P1b1PpP1/6P1/1BP1N1B1/R2Q1RK1 w - - 0 17",
    score: -2,
  },
  {
    lichess: "https://lichess.org/G7HGBTT0",
    fen: "r2q1rk1/1p3ppp/n1pb1p2/p7/P2P2b1/4BN2/1PPQBPPP/R3K2R w KQ - 3 12",
    score: -0.3,
  },
  {
    lichess: "https://lichess.org/KkAxFP6v",
    fen: "rnbq2k1/pp3pbp/3p2p1/2pP4/2P2P2/3BrN2/PP2N1PP/R2Q1RK1 w - - 0 13",
    score: -0.1,
  },
  {
    lichess: "https://lichess.org/f8WoyVTL",
    fen: "2rqkb1r/3npppp/p4n2/4N1Bb/3Pp3/1Bp5/PPQ2PPP/R4RK1 w k - 0 14",
    score: -0.5,
  },
  {
    lichess: "https://lichess.org/GAx67ru1",
    fen: "r1bq1rk1/pp3pbp/3p2p1/4p3/2PnP3/2NBB3/PP3PPP/R2Q1RK1 w - - 0 12",
    score: 0.9,
  },
  {
    lichess: "https://lichess.org/0ayIfDDh",
    fen: "2r2rk1/1p3ppn/p2q2p1/3Pn3/P1p1P3/2N1Q3/1P2B1PP/3R1RK1 w - - 1 23",
    score: -0.5,
  },
  {
    lichess: "https://lichess.org/QDn6F7kd",
    fen: "r4rk1/p4ppp/q1p2n2/1pP2p2/8/1P4P1/P2BPPBP/Q4RK1 w - - 1 19",
    score: 0.2,
  },
  {
    lichess: "https://lichess.org/wbq6m6pd",
    fen: "r1bqk2r/pp2bpp1/2n1pn1p/3p4/1PP5/P1N1PN2/5PPP/R1BQKB1R w KQkq - 1 9",
    score: 0.5,
  },
  {
    lichess: "https://lichess.org/DSxbB5B6",
    fen: "r3kb1r/pp2pppp/2n5/8/2Ppq1b1/4BN2/PP2BPPP/R2QK2R w KQkq - 0 10",
    score: -3.6,
  },
  {
    lichess: "https://lichess.org/ITVZMp2f",
    fen: "r3r1k1/5ppp/p1p2q2/1pQb4/5P2/P4N2/1P1NBKPP/4R3 w - - 2 20",
    score: 0,
  },
  {
    lichess: "https://lichess.org/l7mBgDqr",
    fen: "1r1qr1k1/p1p2ppp/3b1n2/3p4/6b1/1P1B1Q2/PBP2PPP/RN3RK1 w - - 3 15",
    score: -5.2,
  },
  {
    lichess: "https://lichess.org/FDrosC56",
    fen: "r2k3r/pp1n1ppp/5n2/8/3p4/1N6/PPPN2PP/4RRK1 w - - 4 18",
    score: 1.4,
  },
  {
    lichess: "https://lichess.org/qvxfW4if",
    fen: "r1q2rk1/4bppp/p1p1pn2/3p1b2/Q2N1B2/2P1P3/PP3PPP/R3KB1R w KQ - 6 13",
    score: 0.9,
  },
  {
    lichess: "https://lichess.org/ei38OGzM",
    fen: "1rb3nr/pp1k1pbp/1q2p1p1/1N2p3/1Q1p4/3P1NP1/PPP2PBP/R3K2R w KQ - 0 13",
    score: 2.3,
  },
  {
    lichess: "https://lichess.org/P4WkFXbc",
    fen: "3k4/1b1nbp2/p2p3p/3Pp1p1/1PN1P1P1/P3BP2/5KBP/8 w - - 5 32",
    score: 5.7,
  },
  {
    lichess: "https://lichess.org/MtHYGLp6",
    fen: "r2qr1k1/1b2b1pp/pnn1p3/1p1pPp2/1P1P4/P2BBN2/4NPPP/2RQR1K1 w - - 2 18",
    score: 3.2,
  },
  {
    lichess: "https://lichess.org/2FtI9sF4",
    fen: "4r1k1/6pp/p3bp2/1r1p4/2p5/2B2PP1/PP1RPK1P/3R4 w - - 0 25",
    score: 0.9,
  },
  {
    lichess: "https://lichess.org/6tlRVJD2",
    fen: "1r3rk1/p1qbbpp1/3p3p/2pB4/4P3/1P3N2/P1Q2PPP/3RR1K1 w - - 3 17",
    score: 0.9,
  },
  {
    lichess: "https://lichess.org/2aIfuu06",
    fen: "1r1q1rk1/p1pb1p1p/3p1npb/3Pp2P/1p2P3/5P2/PPPQB1P1/1NKR3R w - - 0 15",
    score: 1.2,
  },
  {
    lichess: "https://lichess.org/zXO4n7VK",
    fen: "8/pp5p/2r3p1/3R4/2P1k3/1PK1p2P/P5P1/8 w - - 2 29",
    score: 2,
  },
  {
    lichess: "https://lichess.org/6D6nBHf6",
    fen: "8/5k2/r3p2p/1p2Bpp1/8/1PP4P/2RK1Pn1/8 w - - 0 36",
    score: -1.9,
  },
  {
    lichess: "https://lichess.org/qBohNuci",
    fen: "1rbqr1k1/2n3b1/6pp/1p1Ppp2/2P1NpP1/3B1N1P/1P1Q1P2/4RRK1 w - f6 0 24",
    score: -2.1,
  },
  {
    lichess: "https://lichess.org/WB3OwyIw",
    fen: "1r1q1bk1/1pNb2r1/1N1p1nn1/3Pp3/PP2Pp2/5Pp1/2Q1B1P1/2R1K1BR w K - 2 27",
    score: 5,
  },
  {
    lichess: "https://lichess.org/pU6ddlCo",
    fen: "1n4k1/2b3q1/bp2p3/p1p1P1p1/P1PpBrP1/1P3N2/4QPK1/4RR2 w - - 0 37",
    score: 4.5,
  },
  {
    lichess: "https://lichess.org/ctdmy2zH",
    fen: "r4rk1/pp1n1pp1/3q4/3P3p/6n1/6K1/PP2N1B1/R1BQ1R2 w - - 0 21",
    score: 0.5,
  },
  {
    lichess: "https://lichess.org/DVhUneVo",
    fen: "7r/pp2rkb1/1n1p1n1p/1N3b2/3P2pP/8/PPP1BP1N/2KRR3 w - - 0 24",
    score: 1.7,
  },
  {
    lichess: "https://lichess.org/rika0EWr",
    fen: "r2q1rk1/1bpnbppp/pp1ppn2/8/P1BP1B2/2P1PN1P/1P1N1PP1/R2QK2R w KQ - 2 10",
    score: 0.2,
  },
  {
    lichess: "https://lichess.org/9VdHbEnF",
    fen: "4n2k/1p1q1r1p/rp1p2pb/nN1Ppp2/8/BQ1P1NP1/4PP1P/1R1R2K1 w - - 1 25",
    score: 2.3,
  },
  {
    lichess: "https://lichess.org/dBOezxoc",
    fen: "r2qr1k1/1p3pb1/p4np1/4n1Np/N4B1P/P2pP3/1P2QPP1/2RR2K1 w - - 0 18",
    score: 1.2,
  },
  {
    lichess: "https://lichess.org/A25OZwYb",
    fen: "4r1k1/1pp1qpp1/1n1p2n1/Q2P3p/P1P1rbP1/1P3P1P/4NB2/3R1RK1 w - - 0 29",
    score: 0,
  },
  {
    lichess: "https://lichess.org/aEqpWMJD",
    fen: "1rb1r1k1/2qn1pbp/p2p1np1/1p1P4/P1p1PP2/2NQB1PP/1P2N1B1/R4RK1 w - - 0 17",
    score: -5.5,
  },
  {
    lichess: "https://lichess.org/0T3xeNaD",
    fen: "r4rk1/4bpp1/p1q1pnp1/1p1p2B1/N5P1/1PP2P1P/1P4K1/R2QR3 w - b6 0 20",
    score: -7.7,
  },
  {
    lichess: "https://lichess.org/aV3obKjp",
    fen: "r4rk1/ppq1nppp/2nb4/2pp4/2P3b1/3P1NP1/PP1N1PBP/R1BQR1K1 w - - 1 11",
    score: -0.4,
  },
  {
    lichess: "https://lichess.org/CVxrkume",
    fen: "2rq1rk1/pp3pbp/4p1n1/3pN3/1P1Pp3/2P4P/P4PPB/2RQ1RK1 w - - 0 17",
    score: -1.7,
  },
  {
    lichess: "https://lichess.org/GHLPWdZY",
    fen: "r1b2rk1/pp3pp1/2n2q1p/2bp4/8/5NP1/PPP2PBP/RN1QR1K1 w - - 0 12",
    score: -0.8,
  },
  {
    lichess: "https://lichess.org/DWnHQ8Pu",
    fen: "r5k1/1p1q1p1b/3b1n1p/p1p3p1/2Pp4/PP1P1NP1/2N2P1P/1R1QrBK1 w - - 0 22",
    score: -1.7,
  },
  {
    lichess: "https://lichess.org/8Vcreo7B",
    fen: "8/5pp1/2pkp1p1/1p6/r1nP3P/PKP2PP1/R3N3/8 w - - 3 34",
    score: 0,
  },
  {
    lichess: "https://lichess.org/nYloitv8",
    fen: "r2q1rk1/2n4p/pn4p1/2pPbp2/8/2NBBP2/1P1Q3P/R4RK1 w - - 0 20",
    score: 1.3,
  },
  {
    lichess: "https://lichess.org/qFBH3hk3",
    fen: "r5k1/pp1b2pp/2pBpr2/q1Pn1p2/2BPp3/2P1P3/P1Q2PPP/R1R3K1 w - - 9 17",
    score: 3.6,
  },
  {
    lichess: "https://lichess.org/biSbM7nb",
    fen: "3r3k/pp4p1/7p/8/5q2/3p1P2/PP4KP/3R1R2 w - - 2 27",
    score: -12.2,
  },
  {
    lichess: "https://lichess.org/Yi3ZxbUV",
    fen: "rn2k2r/1b3ppp/p3pn2/1pb5/8/P3PN2/1P2BPPP/RNBR2K1 w kq - 2 11",
    score: 0.6,
  },
  {
    lichess: "https://lichess.org/t7dqRMjg",
    fen: "1rbq1k2/1p3ppp/4p3/p7/8/2bP2P1/2P1QPBP/1R1R2K1 w - - 0 18",
    score: 3.2,
  },
  {
    lichess: "https://lichess.org/a2j1h5a6",
    fen: "4r1k1/pp3pbp/2b3p1/3q4/8/4B1Q1/5PPP/1B2R1K1 w - - 4 28",
    score: -7.5,
  },
  {
    lichess: "https://lichess.org/0fz4y7Wn",
    fen: "2kr3r/1pp1bppp/p3pn2/q1P5/Nn1P4/1B3Q1P/1P1B1PP1/1K1RR3 w - - 1 22",
    score: 2.6,
  },
  {
    lichess: "https://lichess.org/j7hnxKhz",
    fen: "r1bR4/ppp1kppp/5N2/8/8/5P2/PPP1r1PP/5RK1 w - - 2 16",
    score: 5.5,
  },
  {
    lichess: "https://lichess.org/SIdnYrUJ",
    fen: "rn3rk1/2q1bppp/b1pp1n2/p3p3/1p1PP1PP/4BPN1/PPPQ4/2KR1BNR w - - 2 12",
    score: 2.7,
  },
  {
    lichess: "https://lichess.org/pMAZ1xIt",
    fen: "4rrk1/pp4pp/2qb4/4pp2/1PPp4/P2P1PP1/2Q1R1KP/R1B5 w - - 2 21",
    score: 0,
  },
  {
    lichess: "https://lichess.org/e84uejKE",
    fen: "r2qrbk1/1b3pp1/p2p1n1p/1pp5/Pn1PP3/5N1P/1P1N1PP1/RBBQR1K1 w - c6 0 18",
    score: 0.6,
  },
  {
    lichess: "https://lichess.org/tIutOqvP",
    fen: "8/1b2k2p/p5p1/8/1p2P3/2r2P2/P2K2PP/4RB2 w - - 4 32",
    score: 2.4,
  },
  {
    lichess: "https://lichess.org/Ki5gmD0a",
    fen: "r2qrnk1/pp1bbppp/2p1p3/3nP3/2BPN3/P4N2/1PQ2PPP/R1B1R1K1 w - - 3 14",
    score: 2.4,
  },
  {
    lichess: "https://lichess.org/MVenNs97",
    fen: "1r2k2r/1Ppnq1pp/1b1p4/1Q2p3/1P6/P4N2/2P2PPP/R1B1K2R w KQk - 1 16",
    score: 5.4,
  },
  {
    lichess: "https://lichess.org/eDaHM2v0",
    fen: "5rk1/1R4pp/p7/1p6/3b4/3N2P1/PPP1K1PP/8 w - - 7 29",
    score: 5.7,
  },
  {
    lichess: "https://lichess.org/FGkK9Ltz",
    fen: "4r1k1/pp1n1pp1/2p2qp1/2Ppr3/1P1Nn2P/4PB1R/P1Q2PP1/2KR4 w - - 9 21",
    score: -1.4,
  },
  {
    lichess: "https://lichess.org/XekLLvYY",
    fen: "r1b5/2p1q1k1/2p1pppp/P1P3N1/5P2/2Q3P1/7P/3R2K1 w - - 0 30",
    score: 0,
  },
  {
    lichess: "https://lichess.org/CiC3FtZo",
    fen: "r1b2rk1/1pp1q1b1/n2p1pp1/p2Pp1Pp/2P1P3/2N3N1/PP1QBPP1/2KR3R w - - 0 15",
    score: 0.1,
  },
  {
    lichess: "https://lichess.org/8dLwceYW",
    fen: "2kr3r/pp2bp1n/4b1pp/2qp4/6N1/1PN2Q1P/P3BPP1/3RR1K1 w - - 1 20",
    score: 1,
  },
  {
    lichess: "https://lichess.org/lz9wIJPD",
    fen: "5k2/1p1r3p/pR6/8/1P6/7P/P5PK/8 w - - 1 36",
    score: 4.4,
  },
  {
    lichess: "https://lichess.org/936Lw0EB",
    fen: "3r1rk1/7p/ppnN2p1/2p5/6p1/2P5/P1P2PP1/1K1R1B1R w - - 0 21",
    score: 5.9,
  },
  {
    lichess: "https://lichess.org/gEukI7BJ",
    fen: "r2qk2r/ppp2ppp/2n1bn2/2P5/2p5/5N2/PP3PPP/RNBQR1K1 w kq - 2 11",
    score: -2.1,
  },
  {
    lichess: "https://lichess.org/aCXi5ZUP",
    fen: "2rq1rk1/pp2bppp/3p4/3Pp3/1nnQ1B2/2N2N2/PP3PPP/2R2RK1 w - - 0 16",
    score: -5.6,
  },
  {
    lichess: "https://lichess.org/Xo57UId3",
    fen: "r2q1rk1/1p1bbppp/p2ppn2/8/2PnP3/2N1BP2/PP2B1PP/2RQ1RK1 w - - 0 12",
    score: 0.9,
  },
  {
    lichess: "https://lichess.org/wWnYueUk",
    fen: "r2q1rk1/1p1b1pb1/p2P2p1/2p1P2p/P1B2P2/7P/1P4P1/R1BQR1K1 w - - 1 21",
    score: 7.8,
  },
  {
    lichess: "https://lichess.org/gTla2Qu6",
    fen: "2r2r1k/5p1p/4pp2/p5q1/1b1NP3/5QP1/5PKP/R1R5 w - - 2 26",
    score: 0,
  },
  {
    lichess: "https://lichess.org/3LBYx28A",
    fen: "2r2r2/5p1k/p2p1b1p/1p2pPpP/4B1P1/qP3P2/P2QK3/2R4R w - - 4 26",
    score: -0.2,
  },
  {
    lichess: "https://lichess.org/ABypjtTO",
    fen: "4rrk1/1qppbp1p/p3n1pP/1p2Pn2/4N3/5NB1/PPP2PP1/R2QR1K1 w - - 2 19",
    score: 0.5,
  },
  {
    lichess: "https://lichess.org/jHlsZyNQ",
    fen: "2rqr1k1/pb1n1pbp/1pp1pnp1/3p4/2PP4/BPN1PN2/P1Q1BPPP/R2R2K1 w - - 0 13",
    score: 0.5,
  },
  {
    lichess: "https://lichess.org/tSzgko7G",
    fen: "r3k2r/pp2qp2/2n1p3/3pPp1p/8/5NQP/PPP2PP1/R4RK1 w kq - 0 16",
    score: 0.3,
  },
  {
    lichess: "https://lichess.org/CZW76RnE",
    fen: "2r3r1/1p3p1p/p1b4p/5k2/3Q4/2P3R1/PPP2PP1/6K1 w - - 8 26",
    score: 7.2,
  },
  {
    lichess: "https://lichess.org/X5uZ2nRG",
    fen: "r2q1rk1/p3bppp/b1p1pn2/2pp4/4P3/1P1P1N2/PBPN1PPP/R2Q1RK1 w - - 3 10",
    score: 0.8,
  },
  {
    lichess: "https://lichess.org/Sw8g2PXx",
    fen: "r3kb1r/n2b1p1p/p2ppp2/q7/Np2PP2/1P3N2/P1PQ2PP/1K1R1B1R w kq - 1 15",
    score: -0.1,
  },
  {
    lichess: "https://lichess.org/dMySHQYa",
    fen: "2rq1rk1/pb2bppp/1p2pn2/2n5/2pN4/1P2P1P1/PB1NQPBP/2R2RK1 w - - 0 14",
    score: 0.8,
  },
  {
    lichess: "https://lichess.org/q2r6XR4u",
    fen: "3r2k1/p1Rr1p1p/1p4p1/4p3/8/B2b3P/PP3PP1/2R3K1 w - - 0 24",
    score: 0.6,
  },
  {
    lichess: "https://lichess.org/WN2zdiN5",
    fen: "r2q1rk1/p2p2pp/1p2p3/3n1p2/3P4/4P3/PP1N1PPP/R2Q1RK1 w - - 0 15",
    score: 0.2,
  },
  {
    lichess: "https://lichess.org/ynRlkF2Y",
    fen: "r2q1rk1/pb2ppbp/n4np1/8/8/NQ3NP1/Pp2PPBP/R1B2RK1 w - - 0 12",
    score: -0.8,
  },
  {
    lichess: "https://lichess.org/CndB6Lia",
    fen: "1r2k2r/1bq1bppp/pp1ppn2/8/P2QP3/2N1BB2/1PP2PPP/R4RK1 w k - 6 18",
    score: 0.4,
  },
  {
    lichess: "https://lichess.org/mP31EsmH",
    fen: "r2r2k1/5pp1/7p/pQ1p1q2/8/6P1/PP2PP1P/3R1RK1 w - - 0 21",
    score: 1.6,
  },
  {
    lichess: "https://lichess.org/uY0kanuf",
    fen: "r3kb1r/ppqn1pp1/2n1p2p/2ppP2P/3P4/2PQ1NN1/PP3PP1/R1B2RK1 w kq - 3 14",
    score: 0.3,
  },
  {
    lichess: "https://lichess.org/v8mGImze",
    fen: "2rq1r2/5pk1/p2p2p1/np2p3/2PQb3/1P3NPP/P3PPB1/2R2RK1 w - e6 0 19",
    score: 8.5,
  },
  {
    lichess: "https://lichess.org/m94mNuUe",
    fen: "8/4r1bk/1p4p1/1Pnp3p/p1B1pP2/Pq2B2P/1PRQ2P1/6K1 w - - 0 34",
    score: 8.6,
  },
  {
    lichess: "https://lichess.org/AIbLpgAf",
    fen: "1rbqrnk1/p1n1bppp/1p1p4/2pPp3/1PP1P1P1/P1NBBN1P/3Q1P2/R3K2R w KQ - 4 14",
    score: 1.5,
  },
  {
    lichess: "https://lichess.org/LyRz85l6",
    fen: "3r2k1/pp1r2p1/3Pq2p/2Q2p2/P3p3/2N1P3/4NPPP/3R2K1 w - - 3 30",
    score: 5.6,
  },
  {
    lichess: "https://lichess.org/RDD6w7Jt",
    fen: "r1bq1rk1/2p2ppp/2p5/p2p4/4PP2/P1BP1Q2/1P4PP/R4RK1 w - - 0 15",
    score: 2.5,
  },
  {
    lichess: "https://lichess.org/zLpRZGdQ",
    fen: "2r5/1p2kp2/p3p2p/2NbP3/2P2P2/P7/1P5P/2KR4 w - - 1 27",
    score: 1.8,
  },
  {
    lichess: "https://lichess.org/kB6yYn5c",
    fen: "3q2k1/r2p1p2/4p1p1/4P2p/2P2P1P/1P1Q4/5P2/3R1K2 w - - 1 34",
    score: 0,
  },
  {
    lichess: "https://lichess.org/V5zw9cpM",
    fen: "r1b4r/1p1nkppp/2pn4/p3p3/P1B1P3/3NbP2/1PPN1KPP/R2R4 w - - 0 15",
    score: 0.1,
  },
  {
    lichess: "https://lichess.org/3G0Nzrlf",
    fen: "7R/p1p5/1pk1p3/8/2P4P/P2n4/1P3P2/2K5 w - - 1 33",
    score: 8.2,
  },
  {
    lichess: "https://lichess.org/p2UIcH6q",
    fen: "r3r1k1/1p3pp1/8/nQ6/4P2q/R6B/P1P5/1K1R4 w - - 0 32",
    score: 2.2,
  },
  {
    lichess: "https://lichess.org/MfAzW2AI",
    fen: "2k2rr1/q2bn3/pbn1pBp1/1p1pP1Np/3p2P1/PP1B4/2PNQPK1/R6R w - - 6 23",
    score: 2.8,
  },
  {
    lichess: "https://lichess.org/febsUSiW",
    fen: "1r1q1rk1/pb1nbppp/1p2p3/2p5/1nN5/1P1PPNP1/PB2QPBP/2RR2K1 w - - 5 15",
    score: 1.7,
  },
  {
    lichess: "https://lichess.org/x2XzBfea",
    fen: "r3k2r/pp3ppp/8/3pP3/1b1n4/6P1/PP5P/R1BBK2R w KQkq - 2 17",
    score: -1.3,
  },
  {
    lichess: "https://lichess.org/L1poEQaz",
    fen: "5k2/5pp1/pn2pb1p/1p1b4/1P4P1/P2BPN1P/4KP2/2B5 w - - 1 24",
    score: -0.2,
  },
  {
    lichess: "https://lichess.org/Yv9IZA62",
    fen: "r4r2/2q2pkp/n2b1npN/p1pPpP2/4P3/P1P1BQ2/6PP/R4RK1 w - - 3 23",
    score: 0,
  },
  {
    lichess: "https://lichess.org/PA5S2Rug",
    fen: "2k1r3/8/p1nrb1Np/1p4pP/3Pp3/2P3R1/PP1B2P1/4K2R w - - 2 27",
    score: 0.5,
  },
  {
    lichess: "https://lichess.org/pqFvhH1I",
    fen: "r1bqkbnr/1pp3pp/p1p2p2/8/3pP3/5N2/PPP2PPP/RNBQ1RK1 w kq - 0 7",
    score: 0.2,
  },
  {
    lichess: "https://lichess.org/t8zrUTGO",
    fen: "4rrk1/pp1b2p1/1qnbpn1p/3p2B1/3P4/P2B1NN1/1P2RPPP/2RQ2K1 w - - 0 18",
    score: 0.3,
  },
  {
    lichess: "https://lichess.org/p0ggf5o2",
    fen: "r1b2rk1/p2nqppp/2pp4/4p3/2P1P3/2NB4/PP3PPP/R2Q1RK1 w - - 0 12",
    score: 0.4,
  },
  {
    lichess: "https://lichess.org/Kyrtsc9B",
    fen: "r3rnk1/1pq2pbp/2pp1np1/p7/P3PPbB/1NNBQ3/1PP1R1PP/4R2K w - - 9 19",
    score: 0.7,
  },
  {
    lichess: "https://lichess.org/gKEa9GvV",
    fen: "rn3rk1/pb2qpp1/1p2p2p/2pn4/3P4/P1N1PN2/1P3PPP/2RQKB1R w K c6 0 12",
    score: -0.1,
  },
  {
    lichess: "https://lichess.org/1bmDdi7Z",
    fen: "r1n2bk1/1p1q1p1p/4p1p1/pP1pP1B1/P2P4/3B1P2/3Q1P1P/2R3K1 w - - 1 23",
    score: 1.1,
  },
  {
    lichess: "https://lichess.org/W4bpD0Xg",
    fen: "1r1q1rn1/1p3p1k/p1np3b/P1p2Ppp/2N1P3/2PP3P/1P1B1QB1/R4RK1 w - - 0 20",
    score: 7.9,
  },
  {
    lichess: "https://lichess.org/p67QLc30",
    fen: "8/Q3ppkp/2r1b1p1/1p2P2q/3R1P2/4P3/P5P1/6K1 w - - 1 28",
    score: -10.5,
  },
  {
    lichess: "https://lichess.org/mN8lo4wp",
    fen: "1r1q1rk1/3b1pbp/3p2p1/1pp1pP2/1n6/1Pn1P1NP/PB1PQRP1/1BR3K1 w - - 0 18",
    score: 1,
  },
  {
    lichess: "https://lichess.org/soNZbyRF",
    fen: "r1bq1rk1/p2p1ppp/2p2n2/2b1p3/2P1P3/2NB4/PP3PPP/R1BQ1RK1 w - - 3 10",
    score: 0,
  },
  {
    lichess: "https://lichess.org/fgYpNXyP",
    fen: "r2k1b1r/ppqb1ppp/2n1p3/3pPn2/NP1P4/P3BN2/5PPP/R2QKB1R w KQ - 7 12",
    score: 2.8,
  },
  {
    lichess: "https://lichess.org/08s6qTqw",
    fen: "r4rk1/3n2bp/1pq3pn/p2pp3/2pP2PB/2P1PN1P/PP2Q3/1R2KN1R w K - 0 21",
    score: -2.1,
  },
  {
    lichess: "https://lichess.org/dGQ94qh5",
    fen: "1rbq1rk1/1pn2pbp/p2p1np1/2pP4/P4B2/2N1PN1P/1P2BPP1/R2Q1RK1 w - - 0 13",
    score: 0.2,
  },
  {
    lichess: "https://lichess.org/RBE1c5xn",
    fen: "4qrk1/5ppp/2n1p3/1pN1P3/2n5/6R1/2P1Q1PP/5R1K w - - 4 34",
    score: 8.1,
  },
  {
    lichess: "https://lichess.org/lDTBgAMV",
    fen: "r1br4/pp2qpnk/2pp2n1/6p1/P1P1P2p/1PN2P1P/2R3P1/2BQRB1K w - - 0 25",
    score: 2.3,
  },
  {
    lichess: "https://lichess.org/9URtVMrP",
    fen: "r1b1kr2/p2nq1p1/1pp1p1Pp/3pP3/3P1nRP/2NB1P2/PPPQ4/2K4R w q - 0 20",
    score: 3.8,
  },
  {
    lichess: "https://lichess.org/F7CuFzuB",
    fen: "3r2k1/1p3rp1/p4b2/3P3p/2P1R1p1/1P1B2B1/6P1/q2Q3K w - - 2 30",
    score: -2.9,
  },
  {
    lichess: "https://lichess.org/ioA2RT5l",
    fen: "r4rk1/2p3p1/1p1pp1B1/pP1np1p1/8/2P3PP/1P3P2/R3R1K1 w - - 0 23",
    score: -3.8,
  },
  {
    lichess: "https://lichess.org/rifCL9wV",
    fen: "r3r1k1/3bqpb1/pRpp4/P4pp1/2PPn2p/2NQP1P1/4NPBP/3R2K1 w - - 2 20",
    score: 1.8,
  },
  {
    lichess: "https://lichess.org/VFlPP3pm",
    fen: "rnbq1rk1/1pp3pp/p2b1n2/3p4/3P4/5N1P/PPB2PP1/R1BQRNK1 w - - 4 17",
    score: 3.1,
  },
  {
    lichess: "https://lichess.org/WrL3cM9S",
    fen: "q6r/r2nkppp/b1p1p3/2Pp4/R7/P3PNP1/2Q2P1P/2R2BK1 w - - 4 26",
    score: 1,
  },
  {
    lichess: "https://lichess.org/HjVTqVi3",
    fen: "8/3b1p2/2rb3p/R1p3p1/1pPpPk2/1N3P1P/1PB1K1P1/8 w - - 11 36",
    score: 1.2,
  },
  {
    lichess: "https://lichess.org/dY74qRyL",
    fen: "6k1/5p2/2N1p1p1/3pP1Np/b2P1PnP/b5P1/3B2K1/8 w - - 4 36",
    score: -0.3,
  },
  {
    lichess: "https://lichess.org/Bnxo33Rd",
    fen: "r1b2rk1/pp1p2pp/2n2b2/q2p2B1/3P4/PQP2N2/5PPP/RN3RK1 w - - 0 14",
    score: 1.7,
  },
  {
    lichess: "https://lichess.org/W9BTNnZu",
    fen: "r1bq1rk1/4npbp/2n1p1p1/3pP3/pp1P1P2/1N2BNP1/PP4BP/R2QR1K1 w - - 0 16",
    score: 1.9,
  },
  {
    lichess: "https://lichess.org/LKm3SYLL",
    fen: "r1b1k2r/4q1b1/p1p1p3/4pp1p/4N3/1R6/P1PQB1PP/5RK1 w kq - 4 20",
    score: 1.2,
  },
  {
    lichess: "https://lichess.org/OMKdnJgj",
    fen: "4rk2/1p4b1/p2p4/P1pP3p/R3Pp2/5n2/1P5P/4BK1N w - - 0 31",
    score: -6.4,
  },
  {
    lichess: "https://lichess.org/GVvOpCH1",
    fen: "6k1/3n1p1p/2p1p3/p3n3/P3P3/5BPN/5PK1/8 w - - 3 44",
    score: -4.4,
  },
  {
    lichess: "https://lichess.org/GT3aNWnH",
    fen: "r2qrbk1/1bp2ppp/ppn2n2/4p3/1P2P3/2P2NP1/P1QN1P1P/R1B1RBK1 w - - 1 14",
    score: 0.4,
  },
  {
    lichess: "https://lichess.org/TzEd9R84",
    fen: "r1b1r1k1/ppqn1ppp/3bp3/3pN3/3PnP2/1P1B1R2/PBPN2PP/R2Q2K1 w - - 1 13",
    score: 5.5,
  },
  {
    lichess: "https://lichess.org/8ltgFdeu",
    fen: "3rr2k/p3NQbp/6p1/q3P3/2pP2P1/1p5P/PP6/1K1R1R2 w - - 0 27",
    score: -2.3,
  },
  {
    lichess: "https://lichess.org/yhQ815YY",
    fen: "r1bq1rk1/1pb2ppp/p3p3/2Nn4/P1N5/3P1n2/1PP2PPP/R1BQ1RK1 w - - 0 14",
    score: -0.3,
  },
  {
    lichess: "https://lichess.org/L0s0WENM",
    fen: "1r6/pB6/7p/2p2bk1/8/1R6/PPP4P/2K5 w - - 2 29",
    score: 1.7,
  },
  {
    lichess: "https://lichess.org/cTHIAFCR",
    fen: "r1bq1r1k/6pp/p1np4/1p1Np1b1/4Pp2/2P2B2/PPN2PPP/R2Q1RK1 w - - 0 16",
    score: 0.9,
  },
  {
    lichess: "https://lichess.org/DXf8jIzy",
    fen: "rnb1kb1r/pp1ppppp/1q6/2pP4/5B2/8/PPPnPPPP/R2QKBNR w KQkq - 0 6",
    score: 0.3,
  },
  {
    lichess: "https://lichess.org/4VKV0eHb",
    fen: "r1bq1rk1/pp2bppp/5n2/2p1N3/3P4/2PB3P/P4PP1/R1BQ1RK1 w - - 0 13",
    score: 1.3,
  },
  {
    lichess: "https://lichess.org/r6Ry0dH2",
    fen: "2r2rk1/p4pp1/P1p1p2p/1pQ2q2/3PP3/2n5/1P3PPP/2R2RK1 w - - 0 23",
    score: 6.8,
  },
  {
    lichess: "https://lichess.org/4CHMKZ0p",
    fen: "r2qk1r1/pp3p2/1n1bp1p1/3PQ1Pp/2pP1N1P/2N2P2/PPP5/R3K2R w KQq - 1 18",
    score: 1.5,
  },
  {
    lichess: "https://lichess.org/9kkOxKSS",
    fen: "1rb1r3/8/1p1R1n1p/pPp2Pk1/P5P1/6NP/3R4/6K1 w - - 6 35",
    score: -1.7,
  },
  {
    lichess: "https://lichess.org/QbVTfioe",
    fen: "rqb1r1k1/pp3pp1/2p2n1p/8/3P1Nn1/P2BP1P1/1PQ1NPP1/R4RK1 w - - 3 17",
    score: 4.3,
  },
  {
    lichess: "https://lichess.org/PK06jH7D",
    fen: "4r1k1/1b3pp1/p7/Bp1qp2p/7P/5PP1/P4R2/4Q1K1 w - - 0 35",
    score: -6.6,
  },
  {
    lichess: "https://lichess.org/7vBENbi4",
    fen: "3r1rk1/5pp1/2qp3p/p4P2/1p1b2QP/1P6/1PP5/1K1RR3 w - - 0 30",
    score: -0.6,
  },
  {
    lichess: "https://lichess.org/8T75coF5",
    fen: "1r4k1/5pbp/p1q3p1/P2r4/1pp5/2P1PB1P/1PQ2PP1/3R2K1 w - - 0 25",
    score: 1.1,
  },
  {
    lichess: "https://lichess.org/R55pFalf",
    fen: "r1bqk2r/pppn1p1p/4p1pQ/3pn3/5B2/3BP3/PPP2PPP/RN2K2R w KQkq - 0 10",
    score: 0.5,
  },
  {
    lichess: "https://lichess.org/hmLqu0pP",
    fen: "8/pb4p1/1p2n1k1/3pB3/4n1p1/1P4P1/P4PB1/2R3K1 w - - 0 29",
    score: 5.6,
  },
  {
    lichess: "https://lichess.org/UPiMOfKf",
    fen: "r4rk1/1b2bppp/4pn2/4N1B1/1p1q3P/pP1P1B2/K1PQ1PP1/3R3R w - - 2 19",
    score: -3.2,
  },
  {
    lichess: "https://lichess.org/qyy0Kr4x",
    fen: "rn1q1rk1/1bp1ppbp/1p1p1np1/p7/P1BP1B2/4PN1P/1PP2PP1/RN1Q1RK1 w - a6 0 9",
    score: 0.4,
  },
  {
    lichess: "https://lichess.org/I8roiYlu",
    fen: "4r1k1/4p1bp/p4pp1/4Pq2/1B3P2/1PPR1QP1/2P4P/6K1 w - - 0 28",
    score: 7.2,
  },
  {
    lichess: "https://lichess.org/PckcCITr",
    fen: "8/5kpp/p2p1p2/2nPpPP1/1p2P1KP/1Pr2B2/P7/4R3 w - - 4 35",
    score: -3.6,
  },
  {
    lichess: "https://lichess.org/ZK0WpITE",
    fen: "r1q1kb1r/pp1n1ppp/2pp2b1/4p3/2PPn1P1/1QN1PN1P/PP1B1PB1/R3K2R w KQkq - 4 11",
    score: 0.4,
  },
  {
    lichess: "https://lichess.org/YrjEJFsq",
    fen: "r3k2r/p2nbppp/1p4b1/3pP3/8/6P1/PP1N1PBP/R1B2RK1 w kq - 2 16",
    score: 0.8,
  },
  {
    lichess: "https://lichess.org/38JvnoG0",
    fen: "1r1r2k1/pbp3p1/1p2p3/1P2PBNp/P1n5/2P4P/2n2P2/R1B1R1K1 w - - 0 28",
    score: 8.8,
  },
  {
    lichess: "https://lichess.org/8KSZKIJF",
    fen: "3r1rk1/ppq2ppp/3b1n2/P7/2p5/1QB2B1P/1P3PP1/R4RK1 w - - 0 22",
    score: 2.5,
  },
  {
    lichess: "https://lichess.org/YmD7GQhM",
    fen: "2b3r1/5p1p/pRpp1k1b/2r2p2/2P2N1P/4PP2/P4KP1/1B5R w - - 5 26",
    score: 0.5,
  },
  {
    lichess: "https://lichess.org/jyc6tLBs",
    fen: "r2qk2r/pp4p1/2nbp2p/2p5/2PpBp2/3P2PP/PP2P3/R1BQ1RK1 w kq - 0 14",
    score: -0.1,
  },
  {
    lichess: "https://lichess.org/XAxkDR44",
    fen: "2r5/3kb3/2rp1p2/ppPRp1p1/1q2P3/1P1R3P/P4BP1/1K1Q4 w - - 2 34",
    score: 5.7,
  },
  {
    lichess: "https://lichess.org/2maPLTIB",
    fen: "3r2k1/pb1rbppp/4pn2/1pp1B3/8/PP1PPNP1/4KPBP/R1R5 w - - 5 18",
    score: -0.3,
  },
  {
    lichess: "https://lichess.org/UmPrhlfk",
    fen: "2kr4/1pp4p/8/pq3p2/P3b3/2P1r3/8/K1R2R1B w - - 0 30",
    score: -7.5,
  },
  {
    lichess: "https://lichess.org/uvEbp1GD",
    fen: "5r2/1bq2pkp/1n4p1/3p4/2pPp3/Q1P1P2P/3N1PP1/3B1RK1 w - - 4 22",
    score: -0.4,
  },
  {
    lichess: "https://lichess.org/HvD7IAXK",
    fen: "1r1q1rk1/p1p2pb1/4p1pp/QBnn4/3p1B2/2P4P/PP3PP1/RN3RK1 w - - 2 16",
    score: -5.3,
  },
  {
    lichess: "https://lichess.org/G0GTSOZw",
    fen: "7r/1pk5/pqb1p3/4P1bp/8/1N5K/PPP1Q3/3R1R2 w - - 0 27",
    score: 4.5,
  },
  {
    lichess: "https://lichess.org/QILSX7FW",
    fen: "2q3k1/3br1bp/1Qpn2p1/3pN3/P2P2p1/8/1P3PPP/2R1R1K1 w - - 1 24",
    score: 0.7,
  },
  {
    lichess: "https://lichess.org/28YFqm1Q",
    fen: "2rr2k1/pp1qbppp/4pn2/8/4P3/3N1BPP/PP2Q1K1/R6R w - - 5 20",
    score: -3.7,
  },
  {
    lichess: "https://lichess.org/fK5tXeYr",
    fen: "1r4k1/5pp1/ppp2n1p/3p1q1P/8/1B2r2N/1PP4Q/1K4R1 w - - 0 32",
    score: -3.3,
  },
  {
    lichess: "https://lichess.org/Xbi6ORpu",
    fen: "rnbqkbnr/ppp2ppp/3p4/4p3/3P4/5N2/PPP1PPPP/RNBQKB1R w KQkq e6 0 3",
    score: 1.7,
  },
  {
    lichess: "https://lichess.org/e5SVQgkK",
    fen: "r3r1k1/1bq2pp1/8/2n1P2p/2p1pP2/6PP/1PPQN1B1/4RRK1 w - - 0 25",
    score: 2.5,
  },
  {
    lichess: "https://lichess.org/DPy38BpE",
    fen: "3r2k1/1p3ppp/p1n5/4n1P1/2b1P2P/2N1B3/PPP5/2KB3R w - - 0 21",
    score: 3.9,
  },
  {
    lichess: "https://lichess.org/QV94AvkJ",
    fen: "rnbq1rk1/pp2ppbp/1n1p2p1/8/2PP4/2N1B3/PP3PPP/2RQKBNR w K - 4 9",
    score: 0.8,
  },
  {
    lichess: "https://lichess.org/rqH4O3Ci",
    fen: "2r3k1/1p3ppp/2r1p1n1/1N1pP3/pb1P4/2R3B1/PP3PPP/2R3K1 w - - 7 23",
    score: -0.7,
  },
  {
    lichess: "https://lichess.org/FOI7PRU1",
    fen: "8/3nkppp/p2qp3/1p1p4/5PP1/3BB3/4K2P/1RR5 w - - 1 31",
    score: 1.3,
  },
  {
    lichess: "https://lichess.org/XpN7yqvU",
    fen: "r1br2k1/pp5p/6p1/1Np1p3/2PbPp2/5B2/PP3PPP/2RR2K1 w - e6 0 18",
    score: -0.9,
  },
  {
    lichess: "https://lichess.org/wxDaIWxg",
    fen: "r3kbnr/pp1b1ppp/1qn1p3/2ppP3/3P1P2/2P2N2/PP4PP/RNBQKB1R w KQkq - 3 7",
    score: -0.6,
  },
  {
    lichess: "https://lichess.org/AICishVY",
    fen: "1q3rk1/p2r2pp/3b4/P1p3Q1/5pb1/2B4P/1P3PP1/3R1RK1 w - - 0 28",
    score: 3.8,
  },
  {
    lichess: "https://lichess.org/8E6y5jh1",
    fen: "1r1r2k1/1pqbbppp/p1nppn2/8/P1PNP3/6PP/1P2NPB1/R1BQR1K1 w - - 1 14",
    score: 0.3,
  },
  {
    lichess: "https://lichess.org/1GeBASoG",
    fen: "2r1kb1r/pbqn1pp1/1p2p2p/2ppP3/2PP4/3B1N2/PP1NQPPP/2R2RK1 w k - 1 14",
    score: 1.1,
  },
  {
    lichess: "https://lichess.org/ffvpkzsM",
    fen: "4r3/4qpk1/p1p2np1/1pQpr2p/8/2P2R1P/PPB2PP1/5RK1 w - - 7 30",
    score: -4.9,
  },
  {
    lichess: "https://lichess.org/XjUfvnMI",
    fen: "5r2/1pp3pk/2np3p/P3p3/2B1P3/2B3P1/7P/6K1 w - - 3 38",
    score: -7.8,
  },
  {
    lichess: "https://lichess.org/ytDQNDK3",
    fen: "2r3k1/1r3pp1/3Rp2p/4P3/1pP3PP/1PK1R3/8/8 w - - 0 34",
    score: 0.9,
  },
  {
    lichess: "https://lichess.org/Xaup46yt",
    fen: "r5k1/2qb1pp1/p1p2n2/3p4/N6r/bP2PB2/P1R2PPP/3Q1RK1 w - - 3 22",
    score: -7.2,
  },
  {
    lichess: "https://lichess.org/3oIYSlPt",
    fen: "r4rk1/2q2p2/2p2b1p/p1pp4/1P5P/P1NQ2P1/5P2/R4RK1 w - - 0 21",
    score: -0.4,
  },
  {
    lichess: "https://lichess.org/qidEujeB",
    fen: "r1b1kbnr/pp3ppp/1qn1p3/3pP3/3P4/p2B1N2/2P2PPP/RNBQK2R w KQkq - 3 8",
    score: 0.3,
  },
  {
    lichess: "https://lichess.org/RuFLJuwH",
    fen: "r2q1rk1/5pbp/p1np2b1/3Np3/p7/2P5/1PN1BPPP/R2Q1RK1 w - - 0 17",
    score: 1,
  },
  {
    lichess: "https://lichess.org/Xjd00C2O",
    fen: "r4rk1/pp2bpp1/1qp1pn1p/5b2/2BP1B2/2P2N1P/PP3PP1/R2QR1K1 w - - 1 13",
    score: 0.5,
  },
  {
    lichess: "https://lichess.org/scTbrxu3",
    fen: "3r1rk1/pbp2ppp/1p3n2/2n1NNq1/2B5/2P5/PP2Q1PP/R4RK1 w - - 4 21",
    score: 7.1,
  },
  {
    lichess: "https://lichess.org/27xgGmYV",
    fen: "r1q2rk1/pp2bppp/6b1/2np4/3N4/3PB1P1/PP2PP1P/R1RQ2K1 w - - 0 16",
    score: 0.3,
  },
  {
    lichess: "https://lichess.org/KaLmYg20",
    fen: "r2q1rk1/1p3pbp/4b1p1/pP2p3/1n1n4/2NPN1P1/3BPPBP/1R1Q1RK1 w - - 1 18",
    score: 0.8,
  },
  {
    lichess: "https://lichess.org/a8AO3vIA",
    fen: "B5k1/5p1p/4pnp1/8/8/5Q1P/q4PP1/6K1 w - - 0 38",
    score: -0.6,
  },
  {
    lichess: "https://lichess.org/MIrYjktI",
    fen: "8/pp1k1p2/6p1/3Pnb2/2R2N2/P5P1/1P3P2/6K1 w - - 1 31",
    score: 5.8,
  },
  {
    lichess: "https://lichess.org/W31Gcu66",
    fen: "r4rk1/1pqn1ppb/2p2b1p/2P1p3/1PN5/1Q1Pp1PP/4PPB1/2R2RK1 w - - 0 23",
    score: -5.9,
  },
  {
    lichess: "https://lichess.org/ybeiYxQF",
    fen: "rn1q1rk1/p3bppp/1p1ppn2/8/2PN4/1PN3P1/PB2PPbP/R2Q1RK1 w - - 0 11",
    score: 0.3,
  },
  {
    lichess: "https://lichess.org/KN9XsAfK",
    fen: "2rr2k1/1p3p1p/5qpQ/3p4/3Nn3/1P1R3P/5PP1/R5K1 w - - 8 30",
    score: -1.5,
  },
  {
    lichess: "https://lichess.org/zHqFfw46",
    fen: "3r1r1k/pb3pb1/1pn1p1pp/n1p1P3/4NB1P/1PP2NP1/P4PB1/2R1R1K1 w - - 3 25",
    score: 1.3,
  },
  {
    lichess: "https://lichess.org/sFM7l9IO",
    fen: "r2q1rk1/5ppp/p3p3/1p1pPb2/B7/2P2P2/PP2Q1P1/R4NK1 w - b6 0 17",
    score: -7.3,
  },
  {
    lichess: "https://lichess.org/6eyZjNjp",
    fen: "2r3k1/5p1p/4b1p1/p7/1bp5/2B2P2/P2R2PP/2R3K1 w - - 0 37",
    score: 0.2,
  },
  {
    lichess: "https://lichess.org/tdPt5EHK",
    fen: "1b3r2/3R1pk1/2N1p2p/1B1p2p1/1P6/2P1P1P1/1Pb2PP1/6K1 w - - 4 25",
    score: 8.4,
  },
  {
    lichess: "https://lichess.org/sWyx5cbq",
    fen: "r2q1rk1/2bn1ppp/p4nb1/Ppp2N2/3PP3/1QN5/1P2B1PP/R1B2RK1 w - - 0 17",
    score: 0.5,
  },
  {
    lichess: "https://lichess.org/AxQXdemT",
    fen: "3r4/1b3p1k/2p1n1pp/1pP5/1b2B3/1P2BN1P/5PP1/2R3K1 w - - 0 34",
    score: 0,
  },
  {
    lichess: "https://lichess.org/pThtJtrV",
    fen: "r2r1k2/p4p1p/1p3Np1/n1pP1q2/2P5/2Q5/P4PPP/2R2RK1 w - - 5 25",
    score: 8.4,
  },
  {
    lichess: "https://lichess.org/EtVQ082p",
    fen: "3r2k1/3n1pp1/3pqn1p/2p1N3/P3P3/1PB5/2Q2PPP/4R1K1 w - - 0 24",
    score: 3.9,
  },
  {
    lichess: "https://lichess.org/5N4k7HEV",
    fen: "r4rk1/1bqnbppp/p1npp3/6P1/Np2PP2/1N1BB3/PPP4P/R2Q1R1K w - - 1 15",
    score: -0.4,
  },
  {
    lichess: "https://lichess.org/FUEsnkAP",
    fen: "8/pp2k3/1np1p2p/4pp2/2P1P3/1P3P2/P3N1PP/6K1 w - - 1 25",
    score: 1,
  },
  {
    lichess: "https://lichess.org/tqNzJuYA",
    fen: "r1bq2rk/1p4pp/n1pbp3/p7/2PPn3/P2B4/1PQBN1PP/R4RK1 w - - 0 15",
    score: 4.7,
  },
  {
    lichess: "https://lichess.org/0noxHQ8k",
    fen: "r4rk1/3q1pb1/p1n1b1pp/1p1p4/B2P3N/6N1/PP3PPP/R2QR1K1 w - b6 0 18",
    score: -4.9,
  },
  {
    lichess: "https://lichess.org/P1BFeil5",
    fen: "1r2r3/p3ppkp/2p3p1/q2p4/3PbP2/1P4P1/P3P1BP/2RQR1K1 w - - 0 21",
    score: 0.7,
  },
  {
    lichess: "https://lichess.org/8PrlQFta",
    fen: "4r1k1/pppq4/2n5/1B3p1p/3P2bP/N1P1p1Q1/PP4P1/R5KR w - - 0 25",
    score: 9.8,
  },
  {
    lichess: "https://lichess.org/2INW17HA",
    fen: "5rk1/1p3ppp/2p1p3/1p2P3/r2P2P1/4P3/PPR2K1P/R7 w - - 1 21",
    score: 0.6,
  },
  {
    lichess: "https://lichess.org/4ERS1yMT",
    fen: "rn3bk1/pbpp2pp/1p2p3/4P3/3P2nq/2NB3P/PPP1N1P1/R1BQ2K1 w - - 1 12",
    score: 6.1,
  },
  {
    lichess: "https://lichess.org/VsC40Rr2",
    fen: "2rqr1k1/p4pb1/2n1p1p1/2Bp1n1p/3P4/1P3NP1/P2R1PBP/2RQ2K1 w - h6 0 19",
    score: 0.2,
  },
  {
    lichess: "https://lichess.org/4oywVe6g",
    fen: "8/5k1p/p2Rbp2/1p1Np2r/1P6/P7/4K3/8 w - - 2 35",
    score: -6.6,
  },
  {
    lichess: "https://lichess.org/iL7Oi0Ja",
    fen: "r1b1k2r/pp1pnpbp/2n1p1p1/q5B1/2BPP3/Pp3N2/3N1PPP/2RQ1RK1 w kq - 2 12",
    score: 2.3,
  },
  {
    lichess: "https://lichess.org/YhW0GgOJ",
    fen: "2b1r3/2r1k2p/p1PRP1p1/3P1p2/5P2/P5P1/7P/1R4K1 w - - 1 37",
    score: 0.6,
  },
  {
    lichess: "https://lichess.org/1wiJ04wK",
    fen: "3rr1k1/2pq2bp/bpn3p1/p3pp2/P1N5/BPnP1NP1/2Q2PBP/R3R1K1 w - - 0 17",
    score: -4.5,
  },
  {
    lichess: "https://lichess.org/kNgQtU92",
    fen: "1n1q1rk1/2p3b1/bp1p1n2/3Pp1pp/QPP1Pp2/2NB3P/3B1PPN/R5K1 w - - 2 21",
    score: 1.8,
  },
  {
    lichess: "https://lichess.org/vz8MWzDm",
    fen: "r2q1rk1/pp2bppp/2n2n2/3p2B1/3P2b1/1PPB1N2/3N1PPP/R2QR1K1 w - - 11 13",
    score: 1.3,
  },
  {
    lichess: "https://lichess.org/Y5i4DQdg",
    fen: "7k/6r1/4p1p1/3Q3p/pq5P/6P1/5P2/3R2K1 w - - 0 37",
    score: 0,
  },
  {
    lichess: "https://lichess.org/y1Ps3TsL",
    fen: "3r2k1/pb1q1pb1/1pn1p1p1/2p5/P3PPpP/2P1B3/1P2Q1BN/4R1K1 w - - 0 23",
    score: 0.5,
  },
  {
    lichess: "https://lichess.org/JdQgVaAX",
    fen: "r2q1rk1/5pp1/2p2b1p/3p1b2/pp1P4/PBP2NQ1/1P3PPP/3R1RK1 w - - 0 20",
    score: -3,
  },
  {
    lichess: "https://lichess.org/MRlNqwT5",
    fen: "1k2r3/pp5p/3b1pp1/q1pp4/3P1P2/2P2NP1/PP1B3P/2KB1R2 w - - 2 28",
    score: -6.5,
  },
  {
    lichess: "https://lichess.org/TynIowcX",
    fen: "k1r2b2/pp2nNp1/1q2P1Q1/3p4/8/1NP5/PP3r2/1K1RR3 w - - 1 24",
    score: 2.8,
  },
  {
    lichess: "https://lichess.org/v9oybwVG",
    fen: "5n2/p1q3k1/5pp1/4r2p/7P/PP3B2/5PP1/Q2R2K1 w - - 3 33",
    score: 4.2,
  },
  {
    lichess: "https://lichess.org/gH9sKIGf",
    fen: "3r1r2/pb4k1/1p2p1qp/2ppb2P/2P5/1P2PB2/P2N1PP1/1R3RK1 w - - 0 23",
    score: -0.2,
  },
  {
    lichess: "https://lichess.org/lyI9LSwb",
    fen: "8/5p2/3r1kp1/R7/P4K2/8/8/8 w - - 2 44",
    score: -4.1,
  },
  {
    lichess: "https://lichess.org/GVBi6JT4",
    fen: "r2qr1k1/pp1n1ppp/2pb1nb1/3p4/3P4/2P1NPPN/PP1B2BP/R2Q1RK1 w - - 8 14",
    score: -0.6,
  },
  {
    lichess: "https://lichess.org/2gxPrzNC",
    fen: "2rq1rkb/pp3p2/3p1ppP/1Q1Nn3/4P3/1N6/PPP5/2KR3R w - - 1 21",
    score: 8.2,
  },
  {
    lichess: "https://lichess.org/Cqtr0kKP",
    fen: "rn1qkb1r/p3pppp/2p5/1p1nP1B1/2pP4/2N2b1P/PP3PP1/R2QKB1R w KQkq - 0 9",
    score: 0.5,
  },
  {
    lichess: "https://lichess.org/VNfX9QhP",
    fen: "6rk/5p1p/1P2b3/2NN1p2/3Pp3/r5P1/5PP1/1R4K1 w - - 1 39",
    score: 6.1,
  },
  {
    lichess: "https://lichess.org/t7okaxxO",
    fen: "r4q2/ppp3kp/3p1rp1/3Pp3/3n4/5PN1/PPPQ2PP/2KR3R w - - 1 18",
    score: 3.9,
  },
  {
    lichess: "https://lichess.org/XOOGLATd",
    fen: "r1b2rk1/1p1nbppp/1qn1p3/p2pP3/3P4/1P1B1N2/P3NPPP/R1BQ1RK1 w - - 1 12",
    score: 1.9,
  },
  {
    lichess: "https://lichess.org/MHBDkngJ",
    fen: "2rqk2r/pp2bp2/1nbpp1pp/4P3/3PN3/5N2/PP3PPP/R1BQR1K1 w k - 4 18",
    score: 0.7,
  },
  {
    lichess: "https://lichess.org/kgnc8R49",
    fen: "3R4/1q3ppk/p4nb1/1p6/4P2P/4BP2/PPP5/1K3B1R w - - 1 25",
    score: 7.7,
  },
  {
    lichess: "https://lichess.org/41M8pl6H",
    fen: "2q1k2r/Rb1n1ppp/1pnQp3/1p2P1B1/1Pp5/5P2/1P4PP/4KB1R w Kk - 5 16",
    score: 0.9,
  },
  {
    lichess: "https://lichess.org/kqjnhGl5",
    fen: "r3k2r/1bpqbp1p/p3p3/N3P1p1/Q2P4/P3n3/1P1NB1PP/2R2RK1 w kq - 2 19",
    score: 7.2,
  },
  {
    lichess: "https://lichess.org/oHDIhahR",
    fen: "2r3k1/p5pp/5p2/3n1b2/2r1p3/1PB1R3/PKP2PPP/7R w - - 0 27",
    score: 0,
  },
  {
    lichess: "https://lichess.org/RhetsMSJ",
    fen: "r1bqk2r/2p1bppp/p1pp1n2/8/3pP3/5N2/PPP2PPP/RNBQR1K1 w kq - 0 9",
    score: 0.5,
  },
  {
    lichess: "https://lichess.org/wXFy3wcY",
    fen: "2r1kb1r/1bqn1ppp/pn1pp3/1p4P1/3NP3/P1N1BP2/1PPQ3P/1K1R1B1R w k - 1 14",
    score: 0.8,
  },
  {
    lichess: "https://lichess.org/uRLoFVbY",
    fen: "6k1/4q1p1/p1p1p3/Q1p1p2p/N1PpPr1P/1P1PbRP1/P5RK/8 w - - 1 30",
    score: 7.1,
  },
  {
    lichess: "https://lichess.org/PeE4jk4t",
    fen: "r7/5p2/2p1pk2/3b2p1/PRnP4/2P2P1P/5K1P/2R5 w - g6 0 35",
    score: -2.6,
  },
  {
    lichess: "https://lichess.org/VJPuAgso",
    fen: "4rrk1/5nbp/1pNpq1p1/pPn2pP1/2P2P2/1P5P/5BB1/2RQ1RK1 w - - 0 25",
    score: 4.6,
  },
  {
    lichess: "https://lichess.org/hOk5XHdz",
    fen: "r1q3k1/3bn1bp/p2p2p1/1p1Pp2n/1P2P3/2N1B1PP/P2QN1BK/R7 w - - 1 19",
    score: 1.5,
  },
  {
    lichess: "https://lichess.org/EokzX2YY",
    fen: "3r2k1/1p2b1pp/2p1ppbq/r7/p2P4/P3P1P1/1P1NBPQP/2R2RK1 w - - 3 28",
    score: 0.5,
  },
  {
    lichess: "https://lichess.org/uNa1L86y",
    fen: "r6b/5k2/4p3/8/p1bpPP2/3N4/1PPB4/R3K3 w Q - 0 32",
    score: 1.8,
  },
  {
    lichess: "https://lichess.org/5dEFJUhX",
    fen: "7r/1pb3p1/p1b1pk2/5pp1/P2p3r/1P1B1P1P/2P2PK1/4RN1R w - - 0 34",
    score: -8.2,
  },
  {
    lichess: "https://lichess.org/0Oj7AMz0",
    fen: "2k3rr/1bq2p2/1p2pb2/2pn2p1/2N5/1QPP2p1/1P3PBP/R1B1R1K1 w - - 0 20",
    score: 0.8,
  },
  {
    lichess: "https://lichess.org/Vp95wfBu",
    fen: "r2q1rk1/pb3ppp/1p2pn2/4N1Q1/3P4/2nB4/PP3PPP/3R1RK1 w - - 0 16",
    score: -0.8,
  },
  {
    lichess: "https://lichess.org/8AM9jwN3",
    fen: "5r1k/4Q1pp/8/3qpp2/P7/6P1/5PKP/8 w - - 0 34",
    score: -9.4,
  },
  {
    lichess: "https://lichess.org/xA30PRj1",
    fen: "r5k1/1bq1bppp/p3pn2/1pprN3/P5N1/1P1P4/1BP2PPP/R2QR1K1 w - - 1 18",
    score: 0.3,
  },
  {
    lichess: "https://lichess.org/DrLhfSG3",
    fen: "r1bq2k1/ppp1n1b1/3p1rpp/3Pp3/2P2p2/2N1P2P/PP2BPP1/R2QNRK1 w - - 0 15",
    score: 0.7,
  },
  {
    lichess: "https://lichess.org/60f9tOIz",
    fen: "2k1r1r1/1ppb1p1p/p1nb1B2/8/B7/5N2/PPP3PP/2KR3R w - - 3 16",
    score: -0.1,
  },
  {
    lichess: "https://lichess.org/I9WAMCPN",
    fen: "r1b1k2r/ppq1bppp/2n1p3/2npP3/5P2/P1N1BN2/1PPQ2PP/R3KB1R w KQkq - 0 12",
    score: 0.8,
  },
  {
    lichess: "https://lichess.org/vRt1nobr",
    fen: "r4rk1/4pp1p/p5p1/q1pPb3/2B5/2P3QP/P4PP1/1R4K1 w - - 0 21",
    score: -2.4,
  },
  {
    lichess: "https://lichess.org/YB7AOPNs",
    fen: "2rqkb1r/5ppp/p1n1pn2/1p1p4/3P1Bb1/2NBP3/PP2NPPP/2RQ1RK1 w k - 0 11",
    score: 5.5,
  },
  {
    lichess: "https://lichess.org/xjc310uM",
    fen: "r5rk/5ppp/p4q2/1p1PpP2/8/P5R1/1PP3QP/R6K w - - 1 24",
    score: -0.2,
  },
  {
    lichess: "https://lichess.org/fTfsvFjM",
    fen: "r1bqk2r/pppp1ppp/2n5/4b3/3PB3/8/PPP2PPP/RNBQK2R w KQkq - 0 7",
    score: 8.4,
  },
  {
    lichess: "https://lichess.org/4AQDcsiK",
    fen: "1r3rk1/2q2pbp/p4np1/1pp1pP2/P3P1P1/2P4P/1PQNB3/2R2RK1 w - b6 0 19",
    score: 2.2,
  },
  {
    lichess: "https://lichess.org/MeyELx6i",
    fen: "r4rk1/pp3ppp/3pb3/q2Np1b1/3nP3/1BP2Q2/PP2NPPP/R3K2R w KQ - 1 15",
    score: 0.5,
  },
  {
    lichess: "https://lichess.org/pvi0aLUR",
    fen: "2kr3r/ppq2pp1/1npbpn1p/8/3P4/P1NB1R1P/1PPB2P1/R3Q1K1 w - - 1 15",
    score: -0.9,
  },
  {
    lichess: "https://lichess.org/F6UJnf28",
    fen: "3r2k1/4pp2/2bqn1p1/ppp5/P4P1p/1P1PP1rP/1NQR2PK/4RB2 w - - 3 29",
    score: -1.5,
  },
  {
    lichess: "https://lichess.org/jirKnPpU",
    fen: "r5k1/pp6/2n1b1B1/4p3/2qb2P1/4B2R/5P2/1NQ2K2 w - - 1 27",
    score: -1,
  },
  {
    lichess: "https://lichess.org/eaa7EdB8",
    fen: "2r5/r2R3p/kb4p1/4N3/1BP1nP2/8/6PP/5K2 w - - 7 31",
    score: -5,
  },
  {
    lichess: "https://lichess.org/TfL6Hdqn",
    fen: "1r1k4/pp1b3p/8/3Bp1p1/4P3/1P2KP2/P1R4P/8 w - - 0 28",
    score: 0.2,
  },
  {
    lichess: "https://lichess.org/QmPjt9HL",
    fen: "2r1k2r/pp1n1p2/1q2p1p1/2bpPb1p/3N1P2/1PP1B3/P3B1PP/R1Q2RK1 w k - 0 18",
    score: 1.7,
  },
  {
    lichess: "https://lichess.org/CAMJ0420",
    fen: "1r2b3/5pkp/p1B1pnp1/4N3/1P6/P5P1/5PKP/3R4 w - - 0 25",
    score: 2,
  },
  {
    lichess: "https://lichess.org/1frpNjMz",
    fen: "1k4rr/bppq1np1/p2pN1b1/3P4/4PB1p/3P3P/PP4BK/R2Q1R2 w - - 3 22",
    score: 1.2,
  },
  {
    lichess: "https://lichess.org/cbEh4OLB",
    fen: "r1bq1rk1/2b2ppp/p1p2n2/1p6/4PP2/2NB4/PP4PP/R1BQ1R1K w - - 0 15",
    score: 1.1,
  },
  {
    lichess: "https://lichess.org/wTduz5wl",
    fen: "r1b2r2/p4pkp/2Pq2p1/3pp3/8/8/PP2BPPP/2RQ1RK1 w - e6 0 18",
    score: 1.7,
  },
  {
    lichess: "https://lichess.org/GdbaPcpS",
    fen: "1r6/2q2pkp/p2p1rp1/R1nQ4/3NP3/5P2/2P3PP/R5K1 w - - 3 27",
    score: 6.4,
  },
  {
    lichess: "https://lichess.org/ftC4cB3O",
    fen: "2kr3B/pppbn3/2n2p2/4pqp1/P7/3PQB2/2P1NPP1/1R2K2R w K - 0 19",
    score: 7.2,
  },
  {
    lichess: "https://lichess.org/v0beEtx4",
    fen: "1k1r2r1/2p2p2/p1b4p/1p1Bp2q/4P2N/4nQP1/PP4K1/R2R4 w - - 0 27",
    score: -1.3,
  },
  {
    lichess: "https://lichess.org/9AXQ3xHM",
    fen: "1r2rn2/RP1b1pbk/3p1qp1/3P3p/1NP1PQ2/7P/1p3P1N/2B1RB1K w - - 0 29",
    score: 8.5,
  },
  {
    lichess: "https://lichess.org/aOZ3JhVf",
    fen: "r2q1rk1/pp3pbp/2n3p1/4p3/3PP3/4BB2/P2Q1PPP/3RK2R w K e6 0 14",
    score: 1.2,
  },
  {
    lichess: "https://lichess.org/Y2zszSdB",
    fen: "r2r1bk1/p1R5/1p2p2p/n2b1pNp/3P1B2/3B4/5PP1/3R2K1 w - - 0 27",
    score: 0,
  },
  {
    lichess: "https://lichess.org/dbamKCBC",
    fen: "3r2k1/3r1ppp/p3bn2/1p1p4/2qQ4/P4BP1/1PPRNP1P/3R2K1 w - - 3 22",
    score: 0.8,
  },
  {
    lichess: "https://lichess.org/mwp9Lqt2",
    fen: "rn1qkbnr/ppp2ppp/8/3pp3/6b1/2N5/PPPPPP1P/R1BQKBNR w KQkq - 0 4",
    score: -2.9,
  },
  {
    lichess: "https://lichess.org/vDngG95A",
    fen: "r2qnrk1/1n1bbppp/1p1p4/p2Pp3/1PP5/P1N1BN2/2B2PPP/R2Q1RK1 w - - 1 17",
    score: 2.2,
  },
  {
    lichess: "https://lichess.org/hm3RDNxK",
    fen: "1b4k1/4qp2/1n4p1/p1p1p1Pp/PpP1P2P/1P2PN2/2Q1K3/B2r4 w - - 0 37",
    score: -0.3,
  },
  {
    lichess: "https://lichess.org/gduxqMum",
    fen: "3rrbk1/5p1p/2R1pp2/p2P4/Pq3Q2/6PP/5PB1/4R1K1 w - - 2 25",
    score: 4.9,
  },
  {
    lichess: "https://lichess.org/Pg29IZlf",
    fen: "r3kb1r/pp2pppp/n2p1n2/1bp5/3P1B2/P2BP3/1qP1NPPP/R2QK2R w KQkq - 0 9",
    score: 2.9,
  },
  {
    lichess: "https://lichess.org/Omca0HV6",
    fen: "r4rk1/pbq2ppp/1pnbp3/8/3P4/1BP1BN2/P4PPP/R2Q1RK1 w - - 2 14",
    score: -0.7,
  },
  {
    lichess: "https://lichess.org/lo7FcwCB",
    fen: "r3r1nk/2q2pp1/pp1p3p/2pPpNnP/P1P1P3/3B1P2/1P2QKP1/R6R w - - 4 23",
    score: 1,
  },
  {
    lichess: "https://lichess.org/NdARPXuN",
    fen: "8/pp1k1p1p/b3pQ2/4P3/2p4P/5R1B/P7/3rqNK1 w - - 3 33",
    score: 6,
  },
  {
    lichess: "https://lichess.org/m4A0bHH0",
    fen: "3r2k1/pp3ppp/3rp3/8/7P/2Rp1qP1/PP1Q1P2/5RK1 w - - 2 25",
    score: -7.9,
  },
  {
    lichess: "https://lichess.org/gAOmPcRK",
    fen: "2b2k1r/3p1p1p/p2P1Pp1/2p5/4B1n1/5N2/PPP2PPP/RNBQK2R w KQ - 3 13",
    score: 41.1,
  },
  {
    lichess: "https://lichess.org/uQkmUPJX",
    fen: "r2q1rk1/pb1nbppp/1p2pn2/2p5/2PPN3/3B1N2/PP2QPPP/R1B2RK1 w - c6 0 11",
    score: -0.4,
  },
  {
    lichess: "https://lichess.org/EkCSdr5X",
    fen: "2r2rk1/1bq2pp1/p2b1n1p/1p6/2p1p3/2P1P3/PPNN1PPP/1BRQ1RK1 w - - 2 21",
    score: -3.2,
  },
  {
    lichess: "https://lichess.org/8w94E4y5",
    fen: "3k3r/p1p2p2/1pp1b1pp/4P3/2P1NPPb/1P5P/PB6/5RK1 w - - 0 20",
    score: 1.5,
  },
  {
    lichess: "https://lichess.org/SXgEWInz",
    fen: "2r2rk1/3n1ppp/3qp3/pB1p4/Pp1PbN2/1P2P2P/Q4PP1/R3K2R w KQ - 1 19",
    score: -3,
  },
  {
    lichess: "https://lichess.org/JSH21gk8",
    fen: "2r1r1k1/2N2ppp/8/p1pp4/4n3/1P4P1/P4PBP/5RK1 w - - 1 23",
    score: -0.2,
  },
  {
    lichess: "https://lichess.org/AJuDDkrV",
    fen: "2r4r/pbqnkp2/1p1ppp2/8/3P3P/5NP1/PPPQ1PB1/1K1R3R w - - 1 19",
    score: 3.1,
  },
  {
    lichess: "https://lichess.org/8vCArQKg",
    fen: "1rb3rk/5pbp/3pp3/1ppPnpq1/QP3N2/4P1P1/P2N1PBP/1R3RK1 w - - 0 18",
    score: 2,
  },
  {
    lichess: "https://lichess.org/2wLOSB8N",
    fen: "5q2/1b2r1kp/1p4p1/4bpB1/7P/PB5Q/5PP1/3R2K1 w - - 8 39",
    score: 7.2,
  },
  {
    lichess: "https://lichess.org/2XKEBzms",
    fen: "r1bq1rk1/p1pp1p1p/2n2n2/8/1b6/6PP/P1P1PK2/RNqQ1B1R w - - 0 14",
    score: -15.8,
  },
  {
    lichess: "https://lichess.org/WIvw7Kwt",
    fen: "r4k2/pp3pb1/2p2n2/5QNp/3pr3/1P3Pq1/P1PB2P1/R5K1 w - - 0 30",
    score: 0,
  },
  {
    lichess: "https://lichess.org/ojjeSUlW",
    fen: "r2r4/pb3k1p/1p2p3/2b2p2/5P2/1NP1K3/PP3N2/R2R4 w - - 2 25",
    score: 0.4,
  },
  {
    lichess: "https://lichess.org/b3ObfiKK",
    fen: "2r4r/1p1bppkp/p5pR/q2np1P1/3PN3/1B1n1P2/PP1Q4/6KR w - - 0 25",
    score: 7.3,
  },
  {
    lichess: "https://lichess.org/xl9grc5O",
    fen: "1r3rk1/1bqnbp1p/p3p1p1/2p1P2Q/N1Pp1P2/1P1B4/P2B2PP/R4R1K w - - 0 19",
    score: -0.2,
  },
  {
    lichess: "https://lichess.org/bYuTsLi4",
    fen: "2r2k2/2p1Rp2/1n1p3p/2p3p1/1bP1N3/pP2B1Pb/P4P1P/3R2K1 w - - 4 26",
    score: -3.9,
  },
  {
    lichess: "https://lichess.org/3CZoxnre",
    fen: "r1q2rk1/ppp2pbp/2np1np1/3N4/2P1PNb1/3P2P1/PP4BP/R1BQ1RK1 w - - 1 12",
    score: 0,
  },
  {
    lichess: "https://lichess.org/n7Zh3iGZ",
    fen: "8/ppk2p1r/3ppb2/P1pP1p2/2P2P2/4P1P1/1P2NKRr/1R6 w - - 3 30",
    score: -0.2,
  },
  {
    lichess: "https://lichess.org/tG53ae7e",
    fen: "5rk1/rp2q1bp/pN1pbnp1/1Pp1p3/P2nPp2/B1NP1B1P/2P2PP1/R2Q1K1R w - - 2 20",
    score: -1.7,
  },
  {
    lichess: "https://lichess.org/W7sFjjSz",
    fen: "8/5kpp/pppb1p2/3p4/3P4/2NK1P1P/PP3P2/4B3 w - - 0 21",
    score: 6,
  },
  {
    lichess: "https://lichess.org/stSfUkJ8",
    fen: "2k1r3/p5p1/1p6/2b1P1Np/3p3P/8/P2K2P1/1R2r3 w - - 0 28",
    score: -6.7,
  },
  {
    lichess: "https://lichess.org/CuOyfU60",
    fen: "r1bqkbnr/ppp3pp/2n2p2/3pp3/Q3P3/2P2N2/PP1P1PPP/RNB1KB1R w KQkq - 0 5",
    score: -0.1,
  },
  {
    lichess: "https://lichess.org/V1gjyGtQ",
    fen: "2r5/1p1k4/3p3P/pqp1P3/8/3B1N2/PPPPnP2/RNBQ1RK1 w - - 1 17",
    score: 30.2,
  },
  {
    lichess: "https://lichess.org/ZZLuqAnw",
    fen: "6b1/8/5kp1/6Np/1n1Pp2P/1P2P3/5PP1/6K1 w - - 0 37",
    score: 0.8,
  },
  {
    lichess: "https://lichess.org/waJAQjYD",
    fen: "1n1q1rk1/4bppp/r1p5/1p2P3/pn1p4/3P1BP1/PP1BNP1P/2RQ1RK1 w - - 4 19",
    score: 1.7,
  },
  {
    lichess: "https://lichess.org/DMQedUW2",
    fen: "rnbq1rk1/2p1ppbp/p4np1/1p4B1/2QPP3/2N5/PP3PPP/2KR1BNR w - b6 0 9",
    score: -2.1,
  },
  {
    lichess: "https://lichess.org/Lnz09RK0",
    fen: "r3r1k1/p2nbp1p/1qp2npP/1p1p2B1/3P1Qb1/2NB1PN1/PPP5/R3K2R w KQ - 0 16",
    score: -0.7,
  },
  {
    lichess: "https://lichess.org/0VozLgMa",
    fen: "r4r1k/pp1n2qp/3p2p1/2pPp3/2P1Pn2/5PN1/PP1QN2P/4KbRR w - - 0 21",
    score: -1.8,
  },
  {
    lichess: "https://lichess.org/Hnsak0co",
    fen: "2kr3r/ppp2pp1/2nb4/3p4/1PP2Q2/P4NPq/1B2PK1P/R4R2 w - - 1 19",
    score: -4.5,
  },
  {
    lichess: "https://lichess.org/zoeA7tNo",
    fen: "1rr4k/p5p1/7p/4p1N1/2Pb3P/2qQ1P2/P6R/2KR4 w - - 5 33",
    score: -0.7,
  },
  {
    lichess: "https://lichess.org/sDnW7glo",
    fen: "r1b1q1k1/pp1n1ppp/2pb4/8/2Pp4/5N2/PPB2PPP/R1BQ2K1 w - - 0 14",
    score: 0.2,
  },
  {
    lichess: "https://lichess.org/t53RTMPc",
    fen: "r1bq1rk1/p3nppp/1pn1p3/2b5/2P5/5NP1/PP3PBP/RNBQ1RK1 w - - 1 12",
    score: 0.1,
  },
  {
    lichess: "https://lichess.org/Ft0wAWpK",
    fen: "8/4Q1pk/7p/2p3r1/3qP3/P6P/1r3RP1/5RK1 w - - 2 33",
    score: -0.7,
  },
  {
    lichess: "https://lichess.org/UHqSt46c",
    fen: "8/1pk1bp2/p3p3/2q3p1/4B3/P1PQ2P1/KP5P/8 w - - 2 32",
    score: 0.4,
  },
  {
    lichess: "https://lichess.org/p9yEqMHG",
    fen: "rnb2rk1/pp1p1ppp/1q6/3Q2B1/2B5/8/PP3PPP/R4RK1 w - - 1 16",
    score: 7.8,
  },
  {
    lichess: "https://lichess.org/L4OOysI9",
    fen: "2kr3r/ppp1qppp/3b4/4n3/2P1n3/PQ2PN2/1P2BPPP/R1B2RK1 w - - 0 14",
    score: 1.6,
  },
  {
    lichess: "https://lichess.org/3zamLMwH",
    fen: "r2qk2r/pp2ppbp/1p2b1p1/8/3P4/1Q2PN2/PP3PPP/R1B1KB1R w KQkq - 1 10",
    score: 9,
  },
  {
    lichess: "https://lichess.org/ZTcH6yze",
    fen: "r3q1k1/pp3ppp/5n2/8/1bPp2b1/3P1NP1/P4PBP/R1BQ2K1 w - - 0 16",
    score: 2.2,
  },
  {
    lichess: "https://lichess.org/PXe2dZf6",
    fen: "r4rk1/2qnbppp/1pp1pn2/2Pp3b/PQ1P4/3BPN1P/3N1PP1/R1B2RK1 w - - 0 15",
    score: 0.1,
  },
  {
    lichess: "https://lichess.org/2iSixe4A",
    fen: "r1n1r3/pp1k2p1/4ppp1/RP1p4/1P1P1B2/2P4P/4KPP1/R7 w - - 1 25",
    score: 0.5,
  },
  {
    lichess: "https://lichess.org/1kd3Zlzm",
    fen: "2rq1rk1/pp1bppbp/3p1np1/8/2nNP1PP/2N1BP2/PPPQ4/1K1R1B1R w - - 1 13",
    score: 4,
  },
  {
    lichess: "https://lichess.org/3Uh365zU",
    fen: "1r2r1k1/pQ3p1p/4b1p1/7q/2nN4/6P1/PP2PPBP/R4RK1 w - - 1 18",
    score: 5.5,
  },
  {
    lichess: "https://lichess.org/e0Pkmnh9",
    fen: "r2q1r2/3n1pbk/2pp2pp/p3p3/1pPPP2P/4BN2/PP1Q1PP1/R4RK1 w - - 2 19",
    score: 0.5,
  },
  {
    lichess: "https://lichess.org/qoQ9XMcw",
    fen: "8/4R1pk/2p2pbp/p2q4/Pp3n2/1P1P3P/2P2PP1/4Q1K1 w - - 6 36",
    score: -5.9,
  },
  {
    lichess: "https://lichess.org/GNaf3WON",
    fen: "2kr3r/pppn1bpp/1b3p2/4p3/1P2P1P1/2P2N1P/P1K1BP2/R1B2R2 w - - 1 15",
    score: 0,
  },
  {
    lichess: "https://lichess.org/vndPLng7",
    fen: "1r2kb1r/2q1ppp1/p1bp1n1p/P7/1p1QP2B/4NP2/1PP3PP/R3K1NR w KQk - 0 17",
    score: 0.5,
  },
  {
    lichess: "https://lichess.org/RqzGXpWf",
    fen: "r4rk1/pp1qpp1p/2n2bp1/8/6b1/1PN2NP1/P2PPPBP/R2QK2R w KQ - 3 11",
    score: 0.1,
  },
  {
    lichess: "https://lichess.org/omimFQ7C",
    fen: "r1b1nr2/1p1nqpbk/2pp2pp/p3p3/2PPP1P1/1PN1BN1P/P1Q2PB1/3RR1K1 w - - 3 18",
    score: 1.7,
  },
  {
    lichess: "https://lichess.org/Qu5ST9LT",
    fen: "2r3k1/1pr2p1p/p2p2p1/4p3/2Pn1P2/P1R3P1/1P1K2BP/7R w - - 1 27",
    score: -1.5,
  },
  {
    lichess: "https://lichess.org/UaiDwIu3",
    fen: "r2r2k1/pp1nbppp/2p1pn2/5q2/8/1BN1B2P/PPP1QPP1/2KR3R w - - 1 17",
    score: -1.1,
  },
  {
    lichess: "https://lichess.org/wHyAISYu",
    fen: "3R4/5ppk/1p5p/p7/4r1P1/1P6/P1P4P/2K5 w - - 1 32",
    score: -0.6,
  },
  {
    lichess: "https://lichess.org/MFb0sVQa",
    fen: "r5k1/1p3pbp/1p4p1/8/PP1P4/1r5P/5BP1/R2R2K1 w - - 2 26",
    score: 0,
  },
  {
    lichess: "https://lichess.org/ri5Jv9cU",
    fen: "2kr4/1p2bp1R/2q1b3/p3B3/8/1N6/PK2QPP1/8 w - a6 0 26",
    score: 0,
  },
  {
    lichess: "https://lichess.org/cSMJE8n8",
    fen: "r6r/4bk1p/p5p1/1p6/4P3/2N5/PPP2PPP/R1B1K2R w KQ - 0 16",
    score: 9.1,
  },
  {
    lichess: "https://lichess.org/ZYzwOXWW",
    fen: "4r1r1/3k2b1/p2pp3/1p1p1p1p/3P1P1P/2P1R1P1/PP5K/4RB2 w - - 0 28",
    score: 3,
  },
  {
    lichess: "https://lichess.org/4DE20wYe",
    fen: "r1b1r1k1/1p1n1pbp/2pp1np1/q7/p1PBP3/2N2NPP/PP1Q1PB1/R3R1K1 w - - 2 14",
    score: 0,
  },
  {
    lichess: "https://lichess.org/kxgJbmkR",
    fen: "r3k2r/pp1q2pp/2nb1n2/2pp2B1/6b1/2P2NP1/PP2PPBP/RN1Q1RK1 w kq - 6 10",
    score: 3.9,
  },
  {
    lichess: "https://lichess.org/O52JXJ2N",
    fen: "5r1k/Q1p1q2p/3p1bnP/1PpPp3/B1P1PpR1/2N2P2/8/1K4R1 w - - 11 32",
    score: 9.4,
  },
  {
    lichess: "https://lichess.org/v8burbfL",
    fen: "r3kb1r/p4p2/1n1p1p1p/1ppP1N2/5P2/1P4P1/P3P1BP/R3K2R w KQkq - 0 19",
    score: 3.4,
  },
  {
    lichess: "https://lichess.org/g1c2LUX7",
    fen: "2k4r/5np1/p3p2p/1p1b4/2p2P2/2P3PK/PP5P/3R1R2 w - - 2 25",
    score: -5.7,
  },
  {
    lichess: "https://lichess.org/Gv42ok1T",
    fen: "8/6pp/p2rB1k1/8/1n6/1P6/6PK/5R2 w - - 0 33",
    score: -0.3,
  },
  {
    lichess: "https://lichess.org/Vo5OnQdH",
    fen: "5rk1/4pp1p/3p2p1/1N6/1n2R3/1P3N1P/Pb3PPK/2r5 w - - 0 21",
    score: -6.9,
  },
  {
    lichess: "https://lichess.org/V9PHUk0w",
    fen: "8/p4p1k/1pp3p1/8/2P5/1P2P1Q1/P3bP2/3q1BK1 w - - 1 32",
    score: -0.2,
  },
  {
    lichess: "https://lichess.org/r7wXMemc",
    fen: "r2r4/5bk1/6pN/1pp3R1/pn1pP3/3P4/PPP3B1/R5K1 w - - 2 29",
    score: 0.7,
  },
  {
    lichess: "https://lichess.org/jGLxeJeP",
    fen: "6k1/1pq2pp1/5pp1/2pP4/2P5/1P1Qr2P/1r3PP1/R6K w - - 0 27",
    score: 1.6,
  },
  {
    lichess: "https://lichess.org/qiggU0IP",
    fen: "2rq1rk1/1b2bp1p/1nn1p1pP/p2pP3/3P1B2/P1p1QNP1/2P2PBN/R1R3K1 w - - 1 22",
    score: 2.5,
  },
  {
    lichess: "https://lichess.org/ae547Zse",
    fen: "r2q1rk1/pp2bppp/2n2n2/2pp4/8/PP2Pb1P/1B1PNPP1/1BRQK2R w K - 0 14",
    score: -0.2,
  },
  {
    lichess: "https://lichess.org/q6jU92Yp",
    fen: "r2qk1nr/3bbpp1/p1n1p3/1p1pP2p/3P4/2PB1N1P/5PP1/RNBQ1RK1 w kq h6 0 12",
    score: 0.9,
  },
  {
    lichess: "https://lichess.org/iitvwNVu",
    fen: "8/4kp2/5np1/7p/7P/2R2BP1/1r3P2/6K1 w - - 3 40",
    score: 0,
  },
  {
    lichess: "https://lichess.org/2VSGN7ce",
    fen: "2k2b2/pp5p/4ppp1/P7/R2P3P/6B1/2r2PP1/6K1 w - - 0 33",
    score: -4.2,
  },
  {
    lichess: "https://lichess.org/9b1SxrSK",
    fen: "3r4/5p2/6pp/2p5/2KP1PkP/3P4/4rP2/4R3 w - - 0 37",
    score: -6,
  },
  {
    lichess: "https://lichess.org/OeKgeI13",
    fen: "r4rk1/p1pn2pp/1p1p2q1/8/2PPpB2/2P1P2P/P1Q3P1/R4RK1 w - - 0 22",
    score: 0.4,
  },
  {
    lichess: "https://lichess.org/tUr0XxjN",
    fen: "rnbqkbnr/pp1ppppp/8/2p5/8/4P3/PPPP1PPP/RNBQKBNR w KQkq c6 0 2",
    score: 0.2,
  },
  {
    lichess: "https://lichess.org/umLBJOD7",
    fen: "5r1k/6qp/1n2pnp1/1PNbN3/1P6/6QP/5PP1/4RBK1 w - - 1 33",
    score: 8.3,
  },
  {
    lichess: "https://lichess.org/5DwcQfPp",
    fen: "rn1qkb1r/pp1b1ppp/5n2/4p3/P1P4P/R2K2P1/5P1R/1q3BN1 w kq - 0 15",
    score: 0,
  },
  {
    lichess: "https://lichess.org/B8kWskL8",
    fen: "r1bqk2r/pp3pb1/2n1pnp1/6Np/3PpB1P/PBP5/5PP1/RN1QK2R w KQkq - 2 12",
    score: -1.3,
  },
  {
    lichess: "https://lichess.org/WKG33Rvr",
    fen: "r4rk1/pppnqppp/5n2/4N3/1bPP4/8/PP2QPPP/RNB2RK1 w - - 1 11",
    score: 1.5,
  },
  {
    lichess: "https://lichess.org/RsJUFI4w",
    fen: "2r2rk1/3qbppp/ppn1pn2/3p4/1P4b1/PN1P1NP1/1B2PPBP/2RQ1RK1 w - - 2 14",
    score: 0.5,
  },
  {
    lichess: "https://lichess.org/GnSROnYg",
    fen: "3rr3/2q2bk1/2p3p1/p1p1Np1p/2Pp1P1P/1P6/P1Q3P1/3RRK2 w - - 0 26",
    score: 0.5,
  },
  {
    lichess: "https://lichess.org/iLpeuvGS",
    fen: "8/5n2/1n1k2p1/2p1p1Pp/1pPpP2P/1P1P1N1B/3K4/8 w - - 1 50",
    score: -0.1,
  },
  {
    lichess: "https://lichess.org/ohvyLNSE",
    fen: "3r2k1/5p1p/p4p2/4nP2/r7/2p5/4B2P/2R2R1K w - - 0 34",
    score: -5.1,
  },
  {
    lichess: "https://lichess.org/kPMNW0a6",
    fen: "5rk1/5ppp/p1rqpn2/1p1p3b/3P4/2PB4/PPQN1PPP/R3R1K1 w - - 0 16",
    score: 0.6,
  },
  {
    lichess: "https://lichess.org/YVXZUPYW",
    fen: "r3rbk1/1p3p2/2p3p1/p2p2P1/2P1N1n1/P7/1P1B1PK1/2R1R3 w - - 0 27",
    score: -0.1,
  },
  {
    lichess: "https://lichess.org/KELUs4Cf",
    fen: "r1b2rk1/pp4p1/3bp2p/3nNpq1/3BQ3/1B1R4/PPP3PP/5RK1 w - f6 0 19",
    score: 1.4,
  },
  {
    lichess: "https://lichess.org/UjHHsJOv",
    fen: "r1bqk2r/ppp2pp1/1bnp4/4pn2/N1P5/P3P1NP/1P1P1PB1/R1BQK2R w KQkq - 1 11",
    score: -1.4,
  },
  {
    lichess: "https://lichess.org/C6gYOpkR",
    fen: "8/pp2kpp1/2p4p/4P3/1nP3P1/7P/P2KBnb1/6N1 w - - 1 29",
    score: -8.6,
  },
  {
    lichess: "https://lichess.org/kbn8p7eG",
    fen: "r1bq1r1k/pppn2bp/2n5/6p1/5p1P/1QP2NB1/PP1NBPP1/R4RK1 w - - 2 15",
    score: -2.9,
  },
  {
    lichess: "https://lichess.org/3o4NZwpE",
    fen: "r3k2r/2pq2pp/p1pb1p2/3pnp1P/N7/1P2P3/PBPPQPP1/R3K2R w KQkq - 3 15",
    score: 1.6,
  },
  {
    lichess: "https://lichess.org/YMoEemzS",
    fen: "7b/1Q5p/2n1q1kP/p2pp1P1/5p2/1P1P4/1BP5/2K2R2 w - - 3 38",
    score: 9.1,
  },
  {
    lichess: "https://lichess.org/vxZdZ8CQ",
    fen: "B1b2rk1/2p1qnb1/p3p2p/1p4pP/2n5/2N2N2/PPPBQ1P1/1K1R3R w - - 1 19",
    score: 8.1,
  },
  {
    lichess: "https://lichess.org/HKgLCYj4",
    fen: "1r4k1/2R3p1/7p/5b2/8/3p3P/1P4P1/3R3K w - - 0 31",
    score: 4,
  },
  {
    lichess: "https://lichess.org/7rahBlJX",
    fen: "r1b2rk1/p5pp/2n1p3/3pPp2/2pPn3/5NP1/PqBN1PP1/2R1QK1R w - f6 0 18",
    score: -2,
  },
  {
    lichess: "https://lichess.org/fmFf4X9E",
    fen: "r2q1rk1/p1p2p2/1pb1pn1p/6p1/3P3B/P2Q4/1PP1BPPP/R3R1K1 w - g6 0 15",
    score: 2,
  },
  {
    lichess: "https://lichess.org/NBUTpDHI",
    fen: "3k1b2/r1p4p/p1P1Bp1n/1p2pP2/8/5N2/PPP3PP/RNB1K2R w KQ - 0 15",
    score: 23.6,
  },
  {
    lichess: "https://lichess.org/nrSgKJ65",
    fen: "r1b2rk1/p5pp/1pp3q1/5p2/8/5Q1P/PPB2PP1/3RR1K1 w - - 2 20",
    score: 4.8,
  },
  {
    lichess: "https://lichess.org/vfzE9Sj1",
    fen: "r3r1kb/1ppb1q2/p2p1p2/3P3p/4PQn1/2NB1N2/PPP3P1/2K1B2R w - - 4 22",
    score: 0.1,
  },
  {
    lichess: "https://lichess.org/cfUbnhke",
    fen: "r4q1k/1p2p1bp/2p1B1p1/pP3b2/P2P4/BQ2P3/5PPP/2R3K1 w - - 0 20",
    score: 7.5,
  },
  {
    lichess: "https://lichess.org/u2WXBNop",
    fen: "rnbqkbnr/ppp2p1p/8/3p1p2/6P1/NP2P3/P1PP1p1P/R1B1KBNR w KQkq - 0 8",
    score: -15.1,
  },
  {
    lichess: "https://lichess.org/i3SFpj84",
    fen: "1r2r1k1/3b2np/pp1p1q2/P1pPbp2/2P5/1PNQ2P1/3B2BP/4RR1K w - - 0 25",
    score: 1.6,
  },
  {
    lichess: "https://lichess.org/HLA4xyIE",
    fen: "r4rk1/p1q3p1/1p6/3P1pp1/2Pp4/4p3/PP1Q1PPP/2R1K2R w K - 0 21",
    score: 0.9,
  },
  {
    lichess: "https://lichess.org/EhZGRdnw",
    fen: "2k5/pp3ppp/2p2q2/8/4P3/5B1P/PPP2PP1/3R2K1 w - - 0 19",
    score: -1.5,
  },
  {
    lichess: "https://lichess.org/zYNPle0x",
    fen: "r1b1kb1r/2q2ppp/2npp3/1p5n/2B1P3/4BN2/PP2QPPP/R2R2K1 w kq - 0 13",
    score: 1.8,
  },
  {
    lichess: "https://lichess.org/zXSfEnQB",
    fen: "4r3/1p4p1/p2k1n1p/8/3Pp1P1/P1N2K1P/1P2R3/8 w - - 0 29",
    score: 1.4,
  },
  {
    lichess: "https://lichess.org/hrXWUX91",
    fen: "r3q2k/ppp1p1b1/1nnpb1pp/8/7P/5Q2/PPPPNPP1/R1B1K2R w KQ - 4 14",
    score: -7.7,
  },
  {
    lichess: "https://lichess.org/uS2auw5W",
    fen: "8/R5pk/3r4/5PpK/7P/8/8/8 w - - 0 38",
    score: 6.6,
  },
  {
    lichess: "https://lichess.org/C0rPq7d4",
    fen: "2r1qrk1/1bpnbppp/pp1p1n2/4p3/2PPP3/1PN2NP1/PBQ2PBP/3R1RK1 w - - 4 13",
    score: 3.3,
  },
  {
    lichess: "https://lichess.org/EAhtwlRq",
    fen: "r5k1/3nppbp/pBp3p1/1p2n3/2q1P3/P1N2P2/1PB2QPP/3R2K1 w - - 1 20",
    score: -2,
  },
  {
    lichess: "https://lichess.org/zKBJUGJA",
    fen: "r3r1k1/1pqn1pbp/2p1p1p1/p7/1BBPP3/2P2Q1P/P4PP1/2R2RK1 w - a6 0 18",
    score: 0,
  },
  {
    lichess: "https://lichess.org/3N7CiBzx",
    fen: "4r2r/pppk2bp/3p2n1/3P2B1/2P2P2/1P6/P3p1PP/2KR2NR w - - 0 19",
    score: -0.3,
  },
  {
    lichess: "https://lichess.org/jWFzlM0I",
    fen: "rn1qkb1r/1b3ppp/1P1p1n2/p1pP4/P7/2N5/1P3PPP/R1BQKBNR w KQkq - 0 10",
    score: 1.9,
  },
  {
    lichess: "https://lichess.org/Fh9jzXHp",
    fen: "r1qr4/1b2pk2/p3Nbpp/1p1p1n2/5P2/1BPP4/PP2Q1PP/R1B1R1K1 w - - 4 21",
    score: 7.7,
  },
  {
    lichess: "https://lichess.org/eUVBfPFS",
    fen: "8/p4r1p/2p3p1/1p1k4/3P4/4B1bP/PPP1R1P1/6K1 w - - 2 30",
    score: 0,
  },
  {
    lichess: "https://lichess.org/JeAbnQ0p",
    fen: "8/pp2R2p/3N4/6pk/8/3n3P/P4rP1/5K2 w - - 0 29",
    score: -0.4,
  },
  {
    lichess: "https://lichess.org/Uw7OywI6",
    fen: "r5k1/Bp1qb1pp/2p1b3/4Pp2/2P2P2/6N1/PPQ3PP/4R1K1 w - - 1 25",
    score: 2,
  },
  {
    lichess: "https://lichess.org/jQr5lX15",
    fen: "rnbq1rk1/ppp2ppp/4pb2/8/3PB2P/5N2/PPP2PP1/R1BQK2R w KQ - 1 9",
    score: 6.6,
  },
  {
    lichess: "https://lichess.org/d5rk9L1b",
    fen: "r3k2r/ppp1q1b1/2n5/3Bp1Np/6b1/8/PPP2PPP/R1BQ1RK1 w kq - 1 13",
    score: 5.7,
  },
  {
    lichess: "https://lichess.org/5CTJfSyH",
    fen: "5r2/1p4kp/2n1p3/p1bpP3/5r2/1PPB4/P2NQ2P/7K w - - 0 26",
    score: -1.1,
  },
  {
    lichess: "https://lichess.org/Gc4hYgbe",
    fen: "8/pb4k1/1b3p1p/3p4/5N2/3B4/P4PPP/5K2 w - - 2 32",
    score: 0,
  },
  {
    lichess: "https://lichess.org/28RyT2LL",
    fen: "2rq1rk1/pp1b1p1p/2nppbp1/8/2BP1P2/2P2N2/PP4PP/R1BQ1RK1 w - - 5 14",
    score: -0.7,
  },
  {
    lichess: "https://lichess.org/z1oShIO2",
    fen: "5rk1/1q3pb1/pp2p2p/3bNnp1/P2P4/4PB1P/1P3PPB/R1rQ2K1 w - - 0 24",
    score: 3.5,
  },
  {
    lichess: "https://lichess.org/RSdDgowu",
    fen: "r5k1/2pnqppp/2p5/p2pP3/1r1R1P2/2N3Q1/PPP3PP/2K2R2 w - - 2 17",
    score: 0,
  },
  {
    lichess: "https://lichess.org/NOLXOV11",
    fen: "6k1/r2b2p1/1p1bpq1p/p2pN3/P2P2Q1/2PB2P1/1P4P1/R5K1 w - - 0 25",
    score: 8.2,
  },
  {
    lichess: "https://lichess.org/qMQjl1FT",
    fen: "4rrk1/6pp/2p5/1qb2p2/p3p2Q/P3P3/1B1R1PPP/2R3K1 w - - 2 26",
    score: 4.7,
  },
  {
    lichess: "https://lichess.org/tAwn3ufq",
    fen: "2k5/2p2p2/pr3n1p/4b1p1/1PBN4/P4P2/2P3PP/3R2K1 w - - 1 28",
    score: 3.8,
  },
  {
    lichess: "https://lichess.org/xQ8ctaZk",
    fen: "3r1r1k/5pp1/p1q3pb/1p1p4/5PbQ/3B2P1/PPP5/1K1R3R w - - 0 27",
    score: 0.9,
  },
  {
    lichess: "https://lichess.org/Hz5ZIGVX",
    fen: "6k1/3qppb1/3p4/1ppPn1Pp/r3P2P/6Q1/1PP1N3/2B1K1R1 w - - 2 22",
    score: -4.8,
  },
  {
    lichess: "https://lichess.org/Vdw2snc6",
    fen: "5rk1/1b1q1ppp/p3pn2/1p1p4/2rP1P2/1QN5/PPR1PPBP/2R3K1 w - - 1 18",
    score: -0.1,
  },
  {
    lichess: "https://lichess.org/wXLEI6p1",
    fen: "r4rk1/1q2b1pp/b1p1pp2/2PpN3/PP6/2Q1P1P1/3N1PP1/1R2K2R w K - 0 19",
    score: 0.8,
  },
  {
    lichess: "https://lichess.org/zL7ByazG",
    fen: "r2q1r1k/p4ppb/2p2n1p/2b1p3/4p3/2N3R1/PPP1B1PP/R1B2Q1K w - - 2 16",
    score: -6.6,
  },
  {
    lichess: "https://lichess.org/NXzjK13F",
    fen: "6k1/3R3p/4r1p1/5p2/2P1b3/pPp3PP/P2K4/4R3 w - - 0 42",
    score: 8.5,
  },
  {
    lichess: "https://lichess.org/kwAzwrNO",
    fen: "2r1r1k1/pp1qppb1/1n1P3p/6p1/P3N2B/5Q1P/4BPP1/3R2K1 w - - 0 22",
    score: 0.7,
  },
  {
    lichess: "https://lichess.org/bTkxuuQ7",
    fen: "rnb5/pp2pnkp/3p4/q7/5P2/8/P1P2KP1/R2Q1B1R w - - 0 16",
    score: -4.3,
  },
  {
    lichess: "https://lichess.org/z0s5m8I1",
    fen: "2r2r2/1p2ppk1/p2pbnp1/q6p/2PQP2P/2N2P2/PP4P1/1K1R1B1R w - - 0 17",
    score: 0,
  },
  {
    lichess: "https://lichess.org/MLfHG4I9",
    fen: "2b3nr/kp3p1p/3Bp1p1/8/1r2P3/2b5/PPPN1PPP/2KR3R w - - 0 21",
    score: 7.2,
  },
  {
    lichess: "https://lichess.org/wio4jloz",
    fen: "6k1/1p3pb1/p3p1pp/1q6/5B2/6QP/PP2RPPK/3r4 w - - 2 28",
    score: -4.8,
  },
  {
    lichess: "https://lichess.org/NQkSkH1t",
    fen: "3r4/1p2rk2/pn2pp2/P2p2p1/3P2PP/2PB2K1/1P2R3/8 w - - 0 42",
    score: -6.3,
  },
  {
    lichess: "https://lichess.org/riDi1JBc",
    fen: "r2r2k1/pp1bppbp/2n3p1/4P3/B2Pp3/2N1B3/PP3PPP/2R1K2R w K - 1 15",
    score: 0.5,
  },
  {
    lichess: "https://lichess.org/D6yQ8mYY",
    fen: "r1b2rk1/ppppnppp/1bn5/1N6/5P2/1NP1B1Pq/PP1QB2P/R4RK1 w - - 7 16",
    score: 2.2,
  },
  {
    lichess: "https://lichess.org/sqMzaN3N",
    fen: "r4rk1/1q1nppbp/3p2p1/1pp5/3PPB2/2PQ1N1P/1P3PP1/2R1R1K1 w - - 0 18",
    score: 0.2,
  },
  {
    lichess: "https://lichess.org/JStCg9wV",
    fen: "6k1/pp4pp/2n2p2/8/2n2N2/4rN2/PP4PP/3R2K1 w - - 0 23",
    score: -2.4,
  },
  {
    lichess: "https://lichess.org/HgrVMXJT",
    fen: "1r4k1/2rbq1pp/4p3/p1npP3/1p1N4/4QRPB/PPP4P/1K3R2 w - - 2 28",
    score: 0.9,
  },
  {
    lichess: "https://lichess.org/KqXpSJ4T",
    fen: "r2q2k1/pp4pp/2p1pr2/3pnp2/1BPPn3/P2QP3/1P3PPP/2R2RK1 w - - 0 15",
    score: -0.1,
  },
  {
    lichess: "https://lichess.org/rRznkC7I",
    fen: "2r2r2/1pqb1pk1/p2n2pp/P1pPp3/4P3/2N2P2/1P1QB1PP/R1R3K1 w - - 1 21",
    score: 1.1,
  },
  {
    lichess: "https://lichess.org/fveqGW64",
    fen: "r2q1rk1/ppp1np2/3p1n1p/1Bb1p1pb/4P3/2PP1NBP/PP1N1PP1/R2Q1RK1 w - - 3 12",
    score: 0.3,
  },
  {
    lichess: "https://lichess.org/ov5BCI4z",
    fen: "r4rk1/1bqnbppp/4p3/4p1P1/pp2P3/3BB2P/PPPN1NQ1/R4RK1 w - - 4 20",
    score: 5.6,
  },
  {
    lichess: "https://lichess.org/ebe8Tse4",
    fen: "r1bqkbnr/1p1p1p1p/p1n1p3/2p3p1/4P3/2NB1N2/PPPP1PPP/R1BQR1K1 w kq g6 0 8",
    score: -0.1,
  },
  {
    lichess: "https://lichess.org/GkzJDGJa",
    fen: "r1bqr3/pp2ppbk/2n3pp/3p3n/3P4/2PBBN1P/PP3PP1/R2QRNK1 w - - 2 13",
    score: 1.9,
  },
  {
    lichess: "https://lichess.org/CULp4xt0",
    fen: "r1q1k1nr/ppp1ppbp/3p2p1/3Pn3/5B2/2N2NPb/PPP1PPBP/R2Q1RK1 w kq - 3 9",
    score: 0.8,
  },
  {
    lichess: "https://lichess.org/FmNgMqEs",
    fen: "4r3/3br2p/1k1p2p1/1ppP1p2/4P3/1P3P2/1N3KPP/R3R3 w - - 0 28",
    score: -3.8,
  },
  {
    lichess: "https://lichess.org/IXkm2pdh",
    fen: "r1b1r1k1/1p3ppp/8/p2p4/P1pBn3/5N2/1P2BPPP/R3K2R w KQ - 5 17",
    score: 5.9,
  },
  {
    lichess: "https://lichess.org/LhIOqQ5p",
    fen: "rn1r2k1/pp2ppbp/6p1/2P5/2b2B2/4P3/1PR2PPP/4K1NR w K - 0 13",
    score: -3.1,
  },
  {
    lichess: "https://lichess.org/FWDigduR",
    fen: "4rb1r/1bk3pp/p1n2n2/4P1QP/1p6/8/PPP5/R1B1KB1R w KQ - 1 21",
    score: 7.6,
  },
  {
    lichess: "https://lichess.org/DyfXsG3F",
    fen: "r4r2/pb1n1pk1/1ppq1npp/3p4/3P4/2PB1NNP/PP1Q1PP1/R3R1K1 w - - 1 16",
    score: 9.1,
  },
  {
    lichess: "https://lichess.org/CVAXJadM",
    fen: "3r1rk1/1p1qbppp/2p3b1/p3P3/Pn1N4/3P1QNP/BP3PP1/R3R1K1 w - - 1 22",
    score: -0.8,
  },
  {
    lichess: "https://lichess.org/YIPMzoMI",
    fen: "8/8/8/r5k1/8/4RK2/6P1/8 w - - 12 55",
    score: 0,
  },
  {
    lichess: "https://lichess.org/4naGHrzy",
    fen: "2r1r1k1/1p2npbp/1q1p2pB/p2B4/P2P4/1PP3Pb/3QNP1P/R3R1K1 w - - 5 20",
    score: 2.3,
  },
  {
    lichess: "https://lichess.org/i09EMRG4",
    fen: "r2q1rk1/1pp2ppp/1pn5/3bp3/8/1B1P1N1P/PPP2PP1/R2Q1RK1 w - - 0 13",
    score: -0.1,
  },
  {
    lichess: "https://lichess.org/deEQR53u",
    fen: "r2q1r2/4pnk1/p4pp1/1p1PP3/2pQ1Pbp/2P3NP/P1B3P1/1R3RK1 w - - 0 24",
    score: 3,
  },
  {
    lichess: "https://lichess.org/MGdEf1ds",
    fen: "r2q1rk1/pp3pbp/2nPb1p1/1N1QP3/8/4B3/PP2B1PP/2R2RK1 w - - 1 17",
    score: 2.5,
  },
  {
    lichess: "https://lichess.org/ph9UjqzG",
    fen: "r3r1k1/3bbppp/pq1p4/1p1P4/3NPBn1/PQRB4/1P3PPP/2R3K1 w - - 6 19",
    score: 0,
  },
  {
    lichess: "https://lichess.org/kQ8ddcap",
    fen: "2r2rk1/1qnb2p1/p1n1p2p/1pRpPp2/1P6/P2BP1B1/3QNPPP/2R3K1 w - - 8 22",
    score: 2.4,
  },
  {
    lichess: "https://lichess.org/WisuzdLG",
    fen: "8/1p2r2N/p5k1/4P1p1/3b4/1P4Bb/1P5P/4R2K w - - 1 30",
    score: -5.5,
  },
  {
    lichess: "https://lichess.org/fcr0VfSr",
    fen: "2k2r2/p2r1pp1/2p1p2p/1p2P2P/3n2P1/3B4/PPP2R2/2K1R3 w - - 2 27",
    score: 3.6,
  },
  {
    lichess: "https://lichess.org/bh272zUP",
    fen: "2r3k1/4qp1p/pB1pp1p1/Np4b1/6P1/P1P3nP/1P2Q3/R4RK1 w - - 1 29",
    score: 3.3,
  },
  {
    lichess: "https://lichess.org/xXRCRquk",
    fen: "4rrk1/1p4p1/2n1p1p1/p2pp3/3Bb2P/2P1R1P1/PP1N1P2/R5K1 w - - 0 23",
    score: 2,
  },
  {
    lichess: "https://lichess.org/bs0oQTlN",
    fen: "1r1q1rk1/bpp2pp1/p1npbn1p/4p3/1PP5/P1NP2P1/4PPBP/1RBQNRK1 w - - 3 12",
    score: 0.4,
  },
  {
    lichess: "https://lichess.org/4ELIDnqG",
    fen: "1rbq1rk1/2p2pb1/2Pp1np1/4p2p/1N6/1PB3P1/P3PPBP/R2Q1RK1 w - - 2 17",
    score: 3.2,
  },
  {
    lichess: "https://lichess.org/Jt71oh6I",
    fen: "1qr2rk1/1p1bppb1/p1np1np1/7p/2P5/1PN1N1P1/PB1QPPBP/2R2RK1 w - h6 0 15",
    score: 1.4,
  },
  {
    lichess: "https://lichess.org/6qDsm2pa",
    fen: "r2r2k1/ppp1qpp1/3pb1np/4p2n/3PP3/1PPQ1NPP/PB3P2/R3RBK1 w - - 4 17",
    score: 1.5,
  },
  {
    lichess: "https://lichess.org/b4trNf2H",
    fen: "1r3rk1/1b2nppp/p1n1p3/8/2P1NP2/3BQNP1/q4K1P/1R5R w - - 0 23",
    score: -0.8,
  },
  {
    lichess: "https://lichess.org/DWNpqJ5D",
    fen: "r2qk2r/1pp1ppbp/p3bnp1/3PN3/P1p1P3/2N5/1P2BPPP/n1BQ1RK1 w kq - 0 12",
    score: -2,
  },
  {
    lichess: "https://lichess.org/qy8wtXxR",
    fen: "r4r2/pp2Npk1/4q3/P1Q4p/3pP2P/3P2P1/1P3PK1/n4R2 w - - 1 24",
    score: 8.6,
  },
  {
    lichess: "https://lichess.org/IIb14I6D",
    fen: "2rq1rk1/7p/1p2p1p1/pN1pPp2/Pn1P1Q2/1P5R/2P3PP/R5K1 w - - 3 22",
    score: 1.5,
  },
  {
    lichess: "https://lichess.org/GFaflswT",
    fen: "r1b2k1r/pp2bppp/2nN4/7q/3p4/5N2/PP3PPP/R1BQR1K1 w - - 3 13",
    score: 2.4,
  },
  {
    lichess: "https://lichess.org/1bXrPAMP",
    fen: "2q3k1/1pr1ppbp/p2p1np1/P2P4/3B4/1PP2P2/5QPP/R2R2K1 w - - 1 25",
    score: 5.8,
  },
  {
    lichess: "https://lichess.org/JCT8OVY1",
    fen: "r1bqkb1r/pp3ppp/2p1pn2/8/3P4/4BN2/PPP2PPP/R2QKB1R w KQkq - 0 8",
    score: 1,
  },
  {
    lichess: "https://lichess.org/IdJQ6rnI",
    fen: "4r1k1/pp4pp/2p1Nb2/3P4/8/1P1KP2P/P1RP1r2/8 w - - 0 24",
    score: -7.2,
  },
  {
    lichess: "https://lichess.org/QhhKNA2o",
    fen: "2r1kb2/1b4p1/p2pp3/1p2n3/3NP3/1Bq1BP2/P1P1Q3/1K5R w - - 1 22",
    score: 1.1,
  },
  {
    lichess: "https://lichess.org/gMgaqbWa",
    fen: "rn1qkbnr/ppp1pppp/8/3p4/8/5NPb/PPPPPP1P/RNBQKB1R w KQkq - 1 3",
    score: 9.5,
  },
  {
    lichess: "https://lichess.org/YiLolPTU",
    fen: "r3k2r/ppp2ppp/2n3n1/4Pb2/2B1RB2/8/PPP2PPP/RNK5 w kq - 1 12",
    score: -7.1,
  },
  {
    lichess: "https://lichess.org/EPmNLgCR",
    fen: "n2r1r1k/4b1pp/p7/N1p3N1/1n3B2/R5P1/1P3PbP/5RK1 w - - 0 27",
    score: 0.7,
  },
  {
    lichess: "https://lichess.org/A4eBorgu",
    fen: "1r3rk1/1bq1pp1p/6p1/3pb3/8/2P2P1P/1P1N2P1/R1BQR1K1 w - - 0 23",
    score: -0.7,
  },
  {
    lichess: "https://lichess.org/wWj3RRXI",
    fen: "r3k2b/pp1bpp2/1nn3p1/1B6/3q4/2N2Q2/PP3PP1/R1B1K1N1 w Qq - 2 14",
    score: -3.6,
  },
  {
    lichess: "https://lichess.org/7oDJRCMN",
    fen: "r4rk1/1b3ppp/p7/1pq1P3/4pP2/8/PPNQ2PP/R2R2K1 w - - 6 21",
    score: 1.4,
  },
  {
    lichess: "https://lichess.org/LRp8T3uN",
    fen: "2b1r1k1/5pp1/p6p/1p3p2/3R4/1PB2P2/PPr3PP/5RK1 w - - 3 24",
    score: 0,
  },
  {
    lichess: "https://lichess.org/RXlrUlE0",
    fen: "6k1/7p/7p/p2p3B/3PnB2/2rb1R2/2p3PK/2r5 w - - 0 38",
    score: -7.7,
  },
  {
    lichess: "https://lichess.org/g9s6CwVm",
    fen: "r2qkbnr/pp1n1pp1/4p1p1/8/3p4/4B1N1/PPP1BPPP/R2QK2R w KQkq - 0 11",
    score: 0.7,
  },
  {
    lichess: "https://lichess.org/Db0Cq1xn",
    fen: "r4rk1/4bppp/pq1pb1P1/4p2P/1p2P3/2N2P2/PPPQ4/1K1R1B1R w - - 0 19",
    score: 3.4,
  },
  {
    lichess: "https://lichess.org/jDaywqRg",
    fen: "8/pp2n2p/2p1k1p1/2Pp1p2/3P4/2B1bPN1/PP4PP/5K2 w - - 0 27",
    score: -1.1,
  },
  {
    lichess: "https://lichess.org/czTtybym",
    fen: "5r2/1p2r1k1/p2NP1p1/2p1b2p/P1B5/2N3P1/1P4K1/3R4 w - - 1 29",
    score: 4.1,
  },
  {
    lichess: "https://lichess.org/vln5gY0T",
    fen: "r1bqkb1r/pp4pp/2n2n2/2p2p2/8/2NN2P1/PP3PBP/R1BQ1RK1 w kq - 1 11",
    score: 5.3,
  },
  {
    lichess: "https://lichess.org/9UGOy5pB",
    fen: "r1bq1rk1/p3bppp/2p5/3p2B1/4n3/3B2N1/PPP2PPP/R2Q1RK1 w - - 4 13",
    score: 0.7,
  },
  {
    lichess: "https://lichess.org/3dd7Jh9G",
    fen: "r4rk1/p1p2ppp/2p2n2/8/5qb1/1P1B1N2/P1P2PPP/R2Q1RK1 w - - 3 14",
    score: 0.8,
  },
  {
    lichess: "https://lichess.org/9QBLatim",
    fen: "1r4k1/p1p2pbp/1p1n2p1/3Pq3/1P6/P1NQ2P1/5P1P/B2R2K1 w - - 3 25",
    score: 0.9,
  },
  {
    lichess: "https://lichess.org/1cPS0aRY",
    fen: "rnq2rk1/pp4bp/2p2np1/4p3/2P5/2N1BN1P/PPQ2PP1/2KRR3 w - - 2 15",
    score: 4.4,
  },
  {
    lichess: "https://lichess.org/QWUfmqyR",
    fen: "2r2rk1/pp1b1p1p/2n1pp2/q7/3P4/P4BN1/2P2PPP/R2Q1RK1 w - - 0 15",
    score: 2.9,
  },
  {
    lichess: "https://lichess.org/yO7dtMgt",
    fen: "2r1k2r/1p2pp2/p3b1pp/2n5/5BPP/2P2B2/P1P2P2/2KR3R w k - 1 18",
    score: -0.2,
  },
  {
    lichess: "https://lichess.org/uZordjHD",
    fen: "5rk1/6r1/2pn2p1/p1Np4/1p6/1P2pqPQ/P7/4R1KR w - - 4 31",
    score: -6.1,
  },
  {
    lichess: "https://lichess.org/ta1k3mSt",
    fen: "2r3k1/1q3pp1/4p2p/pnp5/2Q1P3/1P3P2/P1N2KPP/2R5 w - - 4 29",
    score: 0,
  },
  {
    lichess: "https://lichess.org/1DpRmfGi",
    fen: "3qr1k1/pp5p/2p1r1p1/5p2/2PPn3/1P1Q1R1P/P5PB/3R2K1 w - - 4 33",
    score: 0.1,
  },
  {
    lichess: "https://lichess.org/HzBtqkBE",
    fen: "5r2/R1q1ppnk/3p2p1/pB1P3p/1p2P3/1P4PP/P4P2/6K1 w - - 0 30",
    score: 3,
  },
  {
    lichess: "https://lichess.org/SGiylQHV",
    fen: "r3k1nr/pp3ppp/2pPp3/2q4b/3p4/6P1/PPPPP1BP/R1BQ1RK1 w kq - 1 12",
    score: 0.4,
  },
  {
    lichess: "https://lichess.org/nFIsYtnr",
    fen: "8/P4kpp/1n6/3b4/8/5PB1/2r3PP/R5K1 w - - 1 30",
    score: 0,
  },
  {
    lichess: "https://lichess.org/J9FMmpVV",
    fen: "3r2k1/p4ppp/1p2p3/2P5/8/4P1b1/P4PPP/2R3K1 w - - 0 19",
    score: -1.9,
  },
  {
    lichess: "https://lichess.org/1N7uRro6",
    fen: "8/2r3kp/p2b2p1/3Bp3/PP2P3/6BP/4n1P1/1R4K1 w - - 4 33",
    score: 1.1,
  },
  {
    lichess: "https://lichess.org/jvp0Vh9U",
    fen: "3r1rk1/pp2bpp1/3qpn2/2p1N1pP/2PP4/4BP2/PP2Q3/1K1R3R w - - 0 23",
    score: 5.8,
  },
  {
    lichess: "https://lichess.org/FvcQN5gK",
    fen: "6k1/5ppp/p1Nbp3/1p6/1n2P3/1P4P1/PB3PKP/8 w - - 6 30",
    score: 0,
  },
  {
    lichess: "https://lichess.org/jGdYy3x3",
    fen: "r1b1k2r/1pqnbppp/p2ppn2/6B1/2BNPP2/2N2Q2/PPP3PP/R3K2R w KQkq - 5 10",
    score: 3,
  },
  {
    lichess: "https://lichess.org/3E0L0WKB",
    fen: "r2q1rk1/pp3pp1/2n2n1p/4pb2/8/2PPbN1P/PP2BPP1/RN1Q1RK1 w - - 0 11",
    score: -0.6,
  },
  {
    lichess: "https://lichess.org/h4YZJ9TV",
    fen: "1r6/Rb5p/1p3kp1/2pP4/8/1P3N2/5PPP/6K1 w - - 1 23",
    score: -0.4,
  },
  {
    lichess: "https://lichess.org/sQyFaC3C",
    fen: "r1b2rk1/p5pp/1qp1p3/2bpB3/4n3/3B1N2/PPP2PPP/R2Q1RK1 w - - 2 14",
    score: 2.4,
  },
  {
    lichess: "https://lichess.org/FhtnDy1k",
    fen: "2r1rb1k/3n1pp1/p2p1n1N/3P2Q1/1p1q1P2/8/PP2B1PP/4RR1K w - - 0 26",
    score: 0,
  },
  {
    lichess: "https://lichess.org/FwxJpNU7",
    fen: "r2q1rk1/2p2pp1/p1npbn1p/1pb1p3/4P3/1BPP1N1P/PP1N1PP1/R1BQ1RK1 w - - 1 11",
    score: 0.1,
  },
  {
    lichess: "https://lichess.org/RuBPmsr3",
    fen: "1rbq1r1k/1pp2pbp/p2p1npn/4p3/1PP1PP2/2NPB1PP/P2QN1B1/1R3RK1 w - - 2 17",
    score: 6.3,
  },
  {
    lichess: "https://lichess.org/TOWEl4tA",
    fen: "2r2rk1/1b2bppp/1p2pn2/pP4n1/7Q/P1qBB3/2P3PP/R4R1K w - - 0 22",
    score: -8.9,
  },
  {
    lichess: "https://lichess.org/hMV18sAu",
    fen: "3q1rk1/2nnbppp/4p3/p1ppP3/PrP5/R4N2/1P1NQPPP/2B1R1K1 w - - 3 16",
    score: -0.7,
  },
  {
    lichess: "https://lichess.org/dDo5hnKH",
    fen: "8/p1pk4/2p1p1p1/1p2B3/6P1/1PP5/P4PK1/2b5 w - - 0 29",
    score: 0.4,
  },
  {
    lichess: "https://lichess.org/2Cfw4Lqp",
    fen: "2r2rk1/pb2bppp/1pnqp3/8/3P4/2PB1N2/P2BQPPP/R3R1K1 w - - 4 15",
    score: 1,
  },
  {
    lichess: "https://lichess.org/LhmL1kze",
    fen: "rnb1k2r/p3b1pp/2p1Nn2/q1N5/1p1P4/8/PP3PPP/R1BQR1K1 w kq - 3 15",
    score: 10.3,
  },
  {
    lichess: "https://lichess.org/Tg8tBIg8",
    fen: "4rk2/2p3bp/1p1pn3/pPnBr3/5N2/1P4P1/P3RB1P/3R2K1 w - - 3 29",
    score: 2.6,
  },
  {
    lichess: "https://lichess.org/LzJu9BwM",
    fen: "3r1rk1/pp2bppp/2npb1B1/4P3/5n2/2N2N1P/PPP1QPP1/R3R1K1 w - - 0 15",
    score: 7.9,
  },
  {
    lichess: "https://lichess.org/fsTqPLrf",
    fen: "2rqk1nr/1b1n1pb1/p2pp2p/1pp3pP/3PP1P1/2NBBPN1/PPPQ4/R3K2R w KQk c6 0 13",
    score: -0.8,
  },
  {
    lichess: "https://lichess.org/bPkSEHP7",
    fen: "3r2k1/pb1q1pp1/1p2p2p/4P3/2P1pP1P/BP2Q1P1/P6K/4R3 w - - 2 28",
    score: -0.9,
  },
  {
    lichess: "https://lichess.org/RK85JcHw",
    fen: "rn1q1rk1/p4ppp/1p2pb2/3n4/3N4/1P2P1P1/PB3PKP/RN1Q1R2 w - - 1 13",
    score: 0.6,
  },
  {
    lichess: "https://lichess.org/xhvM540K",
    fen: "1N6/p7/1p5p/2pk1p2/5K1P/P1P5/2P5/8 w - - 4 44",
    score: 6.3,
  },
  {
    lichess: "https://lichess.org/HfndlCYu",
    fen: "2r2rk1/1pq2ppp/2p5/p1P1n3/Pb2P3/1Q3B1P/1B3PP1/R2R2K1 w - - 0 20",
    score: 0,
  },
  {
    lichess: "https://lichess.org/Zpjk4XAS",
    fen: "rq2r1k1/5bpp/2pb1p2/pp6/Q1PP1N2/4B1P1/5P1P/3R1RK1 w - - 0 26",
    score: -8.2,
  },
  {
    lichess: "https://lichess.org/AZ5iukpo",
    fen: "r4rk1/1pq2pp1/p2bp3/3pn1Bp/8/2P4Q/PP1N1P2/1K2R1R1 w - - 0 24",
    score: 2.5,
  },
  {
    lichess: "https://lichess.org/ekpXBwOx",
    fen: "r3kbnr/pp3ppp/1qn1p3/3pPb2/2pP4/2N1BN2/PPP1BPPP/R2Q1RK1 w kq - 0 9",
    score: 0.7,
  },
  {
    lichess: "https://lichess.org/nOuqmUZ9",
    fen: "r3kb1r/pp3ppp/nq2pn2/1Npp4/3P1B2/4PB2/PPP2PPP/R2QK2R w KQkq - 0 9",
    score: 0.5,
  },
  {
    lichess: "https://lichess.org/K9fgVZbl",
    fen: "r1bq1rk1/ppp2pp1/3p1n1p/4n3/2PN3B/P1P1P3/5PPP/R2QKB1R w KQ - 0 11",
    score: -0.7,
  },
  {
    lichess: "https://lichess.org/n1kf28h4",
    fen: "5rk1/4ppnp/1q1p2p1/3PnP2/1pp1PB2/6QP/1PP1B1P1/5R1K w - - 0 24",
    score: 2.4,
  },
  {
    lichess: "https://lichess.org/vxZ7wmDp",
    fen: "2k2rr1/2p2pN1/p1b2B1p/1p6/3RP1P1/2P2P1P/1PK5/3R4 w - - 0 26",
    score: 9.1,
  },
  {
    lichess: "https://lichess.org/z6axpCZV",
    fen: "rnbq1rk1/p3bppp/1pp1p3/3Pn3/3P4/2N3P1/PP2PPBP/R1BQ1RK1 w - - 0 10",
    score: 3.9,
  },
  {
    lichess: "https://lichess.org/w0xJAKAn",
    fen: "2rq1rk1/pb2bppp/1n2p3/p2p4/Q2P4/2P2PBP/1P1NB1P1/R4RK1 w - - 4 18",
    score: 1.1,
  },
  {
    lichess: "https://lichess.org/kBA9N0J0",
    fen: "r2k3r/1b2b2p/p3Qp2/1p2p2B/5P2/2N5/PPP3PP/2Kq4 w - - 0 19",
    score: 7.9,
  },
  {
    lichess: "https://lichess.org/tYaAHVas",
    fen: "8/4k3/1p3bp1/p1pbpnN1/P6P/2P2P2/1P3BP1/R5K1 w - - 0 33",
    score: 6.4,
  },
  {
    lichess: "https://lichess.org/sD8sWSsc",
    fen: "3rr1k1/p4p2/1p3b2/2pq1p2/Nn1P2p1/1P2PNP1/P2RQP2/3R2K1 w - - 0 23",
    score: -3.2,
  },
  {
    lichess: "https://lichess.org/4XPbrD5m",
    fen: "r1b2rk1/pp2bppp/1qn2n2/2pp4/3P4/2P2N1P/PPB2PP1/RNBQ1RK1 w - - 1 10",
    score: 0.4,
  },
  {
    lichess: "https://lichess.org/r1ujHVW6",
    fen: "r4rk1/1pp2pp1/3b1q1p/3Ppb2/pn6/PB2BN2/1PP1QPPP/2KR3R w - - 0 15",
    score: -5.7,
  },
  {
    lichess: "https://lichess.org/iR3Qrc3m",
    fen: "r2qr1k1/1pp2pbp/3p1np1/p3p3/2PnP3/P1NP1BPP/1P3P2/1RBQ1RK1 w - - 1 13",
    score: 0.3,
  },
  {
    lichess: "https://lichess.org/GFY9Jt4M",
    fen: "r3nrk1/3nqppp/2pb4/pp1p3P/3PP3/P1NB1Q2/1P1B1P2/R3K2R w KQ - 1 17",
    score: 2.4,
  },
  {
    lichess: "https://lichess.org/EgcMTB1a",
    fen: "r2qr1k1/pp3pp1/4b1np/3p4/3P4/P1N2Q2/1PB2PPP/R3R1K1 w - - 0 19",
    score: 0.8,
  },
  {
    lichess: "https://lichess.org/Rx9j4uCK",
    fen: "1qr3k1/1b3pp1/p2bpn2/P2n4/7R/1N3PP1/NPQ1BB1P/6K1 w - - 3 26",
    score: 0.4,
  },
  {
    lichess: "https://lichess.org/5XV4efZw",
    fen: "2r3k1/3bbp1p/2p1p3/4P3/pr1P2Pp/3RB3/5PKP/2RB4 w - - 0 27",
    score: 0.3,
  },
  {
    lichess: "https://lichess.org/4HR11uRg",
    fen: "7k/2n3p1/p6p/Pp6/4pq2/1BP5/KP3r2/3RQ3 w - - 0 40",
    score: 3,
  },
  {
    lichess: "https://lichess.org/uOB09RFS",
    fen: "8/5pk1/3npqp1/3p3p/3P1Q1P/3BP1P1/r4PK1/2R5 w - - 14 36",
    score: -0.1,
  },
  {
    lichess: "https://lichess.org/sdXMr0C5",
    fen: "r3kbnr/pp4p1/1qp1p1pp/4n3/3P3P/2N2P1B/PPPQ4/2KR3R w kq - 0 18",
    score: 7.5,
  },
  {
    lichess: "https://lichess.org/GThtxAzZ",
    fen: "8/p4pk1/1p2p1p1/8/6Rr/PB2K3/1PP2P2/7r w - - 8 38",
    score: -8.2,
  },
  {
    lichess: "https://lichess.org/8iC5Rt1E",
    fen: "1r3rk1/1bqpn1bp/pp2p1p1/5p2/P1n1P3/2NQB1P1/1P2NPBP/3R1RK1 w - - 0 17",
    score: 0.6,
  },
  {
    lichess: "https://lichess.org/WqWcCUOx",
    fen: "1r4k1/q2nppb1/2p1bn1p/2Pp2p1/3P4/2N1PN1P/2QBBPP1/1R4K1 w - - 1 19",
    score: 1.1,
  },
  {
    lichess: "https://lichess.org/euBeJ5vD",
    fen: "2r2rk1/p2q2pp/1p1Ppp2/2p1P3/5B2/6P1/PPQ2PKP/R7 w - - 0 20",
    score: -2,
  },
  {
    lichess: "https://lichess.org/Re1jf82R",
    fen: "r1bq1bk1/ppp2pp1/3p1n1p/8/2B1rB2/2P4P/PP2QPP1/RN2R1K1 w - - 0 13",
    score: -2.6,
  },
  {
    lichess: "https://lichess.org/DpQ8kk3C",
    fen: "3rk3/pp6/2n2pp1/4pn2/5B2/2PR1P1B/P1P2P2/2K5 w - e6 0 19",
    score: -0.6,
  },
  {
    lichess: "https://lichess.org/d3e4iS2a",
    fen: "r6r/ppp3kp/5p2/3pp3/7R/5b2/3K1PPP/7R w - - 0 30",
    score: -8.3,
  },
  {
    lichess: "https://lichess.org/WsTvmUHB",
    fen: "r1bq1rk1/1pb2ppp/p1n2n2/3p4/NP6/P3PN2/1B2BPPP/R2QK2R w KQ - 0 13",
    score: 1,
  },
  {
    lichess: "https://lichess.org/20lRiXKh",
    fen: "5k2/1B3pp1/1n1Pp2p/pp6/2p5/P3P3/1P3PPP/6K1 w - - 0 33",
    score: -0.5,
  },
  {
    lichess: "https://lichess.org/JUUSZEcm",
    fen: "4r3/1p3pk1/2p2bp1/1nPp4/3P3p/1N2P1P1/1BK2P1P/R7 w - - 0 31",
    score: 0.3,
  },
  {
    lichess: "https://lichess.org/Za5VlTov",
    fen: "2r5/1p3pk1/3p2p1/2rN4/p7/P1P2NKP/1P1R2P1/8 w - - 0 33",
    score: 6.6,
  },
  {
    lichess: "https://lichess.org/JDbiNzwC",
    fen: "1r3rk1/2qp1ppp/p3p3/1b2N1Pn/1p2PP2/3BQ3/PPP4P/2KR3R w - - 1 21",
    score: 3.5,
  },
  {
    lichess: "https://lichess.org/Ub9P67Co",
    fen: "rn1q1rk1/pb2bppp/1p2pn2/2p5/2pP4/1PN1PN2/PB2BPPP/R2Q1RK1 w - - 0 10",
    score: 0,
  },
  {
    lichess: "https://lichess.org/dw983vFI",
    fen: "3r1rk1/pbq1bppp/1pn1p2n/2p1P3/P7/2P2NPP/1P1NQPB1/R1B1R1K1 w - - 1 15",
    score: 0.8,
  },
  {
    lichess: "https://lichess.org/wKgzRZVq",
    fen: "2rq1rk1/2n1bppp/bn2p3/3pP3/3P3P/p4NP1/P4PN1/RBBQR1K1 w - - 0 22",
    score: 2.6,
  },
  {
    lichess: "https://lichess.org/fky3RbuV",
    fen: "r2q1rk1/pp2ppbp/2n3pn/3pP3/3P4/2NBBb1P/PP3PP1/R2QK2R w KQ - 0 11",
    score: 0.3,
  },
  {
    lichess: "https://lichess.org/outjY71n",
    fen: "r2q1rk1/1pp1bp1p/p3p1p1/n5Bn/P1pPP2P/2N2P2/1PR2P2/3QKBR1 w - - 1 14",
    score: -1.8,
  },
  {
    lichess: "https://lichess.org/ZCR5oXaL",
    fen: "2rqr1k1/1p3ppp/2bBp3/p1P5/3Qp3/P5P1/1P2PP1P/2R2RK1 w - - 0 19",
    score: 0,
  },
  {
    lichess: "https://lichess.org/um5XMuYt",
    fen: "r1bqkb1r/1p3ppp/n1p1p3/p7/B7/2P2N2/PP1P1PPP/R1BQK2R w KQkq - 1 11",
    score: 2,
  },
  {
    lichess: "https://lichess.org/4jVQllPn",
    fen: "8/1R6/6k1/r2n2p1/6P1/4KB1P/8/8 w - - 9 49",
    score: 0,
  },
  {
    lichess: "https://lichess.org/FozpA0Tf",
    fen: "r6r/ppp2pk1/3pb3/6q1/3PPnp1/1PP4P/P2Q1R1N/4RB1K w - - 0 27",
    score: 7.9,
  },
  {
    lichess: "https://lichess.org/Vw1cK1JF",
    fen: "2rr2k1/3n1pp1/pq2pn1p/1pb1N3/5B2/PQN3PP/1P2PPb1/2R2RK1 w - - 0 18",
    score: -2.2,
  },
  {
    lichess: "https://lichess.org/nsLwHnj3",
    fen: "r3r3/1bq1bkpp/p2p3P/1p2n1P1/3QPP2/2N5/PPP5/R1B1K2R w KQ - 1 17",
    score: 3.8,
  },
  {
    lichess: "https://lichess.org/E1FSYkzO",
    fen: "4r3/3b2k1/1n1p2p1/2p5/p1P3P1/1B3RK1/8/5N2 w - - 0 47",
    score: -7.2,
  },
  {
    lichess: "https://lichess.org/hYFAL4Um",
    fen: "r2q1rk1/3bppbp/3p1np1/1p1P4/PPn5/2N3PP/4NPB1/R1BQ1RK1 w - - 1 16",
    score: 0.4,
  },
  {
    lichess: "https://lichess.org/XzxdCakM",
    fen: "5rk1/2p4p/3p2p1/2PP2N1/8/3nn1PB/7P/2R4K w - - 1 30",
    score: 0,
  },
  {
    lichess: "https://lichess.org/AjYnmMs8",
    fen: "1rbqr1k1/1p3pbp/p2p2p1/2pPn3/P3PB2/2N2P2/1P2B1PP/R2Q1RK1 w - - 5 17",
    score: 0,
  },
  {
    lichess: "https://lichess.org/vePue53H",
    fen: "rn1qk1r1/pp3p2/4p2b/2ppPp1p/3P3P/2N2PPN/PPP2K2/R2Q3R w q - 0 14",
    score: -0.4,
  },
  {
    lichess: "https://lichess.org/kmYOfalQ",
    fen: "r7/pp1k1p2/8/2qp1nQ1/8/2P5/2P2PPP/3KR3 w - - 0 28",
    score: 7.1,
  },
  {
    lichess: "https://lichess.org/a5JuoAAO",
    fen: "r1bqkb1r/1p2pp1p/p5p1/3Pn3/4N3/2P5/P4PPP/1RBQKB1R w Kkq - 0 13",
    score: 1.6,
  },
  {
    lichess: "https://lichess.org/bD2oaFfa",
    fen: "rn3rk1/pp3ppp/2pbp3/q7/2BPn3/8/PPP1QPPP/R1B2RK1 w - - 0 12",
    score: 0.6,
  },
  {
    lichess: "https://lichess.org/DMpYdiKY",
    fen: "r1bqk2r/pp2ppbp/2np1n2/7Q/3P4/2N1P3/PP3PP1/R1B1KBNR w KQkq - 1 9",
    score: 0.9,
  },
  {
    lichess: "https://lichess.org/AkLupvXO",
    fen: "1rb2rk1/pp3p2/1n1Np1p1/3pP1qp/8/3B4/PP2QPPP/R4RK1 w - - 4 18",
    score: 1.4,
  },
  {
    lichess: "https://lichess.org/X5QUFB0F",
    fen: "r3r1k1/pb1nqpbp/1pp1pnp1/8/2PPp3/1PN2N1P/PBQ1BPP1/3R1RK1 w - - 0 14",
    score: 0,
  },
  {
    lichess: "https://lichess.org/tSk8JZFB",
    fen: "1r2rbk1/pq3pp1/7p/1p6/2p1N3/2P2QP1/P4P1P/3RR1K1 w - - 0 22",
    score: -3.5,
  },
  {
    lichess: "https://lichess.org/xBTiEpJD",
    fen: "r2br1k1/pp3ppp/2bBp3/2Pn4/1P6/P4Q2/5PPP/3RR1K1 w - - 5 22",
    score: 5.8,
  },
  {
    lichess: "https://lichess.org/Q0NeIBUA",
    fen: "r1r2n2/2n3qk/2p1ppb1/3p3p/1Q1P3P/1P2RN1B/P2N1P2/R6K w - - 1 26",
    score: 0.9,
  },
  {
    lichess: "https://lichess.org/LFrW2THL",
    fen: "3r4/pp6/5pk1/2npp1p1/8/2P1PP2/PP2K3/3R2R1 w - - 1 27",
    score: 2.2,
  },
  {
    lichess: "https://lichess.org/Bv4yCt04",
    fen: "r5k1/p1qb1pbp/2r2np1/2N1p3/4P3/1PN1B2P/1PPQ2P1/R3K2R w KQ - 3 18",
    score: 4.6,
  },
  {
    lichess: "https://lichess.org/NQNrHSd5",
    fen: "r4r2/4ppk1/2pqbnp1/1p5p/p2P1N1P/1P1B1P2/P1PQ2P1/1K1R3R w - - 2 18",
    score: 0,
  },
  {
    lichess: "https://lichess.org/zRmYp337",
    fen: "r5k1/pp4p1/4br1p/3p4/4pP2/2P5/P1P1B1PP/3R1RK1 w - - 0 20",
    score: -0.1,
  },
  {
    lichess: "https://lichess.org/QaXVIiNd",
    fen: "r3kb1r/pp1qpppp/2n2n2/3p4/3P4/2N2N2/PPP2PPP/R1BQK2R w KQkq - 2 8",
    score: 0,
  },
  {
    lichess: "https://lichess.org/KKjCGC1a",
    fen: "r2bqrk1/6pb/2p1pn1p/1p1p4/pP1P1NP1/2P1P1Q1/P2NB2P/R4RK1 w - - 0 20",
    score: -0.6,
  },
  {
    lichess: "https://lichess.org/HdR2ndcd",
    fen: "8/6k1/2B3p1/r6p/br6/5R1P/6P1/R6K w - - 0 30",
    score: 2,
  },
  {
    lichess: "https://lichess.org/HeBMy0cc",
    fen: "r2q1rk1/pp3pp1/2n1bn1p/2b5/3p1B2/2N2NP1/PP2PPBP/R2Q1RK1 w - - 0 12",
    score: -1,
  },
  {
    lichess: "https://lichess.org/rpWMwqNd",
    fen: "r4rk1/pp2qpp1/2n2nbp/3p4/5B2/2N3PP/PP2PPB1/R2Q1RK1 w - - 0 15",
    score: 0.4,
  },
  {
    lichess: "https://lichess.org/EzDTYZDU",
    fen: "rr6/2k1bppp/p1Pp1n2/3Pp3/1P6/5B2/5PPP/R1B1R1K1 w - - 1 20",
    score: 2.3,
  },
  {
    lichess: "https://lichess.org/AI3IcDDR",
    fen: "3k4/1b3ppp/p3pn2/1pb5/5B2/1BP2P2/PP2N1PP/1K6 w - - 0 21",
    score: -0.4,
  },
  {
    lichess: "https://lichess.org/kPEoIXaW",
    fen: "r2q2k1/pp3p1p/5n2/3Pr1p1/2P1bp2/3QBB1P/PP4P1/R4R1K w - - 0 18",
    score: 4.4,
  },
  {
    lichess: "https://lichess.org/BuBAU1v0",
    fen: "r1b1r1k1/pp1n2p1/1q1bpn1p/2p1N3/3P1P2/2PB4/PP4PP/R1BQR1K1 w - - 1 14",
    score: -3.1,
  },
  {
    lichess: "https://lichess.org/vnCLyAwM",
    fen: "5r2/ppk5/1b2R3/3p1N2/6P1/2P2P2/PP4P1/5K2 w - - 2 37",
    score: 8.8,
  },
  {
    lichess: "https://lichess.org/bdhhvJmo",
    fen: "3brn2/6k1/1p1q2pp/2pPpp2/2P5/1P4P1/2Q2PBP/3RR1K1 w - - 0 29",
    score: 3.4,
  },
  {
    lichess: "https://lichess.org/WMwQ9XuN",
    fen: "3r2k1/5pp1/7p/2q5/bp2BQ2/6P1/P1p2PKP/2R5 w - - 1 42",
    score: -6.4,
  },
  {
    lichess: "https://lichess.org/ZEYPk4aK",
    fen: "3rr3/pp4k1/2n2qp1/2p3Np/3p1P2/P2PnQ1B/1PP2R2/R6K w - - 5 24",
    score: 0,
  },
  {
    lichess: "https://lichess.org/R9YCIUxW",
    fen: "8/1pp1k3/1p2pp2/8/rPP1Pp1p/4rP1P/P1R2KP1/2R5 w - - 1 32",
    score: -1.1,
  },
  {
    lichess: "https://lichess.org/eZBXdjb4",
    fen: "r1bq1rk1/pp4p1/1n1b3p/P2p4/3P4/1QPBpN1P/5PP1/R4RK1 w - - 0 17",
    score: 0.3,
  },
  {
    lichess: "https://lichess.org/vX2RsCLa",
    fen: "r7/1pkbn1p1/2p2p2/8/p2BP2p/P4P2/BP4PP/1K5R w - - 1 25",
    score: 1.3,
  },
  {
    lichess: "https://lichess.org/efWqRZff",
    fen: "2rqk2r/1p1b1p1p/p1n1p1p1/3pP3/3P1P1b/2PBN3/R5PP/2BQ1RK1 w k - 0 17",
    score: 0,
  },
  {
    lichess: "https://lichess.org/Z6vmqS69",
    fen: "5rk1/1p3q1p/p5pQ/8/2R5/2B5/P1P3pP/6K1 w - - 0 32",
    score: 5.8,
  },
  {
    lichess: "https://lichess.org/vbcBqdI7",
    fen: "1r1q1rk1/1p1bbppp/p1p1pn2/nP1p4/P1P5/2NPP1P1/4NPBP/1RBQ1RK1 w - - 0 13",
    score: 0.5,
  },
  {
    lichess: "https://lichess.org/dhY3T2xT",
    fen: "r2q1rk1/pp1b1pp1/1b3n1p/3p4/8/1N3NP1/PP2PPBP/R2Q1RK1 w - - 2 14",
    score: -0.3,
  },
  {
    lichess: "https://lichess.org/spYGj2HC",
    fen: "2b1r1k1/2q2pbp/pr1p1np1/2nP4/2p1PB2/2N2N1P/RPB2PP1/3QR1K1 w - - 2 18",
    score: 3,
  },
  {
    lichess: "https://lichess.org/hbxit4oE",
    fen: "5k2/p3Npbp/3p2p1/4n3/8/5PP1/Pr1BP1KP/3R4 w - - 1 24",
    score: -0.9,
  },
  {
    lichess: "https://lichess.org/sPrR8eIp",
    fen: "2krr3/5ppp/2p5/1p1n4/3P4/2P1BP2/2K2P1P/1R2R3 w - - 0 20",
    score: -1,
  },
  {
    lichess: "https://lichess.org/uXtUTjMu",
    fen: "2kr4/ppp2pp1/2nb1np1/3q4/4p1Pr/2P4P/PP1P1PK1/RNBQ1RN1 w - - 4 15",
    score: -9.1,
  },
  {
    lichess: "https://lichess.org/0S85xzZS",
    fen: "r1bq1rk1/p4ppp/1p2p3/1Rn1n3/2Pp4/P2P2P1/P4PBP/2BQ1RK1 w - - 0 14",
    score: -1.1,
  },
  {
    lichess: "https://lichess.org/5fKJJWSK",
    fen: "1r4k1/2R4p/5p2/p1B5/2n1KP2/8/7P/8 w - - 0 36",
    score: 0.2,
  },
  {
    lichess: "https://lichess.org/UCfq1nED",
    fen: "rnb1k1B1/ppp1b1r1/7p/4Pp2/3P4/2P5/PP4pP/RNB1K1R1 w Q - 1 16",
    score: 2.9,
  },
  {
    lichess: "https://lichess.org/76m5XPSE",
    fen: "2kr3r/pp1bb3/1qn1p3/3pPnpp/2pP4/2P2N2/PPQNBBPP/RR4K1 w - g6 0 16",
    score: 0.1,
  },
  {
    lichess: "https://lichess.org/qyxsXSBe",
    fen: "r1b2rk1/1pqpb1pp/p3p3/3nPp2/3NNP2/8/PP4PP/R1BQR2K w - f6 0 15",
    score: -2.2,
  },
  {
    lichess: "https://lichess.org/onUEJ501",
    fen: "r3r1k1/2p3b1/p2q3p/1p1p2p1/3P1p2/1PPQ1P2/1P3BPP/R4RK1 w - - 2 23",
    score: 0.8,
  },
  {
    lichess: "https://lichess.org/HDWq4cjb",
    fen: "6k1/3n1pp1/pp2p2p/8/1P1bP3/2B2PP1/P5KP/8 w - - 0 34",
    score: 0,
  },
  {
    lichess: "https://lichess.org/6lCJKtgs",
    fen: "2kr2r1/pp3p2/2pbqn1p/4pN2/PP2Pp2/2P4P/2B1QPPK/R3R3 w - - 4 21",
    score: 3,
  },
  {
    lichess: "https://lichess.org/NbEcn1xi",
    fen: "r2q1rk1/5pp1/5n1p/p2pp3/8/P4P2/1P1Q1BPP/R3Kb1R w KQ - 0 18",
    score: -5.7,
  },
  {
    lichess: "https://lichess.org/wByNCu0h",
    fen: "rn1q1rk1/pbppbppp/4pn2/8/P2P4/2P2NP1/4PPBP/RNBQ1RK1 w - - 1 9",
    score: 0.1,
  },
  {
    lichess: "https://lichess.org/V36jFY3W",
    fen: "2krr3/p1p1b1p1/1p1p1p1p/3Rn3/2P5/P3P1B1/1PK1BPPP/3R4 w - - 0 21",
    score: 2,
  },
  {
    lichess: "https://lichess.org/yy0YwZXF",
    fen: "r4rk1/1b1qbppp/4pn2/p7/PpP2P2/3B4/1BPPQ1PP/R2N1RK1 w - - 0 17",
    score: 0,
  },
  {
    lichess: "https://lichess.org/PtRRQlCd",
    fen: "r1b2rk1/pp3ppp/2n5/7Q/1B2p3/1N1B4/PPP2PqP/R3K2R w KQ - 0 13",
    score: 0.4,
  },
  {
    lichess: "https://lichess.org/AO4DeJE5",
    fen: "3r3k/bq4pp/p3pp2/1p6/1P4R1/PB2P3/1B3PPP/5RK1 w - - 0 23",
    score: -0.8,
  },
  {
    lichess: "https://lichess.org/1seWLxL0",
    fen: "r6r/3k4/3p1pp1/P2p1n2/1P1P3p/3K1P1B/2PB1P2/4R3 w - - 2 33",
    score: 3,
  },
  {
    lichess: "https://lichess.org/9KP8vHK3",
    fen: "3r4/1p1brppp/p2k1n2/3p4/3N4/2P2P2/PP2N1PP/R3R1K1 w - - 4 21",
    score: 1.3,
  },
  {
    lichess: "https://lichess.org/Mtpl1cTy",
    fen: "r3k2r/pp1qb2p/1nn1p1pB/3pP3/6Q1/1P4PP/P4PB1/RN3RK1 w kq - 4 17",
    score: 1.7,
  },
  {
    lichess: "https://lichess.org/7DzxSsvI",
    fen: "8/pp1k4/2p5/6N1/3P1p2/2P5/PP3P2/2K5 w - - 1 33",
    score: 8.9,
  },
  {
    lichess: "https://lichess.org/lKxfdgDu",
    fen: "r3kb1r/p2nnppp/2p1p3/1p1pP3/1B1Pb3/5N2/PQ2BPPP/4K2R w Kkq - 2 14",
    score: 1.6,
  },
  {
    lichess: "https://lichess.org/BKbnjeNf",
    fen: "r2r2k1/p3ppbp/1p4p1/1PpP4/1qP1PP2/3QB3/2R3PP/5RK1 w - - 1 23",
    score: 3.3,
  },
  {
    lichess: "https://lichess.org/PWlqYWk3",
    fen: "r5k1/8/p3R1pp/2pP4/P1pb1p2/2N4P/1PP4K/R1B2r2 w - - 0 26",
    score: 3.9,
  },
  {
    lichess: "https://lichess.org/u2KkUNak",
    fen: "3r3R/pp4k1/1bp5/4p3/4Pp2/8/PPP4P/2K1R3 w - - 0 30",
    score: 7.2,
  },
  {
    lichess: "https://lichess.org/DWUF9acb",
    fen: "rnbq1rk1/ppp2ppp/4pn2/3p4/2PP4/P1Q5/1P2PPPP/R1B1KBNR w KQ - 1 7",
    score: 0.2,
  },
  {
    lichess: "https://lichess.org/q29kxDxM",
    fen: "rn1qkb1r/1b3ppp/p3pn2/1pp5/3P4/1BN1PN2/PP3PPP/R1BQ1RK1 w kq - 2 9",
    score: 0.5,
  },
  {
    lichess: "https://lichess.org/tiXqF3jt",
    fen: "r1b2rk1/pppnRqpp/2n5/8/2Bp4/5N2/PP1N1PPP/R2Q2K1 w - - 3 14",
    score: 11.9,
  },
  {
    lichess: "https://lichess.org/FRvdN5Tz",
    fen: "3r4/7p/P3p1p1/1k3p2/1p1BnPPP/1P2K3/2P5/6R1 w - - 1 45",
    score: 6.3,
  },
  {
    lichess: "https://lichess.org/opL2Xw8u",
    fen: "2k5/pp1b3p/n1p1p3/4Bp2/2P1n3/5N2/PP2Br1P/2K2Q2 w - - 5 22",
    score: 8.5,
  },
  {
    lichess: "https://lichess.org/eD9FqRbm",
    fen: "2kr1b1r/ppp2ppp/2n2n2/7q/3PN1b1/4PNB1/PP3PPP/R2QKB1R w KQ - 1 10",
    score: 2.2,
  },
  {
    lichess: "https://lichess.org/HAgStcsM",
    fen: "r2r2k1/1bq2p1p/p5p1/1pp2p2/3bP3/P1N5/BPP2QPP/3R1R1K w - - 0 21",
    score: -7.5,
  },
  {
    lichess: "https://lichess.org/GFAinFKk",
    fen: "2brrnk1/1pq2pb1/2pp3p/p1n2Pp1/2PNP1P1/2N3BP/PPQ3BK/3RR3 w - - 0 21",
    score: 1.3,
  },
  {
    lichess: "https://lichess.org/XxOWTF5z",
    fen: "2r3k1/5ppp/p1q1pn2/1p1b4/1Q1P4/5NP1/PP2PPBP/R5K1 w - - 1 22",
    score: 1.4,
  },
  {
    lichess: "https://lichess.org/wCzj72bm",
    fen: "r1bqk2r/pppp1ppp/2n2n2/1B2p3/1b2P3/2N2N2/PPPP1PPP/R1BQK2R w KQkq - 6 5",
    score: 0.2,
  },
  {
    lichess: "https://lichess.org/SANseoQY",
    fen: "6k1/6p1/1p2p2p/p1b5/5P2/P2rP1P1/1P2K1P1/5B2 w - - 0 26",
    score: 0.4,
  },
  {
    lichess: "https://lichess.org/IpVQzB72",
    fen: "8/pp5r/2p2p1P/7R/1P4k1/2P5/P4K2/8 w - - 1 41",
    score: -0.7,
  },
  {
    lichess: "https://lichess.org/zV5NDPKx",
    fen: "r5k1/p2p1pbp/4p1p1/1p6/b3P3/4B3/1P3PPP/R3R1K1 w - - 0 27",
    score: 0,
  },
  {
    lichess: "https://lichess.org/607I1Lev",
    fen: "r3kb1r/1p1b1ppp/p1n5/3pPp2/3q4/2NB4/PP4PP/R1BQ1R1K w kq - 0 14",
    score: 0,
  },
  {
    lichess: "https://lichess.org/CZEMpV5d",
    fen: "r3k1nr/ppqn1pp1/2p1p2p/7P/3PNb2/3Q1N2/PPPB1PP1/2KR3R w kq - 6 14",
    score: 1.9,
  },
  {
    lichess: "https://lichess.org/cMUqc4A2",
    fen: "r1bq1rk1/1p1np1bp/p2p2P1/3N2p1/3BP3/8/PPP1B2P/R2Q1RK1 w - - 0 16",
    score: 5.9,
  },
  {
    lichess: "https://lichess.org/2V6Qdm6y",
    fen: "4r3/1p3pkp/p2p2p1/2p1q1b1/P1P5/2NP2P1/1PQ3K1/5R2 w - - 2 31",
    score: -5.2,
  },
  {
    lichess: "https://lichess.org/CvCIYJAI",
    fen: "8/3r2k1/p4p2/2pP1Kp1/PrP2pP1/8/5P2/2R1R3 w - - 0 36",
    score: 7,
  },
  {
    lichess: "https://lichess.org/wTNCauff",
    fen: "1r1q1r2/1p4k1/p2p1pp1/P2bn3/3pP2Q/1B5P/1PP2RP1/5R1K w - - 0 25",
    score: 0.6,
  },
  {
    lichess: "https://lichess.org/HiD4g7bg",
    fen: "B7/4k1pp/4pp2/3p4/2pPnP2/5N2/4KPPP/8 w - - 0 23",
    score: 4.3,
  },
  {
    lichess: "https://lichess.org/Yxt4DMm6",
    fen: "r1b1qrk1/1ppn2b1/n2p4/3Pp1pp/1pP1Pp2/P1N2P2/3NBBPP/1R1Q1RK1 w - - 0 17",
    score: 1.6,
  },
  {
    lichess: "https://lichess.org/BHXhggCT",
    fen: "1rbq1rk1/3n2bp/p2p2p1/3Npp2/2P1Pn2/2N1BP2/P2QB1PP/3R1RK1 w - - 2 17",
    score: 3.5,
  },
  {
    lichess: "https://lichess.org/q6hYE39r",
    fen: "2r2rk1/2q1bppp/p2pp3/6P1/1pnB1P1P/8/PPP1N1Q1/1K1R3R w - - 3 21",
    score: -2.2,
  },
  {
    lichess: "https://lichess.org/5CCCEYJz",
    fen: "r4rk1/1pnqppb1/4b1p1/1pP3Bp/p2P3P/P2B1P2/2Q1N1P1/3R1RK1 w - - 2 31",
    score: -3.2,
  },
  {
    lichess: "https://lichess.org/8DkzdPSN",
    fen: "2r4k/pb1q3p/1p4pB/3npp1P/2Qb4/5BN1/PP3PP1/4R1K1 w - - 1 24",
    score: -1.1,
  },
  {
    lichess: "https://lichess.org/QUT3Hewn",
    fen: "2r2rk1/p6p/1p2p1p1/4B3/3PP3/1Pn5/P2RK2P/6R1 w - - 3 30",
    score: 1,
  },
  {
    lichess: "https://lichess.org/gRro5BYS",
    fen: "2r5/5k1p/p4pp1/4p3/2N1P3/1P2B3/P2K1PPP/8 w - - 2 29",
    score: 12.1,
  },
  {
    lichess: "https://lichess.org/sYWIQ7Zo",
    fen: "r1b4r/p1qp1k1p/2p1p1n1/8/1bP2PN1/3B4/PP4PP/R1BQK2R w KQ - 5 15",
    score: 3.2,
  },
  {
    lichess: "https://lichess.org/gW2FVmuo",
    fen: "4rrk1/1p3p1p/p4pb1/P1qPb3/4N3/3B3P/1P3PP1/R3R1K1 w - - 0 24",
    score: 0.1,
  },
  {
    lichess: "https://lichess.org/N4i2wkSD",
    fen: "8/3bpk1p/1R1n1pp1/2pP4/2P3P1/1N5P/1r3PK1/5B2 w - - 5 39",
    score: -3.4,
  },
  {
    lichess: "https://lichess.org/ABm2OzrC",
    fen: "r4rk1/pp3ppp/2p1pn2/8/2nP3N/2NbP1PP/Pb3PB1/R2RB1K1 w - - 9 21",
    score: -5.3,
  },
  {
    lichess: "https://lichess.org/AT6PvgIp",
    fen: "r3k2r/1p2b2p/p1qp2p1/4p2n/1P6/1Q2NPP1/PBP4P/R4R1K w kq - 1 21",
    score: 2.9,
  },
  {
    lichess: "https://lichess.org/q3D2ZOA9",
    fen: "r4rk1/5ppp/2p5/3p1q2/2pb4/2P2N2/3Q1PPP/RR2K3 w - - 0 25",
    score: 3.4,
  },
  {
    lichess: "https://lichess.org/Cg47nXBd",
    fen: "2rr2k1/1q2bpp1/3ppnn1/1p5p/4P3/1PN1QN1P/PB3PP1/2RR2K1 w - - 0 21",
    score: -0.3,
  },
  {
    lichess: "https://lichess.org/kc4594Kl",
    fen: "2k5/ppp3p1/2n3p1/3r4/3P3b/1QP1Pq2/PP5P/R2K2R1 w - - 3 25",
    score: -15.9,
  },
  {
    lichess: "https://lichess.org/qk7qtgGm",
    fen: "5rk1/pp3ppp/8/q2PQ3/8/8/6PP/5R1K w - - 0 27",
    score: -3,
  },
  {
    lichess: "https://lichess.org/FlXb4LuD",
    fen: "1r1r1k2/2R3pp/pN1b1p2/1p1p4/1P1B2b1/P3P1P1/3R1P1P/6K1 w - - 6 24",
    score: 3.2,
  },
  {
    lichess: "https://lichess.org/VlRZvBO0",
    fen: "r3rnk1/1p2bqpp/p1p1b3/P2p1p1P/3PnN2/2PB1NP1/1PQB1P2/R3R1K1 w - - 0 27",
    score: 2.2,
  },
  {
    lichess: "https://lichess.org/NhvzjzzD",
    fen: "r3rb1k/2pq3p/n2n1pp1/N2Pp3/Pp2P3/1P1QBNP1/5P1P/2RR2K1 w - - 9 33",
    score: 5.6,
  },
  {
    lichess: "https://lichess.org/fS3lGwur",
    fen: "r4qk1/1p5p/p2p4/Pbp1n1p1/5B2/1P4P1/2P2KP1/R2QR3 w - g6 0 25",
    score: 0,
  },
  {
    lichess: "https://lichess.org/xJ9txp1a",
    fen: "r1q2rk1/1bp1bpp1/pp1p1n1p/8/P1Q1P3/1BN1B2P/1PP2PP1/3RR1K1 w - - 2 16",
    score: 1.9,
  },
  {
    lichess: "https://lichess.org/sVRuyeTI",
    fen: "1R6/2k5/2Nn2pp/1R6/4K3/8/2r4P/4B3 w - - 1 37",
    score: 59,
  },
  {
    lichess: "https://lichess.org/WiafaZJH",
    fen: "r3k2r/pp1b1pp1/1q2p3/3pPn1p/1b1P1Q2/2N2N2/PP1B1PPP/R3K2R w KQkq - 5 14",
    score: -0.8,
  },
  {
    lichess: "https://lichess.org/XbI0OkP1",
    fen: "2rq1rk1/p4pbp/2p2np1/3p1b2/3P4/2N1PN2/P3BPPP/2RQ1RK1 w - - 4 16",
    score: 0.3,
  },
  {
    lichess: "https://lichess.org/3GgWwQkP",
    fen: "3rrbk1/1bqn1pp1/p2pp2p/2p5/P1NPn3/2P1PN1P/5PPB/R1RQ1BK1 w - - 0 19",
    score: 1,
  },
  {
    lichess: "https://lichess.org/B0iwatMH",
    fen: "r4rk1/2q2pbp/p2p1np1/1p1Pp1B1/2P5/1P6/P1N1QPPP/R4RK1 w - b6 0 17",
    score: 0.8,
  },
  {
    lichess: "https://lichess.org/zpiVXe4j",
    fen: "r1b1r1k1/ppq2ppp/2nbpn2/3p4/3P4/2PB1NB1/PP1NQPPP/R3K2R w KQ - 5 11",
    score: 1.2,
  },
  {
    lichess: "https://lichess.org/Cxyrl5Bo",
    fen: "7r/p1p1kp1p/1p2n3/2p1P1p1/2P5/2B4P/P1PR1PP1/4K3 w - g6 0 23",
    score: -0.4,
  },
  {
    lichess: "https://lichess.org/WPoOwZJ6",
    fen: "2r3k1/5pp1/1q2p2p/3nP3/Pp2Q3/1P5P/5PP1/R2R2K1 w - - 0 32",
    score: 7.3,
  },
  {
    lichess: "https://lichess.org/Rv6nWd0H",
    fen: "5rr1/p3k3/1p2Pb2/2ppBP2/1P1P3p/7B/P3KR2/8 w - - 0 36",
    score: -3,
  },
  {
    lichess: "https://lichess.org/QfLXZ3eq",
    fen: "2r4r/1pBbnkpp/p1n5/3p1P2/8/3B4/PP4PP/4RRK1 w - - 3 25",
    score: -6.4,
  },
  {
    lichess: "https://lichess.org/QKj4agJX",
    fen: "6k1/2r2p1p/1p3rp1/8/1P2Bn2/P2R1P2/6PP/3R2K1 w - - 3 33",
    score: 2,
  },
  {
    lichess: "https://lichess.org/NhR9IdMU",
    fen: "2kr3r/2q1ppb1/pnbp1np1/1p6/3BP1pP/P1N2P2/1PPQ1N2/2KR1B1R w - - 0 17",
    score: 0.3,
  },
  {
    lichess: "https://lichess.org/gWQmO1wH",
    fen: "r1br2k1/4n1pp/pq3p2/1Pb1pP2/P3P3/1n3NP1/1B2Q1BP/2R1RN1K w - - 1 22",
    score: 4,
  },
  {
    lichess: "https://lichess.org/9mGWXGCi",
    fen: "2kr4/ppqb1pr1/3ppN1p/3Pn3/2P5/P2BP3/2Q2PPP/R4RK1 w - - 1 19",
    score: 3.9,
  },
  {
    lichess: "https://lichess.org/DKEBMoXZ",
    fen: "6k1/pp6/1nn3r1/3b1pNp/5B2/P6B/1P2PK1P/3R4 w - - 6 35",
    score: 3.5,
  },
  {
    lichess: "https://lichess.org/4ThRW2KJ",
    fen: "rnb2k1r/2q1p1bp/p3Pnp1/1ppPNp2/8/2N4P/PPP1B1P1/R1BQK2R w KQ - 2 14",
    score: 7.4,
  },
  {
    lichess: "https://lichess.org/VzHvqdd1",
    fen: "r5k1/1p1rb2p/2p1b3/2PpBpp1/1P2n3/2N3P1/4PPBP/2RR2K1 w - - 1 27",
    score: 0,
  },
  {
    lichess: "https://lichess.org/vbgNSvuP",
    fen: "1brq1r1k/5p1p/p3b1p1/1p1BP1Pn/2pP4/P1N1P3/1P4QP/R1B2RK1 w - b6 0 19",
    score: 5.3,
  },
  {
    lichess: "https://lichess.org/UIA5nKQW",
    fen: "r4r1k/pp1b2pp/3P1n2/2P1pq2/2B1pp2/1PB5/P4PPP/R2QK2R w KQ - 3 18",
    score: -1.9,
  },
  {
    lichess: "https://lichess.org/9BlQb8Io",
    fen: "1q3rk1/r2nppbp/p2p2p1/2p5/P4B2/2P1P2P/QPbNBPP1/3RR1K1 w - - 4 18",
    score: 0.3,
  },
  {
    lichess: "https://lichess.org/PSQejBJW",
    fen: "r5r1/p4p1k/1p2p2p/2p4P/2P1pP2/1P1p1P2/P2P1K2/R5R1 w - - 0 24",
    score: 1.6,
  },
  {
    lichess: "https://lichess.org/TyeeNXCi",
    fen: "q4rk1/5ppp/4b3/1p1pP3/8/1nb1QN2/3B1PPP/3R2K1 w - - 0 26",
    score: -2.1,
  },
  {
    lichess: "https://lichess.org/PnZkOgf2",
    fen: "7r/p1p1kp2/1p2bN2/2p1P3/5R1p/1P2B3/P1P3PP/3r2K1 w - - 2 25",
    score: -6.3,
  },
  {
    lichess: "https://lichess.org/gyZzcVFr",
    fen: "8/7R/5k2/4Np1p/3KbP2/P6r/8/8 w - - 4 46",
    score: 0,
  },
  {
    lichess: "https://lichess.org/OyYjpg89",
    fen: "r7/3k1p1p/3bpp1P/8/2KP4/p4P2/3B1P2/6R1 w - - 0 36",
    score: -5.7,
  },
  {
    lichess: "https://lichess.org/hpnYPlPB",
    fen: "r1bqkb1r/pp2pppp/2n5/3n4/8/2N1Q3/PPP2PPP/R1B1KBNR w KQkq - 0 7",
    score: 0,
  },
  {
    lichess: "https://lichess.org/uKPSANJa",
    fen: "4bk1r/pQ3pb1/4p3/6p1/3p2P1/qPpP3P/P1PB4/1K1R1R2 w - - 0 28",
    score: 4.5,
  },
  {
    lichess: "https://lichess.org/1M9Crf6G",
    fen: "4r3/3b1k1p/2pb1p2/3p2r1/8/2P5/PPBP1PPP/R1B2R1K w - - 4 19",
    score: 6.3,
  },
  {
    lichess: "https://lichess.org/PakRArQi",
    fen: "r1k4r/ppp5/2nqb2p/3Nn3/2BbP2Q/6P1/PPP3KP/3R1R2 w - - 7 18",
    score: -8.1,
  },
  {
    lichess: "https://lichess.org/DJkSP4uM",
    fen: "4r3/1b3pk1/4rbpp/1pqp4/pNp1n3/P1P1PB1P/1PQ2PPB/3R1RK1 w - - 9 31",
    score: 0.7,
  },
  {
    lichess: "https://lichess.org/JIcLZ2XD",
    fen: "2rq1rk1/1p1nbppp/p2ppn2/8/2PP4/1PNQBN1P/P4PP1/2RR2K1 w - - 2 16",
    score: 1.5,
  },
  {
    lichess: "https://lichess.org/Q01AzziH",
    fen: "8/p4p2/1p2p2p/1P4k1/P1R1B3/6K1/r5P1/8 w - - 2 34",
    score: 3.6,
  },
  {
    lichess: "https://lichess.org/ExlQeNMm",
    fen: "2rr4/pp2k3/4b2p/2b1N1p1/3n1p2/3B2B1/PPP2PPP/R3R1K1 w - - 0 19",
    score: -2.4,
  },
  {
    lichess: "https://lichess.org/ia6MPRem",
    fen: "r1r3k1/p4pbp/3B2p1/q2p4/b2Pp3/4P1P1/P4PBP/1R1Q1RK1 w - - 1 20",
    score: -0.6,
  },
  {
    lichess: "https://lichess.org/rlo8ji8x",
    fen: "6k1/p1r3p1/2N2q1p/3P4/4Q3/8/PK4RP/8 w - - 1 33",
    score: 7.8,
  },
  {
    lichess: "https://lichess.org/gNIb9CBe",
    fen: "r4r1k/2p2qp1/p2p3p/1p2p1Nn/4P3/1P1Q4/1PPB1Pb1/R1R4K w - - 0 21",
    score: -12,
  },
  {
    lichess: "https://lichess.org/kjb1hry7",
    fen: "N2r2k1/pp3ppp/2n5/3p4/8/BQP1nPPq/P3P2P/3R1RK1 w - - 0 19",
    score: 0,
  },
  {
    lichess: "https://lichess.org/Zsnow0Zh",
    fen: "3q2k1/r3rpp1/2p2n1p/pp1p1P2/5Q2/1PN4P/1PP1RPP1/4R1K1 w - - 0 23",
    score: -0.8,
  },
  {
    lichess: "https://lichess.org/fdxyRj9f",
    fen: "r3k2r/1bpq1p2/pp2p1p1/n2pPnPp/P2P4/NP1B1N2/2P1QPP1/R4RK1 w kq - 2 17",
    score: 1.6,
  },
  {
    lichess: "https://lichess.org/tFQ2CwcP",
    fen: "r2q1rk1/ppp2ppp/2n5/3b4/1bP5/3PBN2/PP2QPPP/R3KB1R w KQ - 1 12",
    score: -0.3,
  },
  {
    lichess: "https://lichess.org/3zv60Q7D",
    fen: "r1bq1rk1/pp2b1pp/4p3/2ppn3/2PNPpn1/1P1P2P1/PB1NQPBP/R4RK1 w - - 0 13",
    score: 0.6,
  },
  {
    lichess: "https://lichess.org/OXJ48xb6",
    fen: "n5k1/rB6/1pPp1b2/3Pp2p/1P2Pp2/5P2/5BKN/8 w - - 7 39",
    score: 2.1,
  },
  {
    lichess: "https://lichess.org/21PjTkQl",
    fen: "r1r3k1/1pq1bppp/3p4/3Qp1Pn/p3P2P/1N2BP2/PPP4R/1K1R4 w - - 0 21",
    score: 0.6,
  },
  {
    lichess: "https://lichess.org/0QcYfXko",
    fen: "2rq1rk1/pp1bp1bp/1n1p2p1/4n3/3NP3/1PN1BP2/P1PQB1P1/R3K2R w KQ - 0 15",
    score: 1.4,
  },
  {
    lichess: "https://lichess.org/nKjlezIy",
    fen: "7k/pr3p1p/6p1/n2P4/2p5/1P3P2/P1K3PP/7R w - - 0 25",
    score: -6.1,
  },
  {
    lichess: "https://lichess.org/05JNzM1b",
    fen: "r4rk1/pp2ppbp/1qnpbnp1/2p5/3P4/2P1PNBP/PP1NBPP1/R2QK2R w KQ - 5 10",
    score: -0.8,
  },
  {
    lichess: "https://lichess.org/BMSfPkIn",
    fen: "2r2rk1/p1q1p1b1/3p1pp1/6P1/1P1BPP2/1bN5/1P1Q4/1K4RR w - - 1 23",
    score: 5.6,
  },
  {
    lichess: "https://lichess.org/wAjnVTzk",
    fen: "2kr1b1r/pp3ppb/2n4p/3NPP1B/3P3q/8/PP5P/R1BQ1RK1 w - - 1 17",
    score: 1,
  },
  {
    lichess: "https://lichess.org/F3pxxFlC",
    fen: "1r1qrbk1/1b3ppp/1p6/p1p2NnP/2PpP3/PP4P1/2Q2PB1/2BRR1K1 w - - 1 25",
    score: 1.4,
  },
  {
    lichess: "https://lichess.org/funSx71B",
    fen: "r1b1k2r/qp2bppp/p3pn2/n7/N2N1B2/1B6/PPP3PP/R2Q1R1K w kq - 4 15",
    score: 1.4,
  },
  {
    lichess: "https://lichess.org/nKPwW778",
    fen: "6k1/5pp1/7p/p2pq3/Pp2n1P1/1PrQ1R2/2P3KP/5R2 w - - 2 30",
    score: -0.4,
  },
  {
    lichess: "https://lichess.org/thp4Ov1j",
    fen: "8/r4p2/2p3p1/2kp3p/Pr5P/R1N3P1/3KBP2/8 w - - 10 45",
    score: 1.5,
  },
  {
    lichess: "https://lichess.org/sWCDaHAg",
    fen: "3rr1k1/p4ppp/1p6/2p5/P1q5/2N1B2P/1P1R1QPK/8 w - - 3 26",
    score: -1,
  },
  {
    lichess: "https://lichess.org/JatPdR0T",
    fen: "2q2rk1/1b2ppb1/1Br3pp/p2nP3/2N2P2/7P/1PPN1QP1/R3R1K1 w - - 1 26",
    score: 0.4,
  },
  {
    lichess: "https://lichess.org/ditGpfEC",
    fen: "r1b2rk1/3nbppp/1qn5/p2pPp2/3p4/2PNBN2/P2QB1PP/R4RK1 w - - 0 17",
    score: 0.2,
  },
  {
    lichess: "https://lichess.org/999WerEY",
    fen: "6k1/7p/4p3/2p2p2/2P5/2b2NP1/P4K1P/8 w - - 0 28",
    score: 1.2,
  },
  {
    lichess: "https://lichess.org/7QRZzHYy",
    fen: "5rk1/2bq1ppp/p2p1n2/P1pP1P2/2N5/3Q2BP/1P2R1P1/6K1 w - - 3 32",
    score: 2.1,
  },
  {
    lichess: "https://lichess.org/WEaNm3U1",
    fen: "1r3rk1/4nppp/p2q4/3p1p2/QP1P4/4P2P/4BPP1/2R2RK1 w - - 1 23",
    score: 0.5,
  },
  {
    lichess: "https://lichess.org/8SxbF0RM",
    fen: "r4rk1/pp4p1/8/2PbPp1p/3pNP2/3B2Pn/PP2R2P/5R1K w - f6 0 28",
    score: 4.7,
  },
  {
    lichess: "https://lichess.org/ze7vZTI9",
    fen: "r4rk1/1pq1bppp/p1p1pn2/P7/2PP4/2B2BP1/2Q2P1P/R3R1K1 w - - 2 22",
    score: 0.5,
  },
  {
    lichess: "https://lichess.org/veLGCyCO",
    fen: "rn1q1rk1/1p1b1ppp/p3p3/8/6P1/2P4P/P1P2PB1/R1BQ1RK1 w - - 1 14",
    score: 1.4,
  },
  {
    lichess: "https://lichess.org/XywG0hA8",
    fen: "r4rk1/pp3b2/2nbpq1p/2p2p2/2Pp1P1N/3P2P1/PP1NQ1BP/R4RK1 w - - 5 17",
    score: 1.9,
  },
  {
    lichess: "https://lichess.org/z6eEPt5Y",
    fen: "2r3k1/1b3p1p/3n2p1/3p4/3B1NPq/PP2P2P/3Q4/5RK1 w - - 3 31",
    score: 1.3,
  },
  {
    lichess: "https://lichess.org/KOYS15OT",
    fen: "2r3k1/1p2pp1p/p5p1/4b1Pn/2nN2b1/1BP1B3/PKPR4/4R3 w - - 4 26",
    score: -2.1,
  },
  {
    lichess: "https://lichess.org/6UXMy2UJ",
    fen: "r1b2rk1/pp3ppp/8/2p1P3/1b1qB3/8/PPQ2PPP/R1B2RK1 w - - 0 14",
    score: 2.8,
  },
  {
    lichess: "https://lichess.org/Cb9l68hf",
    fen: "8/R4p2/4k1p1/4P2p/7P/1r4P1/5PK1/8 w - - 5 34",
    score: 0,
  },
  {
    lichess: "https://lichess.org/N8dz8sQM",
    fen: "N4k1r/pb1n1p2/2N1p2p/3P4/Ppp4p/8/3Q1PPP/q3KB1R w K - 2 20",
    score: -7.4,
  },
  {
    lichess: "https://lichess.org/vi9152OB",
    fen: "r1bq1rk1/p1n2pbp/3N1np1/2pP4/1p3B2/2N5/PPP1BPPP/R2Q1RK1 w - - 0 13",
    score: 0.6,
  },
  {
    lichess: "https://lichess.org/n12I0FQu",
    fen: "r2qk2r/pp2bp1p/2n1bp2/4p3/4N3/1Np3P1/PP2PPBP/R2QK2R w KQkq - 0 12",
    score: -0.2,
  },
  {
    lichess: "https://lichess.org/kQmWQ4XM",
    fen: "r1bq1r2/ppp1p2Q/3p1k2/5p2/2PnP3/2N5/PP3PP1/R3K1NR w KQ - 2 14",
    score: 19.7,
  },
  {
    lichess: "https://lichess.org/WAKyYKmv",
    fen: "3rkb1r/pp2pppp/1qn1b3/3n2B1/3P4/2N2N2/PP3PPP/2RQKB1R w Kk - 7 10",
    score: 1,
  },
  {
    lichess: "https://lichess.org/ZdV4tVEJ",
    fen: "rnbq1rk1/2p1ppb1/p2p2p1/1p5n/3PP3/4Bp2/PPPQN3/2KR1BNR w - - 0 12",
    score: 2,
  },
  {
    lichess: "https://lichess.org/f13RCfUC",
    fen: "8/1p1k1p2/2p2pp1/2P5/P2PprP1/1P3N1P/5PK1/4R3 w - - 2 36",
    score: 9.7,
  },
  {
    lichess: "https://lichess.org/P3MagoHr",
    fen: "6k1/1p3pp1/2p2np1/1p2n1B1/2q1P3/P5P1/1P3PBP/3Q2K1 w - - 1 24",
    score: 0.5,
  },
  {
    lichess: "https://lichess.org/pPIjTRV5",
    fen: "r1bqk2r/1p2bp2/1np1p2n/3pP1p1/2PP4/1P3NP1/2QB1PBN/1R1R2K1 w kq - 2 21",
    score: 3.4,
  },
  {
    lichess: "https://lichess.org/Ltxw4w73",
    fen: "r1bqk2r/p4p1p/2p2b2/2p2P2/3p3N/2P1p1P1/PP2P2P/R1BQ1RK1 w kq - 1 15",
    score: -1.5,
  },
  {
    lichess: "https://lichess.org/BHZum1Ic",
    fen: "rq4k1/5ppp/1p1Rrn2/pN2p3/1nP1P3/1P3PP1/5QBP/R5K1 w - - 2 23",
    score: 2.9,
  },
  {
    lichess: "https://lichess.org/uQ6TiGya",
    fen: "r1r1k3/p2qpn2/3pQP1p/1p4p1/3NPP2/8/PPP5/2K3RR w - - 1 28",
    score: 7.1,
  },
  {
    lichess: "https://lichess.org/uoQRYdAX",
    fen: "1r1r1nk1/p3b1pp/q3p3/2p1Pp2/2Pp1P2/1P1N1Q1R/P2B2PP/R5K1 w - - 4 25",
    score: 0,
  },
  {
    lichess: "https://lichess.org/Px9rUS7A",
    fen: "5r1k/1pp3pp/1p3rp1/1Pq5/P3P3/2P5/4QPPP/R4RK1 w - - 0 20",
    score: 1.6,
  },
  {
    lichess: "https://lichess.org/hYCykpuL",
    fen: "8/4nk1p/p1qpp1p1/1p1n1p2/3P3P/PQN1PB2/1P3PP1/6K1 w - - 0 26",
    score: 0.7,
  },
  {
    lichess: "https://lichess.org/TmMWuIPq",
    fen: "2k2r2/1pp3pp/p7/7n/4p3/7P/PPPR1P2/R1K5 w - - 4 24",
    score: 2.5,
  },
  {
    lichess: "https://lichess.org/bfer8NoN",
    fen: "5rk1/p1p5/1p2p3/3pP1bp/3Pp3/2PbP1K1/PP1B2P1/4R2N w - - 0 28",
    score: -2.5,
  },
  {
    lichess: "https://lichess.org/c7Y06483",
    fen: "2r3k1/3q1pbp/p5p1/1p2P3/3Np3/P3P1BP/1P4P1/5Q1K w - - 0 27",
    score: -5.3,
  },
  {
    lichess: "https://lichess.org/azolOGLI",
    fen: "8/3R2pp/1p2rk2/2p5/2P1p3/2P2P2/6PP/6K1 w - - 0 31",
    score: 0,
  },
  {
    lichess: "https://lichess.org/9CXTzMaR",
    fen: "r4rk1/p4pp1/1p2p1qp/3n4/3BRP2/2P5/PP1Q2PP/4R1K1 w - - 1 21",
    score: 0.3,
  },
  {
    lichess: "https://lichess.org/wOMdUOlp",
    fen: "6r1/1p5p/2p1pkb1/2Pp1p2/1p1P1P2/4KBP1/P6R/8 w - - 0 43",
    score: 0,
  },
  {
    lichess: "https://lichess.org/MEtvC0He",
    fen: "2r4r/np1qkp2/p3p1p1/2RpPnP1/PP1P1N1p/3Q1N1K/5PP1/2R5 w - - 1 28",
    score: 2.2,
  },
  {
    lichess: "https://lichess.org/1YRtnIlZ",
    fen: "4r1k1/Bp3ppp/6nq/5Q2/4P3/1PP3P1/P4P1P/R2r2K1 w - - 0 22",
    score: 7.8,
  },
  {
    lichess: "https://lichess.org/8Dm886yu",
    fen: "3r2r1/1bq1kp2/4pp1p/pp1p4/3R1P1Q/2P2B2/PP4PP/4R2K w - a6 0 25",
    score: 0.2,
  },
  {
    lichess: "https://lichess.org/LbI5Zqd4",
    fen: "2r2rk1/1p4pp/p2p1q2/4p2P/4P3/Pb1PB3/1P1Q1P2/R4K1R w - - 1 23",
    score: -2.3,
  },
  {
    lichess: "https://lichess.org/UON3ufuh",
    fen: "5rk1/pp1r1p2/2nN2pp/2P5/3b4/3B4/PP3PPP/2KR3R w - - 1 20",
    score: 0.6,
  },
  {
    lichess: "https://lichess.org/hb01sHNu",
    fen: "r5k1/p1p2p2/7Q/8/4q1p1/2P1P1B1/P2r1PPP/R4RK1 w - - 0 22",
    score: 9.5,
  },
  {
    lichess: "https://lichess.org/J2sknuEK",
    fen: "1k2qbnr/p1p4p/B1p5/2B2ppb/4p3/2N5/PPP2PPP/3R1RK1 w - - 2 17",
    score: -5.8,
  },
  {
    lichess: "https://lichess.org/eocyzPrR",
    fen: "r7/3b1p1p/3p4/4k1p1/p3P1P1/R2BK2P/2P5/8 w - - 2 33",
    score: -4.9,
  },
  {
    lichess: "https://lichess.org/yaJPe14A",
    fen: "rnr4k/1p4pp/2pbq3/p4N2/2PPp1n1/P1N1P3/1PQB2PP/R4RK1 w - - 4 17",
    score: 6.5,
  },
  {
    lichess: "https://lichess.org/3JnUbdb4",
    fen: "1rb2rk1/5p2/2pb1p1p/3p4/p7/1PPB3P/P3NPP1/3RR1K1 w - - 1 20",
    score: 0.4,
  },
  {
    lichess: "https://lichess.org/q8GkhhY5",
    fen: "r1b2rk1/6pp/p1n1pn2/2qpN1Q1/1p3P2/2NB4/PPP2P1P/2KR3R w - - 0 17",
    score: 3.3,
  },
  {
    lichess: "https://lichess.org/J5gNjd9L",
    fen: "1r3rk1/2qb2bp/pn1np1p1/N7/2p1P3/2P2PN1/1P1Q2PP/3RKB1R w K - 0 22",
    score: -0.8,
  },
  {
    lichess: "https://lichess.org/2q43Qv7L",
    fen: "N2r2k1/pp1n1p1p/2q1bnp1/3pp1B1/8/1NbBPP2/P1P3PP/1R1Q1K1R w - - 3 19",
    score: -1,
  },
  {
    lichess: "https://lichess.org/oUcntpCG",
    fen: "r4rbk/pp4pp/1qn2b2/2pp4/3P1N2/2P2NP1/PP5P/R1BQ1RK1 w - - 0 16",
    score: -2,
  },
  {
    lichess: "https://lichess.org/FHdlbeR4",
    fen: "r4rk1/6pp/4p3/4n3/2p1P3/q2nQPNP/P5P1/1R1N1K1R w - - 3 23",
    score: -4.1,
  },
  {
    lichess: "https://lichess.org/ehuuyx2v",
    fen: "8/3b3k/1B2p2p/3pP2B/3Pp3/bp2K3/6PP/8 w - - 0 41",
    score: -9.9,
  },
  {
    lichess: "https://lichess.org/Ba0WVaSg",
    fen: "r2qr1k1/pbp2ppp/2p3n1/3pP1b1/6QP/2N2N2/PPP2PP1/R3R1K1 w - - 0 15",
    score: 0.1,
  },
  {
    lichess: "https://lichess.org/jaAxjvvO",
    fen: "r1r3k1/p4p1p/2p1p1p1/R2p4/1q1bPB2/6P1/5PBP/5QK1 w - - 0 21",
    score: -8.4,
  },
  {
    lichess: "https://lichess.org/gJIDCqbJ",
    fen: "r2q1rk1/5pp1/2p1bb1p/2P1p3/1P1pP3/3B4/3N1PPP/R2Q1RK1 w - - 1 17",
    score: 0.5,
  },
  {
    lichess: "https://lichess.org/NoPiTHkN",
    fen: "8/5k1p/1p2r1p1/3pR3/p1pP2P1/P1P1K2P/1P6/8 w - - 5 38",
    score: 0.8,
  },
  {
    lichess: "https://lichess.org/p7POMIrz",
    fen: "r4r1k/pp3Bpp/1qnp4/8/3bP3/4BQ2/PP4PP/R4R1K w - - 1 18",
    score: 0.2,
  },
  {
    lichess: "https://lichess.org/CfYR3qSq",
    fen: "rnbq1rk1/p1p1bppp/1p1ppn2/8/3PPB2/2NB1N2/PPP2PPP/R2QK2R w KQ - 0 7",
    score: 1.7,
  },
  {
    lichess: "https://lichess.org/1nYx2C4s",
    fen: "r2q1rk1/1b1p1pbp/n4np1/1BpP4/8/2N2N2/PP3PPP/R1BQ1RK1 w - - 1 13",
    score: 1.5,
  },
  {
    lichess: "https://lichess.org/i9iMdJ07",
    fen: "r4rk1/pp3ppp/2p1p3/q2nP3/2QP1n2/P1N2N2/1P3PPP/R2R2K1 w - - 1 16",
    score: 1.1,
  },
  {
    lichess: "https://lichess.org/PMG4sk0o",
    fen: "r1bqkb1r/ppp2ppp/2n2p2/8/2pP4/2N1P3/PP3PPP/R2QKBNR w KQkq - 0 7",
    score: 0.8,
  },
  {
    lichess: "https://lichess.org/4WF70Cc8",
    fen: "8/2N5/8/2b1k2p/2n4P/p4P2/6K1/1R6 w - - 0 39",
    score: 1.4,
  },
  {
    lichess: "https://lichess.org/zXtzQjXG",
    fen: "r1r3k1/2qnppbp/pp1p2p1/2p5/P2P4/2PQPN1P/1P3PPB/R3R1K1 w - - 3 16",
    score: -0.1,
  },
  {
    lichess: "https://lichess.org/cF4ScibO",
    fen: "8/pp2r1p1/3k4/3Pp1p1/8/4K2P/PP3PP1/2R5 w - - 4 33",
    score: 2.3,
  },
  {
    lichess: "https://lichess.org/RTuUB0Hx",
    fen: "6k1/3q2p1/pn1r1p1p/1p2pP2/1P2Q1PP/1PBr4/2P5/3R3K w - - 0 35",
    score: -1.6,
  },
  {
    lichess: "https://lichess.org/6zR2Unix",
    fen: "rn2k2r/pp4pp/2p2p2/3p1b2/1QPPnB2/3NPP2/3q2PP/2R1KB1R w Kkq - 1 16",
    score: 8.3,
  },
  {
    lichess: "https://lichess.org/53pj4qqw",
    fen: "3r1rk1/p4pp1/2B4p/1Pb1B3/n7/4P3/5PPP/3R1RK1 w - - 2 26",
    score: 5.8,
  },
  {
    lichess: "https://lichess.org/rgvnD8hC",
    fen: "2r2rk1/5pb1/pq1ppn1p/3b4/3P3Q/3B3N/PB3PPP/1R2R1K1 w - - 10 22",
    score: 3.3,
  },
  {
    lichess: "https://lichess.org/3KdZpwl0",
    fen: "r4rk1/3nnpp1/p2Np2p/2PbP3/1q6/3B1P2/1PQ1N1PP/2KR3R w - - 0 23",
    score: -1.7,
  },
  {
    lichess: "https://lichess.org/ZKk85YVM",
    fen: "rnbqk2r/ppp1p2p/4P1p1/3Pbp2/8/2N4P/PPP3P1/R1BQKB1R w KQkq - 0 12",
    score: 2.3,
  },
  {
    lichess: "https://lichess.org/gsIUlrA9",
    fen: "8/pp1kpp2/3p1n2/5PQq/8/1KP5/1P6/1B6 w - - 0 38",
    score: -4.9,
  },
  {
    lichess: "https://lichess.org/usqRSBbL",
    fen: "r1b1kb1r/1pqppp1p/p4np1/8/Q7/2N2B2/PPP2PPP/R1B2RK1 w kq - 0 12",
    score: 2.8,
  },
  {
    lichess: "https://lichess.org/ThO066J5",
    fen: "5r1k/4qpp1/7p/1Rr1P3/2n2R2/2P3PB/4Q2P/6K1 w - - 3 40",
    score: 0.3,
  },
  {
    lichess: "https://lichess.org/7M05rORU",
    fen: "b6k/6q1/p2p2Bp/2pPnQ2/N1P2Pnb/P1B5/8/6K1 w - - 0 41",
    score: 8.8,
  },
  {
    lichess: "https://lichess.org/N5TPXAwN",
    fen: "1r3r1k/b1p1n1q1/p2pP2p/Pp2p2Q/5p2/2P2N1P/1PB2PP1/3RR1K1 w - - 2 27",
    score: 0,
  },
  {
    lichess: "https://lichess.org/YkDhPzlM",
    fen: "2r2rk1/pb2q1p1/1p2p2p/2ppp1b1/3P2P1/2PBPNQ1/PP5P/4RRK1 w - - 0 20",
    score: 3.3,
  },
  {
    lichess: "https://lichess.org/kOjrkIKA",
    fen: "2rq1rk1/pp2ppbp/2n2np1/8/2Bp1Bb1/5NP1/PPPNQPK1/R3R3 w - - 4 15",
    score: -6.3,
  },
  {
    lichess: "https://lichess.org/yMnJPuMK",
    fen: "4rr1k/7p/3p1bpP/3P4/2NpQ3/Pp1P4/1Pq5/K5RR w - - 5 31",
    score: 1.3,
  },
  {
    lichess: "https://lichess.org/75mWFHm5",
    fen: "1k2rb2/ppp3p1/1n6/2pP3r/2q1P2p/4P2p/4Q3/1R4RK w - - 0 29",
    score: -16,
  },
  {
    lichess: "https://lichess.org/fSupeJFv",
    fen: "r6r/pb4pp/1p1Nkp2/n2pp3/8/2P1B3/PR4PP/4K2R w - - 4 22",
    score: -8.8,
  },
  {
    lichess: "https://lichess.org/3yYb4eWD",
    fen: "r5k1/3b3p/p2p2pb/1p1Pp3/4P2q/3BB3/PP2Q1PP/R5K1 w - - 5 21",
    score: 0,
  },
  {
    lichess: "https://lichess.org/te1y9R3Q",
    fen: "r3r1k1/pbp2p2/1q3npp/1N2b3/7B/2pB3P/PP2QPP1/3R1K1R w - - 0 20",
    score: -8.7,
  },
  {
    lichess: "https://lichess.org/eg7OZavk",
    fen: "4n1k1/1pr3pp/p3P3/3p1Q2/3P4/1P3PP1/P5KP/2r5 w - - 3 32",
    score: 0,
  },
  {
    lichess: "https://lichess.org/rY3HrE3y",
    fen: "4r2k/p5pp/4Q3/3pN1qb/4n3/4P3/PPP3PP/4RBK1 w - - 1 23",
    score: 4.3,
  },
  {
    lichess: "https://lichess.org/LwXbJq3g",
    fen: "2kr1b1r/ppp2ppp/1qn1p3/1R6/2B2p2/1QP4P/PPP2PP1/4R1K1 w - - 4 18",
    score: 2.1,
  },
  {
    lichess: "https://lichess.org/R3WhdgoV",
    fen: "2kr3r/p1pq4/2p2p2/2R1p1p1/7p/1P1P2Pb/PB2PP1P/3Q1RK1 w - - 0 18",
    score: -4,
  },
  {
    lichess: "https://lichess.org/gsocLJpQ",
    fen: "4n1k1/5qpp/pp1p3r/2pPp3/1PP2PP1/P6P/2Q3K1/4RR2 w - - 0 31",
    score: 10.6,
  },
  {
    lichess: "https://lichess.org/R7VfCp1O",
    fen: "r1bqk3/pp1p1pp1/2n2n2/4p1B1/2P5/P1Q3P1/1P2PPB1/R3K1Nr w Qq - 0 12",
    score: 1.3,
  },
  {
    lichess: "https://lichess.org/S7nmEw0F",
    fen: "5rk1/6pp/r1Pp1R2/3Pp3/1B6/P5P1/5P1P/3n2K1 w - - 0 31",
    score: 0.4,
  },
  {
    lichess: "https://lichess.org/BxFt4drG",
    fen: "2kr4/1pqb1p1P/1b2p1n1/3pP3/pP6/P2Q1N2/1BPN1r2/2KR3R w - - 1 22",
    score: 5.4,
  },
  {
    lichess: "https://lichess.org/KVpSQGws",
    fen: "rnb1r1k1/pp3pbp/5np1/3p1N2/4P3/2N1BP2/Pq2B1PP/R2Q1RK1 w - - 0 14",
    score: 4.9,
  },
  {
    lichess: "https://lichess.org/hF9xNWxs",
    fen: "2br1rk1/pp3pp1/1bn2q1p/2N5/3p1B2/P5P1/1P2PPBP/2RQ1RK1 w - - 0 18",
    score: -0.1,
  },
  {
    lichess: "https://lichess.org/sxIB17PW",
    fen: "br3r1k/2q1p1bp/3p1n2/NBpPnp2/2P5/4Q2P/1P1N1PPB/R3R1K1 w - - 2 25",
    score: 1.8,
  },
  {
    lichess: "https://lichess.org/UZcbqTk0",
    fen: "r7/p4qpk/np2p1p1/3pPr1p/3p3P/2P3R1/PPQN1P2/2KR4 w - - 0 21",
    score: -3.8,
  },
  {
    lichess: "https://lichess.org/vWQbjblT",
    fen: "1k5r/1pp1p2P/r3q3/p1P1P3/P4n2/1Q6/1P6/K2R3R w - - 1 35",
    score: -1.6,
  },
  {
    lichess: "https://lichess.org/MfTIcopF",
    fen: "r4bk1/pp3ppp/6r1/5b2/5P1q/2PB1P2/PPQ1R2P/R1B3K1 w - - 3 24",
    score: -8.8,
  },
  {
    lichess: "https://lichess.org/hY2iZWYp",
    fen: "1r3r2/p2qn1bk/3p2pp/2pPpp2/P7/2PPN1Pb/3B1P1P/R2QR1KB w - f6 0 21",
    score: -0.4,
  },
  {
    lichess: "https://lichess.org/h4hWQhB9",
    fen: "q2r1bk1/1p3pp1/4b2p/8/3BB3/1p2P1P1/1Q1P1P1P/5RK1 w - - 2 22",
    score: -0.7,
  },
  {
    lichess: "https://lichess.org/5LrqMfdq",
    fen: "r1b2rk1/pp1n1pbp/1qn1p1p1/3pP3/3P4/1N1B1N2/PP3PPP/R1BQR1K1 w - - 6 12",
    score: 2,
  },
  {
    lichess: "https://lichess.org/hcv2gEgV",
    fen: "2r2r2/1pq2pbk/p2pb1pp/n3p2n/4P3/2P2N1P/1P2QPPB/RBNR2K1 w - - 0 23",
    score: -1.7,
  },
  {
    lichess: "https://lichess.org/kXteKwgj",
    fen: "4r2k/2b3pp/p3p3/8/4B3/8/P1P3PK/5R2 w - - 0 30",
    score: -0.3,
  },
  {
    lichess: "https://lichess.org/yMB3CyHj",
    fen: "r5k1/5pp1/1pp4p/p2b4/3P1Q1N/2P4P/1Pq2PP1/4R1K1 w - - 2 24",
    score: 1.3,
  },
  {
    lichess: "https://lichess.org/OEwrr4mx",
    fen: "1rrq2k1/4ppbp/p1npb1p1/3Q4/2R2P2/1P2BNPP/P3P1BK/3R4 w - - 1 21",
    score: -4.7,
  },
  {
    lichess: "https://lichess.org/g10XHmau",
    fen: "5rk1/4ppbp/p2p2p1/R1P5/4P3/2P1P3/1r2N1PP/5RK1 w - - 0 22",
    score: -1.4,
  },
  {
    lichess: "https://lichess.org/czIl8peZ",
    fen: "1r4k1/5pbp/nq2p1p1/p2p4/3P4/PPQ1P1P1/1B3PBP/2R3K1 w - - 1 23",
    score: 2.1,
  },
  {
    lichess: "https://lichess.org/rrNbPk4F",
    fen: "2r2r2/5pk1/p1pnqn1p/1p2p1pb/1PP1P3/P2B1P2/3NQBPP/2RR2K1 w - - 1 25",
    score: 3.1,
  },
  {
    lichess: "https://lichess.org/xOfYgYAO",
    fen: "r1q1k3/pp2p3/2pp1bp1/5b1p/2Q3nP/2NN2P1/PPP2P2/2KR3R w q - 5 23",
    score: 1.6,
  },
  {
    lichess: "https://lichess.org/0A0pmZ3w",
    fen: "1r2Nbk1/R4p1p/1n4pP/1pp3P1/3p4/3P1N2/1P3P2/2r1R1K1 w - - 0 32",
    score: 0,
  },
  {
    lichess: "https://lichess.org/NBcp0Wmc",
    fen: "5k2/4p2p/4PppP/3P1n2/5P2/r4BP1/5K2/8 w - - 13 50",
    score: -8.5,
  },
  {
    lichess: "https://lichess.org/EDifjyhJ",
    fen: "r1bq1rk1/p2n1ppp/2p5/2pnP3/2Bp1P2/5N1P/PPP3P1/R1BQ1RK1 w - - 1 14",
    score: 2.4,
  },
  {
    lichess: "https://lichess.org/XvicTkXp",
    fen: "r1k4r/ppp1bp2/2p1b2p/4Pnp1/8/2N2N1P/PPP2PPB/3R1RK1 w - - 2 14",
    score: 0,
  },
  {
    lichess: "https://lichess.org/BGqBrApx",
    fen: "3rr1k1/1pq2pp1/p1n2n1p/8/2Pp3N/P5P1/1B1Q1PBP/1R4K1 w - - 1 26",
    score: -7.4,
  },
  {
    lichess: "https://lichess.org/rk5Ro1T0",
    fen: "r1br4/pp2kppp/2p1pn2/4Nq2/3P3P/2P1P3/P1Q2PP1/R3KB1R w KQ - 3 16",
    score: 6,
  },
  {
    lichess: "https://lichess.org/8l0PqDjW",
    fen: "1k1r3r/ppp1q3/8/7p/Q2P2p1/4P1R1/PP3PP1/2KR4 w - - 2 21",
    score: -0.6,
  },
  {
    lichess: "https://lichess.org/EDnyldx3",
    fen: "1rb2q2/2p4k/p2b1nn1/Np1Pp3/1P2Pp2/PBN2Pp1/3Q2P1/1KR3B1 w - - 1 29",
    score: 1.7,
  },
  {
    lichess: "https://lichess.org/XUkWfwCa",
    fen: "2k2rn1/ppqb3r/2n1p1pp/P1Rp1p2/2pP1Q1P/2P2N2/2PBBPP1/R5K1 w - - 2 19",
    score: 0,
  },
  {
    lichess: "https://lichess.org/qwFgPtio",
    fen: "rn1qrbk1/5p1p/p4p2/1pp2P2/3p1Q2/2NB1P1P/PPP3P1/2KR3R w - - 0 17",
    score: 0.3,
  },
  {
    lichess: "https://lichess.org/Qx5FHKxh",
    fen: "3rr1k1/7p/p4pp1/1pp5/2n1Pp2/2P2P1P/PPB3P1/3RR1K1 w - - 1 27",
    score: 0,
  },
  {
    lichess: "https://lichess.org/N7dbBtzJ",
    fen: "r1bq1rk1/pppn1pbp/3p1np1/3Pp3/2P1P3/2N1B2P/PP3PP1/R2QKBNR w KQ - 1 8",
    score: 0.7,
  },
  {
    lichess: "https://lichess.org/inivTA4U",
    fen: "6k1/1p2rp1p/pNr1b1p1/8/2PR4/1P3P2/P5PP/2R3K1 w - - 0 24",
    score: 0.8,
  },
  {
    lichess: "https://lichess.org/J2pawoMy",
    fen: "6k1/2Pb4/1p2p1p1/2b1Pp1p/P4P1P/5BPK/8/8 w - - 0 37",
    score: 0,
  },
  {
    lichess: "https://lichess.org/lgrnRAt5",
    fen: "5k1r/p1q2pp1/3bbn2/3B2Bp/4p2Q/2N5/PrP2PPP/3R1RK1 w - - 2 18",
    score: 9,
  },
  {
    lichess: "https://lichess.org/gB0vMvC8",
    fen: "rn3rk1/2qpb1pp/p3p3/1p4N1/4b3/8/PPP2PPP/R1BQR1K1 w - - 0 15",
    score: -0.1,
  },
  {
    lichess: "https://lichess.org/Xmjqm79I",
    fen: "r6k/1b1qb2n/3p4/P2Pp2r/1Pp4P/2N2P1B/4NB2/R3K2R w KQ - 0 28",
    score: 10,
  },
  {
    lichess: "https://lichess.org/Bct0Tmyx",
    fen: "r4rk1/2pq1pb1/p2p1np1/1p1Pn1Np/7P/4BP2/PPPQB1P1/2KR3R w - b6 0 16",
    score: 0,
  },
  {
    lichess: "https://lichess.org/7kclKEG6",
    fen: "r3k2r/p4ppp/b3p3/1qppP3/3Q1P2/P1P5/1PB3PP/2KR3R w kq - 0 18",
    score: 0,
  },
  {
    lichess: "https://lichess.org/OMclDWoA",
    fen: "4r3/1p3rpk/4p1R1/pN1pPp2/4nP2/1P6/1P3P1P/6RK w - - 2 29",
    score: 0.5,
  },
  {
    lichess: "https://lichess.org/8x83bfMT",
    fen: "8/3kn1p1/p2bp2p/1p1p1p1P/3P1PP1/P1B1P2B/1PbN1K2/8 w - - 0 31",
    score: -0.1,
  },
  {
    lichess: "https://lichess.org/iK5fRKsf",
    fen: "r1r2k2/5pb1/3p1n1p/p1qPpNp1/RpP1Pn2/6B1/2Q2PPP/R4BK1 w - - 4 29",
    score: -0.7,
  },
  {
    lichess: "https://lichess.org/I8NuGbx8",
    fen: "r1b1r1k1/p2n2bp/1p2p1p1/2p3N1/3nP3/2N1B1PP/PPP3B1/3R1RK1 w - - 4 17",
    score: 0.7,
  },
  {
    lichess: "https://lichess.org/5S8yZ0q3",
    fen: "2r1kb1r/1bq2pp1/p2ppn1p/4n2P/1p2PB2/1NNB1P2/PPPQ2P1/1K1R3R w k - 0 16",
    score: 0.6,
  },
  {
    lichess: "https://lichess.org/ujnG9iB2",
    fen: "r4rk1/1p3pp1/p1npp2p/5b2/2BP4/4P2P/PP1N1PP1/2R2RK1 w - - 0 18",
    score: 0.9,
  },
  {
    lichess: "https://lichess.org/KZhdVQal",
    fen: "r1b1k2N/pp1pp1bp/6p1/8/2P1n3/8/PP3PPP/R3KB1R w KQq - 0 12",
    score: -4.2,
  },
  {
    lichess: "https://lichess.org/gIQORypA",
    fen: "2rqrbk1/5pp1/p2p1n1p/1p2pN2/2n1P3/1B2BP2/PPP3PP/R3QRK1 w - - 9 19",
    score: -0.4,
  },
  {
    lichess: "https://lichess.org/C57Ekq8Y",
    fen: "r3kb1r/1bqpnpp1/ppn1p2p/4P3/5B1P/2PB1NP1/PP2QP2/RN3RK1 w kq - 1 12",
    score: -0.4,
  },
  {
    lichess: "https://lichess.org/yqX3M5BK",
    fen: "r4rk1/pp3q1p/6n1/2Pp1p1N/8/1Q4P1/PP2BP1P/5RK1 w - - 0 27",
    score: 1.8,
  },
  {
    lichess: "https://lichess.org/8mVK3JbC",
    fen: "2kr4/2p3pp/p4pb1/1pb5/6R1/5N2/PP1N1KPP/8 w - - 2 26",
    score: -8.1,
  },
  {
    lichess: "https://lichess.org/Fa2CJuFf",
    fen: "3q1rk1/pp2b1p1/4pnpp/8/3N4/1P2P1P1/n4PBP/2BQR1K1 w - - 0 19",
    score: 2.8,
  },
  {
    lichess: "https://lichess.org/ghqMVaqh",
    fen: "r1bqnrk1/ppp3bp/2np2p1/4p3/1PP2p2/2NP2P1/P2NPPBP/1RBQ1RK1 w - - 1 11",
    score: 0.9,
  },
  {
    lichess: "https://lichess.org/zEg45sBp",
    fen: "rnbq1rk1/1pp1n1b1/p2p2pp/3Ppp2/BPP1P3/2N2N1P/P4PP1/R1BQR1K1 w - f6 0 14",
    score: 0.6,
  },
  {
    lichess: "https://lichess.org/6sDworYU",
    fen: "r3rbk1/2pq1pp1/p1Np2np/P2P4/1Q2NP2/1P4Pb/1BP4P/R3R1K1 w - - 1 25",
    score: 2.3,
  },
  {
    lichess: "https://lichess.org/rFZroGmd",
    fen: "4r1k1/1p1brpb1/p1p4p/2P3p1/1P1Np3/1P2P1PP/5PBK/2RR4 w - - 0 25",
    score: -0.9,
  },
  {
    lichess: "https://lichess.org/JNwDHkM7",
    fen: "r1bq1rk1/p3ppbp/2pp1np1/6B1/2B1P3/2N5/PPP2PPP/R2Q1RK1 w - - 2 10",
    score: 0.1,
  },
  {
    lichess: "https://lichess.org/39OIsB8l",
    fen: "1rbq1rk1/3n1pbp/pp1ppnp1/2p5/P1PP4/1PN1P1P1/1B2NPBP/R2Q1RK1 w - - 0 12",
    score: 0.6,
  },
  {
    lichess: "https://lichess.org/ZTIhkZj0",
    fen: "1r4k1/3p1ppp/4pP2/4N3/3Pp3/P1r5/3nQP1P/1K1R3R w - - 1 23",
    score: -9.2,
  },
  {
    lichess: "https://lichess.org/dFQRPH0Y",
    fen: "r1r3k1/pp2bppp/1qp1pn2/6N1/2P5/3Q4/PP1B1PPP/R4RK1 w - - 3 18",
    score: -1.9,
  },
  {
    lichess: "https://lichess.org/izgAhXTI",
    fen: "rnbqkbnr/pppppppp/8/8/8/5N2/PPPPPPPP/RNBQKB1R b KQkq - 1 1",
    score: -0.4,
  },
  {
    lichess: "https://lichess.org/HBBeHZqF",
    fen: "r7/p4rk1/2ppb2p/8/8/2PB4/2PK1PP1/3R3R w - - 0 25",
    score: 0.3,
  },
  {
    lichess: "https://lichess.org/pVuTdbPh",
    fen: "5rk1/pp2bpp1/2r1pn1p/8/2P2P2/3BP2P/PB3KP1/R4R2 w - - 2 26",
    score: 0,
  },
  {
    lichess: "https://lichess.org/pVwZUvUi",
    fen: "4kb1r/2qb1p1p/4p1pn/1r1pP3/pP1N1P2/2P1B3/4Q1PP/R4RK1 w k - 0 19",
    score: 5.6,
  },
  {
    lichess: "https://lichess.org/Pgmx8p01",
    fen: "r2r2k1/1p3pb1/q1p1p1pp/2P1Pb2/Pp1P1P2/1B2QN2/6PP/3R1R1K w - - 1 28",
    score: 6,
  },
  {
    lichess: "https://lichess.org/kPfIi2xU",
    fen: "rn1qk2r/pp1b1ppp/5n2/1Bbpp3/5P2/2NP4/PPP3PP/R1BQK1NR w KQkq - 2 8",
    score: 1,
  },
  {
    lichess: "https://lichess.org/jEJ0ZEpR",
    fen: "r2r2k1/pbp1qpp1/1p2p2p/8/2BPP3/1QP2P2/P5PP/3R1RK1 w - - 1 17",
    score: 0,
  },
  {
    lichess: "https://lichess.org/OPvToCuT",
    fen: "r1bq1rk1/1p4pp/p1n1pn2/2bpN3/5B2/3B4/PPPNQPPP/R4RK1 w - - 0 12",
    score: 1.4,
  },
  {
    lichess: "https://lichess.org/dTxrWfz6",
    fen: "r1bq1rk1/2Qp1pp1/p2Pp3/1p5p/4R1P1/5N1P/PPP5/1K1R4 w - - 1 25",
    score: -0.9,
  },
  {
    lichess: "https://lichess.org/Fj5JsT7Q",
    fen: "2rq1rk1/1b1n1ppp/1b2pn2/p2p2N1/1R1B1P2/1PpPP1P1/2P1Q1BP/1N1R2K1 w - - 0 20",
    score: 0,
  },
  {
    lichess: "https://lichess.org/mKxBTC2k",
    fen: "2r2rk1/1bq2pbp/4p1p1/p7/P1BpN3/1P1Q4/2P2PPP/1R2R1K1 w - - 4 19",
    score: -0.7,
  },
  {
    lichess: "https://lichess.org/weVRhep5",
    fen: "1rb2rk1/p4ppp/1p4n1/3B2N1/1P6/8/P4PPP/R3R1K1 w - - 3 20",
    score: 1.6,
  },
  {
    lichess: "https://lichess.org/14nsubCW",
    fen: "r1bq2k1/1pp1pr1p/3p2p1/p1nP4/2PNP1n1/8/PPQ1NPBP/R4RK1 w - - 2 17",
    score: 0.8,
  },
  {
    lichess: "https://lichess.org/aA5pTw4O",
    fen: "rn3rk1/2ppqnbp/1p2p1p1/p2PPp2/2b2P2/P1NQBN2/1PP3PP/3R1RK1 w - - 0 14",
    score: 4,
  },
  {
    lichess: "https://lichess.org/uCvzw4TA",
    fen: "r3kb1r/ppp1q1pp/5n2/2PP4/1PNQp1b1/3n4/P1K2PBP/RNB4R w kq - 5 20",
    score: 0.9,
  },
  {
    lichess: "https://lichess.org/m3lGBDJy",
    fen: "2rr1b2/5k2/p1bqp1p1/1p2p1BQ/3P4/2P4R/P4PPP/R5K1 w - - 0 25",
    score: -3.9,
  },
  {
    lichess: "https://lichess.org/V5I4d5Rh",
    fen: "8/p1p5/5b2/8/4kp2/P1P5/1P2Kr2/2B5 w - - 0 43",
    score: -6.2,
  },
  {
    lichess: "https://lichess.org/z3HjzHRs",
    fen: "r1b1k2r/p2p1p1p/5p2/q1nP4/1ppN4/2Q1P3/PP3PPP/2KR1B1R w kq - 0 14",
    score: 2,
  },
  {
    lichess: "https://lichess.org/iHdXjjkH",
    fen: "3r1rk1/2bn1pp1/1p2p1pq/p1p1P3/2PP1R2/PP6/1B2NQPP/R5K1 w - - 0 20",
    score: -2.1,
  },
  {
    lichess: "https://lichess.org/QOwUzFOY",
    fen: "r1bq1rk1/p3bppp/4p3/1ppp4/1n2PP2/3P1NN1/PPP3PP/R1B1QRK1 w - - 2 12",
    score: -0.3,
  },
  {
    lichess: "https://lichess.org/0NFvOYsQ",
    fen: "r1bq1rk1/1p3pp1/p1n2n1p/2bp4/7B/P1NBPN1P/1P3PP1/R2QK2R w KQ - 2 13",
    score: 1.2,
  },
  {
    lichess: "https://lichess.org/tWu6hRJm",
    fen: "1kr4r/1b2bp2/p2ppp2/1p5p/2nNPP2/2N3P1/PPP3BP/1K1RR3 w - h6 0 22",
    score: -0.7,
  },
  {
    lichess: "https://lichess.org/EX0dFz8X",
    fen: "r2r1b2/1p3k1p/pN3pp1/P1pP4/4PBP1/3K3P/1P3P2/2R5 w - - 3 30",
    score: 8.1,
  },
  {
    lichess: "https://lichess.org/7a8Jvyfu",
    fen: "r2rb1k1/pp3p2/2n1p1pp/q3P2P/2P1Q3/5N2/P4PP1/RB3RK1 w - - 3 21",
    score: 4.1,
  },
  {
    lichess: "https://lichess.org/LWpfpKSy",
    fen: "8/pb3k2/1p2pp2/8/3r2N1/5P2/P7/1B3RK1 w - - 2 30",
    score: 1.3,
  },
  {
    lichess: "https://lichess.org/CgY5Uojf",
    fen: "1r5k/1p1r2b1/p2PQ1p1/PnB1p2p/3nN1PP/5P2/4K3/R6R w - - 1 35",
    score: -5.4,
  },
  {
    lichess: "https://lichess.org/dN5vwsTi",
    fen: "r3k1nr/3bb3/pqn1p2p/1p1pPp2/3P4/2PB1N2/5PNP/R1BQK2R w KQkq - 2 16",
    score: 1.5,
  },
  {
    lichess: "https://lichess.org/hx9H3TqA",
    fen: "2bk1n1r/prq3p1/4p2p/2BpR3/2pP4/2P4B/2Q2PPP/R5K1 w - - 2 24",
    score: 3.8,
  },
  {
    lichess: "https://lichess.org/8Csy63qo",
    fen: "2r4r/3nkp2/bq2p1p1/2ppPnN1/1b1P2pP/pP2BQ1B/P4P1N/2RR2K1 w - - 0 26",
    score: -2.3,
  },
  {
    lichess: "https://lichess.org/4aV3z7DT",
    fen: "3r1rk1/ppp1n1pp/1bn2p2/7B/2N5/2P3BP/PP4P1/R3K2R w KQ - 2 16",
    score: -0.7,
  },
  {
    lichess: "https://lichess.org/UtCxLCXm",
    fen: "3r1bk1/5ppp/2np4/3Nn3/4R3/6BP/1r3PP1/3BR1K1 w - - 13 33",
    score: -0.2,
  },
  {
    lichess: "https://lichess.org/p1PQkz1o",
    fen: "r3k2r/pp2n1b1/1qbpp1pp/2p5/3nPPP1/2NP2N1/PPPB2B1/1R1QK2R w Kkq - 0 14",
    score: 0,
  },
  {
    lichess: "https://lichess.org/zgZViZ3e",
    fen: "3r1rk1/p1p2ppp/2R1b2q/4P3/5n2/P2p1NNP/1P3PP1/3QR1K1 w - - 0 20",
    score: -0.2,
  },
  {
    lichess: "https://lichess.org/iFxkgvvM",
    fen: "6r1/6k1/b4rpp/p2pNp1q/1p1P1P1P/4P3/PPR5/4Q1RK w - - 8 37",
    score: 3.7,
  },
  {
    lichess: "https://lichess.org/pLC9nPMP",
    fen: "3r2r1/pk4pp/2p2p1b/2p1p3/2PpP2P/1P1P2B1/P4PP1/1R1R2K1 w - - 1 22",
    score: 0.3,
  },
  {
    lichess: "https://lichess.org/uihPHx5y",
    fen: "3rk2r/pp3pb1/2p2n1p/2P1n1p1/1P2P1P1/PbN2P1N/4BK1P/2B1R3 w k - 1 20",
    score: -8.3,
  },
  {
    lichess: "https://lichess.org/7OygNMzs",
    fen: "3b2k1/1b5p/p3p3/1pB2p2/2P1P1N1/1P3P2/P1K3PP/8 w - f6 0 29",
    score: 6.5,
  },
  {
    lichess: "https://lichess.org/teS9Jgej",
    fen: "r1bq1rk1/p3n1b1/3p4/2pPp1p1/2P1Ppp1/PNN2P1P/4QB2/1R3RK1 w - - 0 22",
    score: 0,
  },
  {
    lichess: "https://lichess.org/qr9GaXeb",
    fen: "5r1k/pp4pp/1q6/3Qp3/1b6/5KP1/PP2N2P/R1B5 w - - 1 21",
    score: -1.6,
  },
  {
    lichess: "https://lichess.org/qRWnXSBB",
    fen: "4r1k1/R4p2/4b2p/6p1/5nP1/P4N1P/5K2/8 w - - 1 35",
    score: -6.2,
  },
  {
    lichess: "https://lichess.org/UptXEyW8",
    fen: "r6r/pp4p1/1n1kpp2/3p2pP/3P2P1/2P5/PP3PB1/2KRR3 w - - 0 23",
    score: 0.3,
  },
  {
    lichess: "https://lichess.org/K6JnuGKv",
    fen: "r1b1rbk1/p1qn1p1n/2p3p1/1p1ppNP1/3PP3/2PBBP2/PP1N3Q/R4RK1 w - - 0 18",
    score: 7.7,
  },
  {
    lichess: "https://lichess.org/cWArtAHs",
    fen: "4rr2/1k6/3p4/1p1P1pB1/p1pPp1pP/P2n2P1/1P2RPB1/1R4K1 w - - 0 35",
    score: 4.3,
  },
  {
    lichess: "https://lichess.org/gM14ml7m",
    fen: "r2kq3/pp4b1/2p1p2p/3pP1p1/P2Pp3/1PP1P3/4Q1PP/R1B3K1 w - - 0 20",
    score: 4.3,
  },
  {
    lichess: "https://lichess.org/KKJdFCJW",
    fen: "2r2rk1/pp2ppb1/4b1p1/3p4/3P4/1QPBp2P/P5P1/qN3RK1 w - - 2 19",
    score: -10.3,
  },
  {
    lichess: "https://lichess.org/r08nfEXT",
    fen: "1r2r1k1/pp4pp/1b2N3/n7/2B1PB2/8/PPP3PP/5R1K w - - 3 22",
    score: 7.5,
  },
  {
    lichess: "https://lichess.org/WfmhfUQp",
    fen: "rnb1r1k1/4bpp1/1qp1p2p/1p2P3/p2P4/P1NB1N2/1PQ2PPP/R3R1K1 w - - 1 18",
    score: 1.9,
  },
  {
    lichess: "https://lichess.org/qg6dgRrB",
    fen: "1n1r2k1/p4b2/1p1q3Q/2p1p3/6PP/1PP4B/P4R1K/8 w - - 2 40",
    score: 0.3,
  },
  {
    lichess: "https://lichess.org/nkUj6jOV",
    fen: "2r3k1/p3pp1p/1p1p2p1/2qPn1P1/2r5/1RP1Q1PP/P3P1BK/2R5 w - - 9 34",
    score: -3.8,
  },
  {
    lichess: "https://lichess.org/7bMP4KFt",
    fen: "r1bqr1k1/p1p2ppp/2p5/3pb3/5Bn1/2NB4/PPP1QPPP/4RRK1 w - - 0 13",
    score: -0.4,
  },
  {
    lichess: "https://lichess.org/1hraZIyA",
    fen: "rnbq1rk1/pp3ppp/4p3/3pP3/1b1p4/2NB1N2/PPP1QPPP/R4RK1 w - - 0 11",
    score: 0.3,
  },
  {
    lichess: "https://lichess.org/bemjkTaP",
    fen: "r1bqk2r/pp2npb1/3pp2p/2p3p1/2PPPP2/2NBn3/PP1QN1PP/R4RK1 w kq - 0 12",
    score: -2.9,
  },
  {
    lichess: "https://lichess.org/Xd8vorkk",
    fen: "r1b2rk1/ppq4p/3p1np1/n1p2p2/2PP1P2/P1PB1QN1/6PP/1RB2RK1 w - - 4 16",
    score: -0.7,
  },
  {
    lichess: "https://lichess.org/z7GLin4L",
    fen: "4rrk1/8/b2b3p/2p3p1/2P5/1PBNp1P1/P1K4P/R6R w - - 2 22",
    score: 0.1,
  },
  {
    lichess: "https://lichess.org/7ZqUlIA6",
    fen: "r2q1rk1/1b2b1pp/4p3/p2pNp2/Pnp5/1Q2B1P1/1P2PPBP/R4RK1 w - - 0 19",
    score: -2.9,
  },
  {
    lichess: "https://lichess.org/Xo2QM7x6",
    fen: "r3r1k1/1p4p1/2p5/3npb2/3bN3/P2P4/3B1PB1/R2R2K1 w - - 1 29",
    score: -3,
  },
  {
    lichess: "https://lichess.org/uE4YPFsc",
    fen: "2r2nkr/p1q1npp1/1p2p2p/P2pP2P/3p4/B1P2N1R/2P2PP1/R2Q2K1 w - - 0 18",
    score: 3.1,
  },
  {
    lichess: "https://lichess.org/Q60cqw8T",
    fen: "r2q1rk1/pb2npbp/1p2p1p1/2p5/1PPnp3/P1NP2PP/4NPB1/1RBQ1RK1 w - - 0 13",
    score: 0,
  },
  {
    lichess: "https://lichess.org/iGUKOyns",
    fen: "r1bq1rk1/pp4pp/2nbPn2/2pp4/3P4/2PB1N2/PP3PPP/RNBQ1RK1 w - - 3 9",
    score: 3.3,
  },
  {
    lichess: "https://lichess.org/WkLfp9Rr",
    fen: "r1bq1rk1/pp2n1b1/n1pp2pp/5p2/2PP1N2/1QN1BpP1/PP2P1B1/2KR3R w - - 0 15",
    score: 1,
  },
  {
    lichess: "https://lichess.org/nRwrIzuq",
    fen: "3q2k1/Q1r2ppp/4p3/n2pP1b1/3P4/1P1BPR2/P3N1PP/6K1 w - - 1 24",
    score: 2.5,
  },
  {
    lichess: "https://lichess.org/oBegK2jh",
    fen: "r2q1rk1/pb3ppp/1pp2b2/2n2N2/5B2/2P2QP1/P4PBP/R4RK1 w - - 5 17",
    score: 5.4,
  },
  {
    lichess: "https://lichess.org/2yuoxSqp",
    fen: "r1b1k2r/2q2ppp/pp1ppnn1/8/1PP1PP2/2N1N1P1/P3Q2P/R3KB1R w KQkq - 0 16",
    score: 1.3,
  },
  {
    lichess: "https://lichess.org/h6aPlD11",
    fen: "r1bqk1r1/ppp2pPp/6n1/8/1bpP4/2N5/PPP2PPP/R1BQK2R w KQq - 1 10",
    score: -5.2,
  },
  {
    lichess: "https://lichess.org/tgU05Or0",
    fen: "1kr2q1r/pb4p1/1p3p2/2nPR1Np/7P/1B6/PP1Q1PP1/1K1R4 w - - 0 22",
    score: 2.8,
  },
  {
    lichess: "https://lichess.org/5H9TVG8P",
    fen: "8/3b1kp1/2p1p3/1pPpP1bp/1P1Pp3/2B1P1PB/5K1P/8 w - - 4 27",
    score: 0,
  },
  {
    lichess: "https://lichess.org/LCgP9lQJ",
    fen: "1k1r3r/5p2/bp6/2p1p1p1/2P1P2p/Pn5P/1PB2PP1/R4RK1 w - - 0 27",
    score: -1.2,
  },
  {
    lichess: "https://lichess.org/5OTaKqwX",
    fen: "2r4k/pp4p1/4p3/3p3r/3P1P2/4P3/PP1K2Qq/R5R1 w - - 6 33",
    score: 0.5,
  },
  {
    lichess: "https://lichess.org/2lAXcaoo",
    fen: "r2qr1k1/pp2pp2/2npb1pp/3P3n/7B/2b1PN2/PP2BPPP/2RQ1RK1 w - - 0 14",
    score: 7.9,
  },
  {
    lichess: "https://lichess.org/Rve1caqa",
    fen: "r2r2k1/1bq2pbp/1n3np1/pBp1p3/P1P1P3/4BP2/1N1Q1NPP/2R2RK1 w - - 1 20",
    score: 1.8,
  },
  {
    lichess: "https://lichess.org/VEjdxqET",
    fen: "r1bq1rk1/pp2ppbp/2n2np1/3p4/3NP3/2N1BP2/PPPQ2PP/2KR1B1R w - - 0 10",
    score: 0.8,
  },
  {
    lichess: "https://lichess.org/h6wbAoZw",
    fen: "3q1r2/1b2npbk/rp4pp/4p3/NRPp4/3P1NP1/2Q1PPBP/3R2K1 w - - 1 20",
    score: 3.2,
  },
  {
    lichess: "https://lichess.org/jnpJtGBE",
    fen: "2rr2k1/4qp1p/1p1pp1pP/pNn3b1/1nP1P3/1P2BPP1/P4Q2/3RRBK1 w - - 1 35",
    score: 1.8,
  },
  {
    lichess: "https://lichess.org/GA7CWZtT",
    fen: "2kr1b1r/p1pb1ppp/2p5/8/1q2p3/1N3P2/PPP3PP/R1BQR1K1 w - - 4 13",
    score: 0.4,
  },
  {
    lichess: "https://lichess.org/pQLLM8IM",
    fen: "r2q1rk1/3b1pbp/3pp1p1/2p5/1p2PP2/1PNP4/1P3BPP/1R2QRK1 w - - 0 18",
    score: -2.4,
  },
  {
    lichess: "https://lichess.org/4GRbfUvQ",
    fen: "r4rk1/1p3p1p/3pp1p1/p1pPb3/B1P1P2q/1PN1R3/P2B1PKP/5R2 w - - 4 20",
    score: -6,
  },
  {
    lichess: "https://lichess.org/6p5ka38p",
    fen: "8/5k2/R5p1/5p2/3P3P/4PKP1/3r1P2/8 w - - 9 42",
    score: 7.9,
  },
  {
    lichess: "https://lichess.org/8X08RNjL",
    fen: "1r3rk1/4q1bp/p2pb3/1p2p3/5p2/1BP1N3/PP3PPP/R2Q1RK1 w - - 0 20",
    score: 0,
  },
  {
    lichess: "https://lichess.org/8gYYQ7Um",
    fen: "r1rq2k1/1Q3pp1/2p4p/p3B3/3p4/P4P1P/6PK/4R3 w - - 2 31",
    score: -6.8,
  },
  {
    lichess: "https://lichess.org/9PSwA1nM",
    fen: "8/1R6/3p1kr1/2q1p3/5p2/5Q1P/5PP1/1R4K1 w - - 3 39",
    score: 13.6,
  },
  {
    lichess: "https://lichess.org/FMLRPxBX",
    fen: "8/1ppkn3/p4p2/2P1r1p1/2B3P1/2R1PK2/8/8 w - - 2 31",
    score: -7,
  },
  {
    lichess: "https://lichess.org/8Hf8pNYF",
    fen: "r6r/1p2k3/1np1npp1/p3p2p/P3P1bP/1BN2NK1/1PPR1PP1/3R4 w - - 4 22",
    score: -0.1,
  },
  {
    lichess: "https://lichess.org/y6XudRkX",
    fen: "4r1k1/1r1P4/7p/p2P2p1/P7/B3q3/5pPP/1R3R1K w - - 0 37",
    score: 7.2,
  },
  {
    lichess: "https://lichess.org/P6XuoD7h",
    fen: "r1bq1rk1/1p1n1ppp/p1pbpn2/3p4/2P5/1PN1PN2/PB1PBPPP/R2Q1RK1 w - - 0 9",
    score: 0.6,
  },
  {
    lichess: "https://lichess.org/aBoKOnhl",
    fen: "2kr3r/p1q2pp1/1p2p3/3pP3/3Bb1P1/2P4P/PP2QK1R/R7 w - - 2 22",
    score: 0,
  },
  {
    lichess: "https://lichess.org/ClmpvLW2",
    fen: "1r6/6p1/3r1k1p/b1p1p3/P1Pp4/1P3PP1/2B1P2P/1R1R2K1 w - - 11 38",
    score: 2.9,
  },
  {
    lichess: "https://lichess.org/wCZpDzgt",
    fen: "r2r4/1bp2k1p/1p1nppp1/p2n4/3PB2P/2P2N2/PP1B1PP1/2KRR3 w - - 5 24",
    score: -0.7,
  },
  {
    lichess: "https://lichess.org/QikuCUmk",
    fen: "1r3bk1/1p3p1p/2bp2p1/4p3/pB1nP3/P2R2PP/1P3PBK/2R5 w - - 3 32",
    score: 1.1,
  },
  {
    lichess: "https://lichess.org/KAzvdCfb",
    fen: "4rrk1/3q2bp/p1npb1p1/1pp1pp2/2PnPP2/1PNPB1PP/P2QNRBK/5R2 w - b6 0 17",
    score: 0.7,
  },
  {
    lichess: "https://lichess.org/YfUvQDoh",
    fen: "6k1/1b1r2p1/2p1p2p/1pP1qp2/1P6/4PBP1/5P1P/1QR3K1 w - - 0 30",
    score: 2.2,
  },
  {
    lichess: "https://lichess.org/kA1yjFw8",
    fen: "r1b3kr/p5pp/4pn2/1p2Np2/2pP4/B1P5/5PPP/2R1K2R w K - 0 23",
    score: -2.3,
  },
  {
    lichess: "https://lichess.org/jDEq7UV5",
    fen: "r2k4/pp1P1pn1/1bn3p1/7r/4NP1q/5B2/PPP4P/R1BQ1K1R w - - 3 17",
    score: 1.9,
  },
  {
    lichess: "https://lichess.org/GyxmJr3r",
    fen: "r2q1rk1/pbpp2pp/1p2pn2/4np2/1bP5/1PNBP3/PB1PNPPP/2RQ1RK1 w - - 4 10",
    score: -0.9,
  },
  {
    lichess: "https://lichess.org/AjXnKQH5",
    fen: "r7/3b1kpp/4pp2/8/1pP5/1P3P2/P5PP/1K3B1R w - - 0 27",
    score: 2.4,
  },
  {
    lichess: "https://lichess.org/vP2NCif7",
    fen: "1r3q1k/ppp2pb1/3pb1p1/6p1/2P1P3/6P1/PPQ2PBP/3R1RK1 w - - 2 18",
    score: 2.6,
  },
  {
    lichess: "https://lichess.org/Df7RWKQp",
    fen: "3r1k2/p5p1/4pb1p/p1p4P/4PP2/PP4P1/1q1N1Q2/3R2K1 w - - 3 32",
    score: -5,
  },
  {
    lichess: "https://lichess.org/78wb0Vwu",
    fen: "2r5/1b1k2bp/p5p1/8/2p1rP2/3p4/P2B2PP/1B2RRK1 w - - 0 32",
    score: -8.5,
  },
  {
    lichess: "https://lichess.org/lzQISwmb",
    fen: "r1b2rk1/pp3ppp/2nq4/5p2/3P4/P4N2/1P1B1PPP/R2Q1RK1 w - - 0 15",
    score: -0.4,
  },
  {
    lichess: "https://lichess.org/RKvjzWXa",
    fen: "r1bq1rk1/4b1pp/1nn1p3/p2pPp1P/PppP1N2/2P2N2/1PB2PP1/R1BQK2R w KQ - 2 15",
    score: 1.4,
  },
  {
    lichess: "https://lichess.org/RXVzrO4R",
    fen: "5r1k/6p1/pq3p1p/1pbQp3/8/P1P3P1/1P2RP1P/3R2K1 w - - 0 25",
    score: 7.5,
  },
  {
    lichess: "https://lichess.org/P2Zh8iGN",
    fen: "3r3r/1Qpkn3/3b1p2/3p2p1/3Pp1qp/1P2P1P1/PBR2PBP/4N1K1 w - - 4 23",
    score: -4.8,
  },
  {
    lichess: "https://lichess.org/C5WtSDEQ",
    fen: "2r5/1Rp4p/2Pbk1p1/r4p2/p1N1p3/P3P3/4KPPP/8 w - - 0 35",
    score: -7.1,
  },
  {
    lichess: "https://lichess.org/y0tsd4zu",
    fen: "3r4/5k1p/pp4p1/2p2bP1/2P2B1P/1P6/P3RP2/2K5 w - - 0 30",
    score: 5.5,
  },
  {
    lichess: "https://lichess.org/CMyn82iR",
    fen: "r1b1k3/pp6/5rp1/3pp3/3p1b2/1P5P/P1PNB3/R1B4K w q - 0 28",
    score: -8.6,
  },
  {
    lichess: "https://lichess.org/GrgTtZfG",
    fen: "1r5k/7p/3p2p1/3BP3/1p3P2/4b1P1/1r5P/2RR3K w - - 1 27",
    score: 0,
  },
  {
    lichess: "https://lichess.org/6dcvDxjV",
    fen: "r2qkb1r/pQ1n1p1p/3pb1p1/2p5/2B1P3/5N2/PPP2PPP/R1B1K2R w KQkq - 1 10",
    score: 4.7,
  },
  {
    lichess: "https://lichess.org/qDu7OhdT",
    fen: "r5k1/3n1ppp/1p2p3/2pbP3/r7/5NB1/PPP1KPPP/R2R4 w - - 6 20",
    score: -0.1,
  },
  {
    lichess: "https://lichess.org/3j7tthIW",
    fen: "2kr1r2/1p3p1p/p1bp1p2/3npP2/2B1P3/8/PPP3PP/3R1RK1 w - - 0 19",
    score: 0.8,
  },
  {
    lichess: "https://lichess.org/rkStpY6n",
    fen: "rn1qk2r/1p3p2/2p1p2p/p5p1/P1BPn1b1/2P2NB1/5PPP/R2Q1RK1 w kq - 0 13",
    score: 1.5,
  },
  {
    lichess: "https://lichess.org/kFSSxPe6",
    fen: "1r2r1k1/3b2p1/p2p1b1p/PppPq3/2K1B3/2N2P2/1PQ5/3R2R1 w - b6 0 35",
    score: -8.6,
  },
  {
    lichess: "https://lichess.org/pjG6O58k",
    fen: "2rq1r2/1p4bp/3PQ1pk/p3np2/3Np2P/P3P1P1/1P3PB1/1RB2RK1 w - - 7 25",
    score: 9.2,
  },
  {
    lichess: "https://lichess.org/VjaxGupU",
    fen: "r4rk1/3nqpb1/2p1pnp1/p5Np/Pp1PPBbP/1B1QN3/1PP3P1/R4RK1 w - - 4 17",
    score: 4,
  },
  {
    lichess: "https://lichess.org/8DW7ChDB",
    fen: "r1r1bqk1/3n1pp1/2Nb3p/p1pP1Q2/1p6/P1B2B2/1P3PPP/3RR1K1 w - - 0 24",
    score: 1.6,
  },
  {
    lichess: "https://lichess.org/hgqTjFEe",
    fen: "6r1/6P1/2k1p3/4P3/1ppP1P2/6R1/1K6/8 w - - 3 47",
    score: 0,
  },
  {
    lichess: "https://lichess.org/R8FunCZN",
    fen: "r4rk1/1pq2pp1/p1n3p1/3p4/4n3/1NP1RN1P/PPQ2PP1/R5K1 w - - 2 18",
    score: 0.7,
  },
  {
    lichess: "https://lichess.org/COniryn6",
    fen: "1k1r4/pp3p2/4p1pp/r3P3/2qR1PP1/P1P4P/1P6/K3R3 w - - 0 32",
    score: 0.5,
  },
  {
    lichess: "https://lichess.org/XgbtMPhy",
    fen: "r3r1k1/5p2/p4p1p/3P1q2/1b2pN2/4R1PP/P1Q2P2/3R2K1 w - - 1 31",
    score: 3.4,
  },
  {
    lichess: "https://lichess.org/vrR7STiB",
    fen: "rnbqkbnr/pp2pppp/8/8/2Bp4/4P3/PP3PPP/RNBQK1NR w KQkq - 0 5",
    score: 0.7,
  },
  {
    lichess: "https://lichess.org/g0r3sZ3E",
    fen: "5r1r/pp6/3p1P2/nPp5/k2PP3/2P5/PB3KP1/8 w - - 1 33",
    score: -13.2,
  },
  {
    lichess: "https://lichess.org/Ow58bJX4",
    fen: "r1bq1rk1/1p1n2bp/2p3p1/p4p2/P2Pp3/2P1P1PP/3N1PB1/R1BQ1RK1 w - a6 0 14",
    score: 1.2,
  },
  {
    lichess: "https://lichess.org/dh5kgxDK",
    fen: "1r3bk1/3n1pp1/2Qpbq1p/1P2p3/1B2P3/5N1P/4BPP1/2R3K1 w - - 3 23",
    score: 3.9,
  },
  {
    lichess: "https://lichess.org/VYxBipUN",
    fen: "r4rk1/3n1ppp/3q1n2/2pb4/3p4/1P1P1NP1/P4PBP/R1BQR1K1 w - - 0 18",
    score: 1.4,
  },
  {
    lichess: "https://lichess.org/znxCtYrm",
    fen: "r4rk1/1p1bq3/p2p2p1/2pPbpPp/2P1pBnP/2N1P1P1/PP1QB3/1R2K2R w K - 2 24",
    score: 0.5,
  },
  {
    lichess: "https://lichess.org/CvcHbZFm",
    fen: "3r2k1/6bp/p5p1/1p1b1p2/6B1/1P6/P1r2PPP/1RB2RK1 w - f6 0 24",
    score: -3.6,
  },
  {
    lichess: "https://lichess.org/hKw7jTYA",
    fen: "2b3k1/b2N2pp/p1n1pp2/1pNn4/8/PP2P1BP/2B2PP1/5K2 w - - 0 30",
    score: -0.2,
  },
  {
    lichess: "https://lichess.org/eCz2Z5pP",
    fen: "r1r3k1/1q2bpp1/b3pn1p/8/pP6/P3P3/1B1NBPPP/R2Q1RK1 w - - 2 20",
    score: 2.3,
  },
  {
    lichess: "https://lichess.org/b5L1NcUo",
    fen: "r1b1kb2/8/p1p1p1r1/8/4Q3/2P5/PP2B1qP/R3K2R w KQq - 0 24",
    score: 0.3,
  },
  {
    lichess: "https://lichess.org/Y2rY2pVu",
    fen: "r1b2rk1/p4ppp/1p2p1n1/4P2Q/1P1p4/2qB1N2/2P2PPP/1R3K1R w - - 0 17",
    score: -1.2,
  },
  {
    lichess: "https://lichess.org/kyBrofmE",
    fen: "r4rk1/ppqnbppp/2p2n2/2PppbB1/3P4/2N1PN2/PP2BPPP/R2Q1RK1 w - - 0 12",
    score: 0.3,
  },
  {
    lichess: "https://lichess.org/C3YLNAwo",
    fen: "r1bqk2r/p3bppp/2p1pn2/8/2PpP3/2NB4/PP2QPPP/R1B1K2R w KQkq - 0 10",
    score: -1.3,
  },
  {
    lichess: "https://lichess.org/hqHUR14b",
    fen: "r3r1k1/6p1/1pqb2np/4pp2/1pPp4/P2P2PN/1B1Q1P1P/2R1R1K1 w - - 0 28",
    score: -5,
  },
  {
    lichess: "https://lichess.org/AW8dqp2a",
    fen: "5r1k/6p1/1p1p2b1/p1p1p2p/2P1P1P1/P3QrqP/1P4B1/R4NK1 w - - 0 29",
    score: -4.7,
  },
  {
    lichess: "https://lichess.org/HE4vBDyc",
    fen: "r1bqr1k1/pp1n1pb1/2np2p1/2pN4/3P4/4BN2/PPPQ2PP/2KR1B1R w - - 2 14",
    score: 3.3,
  },
  {
    lichess: "https://lichess.org/T9B7ZssS",
    fen: "2rq1rk1/pp2bppp/2n2n2/3pN3/3P1B2/7P/PP2NPP1/R2Q1RK1 w - - 1 14",
    score: 0.2,
  },
  {
    lichess: "https://lichess.org/cE56ao3E",
    fen: "2r3k1/7p/5Bp1/pppqP3/3p1P2/P6P/1P4P1/3QR2K w - - 0 38",
    score: 9.8,
  },
  {
    lichess: "https://lichess.org/WXjGKgwq",
    fen: "b2r2k1/R2n1pbp/6p1/1p2p3/2p1P3/2P2NNP/1PB2PP1/6K1 w - - 4 26",
    score: -0.3,
  },
  {
    lichess: "https://lichess.org/wsqChAft",
    fen: "r1b2r1k/2q1bpp1/p2ppn1p/1p2nP1P/3NPB2/2N3Q1/PPP3P1/2KR1B1R w - b6 0 15",
    score: -1,
  },
  {
    lichess: "https://lichess.org/1vliDZkG",
    fen: "r1bq1rk1/pp2bppp/2np4/2p1p3/4P3/3P1N2/PPP1BPPP/R1BQK2R w KQ - 0 8",
    score: -1,
  },
  {
    lichess: "https://lichess.org/PybLesLF",
    fen: "8/ppp2rbk/3p3p/1P1Np1p1/2P1P3/3PB3/P3KP2/1R3R2 w - - 1 26",
    score: 12.4,
  },
  {
    lichess: "https://lichess.org/9JCo1C1s",
    fen: "r1b2rk1/q3bpp1/2p1p2p/p1Pp4/1P6/P3PNB1/4QPPP/2R2RK1 w - - 3 19",
    score: 0,
  },
  {
    lichess: "https://lichess.org/GnVQD87b",
    fen: "5rk1/pbnq1rb1/3p2p1/2p1pPp1/2PnP3/2N1B1N1/PP1Q1RB1/5RK1 w - - 0 22",
    score: 2.2,
  },
  {
    lichess: "https://lichess.org/fz1NNuPK",
    fen: "2r1k2r/p1q2p1p/4p3/2np2p1/1Q6/2P2P2/PP1N1B1P/R5K1 w k - 3 19",
    score: -4.1,
  },
  {
    lichess: "https://lichess.org/7s3EZ91p",
    fen: "r1b1rnk1/1p2q1bp/p1pp1p2/5p2/PPPP2pP/2NQP1P1/4NPB1/R4RK1 w - - 1 18",
    score: 6.5,
  },
  {
    lichess: "https://lichess.org/WPtCjP0b",
    fen: "rn3b1r/pp2pkpp/2p5/q4b2/4Q3/5N2/PPPP1PPP/R1B1K2R w KQ - 0 9",
    score: -4.5,
  },
  {
    lichess: "https://lichess.org/MOsNJsQM",
    fen: "rn2k2r/ppp2ppp/3p1n2/8/3PPB1q/2N4b/PPP3R1/R2Q2NK w kq - 0 14",
    score: -2,
  },
  {
    lichess: "https://lichess.org/I2mpmoU2",
    fen: "3q1rk1/3n1ppp/4p1b1/2b5/1r6/2NPPn1P/PP3P2/R1BQKBR1 w Q - 0 19",
    score: -3.3,
  },
  {
    lichess: "https://lichess.org/nAKRaBZH",
    fen: "2kr2r1/pp1q1p2/1bp2pbp/3pp3/3PP3/1PPQ1NNP/1P3PP1/R3R1K1 w - - 2 20",
    score: -1.6,
  },
  {
    lichess: "https://lichess.org/J6RIEu3M",
    fen: "2kr1b1r/pppqnppp/2n5/4P3/2Pp1Bb1/PN3N2/1P2PPPP/R2QKB1R w KQ - 3 9",
    score: -0.5,
  },
  {
    lichess: "https://lichess.org/URU70ku0",
    fen: "r2q1r1k/p3bppp/2p1pn2/1pn5/2P2P2/3PP2P/PBQ1BP2/RN2K1R1 w Q b6 0 14",
    score: 1.4,
  },
  {
    lichess: "https://lichess.org/tUb1iZpO",
    fen: "3r1rk1/pp2ppb1/1q3np1/7p/2B4Q/1P3R2/P1P1N1PP/5R1K w - - 0 19",
    score: -2.1,
  },
  {
    lichess: "https://lichess.org/H3c0hqTv",
    fen: "r4rk1/1bqn1pp1/p3p3/2b1P2Q/1n3B2/1NN1R3/1PP3PP/5RK1 w - - 4 21",
    score: 0,
  },
  {
    lichess: "https://lichess.org/Pq7denbp",
    fen: "8/5pk1/p5r1/R7/8/2P5/P4KP1/8 w - - 4 41",
    score: 0.5,
  },
  {
    lichess: "https://lichess.org/02j8qFbK",
    fen: "1r4k1/p1q1pp1p/2p2bp1/PrPp4/3P4/3QPN1P/5PP1/R1R3K1 w - - 1 21",
    score: -0.5,
  },
  {
    lichess: "https://lichess.org/tfeyjlXg",
    fen: "6k1/6p1/2p2n1p/5p2/2Pp4/1N4Pb/4rP1P/R5KB w - - 0 26",
    score: 0.4,
  },
  {
    lichess: "https://lichess.org/EHI6EyUx",
    fen: "r1bq1rk1/p3ppbp/1p1p2p1/n1p5/P1PPP3/2P5/2QNBPPP/R1B2RK1 w - - 3 14",
    score: -1,
  },
  {
    lichess: "https://lichess.org/9bbGtFrR",
    fen: "r2q1rk1/pp4bp/2np2p1/2p1pp2/2P1PP2/2NPB1P1/PP1Qn1KR/R7 w - - 0 17",
    score: -2.9,
  },
  {
    lichess: "https://lichess.org/3DhH0Xo7",
    fen: "r3r1k1/p2n1pb1/1p1q1n2/3P1PB1/2BPp3/8/PP4PP/2R1QRK1 w - - 3 22",
    score: 0.3,
  },
  {
    lichess: "https://lichess.org/X7fKs4mL",
    fen: "b3k2r/3npp1p/1n4p1/q1ppb2P/1p1P1BP1/1P2PP2/2P1B3/3QK1NR w Kk - 0 18",
    score: 1.1,
  },
  {
    lichess: "https://lichess.org/qR50JTgA",
    fen: "r4n1k/pp4pp/2p1p1b1/3pP3/3q4/2NB3Q/PPP3PP/5R1K w - - 2 20",
    score: -2.8,
  },
  {
    lichess: "https://lichess.org/4jEurWXw",
    fen: "2rq1rk1/3b2bp/3p1np1/p2Ppp2/1p2P3/1P1BBP2/P2QN1PP/2R2RK1 w - - 2 20",
    score: 0.1,
  },
  {
    lichess: "https://lichess.org/R14ZG62O",
    fen: "8/5p1p/1K2k1p1/4P3/1b6/4PN2/5PPP/8 w - - 1 33",
    score: 4.6,
  },
  {
    lichess: "https://lichess.org/iXFiUK7x",
    fen: "2kr3r/ppp2ppp/3bp3/3n4/2BP4/2P2PB1/PP3P1P/2KR3R w - - 6 14",
    score: -0.2,
  },
  {
    lichess: "https://lichess.org/4prLXXlK",
    fen: "r1b1kbr1/pp3p1p/1n1qpQp1/4n1N1/8/1BPp4/PP3PPP/RNB2RK1 w q - 4 14",
    score: 1.6,
  },
  {
    lichess: "https://lichess.org/K3mq0eri",
    fen: "3q1rk1/4n3/3p2p1/2p2p1p/p1NbPP1P/3P3B/PpQ2R2/6K1 w - - 2 28",
    score: -8.4,
  },
  {
    lichess: "https://lichess.org/p24TaDFu",
    fen: "r2qrbk1/1p3ppn/3p2np/1P1Pp3/1p2P3/4BN1P/2Q2PP1/1R2RBK1 w - - 0 22",
    score: 2.6,
  },
  {
    lichess: "https://lichess.org/wbmZ9dJL",
    fen: "r2q1rk1/pbpn1p1p/1p1p2p1/3P4/2P2P2/1PN1nNP1/P5BP/R2Q1RK1 w - - 1 15",
    score: -0.7,
  },
  {
    lichess: "https://lichess.org/1ZPiXAGu",
    fen: "1r1kr3/p1q3pp/2pb1pb1/3pn3/QP6/2P2PB1/P1BN2PP/4RR1K w - - 3 20",
    score: 1.4,
  },
  {
    lichess: "https://lichess.org/CBgrGL0s",
    fen: "r1b2rk1/ppp2pp1/2np1qnp/1Bb1p3/4P3/3P1N1P/PPP2PP1/R1BQRNK1 w - - 1 10",
    score: 0,
  },
  {
    lichess: "https://lichess.org/6vcSYALS",
    fen: "rnb2rk1/pp2q1pp/1npbPp2/3p1P2/3P4/2NB1N2/PP4PP/R1BQ1RK1 w - - 5 13",
    score: 7.2,
  },
  {
    lichess: "https://lichess.org/9teDwReu",
    fen: "3k4/1p6/ppp1r3/5pP1/1Pn2K2/P1N4P/2P5/6R1 w - - 2 29",
    score: 8.1,
  },
  {
    lichess: "https://lichess.org/DHnvM02u",
    fen: "rnbq1rk1/ppp2pbp/5np1/4p3/2P1P3/2N2N2/PP2BPPP/R1BQK2R w KQ - 0 8",
    score: 0,
  },
  {
    lichess: "https://lichess.org/rFhEmGIB",
    fen: "1r1q1rk1/pB1nppbp/1p1p2p1/3P4/4P3/1Q2BP2/PP4PP/2R1K2R w K - 4 16",
    score: -0.6,
  },
  {
    lichess: "https://lichess.org/z80oYyh2",
    fen: "r1br2k1/p1n1bppp/1pp1p3/4P3/2P5/1P4P1/PB3PBP/RN2K2R w KQ - 0 13",
    score: 2.9,
  },
  {
    lichess: "https://lichess.org/CfxQ8w23",
    fen: "2kr2n1/p1qnbpp1/2p1p1p1/1pP3P1/3PN3/3B1Q1P/PP3PK1/2R2R2 w - - 4 24",
    score: 8.8,
  },
  {
    lichess: "https://lichess.org/8BNLnDxT",
    fen: "2rq1rk1/pb1nbpp1/1pp1pn1p/3p4/2PP4/1PN1PN1P/PB2BPP1/2RQ1RK1 w - - 0 12",
    score: 0.2,
  },
  {
    lichess: "https://lichess.org/pGmOuVfE",
    fen: "r1br2k1/1nq1ppbp/1p4p1/8/3N4/B1PBP3/P3QPPP/R4RK1 w - - 4 16",
    score: 1,
  },
  {
    lichess: "https://lichess.org/4ibMKWpf",
    fen: "rn1qr1k1/p4ppp/bpp2n2/3pN3/1b1PP3/2N3P1/PP3PBP/R1BQR1K1 w - - 1 12",
    score: 4.5,
  },
  {
    lichess: "https://lichess.org/j5ertnjY",
    fen: "1r6/pP2rppk/7p/2pB1P2/8/1P5P/2P2PP1/R5K1 w - - 3 30",
    score: 7.4,
  },
  {
    lichess: "https://lichess.org/NKMeA9W5",
    fen: "r5k1/5p1p/1prpqnp1/2n1p3/P1P1P3/1P2BP2/3N2PP/R2QR1K1 w - - 0 22",
    score: 5.9,
  },
  {
    lichess: "https://lichess.org/RSGhTAdw",
    fen: "6rk/1p1b3p/p7/2pPb2p/Pn2Pp1q/2N2PrP/1P1RQ1PB/3N1R1K w - - 2 31",
    score: -1.1,
  },
  {
    lichess: "https://lichess.org/vKTNP3Yo",
    fen: "r5k1/5pb1/p1q3p1/Bp5p/4b3/4R1Q1/2P2P1P/1R4K1 w - - 2 24",
    score: -3.7,
  },
  {
    lichess: "https://lichess.org/B7aXkcCZ",
    fen: "r3k3/ppqn1pp1/2n1p1p1/1Q1pP2r/8/1P3N1P/PBP2P2/2KR3R w q - 5 18",
    score: -2.6,
  },
  {
    lichess: "https://lichess.org/53m75USR",
    fen: "2rq1rk1/pb1n1ppp/1p2p3/3pN3/P2PnP2/2NB4/1P3PPP/2RQ1RK1 w - - 3 14",
    score: 0.3,
  },
  {
    lichess: "https://lichess.org/905hh1cw",
    fen: "r1bq1rk1/pp2ppbp/3p1np1/8/2PQ4/2N3P1/PP2PPBP/R1B2RK1 w - - 0 10",
    score: 0.7,
  },
  {
    lichess: "https://lichess.org/RKuckper",
    fen: "5r1k/p1Q3pp/1pb5/7N/4p1q1/6RP/PP4P1/4Rr1K w - - 1 31",
    score: 1.1,
  },
  {
    lichess: "https://lichess.org/wHfdjK1h",
    fen: "3q1r1k/p4ppp/r2p4/3NP3/2P2Pb1/4Q3/2P3PP/2KRR3 w - - 1 25",
    score: 1,
  },
  {
    lichess: "https://lichess.org/LEBWQzP7",
    fen: "4R3/3r2p1/1kp2p2/pp4p1/8/2PN1nPP/PPK2P2/8 w - - 1 34",
    score: 0.7,
  },
  {
    lichess: "https://lichess.org/22WfGBil",
    fen: "r4rk1/2qn1bb1/2p3pp/1pPp4/pP1Pp2N/P1N1P1nP/1Q4P1/R2BBRK1 w - - 4 25",
    score: -0.9,
  },
  {
    lichess: "https://lichess.org/QzMlEKkA",
    fen: "r4rk1/1p1n1ppp/p7/2p2p2/3pNP2/1P1PPR2/P2P2PP/R5K1 w - - 0 17",
    score: 0.7,
  },
  {
    lichess: "https://lichess.org/9ffv3Bqh",
    fen: "rn3rk1/2qnppbp/2p3p1/p3P3/1p3N2/3QBN1P/PPP2PP1/3R1RK1 w - - 1 16",
    score: 7.5,
  },
  {
    lichess: "https://lichess.org/mnE6VFgx",
    fen: "4kb2/3n1p2/p7/4p3/Np1p2PP/1P3P2/P1R5/6K1 w - - 0 29",
    score: 8,
  },
  {
    lichess: "https://lichess.org/cakofpZj",
    fen: "5b2/4pk2/4Np1p/6p1/3P4/4P1P1/r4PP1/2R3K1 w - - 4 33",
    score: 1.5,
  },
  {
    lichess: "https://lichess.org/qPe7cD8j",
    fen: "2rrb1k1/4bpp1/3npn1p/p1Np4/1p1P4/1P2P1P1/P4PBP/1NRQR1K1 w - - 1 25",
    score: 7.2,
  },
  {
    lichess: "https://lichess.org/eYl8vlSL",
    fen: "r2qkb1r/1p4pp/2n1bn2/p1p2p2/P2pp3/1N1P2P1/1PP1PPBP/RNBQ1RK1 w kq - 1 11",
    score: 0.3,
  },
  {
    lichess: "https://lichess.org/fs8014rQ",
    fen: "6k1/1p2q1pp/p1p1r3/3p4/1P1P1P2/P1R1P1r1/4K1QP/8 w - - 0 27",
    score: -0.5,
  },
  {
    lichess: "https://lichess.org/rsQLQnsy",
    fen: "1n3rk1/4bp2/r1p1p1p1/4P3/P2PpP1p/3qB2P/Q3N1P1/R4RK1 w - - 7 24",
    score: 1.7,
  },
  {
    lichess: "https://lichess.org/6CjLf4xQ",
    fen: "3R4/2r2k2/6p1/7p/3P3P/2p1KP2/n7/2R5 w - - 10 51",
    score: -2.7,
  },
  {
    lichess: "https://lichess.org/JngoXQqL",
    fen: "3r4/1k2bppp/4pn2/P7/1Pp1PPn1/B1Pb2P1/3N2P1/3RR1K1 w - - 3 30",
    score: -2.9,
  },
  {
    lichess: "https://lichess.org/tva5ml7H",
    fen: "3r3k/ppp3pp/4P3/1P2r3/P7/1Q2p2P/4PqB1/6RK w - - 3 33",
    score: -3.4,
  },
  {
    lichess: "https://lichess.org/uBfHIEqp",
    fen: "rn3rk1/p4ppp/1p2p3/2b5/2B2B2/P3Pq2/1P3PPP/2R2RK1 w - - 0 15",
    score: 1.4,
  },
  {
    lichess: "https://lichess.org/o0G5vS2x",
    fen: "1k1r3r/pppbb3/1q6/5p1p/2QNnBp1/2P1P2P/PP2BPP1/R3K2R w KQ - 2 23",
    score: 0.6,
  },
  {
    lichess: "https://lichess.org/yxNt4CSW",
    fen: "1k1r3r/pp2Q2p/2p2p2/3Pp2P/8/4B3/q1P2PP1/2KR3R w - - 0 22",
    score: 5.3,
  },
  {
    lichess: "https://lichess.org/5WJTOKGU",
    fen: "r1bq1rk1/pp3pb1/1nnP2pp/4p3/4QB1P/2N2N2/PPP2PP1/2KR1B1R w - e6 0 13",
    score: 0.7,
  },
  {
    lichess: "https://lichess.org/NFRpiZ9X",
    fen: "3rk2r/1p1n1pp1/4p1b1/1p1p2Pp/1NpPPb2/P1P2P2/1P1N2BP/R3K2R w KQk - 1 18",
    score: -1.8,
  },
  {
    lichess: "https://lichess.org/ZKiUHQMc",
    fen: "2r2rk1/3qb1pp/p1Np1n2/1p1Pp2n/8/4BP2/PPPQ3P/2KR1B1R w - - 4 18",
    score: 3.4,
  },
  {
    lichess: "https://lichess.org/iV9DqyOg",
    fen: "r1b2rk1/1p1n1pbp/2pN2p1/p3p3/2P5/5NPP/n3PPB1/1RB2RK1 w - - 0 16",
    score: -2.6,
  },
  {
    lichess: "https://lichess.org/zqmkv7jC",
    fen: "4rr2/pp4kp/3p2p1/2pbb3/P3P3/1P3N1P/2KR2P1/7R w - - 0 29",
    score: -1.9,
  },
  {
    lichess: "https://lichess.org/huGbNtWm",
    fen: "r2q1rk1/1pp3bp/3p2p1/p1nPpb1n/2P5/P1N1BP2/1PB1N1PP/R2Q1RK1 w - - 0 14",
    score: 1.2,
  },
  {
    lichess: "https://lichess.org/NEQc1vto",
    fen: "r2q1r1k/p1p3pp/2p2n2/3p4/3b4/2NQ3P/PPP2PP1/R4RK1 w - - 0 16",
    score: 0.2,
  },
  {
    lichess: "https://lichess.org/4ydY7IJY",
    fen: "r1bqkn1r/pp2bp2/2p3p1/3pPpPp/3P3P/3B1P2/PPP1N3/R1BQK2R w KQkq - 4 14",
    score: -0.2,
  },
  {
    lichess: "https://lichess.org/QfbfOUYH",
    fen: "r3kb1r/pR1np1pp/3p2p1/2p1qb2/2B1P3/8/2PN1PP1/1Q2K1NR w Kkq - 3 15",
    score: 11.1,
  },
  {
    lichess: "https://lichess.org/RFdaqkyA",
    fen: "2kr3r/pbq1bppp/1pn1pn2/2pp4/4P3/2PP1NP1/PPQN1PBP/R1B1R1K1 w - - 1 11",
    score: 1.2,
  },
  {
    lichess: "https://lichess.org/siPmQAWT",
    fen: "2r3k1/p4pp1/2p3r1/3p2qp/3P4/P2QP1P1/2R2P1P/2R3K1 w - - 2 28",
    score: 0.3,
  },
  {
    lichess: "https://lichess.org/RlVZ7BNT",
    fen: "2rb4/R5pp/3pk3/3Npp2/1PP5/5P2/3K2PP/8 w - - 1 29",
    score: 4.3,
  },
  {
    lichess: "https://lichess.org/CtNOWU1V",
    fen: "2rq1rk1/1p1b1p2/p1n2bpp/2p5/2N3P1/4B2P/PP2B3/2RQ1RK1 w - - 0 24",
    score: -0.5,
  },
  {
    lichess: "https://lichess.org/eG5PsksB",
    fen: "2rq1rk1/1b1nbppp/p2pp3/1p6/3NP3/P1N5/1PP2PPP/R1BQR1K1 w - - 3 14",
    score: -1.8,
  },
  {
    lichess: "https://lichess.org/YvK4Autx",
    fen: "r3r1k1/1pq2pp1/p2p1bnp/P1pPn3/2B1P3/R4NPP/1PQB1PK1/4R3 w - - 2 21",
    score: 1.1,
  },
  {
    lichess: "https://lichess.org/ZJSJs4tu",
    fen: "5r2/2b2pk1/2n1p1p1/p1q1P1Np/4p2P/2B3P1/3R2K1/Q7 w - - 0 38",
    score: -4.7,
  },
  {
    lichess: "https://lichess.org/icP721d7",
    fen: "2rqkb1r/3n1pp1/p3p2p/1p1b4/3N2P1/P3BP2/1PPQ3P/2KR1B1R w k - 0 15",
    score: -0.1,
  },
  {
    lichess: "https://lichess.org/PwXfSTLL",
    fen: "r3N2k/pp3Qb1/8/6r1/2P3p1/3p4/PP4PP/5RK1 w - - 0 30",
    score: 13.6,
  },
  {
    lichess: "https://lichess.org/xcTn90RQ",
    fen: "r1bqk2r/pp2npbp/6p1/2pp4/5N2/3P2P1/PPP2PBP/R1BQ1RK1 w kq - 2 11",
    score: 1.3,
  },
  {
    lichess: "https://lichess.org/9nrOwNaA",
    fen: "r1b1r1k1/p4pbp/3p1np1/q7/2pNP1P1/2N1BP2/PP1Q3P/1K1R3R w - - 0 16",
    score: 2.9,
  },
  {
    lichess: "https://lichess.org/NUVZcNO9",
    fen: "6k1/1p6/8/1RPp3p/3Pp3/3r2P1/6K1/8 w - - 1 40",
    score: 0.1,
  },
  {
    lichess: "https://lichess.org/IgP3N56z",
    fen: "r1q2bkr/pp2p1pp/2n2n2/1NppNb2/3P4/3B4/PPP2PPP/R1BQ1RK1 w - - 2 10",
    score: 1.9,
  },
  {
    lichess: "https://lichess.org/EefCzW44",
    fen: "Rn2rb1r/1pk5/2p1B3/4pP1p/6p1/2P1B3/1P3P1P/5RK1 w - - 2 23",
    score: 2.7,
  },
  {
    lichess: "https://lichess.org/zAIdLR8F",
    fen: "5rk1/3R1ppp/1p2p3/p1b3N1/2P5/1P4P1/PB3nKP/8 w - - 2 25",
    score: 4.9,
  },
  {
    lichess: "https://lichess.org/FIarPbde",
    fen: "r1b1r1k1/p1p2pbp/2pqp1p1/6B1/3P3Q/2PB4/P4PPP/R3R1K1 w - - 6 17",
    score: 0,
  },
  {
    lichess: "https://lichess.org/qBtJwXwy",
    fen: "5rk1/p3q1p1/1ppb1n2/3p3p/1PPPp1pP/P3P1P1/1BQ2P2/R3K2R w KQ - 0 23",
    score: 2.5,
  },
  {
    lichess: "https://lichess.org/zNYTn0pa",
    fen: "r1bqkb1r/p4ppp/2p2n2/nB2p1N1/8/8/PPPP1PPP/RNBQK2R w KQkq - 0 8",
    score: 0,
  },
  {
    lichess: "https://lichess.org/llpNEmcT",
    fen: "1r6/5pk1/1qp1p2p/3p1p2/RP1PbP2/2Q1P2P/4BKP1/8 w - - 0 24",
    score: 0.1,
  },
  {
    lichess: "https://lichess.org/I5Nuk01R",
    fen: "r3k2r/1pq1bp2/p1bppn2/6p1/4P1P1/P1N2Q2/1PP2B1P/2KR1B1R w kq - 0 16",
    score: 0.4,
  },
  {
    lichess: "https://lichess.org/dy0a00JB",
    fen: "5n2/3bp2p/3p2k1/3P1p2/5P2/1NbBK3/1P4PP/8 w - - 0 33",
    score: 2.9,
  },
  {
    lichess: "https://lichess.org/T3nSDWPF",
    fen: "r2r4/1p2k2p/2n3p1/pNP1pp2/1P2Pb2/P1P2N2/1K2R1PP/R7 w - - 8 25",
    score: 6.3,
  },
  {
    lichess: "https://lichess.org/1jR1yupz",
    fen: "2kr3r/pp1bnpp1/2n1p2p/3pP2P/q1pP1P2/P1P2N2/2PBB1P1/RQ2K2R w KQ - 3 14",
    score: 0.9,
  },
  {
    lichess: "https://lichess.org/1e8aaZSW",
    fen: "3r2k1/4npp1/r2p3p/pRpPp3/P3P3/6P1/3N1P1P/1R4K1 w - - 1 28",
    score: 5.3,
  },
  {
    lichess: "https://lichess.org/W337e4oL",
    fen: "r1b1k1nr/ppp2ppp/2np4/8/1b1NP2q/2N5/PPP1BPPP/R1BQK2R w KQkq - 0 7",
    score: 1.9,
  },
  {
    lichess: "https://lichess.org/Bq7TPEp9",
    fen: "2q1k2r/5pb1/ppn1p2p/3pP1pP/1PnP2P1/P2B1QN1/5P2/2B2RK1 w k - 2 24",
    score: 0.9,
  },
  {
    lichess: "https://lichess.org/zSHgwDj5",
    fen: "r1b2rk1/4ppbp/1qpp2p1/4n3/p3P3/2N3QP/PPP1BPP1/R1B2R1K w - - 0 15",
    score: -0.5,
  },
  {
    lichess: "https://lichess.org/uGpNyfzC",
    fen: "1r4k1/5p2/6p1/p1pn3p/2B4P/5P2/P1Pb2P1/3R3K w - - 0 30",
    score: -0.2,
  },
  {
    lichess: "https://lichess.org/WMIe8l7j",
    fen: "r1b2rk1/ppp3pp/2np3q/5p2/2P1p1n1/PPBBPQPP/3P1P2/2R1K1NR w K - 0 13",
    score: -0.9,
  },
  {
    lichess: "https://lichess.org/94NxTPra",
    fen: "8/1R6/4p1kp/3p4/5PP1/2P5/1Pr2K2/8 w - - 1 41",
    score: 2.3,
  },
  {
    lichess: "https://lichess.org/s5MU2Boh",
    fen: "r1br2k1/pp3ppp/4p3/2B1P3/2P1n3/2P5/P3BPPP/R4RK1 w - - 0 15",
    score: 3.5,
  },
  {
    lichess: "https://lichess.org/eHxIAP80",
    fen: "r2qk2r/1p1nbppp/p2p4/4pPP1/2Bn4/2N1B3/PPP2P1P/R2QK2R w KQkq - 3 12",
    score: 2.5,
  },
  {
    lichess: "https://lichess.org/CSRU9gj6",
    fen: "r3r1k1/p4pb1/3p2p1/1pp3N1/4P2R/1bP5/3B1PP1/2K4R w - - 0 26",
    score: -5.4,
  },
  {
    lichess: "https://lichess.org/b3y8JMnQ",
    fen: "2kr3r/pp1b3p/4pq1P/2PQ1p2/8/5Np1/PP6/R1K1R3 w - - 1 27",
    score: -8.7,
  },
  {
    lichess: "https://lichess.org/70lEP2tV",
    fen: "2r1k2r/1p1bbpp1/pqn1p1n1/3pP3/1P1N3p/PN1B2P1/1BP1QP2/R3R1K1 w k - 0 17",
    score: -0.5,
  },
  {
    lichess: "https://lichess.org/qLjNUycP",
    fen: "6k1/2pR2p1/p1p1n2p/4pr2/4N3/1PP1P2P/P5P1/6K1 w - - 2 28",
    score: 7,
  },
  {
    lichess: "https://lichess.org/vkTGwcA8",
    fen: "r4rk1/1b3ppp/4p3/pB1nq3/8/P7/1PRB1PPP/3Q1RK1 w - - 2 20",
    score: 0.8,
  },
  {
    lichess: "https://lichess.org/wayGcLNS",
    fen: "8/p2b2k1/1p3p2/2p2P2/3p1NP1/5K2/PP6/8 w - - 0 34",
    score: -4.1,
  },
  {
    lichess: "https://lichess.org/nwkzROZw",
    fen: "4n1k1/1p4bp/2q1p1p1/p7/8/6BP/1P2QPP1/3R2K1 w - - 1 29",
    score: 6.3,
  },
  {
    lichess: "https://lichess.org/2pPcS3M3",
    fen: "r2q1rk1/pp3p1p/3b1pb1/1P1p4/4p3/4N3/PP3PPP/R2Q1RK1 w - - 0 15",
    score: -7.7,
  },
  {
    lichess: "https://lichess.org/z5KkNLsY",
    fen: "r3r3/ppp2p2/1b1p1k1p/3Pp1pP/6P1/2PPB3/PP3P2/R3K2R w KQ - 1 20",
    score: 0.3,
  },
  {
    lichess: "https://lichess.org/GeZxUN1P",
    fen: "2rr4/p3k2p/1p2ppp1/8/3P1P2/P6P/1P3KP1/2R1R3 w - - 3 27",
    score: -0.2,
  },
  {
    lichess: "https://lichess.org/bFTiLZSj",
    fen: "1k5r/ppp2p1p/2nr1p2/8/3NQ3/2qP4/P5PP/1R3R1K w - - 0 21",
    score: 2.8,
  },
  {
    lichess: "https://lichess.org/Xlu6fQBR",
    fen: "8/1p1Q4/2n4k/p7/2P5/3b1q2/PP3P2/4RK2 w - - 2 30",
    score: 1.2,
  },
  {
    lichess: "https://lichess.org/0uBrpBmn",
    fen: "3q1rk1/1p1n1ppp/pn1bp1b1/8/1P2P3/1Q1PBNP1/1N3PBP/2R3K1 w - - 1 23",
    score: 1.4,
  },
  {
    lichess: "https://lichess.org/V7D3iLZZ",
    fen: "r2q1rk1/1ppb2b1/3p2pp/2nPpp2/p1P1Pn2/P1N1BN1P/1P3PPK/1R1QRB2 w - f6 0 18",
    score: 2.3,
  },
  {
    lichess: "https://lichess.org/3FrzhrIL",
    fen: "5rk1/4qpp1/p1p1r2p/1p2P2P/3P1R2/P1P2Q2/1P4P1/5RK1 w - - 2 31",
    score: 4.4,
  },
  {
    lichess: "https://lichess.org/nVyDXMyb",
    fen: "8/1p6/5r2/2P5/pP6/P2k1P2/1K3R2/8 w - - 0 41",
    score: 3,
  },
  {
    lichess: "https://lichess.org/pHGCv4NL",
    fen: "r2q1rk1/pbpn1pbp/1p4p1/3p3P/3P4/2NBPN2/PPQ2PP1/R3K2R w KQ - 1 13",
    score: 0.3,
  },
  {
    lichess: "https://lichess.org/UpPv7d3u",
    fen: "r4r1k/p1q1p1bp/1pn3p1/2n3B1/2QpPP2/2N5/PP2B1PP/3R1RK1 w - - 1 18",
    score: 0.3,
  },
  {
    lichess: "https://lichess.org/DsZxnENz",
    fen: "rnbq3r/pp1kb1pN/4p3/2ppP3/3P2Qn/2PB4/PP3P1P/RNB1K2R w KQ - 1 11",
    score: 2,
  },
  {
    lichess: "https://lichess.org/pLeBRcs9",
    fen: "5r1k/1p3bp1/p4p1p/4nB2/4R1P1/4q3/P5P1/3R3K w - - 0 44",
    score: -0.3,
  },
  {
    lichess: "https://lichess.org/7JuD9rhp",
    fen: "8/6p1/1pk2p1p/p1p5/P2p2P1/1R1P1KP1/1Pr2P2/8 w - - 2 34",
    score: -8.1,
  },
  {
    lichess: "https://lichess.org/z0Ybng1M",
    fen: "r1b2rk1/pp2pp1p/2n3p1/2P3B1/2B1P3/2b2N2/P4PPP/3R1RK1 w - - 0 13",
    score: 0.9,
  },
  {
    lichess: "https://lichess.org/FJX4W9H2",
    fen: "1rbq1rk1/7p/p2p1Ppb/2pNp3/Q1P5/5N1P/1p3PP1/R3R1K1 w - - 0 21",
    score: -6.2,
  },
  {
    lichess: "https://lichess.org/Xf9JPpgA",
    fen: "r2q1k1r/pp4b1/4p2p/2p1P1p1/3n1P2/2N3P1/PPP3P1/R2QK1NR w KQ - 0 16",
    score: 4.9,
  },
  {
    lichess: "https://lichess.org/7EVGxkdk",
    fen: "r1bqk1nr/pppp1p1p/6p1/2b1P3/4P1Q1/2N5/PP3PPP/R1B1KB1R w KQkq - 0 10",
    score: 3.9,
  },
  {
    lichess: "https://lichess.org/G7UcIMj0",
    fen: "1r1qbrk1/5pp1/4pn1p/p2pR3/1p1P4/P1PB2NP/1P2QPP1/4R1K1 w - - 0 23",
    score: 0,
  },
  {
    lichess: "https://lichess.org/dRO1CqGE",
    fen: "4rrk1/ppp2ppp/2n1b3/3nPq2/5P2/4BB2/PPP3PP/R2Q1RK1 w - - 0 15",
    score: 0.8,
  },
  {
    lichess: "https://lichess.org/x5giHy3P",
    fen: "2kr3r/ppq2ppp/2p1pnb1/4N3/3Pn1P1/bPN3QP/P1P3B1/BK1R3R w - - 1 18",
    score: -0.4,
  },
  {
    lichess: "https://lichess.org/8Fmp1O7x",
    fen: "8/5k2/p1prp3/2q2p2/2P2PpP/1PQ3P1/P2R2K1/8 w - - 2 37",
    score: 0.8,
  },
  {
    lichess: "https://lichess.org/mrnJie5T",
    fen: "r1b1k2r/1p1nqp2/p1n1p1pp/2ppP3/3P1Q1P/2N2N2/PPP2PP1/R3KB1R w KQkq - 2 12",
    score: 0.2,
  },
  {
    lichess: "https://lichess.org/pfL3cCvp",
    fen: "r2qk2r/1p2bpp1/p1np2b1/5pPp/4P2P/2NBB3/PPPQ4/2KR3R w kq - 0 17",
    score: 8.9,
  },
  {
    lichess: "https://lichess.org/oCqnL4uw",
    fen: "r7/4Rpk1/5rpp/1pq5/p2p1Q2/3B2R1/2P2PPP/6K1 w - - 4 34",
    score: 0.1,
  },
  {
    lichess: "https://lichess.org/E7IGeObj",
    fen: "r2qkb1r/pb2n1pp/1p2p3/3pP3/2p2P2/2P5/PP2B1PP/RNBQ1RK1 w kq - 1 12",
    score: 0.7,
  },
  {
    lichess: "https://lichess.org/LeofdJu6",
    fen: "1r6/5ppk/2R1p1p1/3r4/pP1P2Pb/P6P/1B3P2/2R3K1 w - - 3 31",
    score: 4.8,
  },
  {
    lichess: "https://lichess.org/TziV5ILj",
    fen: "r1bq1rk1/p1p1bppp/2pp4/2PnP2P/8/8/PP2QPP1/RNB1KB1R w KQ - 1 12",
    score: -3.4,
  },
  {
    lichess: "https://lichess.org/pZiz8u9e",
    fen: "r2q1rk1/3nbppp/1pb1pn2/2pp4/P1P5/3PPNP1/PB1N1PBP/1R1Q1RK1 w - - 3 13",
    score: -0.7,
  },
  {
    lichess: "https://lichess.org/rjleATb6",
    fen: "r1q2rk1/pbp2ppp/np1p1b2/3PN3/QPB2B2/P1N3PP/5P2/R3K2R w KQ - 0 17",
    score: 0,
  },
  {
    lichess: "https://lichess.org/w81dxNg3",
    fen: "rnb2rk1/1p2ppb1/1qpp2pB/p7/4P1pP/2NN1Pn1/PPPQB3/2KR3R w - - 4 15",
    score: 0.5,
  },
  {
    lichess: "https://lichess.org/TzllgCMd",
    fen: "8/p4pk1/1p1rbp2/7p/8/P4P2/1PR1RKPP/8 w - - 0 34",
    score: 8.3,
  },
  {
    lichess: "https://lichess.org/TtnMmfMK",
    fen: "4k2r/1p2bpp1/1qp1p3/2Nn3p/1PQ2P2/r4KPP/P2B4/R3R3 w k - 1 23",
    score: -7.4,
  },
  {
    lichess: "https://lichess.org/yAvBL4n2",
    fen: "r2b4/5p1r/P3k2P/2p5/2PpN3/3K1P2/8/R6R w - - 5 47",
    score: 7.9,
  },
  {
    lichess: "https://lichess.org/2E0L0zsJ",
    fen: "3r2k1/1p3p1p/1p4p1/1Nr5/P1b5/1PK2P2/6PP/7R w - - 0 27",
    score: -6.3,
  },
  {
    lichess: "https://lichess.org/U9BsqkuP",
    fen: "5rk1/pp4pp/4p3/P7/3p3n/1P3PNP/2P2P2/3Q1K2 w - - 2 29",
    score: 7.7,
  },
  {
    lichess: "https://lichess.org/biZI3PwO",
    fen: "2r3k1/5p2/3np1p1/p2p2Pp/1prP1P1P/P1P3N1/1PR3K1/2R5 w - - 0 31",
    score: -2,
  },
  {
    lichess: "https://lichess.org/fGCqSwqg",
    fen: "1r3bk1/3Rnp1p/6p1/p7/1P6/P7/5PPP/5RK1 w - a6 0 24",
    score: 0,
  },
  {
    lichess: "https://lichess.org/pLBZI9Vn",
    fen: "3q1rk1/1R2pp1p/3p1np1/2rP4/2pQ1P2/8/2P2P1P/1RB3K1 w - - 4 27",
    score: -3.5,
  },
  {
    lichess: "https://lichess.org/X7Vp7uGQ",
    fen: "r2qr1k1/p4pbp/1p4p1/2pP1b2/2P1n3/2N1B2P/PP1QB1P1/R4RK1 w - - 0 17",
    score: -0.3,
  },
  {
    lichess: "https://lichess.org/crurmeEJ",
    fen: "1r2r1k1/5pbp/pn1p1pp1/q1p1n1P1/PpP1P3/3P3P/PB2N1B1/1R1Q1RK1 w - - 0 20",
    score: -2.7,
  },
  {
    lichess: "https://lichess.org/Y9HQ2v0r",
    fen: "rn3r2/1p3pkp/p2pp3/6Pp/4PPn1/1PN5/P1P1Q1B1/R1B1K1q1 w Q - 3 19",
    score: -4.7,
  },
  {
    lichess: "https://lichess.org/1YtvWYDG",
    fen: "1r3rk1/1b1p2b1/3Pp3/R3Ppp1/1P6/8/3B1PP1/R2qN1K1 w - - 0 29",
    score: 1.8,
  },
  {
    lichess: "https://lichess.org/0cd4ufZX",
    fen: "r1bq4/pp3kb1/2np2pp/2p5/4rP2/5N1P/PPP3P1/R1BQ1RK1 w - - 0 16",
    score: -6.7,
  },
  {
    lichess: "https://lichess.org/WZOU6m7Y",
    fen: "r4rk1/1pp3bp/p1n1q1p1/2Pp1n2/1P1P2B1/P1N1B2P/3Q1P2/2R2RK1 w - - 1 23",
    score: -1.7,
  },
  {
    lichess: "https://lichess.org/gDB2vhpH",
    fen: "r6r/pbp1kpp1/1p6/2pnP2p/4N1P1/5P1P/PPP4N/3R1RK1 w - - 0 18",
    score: -3,
  },
  {
    lichess: "https://lichess.org/L2CgBs3G",
    fen: "r2q1rk1/1bp1npb1/p2p2pp/np6/3PPB2/1BN2N1P/PP3PP1/R2Q1RK1 w - - 2 14",
    score: 0,
  },
  {
    lichess: "https://lichess.org/CdIehISh",
    fen: "1q4k1/5pbp/3n2p1/1p1P4/2p1R3/5B2/1P4PP/2Q4K w - - 1 28",
    score: -2.1,
  },
  {
    lichess: "https://lichess.org/sUIzz1rs",
    fen: "r2r2k1/1p2bppp/pnq1p3/4P3/2Pp1BQP/1P4P1/P2N1PK1/R4R2 w - - 1 20",
    score: 1.2,
  },
  {
    lichess: "https://lichess.org/otOoA0rT",
    fen: "8/5ppk/7p/2B5/1P1R1P2/7P/6P1/r4nK1 w - - 9 37",
    score: 5,
  },
  {
    lichess: "https://lichess.org/daIbRIPN",
    fen: "3r1rk1/ppq3pp/3b4/2pPpp2/4Q3/P1PN3P/1P3PP1/3RR1K1 w - f6 0 23",
    score: -1.6,
  },
  {
    lichess: "https://lichess.org/Q6nDCw0B",
    fen: "3q1rk1/1pp3pp/1r3p2/5b2/2P5/2Nn4/P2PBPPP/R1Q2RK1 w - - 6 18",
    score: -0.3,
  },
  {
    lichess: "https://lichess.org/jdZmPpSf",
    fen: "r2q1rk1/pp4b1/2n3pp/3n4/3p4/5NN1/PPPB1PPP/R2Q1RK1 w - - 2 18",
    score: 2.6,
  },
  {
    lichess: "https://lichess.org/fMZccWdw",
    fen: "2r5/1p4p1/5nkp/4p3/4P3/r1b1B3/P1P2PPP/1R3RK1 w - - 0 24",
    score: -5.5,
  },
  {
    lichess: "https://lichess.org/jMYHJA56",
    fen: "2rq1rk1/3n1pbp/4p1p1/p1ppP3/Pp1P1P2/1B1PQ2P/1P1B2P1/R3K2R w KQ - 0 19",
    score: -1.4,
  },
  {
    lichess: "https://lichess.org/nUBMjHCN",
    fen: "2r2r2/1p1n2kp/p1pqb3/3p2p1/PP1Pp3/4P2P/2QNNPP1/R4RK1 w - - 0 19",
    score: 0.1,
  },
  {
    lichess: "https://lichess.org/54rkh7Ns",
    fen: "2r2r2/p2np1k1/1p2bpp1/2p5/2PP2P1/1N3B2/PPR2P2/2K4R w - - 0 24",
    score: 1.7,
  },
  {
    lichess: "https://lichess.org/qpYYW0vW",
    fen: "2r2bk1/p3ppn1/Pp1p2p1/8/2rP1BP1/2P2P2/1P5N/R3R1K1 w - - 1 34",
    score: 0.5,
  },
  {
    lichess: "https://lichess.org/GvW8punB",
    fen: "3rr1k1/pp1n1ppp/3Bp1b1/q1ppP2n/3P3P/2N2P2/PPPQ2B1/2K3RR w - - 0 17",
    score: -2.2,
  },
  {
    lichess: "https://lichess.org/CJV2ILMO",
    fen: "3rk2r/pp3pp1/2n1b2p/2b5/4n3/4BNP1/PP2PPBP/R2N1RK1 w k - 4 13",
    score: 2.9,
  },
  {
    lichess: "https://lichess.org/kHSWU25M",
    fen: "r4rk1/1ppqnpp1/p3b2p/b2pP3/3P3B/2N2N2/PPQ2PPP/R3R1K1 w - - 1 19",
    score: 0,
  },
  {
    lichess: "https://lichess.org/js4wj94v",
    fen: "2rq1rk1/p2p2bp/1p1Pp1p1/2p1Pp2/P3nP2/3QBN2/1PP3PP/R4RK1 w - - 1 17",
    score: 1.7,
  },
  {
    lichess: "https://lichess.org/f6SirQeL",
    fen: "r1r3k1/1p3pbp/3p2p1/pq1Pp3/3nP3/1P2BPP1/P2Q1KBP/2R1R3 w - a6 0 27",
    score: 0.9,
  },
  {
    lichess: "https://lichess.org/hnhnIW31",
    fen: "r1b2rk1/1pp2pp1/pbnp1qnp/4p3/PPB1P3/2PP1N1P/3N1PP1/R1BQ1RK1 w - - 1 12",
    score: 0,
  },
  {
    lichess: "https://lichess.org/EDZLLHNo",
    fen: "r1b1k2r/pp6/1qn1pp2/3p2p1/1b1P2BP/5NP1/PP3P2/R1BQ1K1R w kq - 0 17",
    score: 1,
  },
  {
    lichess: "https://lichess.org/J3gsaeyF",
    fen: "r1k5/2p2p2/2pn2p1/8/2P5/1P1R2NP/3K2P1/8 w - - 3 31",
    score: 0.2,
  },
  {
    lichess: "https://lichess.org/YrODWDuy",
    fen: "4rr1k/pbp1q1pp/1p1p4/nN6/2P2p2/2P2BP1/P2QPP1P/3R1RK1 w - - 4 19",
    score: -2.1,
  },
  {
    lichess: "https://lichess.org/jKKyYWMs",
    fen: "5rk1/4q1pp/p2p4/1p2prP1/2n2n1P/1N3P2/PPP3Q1/1KBR1R2 w - - 4 24",
    score: -1.3,
  },
  {
    lichess: "https://lichess.org/HtjvEvWy",
    fen: "2kr1b1r/p4ppp/q1p1b3/3pp3/8/2N2P2/PPP3PP/R1B1KB1R w KQ - 0 14",
    score: 5.8,
  },
  {
    lichess: "https://lichess.org/GYT7Ahjk",
    fen: "2r5/Qpq1p1bk/4P1pp/3p4/3NbP2/4B3/PP4PP/5RK1 w - - 1 25",
    score: 0,
  },
  {
    lichess: "https://lichess.org/8PCu6B4K",
    fen: "rnbq1rk1/pp3pp1/4pn1p/2P5/2Pp3B/P1Q5/1P2PPPP/R3KBNR w KQ - 0 10",
    score: -0.5,
  },
  {
    lichess: "https://lichess.org/Vd9XUxhK",
    fen: "r2qkb1r/1pp2b2/p1n3p1/5p1p/3PpN1P/BP2P3/P2N1PP1/2RQK2R w Kkq - 4 17",
    score: 1.7,
  },
  {
    lichess: "https://lichess.org/XytCUGlG",
    fen: "5q2/1pNb1k2/3r2n1/3p1pQp/P1pP3P/2P3P1/5P2/4R1K1 w - - 6 32",
    score: -0.9,
  },
  {
    lichess: "https://lichess.org/lG36R5Fm",
    fen: "4k3/5p2/B2p1pp1/8/2P3r1/3n3b/P3NP1P/6KR w - - 3 29",
    score: -5.7,
  },
  {
    lichess: "https://lichess.org/aIiH8cUE",
    fen: "3r2k1/pp4p1/6p1/8/5p2/P1P1pP2/1P4PP/4R1K1 w - - 0 28",
    score: -0.6,
  },
  {
    lichess: "https://lichess.org/U47WznyL",
    fen: "3rr1k1/pb1qbp1p/1p2pnpB/2p5/3PN3/2PB1P2/PPQ3PP/R3R1K1 w - c6 0 15",
    score: -1.3,
  },
  {
    lichess: "https://lichess.org/MiWtq7tw",
    fen: "2r3k1/p1r2pbp/1p2p3/2qp1p2/8/P1PBP3/QP3PPP/3R1RK1 w - - 3 23",
    score: 0.1,
  },
  {
    lichess: "https://lichess.org/bFrD9KYN",
    fen: "r1bqk2r/pppp1p1p/2n2np1/2b1p3/2B1P3/2N2Q2/PPPP1PPP/R1B1K1NR w KQkq - 2 6",
    score: 0.7,
  },
  {
    lichess: "https://lichess.org/b8YT4OiZ",
    fen: "2rq1rk1/1b2bppp/p2ppn2/1p2n1B1/3NP2P/2NB1P2/PPPQ2P1/1K1RR3 w - - 7 14",
    score: -0.9,
  },
  {
    lichess: "https://lichess.org/uGTYDrQ9",
    fen: "r3k2r/p1q2pb1/bpn1p3/2ppP1N1/3P1n2/P1P3P1/1P3PB1/RN1QR1K1 w kq - 0 16",
    score: -0.9,
  },
  {
    lichess: "https://lichess.org/3A8KQXDU",
    fen: "8/pp4pp/5b2/5r1P/2kP3R/P1N2P2/1P1K2P1/8 w - - 3 30",
    score: 4.7,
  },
  {
    lichess: "https://lichess.org/wAQOtmVr",
    fen: "1r4k1/3n1pp1/4p2p/3p4/1p1P4/1P3PPP/P1R5/5BK1 w - - 0 31",
    score: -0.4,
  },
  {
    lichess: "https://lichess.org/in5jcXqt",
    fen: "rr4k1/1pqn1ppp/2p5/p1b1p3/P1P5/3PB1PP/1QP1NPK1/1R3R2 w - - 1 21",
    score: 0.4,
  },
  {
    lichess: "https://lichess.org/lvYg1pn2",
    fen: "r4rk1/1pp2pbp/p1n1b1p1/4p3/4PPn1/N1P3P1/PP2KNBP/R1B4R w - - 0 13",
    score: -0.4,
  },
  {
    lichess: "https://lichess.org/4icfqNpJ",
    fen: "1qr3k1/1p1b1pb1/pBnQ3p/5Pp1/2N1r1P1/7P/PP2B3/2R2RK1 w - - 0 23",
    score: 0.8,
  },
  {
    lichess: "https://lichess.org/0djzuurt",
    fen: "4R3/8/8/2kp2p1/p1p4p/P1P2PrP/5KP1/8 w - - 4 42",
    score: 4.5,
  },
  {
    lichess: "https://lichess.org/DvymQOU8",
    fen: "3r4/3p1kp1/p2Rp2p/1p2n3/8/PP2B1PP/6K1/2R5 w - - 2 27",
    score: 8.9,
  },
  {
    lichess: "https://lichess.org/U4LSXwVc",
    fen: "5rk1/3R1p2/1p3Qp1/2q4p/p6P/P5P1/1P3P1K/8 w - h6 0 33",
    score: 0.3,
  },
  {
    lichess: "https://lichess.org/1sxNoBUY",
    fen: "3rqrk1/pp3pb1/b2p2pp/P1pPp2n/2P1P3/1B3N1P/1P3PP1/R1BQR1K1 w - - 0 20",
    score: 1.4,
  },
  {
    lichess: "https://lichess.org/6YjJCOvW",
    fen: "r2qkb1r/5p1p/p1np4/1p1Npb2/4p3/N5P1/PPP2PBP/R2QK2R w KQkq - 2 13",
    score: 0.7,
  },
  {
    lichess: "https://lichess.org/OEQoL7cC",
    fen: "q5k1/6pp/2p5/3pQ3/4pP2/4P1Pb/7P/5RK1 w - - 2 27",
    score: 7.1,
  },
  {
    lichess: "https://lichess.org/7aSvh9cn",
    fen: "6k1/p1Q2p1p/4p1p1/2p5/2P3P1/3bR2P/P2r1P2/3q1BK1 w - - 1 39",
    score: 5.7,
  },
  {
    lichess: "https://lichess.org/pdR2EJd6",
    fen: "1R6/b3r1p1/2P1p2p/4k3/2Kp4/6PB/5P1P/8 w - - 10 42",
    score: 1.1,
  },
  {
    lichess: "https://lichess.org/BNMQ9AgX",
    fen: "2r1r1k1/1N3ppp/8/3p4/1B2p1n1/P3PbqP/3Q4/2R1RBK1 w - - 0 29",
    score: -17.1,
  },
  {
    lichess: "https://lichess.org/EMKkL1AS",
    fen: "2k2r1r/pppn2pp/4pb2/5p2/2P5/P1N1BP1P/1PP2PK1/3R1R2 w - - 2 20",
    score: -0.3,
  },
  {
    lichess: "https://lichess.org/74JDjzbi",
    fen: "r2qkb1r/p4ppp/2bp1n2/2p1p3/4P3/2NQ1NB1/PPP2PPP/2KR3R w kq - 2 12",
    score: 3.5,
  },
  {
    lichess: "https://lichess.org/S9K2B6bF",
    fen: "N2q1rk1/pp2ppb1/2n1b2p/2Pp2p1/8/2P1P1P1/PP3P1P/R2QKBNn w Q - 1 13",
    score: -9.6,
  },
  {
    lichess: "https://lichess.org/0xUoZE7H",
    fen: "4rrk1/pp1b1pp1/1qp2n1p/3p4/5b2/1PPB3P/PBQ3P1/3RRN1K w - - 2 19",
    score: -5.3,
  },
  {
    lichess: "https://lichess.org/3iYE9QuP",
    fen: "2rr4/p3ppk1/1p4p1/3P4/2q1PPn1/7R/P3N1P1/R2Q2K1 w - - 0 22",
    score: -1.5,
  },
  {
    lichess: "https://lichess.org/RbSA72wz",
    fen: "1r3r1k/pB3pp1/1b1p2qp/4p3/3p4/3P1Q1b/PPPB1PP1/R4RK1 w - - 0 23",
    score: -2.7,
  },
  {
    lichess: "https://lichess.org/hxbPgqun",
    fen: "r2r1nk1/pp1bbpp1/4pn1p/2P4P/1PB5/P1N2NP1/1B3P2/R3K2R w KQ - 1 16",
    score: 0.6,
  },
  {
    lichess: "https://lichess.org/JnGt7yYG",
    fen: "8/5b2/ppp2k2/6pp/1P2Pp2/2KN1P1P/1PP3P1/8 w - - 2 39",
    score: 5.5,
  },
  {
    lichess: "https://lichess.org/NJPIAypH",
    fen: "4r1r1/pp3k1p/2p2p2/2bp4/8/5N2/PPP2PPP/R3R1K1 w - - 8 19",
    score: -0.1,
  },
  {
    lichess: "https://lichess.org/OMxXEGNB",
    fen: "r1bq1rk1/pp2n1b1/3p2pp/3Pp3/3P3P/5Np1/PP3PB1/R1BQR1K1 w - - 0 17",
    score: -1.3,
  },
  {
    lichess: "https://lichess.org/YfJOMcxO",
    fen: "r2qr1k1/pp3pbp/6p1/nP6/3pP3/P5P1/4Q2P/1RB1K1NR w K - 0 17",
    score: -7.5,
  },
  {
    lichess: "https://lichess.org/dba6RJaE",
    fen: "3r1rk1/1p4bp/4p1b1/p5q1/P1PN4/R3P3/4B3/Q3K2R w - - 0 28",
    score: -11.7,
  },
  {
    lichess: "https://lichess.org/0liuH6MA",
    fen: "6k1/pp3pp1/2n1p2p/8/8/P1N4P/1PQ2PPq/5K2 w - - 10 35",
    score: -2.5,
  },
  {
    lichess: "https://lichess.org/JHsaZgmK",
    fen: "6k1/1p2q1b1/4P1pp/r3p3/2Br4/8/P3QPPP/R4RK1 w - - 0 23",
    score: 4.8,
  },
  {
    lichess: "https://lichess.org/GOa0TSZ1",
    fen: "5r2/p5kp/3b4/2pB1p1q/3p4/1P1Q2PP/P1P3K1/5R2 w - - 2 29",
    score: 0.3,
  },
  {
    lichess: "https://lichess.org/YYnX9V4D",
    fen: "3r4/p2r1k2/1p3P2/2nP2pp/3R4/1P3K2/PB5P/3R4 w - - 0 36",
    score: 1.6,
  },
  {
    lichess: "https://lichess.org/n5e6NY6H",
    fen: "2kr3r/p2nbp2/q4P2/2p3B1/1pp5/2N3P1/PP3PbP/1R1Q1RK1 w - - 0 19",
    score: 5,
  },
  {
    lichess: "https://lichess.org/kyIkLD1U",
    fen: "5k2/p4ppp/1pr2n2/3p4/8/1P6/P3R1PP/5RK1 w - - 2 34",
    score: 0.3,
  },
  {
    lichess: "https://lichess.org/dq1sALNI",
    fen: "r1bqk2r/pppp1ppp/2n2n2/b3p3/2B1P3/2P2N2/P2P1PPP/RNBQ1RK1 w kq - 3 7",
    score: -0.2,
  },
  {
    lichess: "https://lichess.org/GS37BWJc",
    fen: "r1b2rk1/ppqnbppp/2n1p3/2p1P3/2P5/5NP1/PP2QPBP/RNB2RK1 w - - 1 11",
    score: 1,
  },
  {
    lichess: "https://lichess.org/8miSg2Ry",
    fen: "1r1q1rk1/1bp2p2/1p4pp/p3Q3/P6P/1Pb3P1/2B2P1K/R4R2 w - - 0 25",
    score: -3.1,
  },
  {
    lichess: "https://lichess.org/DkYtRT6j",
    fen: "2nr4/3q2k1/2p2p1p/pp1p2p1/P2P1B2/1PP1QP2/5KPP/4R3 w - - 0 34",
    score: 0.2,
  },
  {
    lichess: "https://lichess.org/JJE3sSIU",
    fen: "rn1q1rk1/pp3ppp/5nb1/2bP4/4p1P1/2N4P/PP2PPB1/RNBQK2R w KQ - 0 11",
    score: 2,
  },
  {
    lichess: "https://lichess.org/CcLE8jl1",
    fen: "r2q1rk1/1b1nbppp/p3p3/P1p5/1pNPn3/1P2PN2/1B2BPPP/R2Q1RK1 w - - 1 14",
    score: 0,
  },
  {
    lichess: "https://lichess.org/xNnGpNHD",
    fen: "3qr1k1/1pp3pp/1b2np2/1n2N3/8/2PP4/1BQN1PPP/R5K1 w - - 0 19",
    score: 0.2,
  },
  {
    lichess: "https://lichess.org/BD74NX9O",
    fen: "r2q1r1k/ppp3p1/3p1p1p/8/2bBP1Q1/2P4P/PP3PP1/R3K2R w KQ - 0 17",
    score: -0.3,
  },
  {
    lichess: "https://lichess.org/XBgPgsYO",
    fen: "2rq1rk1/pppnbpp1/4p2p/3p4/1n1P2PB/2N1PP2/PPPQN2P/2KR3R w - - 1 13",
    score: 0.7,
  },
  {
    lichess: "https://lichess.org/9I3C1iKd",
    fen: "r1bq1rk1/ppp2ppp/3p1n2/4p3/2P1P3/2PP2P1/P3QPBP/R1B1K2R w KQ - 0 10",
    score: 0.8,
  },
  {
    lichess: "https://lichess.org/JjOpKVwg",
    fen: "r1bq1rk1/pp2ppbp/2np1np1/2p5/2PP4/2N2NP1/PP2PPBP/R1BQ1RK1 w - - 0 8",
    score: 0.4,
  },
  {
    lichess: "https://lichess.org/93Ea4lMY",
    fen: "6k1/p4pp1/2p2n1p/4pP2/P5P1/2N1P2P/6n1/6K1 w - - 0 31",
    score: -4,
  },
  {
    lichess: "https://lichess.org/htXiDv36",
    fen: "br1r2k1/4q1bp/6p1/N3pp2/PpP5/1P4P1/2Q2PBP/R3R1K1 w - - 0 24",
    score: 8.5,
  },
  {
    lichess: "https://lichess.org/1sGIrSJZ",
    fen: "r4rk1/pp2bppp/n3pn2/1q1pN3/2pP1B2/2P1P3/1P2BPPP/R2Q1RK1 w - - 4 13",
    score: 0.5,
  },
  {
    lichess: "https://lichess.org/LytdEbCY",
    fen: "3r2k1/1P3pp1/p2p3p/3BpP2/2P3P1/4b2P/1r6/1R1R2K1 w - - 0 30",
    score: 5.8,
  },
  {
    lichess: "https://lichess.org/K2DVKIcM",
    fen: "r2q1rk1/1p2b1pp/p3pn2/2pp2B1/P3P3/2NQ3P/1PP2PP1/R4RK1 w - - 0 14",
    score: 2.2,
  },
  {
    lichess: "https://lichess.org/0olsICG6",
    fen: "3r4/5p2/2p1rnk1/1pp1pNpp/p3P3/P2P3P/1PP2RP1/5RK1 w - - 4 29",
    score: 0,
  },
  {
    lichess: "https://lichess.org/RIeJkxBp",
    fen: "1k3r2/pp6/6p1/2P1pr1p/7P/q2PQ1P1/3NK3/2R2R2 w - - 0 29",
    score: 7.9,
  },
  {
    lichess: "https://lichess.org/YtVb1pPl",
    fen: "2r3k1/1bq2ppp/5n2/pB2p3/3QP3/P1P5/1KP3PP/3RR3 w - - 0 23",
    score: 4.8,
  },
  {
    lichess: "https://lichess.org/lu5g0PqH",
    fen: "5rk1/5ppp/4p1n1/pB1p4/Pb1QnP1q/1P2B2P/6P1/2RR2K1 w - - 6 25",
    score: 0.2,
  },
  {
    lichess: "https://lichess.org/dxeO6I1E",
    fen: "r2q1rk1/1p2ppbp/1np1b1p1/8/P2P4/1pN1PP2/1P2B1PP/R2QBRK1 w - - 4 20",
    score: -0.2,
  },
  {
    lichess: "https://lichess.org/Hr6J90iY",
    fen: "6k1/1pQ5/4q1p1/2p1p1Bp/3bP2P/P4PP1/1Pp3K1/8 w - - 0 38",
    score: 2.1,
  },
  {
    lichess: "https://lichess.org/fmvxgBfa",
    fen: "3r2k1/pq2bpp1/1p2p3/4N2p/1PnB4/P3QPP1/2r3KP/R2R4 w - - 6 25",
    score: -9.6,
  },
  {
    lichess: "https://lichess.org/4UAcs7TB",
    fen: "7r/1p3pk1/5bp1/1qP4r/1P1p4/1R3QP1/1B1R1PK1/8 w - - 2 37",
    score: -0.6,
  },
  {
    lichess: "https://lichess.org/ewkdw1RW",
    fen: "r2q1rk1/1bpnnpb1/pp1p3p/3Pp1p1/4P3/2NB1PB1/PPPNQ1PP/R4RK1 w - - 1 14",
    score: 0.7,
  },
  {
    lichess: "https://lichess.org/Tgwdfqli",
    fen: "r4k1r/pp3p1p/2pb1pp1/3n4/3P4/2B2N2/PP2BPPP/K2R3R w - - 0 17",
    score: 7.4,
  },
  {
    lichess: "https://lichess.org/zMb9TvtU",
    fen: "r3rbk1/5ppp/2p5/1p2P3/1pNp4/3N4/PP4PP/R4R1K w - - 0 25",
    score: 3.3,
  },
  {
    lichess: "https://lichess.org/6D3sCF0h",
    fen: "6k1/5p2/7p/8/8/8/6q1/bn5K w - - 2 52",
    score: -67.2,
  },
  {
    lichess: "https://lichess.org/fCkKwecm",
    fen: "3r4/pp3Bpk/1nb4p/2B5/8/2P5/P4RPP/6K1 w - - 1 27",
    score: 1.3,
  },
  {
    lichess: "https://lichess.org/n261J9Nl",
    fen: "r2q1rk1/pb1nbppp/1p2p1n1/2p5/4P3/1P3NP1/PBPN1PBP/R2QR1K1 w - c6 0 12",
    score: 1.1,
  },
  {
    lichess: "https://lichess.org/5c786WSW",
    fen: "1r2r1k1/p1p2pp1/5n2/2pPq2p/2P1p1b1/1B4P1/PP1Q1PP1/RN2R1K1 w - - 1 17",
    score: -0.3,
  },
  {
    lichess: "https://lichess.org/sZy1mYiU",
    fen: "8/p2rr1k1/6p1/1pnp4/8/1PP1pR1P/P3N1PK/5R2 w - - 0 42",
    score: -0.4,
  },
  {
    lichess: "https://lichess.org/Q4SJkvvP",
    fen: "r3r1k1/1bq1ppbp/5np1/2p1n3/Np6/1P3N2/P1Q1BPPP/2BR1RK1 w - - 0 18",
    score: -1.6,
  },
  {
    lichess: "https://lichess.org/aQaJKoiE",
    fen: "rnbqk2r/pp3ppp/4pn2/8/1bBpP3/2N2N2/PP3PPP/R1BQ1RK1 w kq - 0 8",
    score: 1.6,
  },
  {
    lichess: "https://lichess.org/KVItRACB",
    fen: "rn1q1rk1/p2nbppp/1p2p3/3pN3/3P4/1NP5/PP1B1PPP/R4QK1 w - - 2 13",
    score: -8.2,
  },
  {
    lichess: "https://lichess.org/EFWnpYKU",
    fen: "1r3k2/1p2R1pp/p7/2P2p2/nP1K4/6P1/7P/8 w - - 2 35",
    score: -5.4,
  },
  {
    lichess: "https://lichess.org/VQJlKVd7",
    fen: "r7/4R2p/1k6/pp6/8/2P3K1/P4P1P/8 w - - 2 37",
    score: 1.9,
  },
  {
    lichess: "https://lichess.org/ckVItXxY",
    fen: "4n3/3b4/3p2kB/2pPp3/1pP1P3/pP3PK1/P3B3/8 w - - 6 41",
    score: 1.6,
  },
  {
    lichess: "https://lichess.org/2ISD870e",
    fen: "8/2pk2p1/1p2r2p/p7/3P3P/P2KBnP1/1PR2P2/8 w - - 3 41",
    score: 3.6,
  },
  {
    lichess: "https://lichess.org/lViECwAO",
    fen: "r1bqnrk1/1pp3bp/3p4/p1nPpp2/2P1P3/2N1B3/PPQNBP1P/R3K2R w KQ - 0 13",
    score: 1.1,
  },
  {
    lichess: "https://lichess.org/6mfvEQ4D",
    fen: "3rr1k1/pp5p/2p3p1/3q1p2/P2b1P2/BP1P1QN1/6PP/5R1K w - - 2 29",
    score: -8.3,
  },
  {
    lichess: "https://lichess.org/YZlYTmCQ",
    fen: "2r1kb1r/1bqnpppp/p2p1n2/1p4B1/3NPP2/P1NB1Q2/1PP3PP/R3K2R w KQk - 3 11",
    score: -0.7,
  },
  {
    lichess: "https://lichess.org/KRcP1Djz",
    fen: "4n3/r3k1n1/pR1p4/2pPp1p1/2P1Pp2/P1BN1PP1/6K1/8 w - - 2 39",
    score: 4.4,
  },
  {
    lichess: "https://lichess.org/RFbY99MD",
    fen: "5Q2/p2q3p/1p2k1p1/1P3p2/PBb5/2P4P/3b2P1/7K w - - 4 35",
    score: -2.5,
  },
  {
    lichess: "https://lichess.org/qfglBmfb",
    fen: "r2qk2r/pb3p2/4pP2/1p1P2B1/1bp2P2/2N3P1/PP2Q2P/R3K2R w KQkq - 2 18",
    score: 6.3,
  },
  {
    lichess: "https://lichess.org/BTmh8jdU",
    fen: "2r1qr1k/1p2b1pp/p1nppn2/4p3/1P2P3/P1N1BN1P/4QPP1/2RR2K1 w - - 0 18",
    score: -0.6,
  },
  {
    lichess: "https://lichess.org/cJUohGEQ",
    fen: "r2qn1k1/R1n1r1bp/3p1pp1/2pP4/4NP1B/2N5/1PQ3PP/5RK1 w - - 5 23",
    score: 0.5,
  },
  {
    lichess: "https://lichess.org/hKhLMWrr",
    fen: "2r2r1k/p3q2p/1pn1pbpP/3p1p2/Q2P1Nn1/4PNP1/PP1B1P2/R4K1R w - - 3 20",
    score: 1.2,
  },
  {
    lichess: "https://lichess.org/glbvMm70",
    fen: "rnbqk2r/pp3pbp/2p3p1/3p4/3P4/1QN2N2/PP2PPPP/R3KB1R w KQkq - 0 10",
    score: -0.4,
  },
  {
    lichess: "https://lichess.org/WXPz1P59",
    fen: "8/p2R1pkp/5pp1/1q6/8/4NBPP/5P1K/8 w - - 0 32",
    score: 5.7,
  },
  {
    lichess: "https://lichess.org/sOcFwazO",
    fen: "r1b1k2r/pp1n1ppp/4p3/1B1pP3/3q1P2/1P6/3NQKPP/1R5R w kq - 0 19",
    score: -3.4,
  },
  {
    lichess: "https://lichess.org/eiSds79S",
    fen: "r1bq1rk1/pp2bppp/2n1p3/3nP3/8/3B1N2/PP2QPPP/RNB2RK1 w - - 6 11",
    score: 0.9,
  },
  {
    lichess: "https://lichess.org/JKBywr5x",
    fen: "r4rk1/p2pp1bp/b1p1p1p1/2q1P3/5B2/2N3Q1/PPP2PPP/R4RK1 w - - 2 16",
    score: 0.5,
  },
  {
    lichess: "https://lichess.org/VrNOUp4Q",
    fen: "r2qkb1r/1p1n1ppp/p2pbn2/4p3/4P3/2N3P1/PPP1NPBP/R1BQK2R w KQkq - 4 9",
    score: 0.6,
  },
  {
    lichess: "https://lichess.org/j0vuE9iy",
    fen: "r1q1k1nr/ppp1ppbp/2np2p1/8/2P5/2N2NPb/PP1PPPBP/R1BQR1K1 w kq - 5 8",
    score: 0.9,
  },
  {
    lichess: "https://lichess.org/Atpdhk3o",
    fen: "r3kb1r/p3pppp/1qppbn2/8/3pP3/N1P5/PP1P1PPP/R1BQ1RK1 w kq - 4 9",
    score: -7.4,
  },
  {
    lichess: "https://lichess.org/rNemwiKn",
    fen: "3rr1k1/5pp1/p5p1/1ppp4/2n5/P1P1PNP1/1P3PP1/1R1R2K1 w - - 0 25",
    score: -0.2,
  },
  {
    lichess: "https://lichess.org/PcKFuFfI",
    fen: "r2qr1k1/pp3ppp/5bn1/3p1b2/3p1P2/7P/PPPQBBP1/R2N1RK1 w - - 2 17",
    score: -3.7,
  },
  {
    lichess: "https://lichess.org/XRjSXu6L",
    fen: "4rrk1/2p3bp/1p1pp3/pP6/P1PP1p1q/3b1P1P/6PB/2RQR2K w - - 0 24",
    score: 2.5,
  },
  {
    lichess: "https://lichess.org/it4voBdX",
    fen: "1r1q3k/p1p1b1pp/b3Qr2/8/1n1p4/1P3NB1/P2N2PP/R4RK1 w - - 8 23",
    score: -6.1,
  },
  {
    lichess: "https://lichess.org/GNVod8DA",
    fen: "3r1rk1/2pqb1pp/p1p1bpn1/2Ppp3/3PP3/2N1BN1P/PP3PP1/2RQR1K1 w - - 4 15",
    score: -1.5,
  },
  {
    lichess: "https://lichess.org/lbJMIrzB",
    fen: "r1brqn2/1p3pk1/p2bpnp1/3pN2p/P2P1P1B/2PBN3/1P4PP/R2Q1RK1 w - - 4 17",
    score: 5,
  },
  {
    lichess: "https://lichess.org/qsFiuKWn",
    fen: "5b2/p1r4p/1p2kp2/1R3Np1/5p2/2P4P/PP3PP1/6K1 w - - 2 34",
    score: 0.2,
  },
  {
    lichess: "https://lichess.org/XlOgaUB0",
    fen: "r1b2rk1/pp2bpp1/6qp/3Qn3/4N3/6P1/P3PPBP/1R3RK1 w - - 0 17",
    score: 0.3,
  },
  {
    lichess: "https://lichess.org/fCf04NcW",
    fen: "r1rq2k1/1p2ppbp/3p2p1/3Pn3/1PP5/3Q3P/3BBPP1/2R2RK1 w - - 1 19",
    score: 0.1,
  },
  {
    lichess: "https://lichess.org/anBQyzx2",
    fen: "r4rk1/1p3ppp/p1nqp1b1/3p4/3P3N/P1R3P1/1P2PPBP/3Q1RK1 w - - 1 15",
    score: 0.3,
  },
  {
    lichess: "https://lichess.org/WdYjl0nb",
    fen: "2r1bQBk/pp6/5qp1/6pn/2P5/1P2P1PP/P7/3RR1K1 w - - 8 28",
    score: 9.9,
  },
  {
    lichess: "https://lichess.org/TULYCiRs",
    fen: "r1b2rk1/pp1np1bp/8/q1pP1p2/8/2PBB3/P2Q1PPP/2R1K1NR w K - 0 13",
    score: 2.1,
  },
  {
    lichess: "https://lichess.org/XOW9KuSt",
    fen: "r1bq1rk1/p2nbppp/4pn2/1p6/2p1N3/5NP1/1PQPPPBP/R1B2RK1 w - - 0 11",
    score: 0.2,
  },
  {
    lichess: "https://lichess.org/wHCuOfGE",
    fen: "2r2rk1/1p2ppb1/p1np1n1p/5PP1/8/2q3BP/P1P1B1P1/R2Q1R1K w - - 0 18",
    score: -0.3,
  },
  {
    lichess: "https://lichess.org/CV0LhBtb",
    fen: "2r3k1/1R5p/4p1p1/pP1nN3/8/6P1/P4P1P/6K1 w - - 1 32",
    score: 6.6,
  },
  {
    lichess: "https://lichess.org/KoemIZ3r",
    fen: "r3r1k1/5pp1/2p1b1n1/pp1q1pP1/3P3p/P1PB3P/1PQB1P2/2KR2R1 w - a6 0 20",
    score: -2.4,
  },
  {
    lichess: "https://lichess.org/8EWhEm6R",
    fen: "2kr3r/pp3ppp/2n2n2/q3p3/2B3b1/2NP4/PPP1NQPP/R1B2K1R w - - 7 12",
    score: 7.5,
  },
  {
    lichess: "https://lichess.org/lXz6A4dQ",
    fen: "r4r2/pp3pk1/2nq1pbp/2p5/3p3N/3P2P1/PP1QPPBP/2R2RK1 w - - 4 16",
    score: 3.1,
  },
  {
    lichess: "https://lichess.org/YIUoHooK",
    fen: "r1b2r1k/pp1p2bp/n4pqn/2P5/3p4/1QP1PN2/PP1NBPPP/R4RK1 w - - 0 13",
    score: 0.4,
  },
  {
    lichess: "https://lichess.org/5TLTuCm8",
    fen: "r1b2rk1/pp3p2/3p2pb/q3p2p/2PP2nP/PPN5/1BQ1BPP1/R3K2R w KQ e6 0 15",
    score: 0.3,
  },
  {
    lichess: "https://lichess.org/2HAmjBQj",
    fen: "4kb2/q2b1p2/p3p2r/1p1pPpQ1/1P1r3p/P6P/3NNPP1/R1R3K1 w - - 0 25",
    score: 8.6,
  },
  {
    lichess: "https://lichess.org/2juowg82",
    fen: "1r2k2r/2p1nppp/3p2b1/1p1Bp3/4P1Pq/3PP2P/1PPKN3/R2Q3R w k - 3 18",
    score: 0.6,
  },
  {
    lichess: "https://lichess.org/lU09IaAM",
    fen: "r1b4r/ppqnkppp/4p3/1BP5/8/8/PPP2PPP/RN1QK2R w KQ - 0 11",
    score: 0.5,
  },
  {
    lichess: "https://lichess.org/nu5UynK7",
    fen: "8/p2r1k2/1p1b1p2/2p1p1rP/4R3/P2P1KNP/2P2P2/4R3 w - - 3 36",
    score: 3,
  },
  {
    lichess: "https://lichess.org/bUXPRXIl",
    fen: "r2qr1k1/bp3pp1/p3bn1p/2NpB3/3P4/3Q2P1/PP3PBP/R4RK1 w - - 6 18",
    score: 2.1,
  },
  {
    lichess: "https://lichess.org/upSIErf5",
    fen: "r2r2k1/pp1qbppp/2n1bn2/2pp4/3P1BP1/P1N2N1P/1P2PPB1/R2Q1RK1 w - - 1 14",
    score: 0,
  },
  {
    lichess: "https://lichess.org/JwmZuTWo",
    fen: "6k1/p2r1p2/1pn4p/2pb2p1/4q2B/P3P2P/1P2BPP1/2QR2K1 w - - 0 23",
    score: 0,
  },
  {
    lichess: "https://lichess.org/mVFRx7DW",
    fen: "2k4r/1p3ppp/1Pn1p3/pB6/4PP2/P3P3/1PK4P/3r3R w - - 0 20",
    score: 5.2,
  },
  {
    lichess: "https://lichess.org/HbDo0VOU",
    fen: "8/4b3/4p1R1/2p1kpp1/1P5p/P3KPP1/7P/8 w - c6 0 38",
    score: 7.1,
  },
  {
    lichess: "https://lichess.org/BZeEeLpg",
    fen: "5k2/5pp1/p3p2p/8/Pr2P3/1PR2KP1/5P1P/8 w - - 2 37",
    score: 2.2,
  },
  {
    lichess: "https://lichess.org/tT5XXv83",
    fen: "1k1r4/pp2bp2/1q3p1p/2N1p3/4N1b1/2Q5/PPP3PP/2K1R3 w - - 0 22",
    score: -4.4,
  },
  {
    lichess: "https://lichess.org/KZhP6WMo",
    fen: "2rq1rk1/1p2bpp1/p2p3p/3bpP2/P2nP3/2N5/BPP3PP/R2Q1RK1 w - - 0 17",
    score: 0,
  },
  {
    lichess: "https://lichess.org/CqmSqNxt",
    fen: "5rk1/1r5n/3p2p1/p1pPp3/P1P2p1q/1PN2Qp1/2B3K1/4RR2 w - - 0 33",
    score: 0,
  },
  {
    lichess: "https://lichess.org/mjSceBO7",
    fen: "2rr2k1/1b1p1pp1/p3p2p/1p2P3/6P1/b1Nn1P2/1PPR3P/1K2R2B w - - 0 27",
    score: -3.5,
  },
  {
    lichess: "https://lichess.org/HK4ZAfeH",
    fen: "r1r3k1/3q1p2/1p4p1/1p1pQ2p/3Pn2P/3NP1P1/2R2PK1/2R5 w - - 0 32",
    score: 2.1,
  },
  {
    lichess: "https://lichess.org/keIgc99j",
    fen: "r1bqk1nr/pppp1ppp/2n5/2b1p3/2B1P3/2N5/PPPP1PPP/R1BQK1NR w KQkq - 4 4",
    score: 0.4,
  },
  {
    lichess: "https://lichess.org/Np5bLFnR",
    fen: "2kr2r1/1p2qp1p/1pp2p2/4n3/6P1/1BP5/PP2QPP1/R3R1K1 w - - 0 19",
    score: 1.4,
  },
  {
    lichess: "https://lichess.org/GecBO90T",
    fen: "3rr1k1/3nqpbn/2p1p1p1/ppPp4/3P1Pp1/1PN1P2P/PB4B1/1R1Q1RK1 w - - 0 20",
    score: -0.7,
  },
  {
    lichess: "https://lichess.org/nDQMB2X3",
    fen: "r4k2/p1p2p1p/3p1p2/2pPr3/8/1P3P2/P1P2P1P/4RR1K w - - 1 20",
    score: 0,
  },
  {
    lichess: "https://lichess.org/z8ehuOw8",
    fen: "1r4k1/2r3pp/3q1p2/p1pPp3/P1RnP3/1P4P1/1R5P/3Q1BK1 w - - 6 33",
    score: 0,
  },
  {
    lichess: "https://lichess.org/5mUVtXBZ",
    fen: "1rr4k/p2npp1p/3p2pP/3N2P1/1P2PP2/7R/1PPQK3/q7 w - - 0 23",
    score: -6.4,
  },
  {
    lichess: "https://lichess.org/FtihkUnm",
    fen: "r1r5/2q2pbk/Q5p1/3Pp2p/2p1P2P/3N2P1/P4PK1/2R2R2 w - - 1 25",
    score: 0,
  },
  {
    lichess: "https://lichess.org/uSmf1MoT",
    fen: "r5k1/bp4p1/ppnpp1qp/4p3/P1N1P3/1QPP1rP1/5PP1/R4RK1 w - - 0 19",
    score: -0.7,
  },
  {
    lichess: "https://lichess.org/0LPFACYH",
    fen: "4q1k1/Q5p1/7p/3p4/3P2P1/P3PR2/1r4P1/6K1 w - - 0 28",
    score: 3.5,
  },
  {
    lichess: "https://lichess.org/G484m9Pr",
    fen: "r2q1rk1/p1p2ppp/2p5/3p4/1b1Pn1b1/5N2/PP1N1PPP/R1BQ1RK1 w - - 0 11",
    score: -1.6,
  },
  {
    lichess: "https://lichess.org/daotUDDx",
    fen: "r1b2rk1/ppp1ppbp/3q2p1/8/8/3P1BP1/P1Q1PP1P/1RB2RK1 w - - 2 14",
    score: 0.9,
  },
  {
    lichess: "https://lichess.org/tK2eDp0o",
    fen: "r6r/4ppk1/p3qbpn/3p3p/8/2PB1P2/P2Q1P2/2R1R1K1 w - - 0 23",
    score: 0.2,
  },
  {
    lichess: "https://lichess.org/6hEQI1gg",
    fen: "r5k1/5pp1/2pn3p/1p1pPb2/1N1P3q/2P1B2P/2Q2PP1/2R3K1 w - - 2 27",
    score: 0,
  },
  {
    lichess: "https://lichess.org/zDJO3nxq",
    fen: "3r1rk1/pb2b1pp/1p3p2/n1p2PP1/4PpBP/N1P2K2/PP3N2/R2R4 w - - 0 23",
    score: 0.8,
  },
  {
    lichess: "https://lichess.org/Zqkldoxv",
    fen: "1nrq1rk1/5pb1/p2pn1p1/8/1pN1PPP1/1P2BB2/P5K1/2RQ1R2 w - - 0 28",
    score: 6.6,
  },
  {
    lichess: "https://lichess.org/XYxcgBlj",
    fen: "rr3nk1/3b1p1p/3qpb1P/pp1p1p2/3P4/2PN1N2/PP1Q1PP1/R3RBK1 w - - 1 22",
    score: 1.2,
  },
  {
    lichess: "https://lichess.org/FdSHlB9d",
    fen: "1r2kb1r/3b1ppp/8/2P5/3Bq3/p7/3N1PPP/R4RK1 w k - 0 19",
    score: 0.6,
  },
  {
    lichess: "https://lichess.org/lip58XDz",
    fen: "r1bq1r1k/2p1b1pp/p1n2p2/1p1np3/8/1BPP1N1P/PP3PP1/RNBQR1K1 w - - 0 12",
    score: 0.6,
  },
  {
    lichess: "https://lichess.org/JTVbZFSB",
    fen: "3r2k1/1pp2pp1/p1bq3p/8/1P1P2B1/P3r2P/3Q1PP1/4R1K1 w - - 0 28",
    score: -0.5,
  },
  {
    lichess: "https://lichess.org/zGqoY6sV",
    fen: "2r3k1/1p2pp1p/p4npb/4pP2/3rP3/1PNB1R2/1PP3PP/R5K1 w - - 4 18",
    score: -0.7,
  },
  {
    lichess: "https://lichess.org/l6DArv7n",
    fen: "r1r3k1/5p1p/3p1qP1/3P4/5p2/Pp1Q4/1P6/1KR3R1 w - - 0 31",
    score: 7.9,
  },
  {
    lichess: "https://lichess.org/G1Xf58R2",
    fen: "1r1q1rk1/p2np1bp/3p2p1/2pPnp2/2p1PB2/2N3PP/PPQ1BP2/R3R1K1 w - f6 0 16",
    score: -1.7,
  },
  {
    lichess: "https://lichess.org/aMoA5GCa",
    fen: "r2qk2r/ppp3bp/3p2p1/5n2/8/2N4P/PPP3P1/R1BQ1RK1 w kq - 0 14",
    score: 1.8,
  },
  {
    lichess: "https://lichess.org/FY1KO3bm",
    fen: "2r1kb1r/1bqn1pp1/p3p2p/1p1nP3/3pN2P/P2B1N1R/1P1BQPP1/R3K3 w Qk - 4 15",
    score: -3.2,
  },
  {
    lichess: "https://lichess.org/q2OrhhwA",
    fen: "6k1/1p1R3p/2p3p1/p7/1nP3P1/1PB4P/3K1r2/8 w - - 0 37",
    score: 0.3,
  },
  {
    lichess: "https://lichess.org/8IdJaZ6P",
    fen: "r1b1r1k1/ppp2pp1/5n1p/6q1/3PnNP1/3B1Q2/PPP1NP1P/2KR3R w - - 3 15",
    score: 0.8,
  },
  {
    lichess: "https://lichess.org/Rc5eNhi6",
    fen: "r4rk1/pp1nbppp/1q2pn2/8/3N1B2/2P5/PPB1QPPP/R3R1K1 w - - 1 15",
    score: 1.7,
  },
  {
    lichess: "https://lichess.org/Ji3fkAOe",
    fen: "1k2r2r/ppqnn1p1/2pb1p1p/3p3P/3P3N/2NQB3/PPP2PP1/2K1R2R w - - 1 16",
    score: 1.2,
  },
  {
    lichess: "https://lichess.org/tnbGuEmD",
    fen: "r1bq1rk1/pp3ppp/2n1p3/3n4/1b1P4/2NB1N2/PP1B1PPP/R2QK2R w KQ - 4 10",
    score: 0.5,
  },
  {
    lichess: "https://lichess.org/Y6iOJpI7",
    fen: "5rk1/1bp3bp/n2p2p1/BNnPp1q1/P1P5/4P1P1/6BP/R2Q1RK1 w - - 1 20",
    score: 6.2,
  },
  {
    lichess: "https://lichess.org/pACDiIRx",
    fen: "rn1q1rk1/p1p4p/1p2pppQ/3bP3/8/2PB4/P1P2PPP/R1B2RK1 w - - 0 14",
    score: 6.5,
  },
  {
    lichess: "https://lichess.org/uG2jDA0e",
    fen: "r7/5pkp/p1p2np1/4Q3/N3P3/1P1R1P2/7P/2K4q w - - 0 24",
    score: -1.5,
  },
  {
    lichess: "https://lichess.org/UsH5uQ2j",
    fen: "r1b2rk1/pp3pp1/3b3p/3Q4/3Pp3/4P1P1/Pq2NPBP/R4RK1 w - - 0 15",
    score: 4.1,
  },
  {
    lichess: "https://lichess.org/4xPnZdWM",
    fen: "1r1qkb1r/1p3p2/2n5/pN1pP2p/3P2p1/3BQ2P/5PP1/RR4K1 w - - 0 20",
    score: 4.8,
  },
  {
    lichess: "https://lichess.org/h3IJatD6",
    fen: "r2qk2r/ppn1ppb1/2pp2p1/4P2p/3P1P2/2N1nB2/PPPQ2PP/4RRK1 w kq - 0 13",
    score: 0.8,
  },
  {
    lichess: "https://lichess.org/CO5FXM6e",
    fen: "r4rk1/1p2bppp/pqnp4/3Bp3/4P3/5N1P/PP1RQPP1/3R2K1 w - - 4 17",
    score: 0.2,
  },
  {
    lichess: "https://lichess.org/4ZDvxhOn",
    fen: "r4rk1/2qbbppp/3ppn2/7P/4P1P1/1N1BBP2/PP1Q4/1K1R3R w - - 1 21",
    score: 4.5,
  },
  {
    lichess: "https://lichess.org/GzlDSSmz",
    fen: "r1b2rk1/p4ppp/1qp2n2/8/1bB2B2/2N2Q2/PP3PPP/R3R1K1 w - - 4 14",
    score: 2,
  },
  {
    lichess: "https://lichess.org/oLaejKOY",
    fen: "8/1kB2ppp/1P6/pP1p4/P2P2K1/2RP2P1/4r3/8 w - - 1 42",
    score: 11.8,
  },
  {
    lichess: "https://lichess.org/G0fGT8ip",
    fen: "2r2r1k/1p1n2bp/p3N1p1/Pq2p3/1P6/3p2PP/B1RB1P2/3Q1RK1 w - - 0 28",
    score: 12.7,
  },
  {
    lichess: "https://lichess.org/2XU7L51G",
    fen: "2r2rk1/p1q2ppp/2p1p3/5b2/2NP1b2/P1N4P/1PP1QPP1/R4R1K w - - 5 18",
    score: 1.8,
  },
  {
    lichess: "https://lichess.org/qmYQ79oN",
    fen: "r2rk3/ppp2ppp/4p3/n1N5/3P4/BP2PnP1/2R4P/R5K1 w - - 0 22",
    score: 2.4,
  },
  {
    lichess: "https://lichess.org/cR022gA1",
    fen: "3r2k1/rp1N1p2/2n1pp2/3p4/2pPP3/b1P2P2/P2NB2P/1R4K1 w - - 2 23",
    score: -5.5,
  },
  {
    lichess: "https://lichess.org/2se6tvpX",
    fen: "2rr2k1/1p1q1pbp/p3p1p1/n2pP3/3P2b1/2NQBN2/PP2RPB1/2R3K1 w - - 2 22",
    score: 3.6,
  },
  {
    lichess: "https://lichess.org/hOWV8pAn",
    fen: "3k3r/4rBp1/p2p1bPp/1pqP4/2n2P2/P1PQ4/1P6/2K1R2R w - - 1 31",
    score: -6.8,
  },
  {
    lichess: "https://lichess.org/5YOV9XR7",
    fen: "r1bqk2r/pp1p1ppp/4pn2/8/2Pn4/P5P1/1P1QPP1P/R1B1KB1R w KQkq - 0 9",
    score: 1.6,
  },
  {
    lichess: "https://lichess.org/fl4zO8uZ",
    fen: "2r5/6p1/8/1p2k2p/7P/1P2N3/2PK1PP1/8 w - - 2 30",
    score: -0.4,
  },
  {
    lichess: "https://lichess.org/vaC8u6lk",
    fen: "7r/5k1r/3p1bp1/q1pPpp2/p1P3P1/3N1P2/PPR3Q1/3K1R2 w - - 7 34",
    score: -2.5,
  },
  {
    lichess: "https://lichess.org/ap1DY5tG",
    fen: "r5k1/1p3pp1/2pb3p/p2p4/3N4/PP2rNPB/1Bb3KP/Q7 w - - 0 24",
    score: 8.5,
  },
  {
    lichess: "https://lichess.org/5aLDaka5",
    fen: "2kr1br1/1pp2p1p/5p2/4pb2/q7/3PBP2/PPP1Q1PP/2KR2NR w - - 4 16",
    score: -0.4,
  },
  {
    lichess: "https://lichess.org/gHkrO4k2",
    fen: "r2q1rk1/2p2ppp/p7/1p1B4/8/3P3P/PPP2PPb/RNBQ2K1 w - - 1 15",
    score: 6.9,
  },
  {
    lichess: "https://lichess.org/vyTGnLax",
    fen: "2bq1rk1/1p3pb1/3p2p1/2p2nPp/2PNB2P/1P2P3/1Q3P2/1K1R3R w - - 0 20",
    score: -6.9,
  },
  {
    lichess: "https://lichess.org/IKqvI8Sz",
    fen: "6k1/5pp1/4p2p/2R5/8/4PNP1/r3bKBP/8 w - - 0 30",
    score: 3.3,
  },
  {
    lichess: "https://lichess.org/agmzrCXt",
    fen: "2rq1rk1/p2nbppp/b1p1p3/1p6/2PP4/2B3P1/P2NPPBP/2RQ1RK1 w - - 0 15",
    score: 2.7,
  },
  {
    lichess: "https://lichess.org/VlHEvPWL",
    fen: "8/R6p/1p1N1pk1/4p3/7n/P7/5PP1/2r3K1 w - - 2 38",
    score: -0.7,
  },
  {
    lichess: "https://lichess.org/M9a4yHn2",
    fen: "r3r1k1/1p3ppp/8/p2p4/3N4/2Pb1P2/PP3KPP/R3R3 w - - 2 23",
    score: 1.8,
  },
  {
    lichess: "https://lichess.org/GTv6aiXo",
    fen: "r2qr1k1/p1p2ppp/2p2n2/8/2B2Pb1/1PN1b2P/P1P3P1/R1B1KQ1R w KQ - 0 13",
    score: -9.2,
  },
  {
    lichess: "https://lichess.org/zOzGMtPg",
    fen: "8/p5pp/p2k4/4p3/8/1nP5/1P1r2PP/1R3BK1 w - - 0 35",
    score: -0.3,
  },
  {
    lichess: "https://lichess.org/QKWbt7bg",
    fen: "5r2/p4pk1/1p2p1p1/7p/4Q2P/2q5/P4PP1/4R1K1 w - h6 0 28",
    score: -6.4,
  },
  {
    lichess: "https://lichess.org/prurZ7G9",
    fen: "r4rk1/p2nqp2/2n1N1p1/3pP2p/1p3P2/2PB3Q/PP4PP/4RRK1 w - - 1 19",
    score: 8.5,
  },
  {
    lichess: "https://lichess.org/UgME87tb",
    fen: "2kr3r/pp1n1ppp/2pbp1b1/7q/3PPP2/2N3P1/PP3R1P/R1BQ1BK1 w - - 5 15",
    score: 2.6,
  },
  {
    lichess: "https://lichess.org/zbKgTMta",
    fen: "2q2rk1/1b3ppp/8/p2pPQPN/1p1P4/1Pr1P3/6P1/2R2RK1 w - - 3 27",
    score: 0.4,
  },
  {
    lichess: "https://lichess.org/WSj2fqHz",
    fen: "3r1rk1/pbq2ppp/1p2pn2/2p5/2P5/1P2PN2/P3QPPP/1B1R1RK1 w - - 1 17",
    score: -0.4,
  },
  {
    lichess: "https://lichess.org/1iDGJLDx",
    fen: "3r1rk1/ppR2pp1/7p/8/8/6P1/3NPPBP/2n2K2 w - - 0 24",
    score: -5.1,
  },
  {
    lichess: "https://lichess.org/F0iBu37q",
    fen: "r4rk1/1p3pp1/1qb2b1p/pN2pP2/Pn2p3/1NP2B2/1P2Q1PP/R4R1K w - - 0 19",
    score: -1.2,
  },
  {
    lichess: "https://lichess.org/TfYuNZnb",
    fen: "r2q1rk1/p3ppbp/1pn3p1/3p4/3P2b1/1QP1PN2/P2BBPPP/2R2RK1 w - - 2 13",
    score: 1,
  },
  {
    lichess: "https://lichess.org/9WEC71y5",
    fen: "2r3k1/R1r4p/4b1p1/4p1P1/4P3/3B1P2/2P1N1K1/8 w - - 3 32",
    score: -0.5,
  },
  {
    lichess: "https://lichess.org/Mdq7oC4W",
    fen: "1r3rk1/pb2pp1p/2np2p1/q1pN1P2/1p2PBP1/3P3P/PbP2QB1/R4R1K w - - 0 24",
    score: 2.5,
  },
  {
    lichess: "https://lichess.org/bcVI33UI",
    fen: "3r4/p2q2kp/2r2pp1/2P1p3/N2pQ3/1P5P/P4KP1/3RR3 w - - 2 28",
    score: 4.2,
  },
  {
    lichess: "https://lichess.org/SIjkr0AT",
    fen: "1r2r1k1/p4pbp/Qn4p1/5n2/4p3/B3P1P1/P1q1NPBP/1R1R2K1 w - - 1 23",
    score: 0.4,
  },
  {
    lichess: "https://lichess.org/t1kcC4kf",
    fen: "r1bqk2r/pp1nbppp/4pn2/2p3B1/3P4/2NB1N2/PPP1Q1PP/R3K2R w KQkq c6 0 9",
    score: 0.1,
  },
  {
    lichess: "https://lichess.org/ZRJAW5ji",
    fen: "r5k1/1pp1r1b1/2n1q1pp/1BPp1p2/P2P4/2N1P1QP/6P1/4RRK1 w - - 2 27",
    score: -0.4,
  },
  {
    lichess: "https://lichess.org/I7Gvlrcv",
    fen: "r1r3k1/3b1ppp/3B4/1P1Pp2P/2n4N/P7/5P2/3RK1R1 w - - 1 30",
    score: 0,
  },
  {
    lichess: "https://lichess.org/XEAe1ClW",
    fen: "6k1/p4p1p/4pbp1/N7/P7/4PBP1/r4P1P/2R3K1 w - - 1 24",
    score: 7.2,
  },
  {
    lichess: "https://lichess.org/tStax1lr",
    fen: "b4k2/p5pp/1r1pPp2/2p2P2/3p2N1/2n2N2/P5PP/4R2K w - - 0 35",
    score: -8.8,
  },
  {
    lichess: "https://lichess.org/7CiJLT5b",
    fen: "r1b1rbk1/2q2ppp/p2ppn2/8/5P2/2pBBN1Q/PPP3PP/4RR1K w - - 0 17",
    score: -1.2,
  },
  {
    lichess: "https://lichess.org/j4Jr8wN5",
    fen: "2r2rk1/pp2bppp/2n1pn2/q2p4/3P1B2/P1NP1N2/1P3PPP/R2Q1RK1 w - - 1 13",
    score: -0.6,
  },
  {
    lichess: "https://lichess.org/bgPbLjvY",
    fen: "r3r1k1/2p1q1pp/1pn1bp2/p1p1p3/P1N1P3/1PPP1N1P/2Q2PP1/3RR1K1 w - - 2 19",
    score: -0.5,
  },
  {
    lichess: "https://lichess.org/EgjAWlse",
    fen: "3r1rk1/1pq2p1p/p1nb1Pp1/2p1p1P1/P1n1B2P/4p1N1/2PP4/1RBQK2R w K - 0 21",
    score: 3.4,
  },
  {
    lichess: "https://lichess.org/pjacXXZH",
    fen: "br1q1rk1/4nppp/3p1n2/1P2pP2/4P3/3BB3/1PN2QPP/R4RK1 w - - 0 23",
    score: 2.4,
  },
  {
    lichess: "https://lichess.org/gvpC6t2N",
    fen: "r5k1/2q2ppp/8/8/2P2p2/5P2/2b1B1PP/4QR1K w - - 0 23",
    score: 0.4,
  },
  {
    lichess: "https://lichess.org/0FLFavXW",
    fen: "3r2k1/p4pbp/1q2p1p1/4P3/1n5P/Q2b2P1/PP1N1PB1/R3R1K1 w - - 0 23",
    score: 2.7,
  },
  {
    lichess: "https://lichess.org/GR30RkWE",
    fen: "r3r1k1/1p1qppb1/p5p1/P1pPp1B1/2Bnn3/3Q3P/1PP3P1/R4R1K w - - 0 21",
    score: -1.1,
  },
  {
    lichess: "https://lichess.org/hgthYU4y",
    fen: "rq3k1r/pp3ppp/2n1pn2/3p2Q1/3P4/2PB4/PP1N1PPP/R4RK1 w - - 3 13",
    score: 1.2,
  },
  {
    lichess: "https://lichess.org/5CBQFDH3",
    fen: "r3kb1r/ppqn1pp1/2p3p1/3p2Pn/3P4/1QN1P2P/PP1B1PB1/R3K2R w KQkq - 1 15",
    score: 1.4,
  },
  {
    lichess: "https://lichess.org/z6IL3tY5",
    fen: "r2q1rk1/ppp3b1/2npbn1p/4ppp1/2P5/1PN1P3/PB1PNPPP/1BRQ1RK1 w - - 2 11",
    score: 1.2,
  },
  {
    lichess: "https://lichess.org/Bgt5yDX9",
    fen: "8/7p/kp2b3/p1n2N2/8/4K3/5R1P/8 w - - 1 53",
    score: 0.4,
  },
  {
    lichess: "https://lichess.org/XhRAN7Yz",
    fen: "r1b2rnk/1p2q1p1/p3ppBp/2p5/5Q2/2bN3R/PPP2PPP/2K1R3 w - - 0 22",
    score: -6.1,
  },
  {
    lichess: "https://lichess.org/9qVelipz",
    fen: "3qbrk1/6pp/5b2/3pN2P/1ppP2B1/p3B1Q1/nP3PP1/3RK2R w K - 0 24",
    score: 9,
  },
  {
    lichess: "https://lichess.org/YtjlExyh",
    fen: "6k1/4R1p1/1p5p/p1p1Bb2/8/2P3P1/r4PP1/6K1 w - a6 0 26",
    score: 0.2,
  },
  {
    lichess: "https://lichess.org/2awEGxEC",
    fen: "8/2pk1K2/3p4/3P1P2/pp1P1rP1/4R3/P7/8 w - - 2 40",
    score: 5.8,
  },
  {
    lichess: "https://lichess.org/EiFXhFUd",
    fen: "r5k1/5pp1/B3p2p/3bP3/p4n2/5N1P/5KP1/R7 w - - 3 35",
    score: -6.8,
  },
  {
    lichess: "https://lichess.org/jt7qiLmV",
    fen: "k4r2/P3R3/3p4/1K1P1P2/8/8/8/8 w - - 1 47",
    score: 0.1,
  },
  {
    lichess: "https://lichess.org/OOhQlqqS",
    fen: "r2q1rk1/3nbp1p/b1n1p1pP/p1ppP3/1p6/3P1NP1/PPP2PB1/R1BQRNK1 w - - 0 14",
    score: 0.9,
  },
  {
    lichess: "https://lichess.org/RXLlMKFH",
    fen: "rn1qk2r/pb3p2/2pbpn2/1p2N1pp/2pP4/2N1P1B1/PP2BPPP/R2Q1RK1 w kq - 0 12",
    score: 3.9,
  },
  {
    lichess: "https://lichess.org/6OT4Jhlb",
    fen: "1r4k1/5pp1/p3p3/P2p2QP/3P4/2P5/1r1q1P2/R4RK1 w - - 3 32",
    score: -1.4,
  },
  {
    lichess: "https://lichess.org/TAuY61FT",
    fen: "r3k2r/3q1nbp/2p2p2/pp2p1pQ/3N4/PP6/1BPP1PP1/2KRR3 w kq - 1 24",
    score: 1.4,
  },
  {
    lichess: "https://lichess.org/koMZnppa",
    fen: "4b3/8/4kb1r/2p2p1P/ppP1pP2/4P1NR/P4K2/3B4 w - - 4 35",
    score: -2.5,
  },
  {
    lichess: "https://lichess.org/fNHRHpZd",
    fen: "r4rk1/pb3ppp/1q2pn2/2b5/2P5/4BNP1/PPQ2PBP/R2R2K1 w - - 2 17",
    score: 2.7,
  },
  {
    lichess: "https://lichess.org/1iJuXFgA",
    fen: "r3k1nr/pR4p1/4ppp1/3p4/1bpP2PP/q1N1B2R/P1PQ1P2/4K3 w - - 6 20",
    score: -0.1,
  },
  {
    lichess: "https://lichess.org/dHlRw035",
    fen: "r4rk1/2p3pp/Pp1b1p2/8/P1NP2b1/2P1RN2/1n3PPP/R5K1 w - - 0 22",
    score: -0.2,
  },
  {
    lichess: "https://lichess.org/llqEsBLo",
    fen: "r4rk1/2qbnpbp/2n3p1/1p2p3/3pP3/3P1NPP/1P1N1PB1/R1BQR1K1 w - - 0 16",
    score: -1.6,
  },
  {
    lichess: "https://lichess.org/TFvf7cHL",
    fen: "6k1/p4pp1/4p2p/b1R5/b7/4B3/P2N1PPP/q3KR2 w - - 2 25",
    score: -0.6,
  },
  {
    lichess: "https://lichess.org/DiSmsbOP",
    fen: "7r/3k2p1/1B1b3p/P1p2p2/3p4/1b1P2P1/1P3P1P/R4RK1 w - - 1 25",
    score: 7.6,
  },
  {
    lichess: "https://lichess.org/hTTxb4jo",
    fen: "1r3rk1/p4pbp/6p1/2pnp3/4N1PP/p1K1P3/5P2/3R3R w - - 0 28",
    score: -7.3,
  },
  {
    lichess: "https://lichess.org/qMnvbkz8",
    fen: "b7/p1q3kp/3r2p1/1pNnNr2/2pP1pQP/2P5/PP4P1/4RRK1 w - - 2 27",
    score: 2.7,
  },
  {
    lichess: "https://lichess.org/rkadFNRO",
    fen: "7k/2p3p1/1rP2r1p/p2B1p1P/1b2pK2/1P2P3/5PP1/2RR4 w - - 2 31",
    score: 0,
  },
  {
    lichess: "https://lichess.org/lPky3Shw",
    fen: "r3k2r/p4ppp/1qp1b3/2bpP3/Q7/P1N2N2/1PP3PP/R3K2R w KQkq - 2 15",
    score: -2,
  },
  {
    lichess: "https://lichess.org/21KAhjTz",
    fen: "2krr3/p1p3pp/bnp4q/5p2/1bP2P2/1P4P1/PB1NQ1BP/2KR3R w - - 2 17",
    score: 1.5,
  },
  {
    lichess: "https://lichess.org/SVwfeIEc",
    fen: "r2r2k1/1p2bppb/2p1p2p/8/4P3/P1B2PP1/1P4BP/2RR2K1 w - - 1 26",
    score: 0.3,
  },
  {
    lichess: "https://lichess.org/ug2KmgsC",
    fen: "3q1r1k/2b1n1pp/1r3p2/1pp5/1n1pPpQN/NP1P4/2PB2PP/2R2RK1 w - - 0 23",
    score: -2.2,
  },
  {
    lichess: "https://lichess.org/gsWdSsm8",
    fen: "R7/2p1kp2/2rp2pp/2n5/6P1/B1P1KPP1/PP6/8 w - - 5 43",
    score: 4.3,
  },
  {
    lichess: "https://lichess.org/OTzP0Qa2",
    fen: "r1bq1rk1/2p3pp/p1nb1p2/1pp1p3/2N1P3/3PBN2/PPPQ1PPP/2K3RR w - b6 0 12",
    score: -1.4,
  },
  {
    lichess: "https://lichess.org/oZNhEsIW",
    fen: "8/7p/p1Rppk2/8/r7/5P2/P5KP/8 w - - 4 34",
    score: -0.5,
  },
  {
    lichess: "https://lichess.org/uKOrNgVJ",
    fen: "2b1nrk1/1r6/1q1p2p1/1NpPb2p/4Pp1P/3B1P2/RPPB1Q2/4K2R w K - 0 24",
    score: 2.5,
  },
  {
    lichess: "https://lichess.org/UMSTTFYb",
    fen: "8/R3pk2/p3r1p1/1p6/6P1/P3RP2/1P3r2/1K6 w - - 8 32",
    score: 0.5,
  },
  {
    lichess: "https://lichess.org/rgPrM8AS",
    fen: "2k5/p1q2p1p/1p4pQ/2n1pP2/n1P1P3/6NP/P3NBPK/1r6 w - - 0 28",
    score: -0.3,
  },
  {
    lichess: "https://lichess.org/HNUBbuYR",
    fen: "r4rk1/1p4p1/2nqb2p/p1nppp2/8/P1QP1NP1/1P1BPPBP/R4RK1 w - - 4 17",
    score: 0.3,
  },
  {
    lichess: "https://lichess.org/W6pUDAKE",
    fen: "1r3rk1/1q4pp/p2Q4/3Ppp2/1p1b4/1P6/P3BPPP/R4RK1 w - - 3 27",
    score: 0,
  },
  {
    lichess: "https://lichess.org/jlfZhPfl",
    fen: "2r4r/1p2bp1k/1q2p3/pP1pPp2/Bn1P1P1p/4BRP1/1P5P/R5QK w - - 3 23",
    score: 0.6,
  },
  {
    lichess: "https://lichess.org/hyukpocI",
    fen: "5r1k/p2r2b1/1p1pq1p1/nPp1pnBp/P1P1N3/2P3P1/4QP1P/R2R1BK1 w - - 4 22",
    score: 3.1,
  },
  {
    lichess: "https://lichess.org/fUbDqukf",
    fen: "3n1k2/pp4b1/2p2ppp/2P1p3/PPNnPP2/6PP/3B2K1/5B2 w - - 0 34",
    score: 2.2,
  },
  {
    lichess: "https://lichess.org/0QPtu65l",
    fen: "rnb2r1k/pp1pppbp/1q5p/8/3P4/2N1PN2/PP1Q1PPP/R3KB1R w KQ - 5 9",
    score: 1.7,
  },
  {
    lichess: "https://lichess.org/aQSSmae1",
    fen: "2r1r1k1/7p/6p1/6B1/2p2p2/2nn1R1P/3N1PP1/3R1K2 w - - 4 36",
    score: -3.6,
  },
  {
    lichess: "https://lichess.org/O42MZqAi",
    fen: "r2n1k1r/pp2bppp/3pb3/qB6/3N4/2P5/P4PPP/R1BQ1RK1 w - - 4 14",
    score: 2,
  },
  {
    lichess: "https://lichess.org/3jCidoPD",
    fen: "5rk1/6pp/4p3/3pB1P1/2pPq2P/2P3K1/2RQ2P1/7r w - - 17 38",
    score: -16.6,
  },
  {
    lichess: "https://lichess.org/vPqPSLZA",
    fen: "3R4/1p4p1/2k5/5p2/1PP1r2p/2K3P1/7P/8 w - - 0 32",
    score: 0.1,
  },
  {
    lichess: "https://lichess.org/mYlgSrkj",
    fen: "r4rk1/4bppp/pq1pb3/1p2p1Pn/4P3/1NN2P2/PPPQ3P/1K1R1B1R w - - 0 15",
    score: -0.8,
  },
  {
    lichess: "https://lichess.org/cT9hwV2t",
    fen: "rnbr2k1/4ppbp/5np1/2pPN1B1/p2q4/2N1Q3/1P2BPPP/R4RK1 w - - 3 16",
    score: 0.5,
  },
  {
    lichess: "https://lichess.org/bOtDpykE",
    fen: "r1b2rk1/pp1nq1pp/2pb1n2/3p1p2/2PP4/2N1PN2/PP1BB1PP/R2Q1RK1 w - - 3 12",
    score: 0.1,
  },
  {
    lichess: "https://lichess.org/UloLb0s0",
    fen: "3r2k1/p1b2ppp/4pq2/1P6/P1p2P2/B1P3QP/6P1/5RK1 w - - 3 28",
    score: 0.2,
  },
  {
    lichess: "https://lichess.org/8G74YN8D",
    fen: "r1br2k1/ppq2pbp/2n1pnp1/2pp4/8/PPBPP1PP/2PNNPB1/R2Q1RK1 w - - 1 13",
    score: -0.6,
  },
  {
    lichess: "https://lichess.org/WV0eFTlw",
    fen: "1b6/1P3k2/1N4p1/5p1p/8/6P1/6KP/5B2 w - - 7 51",
    score: 9.8,
  },
  {
    lichess: "https://lichess.org/bgvMFwdD",
    fen: "4r1k1/5pbp/6p1/2ppPb2/8/2P1P1BP/1q2BPP1/2RQ2K1 w - - 3 27",
    score: 0.8,
  },
  {
    lichess: "https://lichess.org/fZSaZbFn",
    fen: "1r2qrk1/p2p4/2nPp2p/2RnPpp1/8/3Q1N2/PP1B1PPP/4R1K1 w - - 2 20",
    score: 3.2,
  },
  {
    lichess: "https://lichess.org/BjiEXW3v",
    fen: "3rr1k1/b4ppp/N1bq1n2/8/3p4/P2BPN2/1P2QPPP/2R2RK1 w - - 0 25",
    score: 1.3,
  },
  {
    lichess: "https://lichess.org/OY4ufgPY",
    fen: "r2qkb1r/pQp3pp/5n2/3p1b2/1n1P4/5N2/PP3PPP/RNB1KB1R w KQkq - 1 9",
    score: -2.1,
  },
  {
    lichess: "https://lichess.org/HDrGwLpH",
    fen: "rnbq1k1r/pp3ppp/8/1B2p3/3Pn3/1Nb5/PP3PPP/R1BQ1RK1 w - - 0 11",
    score: 4.4,
  },
  {
    lichess: "https://lichess.org/rl5i9Ykw",
    fen: "r2q3r/pb2kpb1/1pn2Npp/2ppP3/3P4/P1P2N2/1P4PP/R1BQ1RK1 w - - 1 15",
    score: 4.9,
  },
  {
    lichess: "https://lichess.org/PeHyjYFj",
    fen: "3q1rk1/4nppp/2rp4/p2bp3/R3P3/2PQN3/1P3PPP/3R2K1 w - - 0 22",
    score: 1.1,
  },
  {
    lichess: "https://lichess.org/3SRuIHmM",
    fen: "1r2r3/p1p3kp/b7/8/8/1PPn1BP1/P4K1P/RN5R w - - 6 25",
    score: -6.1,
  },
  {
    lichess: "https://lichess.org/8mBipweS",
    fen: "2r1n3/p5kp/1p1p2p1/8/3bP3/qP1Q2PP/3R2BK/8 w - - 0 34",
    score: 0.2,
  },
  {
    lichess: "https://lichess.org/5TZD4CD3",
    fen: "r2q1r2/3nbppk/p7/1p1bp3/P4P2/1N2B2P/1PP3P1/R2Q1RK1 w - - 0 16",
    score: 1.9,
  },
  {
    lichess: "https://lichess.org/pADQFBXM",
    fen: "1rbq1rk1/1p3pb1/p2p1np1/2pPn3/P3P3/2N1BP1p/1P1QB1PP/R4RKN w - - 0 16",
    score: 0.6,
  },
  {
    lichess: "https://lichess.org/OmO36Jnw",
    fen: "2r1kb1r/3n1ppp/pq2pn2/1p6/3pN3/PB2PP2/1P1B1P1P/1Q1RK2R w Kk - 4 15",
    score: -0.9,
  },
  {
    lichess: "https://lichess.org/EcBGy3np",
    fen: "r2q1rk1/pp2bppp/4p3/4Pb2/1nNP4/4B3/P3BPPP/R2Q1RK1 w - - 1 15",
    score: -0.9,
  },
  {
    lichess: "https://lichess.org/gfUuEiaZ",
    fen: "r1bqkb1r/pp2npp1/2n1p2p/3pP1B1/6Q1/2PB1N2/P4PPP/RN3RK1 w kq - 0 11",
    score: -0.2,
  },
  {
    lichess: "https://lichess.org/MeNkldlJ",
    fen: "8/1pb2r1k/2n1q2p/p2p1prQ/P3p3/2B1P1PP/1P1R1PBK/3R4 w - - 8 29",
    score: 1.5,
  },
  {
    lichess: "https://lichess.org/X7pwFfsx",
    fen: "4r1k1/4ppbp/5np1/2q2b2/5N2/1Q4PP/1Pn3BK/2RN1R2 w - - 0 26",
    score: 2,
  },
  {
    lichess: "https://lichess.org/waj3HYel",
    fen: "2r2rk1/1R1n1ppp/3qp3/3p4/N1bP4/4P1P1/3Q1PBP/R5K1 w - - 4 25",
    score: 0,
  },
  {
    lichess: "https://lichess.org/E0gwslsu",
    fen: "2r2rk1/2pq1bp1/ppn1pb2/5p1p/1PPPp2P/PN2P1P1/1BQ1BP2/2RR2K1 w - - 2 21",
    score: 1.9,
  },
  {
    lichess: "https://lichess.org/BtEjrg5d",
    fen: "r1bqk2r/pp1p1pp1/2n2n2/4p2p/1b2P3/1NN4P/PPP2PP1/R1BQKB1R w KQkq - 2 8",
    score: 0.7,
  },
  {
    lichess: "https://lichess.org/Oynkt7v8",
    fen: "3r2k1/1p3ppp/1q1p4/p1nR4/1p2P3/3P3P/PP2NPP1/2Q3K1 w - - 3 25",
    score: 2,
  },
  {
    lichess: "https://lichess.org/6mJuVE94",
    fen: "r1bqk2r/1pp1n1b1/p2p3p/3Pp3/2P2P1P/2NnBN2/PP1Q1P2/2KR3R w kq - 0 15",
    score: 4,
  },
  {
    lichess: "https://lichess.org/9Y7fL6KV",
    fen: "4r1k1/5pp1/2pb3p/pp2qPnP/3pP1Q1/2PP4/PP4B1/4RNK1 w - - 0 28",
    score: -5.2,
  },
  {
    lichess: "https://lichess.org/XhRSshaz",
    fen: "r4r2/p4p1k/1pp1b1pp/2b1P3/4QP2/2N5/PP4PP/2R2R1K w - - 0 21",
    score: 9.1,
  },
  {
    lichess: "https://lichess.org/Njm17PLW",
    fen: "kr2q3/1pR2p2/p3p1p1/P3B1b1/3P3r/5Q2/1PR5/6K1 w - - 0 29",
    score: 5.2,
  },
  {
    lichess: "https://lichess.org/X0zmlbZj",
    fen: "1rq1nrk1/4ppbp/3p2p1/2pPPbN1/1nP2P2/6BP/3NB1P1/R2Q1RK1 w - - 5 23",
    score: 1.3,
  },
  {
    lichess: "https://lichess.org/2RoVZMYT",
    fen: "r5k1/pp1q1p2/2n3p1/5n1p/3PpPQ1/1PP2N1P/5P2/R4RK1 w - - 0 21",
    score: -6.1,
  },
  {
    lichess: "https://lichess.org/CExpgKam",
    fen: "6k1/pp4p1/4q1pp/3pP3/3P2PP/2P2Q2/P2n2N1/6K1 w - - 5 35",
    score: 0,
  },
  {
    lichess: "https://lichess.org/Qq5H74IZ",
    fen: "8/p1b2p2/2n1p1k1/1p2P1pp/2N3P1/P1B4P/1P2KP2/8 w - b6 0 31",
    score: 0.4,
  },
  {
    lichess: "https://lichess.org/5QICmggA",
    fen: "6r1/pp3p2/2pqbn1k/3p1p1p/3P1P1P/2P1P1P1/PPQ1B3/1K1R2R1 w - - 9 25",
    score: 3.1,
  },
  {
    lichess: "https://lichess.org/18Vdu3aO",
    fen: "2r1kb1r/2qn1p1p/6pP/p3p3/1p2b3/1N4B1/PPPQNKP1/2R4R w k - 0 22",
    score: -5.7,
  },
  {
    lichess: "https://lichess.org/SVfozBkt",
    fen: "r3kb1r/pq3ppp/4pn2/4N3/8/2P5/P4PPP/1RB2RK1 w kq - 0 14",
    score: 1.1,
  },
  {
    lichess: "https://lichess.org/3TUow0BT",
    fen: "r3k2r/1p1q2pp/p7/3Pp3/P1B3b1/2P1Q3/6PP/R4RK1 w kq - 0 20",
    score: 8.9,
  },
  {
    lichess: "https://lichess.org/r1imtpAp",
    fen: "r4rk1/1p2qppp/3bnn2/pB1pp3/P7/1NP1BPP1/1P3Q1P/R3R1K1 w - - 1 21",
    score: -1.2,
  },
  {
    lichess: "https://lichess.org/y2c1rWLx",
    fen: "8/1p3r1k/6p1/7p/3Qpq2/2P5/P4PPP/5RK1 w - - 2 29",
    score: 3.1,
  },
  {
    lichess: "https://lichess.org/zDxtAGa1",
    fen: "r4rk1/pp2ppbp/1qn2np1/2Np1bN1/1P1P1B2/P3P2P/5PP1/2RQKB1R w K - 5 15",
    score: 1.6,
  },
  {
    lichess: "https://lichess.org/q7w4sVJF",
    fen: "1rr3k1/4q1pp/pp2p3/2pbNp2/3PpP2/P1P1P3/1P2Q1PP/R4RK1 w - - 0 23",
    score: 1.8,
  },
  {
    lichess: "https://lichess.org/ZAGuM5zZ",
    fen: "r3r1k1/pp1nqpbp/5np1/3p4/2B1p3/1PN1P2P/PB1RQPP1/R5K1 w - - 0 17",
    score: 0.7,
  },
  {
    lichess: "https://lichess.org/7ZgMKiie",
    fen: "2rr2k1/5ppp/4pb2/p1p5/Pq2Q3/1N5P/RPP2PP1/4R1K1 w - - 0 24",
    score: -2.8,
  },
  {
    lichess: "https://lichess.org/vDZWkLR3",
    fen: "2r1r1k1/1pqbppb1/p2p1np1/4n2p/P1P1P3/1PN1BP2/2NQB1PP/1R3RK1 w - - 1 16",
    score: 1.6,
  },
  {
    lichess: "https://lichess.org/ViLJjh4m",
    fen: "5r2/Q4pk1/4p3/P4qp1/4n2p/3N3P/2P2PP1/3R2K1 w - - 0 29",
    score: 6.4,
  },
  {
    lichess: "https://lichess.org/GzrgJOBo",
    fen: "4rrk1/pppqnpp1/2n1b2p/3pP3/1b5B/2NB1N1P/PP2QPP1/R4RK1 w - - 1 13",
    score: -0.6,
  },
  {
    lichess: "https://lichess.org/6CjD8RC6",
    fen: "r2q1rk1/1b1n2pp/p3pb2/1ppp4/2PPp3/PP2PNP1/1B3PBP/2RQR1K1 w - - 0 15",
    score: -0.3,
  },
  {
    lichess: "https://lichess.org/wztdTbgo",
    fen: "2k3r1/1pp5/2n5/p2R2pp/8/1P5P/P4PP1/4R1K1 w - - 2 27",
    score: 7.5,
  },
  {
    lichess: "https://lichess.org/b8cugAsS",
    fen: "r3k3/pp3pp1/2b1p3/4P3/3p1PPr/P4B2/P6P/2R2RK1 w q - 3 23",
    score: 4.8,
  },
  {
    lichess: "https://lichess.org/CKxNRGzb",
    fen: "r1bbk2r/1p3qp1/pQnpp3/8/4P3/2N1B3/PPP1BP2/2KR2R1 w kq - 5 18",
    score: 5.8,
  },
  {
    lichess: "https://lichess.org/c3w77hGk",
    fen: "2rr2k1/p1q2pp1/1p2pb1p/4n3/1P5P/P2R1NP1/4PPK1/2BQ1R2 w - - 5 22",
    score: -0.2,
  },
  {
    lichess: "https://lichess.org/rUpK3ick",
    fen: "1r3rk1/4ppb1/b2p1npp/q2Pn3/2p1P3/P1N1BP2/1PQ1BNPP/RR4K1 w - - 2 19",
    score: 1.2,
  },
  {
    lichess: "https://lichess.org/KWMUSLYu",
    fen: "r2q1rk1/3bbppp/p2p4/4p1Pn/1p1NP3/4BP2/PPPQ3P/1K1R1BR1 w - - 0 16",
    score: 4.6,
  },
  {
    lichess: "https://lichess.org/lkErgEyL",
    fen: "6k1/1p3ppp/2p2n2/p1P1p3/4P3/2Q3P1/PP3PBP/3q2K1 w - - 3 25",
    score: -2.3,
  },
  {
    lichess: "https://lichess.org/AHckAALo",
    fen: "2kr1b1r/ppp2ppp/8/5N2/P1qPP3/2Pb1Q2/3K1PPP/R1B4R w - - 3 20",
    score: 8.6,
  },
  {
    lichess: "https://lichess.org/m0v23AIO",
    fen: "5k2/R4p1p/1r2p3/3pP1p1/2r5/8/P4PPP/3R2K1 w - - 2 29",
    score: -2.6,
  },
  {
    lichess: "https://lichess.org/9o5nujiS",
    fen: "r4n2/pp2k3/2pbp3/8/1B4Bp/7P/PPP3P1/4R1K1 w - - 2 26",
    score: 2.9,
  },
  {
    lichess: "https://lichess.org/T8wGfMRT",
    fen: "8/3pkp2/p1b1p3/6p1/PpN2q2/3B1Pbr/1PP1QK2/3R1R2 w - - 8 30",
    score: -0.1,
  },
  {
    lichess: "https://lichess.org/cdSAtLso",
    fen: "r2q1k2/pp3pb1/2b5/2ppr1Np/7P/PQP1P3/1P3P2/RN2K1R1 w Q - 2 18",
    score: 0,
  },
  {
    lichess: "https://lichess.org/tBYQbdit",
    fen: "5qk1/pp2p1b1/3p2p1/3P4/1nr1B1Q1/4B1PP/PP3P2/R3n1K1 w - - 2 21",
    score: 7.1,
  },
  {
    lichess: "https://lichess.org/zNBloWGo",
    fen: "1n3rk1/p4p2/1p2p1pp/4Pn2/1b2N2P/3r1NP1/1B3PK1/2R1R3 w - - 0 26",
    score: -1.6,
  },
  {
    lichess: "https://lichess.org/RU80WZej",
    fen: "r1bq1rk1/p5bp/1p3pp1/3Pp3/4N3/1QP1n1P1/P4PBP/2R2RK1 w - - 0 18",
    score: -1,
  },
  {
    lichess: "https://lichess.org/Gkf8lszh",
    fen: "r2q1rk1/1p1bb2p/p1n1p1p1/3p1p2/1P1P4/P1NBP1P1/3N1PP1/2RQK2R w K - 3 16",
    score: 0.3,
  },
  {
    lichess: "https://lichess.org/jeVCtsMj",
    fen: "7r/4k1p1/2r1p3/p2p4/3n1P2/PP4P1/3N3P/R4RK1 w - - 1 25",
    score: 0,
  },
  {
    lichess: "https://lichess.org/bZeQ8Ath",
    fen: "2r1r1k1/5n1p/1p1p2p1/p1pP4/Pn1qPB2/NP6/3Q2PP/4RRK1 w - - 1 27",
    score: 1.4,
  },
  {
    lichess: "https://lichess.org/PVFeMM8m",
    fen: "3q2k1/5pbp/3p2p1/2pP2N1/5BP1/2P4P/3Q1P2/1b4K1 w - - 0 29",
    score: 0.2,
  },
  {
    lichess: "https://lichess.org/9Wv6SpOa",
    fen: "2k2rr1/p2p4/1p1RpR2/1Pp1n2p/2P1P3/1P5P/2P1N1P1/6K1 w - - 1 25",
    score: 1.9,
  },
  {
    lichess: "https://lichess.org/XUwlvknW",
    fen: "r1b1r1k1/5pbp/p1p2np1/1pp1q3/4P3/2N1B1PP/PPQ2PB1/3R1RK1 w - - 0 16",
    score: 0.8,
  },
  {
    lichess: "https://lichess.org/VPIzM6CC",
    fen: "7k/p7/1pp3pp/8/3Pp1q1/P3P2P/1P3P1K/8 w - - 0 35",
    score: 1,
  },
  {
    lichess: "https://lichess.org/cwusvVdJ",
    fen: "2kr1n1r/1pqnbbp1/2p2p2/p3p2p/P1NPN2P/1PPB2P1/1BQ2P2/1K1RR3 w - - 0 20",
    score: 2.6,
  },
  {
    lichess: "https://lichess.org/Oy5R0QDv",
    fen: "r4bk1/2p2p2/p1n2r1p/1p4p1/4Pq2/2P1QN1P/PP1N1P2/1K1R2R1 w - - 4 26",
    score: 1.4,
  },
  {
    lichess: "https://lichess.org/zIRTWZsP",
    fen: "2r2rk1/pp1q1ppp/2n1p3/3pP3/5PP1/2P1BN1P/PPB3K1/R4R2 w - - 5 21",
    score: -3,
  },
  {
    lichess: "https://lichess.org/jpCZR4mE",
    fen: "r2qkb1r/pp3pp1/4p2p/2pp3P/3n1P2/2N3NQ/Pn1B2P1/R4RK1 w kq - 0 17",
    score: -7.5,
  },
  {
    lichess: "https://lichess.org/DEGZRaPc",
    fen: "r1b2rk1/1p1nq1p1/2p1p2p/p2pNp2/PbPP1P2/1P1BPR2/1BQ3PP/5RK1 w - f6 0 18",
    score: 3.7,
  },
  {
    lichess: "https://lichess.org/bgZ73T0j",
    fen: "r4k2/pp2R2p/2p1pnp1/8/2B5/8/PPP2PPP/6K1 w - - 0 23",
    score: 6.5,
  },
  {
    lichess: "https://lichess.org/qcNZLk5w",
    fen: "r5k1/pp3ppp/4b3/3p4/1q2n3/1P2BNPP/P4PB1/R3R1K1 w - - 1 20",
    score: -3.5,
  },
  {
    lichess: "https://lichess.org/F0lzsd3T",
    fen: "rnr3k1/p1pq1ppp/1p2p3/3pPn2/P2P4/B1PP1N2/5PPP/R2Q1RK1 w - - 3 13",
    score: 1.1,
  },
  {
    lichess: "https://lichess.org/D1U8NGok",
    fen: "r4rk1/pp2ppbp/4bnp1/8/B3P3/2N4P/PP3PP1/R1BR3K w - - 1 15",
    score: 0.8,
  },
  {
    lichess: "https://lichess.org/4tG79Hyj",
    fen: "r1bq1bk1/1p3r2/p2p1nn1/1N1Pp1pp/1P2Pp2/3N1P2/P3BBPP/2R1QRK1 w - - 0 20",
    score: -1.8,
  },
  {
    lichess: "https://lichess.org/NGId2SbM",
    fen: "r3r1k1/2pnqp1p/3p2p1/pb1P4/1p2PP1N/1P4P1/PN1Q2BP/4R1K1 w - - 3 29",
    score: -1.6,
  },
  {
    lichess: "https://lichess.org/mAHl0ohT",
    fen: "r1b2rk1/1p3p1p/p2N2p1/3Pp3/8/Q7/P2q1PPP/R4RK1 w - - 0 18",
    score: 1.3,
  },
  {
    lichess: "https://lichess.org/srMEPucE",
    fen: "5k1r/p1r1bppp/1pNp1q2/2pP1b2/2P5/8/P1P1QPPP/1RB1R1K1 w - - 1 19",
    score: 8.6,
  },
  {
    lichess: "https://lichess.org/FlvvnFKz",
    fen: "7r/1p1r2p1/3qbk1p/4p3/3p4/1B2QPP1/PPP4P/2KRR3 w - - 0 27",
    score: 2,
  },
  {
    lichess: "https://lichess.org/TSWVwwDz",
    fen: "rn1qkb1r/pp2ppp1/2p2nbp/8/3P3P/6NN/PPP2PP1/R1BQKB1R w KQkq - 2 8",
    score: 0.3,
  },
  {
    lichess: "https://lichess.org/L4uhRKbT",
    fen: "1rb2rk1/2q1bp1p/pn1p2p1/3Pp3/1PB1P3/1QB2N1P/5PP1/R3R1K1 w - - 5 25",
    score: 3,
  },
  {
    lichess: "https://lichess.org/RcO12wev",
    fen: "6k1/7p/1r1p1rp1/p1pPp2n/P3Pp1b/NP1B1P1P/2R3PK/1R6 w - - 0 33",
    score: 3.7,
  },
  {
    lichess: "https://lichess.org/yh35lpjA",
    fen: "r6r/3npkb1/p2pp1p1/q6p/1n2P3/1B2BP2/1PPQN1PP/1K1R3R w - - 2 19",
    score: 2.3,
  },
  {
    lichess: "https://lichess.org/kpcfViXf",
    fen: "r4rk1/pp3ppp/1n3q2/4N3/8/8/PP2bPPP/R2Q1RK1 w - - 0 18",
    score: -0.3,
  },
  {
    lichess: "https://lichess.org/rN3aVq1X",
    fen: "8/2pk3p/1p1n2p1/p2Bp3/PP2PbP1/2PK3P/7B/8 w - - 1 35",
    score: 3.8,
  },
  {
    lichess: "https://lichess.org/mec6OfoV",
    fen: "2kr1b1r/ppp2ppp/5p2/P2P4/2B5/2N5/1Pb2PPP/R3K2R w KQ - 0 13",
    score: -1.2,
  },
  {
    lichess: "https://lichess.org/iolroEsw",
    fen: "r3k2r/ppp2pp1/3bp3/3Pnq1p/2P3b1/5N2/PP2BPPP/R1BQ1RK1 w kq - 1 12",
    score: -0.5,
  },
  {
    lichess: "https://lichess.org/WsEpDSNb",
    fen: "5rk1/5p1p/r2q2pb/1PpPp3/4P1b1/2PQP3/2B1N1PP/5RK1 w - - 0 20",
    score: 0.8,
  },
  {
    lichess: "https://lichess.org/X1lWOsAc",
    fen: "1r1n1rk1/3qp1b1/4p1pp/3pP2n/1ppP4/2P2NPP/1P1N1P2/R1BQR1K1 w - - 0 21",
    score: 3.8,
  },
  {
    lichess: "https://lichess.org/SPsfdKZS",
    fen: "r3r1k1/1p3ppp/2pq4/3p4/p2Pn1b1/2P2NP1/PP3PBP/R1Q1R1K1 w - - 0 17",
    score: 0.2,
  },
  {
    lichess: "https://lichess.org/9jsp2WsS",
    fen: "1rbqk2r/p1pn1ppp/1p3n2/3p4/Pbp5/2N2NP1/1P2PPBP/R1BQ1RK1 w k - 0 10",
    score: 0.9,
  },
  {
    lichess: "https://lichess.org/uiS3U2L7",
    fen: "r1bqk2r/1p2npbp/p2pp1p1/2p5/P2nP3/2NPB1P1/1PP1NPBP/R2Q1RK1 w kq - 3 10",
    score: 0.1,
  },
  {
    lichess: "https://lichess.org/3nYNmHPN",
    fen: "r2q1rk1/1b1p1p1p/p1np2p1/1p6/4P3/1BN5/PP1Q1PPP/R4RK1 w - - 0 18",
    score: 1.5,
  },
  {
    lichess: "https://lichess.org/OLAvq5EM",
    fen: "7r/ppr1kp2/4np1p/2bBp3/8/2PP1PN1/PP5P/1K1R3R w - - 1 22",
    score: 2.1,
  },
  {
    lichess: "https://lichess.org/TSnqg35N",
    fen: "8/8/3k1p2/2p1b1p1/2K5/pPP4P/P1B3P1/8 w - - 0 38",
    score: 1.9,
  },
  {
    lichess: "https://lichess.org/qtr5WTld",
    fen: "rnqr4/6k1/p1b2pp1/2P1p2p/P2p3P/1N3P2/1P1QBKP1/R6R w - - 0 23",
    score: -1,
  },
  {
    lichess: "https://lichess.org/U9kxwd9R",
    fen: "1r1q1rk1/2n1ppbp/p5p1/1ppPp3/P1n1b3/1P1Q1NPP/5PB1/R1B1R1K1 w - - 0 20",
    score: -4.5,
  },
  {
    lichess: "https://lichess.org/muUupvDK",
    fen: "2r1r1k1/p3qppp/5n2/2ppp3/7Q/2P1P3/PP1N1PPP/2R1R1K1 w - - 0 21",
    score: -0.5,
  },
  {
    lichess: "https://lichess.org/8XJqTNGN",
    fen: "r1bq1rk1/pp2n1b1/2n2pp1/1BPpp2p/4P2P/2P1BN2/PP1N1PP1/R2Q1RK1 w - - 0 12",
    score: 2.4,
  },
  {
    lichess: "https://lichess.org/u1cK6sHG",
    fen: "rn3rk1/1b1n1ppp/pq2p3/1pp5/P2P4/1Qb1PNP1/5PBP/R1BR2K1 w - - 0 16",
    score: -2,
  },
  {
    lichess: "https://lichess.org/v0giCu1x",
    fen: "r4rk1/p4ppp/q3p3/3pQ3/n1p5/2P2P2/P1P3PP/BR3RK1 w - - 0 19",
    score: -4.9,
  },
  {
    lichess: "https://lichess.org/S4PvkhQH",
    fen: "2k5/ppq2pp1/4p2p/3rP2P/6P1/4R3/PPP1Q3/1K6 w - - 3 26",
    score: 0.3,
  },
  {
    lichess: "https://lichess.org/0qGZfd95",
    fen: "r3k2r/ppp4p/5p1Q/8/3n2q1/1BN5/PP3P2/2R2K2 w - - 3 22",
    score: 6.3,
  },
  {
    lichess: "https://lichess.org/h58OqpKU",
    fen: "r3k1r1/1bq2p1p/1pn1p3/p1pp2B1/8/P1PP1QP1/1P3P1P/R3RNK1 w q - 1 19",
    score: 2.5,
  },
  {
    lichess: "https://lichess.org/kyZ0JKZX",
    fen: "5rk1/5pp1/1Q5p/2R5/2p1q3/7P/5PK1/8 w - - 2 39",
    score: -5.3,
  },
  {
    lichess: "https://lichess.org/pNR1uaOx",
    fen: "r1b2k1r/2nnq1pp/3Np3/p2pPp2/1PpP2P1/5N2/PPBQ1P1P/2KR3R w - a6 0 17",
    score: 8.6,
  },
  {
    lichess: "https://lichess.org/3LUcvIHg",
    fen: "2r5/2r2ppk/p3p1b1/4R2P/1p6/1PN3P1/1P3PK1/2R5 w - - 0 29",
    score: 0.1,
  },
  {
    lichess: "https://lichess.org/w0qdkpnU",
    fen: "3r1rk1/6pp/2n2p1n/p1qppb2/1p6/PP2PNPP/1BP1QPB1/2RR2K1 w - - 0 19",
    score: 1,
  },
  {
    lichess: "https://lichess.org/AKDhtLof",
    fen: "r6r/p2k1ppp/8/3p4/1b6/4BP2/PP3P1P/R3K2R w KQ - 2 17",
    score: -0.2,
  },
  {
    lichess: "https://lichess.org/yG5Tnkpw",
    fen: "r3qrk1/2pb1p1n/np1p2pb/1N1Pp2p/2P1P3/PN3P2/4BBPP/R2Q1RK1 w - - 0 18",
    score: 1.1,
  },
  {
    lichess: "https://lichess.org/SeRTaoSj",
    fen: "rnbqkbnr/ppp2ppp/4p3/3p4/3PP3/8/PPP2PPP/RNBQKBNR w KQkq d6 0 3",
    score: 0.5,
  },
  {
    lichess: "https://lichess.org/pZsWPpjG",
    fen: "r2k3r/4qp1p/p1Pp1np1/2n5/1p3P1B/3B2Q1/PPP3PP/2KR4 w - - 0 19",
    score: 3.2,
  },
  {
    lichess: "https://lichess.org/y0THNvA7",
    fen: "r1bq1rk1/p4ppn/1p1p2n1/2pPp1p1/1PP1P3/P1N3P1/5P1P/R1BQRBK1 w - - 0 15",
    score: 1.2,
  },
  {
    lichess: "https://lichess.org/46F8guWB",
    fen: "r1b2rk1/1pp1q1p1/p1np1n1p/4bp2/1PP4P/P1NBP2N/1BQ2PP1/2KR3R w - - 1 15",
    score: 0.4,
  },
  {
    lichess: "https://lichess.org/vPOlBlV8",
    fen: "1rb1k2r/p1qp1pb1/2p1p2p/4P3/4Np2/3BQ3/PPP3P1/1R3R1K w k - 0 18",
    score: 0.7,
  },
  {
    lichess: "https://lichess.org/1RWH0DTx",
    fen: "r1bqr1k1/pp4pp/2p1Ppnn/3p4/1b3PP1/2NB1N1P/PPPB4/R2QK2R w KQ - 1 14",
    score: 2.5,
  },
  {
    lichess: "https://lichess.org/K4QGSpQA",
    fen: "r1bn1rk1/ppq1b1pp/3p4/3Ppp2/2P5/2BB1N2/P1Q2PPP/R4RK1 w - - 2 16",
    score: -1.6,
  },
  {
    lichess: "https://lichess.org/WsoONP2f",
    fen: "1qr1r1k1/p4pbp/1p1pn1p1/3bpP2/2P1P3/1P4P1/PB1Q2BP/2RR2K1 w - - 0 23",
    score: -0.1,
  },
  {
    lichess: "https://lichess.org/IP6SdFU9",
    fen: "rr3n2/2q4k/p2b1p1p/1ppPp2n/P3PPQ1/1P1B2P1/1BR4P/4R1K1 w - - 2 30",
    score: 5.9,
  },
  {
    lichess: "https://lichess.org/Z02xHqnm",
    fen: "rr3nk1/1pq2pbn/p2p2p1/P1pP2Bp/2P1PQ2/1R4N1/1P2B1PP/5RK1 w - - 1 21",
    score: -0.2,
  },
  {
    lichess: "https://lichess.org/uV6x3RLY",
    fen: "2r4r/4kp2/pn2p3/1p1pPp2/5P1p/1P1N3P/P1PR1KP1/3R4 w - - 2 28",
    score: -2.1,
  },
  {
    lichess: "https://lichess.org/5HGa70Wv",
    fen: "r2q1rk1/2p2pb1/3p2pp/2pPp3/p1P1P1b1/P1N5/1PQN1PPP/R4RK1 w - - 0 16",
    score: 0.6,
  },
  {
    lichess: "https://lichess.org/qwx4mVZo",
    fen: "3r2k1/ppR4p/3P4/3b1P2/4p1P1/P6P/1P4B1/5K2 w - - 1 32",
    score: 8.2,
  },
  {
    lichess: "https://lichess.org/VVvM0Ytt",
    fen: "r4r2/3nn1bk/4b2p/1N1p1pp1/3PN3/4P1P1/3BQPBP/1Rq3K1 w - - 0 27",
    score: 7,
  },
  {
    lichess: "https://lichess.org/ktsU27CU",
    fen: "3rb1k1/R4p1p/4p1p1/3n4/3N4/P3P3/4BPPP/6K1 w - - 1 32",
    score: 1.7,
  },
  {
    lichess: "https://lichess.org/bLRbBkY2",
    fen: "r4rk1/ppqnn1pp/2pp1pb1/4p3/1bP1PPP1/2NP3P/PP2N1B1/R1BQ1RK1 w - - 0 13",
    score: 0.6,
  },
  {
    lichess: "https://lichess.org/hXumeUeN",
    fen: "r4rk1/1p1nbpp1/2n1p2p/1p1p1b2/2pP1B2/P1P1PN1P/1P1NBPP1/2R1R1K1 w - - 5 15",
    score: -0.1,
  },
  {
    lichess: "https://lichess.org/9pGpF5e2",
    fen: "2kr3r/pp2bp1p/4b1pq/2p4n/3pP3/1P1P4/P1PK1Q1B/4RNRB w - - 22 27",
    score: -2.2,
  },
  {
    lichess: "https://lichess.org/jMOXkXj7",
    fen: "5rk1/4bppp/p3p3/1p1q4/5B2/nP3N2/4RPPP/1Q4K1 w - - 0 23",
    score: -5.5,
  },
  {
    lichess: "https://lichess.org/UY5x0OoX",
    fen: "2r1r1k1/5pp1/p4n1p/1p1p4/2qPp3/B1P3P1/P1R1PP1P/1Q3RK1 w - - 0 21",
    score: -1.3,
  },
  {
    lichess: "https://lichess.org/QvAHqVXv",
    fen: "r2q1b2/pp1n1kp1/2p1pnpr/7p/3P1N1P/3B1P2/PPP3P1/R1BQK2R w KQ - 6 14",
    score: 6.1,
  },
  {
    lichess: "https://lichess.org/aJCOlXzj",
    fen: "2kr3r/5p2/R3p3/2B3p1/p4n1p/2b5/2P3PP/5RK1 w - - 1 28",
    score: -6.7,
  },
  {
    lichess: "https://lichess.org/3GINP3vd",
    fen: "r2q1rk1/p1nnppbp/1p1p2p1/2pP4/P3PB2/2N2B2/1PPQ1PPP/R3R1K1 w - - 0 13",
    score: 1.2,
  },
  {
    lichess: "https://lichess.org/5VXPeeFM",
    fen: "2br1rk1/4q1p1/p1Qp3p/2pPp2n/2P1P3/2P2Np1/R4PBP/1R4K1 w - - 0 25",
    score: -1,
  },
  {
    lichess: "https://lichess.org/NXRaYQtQ",
    fen: "5rk1/1r2pp1p/6p1/1q2Q3/p4P2/P2n2PP/1PR3BK/2R5 w - - 1 30",
    score: 0.3,
  },
  {
    lichess: "https://lichess.org/BCHjS06i",
    fen: "rnb1qrk1/ppp3bp/6p1/4p1Bn/2N1P3/3P1N2/PPP2PBP/R2Q1RK1 w - - 2 12",
    score: 0.1,
  },
  {
    lichess: "https://lichess.org/Zd8wn2ox",
    fen: "r2r2k1/Nb1nbppp/1p2p3/8/1P3P2/1R2PN2/5PBP/3R2K1 w - - 1 21",
    score: -0.3,
  },
  {
    lichess: "https://lichess.org/akPjG2TA",
    fen: "1rq1rbk1/p1p2pp1/4b3/3pB2Q/1p3N2/P6P/2P2PP1/3RR1K1 w - - 0 21",
    score: 2.3,
  },
  {
    lichess: "https://lichess.org/8VzFkjKk",
    fen: "3rr1k1/ppq2pp1/2n4p/8/4n1b1/BQP1PN2/PP2BPPP/R4RK1 w - - 3 18",
    score: 2.2,
  },
  {
    lichess: "https://lichess.org/At1cgYZd",
    fen: "r2q1rk1/pp2ppbp/6p1/3Pn3/4P3/4BP2/P2Q1P1P/1R2KB1R w K - 1 14",
    score: 0.3,
  },
  {
    lichess: "https://lichess.org/W75Yq2gl",
    fen: "r4r2/2p3pk/3b1qp1/p4p2/2Q1p3/1P1nP1NP/3PNPP1/R4RK1 w - - 6 27",
    score: -1.7,
  },
  {
    lichess: "https://lichess.org/Zusr65VH",
    fen: "1r1b2k1/3R1rp1/ppn2p1p/2B1p3/8/1PP2N2/1P3PPP/3R2K1 w - - 0 25",
    score: 0.7,
  },
  {
    lichess: "https://lichess.org/O5eiUpUa",
    fen: "r2q1r1k/1p2n1pp/p1n2p2/8/3pN1b1/1B3N2/PPPQ1PPP/R3R1K1 w - - 1 17",
    score: 1,
  },
  {
    lichess: "https://lichess.org/ryAY4Fqb",
    fen: "3r2k1/pbqrnp1p/1p4pb/2p1p3/P3P3/2PnNPB1/1PQN2PP/3RRBK1 w - - 1 21",
    score: 0.8,
  },
  {
    lichess: "https://lichess.org/uiKTd2ck",
    fen: "2r4r/p3kppp/1p2b3/1BqpP3/3Qn2P/2N4R/PPP3P1/1K1R4 w - - 2 19",
    score: -1.2,
  },
  {
    lichess: "https://lichess.org/P6s9vyQQ",
    fen: "rnbqk2r/pp2ppbp/6p1/2p1P3/6n1/2PB1N2/PP3PPP/RNBQK2R w KQkq - 1 8",
    score: 0.4,
  },
  {
    lichess: "https://lichess.org/Ut2meHL4",
    fen: "2r5/1p3k1p/2r2pp1/1N2pb2/P3p3/1P4BP/1KP2PP1/2R5 w - - 5 28",
    score: -0.4,
  },
  {
    lichess: "https://lichess.org/d4z7Tvob",
    fen: "r1b1k2r/pp1nqppp/1n1pp3/8/2PP4/2N2N2/PP3PPP/R2QKB1R w KQkq - 2 10",
    score: 1.4,
  },
  {
    lichess: "https://lichess.org/VQQVcuGa",
    fen: "Qn2k2r/p2n1ppp/2pbp3/3p4/2PP2bq/2N4P/PP2PP2/R1B1KB1R w KQk - 1 12",
    score: 3.6,
  },
  {
    lichess: "https://lichess.org/kESrPI4m",
    fen: "r1bq1b1r/pp2pkpp/8/1N1Pp3/8/2P5/4QPPP/R3KB1R w KQ - 0 16",
    score: 5.4,
  },
  {
    lichess: "https://lichess.org/7yRNDOB5",
    fen: "2r1qrk1/pp2bpp1/1n2p1p1/4P3/5BP1/P1N2Q1P/1P3P2/R2R2K1 w - - 2 20",
    score: 1,
  },
  {
    lichess: "https://lichess.org/0MR9k1Ix",
    fen: "6k1/1p3rbp/2p5/1p6/2n3P1/1KN1Pp1P/8/4RR2 w - - 2 30",
    score: -3.1,
  },
  {
    lichess: "https://lichess.org/LFfqz3wJ",
    fen: "r4rk1/1bq2ppp/p1pb1n2/1p2n3/4P3/2NB1N1P/PPQ2PP1/R1BR2K1 w - - 0 15",
    score: -0.1,
  },
  {
    lichess: "https://lichess.org/nApwGPRp",
    fen: "r3q3/1pk1p1b1/2pp2p1/p5P1/PnPP4/5N1Q/1P1B1P2/2KRR3 w - - 1 26",
    score: 9.4,
  },
  {
    lichess: "https://lichess.org/uxwb9hOi",
    fen: "r2q1rk1/5pbp/p2p4/5P2/2N1p3/2p3P1/PP3PKP/R2Q1R2 w - - 0 20",
    score: 0.7,
  },
  {
    lichess: "https://lichess.org/zrNhDKHN",
    fen: "6k1/pp3qpp/8/2Np1r2/1P2p1P1/P6P/1Q4K1/8 w - - 0 36",
    score: 0,
  },
  {
    lichess: "https://lichess.org/hO7blWib",
    fen: "1r3r2/2qb1pkp/6p1/np1Pp3/2pNP3/2P5/PQ2BPPP/1R1R2K1 w - e6 0 20",
    score: 3.7,
  },
  {
    lichess: "https://lichess.org/DsMEl7PJ",
    fen: "4kn2/8/4pqP1/p2p1n2/Pb1P1PQ1/1R6/1P2N2P/2K5 w - - 0 34",
    score: -0.6,
  },
  {
    lichess: "https://lichess.org/JzOOpLDN",
    fen: "rnbq1rk1/pp2ppbp/2pp1np1/8/2PP4/5NP1/PP2PPBP/RNBQ1RK1 w - - 0 7",
    score: 0.6,
  },
  {
    lichess: "https://lichess.org/cfH5ITGc",
    fen: "r4rk1/3pppbp/bpq2np1/nN6/p3P3/P1N1BP1P/BPPQ2P1/3RR1K1 w - - 5 17",
    score: 3.2,
  },
  {
    lichess: "https://lichess.org/UsM1qTqV",
    fen: "r2q1bnr/ppk4p/2n2p2/3Q4/3P1p2/2P5/PP1N1PPP/R3KB1R w KQ - 1 14",
    score: -0.5,
  },
  {
    lichess: "https://lichess.org/6ysVNfsg",
    fen: "6k1/rBBbbpp1/4p3/1p1p3p/1Pn2P2/P4R2/6PP/2R4K w - - 3 28",
    score: -7.4,
  },
  {
    lichess: "https://lichess.org/5qijPw9B",
    fen: "r3kn1r/1b2qp2/p2p1p2/P1p1p3/1p1PP2p/2PB1N1P/1P2QPP1/R3R1K1 w kq - 5 21",
    score: 2.6,
  },
  {
    lichess: "https://lichess.org/3sBSsYez",
    fen: "r3k2r/ppq1bppp/2n1p3/3pP3/Q2P4/2PB1P2/P4P1P/1RB1K2R w Kkq - 1 13",
    score: 0,
  },
  {
    lichess: "https://lichess.org/jkqbciXt",
    fen: "r2q1rk1/pp2b3/2p1bp1p/3p1pp1/1nPP4/1PN1P1P1/3N1PBP/R2Q1RK1 w - - 0 15",
    score: -1.2,
  },
  {
    lichess: "https://lichess.org/DxgUI3s7",
    fen: "r3k2r/1q1pnppp/p1b1p3/2bN4/1p2PP2/3B4/PPPBQ1PP/1K1R3R w kq - 4 14",
    score: 1,
  },
  {
    lichess: "https://lichess.org/fof3OG1V",
    fen: "r1r3k1/5ppp/p2qb3/1p1p4/3Pp3/1Q2P1P1/PPR2P1P/2R2BK1 w - - 0 21",
    score: 0.5,
  },
  {
    lichess: "https://lichess.org/E1bovGjH",
    fen: "r3kb1r/1pq1p1p1/p1n2n1p/2p2p2/2N5/3P1N2/PPP2PPP/R1BQR1K1 w kq - 0 12",
    score: 4.9,
  },
  {
    lichess: "https://lichess.org/RlfQhV4B",
    fen: "r1b2rk1/ppq2pp1/2n1pb1p/3p4/3P1P2/2PB1N2/PP1N2PP/R2Q1RK1 w - - 3 12",
    score: 1.3,
  },
  {
    lichess: "https://lichess.org/dU8xgeq8",
    fen: "4R1nk/5p1p/8/1p5N/8/2P3K1/P6P/5r2 w - - 10 39",
    score: 0.4,
  },
  {
    lichess: "https://lichess.org/kBlf3OVY",
    fen: "r4rk1/1p2qp2/p1n1b2p/3pPpp1/1P1P4/P2Q1N2/3B1PPP/2R2RK1 w - g6 0 19",
    score: 0.6,
  },
  {
    lichess: "https://lichess.org/BKe3ocne",
    fen: "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1",
    score: 0.5,
  },
  {
    lichess: "https://lichess.org/igtEVuXM",
    fen: "6k1/5pp1/2r4p/R7/4n3/2p3P1/5P1P/4B1K1 w - - 0 32",
    score: -6.2,
  },
  {
    lichess: "https://lichess.org/MjDi18Ei",
    fen: "5rk1/2p2pp1/2Bb3p/p2P4/Pr2n3/5N2/2P2PPP/1R3RK1 w - - 1 22",
    score: 0.8,
  },
  {
    lichess: "https://lichess.org/7ETD6c8l",
    fen: "2kr3r/pp3ppp/2n1p3/7b/3P3q/1P3PN1/PBP4P/R2QK2R w KQ - 2 16",
    score: -1,
  },
  {
    lichess: "https://lichess.org/1yNl88u9",
    fen: "r3rbk1/1bqn1p2/3p2p1/pp1P3p/4PQN1/2P3NP/1PB2PP1/R3R1K1 w - - 0 24",
    score: 7.2,
  },
  {
    lichess: "https://lichess.org/Zj5oacIZ",
    fen: "3r2k1/1b4p1/1p2pr2/p5RP/1P1N1P2/2PB4/1P6/2K5 w - - 0 29",
    score: 0,
  },
  {
    lichess: "https://lichess.org/ECSJHo2Q",
    fen: "4rbQ1/1p1k2p1/p1nppp2/6q1/B3P3/P1N3pP/1PP3P1/1K1R4 w - - 4 23",
    score: 4.8,
  },
  {
    lichess: "https://lichess.org/RerGi4RL",
    fen: "r2q1rk1/pp1nbpp1/2p1p1p1/3n4/3P4/2NBB2P/PPP2QP1/R4RK1 w - - 2 15",
    score: -1.7,
  },
  {
    lichess: "https://lichess.org/T2wtZXco",
    fen: "r4rk1/2qnbppp/p3p3/3b2P1/Np5P/1N2BP2/PPP2Q2/2KR3R w - - 4 19",
    score: -1.8,
  },
  {
    lichess: "https://lichess.org/710aXqDl",
    fen: "3r1rk1/p5p1/1pn1bq1p/2pp1p2/2P5/1P2PN2/P2QBPPP/2R2RK1 w - - 0 17",
    score: -0.7,
  },
  {
    lichess: "https://lichess.org/x8o7OtYl",
    fen: "r2q2k1/pp2pr1p/3n1pp1/2pP4/8/2N4R/PP1Q2PP/4R1K1 w - - 2 21",
    score: -3.6,
  },
  {
    lichess: "https://lichess.org/cRHXO9sI",
    fen: "r1b1k2r/1pqnbppp/p2ppn2/6B1/3NPP2/2N2Q2/PPP3PP/2KR1B1R w kq - 5 10",
    score: 0.8,
  },
  {
    lichess: "https://lichess.org/GXzwy4Nk",
    fen: "r3r1k1/4qb2/2p3pb/pp1p1p1p/3P1NpP/2P1P1P1/PPQ2PB1/1KR1R3 w - - 2 25",
    score: -0.6,
  },
  {
    lichess: "https://lichess.org/hwNSVWHo",
    fen: "r2r2k1/pp4pp/5p2/4p3/PbNp4/3P1KP1/1PP2P1P/R3R3 w - - 1 21",
    score: 0,
  },
  {
    lichess: "https://lichess.org/Q3IkB3zz",
    fen: "6k1/1R2R1p1/7p/3p4/P1b5/2b3P1/3n1NP1/6K1 w - - 0 32",
    score: 7.1,
  },
  {
    lichess: "https://lichess.org/OlaXSPNj",
    fen: "2kr3r/pp2nbpp/1qn1pp2/1B1p2PP/3P4/P1B2N2/1PP1QP2/2KR3R w - - 3 17",
    score: 5.9,
  },
  {
    lichess: "https://lichess.org/JATfuqKv",
    fen: "1rb4r/ppNnk2p/2p2pp1/2p4n/4P3/2N5/PP2BPPP/3RR1K1 w - - 4 18",
    score: 0,
  },
  {
    lichess: "https://lichess.org/9RIs6eRX",
    fen: "r4rk1/1b2ppbp/p5p1/1pn4q/8/P3PN1P/1PB1QPP1/R1BR2K1 w - - 2 17",
    score: -0.1,
  },
  {
    lichess: "https://lichess.org/ytH1O5LM",
    fen: "7r/pp3k2/5Pp1/2bp1qB1/8/2P2Q1P/PP4K1/4R3 w - - 5 35",
    score: 5.1,
  },
  {
    lichess: "https://lichess.org/LsiErad5",
    fen: "6k1/R4p1p/1p4p1/2p5/6P1/5KPP/PP1r4/8 w - - 1 33",
    score: 0,
  },
  {
    lichess: "https://lichess.org/QpxCdaiZ",
    fen: "3rk2r/1pp2pp1/p2qb3/8/3NR3/4Q2P/PP3PP1/3R2K1 w - - 1 23",
    score: 7.7,
  },
  {
    lichess: "https://lichess.org/V1JprxjY",
    fen: "3r2k1/pp4p1/1bpnp2p/4B3/PP6/2P2N2/5PPP/4R1K1 w - - 1 23",
    score: 2,
  },
  {
    lichess: "https://lichess.org/Dhnp1X8d",
    fen: "2r3k1/p4pp1/1p5p/3rp2P/6P1/4B3/P1P1QP2/b5K1 w - - 0 24",
    score: -1.6,
  },
  {
    lichess: "https://lichess.org/tDtja7BY",
    fen: "r3r1k1/pp3pbp/1qn3p1/3pP3/5BbP/5N2/PP1QBPP1/2R2RK1 w - - 6 16",
    score: 0,
  },
  {
    lichess: "https://lichess.org/o4KI708C",
    fen: "r2q1bk1/1p1b1ppp/p2p2n1/2pP2N1/2P4P/2NB2n1/PPQ2PP1/4R1K1 w - - 0 19",
    score: 0.1,
  },
  {
    lichess: "https://lichess.org/Zu36irRp",
    fen: "8/1p4pk/p6p/1n3p2/2Q1q3/1P1p3P/3B1PP1/6K1 w - - 0 33",
    score: -7.1,
  },
  {
    lichess: "https://lichess.org/hS3kKsFu",
    fen: "r4rk1/pp1q1ppp/4p3/2bn4/3N4/1QP1B3/PP3PPP/R2R2K1 w - - 5 17",
    score: 3.8,
  },
  {
    lichess: "https://lichess.org/WJ1g8Fht",
    fen: "r6r/p1k1b1p1/2npp3/1Bp5/1p2P3/2P5/PP3PPP/R1B1K2R w KQ - 2 17",
    score: 1.7,
  },
  {
    lichess: "https://lichess.org/waDAcDxP",
    fen: "2rq1rk1/1p2bppb/2n1pn1p/p2p4/P7/1N1P1NP1/1PP2PBP/R1BQR1K1 w - - 1 14",
    score: -0.1,
  },
  {
    lichess: "https://lichess.org/OyOCfsiz",
    fen: "2rr2k1/ppq3pp/3b1pn1/4p3/6PQ/1P3N2/PBP2P1P/1KR4R w - - 3 21",
    score: -4.4,
  },
  {
    lichess: "https://lichess.org/CpEj7OqN",
    fen: "1rbr1n1k/p1q3b1/2p1pppp/2P5/3PN3/1B2RN1P/P1Q2PP1/4R1K1 w - - 0 24",
    score: 5.8,
  },
  {
    lichess: "https://lichess.org/YaD1ed7o",
    fen: "8/5ppp/1k2p3/p7/3P4/1P4P1/P4K1P/1bB5 w - - 1 34",
    score: -0.2,
  },
  {
    lichess: "https://lichess.org/ePU2AjRC",
    fen: "r1bq1rk1/pp1pppbp/2n3pn/2p5/2B1PP2/2NP1N2/PPP3PP/R1BQK2R w KQ - 1 7",
    score: 0.2,
  },
  {
    lichess: "https://lichess.org/sBlRddFT",
    fen: "rrn3k1/1q1nppbp/3p2p1/1NpP4/P3PP2/1PB1N3/2Q3PP/R4RK1 w - - 1 20",
    score: 3.9,
  },
  {
    lichess: "https://lichess.org/ByUA3ZZw",
    fen: "2kn1r1r/bp4p1/p2p4/P3pP2/1P4P1/2P4p/R4P1P/2BBR1K1 w - - 0 27",
    score: 6.5,
  },
  {
    lichess: "https://lichess.org/O65ZhpEB",
    fen: "r2q1rk1/pb2b1pp/1p1ppn2/3n4/P1BP1p2/2P2N1P/1P1N1PPB/R2QR1K1 w - - 4 15",
    score: 5.7,
  },
  {
    lichess: "https://lichess.org/XYKO9IlA",
    fen: "r4rk1/ppp3b1/n2p2n1/3Pp2q/1PP1P1b1/P1N3BP/2Q3BK/1R4N1 w - - 0 25",
    score: -7.6,
  },
  {
    lichess: "https://lichess.org/AcBRFA6y",
    fen: "r3r1k1/ppn1n1pp/2p2p2/3p3P/3P1N2/2Pq1NP1/PP3PK1/R3R3 w - - 0 19",
    score: 0,
  },
  {
    lichess: "https://lichess.org/cO5aCIHM",
    fen: "5rk1/1pr3pp/1q1N1p1n/p3pb2/8/PP4PP/2P1QPB1/2RR2K1 w - - 4 22",
    score: 3.1,
  },
  {
    lichess: "https://lichess.org/PJw0naRo",
    fen: "4rrk1/pp5p/2pp1p1b/3Pp1n1/2P1P1PB/5P2/PP4K1/RN5R w - - 0 24",
    score: 2.5,
  },
  {
    lichess: "https://lichess.org/1DlgfOpm",
    fen: "3r2k1/pb1rqpp1/1pn1pn1p/2p5/2P5/PP1P1NPN/3R1PBP/3QR1K1 w - - 4 21",
    score: -1.8,
  },
  {
    lichess: "https://lichess.org/oDVFFdFA",
    fen: "r2qr1k1/pppn1ppp/3b1n2/3P4/2PNp1b1/2N3P1/PPQP1PBP/R1B1K2R w KQ - 5 10",
    score: -0.1,
  },
  {
    lichess: "https://lichess.org/ilOm8JgB",
    fen: "2r1kbnr/pp1b1ppp/1qn1p3/3pP3/1P1P4/P4N2/5PPP/RNBQKB1R w KQk - 1 9",
    score: 0.4,
  },
  {
    lichess: "https://lichess.org/NrUt7Tay",
    fen: "r2r2k1/1R1n1pp1/p1nPp2p/2p5/8/2P1BN2/P4PPP/5RK1 w - - 4 24",
    score: 0.1,
  },
  {
    lichess: "https://lichess.org/kKyVJV8G",
    fen: "2r1rbk1/1q1b1pp1/pB1pp1p1/P3n3/1PP1P3/2N2P2/5QPP/2RR1B1K w - - 1 25",
    score: 5.4,
  },
  {
    lichess: "https://lichess.org/4XT4U6jm",
    fen: "3r3r/ppk2p1p/2p1b1p1/4bN2/4P3/8/PPP1B1PP/1K1R3R w - - 0 18",
    score: -1.1,
  },
  {
    lichess: "https://lichess.org/Gv1Mma6l",
    fen: "r4rk1/pQ3p1p/4b1p1/q2p4/3b4/3B2BP/P4PP1/3R1RK1 w - - 0 20",
    score: 0.1,
  },
  {
    lichess: "https://lichess.org/KiCzxyBU",
    fen: "r3kb1r/pp4pp/1qn1bp1n/1Bp1p3/3pP3/2P2NN1/PP1PQPPP/R1B2RK1 w kq - 6 10",
    score: -0.1,
  },
  {
    lichess: "https://lichess.org/XdbQ3RBn",
    fen: "5br1/pp3k2/2n2p2/P2N4/2pP1P2/2P3B1/2P5/R5K1 w - - 1 32",
    score: 4,
  },
  {
    lichess: "https://lichess.org/kAGmK5ia",
    fen: "kb6/1p4p1/p2r4/2pRn3/R3P3/P6P/1P4r1/1K1B4 w - - 2 35",
    score: -8.3,
  },
  {
    lichess: "https://lichess.org/t1CAEmSF",
    fen: "rn3rk1/pp3ppp/1b6/3R4/8/4PNP1/PP3P1P/2K2B1R w - - 1 15",
    score: 4,
  },
  {
    lichess: "https://lichess.org/Ls4ZEwWC",
    fen: "1rr3k1/pp2ppbp/1qnp1np1/8/2PN2b1/1PN1P1P1/PB1Q1PBP/R4RK1 w - - 5 13",
    score: 0.9,
  },
  {
    lichess: "https://lichess.org/DShctOiV",
    fen: "8/ppq3pk/7p/3p4/3Nn3/1PPQ2P1/P5KP/8 w - - 3 27",
    score: 0.7,
  },
  {
    lichess: "https://lichess.org/wg2toxeo",
    fen: "4r3/p1k5/1p3p1p/2q2Pp1/P2p3P/3P1Q2/2PB2RK/8 w - - 0 34",
    score: 5.9,
  },
  {
    lichess: "https://lichess.org/VUovFTDK",
    fen: "5rr1/pk5p/1p2b3/q2p4/2p1p1n1/P1P1R1B1/2PQBPPP/3R2K1 w - - 4 28",
    score: 0.6,
  },
  {
    lichess: "https://lichess.org/8nGtoq8u",
    fen: "2r2rk1/pp1b1pbp/3q1np1/2nPp3/4P3/2N1BN2/PPB3PP/R2Q1R1K w - - 7 15",
    score: 0.7,
  },
  {
    lichess: "https://lichess.org/hs47z6m1",
    fen: "r2qkb1r/2p1pppp/1np5/p3p3/P1PP4/7P/1P3PP1/RNBQK2R w KQkq - 0 11",
    score: -0.4,
  },
  {
    lichess: "https://lichess.org/2vLVg7f5",
    fen: "r2qk1nr/ppp2p1p/2np2p1/1B2b3/4P1b1/2N1BN2/PPP2PPP/R2QK2R w KQkq - 0 8",
    score: 1.6,
  },
  {
    lichess: "https://lichess.org/iFBJGSgb",
    fen: "r3k2r/1b2bppp/p3p3/q2n2P1/1ppP1N1P/4pP2/PPP1N3/1K1RQB1R w kq - 2 17",
    score: -3.5,
  },
  {
    lichess: "https://lichess.org/8cBvbr3B",
    fen: "2r2r1k/1p4pn/p2qp2p/5p2/7P/3BQ3/PPP3P1/1K2R2R w - - 0 23",
    score: 2.7,
  },
  {
    lichess: "https://lichess.org/Sr1nHp5L",
    fen: "1q1r2k1/1b3ppp/pp2p3/2b4n/2B1P3/1P3P2/PBN1Q1PP/3R3K w - - 6 23",
    score: -0.1,
  },
  {
    lichess: "https://lichess.org/K4tjoSd0",
    fen: "r1bq1r1k/pppn2bp/2n3p1/3Qp3/5p2/2N1PNBP/PPP1BPP1/R2R2K1 w - - 0 13",
    score: 1.4,
  },
  {
    lichess: "https://lichess.org/9G5zSDbp",
    fen: "r2qk2r/pb1p2p1/1p1Pp1p1/nN2P1p1/R1P5/8/5PPP/2BQ1RK1 w kq - 0 18",
    score: 3.1,
  },
  {
    lichess: "https://lichess.org/qZiWsdNp",
    fen: "r1bq1rnk/ppp3b1/7p/3p4/3Pp2N/2P1BpP1/PPB2P1P/R2QR1K1 w - - 4 19",
    score: 0.6,
  },
  {
    lichess: "https://lichess.org/ubVxsYi4",
    fen: "8/2p1k1pp/1p6/pP3r2/5P2/2PR2P1/1P3K1P/8 w - - 1 33",
    score: 2.1,
  },
  {
    lichess: "https://lichess.org/fYjWCCgh",
    fen: "1r1q2kr/1b1n2bp/p4pp1/1pp3N1/5P2/2N1B3/PPP3PP/R2Q1RK1 w - - 0 16",
    score: 0.6,
  },
  {
    lichess: "https://lichess.org/ix0uLzVX",
    fen: "2r1k2r/1bqpbpp1/pp2pn1p/n7/2PN4/PPNBP3/1BQ2PPP/1K1R3R w k - 5 15",
    score: 1.1,
  },
  {
    lichess: "https://lichess.org/VLHSQE15",
    fen: "r1bq1rk1/pp4b1/2np2pp/2p1pn2/4N2P/2PP1NP1/PP3PB1/R1BQR1K1 w - - 0 13",
    score: 0,
  },
  {
    lichess: "https://lichess.org/ASCow1Vb",
    fen: "1k1r4/pp5R/2p1np2/4b1p1/1P2P3/2N5/P1P1N1P1/2K5 w - - 1 22",
    score: -1.6,
  },
  {
    lichess: "https://lichess.org/bzoy1w51",
    fen: "r2qrnk1/ppbb1pp1/5n1p/2pP4/2PN4/P1N3P1/1BQ2PBP/R4RK1 w - - 0 17",
    score: 1.4,
  },
  {
    lichess: "https://lichess.org/Esgj0Gal",
    fen: "r4rk1/pb2q2p/1p3p2/3p2p1/Q1pPnN2/6P1/PP2PPBP/2RR2K1 w - g6 0 19",
    score: -0.3,
  },
  {
    lichess: "https://lichess.org/rMxrCciG",
    fen: "4r1k1/pp1b1ppp/8/2pP4/q1P1r3/2PQ4/P4BPP/R4RK1 w - - 2 21",
    score: -0.2,
  },
  {
    lichess: "https://lichess.org/rSFgg2HS",
    fen: "r1r2k2/1p2ppbp/pB1p1np1/3P1b2/2P2P2/N4B2/PP1R2PP/4R1K1 w - - 9 24",
    score: -0.3,
  },
  {
    lichess: "https://lichess.org/Pk3EZRic",
    fen: "r1bk1q1r/pp1pbp2/n1p5/5Qp1/3P4/2N2N1B/PPP4R/R6K w - - 3 20",
    score: -4.3,
  },
  {
    lichess: "https://lichess.org/WKhWekPd",
    fen: "1rr3k1/p3ppbp/q2p1np1/3P4/4P3/6P1/PP3PBP/R1BQ1RK1 w - - 1 16",
    score: 0.4,
  },
  {
    lichess: "https://lichess.org/R6MPUqQd",
    fen: "r4rk1/1b3p2/1p2p1pp/p1b5/P4q2/2P3N1/1PB1QPPP/R4RK1 w - a6 0 19",
    score: -1.2,
  },
  {
    lichess: "https://lichess.org/14TvtQ4e",
    fen: "6k1/5ppp/1n5r/1PBp4/8/3B1PKP/5P2/8 w - - 6 38",
    score: -1.3,
  },
  {
    lichess: "https://lichess.org/io648Cls",
    fen: "3r1b2/1k1r4/2q5/1p5p/2ppN1p1/2P1Q3/1P3PP1/3RR1K1 w - - 0 35",
    score: 0,
  },
  {
    lichess: "https://lichess.org/Ec8avZdr",
    fen: "r1bqrbk1/3n1ppp/2p2n2/3p1NBN/p2P4/1p1B1Q1P/PPP2PP1/2KR3R w - - 0 16",
    score: 3.3,
  },
  {
    lichess: "https://lichess.org/Q0CCXZai",
    fen: "2r2bk1/p4p1p/5Pp1/3pP3/1PbN1P2/7r/PKPB3P/3R3R w - - 1 25",
    score: 5.9,
  },
  {
    lichess: "https://lichess.org/xXNAIOs7",
    fen: "rn2r1k1/pp1n2p1/6q1/3p2Pp/5P1P/3p1PN1/PP2N1K1/R2Q3R w - - 0 20",
    score: 2.5,
  },
  {
    lichess: "https://lichess.org/r23az6Kq",
    fen: "2rr2k1/1b2bppp/pq2pn2/1p6/4P3/1PN2n2/PB2QPPP/1BRR2K1 w - - 0 18",
    score: -0.7,
  },
  {
    lichess: "https://lichess.org/GsM4xSjD",
    fen: "r1q2rk1/1b1nbpp1/pp1p1n1p/4p1B1/P1B1P3/2N2N2/1PP1QPPP/R2R2K1 w - - 0 14",
    score: 1.9,
  },
  {
    lichess: "https://lichess.org/nL3RdwMU",
    fen: "2r5/6bk/r1NBppnp/p3P3/P5P1/1P1b1NK1/5P2/2R1R3 w - - 2 33",
    score: 2.5,
  },
  {
    lichess: "https://lichess.org/LgfDxtXT",
    fen: "r3r2k/3n4/bp1qp1Q1/p1p3P1/3P3B/2P1P3/PP5P/R3K2R w KQ - 1 22",
    score: 7.1,
  },
  {
    lichess: "https://lichess.org/RM4iNuO7",
    fen: "r1b2rk1/pppnq1bp/3p1n2/3P4/2P1pPP1/2N5/PP1QNB2/2KR1B1R w - - 1 16",
    score: 3.5,
  },
  {
    lichess: "https://lichess.org/zNBezFwY",
    fen: "q2r2k1/5pp1/1p4np/8/2P1n3/3B2B1/5PPP/3QR1K1 w - - 0 24",
    score: 0.2,
  },
  {
    lichess: "https://lichess.org/BzMWNVPG",
    fen: "5b2/p6k/1pp1Q1p1/4p3/2P5/PP2P3/2q2PP1/3R2K1 w - - 5 34",
    score: 0.1,
  },
  {
    lichess: "https://lichess.org/VNTYLE3b",
    fen: "r1r3k1/1p4b1/1p1pb2p/2pnpp1P/2BP2p1/P1P1PPB1/1P2NKP1/R6R w - - 1 21",
    score: 2.2,
  },
  {
    lichess: "https://lichess.org/ab2a2Qw6",
    fen: "1r4k1/1pq3pp/1rbp1b2/p1p1pp2/n1P5/PN1PB1P1/Q1R1PPBP/1R4K1 w - - 2 24",
    score: -1.3,
  },
  {
    lichess: "https://lichess.org/2VuK7nDi",
    fen: "1r5r/1p2kp2/pNn1p3/2P5/3p3p/1R4P1/PPP5/2KR4 w - - 0 25",
    score: -2.8,
  },
  {
    lichess: "https://lichess.org/tnXPdXsv",
    fen: "r3r1k1/pp3pp1/2p4p/2b1P2b/7P/2N1PPB1/PP2NKP1/R4R2 w - - 3 20",
    score: 8.3,
  },
  {
    lichess: "https://lichess.org/4rz7U1vr",
    fen: "1k1r4/1p1r4/p1qP2p1/2PRQp2/1P3P2/PK1R1P1p/8/8 w - - 0 44",
    score: 1.7,
  },
  {
    lichess: "https://lichess.org/3T4H3Z9k",
    fen: "r5k1/p2qrppp/2pb4/2pp1n2/5P2/1P3Q1P/PBPPN1P1/4RRK1 w - - 5 16",
    score: 0.1,
  },
  {
    lichess: "https://lichess.org/dcGHrpq3",
    fen: "2r2r2/1p1q2bk/p2p3p/3Ppn2/2P5/1P2P1PP/P2Q1RB1/5RK1 w - - 0 23",
    score: 8,
  },
  {
    lichess: "https://lichess.org/F7pEbms9",
    fen: "rq3rk1/1p2bppp/p2ppn2/4n3/4PB2/1BN4P/PP2QPP1/R2R2K1 w - - 5 15",
    score: -0.9,
  },
  {
    lichess: "https://lichess.org/GbaFfBw9",
    fen: "rr5k/4q1pp/3bnp2/1p1Rp2Q/2p1P3/P1P1B3/1P3PPP/1B2R1K1 w - - 7 26",
    score: 3.3,
  },
  {
    lichess: "https://lichess.org/zlhFFgUm",
    fen: "7r/pppk1ppp/6n1/4P3/2P2b2/P2B1PBP/1PK2P2/7R w - - 5 19",
    score: 7.6,
  },
  {
    lichess: "https://lichess.org/qHdjazq2",
    fen: "1q2nbk1/1pr2r2/pN1p4/P2Pp1pp/4Pp2/5P2/1P2QBPP/2RR2K1 w - - 1 24",
    score: 1.2,
  },
  {
    lichess: "https://lichess.org/6eRHdLAe",
    fen: "r2qk1r1/pp1n1p1p/2pBp1bR/5n2/3P4/3B2N1/PPP2PP1/R2QK3 w Qq - 5 16",
    score: 1.4,
  },
  {
    lichess: "https://lichess.org/K2WC2hCL",
    fen: "r3kb1r/pp3ppp/4p3/1b2Q3/8/3q4/PP1N1PPP/R1B2RK1 w kq - 0 14",
    score: -2.6,
  },
  {
    lichess: "https://lichess.org/xrUP8W4M",
    fen: "6k1/pp3p1p/6p1/P7/3nP3/8/2r3PP/3K3R w - - 0 31",
    score: -9,
  },
  {
    lichess: "https://lichess.org/7MyNv2Vc",
    fen: "1q2r1k1/1p2ppbp/p1rpbnp1/8/2P1PP2/1PN1B3/P2QB1PP/2RR2K1 w - - 1 19",
    score: 1,
  },
  {
    lichess: "https://lichess.org/FORSTgig",
    fen: "r1b1kq2/pp3pp1/2p1pnP1/3n4/3P4/1PN4Q/PKP5/3R1BN1 w q - 1 18",
    score: 0.4,
  },
  {
    lichess: "https://lichess.org/fJgAXwto",
    fen: "r4r2/pp1b2kB/8/3pp2Q/5P2/4BPK1/Pq5P/3R3R w - - 0 26",
    score: 24.5,
  },
  {
    lichess: "https://lichess.org/wDconSLM",
    fen: "8/p3bkpp/1p2p1n1/4Pp2/3P1P2/P2Q1NPq/7P/2B3K1 w - - 1 28",
    score: 5.2,
  },
  {
    lichess: "https://lichess.org/SPiHWMJ2",
    fen: "4r1k1/1pp3pp/p1p5/8/6q1/P1NPB1P1/1PP2PKP/1R6 w - - 1 24",
    score: -4.8,
  },
  {
    lichess: "https://lichess.org/dR0Qje6a",
    fen: "r3r2k/p6p/1p2b1p1/2p1P1q1/2BnP3/2Q3BP/PP1N2P1/R3R1K1 w - - 1 24",
    score: 9,
  },
  {
    lichess: "https://lichess.org/tA0vySCi",
    fen: "r2q1rk1/5ppp/2n2b2/2pp3b/8/2NB1N1P/PP3PP1/R2Q1RK1 w - - 0 16",
    score: -1.6,
  },
  {
    lichess: "https://lichess.org/NZmOZo44",
    fen: "r2qkb1r/ppp2ppp/5n2/3p1b2/1n1P4/1QN1BP2/PP2P1PP/R3KBNR w KQkq - 1 8",
    score: -0.8,
  },
  {
    lichess: "https://lichess.org/TkqOUXWi",
    fen: "1r3rk1/2pbqp1p/1p1p2p1/pPn1p3/P1P1P3/3P2PP/2QN1PBK/4RR2 w - - 5 23",
    score: 0,
  },
  {
    lichess: "https://lichess.org/uwZ1kNsp",
    fen: "6k1/2p3p1/p1nr3p/4p3/7P/P3P1P1/6B1/R5K1 w - - 0 28",
    score: 0.2,
  },
  {
    lichess: "https://lichess.org/YxotcLS0",
    fen: "1r4k1/4p3/RP2p1pp/2pp4/2N5/1Pb5/5PPP/6K1 w - - 0 30",
    score: -1.9,
  },
  {
    lichess: "https://lichess.org/NEuIQbMQ",
    fen: "r1b3kr/pp2p1bp/1n1q2p1/2p2pN1/2Pp1P2/3P2P1/PP2Q2P/R1B1KB1R w KQ - 4 18",
    score: -0.3,
  },
  {
    lichess: "https://lichess.org/RBP2eSWK",
    fen: "r2qk2r/ppp2ppp/1b2bP2/nP6/2pp4/2P2N2/P3QPPP/RNB1K2R w KQkq - 3 11",
    score: -0.3,
  },
  {
    lichess: "https://lichess.org/wXRZEDVI",
    fen: "4r3/6pk/2p4p/7b/2Q4B/5P1P/4nP1K/R7 w - - 1 30",
    score: 14.8,
  },
  {
    lichess: "https://lichess.org/0G14SnZg",
    fen: "r4rk1/ppp2p2/1n3qp1/8/2b2B2/2P3R1/P4PPP/R1Q3K1 w - - 2 23",
    score: -4.7,
  },
  {
    lichess: "https://lichess.org/FYs4Vr3t",
    fen: "r4rk1/pp1qbpp1/2n1bn1p/3p4/2pP3B/2P2N1P/PPBN1PP1/R2QR1K1 w - - 3 16",
    score: 1.7,
  },
  {
    lichess: "https://lichess.org/ND1xG5lq",
    fen: "4r1k1/1bp2pp1/3b4/3r1qPp/1pp5/3N1P2/PB1Q4/K1NR3R w - - 0 28",
    score: -1.8,
  },
  {
    lichess: "https://lichess.org/mMcaXhBo",
    fen: "r7/2p2pp1/3bk2p/8/1n1P4/2NK3P/1P2NPP1/2R5 w - - 2 27",
    score: 1.3,
  },
  {
    lichess: "https://lichess.org/PQLScU7d",
    fen: "1r4k1/2q2pp1/p2R1b1p/2p1pb2/4N3/QBP5/PP4PP/2K5 w - - 2 25",
    score: 0.5,
  },
  {
    lichess: "https://lichess.org/mQjNBrRX",
    fen: "B4rk1/2q1bppn/p7/2p2bP1/1p3p2/3P4/PPPQN3/R4RK1 w - - 0 23",
    score: 0,
  },
  {
    lichess: "https://lichess.org/nbNsmxCU",
    fen: "2r1k3/2q2p2/p1b1p1p1/1pp1n1br/4P3/P1PPB2P/5NB1/R3QRK1 w - - 0 26",
    score: -1.5,
  },
  {
    lichess: "https://lichess.org/2ok0Yv6D",
    fen: "r4r2/ppp1b2k/7p/5bp1/2B1p3/1PBnP3/P2RNPPP/4K2R w K - 6 19",
    score: -0.5,
  },
  {
    lichess: "https://lichess.org/KjdVM3GB",
    fen: "8/p1p5/3b1k2/3Rq2p/4B1p1/P1R1P1P1/1P3PK1/8 w - - 10 44",
    score: 8.5,
  },
  {
    lichess: "https://lichess.org/O4NibAkg",
    fen: "r1b1k1nr/ppp1q1bp/1n3pp1/3Qp3/2B4B/4PN2/PPP2PPP/RN2K2R w KQkq - 4 10",
    score: -1.9,
  },
  {
    lichess: "https://lichess.org/CYtWVtLn",
    fen: "rn2kbnr/ppq2ppp/2p5/4p2b/4P3/2NB1N1P/PPP2PP1/R1BQK2R w KQkq - 1 8",
    score: 0.5,
  },
  {
    lichess: "https://lichess.org/slaFV7xH",
    fen: "2kr4/pp3bpp/2p2p2/q1n1pN2/2P5/1P2PNB1/P4PPP/3Q2K1 w - - 1 22",
    score: -7.3,
  },
  {
    lichess: "https://lichess.org/LC7i3kk8",
    fen: "8/5pp1/1pNk3p/1P6/P1n1B3/6P1/4K3/8 w - - 3 45",
    score: 5.1,
  },
  {
    lichess: "https://lichess.org/T6eEAFM6",
    fen: "1k1r1b1r/pp3ppp/2n5/4p3/3P2Bq/2N5/PP3PP1/R1BQ1RK1 w - - 1 14",
    score: 5.8,
  },
  {
    lichess: "https://lichess.org/RjrIBoGF",
    fen: "r2rq1k1/p1Q2ppp/1p2p3/2n5/2P5/1PB5/P4PPP/3RR1K1 w - - 10 25",
    score: 2.4,
  },
  {
    lichess: "https://lichess.org/1O2aoOux",
    fen: "r2qk2r/pp2bppp/2p1pnb1/4B3/2BP4/8/PPP1N1PP/R2Q1RK1 w kq - 1 12",
    score: -2,
  },
  {
    lichess: "https://lichess.org/ORTChlNS",
    fen: "rbq1k2r/pp1n2p1/2p1p1p1/2P2p2/3Pp3/4P1B1/PP1NQPPP/1R3RK1 w kq f6 0 17",
    score: 1.6,
  },
  {
    lichess: "https://lichess.org/Ueby8Pa7",
    fen: "r7/5p2/1r2b2p/3pkp2/1P1R3P/4P1P1/1K2BP2/2R5 w - - 5 48",
    score: 4.1,
  },
  {
    lichess: "https://lichess.org/m54LHiQS",
    fen: "5k2/pp6/4Pbp1/7p/4K2P/1B1r4/P4PP1/8 w - - 0 36",
    score: 0.1,
  },
  {
    lichess: "https://lichess.org/TWQ4G3Aa",
    fen: "2rqr1k1/pp4bp/3pbpp1/3N2B1/2QP4/5N1P/PP3PP1/R4RK1 w - - 1 17",
    score: 0.5,
  },
  {
    lichess: "https://lichess.org/3S0FuGw4",
    fen: "2rr1bk1/1b3p1p/p3p1pP/1p1qP3/3NpP2/P1P4R/1P1Q1BPK/4R3 w - - 3 28",
    score: 0,
  },
  {
    lichess: "https://lichess.org/TrNC7tWN",
    fen: "b4rk1/2qn1ppp/2Bp1b2/3P4/4P3/4BN2/2Q2PPP/5RK1 w - - 7 21",
    score: 4.1,
  },
  {
    lichess: "https://lichess.org/XIhU51Ne",
    fen: "6rk/p6p/6pQ/1Pp5/P2bp3/8/6PP/5K2 w - - 1 36",
    score: 4.2,
  },
  {
    lichess: "https://lichess.org/JFqoqorC",
    fen: "3q1rk1/1p2n1b1/2n1b1pp/4p3/1P1pP3/6P1/rB2NPBP/1R1QNRK1 w - - 3 18",
    score: -0.6,
  },
  {
    lichess: "https://lichess.org/NYvl1BfQ",
    fen: "1k2r3/pp5p/2p2np1/8/8/6NP/PPP3P1/4R1K1 w - - 1 25",
    score: 0.6,
  },
  {
    lichess: "https://lichess.org/5xfzJF5W",
    fen: "3r2k1/4qppp/3pbn2/1Pn1p3/4P3/2N1BP2/4B1PP/Q2R2K1 w - - 3 21",
    score: 4,
  },
  {
    lichess: "https://lichess.org/WSYs5YBh",
    fen: "1n1q1r1k/1r2p1bp/6p1/1BPpN2b/Q2Pnp2/7P/3B1PP1/1NR2RK1 w - - 3 23",
    score: 4.3,
  },
  {
    lichess: "https://lichess.org/yE65mntH",
    fen: "r2q1rk1/pp2n1b1/2n3pp/1BPpp3/1P4b1/P4N1N/1BP2PPP/R2QK2R w KQ - 2 13",
    score: -1.9,
  },
  {
    lichess: "https://lichess.org/lKMah40u",
    fen: "4r1k1/1p5p/p1rR1Q2/P1P4q/1p2p3/6P1/4PPBP/6K1 w - - 1 25",
    score: 0.9,
  },
  {
    lichess: "https://lichess.org/SclzVMZR",
    fen: "6rk/1bq4p/1p6/p1p1bP1Q/Pn1p4/NP6/2PB2B1/6RK w - - 0 33",
    score: -1.5,
  },
  {
    lichess: "https://lichess.org/ZFCuUznS",
    fen: "r2qkb1r/1p2ppp1/1np1bn1p/p7/P1p5/N4NP1/1PQPPPBP/R1B1R1K1 w kq - 2 12",
    score: 0.3,
  },
  {
    lichess: "https://lichess.org/aWqzQAaP",
    fen: "r2qkb1r/pp1b1ppp/2n2n2/4p3/2P5/pN1PpNP1/5PBP/R1BQ1RK1 w kq - 0 12",
    score: -1,
  },
  {
    lichess: "https://lichess.org/droRSc3y",
    fen: "r2q1rk1/2p1nn1b/1p1p3p/p2Pp1pP/2P5/2N2PN1/PP1Q2P1/K2R1B1R w - - 2 18",
    score: 1.2,
  },
  {
    lichess: "https://lichess.org/i4bGjEX3",
    fen: "r1b1k2r/pp1nbppp/2n1p3/1BppP3/3P1P2/q1N1BN2/P1PQ2PP/1R2K2R w Kkq - 4 11",
    score: 0,
  },
  {
    lichess: "https://lichess.org/wPZM0GXw",
    fen: "rrb2bk1/2q2ppn/3p1n1p/1BpPpN1P/P3P1P1/4BP2/1P1NQK2/R6R w - - 3 22",
    score: 4,
  },
  {
    lichess: "https://lichess.org/ary3JSZd",
    fen: "2kr3r/pppqbpp1/2np1n1p/8/2BPP3/2N2RBP/PPP3P1/R2Q2K1 w - - 2 12",
    score: 4,
  },
  {
    lichess: "https://lichess.org/HUlnYgsI",
    fen: "2r1r1k1/p5p1/1pnqb2p/3p1p2/3Pp3/PN2P2P/1P2BPP1/2RQ1RK1 w - - 2 19",
    score: -0.1,
  },
  {
    lichess: "https://lichess.org/vb0rAPhg",
    fen: "2r5/1pBbnk2/p4q2/P2pQpb1/3P2p1/2PB4/1P4P1/4RKN1 w - - 3 26",
    score: -0.4,
  },
  {
    lichess: "https://lichess.org/vYYMBEDa",
    fen: "r4rk1/pppn2pp/1n6/3Ppb2/2P1N3/3BB3/P1Q2PqP/R3K2R w KQ - 0 16",
    score: 1.3,
  },
  {
    lichess: "https://lichess.org/a62yViFn",
    fen: "1rr3k1/4pp2/p2p1np1/1p5p/2P4P/1P3BP1/P2RPP2/2R3K1 w - - 2 22",
    score: -0.4,
  },
  {
    lichess: "https://lichess.org/QEo4xXSe",
    fen: "r1bq2k1/1p2rpb1/2pN2p1/p1Pppn2/1P4pP/P2P2P1/1B2PPB1/1R1Q1RK1 w - - 4 20",
    score: 0.9,
  },
  {
    lichess: "https://lichess.org/YuTbs3VS",
    fen: "r1bqnrk1/pp4bp/3p2p1/3PnpPP/2PNp3/2N5/PP2BP2/R1BQK2R w KQ - 2 14",
    score: 0.2,
  },
  {
    lichess: "https://lichess.org/qFQsVLsC",
    fen: "1r3bk1/1p1r1pp1/1B2pnnp/1N6/2p2P2/1P4PP/P3P1B1/2RR2K1 w - - 0 25",
    score: 3.5,
  },
  {
    lichess: "https://lichess.org/jm6g28sR",
    fen: "8/5k1p/1B2p1p1/5pP1/pP2bP2/2K1R3/P6P/3r4 w - - 1 34",
    score: 0,
  },
  {
    lichess: "https://lichess.org/VETjbGMn",
    fen: "3q1rk1/2rb1ppp/ppn1p3/2p5/3bN3/3PB1P1/PPP2PBP/1R1Q1RK1 w - - 4 16",
    score: 0.4,
  },
  {
    lichess: "https://lichess.org/zqiVr8er",
    fen: "6k1/pp3p2/2p1p1p1/4P3/3b1P2/P4BP1/1Pr4P/1R5K w - - 3 31",
    score: -0.3,
  },
  {
    lichess: "https://lichess.org/6P6IaZDC",
    fen: "2krr3/pp1q1ppp/2p2n2/8/8/1QP2B1P/P4PP1/1R3RK1 w - - 3 18",
    score: 0.5,
  },
  {
    lichess: "https://lichess.org/I4MZaipd",
    fen: "r2r2k1/1p2qbp1/p3pp2/2b5/P1B1P3/2N2NB1/1P3PP1/2R2RK1 w - - 6 24",
    score: -4.5,
  },
  {
    lichess: "https://lichess.org/a6XvBW0i",
    fen: "3q1rk1/pb3ppp/1p2pn2/4N3/3P4/1B4n1/PP3PPP/2QR2K1 w - - 0 21",
    score: -0.2,
  },
  {
    lichess: "https://lichess.org/2PPxiKQD",
    fen: "r2n3k/ppp3pp/8/2bB4/5B2/2Pp4/r2N2PP/3K3R w - - 2 20",
    score: 5.7,
  },
  {
    lichess: "https://lichess.org/i3CI4Bom",
    fen: "1r1R1rk1/5pp1/4p3/7p/2PQPPP1/pP1R4/K6P/4q3 w - h6 0 27",
    score: 5.7,
  },
  {
    lichess: "https://lichess.org/3So6KZ1K",
    fen: "r1bqkb1r/pp3ppp/2n1P3/1Nppn3/5B2/4P3/PPP2PPP/R2QKBNR w KQkq - 1 8",
    score: 7.4,
  },
  {
    lichess: "https://lichess.org/pEeGc38p",
    fen: "r5k1/1b3pbp/4p1p1/2p1P3/2B5/p1P3B1/6PP/3R2K1 w - - 0 24",
    score: -7.3,
  },
  {
    lichess: "https://lichess.org/Tdji1FHF",
    fen: "1rbq1rk1/1p2p1bp/p1npP1pn/2pN4/P4PP1/2P2N1P/1P2Q1B1/R1B1K2R w KQ - 1 17",
    score: 5.5,
  },
  {
    lichess: "https://lichess.org/mj0aqGae",
    fen: "r3k1r1/3b1p2/p1n1pBp1/2bpP1N1/Pp6/1P1K4/5PPP/R2B3R w q - 1 21",
    score: 2.9,
  },
  {
    lichess: "https://lichess.org/6zq9BChO",
    fen: "rr6/3nppk1/3p1b1p/2pP4/2N1Pp2/P3B1P1/7P/1RR3K1 w - - 0 25",
    score: -0.3,
  },
  {
    lichess: "https://lichess.org/IK3I6aZj",
    fen: "2r1k2r/2qbbp2/p2ppp1p/1p2nP2/4P1PP/1NN5/PPPQB3/1K1R3R w k b6 0 17",
    score: 1.5,
  },
  {
    lichess: "https://lichess.org/tnn82GYU",
    fen: "r2r2k1/1p2qp2/1n1p1bp1/p1nbp2p/2P1P3/1P2BPN1/P1BQ2PP/2RR2K1 w - - 0 20",
    score: 1.4,
  },
  {
    lichess: "https://lichess.org/BqdQ2lA6",
    fen: "8/1r1n1ppk/2Nbpnb1/2p4p/2P2P2/RP1PN1PP/1P2P1K1/5R2 w - - 3 27",
    score: 3.4,
  },
  {
    lichess: "https://lichess.org/NTJ83SCC",
    fen: "8/4k1p1/7b/5PP1/7P/3R1K2/P4P2/3qr3 w - - 0 42",
    score: -4.8,
  },
  {
    lichess: "https://lichess.org/hUdsmBN9",
    fen: "r1bqk2r/pp3pp1/2n1p2p/3pP3/3pn3/B2B4/PPP2PPP/R2QK1NR w KQkq - 2 11",
    score: -1.6,
  },
  {
    lichess: "https://lichess.org/wIA2gnzL",
    fen: "3r2k1/1p1r1p2/p1p1p2p/4Q1pq/2PP2n1/R4NP1/PP2KPP1/3R4 w - - 20 34",
    score: -3.6,
  },
  {
    lichess: "https://lichess.org/ZhiX78FW",
    fen: "4b3/1p3pkp/pNn1p3/2R1Pp2/5P2/4K1PP/PP4B1/3r4 w - - 2 27",
    score: 0.4,
  },
  {
    lichess: "https://lichess.org/eOSGJ0mK",
    fen: "r6k/1p3p2/2p5/p2p1np1/Nb1P4/1P2P1P1/P3NPK1/2R5 w - - 0 32",
    score: 0,
  },
  {
    lichess: "https://lichess.org/46RCaB2d",
    fen: "rn2k2r/1p2ppbp/p2q2pn/2pP4/8/2N2N2/PPP1QPPP/R1B2RK1 w kq - 0 12",
    score: 3.2,
  },
  {
    lichess: "https://lichess.org/dH2PNcVt",
    fen: "2r2r1k/p5pp/4R3/8/2Q5/6P1/Pq3P1P/5RK1 w - - 2 24",
    score: 1.6,
  },
  {
    lichess: "https://lichess.org/PJEbdT6W",
    fen: "q3r1k1/2R1p3/p2p1pp1/2n1b1Bp/4P2P/6N1/PPQ2PPK/8 w - - 0 25",
    score: -1.9,
  },
  {
    lichess: "https://lichess.org/OnipGixK",
    fen: "1r4kb/p2r3p/1nq1n1pP/BN2PpP1/1Qp2P2/3p1RN1/PP3K2/2R5 w - - 4 32",
    score: -5,
  },
  {
    lichess: "https://lichess.org/PgsnMa2w",
    fen: "2rq1rk1/pp3ppp/2n1pn2/1B1p4/Nb1P1Pb1/4BN2/PPP3PP/R2Q1RK1 w - - 6 11",
    score: -1,
  },
  {
    lichess: "https://lichess.org/y3Evdzq2",
    fen: "1r4k1/4ppbp/3p1np1/3P4/q1P1P1PP/4BP1K/3QB3/5R2 w - - 1 27",
    score: 0.1,
  },
  {
    lichess: "https://lichess.org/FvQm0oJ2",
    fen: "4q1k1/Q1r3bp/4p1p1/p2pP3/8/P7/1B3PP1/4K3 w - - 0 32",
    score: -1.6,
  },
  {
    lichess: "https://lichess.org/q6FD94Wd",
    fen: "r3k2r/ppp2ppp/2n2n2/3q4/1b1P2b1/2N2N2/PP2BPPP/R1BQK2R w KQkq - 7 9",
    score: 0.8,
  },
  {
    lichess: "https://lichess.org/nidjGuso",
    fen: "3rk2r/1pqbbppp/pNnppn2/8/2P1P3/1N2BP2/PP2B1PP/R2Q1RK1 w k - 1 16",
    score: 1.3,
  },
  {
    lichess: "https://lichess.org/gu1Po0R9",
    fen: "r3k2r/pp1n1ppp/1qp1pb2/3p4/3P2b1/1QP2NP1/PP1NPPBP/R4RK1 w kq - 2 11",
    score: 0.1,
  },
  {
    lichess: "https://lichess.org/m2wCPbLX",
    fen: "r1bqr1k1/pp3pbp/2p2np1/2n5/3NP3/2NBB2P/PPPQ2P1/2KR3R w - - 7 13",
    score: -0.2,
  },
  {
    lichess: "https://lichess.org/XGuCcjNZ",
    fen: "r1bq1rk1/pp2ppbp/n4np1/2Pp4/8/2P2NP1/PP2PPBP/RNBQ1RK1 w - - 1 8",
    score: 1.3,
  },
  {
    lichess: "https://lichess.org/uYX8dMEZ",
    fen: "2r1r1k1/1p1q1pp1/p1p1pbp1/3n4/3P4/1QP4P/PP1B1PP1/R3RBK1 w - - 8 20",
    score: 0.6,
  },
  {
    lichess: "https://lichess.org/FVLY0brX",
    fen: "2r2rk1/ppq1ppbp/6pn/4n3/3NN3/1PP2P2/P1Q2BP1/R2R2K1 w - - 2 23",
    score: 0.9,
  },
  {
    lichess: "https://lichess.org/x8crlSLO",
    fen: "N4bnr/pp1k1ppp/4p3/8/8/5P2/PP3P1P/n1BK1B1R w - - 0 14",
    score: 3,
  },
  {
    lichess: "https://lichess.org/7myD6sdq",
    fen: "2rq1rk1/p3ppbp/1pn2np1/5b2/2PPN3/5NP1/PB3PBP/R2QR1K1 w - - 1 16",
    score: -0.1,
  },
  {
    lichess: "https://lichess.org/VEbhfpSy",
    fen: "6k1/5ppp/npN1p3/8/1p2P3/1n2KPP1/7P/8 w - - 2 35",
    score: -8.7,
  },
  {
    lichess: "https://lichess.org/UxoU0zQB",
    fen: "8/5pk1/2N3bp/8/1KP5/1B5r/P2n3P/8 w - - 3 36",
    score: -6.9,
  },
  {
    lichess: "https://lichess.org/uEwAdnCP",
    fen: "r1bqr1k1/pp3pbp/6p1/3pn3/3N4/1B3P2/PPP2BPP/R2Q1RK1 w - - 2 14",
    score: 0.4,
  },
  {
    lichess: "https://lichess.org/nMB1ecOX",
    fen: "6k1/2pq1pp1/2n4p/p1Pb4/1r1p4/Q4NP1/4PPBP/3R2K1 w - a6 0 22",
    score: -3.6,
  },
  {
    lichess: "https://lichess.org/SyyWsq43",
    fen: "5rk1/pp2bpp1/1qp1p2p/4P2P/2P1NP2/8/PP2Q1P1/1K1r3R w - - 0 22",
    score: 0,
  },
  {
    lichess: "https://lichess.org/HlChBfH8",
    fen: "4r3/ppnq2k1/2pb1pbp/3p2p1/3P2P1/2PN1P1N/PP1Q2P1/4RBK1 w - - 2 28",
    score: -0.4,
  },
  {
    lichess: "https://lichess.org/ppFOnOgC",
    fen: "r5kr/3nqpp1/4p3/ppppP2P/5b1R/2PbPBQ1/PP1N1PP1/R3K3 w Q - 0 22",
    score: 0,
  },
  {
    lichess: "https://lichess.org/10AdguHx",
    fen: "r2r2k1/pb3ppp/5q2/3pp3/1B6/8/PPP1BPPP/R2QR1K1 w - - 3 15",
    score: 7.4,
  },
  {
    lichess: "https://lichess.org/cBvDU6nH",
    fen: "r2qkb1r/pp1n1pp1/2p1pn1p/8/4N3/2BB1Q1P/PPP2PP1/R4RK1 w kq - 4 14",
    score: 0.5,
  },
  {
    lichess: "https://lichess.org/M02AlRxJ",
    fen: "7r/p2r1k1p/2Q2nq1/8/4n3/B4N2/P4PPP/b3R1K1 w - - 5 26",
    score: -5.2,
  },
  {
    lichess: "https://lichess.org/ZLdCJcaq",
    fen: "r1bq1rk1/pp2ppbp/2p3p1/3nn3/2B2P2/3P2N1/PPP1Q1PP/R1B1K2R w KQ - 0 11",
    score: -1.5,
  },
  {
    lichess: "https://lichess.org/o1epW4xx",
    fen: "r1bqk2r/ppp1bppp/5n2/3pN3/2QPP3/2P4P/P4PP1/RNB1K2R w KQkq d6 0 12",
    score: -0.9,
  },
  {
    lichess: "https://lichess.org/oQodi8dG",
    fen: "r5k1/4bp1p/BR1p2p1/2pP1b2/3n1P2/8/P4R1K/3N4 w - - 1 35",
    score: -2.5,
  },
  {
    lichess: "https://lichess.org/6MRPD9C0",
    fen: "4k2r/1p1b1p1p/p2p1p2/q7/2rNPP2/5Q2/PPP3PP/1K1R3R w k - 2 17",
    score: 7.7,
  },
  {
    lichess: "https://lichess.org/PT6RifZE",
    fen: "r3r1k1/6bp/1qb1ppp1/p2p4/P2P1P2/2pB2B1/1P2Q1PP/R4R1K w - - 0 24",
    score: -0.2,
  },
  {
    lichess: "https://lichess.org/soMMhiCx",
    fen: "5bk1/2qrnpp1/p3p2p/npB1P2P/2p1Q3/P1P2NN1/1P3PP1/4R1K1 w - - 3 26",
    score: 0,
  },
  {
    lichess: "https://lichess.org/iW6dSfmR",
    fen: "r3rbk1/1p1b1pp1/1qpp1n1p/p1n5/P1BNP3/1PN2P2/1BPQ2PP/3RR2K w - - 5 16",
    score: 1.3,
  },
  {
    lichess: "https://lichess.org/3HtWSniL",
    fen: "2rq1rk1/pp4pp/n1n1b3/5p2/2P1pP2/P1Q1B3/1P2N1PP/R3KB1R w KQ - 3 16",
    score: -0.1,
  },
  {
    lichess: "https://lichess.org/IQvvcfur",
    fen: "4rrk1/2p2ppp/1p6/nb1PP3/p3R3/P5P1/2N3BP/4R1K1 w - - 4 28",
    score: 0,
  },
  {
    lichess: "https://lichess.org/KqmYAo6P",
    fen: "r1bqkb1r/pp1ppppp/1nn5/4P3/2Bp4/2P2N2/PP3PPP/RNBQK2R w KQkq - 4 7",
    score: 0,
  },
  {
    lichess: "https://lichess.org/CSvdrMci",
    fen: "2rr2k1/pp3pp1/1b3n1p/3p4/3Nb3/PN2P3/1P2BPPP/2RR2K1 w - - 1 21",
    score: 0.1,
  },
  {
    lichess: "https://lichess.org/hBETjWLE",
    fen: "r3kb1r/pp3ppp/2np4/8/5Bb1/2P2N2/PP3PPP/R3KB1R w KQkq - 2 12",
    score: 1.2,
  },
  {
    lichess: "https://lichess.org/brueZvZ9",
    fen: "r1b1qr2/ppp3kp/5np1/3pn2P/4p3/2N2P2/PPPQ2P1/2KR1BNR w - - 0 13",
    score: 2.2,
  },
  {
    lichess: "https://lichess.org/GJyOfPIZ",
    fen: "r4r2/1p1nppkp/3p2p1/p7/2PqP3/2NB3b/PP1Q1PPP/5RK1 w - - 0 17",
    score: -7.2,
  },
  {
    lichess: "https://lichess.org/mqY3tLJR",
    fen: "r2q1rk1/1p2bpp1/p1ppb2p/7n/3nPB2/2NP2PP/PPPQ2BN/4RRK1 w - - 4 14",
    score: 0.2,
  },
  {
    lichess: "https://lichess.org/tHj2Shxz",
    fen: "3n3r/pp1pkppp/8/1P2b3/8/3rP3/P3B1PP/1K5R w - - 0 20",
    score: -7.3,
  },
  {
    lichess: "https://lichess.org/Wice233R",
    fen: "r3k2r/pp1q2pp/2n1pb2/2p5/3p4/2NP2P1/PPP2PBP/R2Q1RK1 w kq - 0 13",
    score: 4.6,
  },
  {
    lichess: "https://lichess.org/7qoZIB48",
    fen: "r4rk1/pb1n2qp/1p1bp3/2pp2p1/3PpP2/PPP1P1P1/4B2P/R1BQRNK1 w - - 1 18",
    score: -1.5,
  },
  {
    lichess: "https://lichess.org/3Y4MWWJE",
    fen: "1k1r3r/1pq2ppp/p1pbp3/P2n3b/2BP4/2P1QN1P/1P3PP1/R1B1R1K1 w - - 2 17",
    score: -0.7,
  },
  {
    lichess: "https://lichess.org/vhyXi0Qr",
    fen: "5rk1/2b2pp1/B3pn1p/3p4/3P1B2/1N2P2P/1Pr2PP1/1R4K1 w - - 1 26",
    score: -2,
  },
  {
    lichess: "https://lichess.org/G8uV22He",
    fen: "r1bq1rk1/pppp1ppp/6n1/4Pn2/1bBP4/2N5/PPP3PP/R1BQ1RK1 w - - 0 11",
    score: -2.6,
  },
  {
    lichess: "https://lichess.org/71bfJ82n",
    fen: "r5k1/6p1/2p2p1p/p2p4/2nP4/prPNP2P/5PP1/R4RK1 w - - 2 27",
    score: -7.6,
  },
  {
    lichess: "https://lichess.org/Tq2out5q",
    fen: "r7/p1p2ppp/R1p5/2k5/8/2P5/P1PK1PPP/8 w - - 7 26",
    score: 0.4,
  },
  {
    lichess: "https://lichess.org/4WtDUYQg",
    fen: "rn2kb1r/pp3ppp/2p5/3pP3/5B2/1BNP1QP1/PPP1K1P1/q7 w kq - 0 13",
    score: -2.4,
  },
  {
    lichess: "https://lichess.org/HcJAOBQE",
    fen: "r3k2r/1b1n1p1p/pq1Bp1p1/1pp5/3bP3/P1NP2Q1/1PP1B1PP/R4R1K w kq - 5 17",
    score: 4.3,
  },
  {
    lichess: "https://lichess.org/zSmglXHF",
    fen: "1k4r1/1p5R/p2p4/2p1n2B/3pP1P1/3P1P2/PPPK4/8 w - - 1 32",
    score: 7.6,
  },
  {
    lichess: "https://lichess.org/C0kbRBHW",
    fen: "r1b2rk1/pp1nqppp/2pbpn2/3p4/2PP4/5NP1/PPQBPPBP/RN1R2K1 w - - 6 10",
    score: 0.3,
  },
  {
    lichess: "https://lichess.org/Yffl1is5",
    fen: "6k1/p1q4p/1p1Nppp1/4Q3/8/P6P/1P4PK/8 w - - 0 35",
    score: 8.4,
  },
  {
    lichess: "https://lichess.org/hum05Ovn",
    fen: "r2q1rk1/1b1n2bp/p2p2p1/1p1Ppp2/4P1P1/3NBP2/PP2N2P/1R1Q1RK1 w - f6 0 17",
    score: -0.5,
  },
  {
    lichess: "https://lichess.org/18DltlLY",
    fen: "rnb1k1r1/1p2n3/p2p4/2pPppqp/P1P1P3/2N2PPB/1P2N1Q1/2R1K2R w Kq - 2 16",
    score: 4,
  },
  {
    lichess: "https://lichess.org/5K3h59Ci",
    fen: "2r1r1k1/3b1pp1/7p/1n1N4/1p2B1P1/7P/1PP2K2/2R1R3 w - - 6 34",
    score: 1.4,
  },
  {
    lichess: "https://lichess.org/9bGWpjv8",
    fen: "r2q1rk1/ppb2pp1/2n2p1p/5b2/2BPN3/5N1P/PP3PP1/R2Q1RK1 w - - 1 13",
    score: -0.6,
  },
  {
    lichess: "https://lichess.org/JYOT1eXP",
    fen: "2r1k2r/Np3ppp/nn2b3/2b1p3/4P3/P1N1B3/1P3PPP/R3KB1R w KQk - 1 13",
    score: 7.5,
  },
  {
    lichess: "https://lichess.org/3qKFnGwi",
    fen: "2q3k1/p3bpp1/1p2p2p/8/4Q3/1Pr1B1P1/P4P1P/3R2K1 w - - 0 26",
    score: -0.5,
  },
  {
    lichess: "https://lichess.org/FacgMGqY",
    fen: "r2r2k1/pp2pp1p/6p1/3Rp3/1bP2Pb1/1P4P1/P5BP/5RK1 w - - 0 19",
    score: -7.5,
  },
  {
    lichess: "https://lichess.org/I1gpyLeb",
    fen: "4rk2/ppp2ppp/2np4/8/3P4/2P2PNP/PP3PK1/4R3 w - - 3 21",
    score: -0.6,
  },
  {
    lichess: "https://lichess.org/N5OT734A",
    fen: "r6k/1p3qpp/p1pp1r2/P3p3/1P2Pn2/2P1QPN1/R4RPP/7K w - - 12 29",
    score: 0.1,
  },
  {
    lichess: "https://lichess.org/3ILE2lmS",
    fen: "r2qkbnr/ppp3pp/2n1p3/1B3b2/2pP4/5N2/PP3PPP/RNBQK2R w KQkq - 0 7",
    score: 0.9,
  },
  {
    lichess: "https://lichess.org/fhXodXZb",
    fen: "r4b1r/pp2k1pp/2n2n2/6N1/3qp1b1/1BN5/PPPP1PPP/R1BQK2R w KQ - 3 10",
    score: 4.4,
  },
  {
    lichess: "https://lichess.org/TVUcDPQ8",
    fen: "3r1rk1/pbp1q1p1/1p1p3p/n3p3/2PP1p2/2PBP2P/P1Q2PPB/R2R2K1 w - - 0 19",
    score: -0.2,
  },
  {
    lichess: "https://lichess.org/SnkuhcDm",
    fen: "1rb1k2r/2qnbpp1/2p1pn1p/pp1pNPB1/3P4/P1NBP3/1PP3PP/R2Q1RK1 w k - 0 12",
    score: 2,
  },
  {
    lichess: "https://lichess.org/masCDBwh",
    fen: "r4r2/5p1k/2N1p3/p2n2R1/1p1P4/6q1/5PP1/4R1K1 w - - 0 27",
    score: -5.9,
  },
  {
    lichess: "https://lichess.org/OSGqqw1d",
    fen: "r1bq1rk1/1pp3bp/p1np1np1/5p2/2PPp3/PPN1P3/1BQN1PPP/R3KB1R w KQ - 3 11",
    score: -0.2,
  },
  {
    lichess: "https://lichess.org/bHMMhS6w",
    fen: "r7/4pkb1/p1p1p1pp/8/4P3/2NR1P2/PP4PP/2K5 w - - 1 23",
    score: 1.3,
  },
  {
    lichess: "https://lichess.org/gHdmDZ9U",
    fen: "6B1/7p/N2p1k2/1pp5/2n5/P5b1/2P3P1/5K2 w - - 3 39",
    score: -0.2,
  },
  {
    lichess: "https://lichess.org/3vRy90MF",
    fen: "r3rnk1/1q3ppp/2p1p3/6PP/3P4/bR3QB1/1KP1NP2/7R w - - 1 26",
    score: -1.6,
  },
  {
    lichess: "https://lichess.org/5UQemctH",
    fen: "r1bq1rk1/p3bpp1/1nn1p2p/2ppP2P/1p6/3P1NP1/PPP2PB1/R1BQRNK1 w - - 0 13",
    score: 0.4,
  },
  {
    lichess: "https://lichess.org/OuQlJmA1",
    fen: "r4r1k/2pq2bb/1p1p3p/p2Pp1pB/P1PnN3/1P4RP/1B3PP1/3QR1K1 w - - 3 30",
    score: 0.4,
  },
  {
    lichess: "https://lichess.org/2nlTEARQ",
    fen: "2rqr1k1/6pp/2p1pb2/3p4/1B1PpP2/P3P3/4Q1PP/2R2RK1 w - - 3 20",
    score: 1.3,
  },
  {
    lichess: "https://lichess.org/iJ0ULNb4",
    fen: "8/pr4bk/1qp1p1pp/R7/3P1Pp1/4P3/1PPQ3P/5RK1 w - - 1 28",
    score: 6.5,
  },
  {
    lichess: "https://lichess.org/O6Liqo9B",
    fen: "r1bqk2r/2p2pb1/pn1p1np1/1p1Pp3/4P1P1/1NN1BB1P/PPPQ4/R3K2R w KQkq - 2 16",
    score: 0.3,
  },
  {
    lichess: "https://lichess.org/6P8Cinhx",
    fen: "r3r1k1/p1q2pbp/1n3np1/2pbp3/2N5/P2PPN1P/RB2BPP1/3Q1RK1 w - - 2 17",
    score: 1.6,
  },
  {
    lichess: "https://lichess.org/WWrI3ih8",
    fen: "r2qkbr1/1b2pp1p/p2p4/2pPp3/PpN1P3/3B4/1PP2PPP/R2Q1RK1 w q - 0 13",
    score: 4.3,
  },
  {
    lichess: "https://lichess.org/Gjoqidyq",
    fen: "r1bqk2r/1p1p1ppp/p1n1p3/2b5/3NP3/2N5/PPP2PPP/R1BQ1RK1 w kq - 1 9",
    score: 1,
  },
  {
    lichess: "https://lichess.org/MLiDyjOE",
    fen: "4Rnk1/5pbp/r2B2p1/2Q5/8/5NP1/q1r2PKP/3R4 w - - 1 22",
    score: 6.8,
  },
  {
    lichess: "https://lichess.org/6BU2M8JX",
    fen: "r3bbk1/p4p2/2pQ2pp/qp6/6n1/6P1/PP3PBP/R1B2RK1 w - - 0 22",
    score: 4.1,
  },
  {
    lichess: "https://lichess.org/uZPw79OB",
    fen: "r3rbk1/1p3ppb/2p2n1p/1p1pN3/2nP2P1/P1N2PBP/1P2P1B1/R1R3K1 w - - 5 19",
    score: -1.3,
  },
  {
    lichess: "https://lichess.org/xgFX1VYD",
    fen: "rnbqkbnr/ppp2ppp/8/3p4/4p3/5NP1/PPPPPPBP/RNBQK2R w KQkq - 0 4",
    score: -0.8,
  },
  {
    lichess: "https://lichess.org/jcwpKfsL",
    fen: "r3k2r/pppbbppp/2n1p3/1B6/8/2P2N2/PP1P1PPP/R1B2RK1 w kq - 1 10",
    score: 0.3,
  },
  {
    lichess: "https://lichess.org/5b53vYYw",
    fen: "r2q1rk1/pb3ppp/1p2pn2/n7/3P4/P2BPN2/3B1PPP/R2Q1RK1 w - - 2 14",
    score: 1.5,
  },
  {
    lichess: "https://lichess.org/CSpjszHM",
    fen: "r2q1rk1/pp2np1p/3p1pbB/3p4/3Q4/1B3N2/PP3PPP/R5K1 w - - 4 18",
    score: 0,
  },
  {
    lichess: "https://lichess.org/ZTxwIf6t",
    fen: "q1rr2k1/1b2bppp/pp1ppn2/2n5/2PNPPP1/1PN4P/PB2Q1BK/R3R3 w - - 5 18",
    score: 1.7,
  },
  {
    lichess: "https://lichess.org/LIRp2r11",
    fen: "r4rk1/pp3ppp/8/5Q2/1b1q4/4B3/PP2nPPP/R3K2R w KQ - 0 15",
    score: -1.9,
  },
  {
    lichess: "https://lichess.org/O7Y8AqY8",
    fen: "r2rb1k1/1p2bppp/2n1pn2/1N6/8/P3PN2/1B2BPPP/R2R2K1 w - - 5 16",
    score: 0.3,
  },
  {
    lichess: "https://lichess.org/4dsaiToK",
    fen: "r5k1/p1q1bppp/5n2/4p3/Q7/3PP1P1/P3bP1P/1RB2RK1 w - - 0 18",
    score: -6.9,
  },
  {
    lichess: "https://lichess.org/Qgb80TJY",
    fen: "r3nrk1/pp1nqpbp/2pp2p1/4p3/2PPP3/2N1B1P1/PP1QNPKP/R4R2 w - - 3 15",
    score: 1.1,
  },
  {
    lichess: "https://lichess.org/R5NJSkxg",
    fen: "r3q2r/1kp2RQ1/4p1P1/1p1nP2P/p2P4/P3B3/1P1K2P1/8 w - - 1 30",
    score: -7.6,
  },
  {
    lichess: "https://lichess.org/v5thZOMe",
    fen: "3r2k1/p1r2ppp/2nNp3/4P3/1p3P2/1P4P1/P1PR3P/4R1K1 w - - 0 25",
    score: 3.4,
  },
  {
    lichess: "https://lichess.org/oqYLjyeE",
    fen: "2r2rk1/p3pp1p/3p2p1/4n1P1/1PB3b1/PQ2PN2/3NKPP1/8 w - - 8 22",
    score: 5.3,
  },
  {
    lichess: "https://lichess.org/lIv8vWgV",
    fen: "q3r3/1p2bkpp/1Qn2n2/2B2p2/P3p3/1N6/1PP2PPP/3RR1K1 w - - 3 25",
    score: 7.4,
  },
  {
    lichess: "https://lichess.org/8vCCJNZm",
    fen: "r3k2r/1b1n1ppp/p1qp1n2/1p1Np3/4P3/1B2QN2/PPP2PPP/R3K2R w KQkq - 1 14",
    score: 1.1,
  },
  {
    lichess: "https://lichess.org/rSAB5Pz6",
    fen: "4r1k1/p5pp/1p2q3/2n2p2/8/2P3P1/P1Q1PPBP/R2R2K1 w - - 2 20",
    score: 12.5,
  },
  {
    lichess: "https://lichess.org/bDP1yG1N",
    fen: "5r2/1pp2k2/p2n4/3NQq2/1P6/P2P2P1/4P1K1/8 w - - 6 38",
    score: -6.1,
  },
  {
    lichess: "https://lichess.org/aRQLziY3",
    fen: "r4rk1/pq2bppp/1p2pn2/2n5/2NN4/PP2P1P1/1B2QP1P/R3R1K1 w - - 1 17",
    score: 0.7,
  },
  {
    lichess: "https://lichess.org/ifPG1YEg",
    fen: "8/7p/6qk/p7/1p1r1p2/5P1P/PPR3P1/5R1K w - - 0 31",
    score: -6.8,
  },
  {
    lichess: "https://lichess.org/6ColYzZr",
    fen: "r3r1k1/pp3pbp/3p4/1qpP2PQ/4P3/3n1P1R/PP2N2P/R1B2K2 w - - 5 19",
    score: 6.2,
  },
  {
    lichess: "https://lichess.org/jweZadeO",
    fen: "q4bk1/5p1p/4p1p1/3nP2P/3P4/2Q5/5PP1/4R1K1 w - - 1 26",
    score: -2.6,
  },
  {
    lichess: "https://lichess.org/MCYeBLIe",
    fen: "1rbq1rk1/p2pbppp/1p2pn2/2p1P3/2Pn4/2NP2P1/PP2NPBP/R1BQ1RK1 w - - 1 10",
    score: 7.5,
  },
  {
    lichess: "https://lichess.org/ii17kQLq",
    fen: "1k1r4/pp3p2/1q3p1p/3p1Pr1/3Pp3/5nPB/PPQ2P1P/3R1RK1 w - - 1 24",
    score: -4.3,
  },
  {
    lichess: "https://lichess.org/rFkGpn7B",
    fen: "r1bq1rk1/pp3pbp/3pp1nB/2p4Q/2P1Pp2/2N2N2/PPP3PP/R4RK1 w - - 0 14",
    score: 0.8,
  },
  {
    lichess: "https://lichess.org/PERc4Azh",
    fen: "8/1pk5/6R1/4p3/3bN3/1P1K1P1P/1r4P1/8 w - - 3 44",
    score: 7.4,
  },
  {
    lichess: "https://lichess.org/spBV6dfK",
    fen: "3r1rk1/ppp1qppp/6b1/3nn3/2B1p3/P3P1N1/1PQP1PPP/R1B1K2R w KQ - 8 15",
    score: -3,
  },
  {
    lichess: "https://lichess.org/zZHxDe5w",
    fen: "r4rk1/1p4pp/2p5/p1n1Pp2/2p2P2/P4N2/1P4PP/3R1RK1 w - - 0 20",
    score: -0.9,
  },
  {
    lichess: "https://lichess.org/eRrDl3jz",
    fen: "r2q1rk1/p3b1pp/4p3/1p1pPp2/2pPn1b1/2P1PN2/PPB3PP/R1B1QRK1 w - b6 0 14",
    score: -2.1,
  },
  {
    lichess: "https://lichess.org/GWUyhaMG",
    fen: "1q3rk1/p2pbppp/npp1pn2/8/2P4N/2N3P1/PP1PPPBP/R1BQK2R w KQ - 0 10",
    score: 11.2,
  },
  {
    lichess: "https://lichess.org/PbVubZ70",
    fen: "2r3k1/5p2/pp2p1pp/2n1P3/2P5/1PN2b2/P6P/1B1R2K1 w - - 0 26",
    score: -3.5,
  },
  {
    lichess: "https://lichess.org/p3GTWNjL",
    fen: "r2kr3/2pb1p2/p1q2np1/1p6/1n1B1p1R/1N1B4/PPP5/2KR4 w - - 10 33",
    score: -13.3,
  },
  {
    lichess: "https://lichess.org/XOvF1G43",
    fen: "1kbr1b1r/p1p4p/4Qp2/4p3/8/P1P3PP/3PPP2/2B2RK1 w - - 7 22",
    score: 7.8,
  },
  {
    lichess: "https://lichess.org/VZi3vM0b",
    fen: "1r3rk1/ppqbppb1/n2p1np1/2pP3p/2P1P2P/PPN3P1/1B3PBN/R2Q1RK1 w - - 1 15",
    score: 1.5,
  },
  {
    lichess: "https://lichess.org/DdDC3Nxb",
    fen: "r3r1k1/p1p2pbp/Qnp3p1/4P3/1q2NP2/1P4P1/Pp4BP/1R3RK1 w - - 2 19",
    score: 3.1,
  },
  {
    lichess: "https://lichess.org/HnGaKlhA",
    fen: "r1b2r1k/1pq1n1pp/p2b4/5pB1/4p3/1BN2Q1P/PPP2PP1/R3R1K1 w - - 0 18",
    score: 3.9,
  },
  {
    lichess: "https://lichess.org/aAYlnlWv",
    fen: "1q3rk1/1r3pbp/p3p1p1/1p1NP2n/2n5/5NPP/1PP1Q2K/2BRR3 w - - 0 23",
    score: -1,
  },
  {
    lichess: "https://lichess.org/sCayaSYo",
    fen: "r2q4/p3b1k1/1rpp1np1/7p/P1QP1PP1/7P/1P1B1N2/4RRK1 w - - 5 28",
    score: 6.8,
  },
  {
    lichess: "https://lichess.org/kOEn7OEn",
    fen: "r4rk1/3qppb1/b2n3p/3P2p1/2pN4/2Nn2B1/PP2BPPP/1R1Q1RK1 w - - 2 19",
    score: 0,
  },
  {
    lichess: "https://lichess.org/BDmxadJz",
    fen: "8/4bpk1/p1r1p1p1/P2pPn1p/2qP1P2/2B5/3QN1PP/1R4K1 w - - 7 31",
    score: -1.5,
  },
  {
    lichess: "https://lichess.org/ReMVvK1r",
    fen: "rn1q1r2/ppp2pkp/4b1p1/3p4/4P3/2P2PP1/PP4BP/R2QNRK1 w - - 0 15",
    score: 0.6,
  },
  {
    lichess: "https://lichess.org/XqVjFNXC",
    fen: "3rr3/pp3kpp/n1p2n2/4p1B1/2N1P3/8/PPP3PP/R4RK1 w - - 8 16",
    score: 1.1,
  },
  {
    lichess: "https://lichess.org/G8js9zrm",
    fen: "3rrbk1/ppp3pp/2p2pb1/4n3/1P1N4/2P3B1/PN3PPP/R3R1K1 w - - 0 21",
    score: -2.9,
  },
  {
    lichess: "https://lichess.org/CejY06eI",
    fen: "r1b3k1/ppp1b3/4p1rp/6P1/2p2P2/2N1P1p1/PP4B1/R2R2K1 w - - 0 18",
    score: 1.5,
  },
  {
    lichess: "https://lichess.org/ZdD9cO3B",
    fen: "rnbq1rk1/ppp5/3p4/8/3bPP1p/5QpP/PPP3B1/R1B2RKN w - - 1 18",
    score: 0.3,
  },
  {
    lichess: "https://lichess.org/wxqaTpMC",
    fen: "1q1r2k1/1p2bppp/8/1P2p3/5nb1/2PP1N2/4BPPP/1N1QR1K1 w - - 4 17",
    score: 0,
  },
  {
    lichess: "https://lichess.org/yBvaUsS2",
    fen: "r7/8/ppR2p2/5kp1/8/6P1/Pb3P2/3R2K1 w - - 0 40",
    score: 5.7,
  },
  {
    lichess: "https://lichess.org/UoSqJ1k1",
    fen: "r2qrnk1/5pp1/b1pb1p1p/p7/1p1P2PP/2PBB3/PP1QNP2/1K1R3R w - - 0 16",
    score: 0.8,
  },
  {
    lichess: "https://lichess.org/a2jHAPpA",
    fen: "r4k2/1p1nbp1r/6p1/3p4/3N3P/1PBpR3/P4P2/1K5R w - - 2 25",
    score: -0.6,
  },
  {
    lichess: "https://lichess.org/zHsIJ9C0",
    fen: "r2q2k1/1p1nb1p1/n1b1pr1p/p2p1pN1/3P1B1P/P2BPP2/1P2N1P1/2RQ1RK1 w - - 0 16",
    score: 1.5,
  },
  {
    lichess: "https://lichess.org/e28lPOhl",
    fen: "rnbqkb1r/pppppppp/5n2/8/3P1B2/8/PPP1PPPP/RN1QKBNR w KQkq - 5 4",
    score: 0.8,
  },
  {
    lichess: "https://lichess.org/hb1qq6te",
    fen: "2rqr1k1/1p1bbpp1/p1n1pn1p/8/P2pNB2/2PB1N1P/1P2QPP1/R4RK1 w - - 0 15",
    score: -0.7,
  },
  {
    lichess: "https://lichess.org/TO5pOmC3",
    fen: "6k1/R7/4p2p/6pP/5rP1/5P2/4K3/8 w - - 1 38",
    score: 0,
  },
  {
    lichess: "https://lichess.org/5ZBzubVD",
    fen: "5nk1/5pbp/2Pp2p1/1bp5/8/8/1P3PPP/R1B3K1 w - - 1 23",
    score: 5.7,
  },
  {
    lichess: "https://lichess.org/LsZml22x",
    fen: "r1bq1r1k/1ppn2b1/p5np/3Np3/2P1Pp2/1P3N1P/PB1Q1PB1/3RR1K1 w - - 0 18",
    score: 0.8,
  },
  {
    lichess: "https://lichess.org/H9DTTF4e",
    fen: "rnb1k2r/1p3ppp/p4n2/q3p3/1b2P3/P1pB1N2/1PP1QPPP/R1B2RK1 w kq - 0 11",
    score: -3.5,
  },
  {
    lichess: "https://lichess.org/UFBVfpEb",
    fen: "2r3k1/5pp1/pr2p1p1/3pq3/PP6/R1PQ2P1/5PP1/1R4K1 w - - 0 24",
    score: 0,
  },
  {
    lichess: "https://lichess.org/11QBYpMu",
    fen: "1r2r1k1/p2q2pp/1p1p1b2/n1pP1p2/P1P5/5NP1/Q2BPPKP/1R2R3 w - - 7 22",
    score: 2.1,
  },
  {
    lichess: "https://lichess.org/m3Q7HTLh",
    fen: "6k1/1b2ppbp/3p2p1/q2P4/1p6/P3BP2/1P1QB1PP/6K1 w - - 1 23",
    score: 0.4,
  },
  {
    lichess: "https://lichess.org/L8reZHEo",
    fen: "r1bq2k1/pp4pp/1bn1pr2/3p3P/1P3n2/P4N2/1BP2PP1/RN1QKB1R w KQ - 0 14",
    score: -0.9,
  },
  {
    lichess: "https://lichess.org/j1mmDOYb",
    fen: "rnbq1rk1/ppp1ppbp/3p1np1/8/2PPP3/2N2N2/PP3PPP/R1BQKB1R w KQ - 0 6",
    score: 0.9,
  },
  {
    lichess: "https://lichess.org/LVhMh5qC",
    fen: "r4rk1/3qp2p/bn1p1pp1/3P4/PPp1P3/2Q3PP/1B3PB1/R3R1K1 w - - 1 21",
    score: 7.4,
  },
  {
    lichess: "https://lichess.org/NU6RMwFE",
    fen: "6k1/2p5/3p4/1r1Pp3/p6P/4R3/PP4P1/6K1 w - - 0 32",
    score: 0.2,
  },
  {
    lichess: "https://lichess.org/5P2nU3LI",
    fen: "1r3rk1/1p1q2pp/p1n1p3/5p2/1P1pQP2/3B4/P1P3PP/3R1RK1 w - - 0 20",
    score: -1.4,
  },
  {
    lichess: "https://lichess.org/p1pfSLM3",
    fen: "r1bqk2r/p1pp1ppp/2p2n2/8/1b2P3/2N5/PPP2PPP/R1BQKB1R w KQkq - 0 7",
    score: 0.2,
  },
  {
    lichess: "https://lichess.org/yxOP7Vxf",
    fen: "5rk1/p1b2pp1/B4n1p/5N2/4p3/P7/1B1Q1PPq/4R1K1 w - - 0 25",
    score: -6,
  },
  {
    lichess: "https://lichess.org/OShdFqVL",
    fen: "1r3rk1/1bqn1ppp/p2p4/2p1nNbP/1p2PN2/3P4/PPP3B1/R1BQ1RK1 w - - 0 19",
    score: 0,
  },
  {
    lichess: "https://lichess.org/0jvqNgjl",
    fen: "r2qnrk1/2pb1ppp/3p4/pp3P2/2PpP1Pb/1P1P1N1P/P2N2B1/R2QK2R w KQ - 3 15",
    score: -0.3,
  },
  {
    lichess: "https://lichess.org/JNvg1qI8",
    fen: "8/pp4kp/2b2np1/4r3/P1P5/7P/5RPK/3R4 w - - 1 29",
    score: -5.9,
  },
  {
    lichess: "https://lichess.org/1NsUpTPv",
    fen: "5rk1/5p1p/p3p1p1/6q1/3P4/4P2P/1Q4P1/1R4K1 w - - 4 32",
    score: -2.3,
  },
  {
    lichess: "https://lichess.org/WSXW0NVj",
    fen: "r1q1k2r/pbppnpp1/1p2p2p/4P3/3PN3/PnPB1Q2/1P3PPP/3RK1NR w Kkq - 0 13",
    score: 3.2,
  },
  {
    lichess: "https://lichess.org/EeHQmMTe",
    fen: "r3r3/pp1b1p2/2pb1k2/3p1p1p/3P1P2/2PB4/PP2NKPP/R3R3 w - h6 0 19",
    score: 0.1,
  },
  {
    lichess: "https://lichess.org/OTNLUlWI",
    fen: "r1r3k1/p3p1bp/3ppnp1/q6P/1p1BP3/2N2P2/PPPQ2P1/1K1R3R w - - 0 16",
    score: 0.8,
  },
  {
    lichess: "https://lichess.org/bxqpo5HS",
    fen: "2r1r3/5k1p/p3ppp1/1p1p4/1n1N1PP1/bP2B2P/P1R3B1/3R2K1 w - - 5 31",
    score: 3.9,
  },
  {
    lichess: "https://lichess.org/jm6Q2wlc",
    fen: "1r1q1rk1/2p2pb1/p2p1npB/Pb1Pp3/pP2P3/2P3PP/3QNPB1/R4RK1 w - - 1 20",
    score: 2,
  },
  {
    lichess: "https://lichess.org/iYExcWkc",
    fen: "2r2rk1/1b2bp1p/pp2p1p1/8/3Nn3/P3P3/1P2BPPP/R1R1B1K1 w - - 0 19",
    score: 0,
  },
  {
    lichess: "https://lichess.org/TYdbSvL0",
    fen: "rn1q1rk1/pp1bb1pp/3p4/2pP1P2/4n3/2NB4/PPP2PPP/R1BQK2R w KQ - 0 11",
    score: 2.7,
  },
  {
    lichess: "https://lichess.org/HFM4xi4h",
    fen: "1r2r1k1/1p2qpp1/p1pb3p/2Np3n/1P1P4/P2BPP1P/2Q2PK1/2R3R1 w - - 5 21",
    score: 0,
  },
  {
    lichess: "https://lichess.org/C8WeOPon",
    fen: "r7/2bbkp2/1pn3p1/2p1P2p/r1Pp1PnP/PN1P3B/2NB3K/1R3R2 w - - 1 30",
    score: -4.4,
  },
  {
    lichess: "https://lichess.org/MNoG9vyL",
    fen: "6r1/7p/1p2k3/1p2rp2/4pR2/P1PpK1P1/1P3R1P/8 w - - 2 41",
    score: -5.2,
  },
  {
    lichess: "https://lichess.org/da7DGlDw",
    fen: "r2r2k1/3n1pp1/p2bpn1p/qp6/3P1N2/P2QBN1P/1P1R1PP1/5RK1 w - - 3 21",
    score: -0.3,
  },
  {
    lichess: "https://lichess.org/jNcv0XOs",
    fen: "2r2rk1/5ppp/p4b2/1p6/2b1P3/2N2BPq/PP2QP1P/2RR2K1 w - - 2 23",
    score: 0.8,
  },
  {
    lichess: "https://lichess.org/26bSsV2I",
    fen: "r2qk2r/ppp2ppp/1bn1b3/3np3/8/2NPB1P1/PPPQNPBP/R3K2R w KQkq - 0 10",
    score: 0,
  },
  {
    lichess: "https://lichess.org/Sc0MZJ3b",
    fen: "rnbqk1nr/pp2ppbp/3p2p1/2pP4/2P1P3/8/PP3PPP/RNBQKBNR w KQkq - 0 5",
    score: 1,
  },
  {
    lichess: "https://lichess.org/jQNTEwxk",
    fen: "2r4k/6pp/q5r1/PpBp1p2/2nPpP2/1R2P1P1/Q4K1P/R7 w - - 3 34",
    score: -1.3,
  },
  {
    lichess: "https://lichess.org/Q3jhTMul",
    fen: "r2q1rk1/pp2ppbp/2pn2p1/3b4/P2P4/2P1BNP1/1P3PBP/R2QR1K1 w - - 7 17",
    score: 0.8,
  },
  {
    lichess: "https://lichess.org/hTv75zpQ",
    fen: "2kr4/1ppq4/p1n3p1/3b1nP1/3pBP2/P4Q2/1PP1N3/1KBR4 w - - 3 24",
    score: -0.2,
  },
  {
    lichess: "https://lichess.org/sRL98OjX",
    fen: "R4r2/3b2pk/2p3rp/4qp2/1P1Rp3/2P4P/4QPP1/6K1 w - - 0 29",
    score: 5.5,
  },
  {
    lichess: "https://lichess.org/mFUUjYpc",
    fen: "r2q1rk1/p2bbppp/8/2pnp3/1p6/1P1PB2P/1PP1NPPN/R2Q1RK1 w - - 0 16",
    score: -1.7,
  },
  {
    lichess: "https://lichess.org/j0Bumar7",
    fen: "4r1k1/pp1q2bp/2ppb1r1/4pp2/2P2P2/3P2PP/PP2n1BK/R1BQ1R2 w - - 0 20",
    score: -1.2,
  },
  {
    lichess: "https://lichess.org/kf6cmD3g",
    fen: "8/Q4pkp/5np1/P7/1q1p4/5B1P/5PP1/6K1 w - - 0 36",
    score: 5.2,
  },
  {
    lichess: "https://lichess.org/lJrFkAVo",
    fen: "r4rk1/2p2ppn/p7/n1q1p1B1/Q3P3/b1P2N1P/P1B2P2/R4RK1 w - - 5 22",
    score: 0.3,
  },
  {
    lichess: "https://lichess.org/VlEzJxcQ",
    fen: "5k2/p2r1ppp/4np2/R2B4/1PP5/2K3P1/5P1P/8 w - - 1 26",
    score: 6.6,
  },
  {
    lichess: "https://lichess.org/qb729z2z",
    fen: "5rk1/r5b1/1n1q1np1/1BNp4/3Pp1b1/1P2P1N1/1BQ2P2/1K1R2R1 w - - 6 26",
    score: 1.6,
  },
  {
    lichess: "https://lichess.org/fWeS1E17",
    fen: "6k1/pp3pp1/4pn2/3p3p/3P4/1P1NP1P1/P4PP1/2r3K1 w - - 0 23",
    score: -0.7,
  },
  {
    lichess: "https://lichess.org/NGhUeyBm",
    fen: "r2q1rk1/pb2bppp/1pn1p3/2p5/3P1P2/2PBnNN1/PP2Q1PP/2KR3R w - - 0 13",
    score: -1.1,
  },
  {
    lichess: "https://lichess.org/2godGcoF",
    fen: "5rk1/2p4p/5pp1/p1P1p3/2P4R/Q7/Pn1r1PPP/R5K1 w - - 2 26",
    score: 8,
  },
  {
    lichess: "https://lichess.org/1aPhgagv",
    fen: "4r3/1k3pp1/pp5p/2p1P3/P1n1b3/1KP2PbP/1P6/3R1RB1 w - - 0 29",
    score: 3.4,
  },
  {
    lichess: "https://lichess.org/9C0ITLun",
    fen: "8/q3b1k1/BrnpPn2/2p1p1pp/4PpP1/2P2P1P/QP1B2K1/1R3R2 w - - 3 28",
    score: 5.6,
  },
  {
    lichess: "https://lichess.org/ohahoEpZ",
    fen: "2k5/5p1p/1B3r2/P3p3/1p2R3/8/5PP1/6K1 w - - 0 42",
    score: 7.8,
  },
  {
    lichess: "https://lichess.org/bfQCcK72",
    fen: "r4rk1/2p1bppp/pp2p3/P7/q1pPPB2/2P3P1/5PKP/RR6 w - - 0 19",
    score: -3,
  },
  {
    lichess: "https://lichess.org/G4Z7WRgZ",
    fen: "6k1/1r3pp1/4p2p/PNq5/2P1n2b/1Q5P/5PP1/3R1RK1 w - - 1 26",
    score: 6.3,
  },
  {
    lichess: "https://lichess.org/382t43u4",
    fen: "r2q1rk1/pp2pp1p/6p1/n2P4/4P1b1/4BN2/P3BPPP/Q4RK1 w - - 1 14",
    score: 1.5,
  },
  {
    lichess: "https://lichess.org/uisjZnRk",
    fen: "r3k2r/1pq1ppb1/p3b1p1/2p5/P1NP2P1/1P3P1p/1B1P3P/R2QR1Kn w kq - 0 20",
    score: -4.6,
  },
  {
    lichess: "https://lichess.org/5qURPK2V",
    fen: "2rq1rk1/3bppbp/2np2p1/1B5n/4PP2/PPN1B2P/2NQ2P1/2R2RK1 w - - 1 19",
    score: 1.1,
  },
  {
    lichess: "https://lichess.org/3b4L4DSI",
    fen: "r1b2rk1/pp3ppp/1q2p3/4P3/nP1Q4/4PN2/P1P3PP/2KR1B1R w - - 1 16",
    score: 2.7,
  },
  {
    lichess: "https://lichess.org/vkHsHGPO",
    fen: "4rrk1/p5b1/1ppqn1p1/3p3p/2PPnpB1/1N1Q3P/PP3PP1/2BRR1K1 w - h6 0 26",
    score: 0,
  },
  {
    lichess: "https://lichess.org/C7FcF85k",
    fen: "r2q1rk1/4bp1p/2ppb1p1/p7/2P1Pp2/1PNB3P/P3QPP1/3R1RK1 w - - 0 16",
    score: 0.1,
  },
  {
    lichess: "https://lichess.org/MXPwTRcG",
    fen: "r3qrk1/3nppbp/p1N1b1p1/8/R2Pp3/1Q2B1P1/1P2PPBP/R5K1 w - - 0 18",
    score: 4.8,
  },
  {
    lichess: "https://lichess.org/JGgLbEHq",
    fen: "2kr3r/ppq1n1bp/2p3pn/3p1p2/NP6/2PP2P1/P4PB1/1R1QBRK1 w - - 1 21",
    score: 3.7,
  },
  {
    lichess: "https://lichess.org/n2Wvzkxc",
    fen: "rnbqk2r/pp4pp/2pbpn2/3p1p2/3P1B2/4PN1P/PPPN1PP1/R2QKB1R w KQkq - 1 7",
    score: 1,
  },
  {
    lichess: "https://lichess.org/rte7YVvF",
    fen: "8/3np1kp/3p1pp1/3P4/2KBP3/5PP1/7P/8 w - - 0 35",
    score: 0,
  },
  {
    lichess: "https://lichess.org/4jxRX0mn",
    fen: "2r5/pb4k1/6p1/2P2p1p/PPBbp3/5P2/6P1/1RR2K2 w - - 3 30",
    score: 6,
  },
  {
    lichess: "https://lichess.org/15wgqznz",
    fen: "5bk1/p1q3p1/4p2p/1pp5/1P2Pp2/Q1Pr1N1P/P4PP1/4R1K1 w - - 0 31",
    score: -0.2,
  },
  {
    lichess: "https://lichess.org/bxoomGGH",
    fen: "8/2b2pk1/8/1B3p1p/P6P/3K2P1/8/8 w - - 2 52",
    score: 0,
  },
  {
    lichess: "https://lichess.org/oy0vz9Ms",
    fen: "r2r2k1/pp2ppbp/4b1p1/q1P5/4P3/Pn1RBP2/5KPP/2Q2BNR w - - 7 19",
    score: -6,
  },
  {
    lichess: "https://lichess.org/4CizJdqp",
    fen: "2kr3r/ppp3bp/6p1/q3p3/3nN3/1P1BQb2/P1PP1PP1/R4RK1 w - - 0 16",
    score: -4.4,
  },
  {
    lichess: "https://lichess.org/6wly6bMM",
    fen: "1rb2rk1/p3ppbp/1np3p1/q7/N1B1P3/1P2BP2/P3Q1PP/2R2RK1 w - - 3 16",
    score: 1.7,
  },
  {
    lichess: "https://lichess.org/gPEc50p7",
    fen: "r1r3k1/1pq1pp1p/6p1/3P4/p2Q4/5P2/PPPR2PP/1K5R w - - 0 18",
    score: 3.5,
  },
  {
    lichess: "https://lichess.org/QWolq8RX",
    fen: "r3k2r/p1q2ppp/2pp1n2/1pb5/3NPBb1/1PN5/1PP2PPP/R2Q1RK1 w kq - 3 14",
    score: 0.9,
  },
  {
    lichess: "https://lichess.org/ePWM2Rdb",
    fen: "r1b1k2r/pp3ppp/5n2/2bpN3/2P5/4P3/q2N1PPP/1R1QKB1R w Kkq - 0 11",
    score: 0.3,
  },
  {
    lichess: "https://lichess.org/cbhRgyZy",
    fen: "r2q1rk1/pbn1p2p/1pn1Pbp1/2p2p1P/8/2P2NP1/PP1N1PB1/R1BQR1K1 w - - 1 15",
    score: 1.3,
  },
  {
    lichess: "https://lichess.org/a8CDMEql",
    fen: "r1bqk2r/pp1nbpp1/3p1n1p/1B2p3/4P3/2NQBN2/PPP2PPP/R3K2R w KQkq - 2 9",
    score: 0.8,
  },
  {
    lichess: "https://lichess.org/sacSf6zc",
    fen: "r3r1k1/1b1nqppp/p1pbpn2/1p6/2PPp3/1PNB1N2/PB2QPPP/2RR2K1 w - - 0 14",
    score: 0.9,
  },
  {
    lichess: "https://lichess.org/DFgteI9S",
    fen: "8/7p/P1kp2p1/K5P1/8/4B3/4b3/8 w - - 47 80",
    score: 0,
  },
  {
    lichess: "https://lichess.org/6iVK52Id",
    fen: "2k1r2r/2qn1pp1/p3p3/1p1bP1B1/3P4/2PB3P/P1Q3P1/1K1R2R1 w - - 3 23",
    score: 0.2,
  },
  {
    lichess: "https://lichess.org/5ik8VUrQ",
    fen: "2kr3r/1p3p2/p1p2np1/q3b3/2p1P3/P1NP1R1N/1PPQ2P1/R1K5 w - - 0 25",
    score: -3,
  },
  {
    lichess: "https://lichess.org/2VicDpzr",
    fen: "r1b3k1/ppp5/4pq1p/1Bbp4/5Ppn/5nB1/PPP2P1P/R2Q1RNK w - - 0 18",
    score: 2.8,
  },
  {
    lichess: "https://lichess.org/Juq8qqFi",
    fen: "2kr1bnr/1pp4p/p3bp2/2p3p1/4PB2/4N3/PPP1NPPP/R3K2R w KQ g6 0 12",
    score: -0.2,
  },
  {
    lichess: "https://lichess.org/xPEAvm1f",
    fen: "2k4r/1pp2pp1/p1p5/8/2nPP3/2N3K1/PPP3Pr/R4R2 w - - 1 23",
    score: 2,
  },
  {
    lichess: "https://lichess.org/xn9xR3hY",
    fen: "4k3/1p2qp2/2p1b1r1/8/1P2Pp2/2PR1P1p/3Q2P1/5B1K w - - 0 32",
    score: 1,
  },
  {
    lichess: "https://lichess.org/kO8DtEjB",
    fen: "4rrk1/1p5p/p1p1qp1b/3p1R1Q/1P1B4/P3P2P/6P1/2R3K1 w - - 2 25",
    score: 0.7,
  },
  {
    lichess: "https://lichess.org/IdpF2CbF",
    fen: "2r1q1rk/4b2p/p2p1p2/1p1RpP2/4P2Q/1B4P1/P4BK1/8 w - - 3 30",
    score: -2.8,
  },
  {
    lichess: "https://lichess.org/uuF2RApb",
    fen: "4r1k1/R4ppp/8/BP6/8/P4r2/1K5P/8 w - - 1 35",
    score: 0,
  },
  {
    lichess: "https://lichess.org/QnVTcaYJ",
    fen: "6k1/pppq1ppp/1nnp4/8/2Pb1N2/1PNQrP2/P5PP/4RK2 w - - 0 20",
    score: -1.4,
  },
  {
    lichess: "https://lichess.org/zN02LfGJ",
    fen: "rnbq1rk1/1p2ppbp/p2p1np1/8/3N4/1P4P1/PBP1PPBP/RN1Q1RK1 w - - 0 9",
    score: 1,
  },
  {
    lichess: "https://lichess.org/6ZT6HNHG",
    fen: "r3r1k1/2p2q1p/6pB/5p2/3Qn3/P7/5PPP/1R2R1K1 w - - 5 30",
    score: 2.8,
  },
  {
    lichess: "https://lichess.org/Bk4qjLoh",
    fen: "1r3rk1/5pbp/Rp1p2p1/1Pp5/2PnPp2/3P2PP/3Q2K1/4R3 w - - 0 27",
    score: 5.2,
  },
  {
    lichess: "https://lichess.org/7G50xbwQ",
    fen: "2k4r/1pp4p/p7/3r2p1/6P1/8/PPP3P1/R1B1N2K w - - 0 22",
    score: 0.8,
  },
  {
    lichess: "https://lichess.org/6pj5159g",
    fen: "r1bq1rk1/5pbp/p2p1np1/1ppP4/P3PP2/3Q1N1P/NP4P1/R1B2R1K w - - 0 17",
    score: -2.4,
  },
  {
    lichess: "https://lichess.org/l0eB2NE1",
    fen: "2rq1k1r/pb2bpp1/1p2p3/2nnP2p/2NQ4/1P4PP/PB2NPB1/R4RK1 w - - 1 17",
    score: 2.7,
  },
  {
    lichess: "https://lichess.org/WJdTQOBu",
    fen: "8/8/4p1k1/nBb1p1p1/P3P1Pp/2PR4/5P1P/6K1 w - - 5 38",
    score: 8.8,
  },
  {
    lichess: "https://lichess.org/VBEwF8HK",
    fen: "2rqk2r/1p3pp1/p1npp1p1/3p4/3P1P2/1Q3N2/PPP2PPP/R4RK1 w k - 3 16",
    score: 1.3,
  },
  {
    lichess: "https://lichess.org/q3ugjlYj",
    fen: "r5k1/pp1qrpp1/3b1n1p/2p5/2Pp2b1/3P1NP1/P1QBPPBP/1R2R1K1 w - - 7 16",
    score: -0.4,
  },
  {
    lichess: "https://lichess.org/JDuup9Xw",
    fen: "r3kb1r/1bqp1ppp/p1n1pn2/8/Pp1NP3/3BB3/1PP1NPPP/R2Q1RK1 w kq - 2 11",
    score: 0,
  },
  {
    lichess: "https://lichess.org/OKowAgVB",
    fen: "rr3k2/2p2p2/2p3p1/p2pP2p/PP1BbP2/2P1K3/1R4PP/R7 w - - 8 28",
    score: 0.3,
  },
  {
    lichess: "https://lichess.org/iDtkcDDv",
    fen: "r2qkb1r/1bpn1p2/p1n1p1p1/3pP3/Pp1P1PP1/2PB1N1p/1P2NB1P/R2QK2R w KQkq - 0 15",
    score: 3.2,
  },
  {
    lichess: "https://lichess.org/rbP4aARo",
    fen: "r4rk1/1ppqbppp/p2p4/7Q/4P3/2P1R2P/PP3PP1/R1n2NK1 w - - 0 16",
    score: -0.5,
  },
  {
    lichess: "https://lichess.org/bbtbKW5o",
    fen: "r2qk2r/ppp2pp1/2np1n2/2b1p2p/4P1bP/2NP2PN/PPP2PB1/R1BQK2R w KQkq - 2 8",
    score: -0.3,
  },
  {
    lichess: "https://lichess.org/zoNpMNFX",
    fen: "2r5/4pk1p/3p1ppP/3P4/R3PP2/8/1n3KP1/8 w - - 2 33",
    score: -7.2,
  },
  {
    lichess: "https://lichess.org/FcS96Elg",
    fen: "r1b2k2/5p2/1pN1pn2/pBn3pp/P2Rp3/1PN5/2P2PPP/2K5 w - - 2 19",
    score: 0,
  },
  {
    lichess: "https://lichess.org/jXhjZUGC",
    fen: "r3kb1r/pbq2pp1/2n1P3/2p1P1N1/2pp2Pn/3P3p/PPP1Q2P/R1B2RKB w kq - 0 17",
    score: 4.3,
  },
  {
    lichess: "https://lichess.org/zg0swpfc",
    fen: "8/2pk1p2/p6p/2RPPp2/6PP/1r6/n5K1/8 w - - 0 37",
    score: -6,
  },
  {
    lichess: "https://lichess.org/eKKb9uOi",
    fen: "4R3/1pr4p/5rpk/2PB4/1PPN4/6P1/5P1P/6K1 w - - 7 34",
    score: 10.2,
  },
  {
    lichess: "https://lichess.org/wubCPOg0",
    fen: "5rk1/1q3pp1/3pp3/6P1/1p2PPQ1/1P6/P1r2P2/1N2R1K1 w - - 3 30",
    score: -5.8,
  },
  {
    lichess: "https://lichess.org/WrdoXnfA",
    fen: "7r/pb1kb3/1p6/2pp1pN1/3PnP2/2P1P2P/PP1N1K1P/R6R w - - 5 22",
    score: 7.1,
  },
  {
    lichess: "https://lichess.org/oxlfpIHk",
    fen: "1rb1r1k1/1pq2pbp/p2p1np1/2pP4/P1P1NP2/3BB2P/1P1Q2P1/R4R1K w - - 1 25",
    score: 2.3,
  },
  {
    lichess: "https://lichess.org/iBOvJhcH",
    fen: "r3k2r/qp2bpp1/p3p3/P1ppPn1p/5P2/2P2R1P/1P1P2P1/RNBQ3K w kq - 3 16",
    score: -1.1,
  },
  {
    lichess: "https://lichess.org/HmPuhIiV",
    fen: "3r2k1/pp3p2/6p1/2p5/2Pq4/1P2r1P1/P1RN1RK1/4Q3 w - - 1 28",
    score: 5.2,
  },
  {
    lichess: "https://lichess.org/IhvGzKXB",
    fen: "r3r3/6kp/pp3pp1/3n1b2/q1pPN2P/2P2P2/3B1QP1/4RRK1 w - - 0 24",
    score: 1.2,
  },
  {
    lichess: "https://lichess.org/1xtkVO2A",
    fen: "r1b2rk1/2pnqp1p/1p2p1p1/p2pP2Q/8/2PBP3/PP1N1PPP/R4RK1 w - - 0 13",
    score: -2.6,
  },
  {
    lichess: "https://lichess.org/XerDvzr4",
    fen: "r4rk1/pp2ppbp/6p1/8/4n3/2P5/PPB1nPPP/R1BR1K2 w - - 0 19",
    score: 1.3,
  },
  {
    lichess: "https://lichess.org/FpDVaQem",
    fen: "7r/pkpR2p1/1pn3r1/4p3/2P5/2P1B3/PP3PP1/5RK1 w - - 1 24",
    score: 2.8,
  },
  {
    lichess: "https://lichess.org/DEZoTkzK",
    fen: "r5k1/6b1/p2p1q2/1p1Rp1p1/4Pr2/2P2PQ1/PP2B3/2K4R w - - 0 27",
    score: 3.7,
  },
  {
    lichess: "https://lichess.org/nxLmYHKX",
    fen: "5r2/pp1kbB1p/3q1n2/n1p1pP2/P2pP3/3P4/1PP3PP/R1BQK2R w KQ - 0 18",
    score: 8.8,
  },
  {
    lichess: "https://lichess.org/zbv1xeHE",
    fen: "rnq2rk1/1p4bp/2pp2pn/p3pp2/P1P1PP2/2NP2PP/1P2N1K1/R2Q1RB1 w - - 1 17",
    score: 1.1,
  },
  {
    lichess: "https://lichess.org/LaS78QHC",
    fen: "r3kbnr/pp1b1ppp/4p3/3pP3/3q4/3B4/PP3PPP/RNBQ1RK1 w kq - 0 10",
    score: -0.6,
  },
  {
    lichess: "https://lichess.org/T3wAuFfU",
    fen: "3q1rk1/4bppp/p2pbn2/1p6/2rNPR2/P1N1B2P/1PP3P1/R2Q3K w - - 0 17",
    score: 0,
  },
  {
    lichess: "https://lichess.org/xZoLMJAI",
    fen: "8/7k/p4pp1/Pp5p/1PrNp1bP/4P1P1/5P2/1R3K2 w - - 0 35",
    score: 0,
  },
  {
    lichess: "https://lichess.org/m7ze2tEf",
    fen: "r2qkb1r/1p1nnppp/p3p3/2ppP3/3P4/2PQ1N2/PP1N1PPP/R1B2RK1 w kq - 0 10",
    score: 0.1,
  },
  {
    lichess: "https://lichess.org/o58IXIQR",
    fen: "r7/bp1R4/p1n1bk1p/4ppr1/N1B4B/5N2/PPP2P1P/2K5 w - - 6 23",
    score: 0,
  },
  {
    lichess: "https://lichess.org/0KNYsHLZ",
    fen: "7k/pp5b/4B2P/4b1p1/3p4/6P1/PP3P2/3R2K1 w - - 1 39",
    score: 7.8,
  },
  {
    lichess: "https://lichess.org/sygXowf4",
    fen: "r4rk1/pp1b1pb1/n3p1p1/q2p3p/3P1B1P/PQNBP3/1P3PP1/R3K2R w KQ - 0 14",
    score: 6.3,
  },
  {
    lichess: "https://lichess.org/NydEXGBv",
    fen: "5rk1/4pp1p/1qpp1bp1/p7/1r2P2P/1BN5/PPP1Q3/1K1R3R w - a6 0 19",
    score: 4.6,
  },
  {
    lichess: "https://lichess.org/eb5lb5Wn",
    fen: "6k1/3n2bp/3p1np1/1r1Pp3/4P3/2p1BBP1/5P1P/2R3K1 w - - 0 27",
    score: -4.8,
  },
  {
    lichess: "https://lichess.org/nJCtzgCo",
    fen: "rn2k1nr/3p1ppp/p3p3/q1b5/4b3/2N2NP1/PP3PBP/R1BQK2R w KQkq - 0 11",
    score: 0,
  },
  {
    lichess: "https://lichess.org/aAishROC",
    fen: "8/2R5/5pkp/1r4pn/1P1B4/5P1P/5KP1/8 w - - 5 38",
    score: 2.3,
  },
  {
    lichess: "https://lichess.org/iY8wQiQF",
    fen: "2bqr1k1/p1p2p2/2p4p/3p2p1/4B3/1R4B1/P1P2PPP/4Q1K1 w - - 0 19",
    score: -0.6,
  },
  {
    lichess: "https://lichess.org/y0mdm2b7",
    fen: "6k1/pp4p1/2p2n2/3r2p1/8/1P3P2/1PP5/1KN3R1 w - - 1 31",
    score: -1.8,
  },
  {
    lichess: "https://lichess.org/l531CWZx",
    fen: "r1b2rk1/ppp1qppp/2np4/2b5/2P5/2N1PB2/PP1Q1PPP/R1B1K2R w KQ - 1 11",
    score: 1,
  },
  {
    lichess: "https://lichess.org/FDpVQ1zu",
    fen: "2r1r1k1/2pq1pp1/p6p/1pRb4/3Pp3/P3P1P1/1P3PBP/3Q1RK1 w - - 1 21",
    score: 1.6,
  },
  {
    lichess: "https://lichess.org/qgrf8iT6",
    fen: "1qr3k1/5pbp/1nbP2p1/8/p1p3P1/5N1P/PP3PB1/2QRR1K1 w - - 3 25",
    score: 7.5,
  },
  {
    lichess: "https://lichess.org/NWu7adTh",
    fen: "4r1k1/p7/3p3B/2pP2p1/4n3/2P2K1P/P5P1/2R5 w - - 0 31",
    score: 1.1,
  },
  {
    lichess: "https://lichess.org/WZSRuQpE",
    fen: "r4rk1/1R3ppp/2p1p3/p2nP3/2b5/b1N3P1/3B1PBP/4R1K1 w - - 1 18",
    score: -3.8,
  },
  {
    lichess: "https://lichess.org/7vLzYcf4",
    fen: "3r2k1/2q2pbp/2p3p1/1pPrP3/pP3P2/P1N1B3/7P/2Q1R1K1 w - - 0 31",
    score: -2.2,
  },
  {
    lichess: "https://lichess.org/Qq9CtRBA",
    fen: "2r3k1/p3p1bp/3pP1p1/5p2/5P2/1rP1B3/1P4PP/R3R2K w - - 0 21",
    score: 0,
  },
  {
    lichess: "https://lichess.org/KQASTZYq",
    fen: "rnbqkbnr/ppp1pppp/8/3p4/4P3/8/PPPP1PPP/RNBQKBNR w KQkq d6 0 2",
    score: 0.9,
  },
  {
    lichess: "https://lichess.org/CjjejKsL",
    fen: "2r1r1k1/4ppbp/p2pbnp1/qp5P/3BP3/P1NB1P2/1PPQ2P1/1K1R3R w - b6 0 16",
    score: 3.2,
  },
  {
    lichess: "https://lichess.org/B6ZAjUTj",
    fen: "r4rk1/1p2b1p1/p2q1nb1/N1BP3p/1P3p2/4pP2/P2QB1PP/2R2RK1 w - - 0 22",
    score: 5.7,
  },
  {
    lichess: "https://lichess.org/zD9CWJD8",
    fen: "2r5/4Rp2/p1kn1Pp1/1p4P1/2p5/P1P1BK2/1P6/8 w - - 3 37",
    score: 4.1,
  },
  {
    lichess: "https://lichess.org/fT77je1G",
    fen: "8/6p1/4p3/7B/3k4/6KP/5P2/1b6 w - - 3 39",
    score: 0,
  },
  {
    lichess: "https://lichess.org/o4SWWJPw",
    fen: "r1bq1r2/1pp1npbk/n2p2pp/p2Pp3/2P1P2P/2N1BNP1/PP1Q1PB1/R4RK1 w - - 1 13",
    score: 1,
  },
  {
    lichess: "https://lichess.org/uy7IrIuv",
    fen: "2nq1rk1/5p2/p5pp/8/1p1Pb3/P2Q1N2/1P3PPP/1B4K1 w - - 0 22",
    score: -3.6,
  },
  {
    lichess: "https://lichess.org/AP1T1GfG",
    fen: "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1",
    score: 0.4,
  },
  {
    lichess: "https://lichess.org/vLWHkSKQ",
    fen: "2rq1rk1/p3pp1p/2p2npb/3pBb2/N2P4/1P3PPP/P3P1B1/R2Q1RK1 w - - 5 17",
    score: 1,
  },
  {
    lichess: "https://lichess.org/3snIGUHR",
    fen: "2r3k1/pp3rp1/1q3n1Q/2bp4/3R3P/2N2P2/PPP1N3/2K3R1 w - - 1 23",
    score: 1.1,
  },
  {
    lichess: "https://lichess.org/Qiv5OK3i",
    fen: "6k1/7p/p1r3p1/2P2p2/8/6P1/5PKP/R7 w - f6 0 31",
    score: 0,
  },
  {
    lichess: "https://lichess.org/v7tKLDu3",
    fen: "1qrr2k1/1p2ppbp/2bp1np1/pN6/Pn2PP2/2N1BB2/1PPR2PP/R2Q2K1 w - - 9 17",
    score: 2.8,
  },
  {
    lichess: "https://lichess.org/b7e5K72t",
    fen: "r4rk1/pp1b2pp/1q1b4/2np1p2/3N3B/2PQ1P2/PP4PP/1R2NRK1 w - - 1 18",
    score: -0.1,
  },
  {
    lichess: "https://lichess.org/G0R061mm",
    fen: "r1bq1rk1/pp4bp/2n1p1p1/2pppn2/P4P2/3P1N2/BPP1N1PP/R1BQ1RK1 w - - 2 12",
    score: -2.4,
  },
  {
    lichess: "https://lichess.org/i7qhP9lo",
    fen: "rn2kbnr/ppp1pppp/8/4N3/3q4/8/PPP1QPPP/RNB1K2R w KQkq - 0 8",
    score: 0.6,
  },
  {
    lichess: "https://lichess.org/iqdoy49X",
    fen: "3r4/k5p1/2p2p1p/pRp1bB1P/2P3P1/2P5/P1K5/8 w - - 0 31",
    score: 0,
  },
  {
    lichess: "https://lichess.org/qRI8HVvq",
    fen: "rnbqk2r/ppp1ppbp/3p1np1/8/2PP4/2N2N2/PP2PPPP/R1BQKB1R w KQkq - 0 5",
    score: 0.8,
  },
  {
    lichess: "https://lichess.org/VA0D0T6K",
    fen: "3r4/1k4pp/5p2/1p1Np3/2n1P3/1R1R1P2/1r4PP/4K3 w - - 5 36",
    score: 0.4,
  },
  {
    lichess: "https://lichess.org/JhHabNYM",
    fen: "r4bk1/5ppp/p1pp1B2/8/8/P1N2P2/1PP1r1PP/2K1R3 w - - 0 19",
    score: 3.5,
  },
  {
    lichess: "https://lichess.org/49pNr6wD",
    fen: "4r3/p5kp/2b2pp1/qp1n2BP/2pP4/P1P1pP2/1Q4P1/2R1R1K1 w - - 0 26",
    score: -3.8,
  },
  {
    lichess: "https://lichess.org/RGEyupvP",
    fen: "2r2bk1/3r1pp1/p1q1p1bp/Qp6/2p2B2/P2P2NP/1PP2PP1/3RR1K1 w - - 0 27",
    score: -1.2,
  },
  {
    lichess: "https://lichess.org/b9rJ7mVG",
    fen: "r2r2k1/ppp3b1/4bn1p/5pB1/3np2N/2N3P1/PPPR1PBP/5RK1 w - - 0 16",
    score: 0.4,
  },
  {
    lichess: "https://lichess.org/6HsDQAZB",
    fen: "2k5/1p5p/pKp3p1/P4pP1/1P3P1b/8/8/6B1 w - - 2 41",
    score: -4.9,
  },
  {
    lichess: "https://lichess.org/YScj4wxd",
    fen: "rnb2rk1/p2nqppp/1pP1p3/8/3P1b2/6P1/PPQNPPBP/R4RK1 w - - 0 13",
    score: 6.9,
  },
  {
    lichess: "https://lichess.org/HlxTX3p9",
    fen: "1r1qr1k1/pp4b1/3pb1pp/1P3p2/2P1p3/Q1NP2P1/4PPBP/1R3RK1 w - - 0 20",
    score: 3.1,
  },
  {
    lichess: "https://lichess.org/nQmlbhMo",
    fen: "r1bq1rk1/ppp2ppp/6n1/4P3/1b2pP2/2N1BN2/PPP1Q1PP/R3K2R w KQ - 0 13",
    score: -0.3,
  },
  {
    lichess: "https://lichess.org/bLlY5gFk",
    fen: "3rr1k1/pp2qppp/2p3b1/8/8/1PQ3PP/P1nNPPB1/3RR1K1 w - - 6 24",
    score: -3.6,
  },
  {
    lichess: "https://lichess.org/6lZT4b7T",
    fen: "rn1qk2r/pbp1bppp/1p2pn2/3pN3/3P4/3BP3/PPPN1PPP/R1BQK2R w KQkq - 2 7",
    score: 0,
  },
  {
    lichess: "https://lichess.org/s6uN0x6L",
    fen: "r1b5/ppb3pk/3qp2p/5p2/2BP4/2N4P/PP1Q1PP1/R5K1 w - - 1 22",
    score: -0.3,
  },
  {
    lichess: "https://lichess.org/kGKadLds",
    fen: "1R6/p1r1k1pp/1n3p2/2n1p2P/8/5NP1/B7/1R4K1 w - - 2 36",
    score: 7.2,
  },
  {
    lichess: "https://lichess.org/6WnVe6Nh",
    fen: "r2r4/5pkp/6p1/p2R4/Pp6/8/1PP1RPPP/5K2 w - - 2 28",
    score: 2.1,
  },
  {
    lichess: "https://lichess.org/FqSyy2mH",
    fen: "r4rk1/pp2bppp/2n1p3/1B1q4/3P4/5Q1P/PP3PP1/R1B2RK1 w - - 0 13",
    score: 0.5,
  },
  {
    lichess: "https://lichess.org/463j5lcT",
    fen: "8/4p3/2p1rbk1/1p3r1p/1P1P1B2/2PK1R1P/R5P1/8 w - - 11 45",
    score: 4.7,
  },
  {
    lichess: "https://lichess.org/nRjSFd7d",
    fen: "r6k/pp4pp/2n1br2/2Q5/2P5/3P2PP/2q3B1/4RRK1 w - - 0 23",
    score: 0.6,
  },
  {
    lichess: "https://lichess.org/JNDRECD8",
    fen: "r2q2k1/pp3pbp/6p1/2pP4/2P5/5NPP/P4P2/1b2QK1R w - - 0 20",
    score: 0.2,
  },
  {
    lichess: "https://lichess.org/suBopdQw",
    fen: "r2q1rk1/p3b1pp/2p3n1/2p1p3/N1Ppp3/BP1P1NPb/P3QP1P/R3R1K1 w - - 0 15",
    score: -2.5,
  },
  {
    lichess: "https://lichess.org/Oyp5wm6B",
    fen: "2r1r3/p5pk/2pB1pbp/2P5/4p1R1/1PP5/P4PPP/R5K1 w - - 0 28",
    score: 1.5,
  },
  {
    lichess: "https://lichess.org/iMdz2m8v",
    fen: "8/6pp/rk2p3/pp1rP3/2pPK1PP/2P5/R7/1R6 w - - 1 32",
    score: 0,
  },
  {
    lichess: "https://lichess.org/IbM31BrL",
    fen: "2r2rk1/1bq1bppp/pp1p1n2/2nPp3/2P5/1PNB1N1P/P4PPB/2RQR1K1 w - - 2 16",
    score: 1.1,
  },
  {
    lichess: "https://lichess.org/GbDKLumb",
    fen: "3rr1k1/2q2ppp/2p2n2/2b1p3/PpN1P3/1P5P/1B2QPP1/2RR2K1 w - - 8 26",
    score: 6.1,
  },
  {
    lichess: "https://lichess.org/mseDRpfX",
    fen: "2rkr3/3n1pp1/2p2nb1/p3B2p/Nq1P3P/1B4Q1/1PP3P1/1K1RR3 w - - 0 26",
    score: 7.8,
  },
  {
    lichess: "https://lichess.org/xSquQjuc",
    fen: "r2r2k1/ppp2ppp/5b2/1N1nNb2/5P2/3P4/PP1B2PP/R3R2K w - - 7 17",
    score: -2.3,
  },
  {
    lichess: "https://lichess.org/YyTrnThf",
    fen: "5rk1/pp1bppbp/3p2p1/q2n4/2rNP1P1/4BP2/PPPQ3P/1K1R3R w - - 0 16",
    score: 4.7,
  },
  {
    lichess: "https://lichess.org/caVxZLza",
    fen: "3qr3/p4p1k/1pr3p1/2pp1P1p/7N/1P1bP1Q1/P2P2PP/2R3K1 w - - 1 27",
    score: -8.4,
  },
  {
    lichess: "https://lichess.org/lbMcs1o3",
    fen: "2kr4/pp1qb1p1/5np1/3p1b2/3ppB1Q/8/PPPN1PPP/R3R1K1 w - - 2 18",
    score: 1.4,
  },
  {
    lichess: "https://lichess.org/hdfrxTNc",
    fen: "2rq1rk1/1p1b1p1p/p2pp1p1/8/P1BP1P2/8/1PP1Q1PP/R4RK1 w - - 0 17",
    score: -0.2,
  },
  {
    lichess: "https://lichess.org/HpNZzmTC",
    fen: "r1b1r1k1/pp3ppp/8/q2p2B1/n1pP4/P1P1PN2/2Q2PPP/RR4K1 w - - 3 16",
    score: -1,
  },
  {
    lichess: "https://lichess.org/Ajyak40Q",
    fen: "1rbnkb1r/p2p3p/4p3/8/Q1N3p1/2PB4/PP1N2qP/2KR1R2 w k - 0 20",
    score: 10.2,
  },
  {
    lichess: "https://lichess.org/YoaHJC19",
    fen: "r1b1qrk1/2p3p1/1p1p3p/p2Pp3/3bPpP1/P2P1P2/1P2Q1BP/1RB2R1K w - - 0 19",
    score: -1.9,
  },
  {
    lichess: "https://lichess.org/P9X5J8Gr",
    fen: "r5k1/1q1nbppb/4p3/np1pP1N1/3P1B1P/2P5/4QPBN/3R2K1 w - - 0 26",
    score: 2.4,
  },
  {
    lichess: "https://lichess.org/hU597OYW",
    fen: "5rk1/p3ppbp/3pbnp1/8/1PP4Q/2N2BP1/4PP1P/q1B1R1K1 w - - 0 17",
    score: -0.6,
  },
  {
    lichess: "https://lichess.org/Mc6C9X4v",
    fen: "r1bqk2r/pppp1ppp/2n5/8/2BPn3/2b2N2/PP3PPP/R1BQ1RK1 w kq - 0 9",
    score: -0.4,
  },
  {
    lichess: "https://lichess.org/5heTZI64",
    fen: "r2qk3/2p5/b1n1pp1r/ppPp1n1p/QP1P2pP/P3P1P1/3NNP2/R3KB1R w KQq - 0 18",
    score: 1.4,
  },
  {
    lichess: "https://lichess.org/aSjgGRJe",
    fen: "r4kr1/1p2p3/pP3p2/2qp2b1/8/2P1PQP1/PP4P1/R4RK1 w - - 2 27",
    score: -6.9,
  },
  {
    lichess: "https://lichess.org/p0WjZLcV",
    fen: "6k1/2q2p2/6p1/3rn2p/3NR2P/2P3P1/1Q3PK1/8 w - - 2 47",
    score: 0.5,
  },
  {
    lichess: "https://lichess.org/7NZdfnfQ",
    fen: "1rb2rk1/1pqnbppp/p4n2/2p1p3/P1N5/2NP2P1/1PP2PBP/R1BQR1K1 w - - 0 13",
    score: 3.9,
  },
  {
    lichess: "https://lichess.org/EP7OVir7",
    fen: "r2q1rk1/1ppn1pp1/3p3p/p2Pp3/2P1PbPP/2N2N2/PPQ2P2/R4K1R w - - 0 17",
    score: -0.3,
  },
  {
    lichess: "https://lichess.org/tRWDE3Uj",
    fen: "r3kb1r/pp4pp/2p1p3/8/P1n5/2N5/1P3PPP/R1BK3R w kq - 0 14",
    score: -1,
  },
  {
    lichess: "https://lichess.org/54HrmsZm",
    fen: "r1bqr1k1/1p3ppp/2nb1n2/2pp4/4p3/PP1PPN2/1BQ1BPPP/R2R1NK1 w - - 0 14",
    score: 0.2,
  },
  {
    lichess: "https://lichess.org/Gic73Js0",
    fen: "r1bqk2r/1p2bpp1/p2ppn1p/8/2BNP3/2N5/PPP2PPP/R2QR1K1 w kq - 2 11",
    score: -0.7,
  },
  {
    lichess: "https://lichess.org/wFZRJ2qe",
    fen: "r7/2p5/1n1p1k1p/2p1pPp1/p1P3P1/P2PBPK1/2P5/1R6 w - - 1 42",
    score: 0.3,
  },
  {
    lichess: "https://lichess.org/A07QSlGF",
    fen: "2b2k1r/pp2q3/5pB1/1P1p3p/4P3/1K3P2/PQ6/7R w - - 0 34",
    score: -0.2,
  },
  {
    lichess: "https://lichess.org/EsUgYBBl",
    fen: "2rq1r1k/1b2bpp1/p3pn1p/1p5P/2nN1P2/P1N1P1R1/1PB3P1/R1BQ1K2 w - - 1 18",
    score: -4.5,
  },
  {
    lichess: "https://lichess.org/jxLeCwSw",
    fen: "4r1k1/pp3pp1/2pb2p1/8/2PP2Pq/5Q1P/P3rPK1/R1B2R2 w - - 1 24",
    score: -0.5,
  },
  {
    lichess: "https://lichess.org/nshubOxA",
    fen: "r1b1k2r/ppp1q3/3p3p/2n1ppp1/2P5/2PQ1NB1/P1P2PPP/1R2R1K1 w kq - 2 15",
    score: -6.4,
  },
  {
    lichess: "https://lichess.org/uTWlZQ4m",
    fen: "4rrk1/pp1q2bp/2p1n1p1/3p1b2/2PP1P2/4B1NP/PP1Q2BK/R4R2 w - - 0 21",
    score: -1.1,
  },
  {
    lichess: "https://lichess.org/2jKsyVgA",
    fen: "5rk1/1p4pp/p1n1pq2/3rN3/3p1P2/3P2Pb/PP1QR2P/3NR1K1 w - - 2 23",
    score: 1.7,
  },
  {
    lichess: "https://lichess.org/PwA9Zycx",
    fen: "8/3pk3/4p3/2R2p2/2P2P2/2P3P1/Pr3K2/8 w - - 1 33",
    score: 0,
  },
  {
    lichess: "https://lichess.org/XQwY7Bu7",
    fen: "3r3k/pp1r1pp1/1np2b1p/5p1P/2PP4/P3BNP1/1PR2PK1/3R4 w - - 3 26",
    score: 1.2,
  },
  {
    lichess: "https://lichess.org/EeYZedNW",
    fen: "5r1k/5rp1/p1q4p/8/PP6/Q3RP2/7P/6RK w - - 1 34",
    score: 0.1,
  },
  {
    lichess: "https://lichess.org/Fuv0cvXu",
    fen: "r1b1k2r/1p3ppp/p1nbpn2/q7/2B1P3/2N1B3/PPP2PPP/R2Q1RK1 w kq - 0 11",
    score: 5.2,
  },
  {
    lichess: "https://lichess.org/lkQKffAy",
    fen: "rnb1k2r/1pq1nppp/4p3/3pP3/1p1p4/P2B1N2/1BP2PPP/R2QK2R w KQkq - 0 12",
    score: 0.4,
  },
  {
    lichess: "https://lichess.org/YvA156HJ",
    fen: "6k1/3b3p/p2p2p1/1p1P4/4BP2/P2r2P1/5K1P/8 w - - 0 30",
    score: 0,
  },
  {
    lichess: "https://lichess.org/xffir3QT",
    fen: "r2q1rk1/p1pb2pp/2p5/8/2P1PP2/2N2P2/PP4B1/R2Q1nK1 w - - 0 16",
    score: -5.9,
  },
  {
    lichess: "https://lichess.org/iCXNgADX",
    fen: "r3kr2/1p1b4/p1np2P1/8/1nP1P3/N3B1p1/PP2K2P/3R1B1R w q - 0 20",
    score: 5,
  },
  {
    lichess: "https://lichess.org/eYPDRnJ3",
    fen: "r3r1k1/p2b2pp/2p1p3/1pPnBp2/1b1Pq3/1B3NPP/PP3K2/R2Q3R w - - 3 20",
    score: 6,
  },
  {
    lichess: "https://lichess.org/cIdJxQrr",
    fen: "r1b1k2r/1pq1bppp/p1n1pn2/4p3/2B2B2/2N2N2/PP2QPPP/R2R2K1 w kq - 0 12",
    score: 0.3,
  },
  {
    lichess: "https://lichess.org/4iC5Pu7D",
    fen: "2r2rk1/pbqp1p1p/5Qp1/8/5P2/8/PPP3PP/2KR1B1R w - - 1 18",
    score: 0.4,
  },
  {
    lichess: "https://lichess.org/IvI9xdMV",
    fen: "r4b1r/ppk2pp1/4bq1p/1Bp5/5PP1/2N1Q2P/PPP5/2KR3R w - - 0 17",
    score: 8.8,
  },
  {
    lichess: "https://lichess.org/FugMhwtY",
    fen: "r7/ppp2pbk/2n2npp/4p3/4P3/2N1BB1P/PPPr1PP1/2KR4 w - - 0 16",
    score: 1.1,
  },
  {
    lichess: "https://lichess.org/ONAWt4JK",
    fen: "rn2k2r/pbp2pp1/1p1bpq1p/8/2PP4/2PB1N2/P4PPP/R1BQ1RK1 w kq - 2 11",
    score: 0.5,
  },
  {
    lichess: "https://lichess.org/6WxL5HoA",
    fen: "r2qr1k1/pppn1ppp/3p1bb1/3P1n2/1PP2B2/P1N2N2/4BPPP/2RQ1RK1 w - - 3 17",
    score: 0.3,
  },
  {
    lichess: "https://lichess.org/D2bYl035",
    fen: "r1bqk1nr/bpp3pp/p1p2p2/8/3PP3/5N2/PP3PPP/RNBQ1RK1 w kq - 1 9",
    score: 1.2,
  },
  {
    lichess: "https://lichess.org/YXhlDTBg",
    fen: "1k4r1/pp1b4/4p2P/3pPq2/2pP1Bpb/P1P3Q1/4B3/4R1K1 w - - 1 31",
    score: -1.1,
  },
  {
    lichess: "https://lichess.org/dlnc7em2",
    fen: "r2q1rk1/pp1n1ppp/2p1b3/3n2b1/2BP4/5N2/PPQ2PPP/R1B1R1K1 w - - 0 14",
    score: 2.9,
  },
  {
    lichess: "https://lichess.org/OtLeEkdh",
    fen: "r2r4/1p3pk1/2p3p1/p3n2p/P1B5/4P1P1/1P3PKP/2RR4 w - - 2 26",
    score: 0,
  },
  {
    lichess: "https://lichess.org/2YLndoeA",
    fen: "r1b1k2r/pp1p1pbp/3Bn1p1/5n2/P1B5/2P5/1P3PPP/R2QK2R w KQkq - 1 19",
    score: 8.1,
  },
  {
    lichess: "https://lichess.org/mphzVPsH",
    fen: "3r3Q/q3kp2/1bB1p1r1/pP5p/P1R4P/6P1/4NP2/6K1 w - - 5 30",
    score: -3.6,
  },
  {
    lichess: "https://lichess.org/cva9bwjf",
    fen: "rbbq1r1k/1p3pp1/2n2n1p/pNPpp1B1/3P3P/P2B1N2/1PQ2PP1/R3K2R w KQ - 0 16",
    score: 1.2,
  },
  {
    lichess: "https://lichess.org/vLU9MsIl",
    fen: "rq2k2r/1b3pp1/p3pn1p/1p2b3/3N4/1BN5/PP2QPPP/R4R1K w kq - 0 16",
    score: 1.9,
  },
  {
    lichess: "https://lichess.org/GGCUYvxd",
    fen: "r1r3k1/5pp1/1qn1p3/p1RpPn1p/1p1P4/P2PBN2/1Q3PPP/2R3K1 w - - 0 21",
    score: -1.5,
  },
  {
    lichess: "https://lichess.org/eaQqMmEV",
    fen: "r5k1/5pbp/3p1pp1/1pnP4/1qp1P3/2N2B1P/1PPQ1PP1/5RK1 w - - 0 20",
    score: -2.3,
  },
  {
    lichess: "https://lichess.org/bu3Xu2SK",
    fen: "rn2kb1r/pppqpppp/5n2/5b2/3P1B2/2N2P2/PPPQN1PP/R3KB1R w KQkq - 5 9",
    score: 2.9,
  },
  {
    lichess: "https://lichess.org/bc7U5TyN",
    fen: "8/bp1r1p2/p1pNp1k1/2Pr2P1/1P1P4/P2R2P1/6K1/3R4 w - - 3 34",
    score: 2.7,
  },
  {
    lichess: "https://lichess.org/TBMYZGZs",
    fen: "2r2rk1/pp3ppp/2nqbb2/3p4/3P4/P2BBN1P/1P3PP1/R2Q1RK1 w - - 3 15",
    score: 0.3,
  },
  {
    lichess: "https://lichess.org/ZGgwPxbA",
    fen: "r2qk2r/4bpp1/p1ppbn1p/4p3/4P3/2NQ1N1P/PPP2PP1/R1BR2K1 w kq - 1 12",
    score: -0.3,
  },
  {
    lichess: "https://lichess.org/LLVG0dT5",
    fen: "r1bqr1k1/pp1n1pbp/2p3p1/8/2pP4/1PB2NP1/P1Q2PBP/R3R1K1 w - - 0 15",
    score: 1.1,
  },
  {
    lichess: "https://lichess.org/lWZU5FdG",
    fen: "rn1q2k1/pp3p1p/2pb2p1/5p1P/3Pr3/2P1B3/PPQ1NP2/2KR2R1 w - - 0 16",
    score: 2.4,
  },
  {
    lichess: "https://lichess.org/2l4dqNbB",
    fen: "1rr3k1/2q2p2/p2b3p/3P4/2p5/1PQ2NPP/5P2/1R4K1 w - - 1 29",
    score: -8.8,
  },
  {
    lichess: "https://lichess.org/EH36hliH",
    fen: "6k1/1p2R2p/p7/4Pr2/1r3P2/8/P7/5RK1 w - - 1 28",
    score: 0,
  },
  {
    lichess: "https://lichess.org/YHuH5qzi",
    fen: "rr4k1/q3ppbp/3p2p1/3p4/3P1B2/1P3PP1/P1RQ1P1P/R5K1 w - - 1 21",
    score: 2.8,
  },
  {
    lichess: "https://lichess.org/RW63Xg3S",
    fen: "r2qkr2/3bbp1Q/p2p1p2/3NpP2/1p1nP3/3B4/PPP3PP/1K1R3R w q - 1 17",
    score: -2.5,
  },
  {
    lichess: "https://lichess.org/nqiTGXTv",
    fen: "rnbqk1nr/pp2ppbp/2p3p1/8/4N3/3B1N2/PPP1QPPP/R1B1K2R w KQkq - 4 8",
    score: 0.7,
  },
  {
    lichess: "https://lichess.org/UIVNehFD",
    fen: "rn5q/pp3pk1/2p3p1/4p3/4Pnb1/2N5/PPPQN3/2KR1B2 w - - 0 17",
    score: -4.8,
  },
  {
    lichess: "https://lichess.org/tumKt5Al",
    fen: "1qr2rk1/1p1bbppp/pB2pn2/P3n3/8/1NN3P1/1PP3BP/R2Q1RK1 w - - 0 18",
    score: -3.4,
  },
  {
    lichess: "https://lichess.org/vZU3qGcQ",
    fen: "r4rk1/1p3ppp/p1nPb3/q1p5/4QBn1/2P1P3/PP3PPP/R3KBNR w KQ - 1 12",
    score: 4.1,
  },
  {
    lichess: "https://lichess.org/5bkpoPpF",
    fen: "r2q1rk1/pppn1ppp/3p4/2b5/4PBP1/2N2P2/1PPQ3P/2KR1R2 w - - 1 15",
    score: 0,
  },
  {
    lichess: "https://lichess.org/glxtHGFs",
    fen: "r4rk1/pp5p/n2p4/2pPb3/2PN4/NP3P1n/PB6/R4R1K w - - 0 27",
    score: -5.2,
  },
  {
    lichess: "https://lichess.org/3ei5sIWe",
    fen: "4r1k1/pr2bpp1/1qp1pn1p/8/P7/2P3B1/1P2QPPP/RB2R1K1 w - - 3 20",
    score: 0.1,
  },
  {
    lichess: "https://lichess.org/k5KlwQfc",
    fen: "r1b2rk1/5ppp/pqnbpn2/1p1pN3/3P1P2/PP1B4/1BPN2PP/R2Q1RK1 w - - 1 13",
    score: -0.2,
  },
  {
    lichess: "https://lichess.org/iATk4cpD",
    fen: "r4rk1/2qn1ppp/2Np1b2/RP1PnP2/8/1P2B3/2PQB2P/4K2R w K - 1 21",
    score: 4.8,
  },
  {
    lichess: "https://lichess.org/hcMUZ3bt",
    fen: "r1b3k1/pp3pbp/nq1p2p1/2p5/P2r1B2/5B1P/1PPN1PP1/R2Q1RK1 w - - 2 17",
    score: 1.1,
  },
  {
    lichess: "https://lichess.org/LF5dmF9W",
    fen: "2r2r2/2qb2bk/3n3p/p1pPpp2/Pp5N/1P2B1PP/2Q2P2/R3RBK1 w - - 0 28",
    score: 0.9,
  },
  {
    lichess: "https://lichess.org/IbxryhqA",
    fen: "7k/2R4p/6p1/6K1/2p4P/2P3P1/r7/8 w - - 0 41",
    score: 7.4,
  },
  {
    lichess: "https://lichess.org/CpexP0VI",
    fen: "r2qk2r/pppbnppp/2nbp3/1B6/3P4/2N2N2/PPP2PPP/R1BQ1RK1 w kq - 2 9",
    score: 1.2,
  },
  {
    lichess: "https://lichess.org/QTdmCS6M",
    fen: "1rr3k1/3npp1p/p2p2p1/q2P4/2pbPP2/P1N3PP/1PQ1B1K1/1R3R2 w - - 2 23",
    score: 0,
  },
  {
    lichess: "https://lichess.org/gJdD9A1i",
    fen: "3qr1k1/p1pb1p1p/p2p1pp1/3P4/3N1P2/P1N5/1rP3PP/R2Q1RK1 w - - 4 16",
    score: 7.2,
  },
  {
    lichess: "https://lichess.org/AGEqWnGf",
    fen: "5rk1/pp6/6pp/5p2/3Rp2P/1N4P1/PK3P2/8 w - - 1 28",
    score: 4.2,
  },
  {
    lichess: "https://lichess.org/Po1lMZbp",
    fen: "2kr3r/pp3pRp/2b1p3/8/8/2P1P2P/P4PB1/R3K3 w Q - 0 23",
    score: 3.1,
  },
  {
    lichess: "https://lichess.org/vgRGttp8",
    fen: "2k2r1r/pp1n4/2pq4/3p3p/3Pp2P/2N5/PPP3P1/1K1b1BQR w - - 0 23",
    score: -6.5,
  },
  {
    lichess: "https://lichess.org/pdozUnOV",
    fen: "2krr3/1p1n1ppp/1qpb1nb1/3pp3/1P4PN/3PP2P/2PNQPB1/1RB1K2R w K - 1 16",
    score: 3.6,
  },
  {
    lichess: "https://lichess.org/LrMJH1hx",
    fen: "r1bqkb1r/ppp3pp/2n2n2/3pN3/3Pp3/1B6/PPP2PPP/RNBQK2R w KQkq - 2 7",
    score: 1,
  },
  {
    lichess: "https://lichess.org/RnQro0zE",
    fen: "r1bq1rk1/pp4b1/2p1p2p/5pp1/2PPR3/5NB1/PP3PPP/R2Q2K1 w - f6 0 16",
    score: -4.5,
  },
  {
    lichess: "https://lichess.org/xV22OI3u",
    fen: "r2r1bk1/ppq2pp1/2p1bn1p/8/4Pp2/2P2NNP/PPB2PP1/R1Q1R1K1 w - - 0 18",
    score: 1.8,
  },
  {
    lichess: "https://lichess.org/QjyYZnQR",
    fen: "r2q1rk1/3n1pbp/1p2pnp1/2pp4/P2P4/1NN1PQ2/1BP2PPP/R2R2K1 w - - 0 16",
    score: -0.5,
  },
  {
    lichess: "https://lichess.org/h8ibYgAE",
    fen: "6rk/1p4r1/8/1P4np/3PR3/4P2P/6P1/6RK w - - 1 36",
    score: -0.2,
  },
  {
    lichess: "https://lichess.org/tCRaPEAE",
    fen: "rnb3k1/1q3ppp/2p2n1P/p3r3/2BRP3/NP2BP2/2P3P1/2K3NR w - - 0 20",
    score: -6.3,
  },
  {
    lichess: "https://lichess.org/BSyd0rb0",
    fen: "rnbq1rk1/ppp2ppp/3b1n2/3p4/3P4/3B1N2/PPP2PPP/RNBQ1RK1 w - - 6 7",
    score: 0.2,
  },
  {
    lichess: "https://lichess.org/iyqwBA8G",
    fen: "2r3r1/p3kp2/4b2p/8/P2pPq1P/2PP1Pp1/1P4K1/2RQ1N1R w - - 3 26",
    score: 3.2,
  },
  {
    lichess: "https://lichess.org/dUARNnEM",
    fen: "5bk1/1p2n3/p5r1/1N1p1qpN/2rPp3/4P3/PP1B1PQ1/1K1R4 w - - 0 27",
    score: -4.1,
  },
  {
    lichess: "https://lichess.org/A1LlsaxL",
    fen: "rn3rk1/pbp3p1/1p1qpp2/3n4/2BP3P/2P5/PP1B1PP1/R2QR1K1 w - - 2 16",
    score: -1.7,
  },
  {
    lichess: "https://lichess.org/RraXRpRH",
    fen: "2rq1rk1/1b3pbp/p2pp1p1/np6/3P4/P1P2NP1/1P1N1PP1/1BRQR1K1 w - - 8 19",
    score: -0.3,
  },
  {
    lichess: "https://lichess.org/6Y5vIbyr",
    fen: "3r1k2/2n3bp/3p1pp1/2p1n3/p1P4P/5N2/PP3PP1/R1B1R1K1 w - - 3 28",
    score: 5.2,
  },
  {
    lichess: "https://lichess.org/pWGsIcQK",
    fen: "1r1r2k1/p4pbp/2pQn1p1/4p3/4P1q1/1PN3B1/P1P4P/1K1R1R2 w - - 6 25",
    score: -0.7,
  },
  {
    lichess: "https://lichess.org/FY4aacfG",
    fen: "r1bq1rk1/2pnppbp/p5p1/1p6/3PN3/1BP2N2/PP3PPP/R2Q1RK1 w - - 2 12",
    score: 0.4,
  },
  {
    lichess: "https://lichess.org/2BExT04i",
    fen: "r2r2k1/5pp1/2p1pn1p/4P3/1qpP4/p5P1/R2N1PBP/Q5K1 w - - 0 26",
    score: -6,
  },
  {
    lichess: "https://lichess.org/M6apxLGC",
    fen: "2r1k3/5pp1/p2p2n1/PppN3r/4P2p/1P5P/1P3PP1/R2R2K1 w - - 0 20",
    score: 0,
  },
  {
    lichess: "https://lichess.org/5TAD8Mcq",
    fen: "r2q1rk1/pb2bppp/1p2p3/2nn4/2N4N/6P1/PPQ1PPBP/R1BR2K1 w - - 2 14",
    score: 0,
  },
  {
    lichess: "https://lichess.org/3zXurMtQ",
    fen: "rnb4r/ppk4p/2p4B/5p2/2P4P/2b5/PP3PP1/2KR1B1R w - - 0 16",
    score: 7.7,
  },
  {
    lichess: "https://lichess.org/Zqwy6e7T",
    fen: "r5r1/1bq1kp1Q/pp2p3/3pN3/3P1P2/2PBn2P/PP1N4/5RK1 w - - 1 26",
    score: 4.9,
  },
  {
    lichess: "https://lichess.org/kgVhaCxt",
    fen: "1r6/p4p2/4pk2/pnR5/N5pp/1P2PP1P/P3K3/8 w - - 0 39",
    score: 1.8,
  },
  {
    lichess: "https://lichess.org/hcSM86WE",
    fen: "r2q1rk1/pp3ppb/2nb3p/2p1p3/2P1n2N/PP1PR1P1/1B3PBP/R2Q2K1 w - - 0 16",
    score: -0.3,
  },
  {
    lichess: "https://lichess.org/TdaypSYh",
    fen: "1q4k1/pb3ppp/1p2pn2/2b5/4P3/1P2BPP1/P1N1Q1BP/3r2K1 w - - 0 23",
    score: 0,
  },
  {
    lichess: "https://lichess.org/hNXWZpHx",
    fen: "3r2k1/ppprqpp1/2n1bn1p/4p3/4P3/2P1BNPP/PPQ2PB1/3R1RK1 w - - 5 18",
    score: 0,
  },
  {
    lichess: "https://lichess.org/4UD7x83t",
    fen: "rnbq1rk1/pp4pp/2pbpn2/3p1p2/2PP4/1P3NP1/P3PPBP/RNBQ1RK1 w - - 1 8",
    score: 0.5,
  },
  {
    lichess: "https://lichess.org/cvZVeDEY",
    fen: "r1bqkb1r/1p2n1pp/p1n1p3/1B1pPp2/1P1P4/5N2/2P2PPP/RNBQ1RK1 w kq - 0 10",
    score: 2,
  },
  {
    lichess: "https://lichess.org/gfaXhtmM",
    fen: "3r1rk1/1pq1n1pp/pN2bp2/4p3/P3P3/2P2N1P/1P2QPP1/R2R2K1 w - - 2 21",
    score: 1.2,
  },
  {
    lichess: "https://lichess.org/1WUWyonv",
    fen: "4n3/1pk2pp1/p2b3p/P1pP4/2B3PN/2B2P1P/1Pb3K1/8 w - - 1 25",
    score: -0.2,
  },
  {
    lichess: "https://lichess.org/uJv5CfxX",
    fen: "r2qk1nr/1bpnppb1/p2p2p1/1p5p/3PP2P/2N1BP2/PPPQN1P1/R3KB1R w KQkq h6 0 9",
    score: 0.4,
  },
  {
    lichess: "https://lichess.org/IyNFq6Ni",
    fen: "rnb1kb1r/pp3ppp/2pp1n2/2q5/2B1P3/2N2N2/PPP1QPPP/R1B1K2R w KQkq - 0 8",
    score: 4.3,
  },
  {
    lichess: "https://lichess.org/WSlGMopB",
    fen: "3r4/3n1kp1/1R2pb1p/2B5/2P1B2P/5KP1/5P2/8 w - - 1 38",
    score: 3.9,
  },
  {
    lichess: "https://lichess.org/iuKlrDXo",
    fen: "3k4/R4p2/2p1b1p1/2PpP2p/7P/2P1PPK1/2r3P1/5B2 w - - 15 36",
    score: 2.3,
  },
  {
    lichess: "https://lichess.org/WUztqakh",
    fen: "r2q1rk1/pp2ppbp/1n4p1/3n4/3P2b1/1BN2N2/PP3PPP/R1BQR1K1 w - - 2 12",
    score: 0.2,
  },
  {
    lichess: "https://lichess.org/ES9gCLOy",
    fen: "r1b2rk1/p1p1q2p/2p2p2/2bpn1p1/8/3B3P/PPPBQPP1/RN2R1K1 w - - 0 14",
    score: -2.5,
  },
  {
    lichess: "https://lichess.org/7Ic5QPE9",
    fen: "r1bqk2r/5pbp/p1np4/3Np3/Pp2Pp2/2N5/1PP2PPP/R2QKB1R w KQkq - 0 15",
    score: -0.1,
  },
  {
    lichess: "https://lichess.org/iEEjJHIv",
    fen: "1r4k1/3n1pp1/p2qp1p1/1r1p4/2pP2P1/P1P1QP2/BP1R1RKP/8 w - - 5 29",
    score: -0.5,
  },
  {
    lichess: "https://lichess.org/Lp5YwRAn",
    fen: "7k/1q1n2p1/r1pbp2p/3pp3/p3P3/Pr1PNP2/1PR1QBPP/2R3K1 w - - 2 24",
    score: -0.4,
  },
  {
    lichess: "https://lichess.org/lWuIAXGz",
    fen: "5rk1/1p3p1p/2p2Q2/p1b5/P3Pp2/6qP/B1P3P1/R6K w - - 0 27",
    score: -0.2,
  },
  {
    lichess: "https://lichess.org/fcDy8iUc",
    fen: "1k1r4/pb3B2/1pq2p1p/2p1b1rQ/8/2P2N2/PP3PP1/3RR2K w - - 1 26",
    score: 6,
  },
  {
    lichess: "https://lichess.org/eyXkVMe8",
    fen: "r3r1k1/pp3ppp/2p1n1b1/6B1/7P/2N2NP1/PP3KB1/3R4 w - - 1 23",
    score: 0.9,
  },
  {
    lichess: "https://lichess.org/FAikUnt2",
    fen: "2r2bk1/4nr1p/p1n1p1p1/q2pPpPP/1p1P1P2/P3BQ2/1P2B3/1NR2RK1 w - - 2 22",
    score: -0.1,
  },
  {
    lichess: "https://lichess.org/m262Qf8y",
    fen: "r1bq3r/2k3b1/ppn4p/2N1p1pB/Q1PpPp2/P6P/1P1B1PP1/2KR3R w - - 0 24",
    score: 0.7,
  },
  {
    lichess: "https://lichess.org/qIArU79z",
    fen: "r3r1k1/pp3ppp/2nqb3/3N4/3p4/P4B2/1PP2PPP/R2Q1RK1 w - - 4 16",
    score: -1.2,
  },
  {
    lichess: "https://lichess.org/PIgUr3o5",
    fen: "r2qk2r/pp1nbppb/2pp1n1p/5P2/3P2P1/2N1B2P/PPPN2B1/R2QK2R w KQkq - 1 14",
    score: 1.8,
  },
  {
    lichess: "https://lichess.org/CNTSYHlb",
    fen: "2krn2r/pp1nb1pp/2pp1p2/q5P1/2BPPB1P/2N2Q2/PPP5/2KR3R w - - 1 15",
    score: 3.7,
  },
  {
    lichess: "https://lichess.org/jNMI0nii",
    fen: "r2q1rk1/p1p1ppbp/2pp2p1/4P3/5BbP/2P2N2/PPP1QPP1/2KR3R w - - 1 12",
    score: 0.5,
  },
  {
    lichess: "https://lichess.org/OaWtLytV",
    fen: "r1b1k1nr/pp2ppbp/1q1p2p1/3P4/5B2/2N5/PPPQ1PPP/2KR1B1R w kq - 2 11",
    score: 1.5,
  },
  {
    lichess: "https://lichess.org/rMd1lhXA",
    fen: "r1bqk2r/pp2bpp1/2n5/2p1p3/1nPp2Pp/N2P1P1P/PP2PNB1/R1BQ1RK1 w kq - 1 12",
    score: 0,
  },
  {
    lichess: "https://lichess.org/ecrpkggi",
    fen: "r2kr3/ppp2ppp/3p1n2/1N6/2N1q1b1/2P1P3/PP3QPP/R4RK1 w - - 0 16",
    score: -3.1,
  },
  {
    lichess: "https://lichess.org/n1Jil9mi",
    fen: "2r1kbr1/1b3p2/p2pnp2/4pN1p/4P2P/2P2PP1/P1B2K2/R2N3R w - - 1 26",
    score: 5.4,
  },
  {
    lichess: "https://lichess.org/rPT82FtJ",
    fen: "r1b1k2r/1pp1nppp/p2p3q/3P4/3B3P/8/PPP1QPP1/2KR1B1R w kq - 2 15",
    score: 3.9,
  },
  {
    lichess: "https://lichess.org/7u7zWguh",
    fen: "r1bq1rk1/pp1pnppp/2n1p3/b3P3/8/P1N1QN2/1PPB1PPP/2KR1B1R w - - 5 11",
    score: 2.8,
  },
  {
    lichess: "https://lichess.org/s0wjEPQe",
    fen: "r4rk1/1pqbnp1p/p3p1p1/1P2Pn2/2Pp1P2/3B1N2/2P2QPP/R1B2RK1 w - - 0 17",
    score: 5,
  },
  {
    lichess: "https://lichess.org/fP1PnRNP",
    fen: "6k1/p1p2pp1/1b2p3/3q3p/2N4P/1P2P1P1/P1Q2P2/6K1 w - - 0 25",
    score: 0.4,
  },
  {
    lichess: "https://lichess.org/tkyJSxmy",
    fen: "2r2rk1/pbqn1pbp/1p1ppnp1/2p5/2PP4/1P2PN1P/PBQNBPP1/3R1RK1 w - - 1 13",
    score: 0.2,
  },
  {
    lichess: "https://lichess.org/LAiYrB2n",
    fen: "6k1/p5rp/1p6/4n3/4Pp2/1P3P2/1P1r1NPK/2R2R2 w - - 1 33",
    score: 0.1,
  },
  {
    lichess: "https://lichess.org/oRF0Lgo2",
    fen: "r2qbr2/p1n2pbk/3p2pp/1PpPn3/4P1PP/2N1BP2/1P1QBN2/R3K2R w KQ - 1 18",
    score: 5.9,
  },
  {
    lichess: "https://lichess.org/EcV7xwcY",
    fen: "5r2/1pQ2pbk/4b1pp/1q2n3/2pP3B/4PN1P/5PP1/5RK1 w - - 0 27",
    score: -4.9,
  },
  {
    lichess: "https://lichess.org/niWiJ5t6",
    fen: "6k1/3b2p1/2n4p/3n4/2pP1P2/2P2N2/2Q1BPKP/q1b5 w - - 0 27",
    score: -8.3,
  },
  {
    lichess: "https://lichess.org/ptPBOzXq",
    fen: "r4rk1/1pp1qppp/p2pbnn1/4p3/PPB1P3/N1PPb3/4QPPP/R4RNK w - - 0 14",
    score: -1.4,
  },
  {
    lichess: "https://lichess.org/auKzjdLc",
    fen: "4k2r/pp3ppp/2p5/4p3/2B1P3/2N5/PP2r1PP/6K1 w k - 0 17",
    score: -1.4,
  },
  {
    lichess: "https://lichess.org/0K0wIs6v",
    fen: "2kr3r/pp1q1pb1/2pp1n1p/8/2PPPN2/3Q3P/PP1B3P/R4R1K w - - 2 22",
    score: 3.6,
  },
  {
    lichess: "https://lichess.org/rUYGa81O",
    fen: "r2qk2r/pppbn3/3p1p2/2b1p1p1/3nP2p/2NPB1PP/PPPQNPB1/1K1R3R w kq - 0 12",
    score: 1.5,
  },
  {
    lichess: "https://lichess.org/WkZE0L5S",
    fen: "r3q1k1/2Rn1p2/p1Q2npp/Pp1pp3/8/3PP1NP/PB3PP1/6K1 w - - 4 29",
    score: 6.9,
  },
  {
    lichess: "https://lichess.org/0MNErWL3",
    fen: "r4rk1/pp1n1pbp/3Bq1p1/8/4P3/5N2/PPP1Q1PP/2KR3R w - - 2 17",
    score: 6.5,
  },
  {
    lichess: "https://lichess.org/jCgnZ7nQ",
    fen: "2r2rk1/1q1n1ppp/pp2pn2/8/2PN4/bPN1B2P/4QPP1/2R2RK1 w - - 0 19",
    score: -1.5,
  },
  {
    lichess: "https://lichess.org/R5mF0kIR",
    fen: "qr4k1/p2p2bp/4p1p1/2p2p2/2Pn4/6P1/PB1QPP1P/R2R2K1 w - - 2 19",
    score: 3.2,
  },
  {
    lichess: "https://lichess.org/CoINq7VP",
    fen: "R2Nr1k1/3pBppp/n3p3/2n5/8/P1P2P2/6PP/6K1 w - - 3 24",
    score: 0.1,
  },
  {
    lichess: "https://lichess.org/hSYcoYCI",
    fen: "r3q1k1/p2n1pbp/3p1np1/1PpP2B1/8/3B1N1P/1P3PP1/R2Q2K1 w - - 0 17",
    score: -0.1,
  },
  {
    lichess: "https://lichess.org/Kl0DUewO",
    fen: "r1bqk2r/ppp1npbp/3p2p1/3Pp3/4PPn1/2N2N2/PPP3PP/R2QKBBR w KQkq - 1 9",
    score: 1.6,
  },
  {
    lichess: "https://lichess.org/CT37iOmI",
    fen: "2r4r/3bbpk1/1q1p1np1/p1n1p3/PpP1P2p/1P2NBP1/1BQRNP1P/2R3K1 w - - 5 26",
    score: -1.6,
  },
  {
    lichess: "https://lichess.org/ZvRmPrlP",
    fen: "r3k2r/2qb1pp1/p2bp2p/1p1nP3/6Q1/2PB4/P4PPP/1RB1R1K1 w kq - 0 21",
    score: 2,
  },
  {
    lichess: "https://lichess.org/O7PAMfVz",
    fen: "8/6pp/p3kn2/1p2n3/3B4/5bP1/P4P1P/1B2K3 w - - 0 32",
    score: -7.1,
  },
  {
    lichess: "https://lichess.org/vlvjtVoK",
    fen: "r3r1k1/1p1q1pbp/p2P1p2/2pB4/P7/3Q4/1PP3PP/R4RK1 w - - 1 24",
    score: 3.8,
  },
  {
    lichess: "https://lichess.org/Nxals6au",
    fen: "r4rk1/1p2p1bp/3ppnpB/p1q5/7Q/2P2N1P/PP3PP1/5RK1 w - - 0 19",
    score: -8.4,
  },
  {
    lichess: "https://lichess.org/yeYFvdKB",
    fen: "2kr3r/ppp3p1/2n2p2/2bn3p/2N5/2P2N2/PP3PPP/R1B2RK1 w - - 4 15",
    score: -0.6,
  },
  {
    lichess: "https://lichess.org/igAmi1tF",
    fen: "2r3k1/p2bBp1p/1p1Pr1p1/4p3/3n4/6P1/PP3PBP/1R1R2K1 w - - 5 27",
    score: 3.4,
  },
  {
    lichess: "https://lichess.org/qUOjA0Xu",
    fen: "8/7p/8/4Bp2/2k1b3/7r/3K4/6R1 w - - 0 44",
    score: -0.5,
  },
  {
    lichess: "https://lichess.org/88O7uKwt",
    fen: "8/1pk2ppp/p3p3/1bN1P3/6P1/5B1n/PPPr3P/2K5 w - - 0 24",
    score: 0.4,
  },
  {
    lichess: "https://lichess.org/ukFe1ZoP",
    fen: "r3r1k1/p3npb1/2q1p1p1/2p1P3/2Pp1P2/3P1QPB/3B2K1/2R4R w - - 1 30",
    score: 0.2,
  },
  {
    lichess: "https://lichess.org/vI8XD1WO",
    fen: "r2r4/5pkp/p3pnp1/4N3/2P4P/1P4P1/P4PK1/R2R4 w - - 1 29",
    score: 5.6,
  },
  {
    lichess: "https://lichess.org/SXvZdKex",
    fen: "2bq1rk1/2p3b1/3p2pp/3Pp3/1P2Ppn1/2P2N2/2BN1PPP/r2QR1K1 w - - 0 19",
    score: 1,
  },
  {
    lichess: "https://lichess.org/8EYZhWE5",
    fen: "3r2k1/1R3pp1/2r1p2p/1N1pP3/7P/6K1/6P1/8 w - - 12 38",
    score: -8.1,
  },
  {
    lichess: "https://lichess.org/Nf7FxX4g",
    fen: "r4rk1/pppnqppp/2b5/2b1P3/2B1P3/2N2PB1/PP4PP/R2QK2R w KQ - 5 13",
    score: 0.7,
  },
  {
    lichess: "https://lichess.org/J5cpmy9r",
    fen: "4rr2/1b1n2bk/3pp1p1/pnp3Bp/1p2PP2/2PP2PP/PP4B1/2RQ1RK1 w - - 2 22",
    score: 7.3,
  },
  {
    lichess: "https://lichess.org/BnnLxoMa",
    fen: "1r1rb3/2q2pk1/pp2p1p1/P1p1P2p/8/2P1Q3/1PB2PPP/R3R1K1 w - - 0 27",
    score: 0.4,
  },
  {
    lichess: "https://lichess.org/teP5YQhG",
    fen: "r1bqrnk1/1p2bppp/2p1pn2/3pN3/p1PP1P2/1P4P1/PBQNP1BP/3R1RK1 w - - 2 14",
    score: 1.3,
  },
  {
    lichess: "https://lichess.org/x2hEjsqv",
    fen: "2r2rk1/pp3pbp/2p3p1/3Pp3/3nPn1q/2NQBP2/PP2BP1P/3R2RK w - - 6 17",
    score: -2.4,
  },
  {
    lichess: "https://lichess.org/KBnKUyuY",
    fen: "r2qr1k1/pppnbpp1/3p2p1/8/3Pn1P1/2P2N1P/PP2NP2/R1BQR1K1 w - - 1 15",
    score: 0.4,
  },
  {
    lichess: "https://lichess.org/NPrKSi7l",
    fen: "r1q2rk1/pp2bppp/2n1pn2/3p4/3P1B2/2PB4/PP1N1PPP/R2Q1RK1 w - - 4 14",
    score: 1.3,
  },
  {
    lichess: "https://lichess.org/xJCBgG6g",
    fen: "6k1/pp2qpbp/6p1/5p2/2PP4/PP1Q3P/5KP1/B2r4 w - - 0 35",
    score: -2.1,
  },
  {
    lichess: "https://lichess.org/UHZG4bPw",
    fen: "2kr3r/1pp3p1/2p1bp2/pq6/NP2PR2/P2PP1Pp/2P2Q1P/5RK1 w - - 2 20",
    score: 3.3,
  },
  {
    lichess: "https://lichess.org/Nkxmc7r5",
    fen: "r1bq1rk1/3nbppp/2p1pn2/ppPp4/3P4/P4NP1/1PQBPPBP/RN3RK1 w - - 1 11",
    score: 1.5,
  },
  {
    lichess: "https://lichess.org/hc0gQOQm",
    fen: "8/p5pp/1ppNk3/4p1nP/1P2N3/2PP3n/P2K4/8 w - - 2 39",
    score: -0.6,
  },
  {
    lichess: "https://lichess.org/LtowkhKN",
    fen: "r2qr1k1/ppp2ppp/2bp1nn1/8/1PP1PR2/3B3P/P1PN2P1/R1BQ2K1 w - - 1 14",
    score: -1,
  },
  {
    lichess: "https://lichess.org/frHe8HAE",
    fen: "8/B2k2n1/2p2bp1/Np5p/6P1/2P4P/PP6/6K1 w - h6 0 27",
    score: 1.2,
  },
  {
    lichess: "https://lichess.org/fokKxDAY",
    fen: "r1bq1rk1/1p2ppnp/p5pB/2pPb3/P7/2N5/1PPQ2PP/R3KB1R w KQ - 2 14",
    score: -2,
  },
  {
    lichess: "https://lichess.org/I1jfNa8a",
    fen: "3r2k1/1p3p1p/p1p1b1p1/4P3/7r/P2B1R1P/1PP2RPK/8 w - - 4 42",
    score: 0,
  },
  {
    lichess: "https://lichess.org/CWrsNQMH",
    fen: "2r2rk1/p2qbppp/1p2p3/2p5/3P4/2P1PQ2/PB3PPP/R4RK1 w - - 2 15",
    score: -1,
  },
  {
    lichess: "https://lichess.org/VvKcz1j0",
    fen: "8/p3bp1p/1pk1p1p1/4P3/2K2P2/P3B3/1P3P1P/8 w - - 4 26",
    score: -1,
  },
  {
    lichess: "https://lichess.org/BTYcwJCZ",
    fen: "rn2kb1r/1pp3pp/p2qbn2/5p2/8/2NP1N2/PPPB2PP/R3KB1R w KQkq - 3 13",
    score: -11.8,
  },
  {
    lichess: "https://lichess.org/lRSmAZ4J",
    fen: "k2r1b2/1p5p/p5p1/3pNp2/3P4/1BP5/PP4PP/4R1K1 w - - 0 25",
    score: 8,
  },
  {
    lichess: "https://lichess.org/Na4QkaLA",
    fen: "rnbqkb1r/ppp2ppp/4pn2/3p4/2PP4/2N5/PP2PPPP/R1BQKBNR w KQkq - 2 4",
    score: 0.3,
  },
  {
    lichess: "https://lichess.org/HA8iWMCs",
    fen: "r4rk1/1bb3pp/pN2ppn1/8/Pp1Q4/1P1P1qP1/1BP2P1P/R3RBK1 w - - 1 20",
    score: -3,
  },
  {
    lichess: "https://lichess.org/G01XHdNZ",
    fen: "r1bqk2r/ppp2ppp/1b2p3/4nP2/2B1N2P/2P5/PP2Q1P1/R1B1K2R w KQkq - 1 16",
    score: 4.6,
  },
  {
    lichess: "https://lichess.org/RwP49NDI",
    fen: "2bq1r1k/p3n1bp/2n3p1/4Pp2/3p1P2/3P1NN1/P5rP/R1BQ1RK1 w - - 0 20",
    score: 0.9,
  },
  {
    lichess: "https://lichess.org/ONRJGN5V",
    fen: "1r3rk1/1p3pp1/1q2p2p/2b1Pb2/1p3P2/P4QP1/6BP/R1B2R1K w - - 0 20",
    score: -2.9,
  },
  {
    lichess: "https://lichess.org/eZMO984o",
    fen: "r3b1k1/pp2rppp/1np1p3/q1Nn4/3P4/1Q2PN2/PP2BPPP/2R2RK1 w - - 6 16",
    score: 2.4,
  },
  {
    lichess: "https://lichess.org/zNSxRIkk",
    fen: "r3r1k1/1p2b1pp/q1p1bn2/p2pBp2/P2P4/3NPPP1/1PQ3BP/2R2RK1 w - - 1 19",
    score: 1.6,
  },
  {
    lichess: "https://lichess.org/P2wj71ic",
    fen: "2b1r1k1/1p3p1p/2n2B2/3r4/p5q1/P5Q1/1P1N1PPP/R5KR w - - 3 24",
    score: 1.1,
  },
  {
    lichess: "https://lichess.org/GaMZtY3p",
    fen: "3r1rk1/1pp2pp1/2n1q2p/p1b1p3/4P1b1/2P2NP1/PPQNBPKP/R2R4 w - - 6 17",
    score: -0.5,
  },
  {
    lichess: "https://lichess.org/bDqvvyyM",
    fen: "r2r2k1/5p2/p3bb2/1p1ppNp1/8/2P5/PPB2PPP/3R1RK1 w - - 4 23",
    score: -1.3,
  },
  {
    lichess: "https://lichess.org/FdCzKPF4",
    fen: "2r1kb1r/pp1b1ppp/3Ppn1q/2n1Q3/1pP5/5NR1/PBBN1P1P/2KR4 w k - 4 18",
    score: 2.9,
  },
  {
    lichess: "https://lichess.org/A6vQ0Ax5",
    fen: "r1nr2k1/4ppb1/p2p2p1/qp1PPb1p/3BNP2/2N4P/4Q1P1/2R2R1K w - - 0 28",
    score: 1.3,
  },
  {
    lichess: "https://lichess.org/TexgHbJ2",
    fen: "1r1q1r2/4ppkp/5np1/2p5/1n6/2N3P1/1P1QPPNP/R4RK1 w - - 0 18",
    score: 0,
  },
  {
    lichess: "https://lichess.org/LSjDohzt",
    fen: "r3r1k1/ppn1qppp/1n1Nb3/2p5/P3P3/2P2PP1/2Q3BP/R1BR2K1 w - - 3 21",
    score: 5.8,
  },
  {
    lichess: "https://lichess.org/sBIM05mf",
    fen: "5rk1/5ppp/Qp3n2/8/1q1Pp3/4P3/3N1PPP/2R3K1 w - - 1 24",
    score: 1.3,
  },
  {
    lichess: "https://lichess.org/dizaq1Jo",
    fen: "r2r2k1/4pp1p/1n4p1/2pP4/P2bNB2/8/R5PP/5R1K w - - 1 28",
    score: -0.4,
  },
  {
    lichess: "https://lichess.org/JvARvAPf",
    fen: "2r1r1k1/1bqnbp1p/pp1ppnp1/8/2PNP3/1PN3PP/PB2QPB1/3RR1K1 w - - 0 16",
    score: 0.7,
  },
  {
    lichess: "https://lichess.org/VyInZLOq",
    fen: "r2q1rk1/1p2bppp/p1b1p3/8/4nP2/3P1N2/PP1BQ1PP/3R1R1K w - - 0 15",
    score: -5.8,
  },
  {
    lichess: "https://lichess.org/81Tv2OCy",
    fen: "r1bq1rk1/pp2ppbp/2n3p1/2pn4/8/3P1NPP/PPP2PB1/RNBQ1RK1 w - - 1 9",
    score: -0.4,
  },
  {
    lichess: "https://lichess.org/4IUMUgRI",
    fen: "8/3n4/3Npk1p/6p1/6P1/5K2/8/8 w - - 2 43",
    score: -6.1,
  },
  {
    lichess: "https://lichess.org/0yfWXSvV",
    fen: "8/5pk1/1pp5/p1p1q2p/P1P1P1p1/1PPQ2P1/4P1KP/8 w - - 1 32",
    score: 0.4,
  },
  {
    lichess: "https://lichess.org/XHI31ugB",
    fen: "r1b2rk1/p3bppp/1pn1p3/3n4/4N3/P1P2N2/1P2BPPP/R1B2RK1 w - - 0 13",
    score: -0.2,
  },
  {
    lichess: "https://lichess.org/b3OJFPrN",
    fen: "1rb1k1r1/p3bp2/2p1p2p/4P3/4N1q1/P2BB1P1/1pP2P1Q/1R2K3 w - - 3 23",
    score: 0,
  },
  {
    lichess: "https://lichess.org/XlqQxJrZ",
    fen: "r1b1kb1r/1pp2ppp/p1n2n2/q7/4P3/2P2N2/PP1NQPPP/R1B1KB1R w KQkq - 1 9",
    score: 2.9,
  },
  {
    lichess: "https://lichess.org/PmtIwGUc",
    fen: "2r1k2r/1bq1nppp/p2p1n2/1p1P4/8/P2BQN2/1PP2PPP/3R1RK1 w k - 1 15",
    score: -6.4,
  },
  {
    lichess: "https://lichess.org/qv5XImZI",
    fen: "r7/p4r1p/1p1RN1pb/1kp1P3/1n3P2/4B1P1/PPP4P/2K4R w - - 1 22",
    score: 9.2,
  },
  {
    lichess: "https://lichess.org/pMLTOnIu",
    fen: "r4r2/6k1/1ppbp2p/3p4/8/1PNQ1RqP/P3PKB1/7R w - - 4 27",
    score: -0.6,
  },
  {
    lichess: "https://lichess.org/SaeqPMKh",
    fen: "6r1/1p4r1/2pkpp2/1p6/3Pp1P1/2P1P3/PP3KP1/R6R w - - 6 29",
    score: -0.2,
  },
  {
    lichess: "https://lichess.org/lymqeYxX",
    fen: "r5k1/2pnr1pp/1p1p4/p3pp2/P1PP4/2P1PN2/5PPP/R3R1K1 w - a6 0 19",
    score: -0.4,
  },
  {
    lichess: "https://lichess.org/a0eSSeuO",
    fen: "6k1/4pp1p/1p4p1/4P2b/pP1bBP2/P1r4P/3r1P2/1RN2RK1 w - - 2 28",
    score: -8.7,
  },
  {
    lichess: "https://lichess.org/pPEJuzlF",
    fen: "r2qk2r/ppp2pp1/5n1p/3pbb2/8/2N3PP/PP2PPB1/R1BQ1RK1 w kq - 0 12",
    score: -0.1,
  },
  {
    lichess: "https://lichess.org/MVvaDZk1",
    fen: "5rk1/1pp3pp/pb1p4/3P4/2R1N3/5rP1/PP2RP1P/6K1 w - - 2 25",
    score: -0.1,
  },
  {
    lichess: "https://lichess.org/LzpPx0uv",
    fen: "5k2/p1b5/5N2/5K2/PpP5/1P6/1r6/3R4 w - - 5 35",
    score: 4.9,
  },
  {
    lichess: "https://lichess.org/aPrycmUz",
    fen: "2b1k2r/1p2nppp/1ppp2n1/r7/3qPP2/2NBNQ2/PPP3PP/R4R1K w k - 5 15",
    score: 4.9,
  },
  {
    lichess: "https://lichess.org/YMnvogyg",
    fen: "2r1r1k1/1p1q1ppp/p7/3pR3/PQ1P4/7P/1P3PP1/3R2K1 w - - 3 22",
    score: 0,
  },
  {
    lichess: "https://lichess.org/FMdMc76q",
    fen: "1k1r1b1r/pPp1pppp/8/1Bq2bB1/4n3/2N2N2/PPP1QPPP/R3K2R w KQ - 3 12",
    score: 9.6,
  },
  {
    lichess: "https://lichess.org/lM6l30ot",
    fen: "rn1qkbnr/pbpppppp/1p6/8/3P4/5N2/PPP1PPPP/RNBQKB1R w KQkq - 1 3",
    score: 0.5,
  },
  {
    lichess: "https://lichess.org/hAplRm3l",
    fen: "rnbq1r2/pp2npk1/6pR/2P1p3/3pP3/3B1N2/PPP1NPP1/R2QK3 w Q - 1 14",
    score: 5.5,
  },
  {
    lichess: "https://lichess.org/fQySTouG",
    fen: "r4rk1/1p1nqppp/2p2n2/2b1p3/p1P5/1P1PPBP1/PBQN3P/R4RK1 w - - 2 16",
    score: -0.9,
  },
  {
    lichess: "https://lichess.org/CFsdwZy1",
    fen: "q1r2rk1/1b1nppbp/pp1p2p1/2pP4/2P1P3/1P3NP1/P2NBPP1/2RQR1K1 w - - 0 17",
    score: -0.4,
  },
  {
    lichess: "https://lichess.org/VBO6Z9Up",
    fen: "8/1bp3kp/5p2/p2prP1Q/8/1P5P/2P3P1/6K1 w - - 1 37",
    score: 6,
  },
  {
    lichess: "https://lichess.org/kNiVrCxH",
    fen: "r2k3r/1p1bb3/pq1ppp1p/2n4Q/3NP3/1BN5/PPP3PP/2KR3R w - - 2 16",
    score: 4.2,
  },
  {
    lichess: "https://lichess.org/q6hqneOz",
    fen: "rnbqkbnr/pppppppp/8/8/4P3/8/PPPP1PPP/RNBQKBNR b KQkq e3 0 1",
    score: -0.3,
  },
  {
    lichess: "https://lichess.org/MQ9PmI0u",
    fen: "8/2k2p1p/4p1p1/K2p3N/3P4/5P2/P5PP/4n3 w - - 0 28",
    score: -0.3,
  },
  {
    lichess: "https://lichess.org/lE8v4IB2",
    fen: "5r2/pp2kpQ1/4q1pR/3pPpP1/P2P4/1n2B1P1/1P3PK1/8 w - - 3 36",
    score: 4.1,
  },
  {
    lichess: "https://lichess.org/fk81xx7t",
    fen: "r4rk1/pp3ppp/1q3bb1/3B4/6P1/P1B4P/1P3P2/R2Q1RK1 w - - 4 20",
    score: 0.3,
  },
  {
    lichess: "https://lichess.org/FjBLSuXK",
    fen: "2brr1k1/1p3pbp/1qpB2p1/p3P3/PP3P2/5BPP/2Q4K/3R1R2 w - a6 0 29",
    score: 0.7,
  },
  {
    lichess: "https://lichess.org/IEt9DLxh",
    fen: "5k2/1R4p1/1p3pB1/pq2p3/8/1P1PPnP1/5P1P/6K1 w - - 1 34",
    score: -7,
  },
  {
    lichess: "https://lichess.org/7NrSKCQ2",
    fen: "r5k1/p1qr1pbp/bpn1p1p1/2p5/3PP2P/2P2NP1/PB1Q1PB1/2R1R1K1 w - - 1 16",
    score: 0.2,
  },
  {
    lichess: "https://lichess.org/zYiSo7HN",
    fen: "r1br4/p2N2kp/4p1p1/2P5/3R4/8/P1P2PPP/4R1K1 w - - 1 24",
    score: 8,
  },
  {
    lichess: "https://lichess.org/Jumecjw7",
    fen: "7k/2Q1bp2/3p1q1p/1p1bnp2/4pN1P/1P2P1P1/P4PB1/6K1 w - - 0 29",
    score: 7.5,
  },
  {
    lichess: "https://lichess.org/hAaTraoP",
    fen: "r3kb1r/1p1q1ppb/3p4/2p3Np/2P1PP1P/1pNQ4/PB1P2P1/2KR4 w kq - 0 21",
    score: 3.9,
  },
  {
    lichess: "https://lichess.org/uQ6FI367",
    fen: "r1b1k2r/2q1bppp/p1nppn2/6B1/1p2PP1Q/1BN2N2/PPP3PP/2KR3R w kq - 0 12",
    score: 2.2,
  },
  {
    lichess: "https://lichess.org/MDcLmnLB",
    fen: "3rk3/pp3pr1/2n1b3/8/2PqQ3/BP6/P4PPN/R3R1K1 w - - 5 20",
    score: 6,
  },
  {
    lichess: "https://lichess.org/d6sT2pub",
    fen: "8/pp3pk1/3qbn2/1P1p2n1/3P1pPp/3QpP1P/4P1B1/r1R1N1K1 w - - 0 29",
    score: 0,
  },
  {
    lichess: "https://lichess.org/nv5HatDD",
    fen: "r1b2rk1/ppp2ppp/1b6/3qp3/8/3PB3/PPP1NPPP/R2Q1RK1 w - - 0 13",
    score: 0,
  },
  {
    lichess: "https://lichess.org/HKcgwn6s",
    fen: "r1b1knQ1/pp3p2/2pbpq2/3p4/2P1P3/2N1B3/PP3P2/R3KB2 w Qq - 2 16",
    score: 0.2,
  },
  {
    lichess: "https://lichess.org/tTcf5iJ8",
    fen: "r4b1r/pb1kn1pp/np1N1p2/2p1p3/8/3NB3/PPP1PPPP/2KR1BR1 w - - 8 13",
    score: 8,
  },
  {
    lichess: "https://lichess.org/KLoCVuKH",
    fen: "5rk1/5pp1/p4qr1/3B4/3P4/3QP1p1/PP3P1P/2R2RK1 w - - 0 27",
    score: 11.5,
  },
  {
    lichess: "https://lichess.org/dfhGSs7I",
    fen: "r1bq1rk1/pppnppbp/5np1/3p2B1/3P4/2NBPN2/PPP2PPP/R2QK2R w KQ - 4 7",
    score: -0.1,
  },
  {
    lichess: "https://lichess.org/O7aCaznw",
    fen: "r4rk1/1pp4p/2b1pnp1/3n4/4NP2/pPP3P1/P1BN3P/2KRR3 w - - 0 25",
    score: 2.5,
  },
  {
    lichess: "https://lichess.org/yK2DKyWf",
    fen: "8/pp2ppkp/6p1/8/2n5/4PP1P/PP2KP2/3B4 w - - 1 23",
    score: -0.2,
  },
  {
    lichess: "https://lichess.org/nrwc07bo",
    fen: "r1b2rk1/1pqnbppp/p2ppn2/8/3NPP2/2NBBQ2/PPP3PP/R4RK1 w - - 7 11",
    score: 1.1,
  },
  {
    lichess: "https://lichess.org/kKP1xQwp",
    fen: "rn2q1k1/p5pp/bp1p1r2/3Pp3/4Pp2/1PN2B2/P4PPP/R2QR1K1 w - - 0 20",
    score: 1.1,
  },
  {
    lichess: "https://lichess.org/My2YUg9X",
    fen: "r4bk1/1b1q1p1p/3p2p1/p1pP4/1p3B1P/2P2BQ1/PP3PP1/4R1K1 w - - 0 26",
    score: 1.5,
  },
  {
    lichess: "https://lichess.org/BgN05gtV",
    fen: "r3k2r/ppp2p2/3pbq1p/4n3/4P2p/2N1QPnN/PPP1B1PR/1K1R4 w kq - 3 18",
    score: 1.1,
  },
  {
    lichess: "https://lichess.org/m0s45LbE",
    fen: "2r1r1k1/qp1bbpp1/p1n1pn1p/8/1PNN4/P3P1P1/1B2QPBP/2RR2K1 w - - 1 18",
    score: 4.3,
  },
  {
    lichess: "https://lichess.org/GJp8HTaG",
    fen: "r1bqr1k1/p1pp1ppp/2p2n2/2b1N3/4P3/2N5/PPPP1PPP/R1BQ1RK1 w - - 1 8",
    score: 1.9,
  },
  {
    lichess: "https://lichess.org/QjL603te",
    fen: "2k5/r1r4p/1QP3p1/P1P1pp2/8/1B5P/5PP1/6K1 w - - 3 31",
    score: 15.2,
  },
  {
    lichess: "https://lichess.org/8E5FuyoJ",
    fen: "r1b1kb1r/1pqpnppp/p3p3/6B1/3NP3/2N5/PPP2PPP/R2Q1RK1 w kq - 2 10",
    score: 7,
  },
  {
    lichess: "https://lichess.org/WYnnn4kH",
    fen: "r1b1r1k1/pp1nqpp1/2pb1n1p/4p3/1PP1P3/P4NP1/1B1N1PBP/R2Q1RK1 w - - 1 14",
    score: 1.1,
  },
  {
    lichess: "https://lichess.org/cR7jnsIB",
    fen: "2r1k3/Q2b1pp1/3bp3/3p1q2/2PP4/1P4P1/P3PPB1/2R2RK1 w - - 1 21",
    score: 8.7,
  },
  {
    lichess: "https://lichess.org/V0rCo4SS",
    fen: "2br2k1/4q1b1/1R1p2n1/QNpPp3/2P1Ppp1/P6P/4BBPK/8 w - - 0 33",
    score: 4.1,
  },
  {
    lichess: "https://lichess.org/R67cbWBf",
    fen: "2r2rk1/Np1bppbp/6p1/8/4BPn1/2P1B3/P4RPP/3R2K1 w - - 1 23",
    score: 3.3,
  },
  {
    lichess: "https://lichess.org/kIcvjybU",
    fen: "r4r1k/pppn1pb1/4p2p/3pP2B/4bB2/2P1PN2/PP3P2/R3K1R1 w Q - 3 20",
    score: -0.3,
  },
  {
    lichess: "https://lichess.org/U9Ir5UAH",
    fen: "r2qr1k1/pp3pbp/1n4p1/2BPp3/8/1B3P2/P4P1P/1R1Q1RK1 w - - 2 21",
    score: -0.6,
  },
  {
    lichess: "https://lichess.org/UOBWCMqu",
    fen: "5k2/5p2/p1bP3p/1p5N/3bPP1p/1Pr4P/P5PK/1B3R2 w - - 1 30",
    score: 5.2,
  },
  {
    lichess: "https://lichess.org/rWCcyu3r",
    fen: "r7/4kp2/2b1p1p1/1pNpP2p/pPrR1P1P/P1P3P1/3K4/6R1 w - - 1 42",
    score: 0.7,
  },
  {
    lichess: "https://lichess.org/vf0T9Avv",
    fen: "4r1k1/1p1r2pp/pB4b1/4b3/2N3n1/N4R2/PP1pKPP1/3R4 w - - 6 29",
    score: -7.7,
  },
  {
    lichess: "https://lichess.org/MU2qUwbI",
    fen: "r1b2rk1/3pbpp1/pqn1p1np/1p6/1PB1P3/P1N2NB1/4QPPP/R2R2K1 w - - 1 15",
    score: -0.8,
  },
  {
    lichess: "https://lichess.org/URhjkpla",
    fen: "r1b2rk1/p1qn1ppp/1p1bp3/3p4/3nP3/2P3P1/PP1NQPBP/R1B1R1K1 w - - 0 13",
    score: 0.7,
  },
  {
    lichess: "https://lichess.org/zTvhwKPG",
    fen: "r4rk1/3pb1pp/p3p3/4P3/pP3p1n/2PQ1N2/B3K1qP/R1B1R3 w - - 1 28",
    score: -8.4,
  },
  {
    lichess: "https://lichess.org/NC889zOP",
    fen: "1r1q1rk1/p3pp1p/1nn1P1p1/8/8/5NPP/P2BQPB1/R5K1 w - - 1 21",
    score: 1.4,
  },
  {
    lichess: "https://lichess.org/dqfxMFVI",
    fen: "r1bqk1nr/pp1pppbp/n5p1/2P5/4P3/5N2/PPP2PPP/RNBQKB1R w KQkq - 1 5",
    score: 2.7,
  },
  {
    lichess: "https://lichess.org/hgydBzUN",
    fen: "r4bk1/1b3ppp/p3p3/1p1nP3/1P2N3/P5BP/4QPPK/1r6 w - - 0 28",
    score: -6.3,
  },
  {
    lichess: "https://lichess.org/hkOM05v8",
    fen: "r2q1rk1/p2nbpp1/1pp1p1p1/2Pp4/PP1P1P2/2NBP3/6PP/R2Q1RK1 w - - 0 17",
    score: 0.5,
  },
  {
    lichess: "https://lichess.org/KiwOuSxZ",
    fen: "nq2r3/3p1pkp/2p2bp1/p1P2p2/Nr1P3P/1P1QP1P1/1R3PB1/1R4K1 w - - 1 25",
    score: 2.2,
  },
  {
    lichess: "https://lichess.org/HVMJvnOW",
    fen: "r1b2rk1/bpp2p1n/3p4/p3pNq1/P1BPP1Qn/2P5/1P3PPN/R3R1K1 w - - 1 21",
    score: 0.4,
  },
  {
    lichess: "https://lichess.org/ZeGqcoyY",
    fen: "rn2k2r/1bqp1ppp/p3pn2/1pb3B1/3NP3/P1NB4/1PP2PPP/R2Q1RK1 w kq - 3 10",
    score: -0.1,
  },
  {
    lichess: "https://lichess.org/F79WJ0HF",
    fen: "3r2k1/1q3pp1/4pb1p/p7/6QP/6P1/P1R2P2/5RK1 w - - 0 26",
    score: 3.7,
  },
  {
    lichess: "https://lichess.org/YhYLrWJE",
    fen: "2rr2k1/p3bppp/1p2p3/8/3PP3/1P3PP1/1B4KP/2R2R2 w - - 1 21",
    score: 0,
  },
  {
    lichess: "https://lichess.org/MRTPgtxx",
    fen: "8/1nNb4/5kpp/2pP4/1pP2P2/1p1B2K1/P7/8 w - - 0 38",
    score: -1.5,
  },
  {
    lichess: "https://lichess.org/JDQi5Lfc",
    fen: "r2q3k/1pp3bp/p3Q1p1/3p4/5B2/2P5/PP3PPP/R5K1 w - - 1 21",
    score: 2.1,
  },
  {
    lichess: "https://lichess.org/fUkOzWbj",
    fen: "5rk1/p2bqp1p/2p2npb/Q1p1p3/1rP5/2NP2P1/P2NPPBP/1R3RK1 w - - 4 17",
    score: 2.7,
  },
  {
    lichess: "https://lichess.org/JCHIwtcF",
    fen: "r3b3/1pp3k1/p3pqpr/3pn2p/PP1P1P1P/2PB3R/3Q2P1/R3K3 w Q - 0 24",
    score: 4.8,
  },
  {
    lichess: "https://lichess.org/5GVQVC33",
    fen: "1kr4r/pbq1bp2/1n2p3/n2pP3/3p2p1/B1P1N1P1/3N1PB1/RQ2R1K1 w - - 0 25",
    score: 0.8,
  },
  {
    lichess: "https://lichess.org/vCDZ9sV9",
    fen: "rn1q1rk1/p4pbp/bp2p1p1/2p5/3PP3/2P2NP1/PB3PBP/R2Q1RK1 w - - 2 12",
    score: 0.3,
  },
  {
    lichess: "https://lichess.org/YhlLxVo0",
    fen: "r1b1rk2/2q2pR1/p2b1p1P/2p5/3P4/2pB3P/PP1QNP2/2K4R w - - 1 22",
    score: 7.9,
  },
  {
    lichess: "https://lichess.org/hOJPneqy",
    fen: "r1bq1rk1/pp2ppbp/nn4p1/P3p3/3N1P2/1BN5/1PP3PP/R1BQK2R w KQ - 0 12",
    score: -0.3,
  },
  {
    lichess: "https://lichess.org/Oq5ZugzJ",
    fen: "8/2qr1pk1/pp1p2p1/2p4p/P1P4P/1P2RQP1/4RPK1/1r6 w - - 12 35",
    score: 0.1,
  },
  {
    lichess: "https://lichess.org/kNgvdTqT",
    fen: "8/4k3/1R3pp1/3Ppb1p/7P/3K4/6P1/8 w - - 2 43",
    score: 5.8,
  },
  {
    lichess: "https://lichess.org/BXEqWooL",
    fen: "r4rk1/p4ppp/2nq4/1p1p1p2/2pPn3/1PP1P3/P2NBPPP/R2Q1RK1 w - - 1 15",
    score: 0,
  },
  {
    lichess: "https://lichess.org/YUs7wmZe",
    fen: "2k5/1pp2p2/p5r1/5bq1/4PQ2/1PP3P1/P4K2/4R3 w - - 0 35",
    score: 1.5,
  },
  {
    lichess: "https://lichess.org/30XinosL",
    fen: "2b1k2r/ppp3pp/5p2/1P2p3/PbP3P1/1N5P/5PB1/3R2K1 w k - 5 23",
    score: -2.9,
  },
  {
    lichess: "https://lichess.org/Q2oNZWJp",
    fen: "r3kb1r/pp2pppp/5n2/2p5/6q1/2N5/PPPP2PP/R1BQ1R1K w kq - 0 12",
    score: -1.3,
  },
  {
    lichess: "https://lichess.org/xWPLM2ao",
    fen: "r1bqkbnr/1p3ppp/p1n1p3/1N6/2PpP3/3Q4/PP3PPP/R1B1KBNR w KQkq - 0 8",
    score: -3.5,
  },
  {
    lichess: "https://lichess.org/vhebEvGB",
    fen: "r3k2r/pp1n1pp1/2p1pn1p/q7/4PBPP/b1N2Q2/1PP2P2/2KR1B1R w kq - 0 13",
    score: 3,
  },
  {
    lichess: "https://lichess.org/564zYWNO",
    fen: "rr6/p1pk1ppp/2pbp3/R7/3P4/2B2P2/PPP2P1P/R5K1 w - - 6 17",
    score: -0.4,
  },
  {
    lichess: "https://lichess.org/pLJRY8aO",
    fen: "r2qr1k1/pp1b1ppp/2pb1nn1/3p4/2PPp3/PPN1P1PP/1BQNBP2/R3K2R w KQ - 1 14",
    score: -1.6,
  },
  {
    lichess: "https://lichess.org/hix6eT3u",
    fen: "4r1k1/p4pp1/1p5p/3N3q/8/4PPPb/PP1Q1K1P/5R2 w - - 3 30",
    score: 4.7,
  },
  {
    lichess: "https://lichess.org/NpHpHXMW",
    fen: "5rk1/5ppp/1Q1Np3/p2bP3/2p1pPP1/qP6/7P/1R4K1 w - - 2 37",
    score: -4,
  },
  {
    lichess: "https://lichess.org/XDuGbFmo",
    fen: "1Q6/3b2qk/1pp1r3/p2p4/3P4/P3PR1P/1P4P1/6K1 w - - 5 29",
    score: -0.4,
  },
  {
    lichess: "https://lichess.org/9P5tRnKc",
    fen: "1rbq1rk1/1p4bp/p2p2p1/2pPnp1n/P3P3/1PNBBP2/4N1PP/R2Q1RK1 w - f6 0 15",
    score: -0.8,
  },
  {
    lichess: "https://lichess.org/j1RnQnKo",
    fen: "r1b2rk1/pp4pp/2n2q2/3pp3/3P4/3BQ3/PP2NPPP/R4RK1 w - - 0 18",
    score: 0.5,
  },
  {
    lichess: "https://lichess.org/C1G0FXel",
    fen: "r4rk1/q2nbppb/2p1p2p/p1P1P2P/Pp3P2/1B2B1N1/1P3QP1/2R1K2R w K - 3 22",
    score: 1.2,
  },
  {
    lichess: "https://lichess.org/DeYtcK3E",
    fen: "2rk1b1r/p5pp/4ppb1/3p4/B4B2/4P3/PPPK1PPP/R6R w - - 0 16",
    score: 1.2,
  },
  {
    lichess: "https://lichess.org/p8wjDjMQ",
    fen: "r4rk1/1b5p/3q2pQ/p2p1pP1/1ppP4/2P5/PP2B1P1/R4RK1 w - - 0 25",
    score: -1.3,
  },
  {
    lichess: "https://lichess.org/bSH2PjjN",
    fen: "r4r2/3k2pp/2bNp3/ppP1n3/2p5/2P1KPP1/P6P/R5NR w - - 0 25",
    score: -3.4,
  },
  {
    lichess: "https://lichess.org/4eYjLVQQ",
    fen: "8/p5pp/1pn5/3k4/3Bp3/2P1K3/P1P3PP/8 w - - 4 30",
    score: 2.7,
  },
  {
    lichess: "https://lichess.org/J94Q8Yq5",
    fen: "r1b2rk1/ppb1nppp/2p2q2/2P5/8/2N1B3/PPQ1BPPP/R4RK1 w - - 1 14",
    score: -0.5,
  },
  {
    lichess: "https://lichess.org/1hSinRzf",
    fen: "4r1k1/p4p1p/1p2rpp1/n2R1N2/8/bPP1B3/P1K2PPP/5R2 w - - 0 25",
    score: 4.8,
  },
  {
    lichess: "https://lichess.org/9DJEqLZn",
    fen: "r3kb1r/pp2nppp/2b5/q2pPP2/3B4/2N5/PPP3PP/R2Q1RK1 w kq - 1 16",
    score: 0.3,
  },
];
