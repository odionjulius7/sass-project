import React from "react";
import VideoTab from "./VideoTab";
import NotesTab from "./NotesTab";

type Props = {
	currentTab: number;
};

export default function Index({ currentTab }: Props) {
	return (
		<>
			{currentTab === 2 && <VideoTab />}
			{currentTab === 4 && <NotesTab />}
			{/* {currentTab == 2 && <VideoTab />} */}
		</>
	);
}
