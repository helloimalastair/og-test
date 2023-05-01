import React from "react";

export interface Contributor {
	name: string;
	pfp?: string;
}
export interface ViewData {
	title: string;
	meta?: string;
	contributors: Contributor[];
}

const generateContributor = (contributor: Contributor) => (
	<div
		key={`contributor-container-${contributor.name}`}
		style={{ display: "flex", flexWrap: "nowrap" }}
	>
		<div
			key={`contributor-wrapper-${contributor.name}`}
			style={{
				display: "flex",
				marginTop: "1em",
				whiteSpace: "nowrap",
				alignItems: "center",
				padding: "0.5em",
			}}
		>
			<img
				key={`contributor-pfp-${contributor.name}`}
				src={
					contributor.pfp ||
					`https://api.multiavatar.com/${encodeURIComponent(
						contributor.name,
					)}.png`
				}
				style={{
					height: 62,
					width: 62,
					borderRadius: "50%",
					marginLeft: "1em",
					marginRight: "1em",
				}}
			/>
			<span
				key={`contributor-name-${contributor.name}`}
				style={{
					color: "white",
					fontFamily: '"Open Sans",sans-serif',
					fontSize: "30px",
				}}
			>
				{contributor.name}
			</span>
		</div>
	</div>
);

const generateView = (data: ViewData) => (
	<div
		key="bg-image"
		style={{
			display: "flex",
			justifyContent: "flex-start",
			alignItems: "flex-start",
			flexDirection: "column",
			width: 1200,
			height: 630,
			backgroundImage: `url(${
				data.meta ||
				"https://www.cloudflare.com/static/b30a57477bde900ba55c0b5f98c4e524/Cloudflare_default_OG_.png"
			})`,
			backgroundSize: "1200px 630px",
			backgroundRepeat: "no-repeat",
			backgroundPosition: "center",
		}}
	>
		<div
			key="gradient-generator"
			style={{
				width: 1200,
				height: 630,
				backgroundImage:
					"linear-gradient(0deg,rgba(1,36,87,0.8), rgba(1,36,87,0.8))",
				display: "flex",
				padding: "3.5em",
				flexDirection: "column",
			}}
		>
			<div
				key="title-container"
				style={{
					display: "flex",
					justifyContent: "flex-start",
					alignItems: "flex-start",
					flexDirection: "row",
					paddingTop: "5em",
					textAlign: "start",
				}}
			>
				<h1
					key="title"
					style={{
						margin: 0,
						fontFamily: `"Roboto",sans-serif`,
						color: "white",
						fontSize: "57px",
					}}
				>
					{data.title}
				</h1>
			</div>
			<div
				key="contributor-container"
				style={{
					display: "flex",
					flexDirection: "row",
					flexWrap: "wrap",
					width: 1100,
				}}
			>
				{data.contributors.map((contributor) =>
					generateContributor(contributor),
				)}
			</div>
			<svg
				key="logo"
				style={{
					position: "absolute",
					width: 200,
					height: 67.29,
					left: "970px",
					top: "530px",
				}}
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 425.6 143.63"
			>
				<path
					fill="#f78100"
					d="M360.8,90.69l1-3.6c1.24-4.28.78-8.24-1.3-11.15a11.32,11.32,0,0,0-9-4.43l-73.35-.94a1.49,1.49,0,0,1-1.16-.61,1.51,1.51,0,0,1-.15-1.33,2,2,0,0,1,1.7-1.3l74-.94c8.78-.4,18.29-7.53,21.62-16.22l4.22-11a2.51,2.51,0,0,0,.16-.94,2.35,2.35,0,0,0-.05-.52,48.21,48.21,0,0,0-92.7-5,21.69,21.69,0,0,0-34.58,15.15,22,22,0,0,0,.56,7.59,30.83,30.83,0,0,0-29.93,30.82,31.22,31.22,0,0,0,.32,4.46A1.44,1.44,0,0,0,223.68,92H359.13A1.79,1.79,0,0,0,360.8,90.69Z"
				/>
				<path
					fill="#fcad32"
					d="M385.24,40c-.68,0-1.36,0-2,0a1.55,1.55,0,0,0-.31.07,1.14,1.14,0,0,0-.74.78l-2.89,10c-1.24,4.28-.77,8.24,1.31,11.14a11.3,11.3,0,0,0,9,4.44l15.63.94a1.44,1.44,0,0,1,1.12.6,1.5,1.5,0,0,1,.16,1.34,2,2,0,0,1-1.7,1.3l-16.24.94c-8.82.4-18.33,7.52-21.66,16.21l-1.17,3.07a.87.87,0,0,0,.77,1.18h55.94a1.49,1.49,0,0,0,1.45-1.07A40.15,40.15,0,0,0,385.24,40Z"
				/>
				<polygon
					fill="#fff"
					points="47.34 108.53 56.88 108.53 56.88 134.59 73.54 134.59 73.54 142.94 47.34 142.94 47.34 108.53"
				/>
				<path
					fill="#fff"
					d="M83.42,125.84v-.1c0-9.88,8-17.9,18.58-17.9s18.48,7.92,18.48,17.8v.1c0,9.88-8,17.89-18.58,17.89s-18.48-7.91-18.48-17.79m27.33,0v-.1c0-5-3.59-9.29-8.85-9.29s-8.7,4.23-8.7,9.19v.1c0,5,3.59,9.29,8.8,9.29s8.75-4.23,8.75-9.19"
				/>
				<path
					fill="#fff"
					d="M132.15,127.85V108.53h9.69v19.13c0,5,2.51,7.32,6.34,7.32s6.34-2.26,6.34-7.08V108.53h9.69v19.08c0,11.11-6.34,16-16.13,16s-15.93-5-15.93-15.73"
				/>
				<path
					fill="#fff"
					d="M178.8,108.53h13.27c12.29,0,19.42,7.08,19.42,17v.1c0,9.93-7.22,17.3-19.61,17.3H178.8Zm13.42,26c5.71,0,9.49-3.15,9.49-8.7v-.1c0-5.51-3.78-8.7-9.49-8.7h-3.88v17.5Z"
				/>
				<polygon
					fill="#fff"
					points="225.35 108.53 252.88 108.53 252.88 116.89 234.89 116.89 234.89 122.74 251.16 122.74 251.16 130.65 234.89 130.65 234.89 142.94 225.35 142.94 225.35 108.53"
				/>
				<polygon
					fill="#fff"
					points="266.15 108.53 275.69 108.53 275.69 134.59 292.35 134.59 292.35 142.94 266.15 142.94 266.15 108.53"
				/>
				<path
					fill="#fff"
					d="M317.27,108.29h9.19l14.65,34.65H330.89l-2.51-6.14H315.11l-2.46,6.14h-10Zm8.36,21.09-3.84-9.79-3.88,9.79Z"
				/>
				<path
					fill="#fff"
					d="M353.4,108.53h16.27c5.26,0,8.89,1.38,11.21,3.74a10.69,10.69,0,0,1,3,8v.1A10.89,10.89,0,0,1,376.85,131l8.21,12H374l-6.93-10.42h-4.18v10.42H353.4Zm15.83,16.52c3.24,0,5.11-1.57,5.11-4.08v-.1c0-2.7-2-4.08-5.16-4.08h-6.25v8.26Z"
				/>
				<polygon
					fill="#fff"
					points="397.68 108.53 425.36 108.53 425.36 116.64 407.12 116.64 407.12 121.85 423.64 121.85 423.64 129.38 407.12 129.38 407.12 134.83 425.61 134.83 425.61 142.94 397.68 142.94 397.68 108.53"
				/>
				<path
					fill="#fff"
					d="M26.46,129.87A8.44,8.44,0,0,1,18.58,135c-5.21,0-8.8-4.33-8.8-9.29v-.1c0-5,3.49-9.19,8.7-9.19a8.63,8.63,0,0,1,8.18,5.7H36.72c-1.61-8.19-8.81-14.31-18.14-14.31C8,107.84,0,115.86,0,125.74v.09c0,9.89,7.86,17.8,18.48,17.8,9.08,0,16.18-5.88,18.05-13.76Z"
				/>
			</svg>
		</div>
	</div>
);

export default generateView;
