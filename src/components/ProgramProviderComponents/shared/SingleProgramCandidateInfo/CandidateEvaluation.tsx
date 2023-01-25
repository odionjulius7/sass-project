import { Box, Stack } from "@mui/material";
import AddIcon from "../../../../assets/icons/add-sign.svg";

const CandidateEvaluation = () => {
  return (
    <Box>
      <Stack my={2}>
        <Stack
          direction="row"
          justifyContent="space-between"
          sx={{
            p: 2,
            // m: 4, 0,
            margin: "4px 0px 40px 0px",
            fontSize: "15px",
            display: "flex",
            borderRadius: "20px",
            boxShadow: "0px 0px 33px rgba(190, 190, 190, 0.5)",
          }}
        >
          <p style={{ width: "57%" }}>
            Interview Evaluation. Please note, your score will be calculated to
            the overall score of the candidate
          </p>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "22%",
              alignItems: "center",
              marginRight: "40px",
            }}
          >
            <img src={AddIcon} alt="" width="15%" />
            <p style={{ color: "#8528C8" }}>Add evaluation</p>
          </div>
        </Stack>
        <Stack
          sx={{
            p: 3,

            borderRadius: "20px",
            boxShadow: "0px 0px 33px rgba(190, 190, 190, 0.5)",
          }}
        >
          <p style={{ width: "85%" }}>
            Interview Evaluation. Please note, your score will be calculated to
            the overall score of the candidate
          </p>
          <hr
            style={{
              border: "1px solid #B5B5B5",
              height: "0px",
              width: "100%",
              color: "#B5B5B5",
            }}
          />
          <h4>
            1-3 Below expectation 4-5 Neutral 6-7 Met expectation 8-10 -
            Exceeded expectation
          </h4>
          <div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <p
                style={{
                  width: "100%",
                }}
              >
                Communication
              </p>
              <ul
                style={{
                  listStyle: "none",
                  display: "flex",
                  width: "100%",
                  borderRadius: " 6px",
                  border: "0.5px solid #000000",
                  paddingInlineStart: "0px",
                }}
              >
                <li
                  style={{
                    padding: "5px 11px",
                    borderRight: "0.5px solid #000000",
                  }}
                >
                  0
                </li>
                <li
                  style={{
                    padding: "5px 11px",
                    borderRight: "0.5px solid #000000",
                  }}
                >
                  1
                </li>
                <li
                  style={{
                    padding: "5px 11px",
                    borderRight: "0.5px solid #000000",
                  }}
                >
                  2
                </li>
                <li
                  style={{
                    padding: "5px 11px",
                    borderRight: "0.5px solid #000000",
                  }}
                >
                  3
                </li>
                <li
                  style={{
                    padding: "5px 11px",
                    borderRight: "0.5px solid #000000",
                  }}
                >
                  4
                </li>
                <li
                  style={{
                    padding: "5px 11px",
                    borderRight: "0.5px solid #000000",
                  }}
                >
                  5
                </li>
                <li
                  style={{
                    padding: "5px 11px",
                    borderRight: "0.5px solid #000000",
                  }}
                >
                  6
                </li>
                <li
                  style={{
                    padding: "5px 11px",
                    borderRight: "0.5px solid #000000",
                  }}
                >
                  7
                </li>
                <li
                  style={{
                    padding: "5px 11px",
                    borderRight: "0.5px solid #000000",
                  }}
                >
                  8
                </li>
                <li
                  style={{
                    padding: "5px 11px",
                    borderRight: "0.5px solid #000000",
                  }}
                >
                  9
                </li>
                <li
                  style={{
                    padding: "5px 11px",
                  }}
                >
                  10
                </li>
              </ul>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <p
                style={{
                  width: "100%",
                }}
              >
                Professionalism
              </p>
              <ul
                style={{
                  listStyle: "none",
                  display: "flex",
                  width: "100%",
                  borderRadius: " 6px",
                  border: "0.5px solid #000000",
                  paddingInlineStart: "0px",
                }}
              >
                <li
                  style={{
                    padding: "5px 11px",
                    borderRight: "0.5px solid #000000",
                  }}
                >
                  0
                </li>
                <li
                  style={{
                    padding: "5px 11px",
                    borderRight: "0.5px solid #000000",
                  }}
                >
                  1
                </li>
                <li
                  style={{
                    padding: "5px 11px",
                    borderRight: "0.5px solid #000000",
                  }}
                >
                  2
                </li>
                <li
                  style={{
                    padding: "5px 11px",
                    borderRight: "0.5px solid #000000",
                  }}
                >
                  3
                </li>
                <li
                  style={{
                    padding: "5px 11px",
                    borderRight: "0.5px solid #000000",
                  }}
                >
                  4
                </li>
                <li
                  style={{
                    padding: "5px 11px",
                    borderRight: "0.5px solid #000000",
                  }}
                >
                  5
                </li>
                <li
                  style={{
                    padding: "5px 11px",
                    borderRight: "0.5px solid #000000",
                  }}
                >
                  6
                </li>
                <li
                  style={{
                    padding: "5px 11px",
                    borderRight: "0.5px solid #000000",
                  }}
                >
                  7
                </li>
                <li
                  style={{
                    padding: "5px 11px",
                    borderRight: "0.5px solid #000000",
                  }}
                >
                  8
                </li>
                <li
                  style={{
                    padding: "5px 11px",
                    borderRight: "0.5px solid #000000",
                  }}
                >
                  9
                </li>
                <li
                  style={{
                    padding: "5px 11px",
                  }}
                >
                  10
                </li>
              </ul>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <p
                style={{
                  width: "100%",
                }}
              >
                Attitude
              </p>
              <ul
                style={{
                  listStyle: "none",
                  display: "flex",
                  width: "100%",
                  borderRadius: " 6px",
                  border: "0.5px solid #000000",
                  paddingInlineStart: "0px",
                }}
              >
                <li
                  style={{
                    padding: "5px 11px",
                    borderRight: "0.5px solid #000000",
                  }}
                >
                  0
                </li>
                <li
                  style={{
                    padding: "5px 11px",
                    borderRight: "0.5px solid #000000",
                  }}
                >
                  1
                </li>
                <li
                  style={{
                    padding: "5px 11px",
                    borderRight: "0.5px solid #000000",
                  }}
                >
                  2
                </li>
                <li
                  style={{
                    padding: "5px 11px",
                    borderRight: "0.5px solid #000000",
                  }}
                >
                  3
                </li>
                <li
                  style={{
                    padding: "5px 11px",
                    borderRight: "0.5px solid #000000",
                  }}
                >
                  4
                </li>
                <li
                  style={{
                    padding: "5px 11px",
                    borderRight: "0.5px solid #000000",
                  }}
                >
                  5
                </li>
                <li
                  style={{
                    padding: "5px 11px",
                    borderRight: "0.5px solid #000000",
                  }}
                >
                  6
                </li>
                <li
                  style={{
                    padding: "5px 11px",
                    borderRight: "0.5px solid #000000",
                  }}
                >
                  7
                </li>
                <li
                  style={{
                    padding: "5px 11px",
                    borderRight: "0.5px solid #000000",
                  }}
                >
                  8
                </li>
                <li
                  style={{
                    padding: "5px 11px",
                    borderRight: "0.5px solid #000000",
                  }}
                >
                  9
                </li>
                <li
                  style={{
                    padding: "5px 11px",
                  }}
                >
                  10
                </li>
              </ul>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <p
                style={{
                  width: "100%",
                }}
              >
                Subject knowledge
              </p>
              <ul
                style={{
                  listStyle: "none",
                  display: "flex",
                  width: "100%",
                  borderRadius: " 6px",
                  border: "0.5px solid #000000",
                  paddingInlineStart: "0px",
                }}
              >
                <li
                  style={{
                    padding: "5px 11px",
                    borderRight: "0.5px solid #000000",
                  }}
                >
                  0
                </li>
                <li
                  style={{
                    padding: "5px 11px",
                    borderRight: "0.5px solid #000000",
                  }}
                >
                  1
                </li>
                <li
                  style={{
                    padding: "5px 11px",
                    borderRight: "0.5px solid #000000",
                  }}
                >
                  2
                </li>
                <li
                  style={{
                    padding: "5px 11px",
                    borderRight: "0.5px solid #000000",
                  }}
                >
                  3
                </li>
                <li
                  style={{
                    padding: "5px 11px",
                    borderRight: "0.5px solid #000000",
                  }}
                >
                  4
                </li>
                <li
                  style={{
                    padding: "5px 11px",
                    borderRight: "0.5px solid #000000",
                  }}
                >
                  5
                </li>
                <li
                  style={{
                    padding: "5px 11px",
                    borderRight: "0.5px solid #000000",
                  }}
                >
                  6
                </li>
                <li
                  style={{
                    padding: "5px 11px",
                    borderRight: "0.5px solid #000000",
                  }}
                >
                  7
                </li>
                <li
                  style={{
                    padding: "5px 11px",
                    borderRight: "0.5px solid #000000",
                  }}
                >
                  8
                </li>
                <li
                  style={{
                    padding: "5px 11px",
                    borderRight: "0.5px solid #000000",
                  }}
                >
                  9
                </li>
                <li
                  style={{
                    padding: "5px 11px",
                  }}
                >
                  10
                </li>
              </ul>
            </div>
          </div>
        </Stack>
      </Stack>
    </Box>
  );
};

export default CandidateEvaluation;
