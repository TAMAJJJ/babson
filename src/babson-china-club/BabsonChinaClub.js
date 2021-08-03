import React from "react";
import {
	withRouter
} from "react-router-dom";
import './BabsonChinaClub.css'
import {
	Grid,
	Header,
	Image,
	List,
  } from 'semantic-ui-react'

const BabsonChinaClub = () => {
	return (
		<div>
			<Top />
			<Join />
			<Council value={{title1: '督导委员会', title2: 'Steering Committee Member'}} />
			<Council value={{title1: '理事会', title2: 'Administrative Council'}} />
  		</div>
	);
};

const style = {
	bar: {
		height: '138px',
	},

	top: {
		height: '323px',
		textAlign: 'center',
	},

	title1: {
		fontFamily: 'Mulish',
		fontStyle: 'normal',
		fontWeight: '800',
		fontSize: '45px',
		lineHeight: '56px',
		margin: '0',
		paddingTop: "100px",
		/* Gray 1 */
	
		color: '#333333',
	
	  },

	  title2: {
		/* 英文 */
		height: '30px',
	   
		fontFamily: 'Mulish',
		fontStyle: 'normal',
		fontWeight: 'normal',
		fontSize: '24px',
		lineHeight: '30px',
		textAlign: 'center',
	
		/* Gray 2 */
		color: '#4F4F4F',
	  },

	description: {
		height: 'auto',
		minHeight: '532px',
	
		background: '#F2F2F2',
		borderRadius: '0px',
	},

	subtitle1: {
		fontFamily: 'Mulish',
		fontWeight: '800',
		fontStyle: 'normal',
		fontSize: '36px',
		lineHeight:'45px',
		color: '#368180',
		paddingLeft:'45px',
		paddingTop: '40px'
	},

	content1: {
		fontFamily: 'Mulish',
		fontWeight: '400',
		fontStyle: 'normal',
		fontSize: '22px',
		lineHeight:'34px',
		paddingLeft:'45px',
		paddingRight:'45px',
	},

	join: {
		backgroundColor: '#368180',
	},

	joinTitle: {
		fontFamily: 'Mulish',
		fontWeight: '800',
		fontStyle: 'normal',
		fontSize: '45PX',
		lineHeight:'56PX',
		color:'#FFFFFF',
		paddingTop:'89px',
	},

	joinContent: {
		fontFamily: 'Mulish',
		fontWeight: '400',
		fontStyle: 'normal',
		fontSize: '22px',
		lineHeight:'34px',
		color:'#FFFFFF',
		paddingTop: '89px'
	},

	joinButtonContent: {
		width: '137px',
		height: '50px',
		fontFamily: 'Mulish',
		fontWeight: '600',
		fontStyle: 'normal',
		fontSize: '16px',
		lineHeight:'20px',
		marginTop: '20px',
		marginBottom: '45px',
	},

	councilTop: {
		textAlign:'center',
	},

	redComma: {
		color:'#B83B5E',
		fontWeight:'900',
		fontSize:'60px',
		marginBottom: '30px',
	},

	memberIntro: {
		fontFamily: 'Mulish',
		fontWeight: '400',
		fontStyle: 'normal',
		fontSize: '18px',
		lineHeight:'22px',
		textAlign:'center',
	},

	memberName: {
		fontFamily: 'Mulish',
		fontWeight: '800',
		fontStyle: 'normal',
		fontSize: '24px',
		lineHeight:'34px',
		textAlign:'center',
	}

}

