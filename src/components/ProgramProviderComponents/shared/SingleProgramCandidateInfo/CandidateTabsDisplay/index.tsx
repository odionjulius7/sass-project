import React from "react";
import VideoTab from "./VideoTab";
// import VideoTab from "./VideoTab"

type Props = {
	currentTab: number;
};

export default function Index({ currentTab }: Props) {
	return <>{currentTab == 2 && <VideoTab />}</>;
}
