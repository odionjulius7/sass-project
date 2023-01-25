import { Box, Stack, Grid } from "@mui/material";
import pencil from "../../../../assets/icons/edit-pencil.svg";

const CandidateProfile = () => {
  return (
    <Box
      sx={{
        p: 2,
        paddingTop: "60px",
        width: "100%",
      }}
    >
      {" "}
      {/* <Grid
        container
        width="1%"
        direction="row"
        justifyContent="space-evenly"
        alignItems="center"
        spacing={{ xs: 2, md: 3 }}
        columnSpacing={{ xs: 1, sm: 1, md: 0 }}
      >
        <Grid
          item
          xs={6}
          sx={{
            display: "flex",
            boxShadow: "0px 0px 33px rgba(97, 97, 97, 0.13)",
            borderRadius: "20px",
          }}
          justifyContent="space-between"
        >
          
        </Grid>
        <Grid item xs={6} sx={{}}>
          <p>Follow</p>
        </Grid>
        <Grid item xs={6} sx={{}}>
          <p>Follow</p>
        </Grid>
        <Grid item xs={6} sx={{}}>
          <p>Follow</p>
        </Grid>
      </Grid> */}
      <Stack
        direction={{ xs: "column", sm: "row" }}
        spacing={{ xs: 1, sm: 2, md: 2 }}
        marginBottom="20px"
      >
        <div
          style={{
            boxShadow: "0px 0px 33px rgba(97, 97, 97, 0.13)",
            borderRadius: "20px",
            width: "50%",
            padding: "1px 30px",

            // alignItems: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "start",
            }}
          >
            <h3>Aaliyah Samdi</h3>
            <div
              style={{
                display: "flex",
                width: "20%",
                justifyContent: "space-between",
                //   height: "25px",
                margin: "auto 0 auto",
              }}
            >
              <p style={{ fontSize: "14px", height: "15px", color: "#087B2F" }}>
                Save
              </p>
              <img src={pencil} alt="" width="25%" />
            </div>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              padding: "10px 0",
              fontSize: "12px",
            }}
          >
            <div style={{ color: "#A5A5A5" }}>
              <p>Current Location</p>
              <p>Phone</p>
              <p>Email</p>
            </div>
            <div>
              <p>Riyadh</p>
              <p>626-398-6547</p>
              <p>aaliyah.samdi@gmail.com</p>
            </div>
          </div>
        </div>
        <div
          style={{
            boxShadow: "0px 0px 33px rgba(97, 97, 97, 0.13)",
            borderRadius: "20px",
            width: "50%",

            // alignItems: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "start",
              padding: "1px 30px",
            }}
          >
            <h5 style={{ color: "#8528C8" }}>Personal Information</h5>
            <div
              style={{
                width: "10%",
                justifyContent: "space-between",
                //   height: "25px",
                margin: "auto 0 auto",
              }}
            >
              <img src={pencil} alt="" width="45%" />
            </div>
          </div>
          <hr
            style={{
              border: "1px solid #B5B5B5",
              height: "0px",
              width: "100%",
              color: "#B5B5B5",
            }}
          />
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              padding: "0px 30px",
              fontSize: "12px",
            }}
          >
            <div style={{ color: "#A5A5A5" }}>
              <p>Nationality</p>
              <p>National ID </p>
              <p>Gender </p>
            </div>
            <div>
              <p>Saudi Arabia</p>
              <p>235769708967</p>
              <p>Female</p>
            </div>
          </div>
        </div>
      </Stack>
      <Stack
        direction={{ xs: "column", sm: "row" }}
        spacing={{ xs: 1, sm: 2, md: 2 }}
        sx={{}}
      >
        <div
          style={{
            boxShadow: "0px 0px 33px rgba(97, 97, 97, 0.13)",
            borderRadius: "20px",
            width: "50%",

            // alignItems: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "start",
              padding: "1px 30px",
            }}
          >
            <h5 style={{ color: "#8528C8" }}>Education</h5>
            <div
              style={{
                width: "10%",
                justifyContent: "space-between",
                //   height: "25px",
                margin: "auto 0 auto",
              }}
            >
              <img src={pencil} alt="" width="45%" />
            </div>
          </div>
          <hr
            style={{
              border: "1px solid #B5B5B5",
              height: "0px",
              width: "100%",
              color: "#B5B5B5",
            }}
          />
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              padding: "0px 10px 0 30px",
              fontSize: "11px",
            }}
          >
            <div style={{ width: "20%" }}>
              <p>MM/YYYY – MM/YYYY</p>
              <p>MM/YYYY – MM/YYYY</p>
            </div>
            <div style={{ width: "70%" }}>
              <p>
                MA History and Political Science, HBS- Harvard University,
                United State
              </p>
              <p>MA History King’s College London, United Kingdom</p>
            </div>
          </div>
        </div>
        <div
          style={{
            boxShadow: "0px 0px 33px rgba(97, 97, 97, 0.13)",
            borderRadius: "20px",
            width: "50%",

            // alignItems: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "start",
              padding: "1px 30px",
            }}
          >
            <h5 style={{ color: "#8528C8" }}>Experience</h5>
            <div
              style={{
                width: "10%",
                justifyContent: "space-between",
                //   height: "25px",
                margin: "auto 0 auto",
              }}
            >
              <img src={pencil} alt="" width="45%" />
            </div>
          </div>
          <hr
            style={{
              border: "1px solid #B5B5B5",
              height: "0px",
              width: "100%",
              color: "#B5B5B5",
            }}
          />
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              padding: "0px 10px 0 30px",
              fontSize: "11px",
            }}
          >
            <div style={{ width: "20%" }}>
              <p>09/2022 – Current</p>
              <p>08/2020 – 08/2022</p>
            </div>
            <div style={{ width: "50%" }}>
              <p>
                <strong> Business Development,</strong> Saudi Corp, UAE
              </p>
              <p>
                <strong>Job Title, </strong>
                <br />
                Company name, Country
              </p>
            </div>
          </div>
        </div>
      </Stack>
    </Box>
  );
};

export default CandidateProfile;
