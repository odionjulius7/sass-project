import { Box, Stack } from "@mui/material";
import CandidateCTA from "./CandidateCTA";
import CandidateScore from "./CandidateScore";
import CandidateTabs from "./CandidateTabs";
import CandidateTabsDisplay from "./CandidateTabsDisplay";
import { useState } from "react";
// import CandidateVideo from "../";
// CandidateVideo
import CandidateEvaluation from "./CandidateEvaluation";
import CandidateProfile from "./CandidateProfile";
const SingleProgramCandidateNav = () => {
  const [currentTab, setCurrentTab] = useState<number>(1);

  // return (
  // 	<Box sx={{ width: "100%" }}>
  // 		<Stack direction="row" justifyContent="space-between" my={2}>
  // 			<CandidateScore score={6.6} />
  // 			<CandidateCTA />
  // 		</Stack>
  // 		<CandidateTabs
  // 			currentLabel={currentTab}
  // 			labels={["Profile", "Video", "Evaluation", "Notes", "Placement", "Log"]}
  // 			onChange={(num) => {
  // 				setCurrentTab(num);
  // 			}}
  // 		/>
  // 		{/* <CandidateVideo /> */}
  // 		<CandidateEvaluation />
  // 	</Box>
  // );

  return (
    <Box sx={{ width: "100%" }}>
      <Stack direction="row" justifyContent="space-between" my={2}>
        <CandidateScore score={6.6} />
        <CandidateCTA />
      </Stack>
      <CandidateTabs
        currentLabel={currentTab}
        labels={["Profile", "Video", "Evaluation", "Notes", "Placement", "Log"]}
        onChange={(num) => {
          setCurrentTab(num);
        }}
      />
      {currentTab === 1 && <CandidateProfile />}

      {currentTab === 2 && <CandidateTabsDisplay currentTab={currentTab} />}

      {currentTab === 3 && <CandidateEvaluation />}
    </Box>
  );
};
export default SingleProgramCandidateNav;