class Top extends React.Component {
	render() {
		return (
			<div>
				<div style = {style.bar}>

				</div>
				<div style = {style.top}>
					<Header as='h2' style = {style.title1}>
						关于百森中国俱乐部
					</Header>
					<Header style = {style.title2}>
							Babson China Club
					</Header>
				</div>
				<div style = {style.description}>
					<Grid doubling stackable>
						<Grid.Row>
							<Grid.Column width={9}>
								<Image src='/babson-china-club/BabsonStudents.jpg' className="pic" alt='Babson students' style={style.descriptionPic} />
							</Grid.Column>
							<Grid.Column width={7}>
								<Grid>
									<Grid.Row>
										<Grid.Column>
											<br /> 
											<Header as='h3' style={style.subtitle1}>我/们/是/谁</Header>
											<p style={style.content1}>
											百森中国俱乐部（BABSON CHINA CLUB，缩写BCC）是由百森中国校友会自愿结成的联合性、非营利性的群众组织
											</p>
										</Grid.Column>
									</Grid.Row>
									<Grid.Row>
										<Grid.Column>
										<Header as='h3' style={style.subtitle1}>我们的使命</Header>
											<p style={style.content1}>
											本俱乐部创建旨在加强校友之间以及与母校的交流、服务与合作。通过广泛链接凝聚校友力量，
											激励校友们践行“创业知行合一”（Entrepreneurial Thought and Action）精神，我们将整合校友资源，
											汇聚力量，为百森校友和母校建设贡献力量。
											</p>
											<br/>
										</Grid.Column>
									</Grid.Row>
								</Grid>
							</Grid.Column>
						</Grid.Row>
						<Grid.Row>
							<Grid.Column width={9} >
								<br />
								<Header as='h3' style={style.subtitle1}>我们致力于</Header>
								<List bulleted style={style.content1}>
									<List.Item>
										加强海内外之间感情联络，开展教育、科研和文化等方面的协作与交流；
									</List.Item>
									<List.Item>
										加强与全球其他国家百森商学院校友会的联系，进行工作经验交流；
									</List.Item>
									<List.Item>
										发挥广大会员的作用，加强信息沟通，促进学校与地方以及会员之间的合作；
									</List.Item>
									<List.Item>
										协助学校拓展办学资源和战略合作伙伴、筹集办学资金，招收优秀学生和学员； 
									</List.Item>
									<List.Item>
										协助学校征集校友以及社会各界对学校改革与发展的建议；
									</List.Item>
									<List.Item>
										学校合作，推动在大中华区有重大影响的创业和创业教育相关的项目和活动落地，组织联谊活动； 
									</List.Item>
									<List.Item>
										建设俱乐部官方网站以及社交媒体；统筹管理百森中国俱乐部活动基金；
									</List.Item>
									<List.Item>
										协助学校征集校友以及社会各界对学校改革与发展的建议；
									</List.Item>
									<List.Item>
										学校合作，推动在大中华区有重大影响的创业和创业教育相关的项目和活动落地，组织联谊活动； 
									</List.Item>
									<List.Item>
										建设俱乐部官方网站以及社交媒体；
									</List.Item>
									<List.Item>
										统筹管理百森中国俱乐部活动基金。
									</List.Item>
								</List>
								<br />
							</Grid.Column>
							<Grid.Column width={7}>
								<Image src='/babson-china-club/BabsonCollege.jpg' className="pic" alt='Babson college' style={style.descriptionPic} />
							</Grid.Column>
						</Grid.Row>
					</Grid>
				</div>
			</div>
		);
	}
}

class Join extends React.Component{
	render(){
		return(
			<div style={style.join}>
				<Grid doubling stackable style={{width: "100%",}}>
					<Grid.Row>
						<Grid.Column width={7} className="joinLeft">
							<Header as='h3' style={style.joinTitle}>如何加入我们？</Header>
						</Grid.Column>
						<Grid.Column width={9}>
							<p style={style.joinContent}  className="joinRight">
							百森中国俱乐部欢迎百森校友以及在读学生加入, 只需点击下方按钮填写入会申请表, 完成校友身份验证, 
							即可获取校友数据库及更多俱乐部活动信息! 
							</p>
							<button style={style.joinButtonContent} className='joinButton'>加入校友会</button>
						</Grid.Column>
					</Grid.Row>
				</Grid>
			</div>
		);
	}
}

class Council extends React.Component{
	render(){
		return(
			<div>
				<div style={style.councilTop}>
					<Header style={style.title1}>{this.props.value.title1}</Header>
					<Header style={style.title2}>{this.props.value.title2}</Header>
				</div>
				<div className='memberCards'>
					<Member/>
					<Member/>
					<Member/>
					<Member/>
				</div>
			</div>
		);
	}
}

class Member extends React.Component{
	render(){
		return(
			<div className='memberBg'>
				<div className='memberPic'>
					
				</div>
				<div className='memberInfo'>
					<p style={style.redComma}>,,</p>
					<p style={style.memberIntro}>法国卡慕集团董事长,  Babson Trustee and Global Advisory Board Member</p>
					<p style={style.memberName}>Cyril Camus</p>
					<p style={style.memberIntro}>本科1991</p>
				</div>
			</div>
		);
	}
}

export default withRouter(BabsonChinaClub);