import React from "react";
import { withRouter } from "react-router-dom";
import './babson.css';
import {
  Grid,
  Header,
  Image,
} from 'semantic-ui-react'


const BabsonCollege = () => {
  return (
    <div>
      <Top />
      <Neighborhood />
      <College />
      <Alumni />
    </div>
    )
    ;
};

const style = {
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
  alumtitle1: {
    fontFamily: 'Mulish',
    fontStyle: 'normal',
    fontWeight: '800',
    fontSize: '45px',
    lineHeight: '56px',
    margin: '0',
    marginTop: '152px',
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
  alumtitle2: {
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
  top:{
    height: '323px',
  },
  bar:{
    height: '138px',
  },
  description:{
     /* bg */
    height: 'auto',
    minHeight: '532px',
   
    background: '#F2F2F2',
    borderRadius: '0px',
  },
  descriptionTitle:{
    /* 百森商学院 */
    
    width: '45.97%',
    height: 'auto',
    paddingTop: "78px",

    fontFamily: 'Mulish',
    fontStyle: 'normal',
    fontWeight: '800',
    fontSize: '36px',
    lineHeight: '45px',

    color: '#368180',
},

descriptionPara:{
    fontFamily: 'Mulish',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '22px',
    lineHeight: '155%',
    /* or 155% */


    /* Gray 1 */

    color: '#333333',

},
  goal:{
    backgroundImage: 'url("Quad.jpg")',
    backgroundColor: 'rgba(54, 129, 128, 0.6)',
    backgroundBlendMode: 'soft-light',
    backgroundSize:     'cover',                     
    backgroundRepeat:   'no-repeat',
    backgroundPosition: 'center center', 
  },
  goalTitle:{
    /* 学校目标 */
    paddingTop: "113px",
    fontFamily: 'Mulish',
    fontStyle: 'normal',
    fontWeight: '800',
    fontSize: '36px',
    lineHeight: '45px',

    color: '#FFFFFF',
  },
  goalPara:{
    // paddingTop: "1px",
    fontFamily: 'Mulish',
    fontStyle: 'normal',
    fontWeight: '800',
    fontSize: '36px',
    lineHeight: '45px',
    paddingBottom: '122px',
    color: '#FFFFFF',
  },
  neighborhoodTitle:{
    paddingTop: "69px",
    fontFamily: 'Mulish',
    fontStyle: 'normal',
    fontWeight: '800',
    fontSize: '36px',
    lineHeight: '45px',
    paddingLeft: '45px',
    paddingRight: '45px',
    color: '#368180',
  },
  specialneighborhoodTitle:{
    paddingTop: "69px",
    fontFamily: 'Mulish',
    fontStyle: 'normal',
    fontWeight: '800',
    fontSize: '36px',
    lineHeight: '45px',
    paddingLeft: '45px',
    paddingRight: '45px',
    color: '#368180',
  },

  neighborhoodPara:{
    fontFamily: 'Mulish',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '22px',
    lineHeight: '34px',
    paddingLeft: '45px',
    paddingRight: '45px',
    color: '#333333',
  },
  specialneighborhoodPara:{
    fontFamily: 'Mulish',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '22px',
    lineHeight: '34px',
    paddingLeft: '45px',
    paddingRight: '45px',
    color: '#333333',
    flex: '1',
  },
  collegePicTop:{
    borderRadius: '20px',
    width: '100%',
    height: '600px',
    objectFit: 'cover',
    objectPosition: 'bottom',
  },
  collegePicBottom:{
    borderRadius: '20px',
    width: '100%',
    height: '380px',
    objectFit: 'cover',
    objectPosition: 'bottom',
  },
  alumtitle:{
    fontFamily: 'Mulish',
    fontStyle: 'normal',
    fontWeight: '800',
    fontSize: '36px',
    lineHeight: '45px',
    paddingLeft: '57px',
    color: '#368180',
    marginBottom: '33px',
  },
  alumpara:{
    /* 内容 */

  fontFamily: 'Mulish',
  fontStyle: 'normal',
  fontWeight: 'normal',
  fontSize: '22px',
  lineHeight: '34px',
  paddingLeft: '57px',
  paddingRight: '57px',
  /* or 155% */


  /* Gray 1 */

  color: '#333333',
  },
}

class Top extends React.Component {
  render() {
    return (
      <div>
        <div style={style.bar}>

        </div>
        <div style={style.top}>
          <Header as='h2' content='关于百森商学院' style={style.title1} textAlign='center' />
          <Header as='h3' content='Babson College' style={style.title2} textAlign='center' />
        </div>
        <div style={style.description}>
          <Grid container columns={2} doubling stackable>
            <Grid.Row>
              <Grid.Column>
                <Header as='h2' content='百森商学院' style={style.descriptionTitle} />
              </Grid.Column>
              
            </Grid.Row>
            <Grid.Row>
              <Grid.Column width={12}>
                <p style={style.descriptionPara}>百森商学院（又译巴布森学院，英文Babson College）是一所美国私立商学院，位于美国马塞诸塞州的威尔斯利（Wellesley , MA) 
                小镇。由创始人 Roger. W. Babson(罗杰.w.百森）建立于1919年，建校时为男校, 到1969年更改为混校。百森商学院专注于商科教育以及创业学， 
                因此不参与 US. News 综合大学排名。本校创业学专业连续26年位于 US. News 全美专业排名第一， 是全美国第一所获得认证三冠王的商学院（AACSB，AMBA， EQUIS)。
                百森学院的毕业生薪资常年位居全美前列，多次被福布斯(Forbes)，经济学人(Economist)，财经杂志(Money Magazine)，
                PayScale 等著名财经杂志评为全美最具价值和投资回报率最高的大学之一。
                </p>
              </Grid.Column>
              <Grid.Column width={4}>
                <Image src='/babson-college/Babson-College-2C (1).png' />
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </div>

        <Goal />
      </div>
        
    )
  }
}

class Goal extends React.Component {
  render() {
    return (
    <div id="goal">
      <Grid doubling stackable container columns='equal'>
        <Grid.Row>
          <Grid.Column>
            <Header as='h2' content='学校目标' style={style.goalTitle} />
          </Grid.Column>

        </Grid.Row>
        <Grid.Row>
          <Grid.Column width={12}>
            <p style={style.goalPara}>百森商学院致力于培养拥有企业家精神的人。
            这种精神可以使学生们在世界各地创造、发展以及管理可持续经济和社会价值。
            </p>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
    )
  }
}


class Neighborhood extends React.Component {
  render() {
    return (
      <div>
        <Grid id="neighborhood-box" columns='equal' doubling stackable>
            <Grid.Row>
              <Grid.Column id="specialneighborhood">
                <Header as='h2' content='校园' style={style.specialneighborhoodTitle} />
              </Grid.Column>
              <Grid.Column color={"grey"} id="undergrad-special">
                <Header as='h2' content='本科和研究生教育' style={style.neighborhoodTitle} />
              </Grid.Column>
              <Grid.Column>
                <Header as='h2' content='学生概况' style={style.neighborhoodTitle} />
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column id="specialneighborhood1">
                <div id="neighborhood-flex">
                  <p style={style.specialneighborhoodPara}>Babson park (百森公园）位于环境优美，治安良好的韦尔斯利小镇，占地面积约350公顷。韦尔斯利主校区主要用于本科与研究生教育，学校还设有波士顿，
                    旧金山及迈阿密校区。百森商学院离波士顿市中心约有半个小时车程。主校区旁有另外一所高校:  
                    欧林工程学院 Franklin W. Olin College of Engineering, 
                    本校的学生也可以去欧林工程学院上个别专业课程并获取职业证书。 
                    <br /><br />
                    校园内最著名的建筑物为百森球（Babson Globe)，
                    是一个巨大的地球仪，重25吨，直径达8.5米，象征着校园文化的多样性与全球化思维。
                  </p>
                  
                  <Image src='/babson-college/Globe.jpg' />
                </div>
                
              </Grid.Column>
              <Grid.Column color={"grey"}>
              <p style={style.neighborhoodPara}>百森商学院开创了创业学教育方法“Entrepreneurial Thoughts and 
                Action”（创业知行合一），现已成为百森商学院的品牌和核心教育法，与斯坦福商学院的“案例教学法”并称。
                学生在这里可以通过实操来融会贯通书本内的创业经营管理的知识，学会如何在充满挑战的全球经济中发挥自己的作用。
                学校主要设置了27个商科和人文理科领域的多种跨专业领域课程，所有课程都以百森核心价值观：创新、实践、开放、
                进取的企业胸怀为指导思想。
                <br />
                <br />
                百森商学院与美国一流的文理学院韦尔斯利学院（宋美龄母校）
                以及美国的顶尖工程学院欧林工程学院正式签署了合作协议允许学生利用三个学院互补的学术环境来探索其不同的教育理念，
                共同合作了科研项目并建立共同合作的中心，以便学术会议和项目的交流合作，计划发展全新的学术、
                社交以及商业上的合作关系。
              </p>
              </Grid.Column>
              <Grid.Column>
                <p style={style.neighborhoodPara}>百森商学院的就读生来自美国48个州以及全球80个不同的国家，
                国际生比例28%，设立部门ISSS专门为国际生服务，在福布斯对国际生最友好一项排名中位列全美第一。
                学校可为条件优秀的国际生申请者提供全奖奖学金及助学金，以帮助其顺利完成学业。
                </p>
                <br />
                <Header as='h2' content='教师资质' style={style.neighborhoodTitle} />
                <p style={style.neighborhoodPara}>百森商学院配备相关领域尖端的师资力量，
                87%的全职老师都获得了博士学位，并且都是有经验的创业者、企业高管、学者、研究者、
                诗人以及艺术家。学校积极鼓励教师在教学时期继续经营企业，通过实践来为学生反馈最新的商业变革和实时的实战经验。
                学校的师生比为1：9。
                </p>
              </Grid.Column>
            </Grid.Row>
            
          </Grid>
      </div>
    );
  }
}


class College extends React.Component {
  render() {
    return (
    <div id="collegebox">
      <Image src='/babson-college/BabsonWordmark-H-green.png' centered style={{marginTop: "100px", marginBottom: "80px"}}/>
      
      <div className='pics_in_a_row'>
        <div className='img1'>
          <img src='/babson-college/Campus_Drone.jpg' style={style.collegePicTop} alt="Campus Drone"/>
        </div>
        <div className='img2'>
          <img src='/babson-college/Weissman_Foundry.jpg' style={style.collegePicTop} alt="Weissman_Foundry"/>
        </div>
      </div>
      <div className='pics_in_a_row'>
        <div className='img3'>
          <img src='/babson-college/Hollister.jpg' style={style.collegePicBottom} alt="Hollister"/>
        </div>
        <div className='img4'>
          <img src='/babson-college/20191021_BAB_191004_1048.jpg' style={style.collegePicBottom} alt="Room"/>  
        </div>
      </div>
    </div>
    )
  }
}

class Alumni extends React.Component {
  render() {
    return (
    <div>
      <Header as='h2' content='知名校友' style={style.alumtitle1} textAlign='center' />
      <Header as='h3' content='Babson Alumni' style={style.alumtitle2} textAlign='center' />
      
      <Grid columns='equal' style={{marginTop: '70px'}}>
        <Grid.Row style={{padding: '0', marginTop: '14px'}}>
          <Grid.Column className="alumlight alumcolumn">
            <Image src='/babson-college/unnamed (2).jpg' />
            <Header as='h3' content='Ernesto Bertarelli' style={style.alumtitle} />
            <p style={style.alumpara}>
              瑞士籍意大利人，生物制药富商，2021年4月，福布斯全球富豪榜发布，埃内斯托·
              贝尔塔雷利以86亿美元财富位列榜单第288位。31岁接手家族企业，并带领公司进入世界医药界前三位。
              2006年其经营的Serono（雪兰诺）公司以67亿英镑的价格出售给德国制药业巨头Merck（默克）公司。
              他同时热爱帆船运动，是瑞士Alinghi赛艇综合队的主席，该队在2003年至2007年连续五年获得美洲杯帆船赛冠军。
            </p>
          </Grid.Column>
          <Grid.Column className="alumdark alumcolumn">
            <Image src='/babson-college/unnamed (1).jpg' />
            <Header as='h3' content='Arthur Blank' style={style.alumtitle} />
            <p style={style.alumpara}>
              美国商人，也是美国知名家装零售商 The Home Depot 的联合创始人。2021年4月，
              福布斯全球富豪榜发布，阿瑟·布兰克以62亿美元财富位列榜单第432位。
              他也收购了佐治亚州亚特兰大的两支职业运动队——美国国家橄榄球联盟 (NFL) 
              的亚特兰大猎鹰队和美国职业足球大联盟 (MLS) 的亚特兰大联队，后者赢得了 2018 年 MLS 杯冠军。

            </p>
          </Grid.Column>
          <Grid.Column className="alumlight alumcolumn">
            <Image src='/babson-college/unnamed.jpg' />
            <Header as='h3' content='丰田章男' style={style.alumtitle} />
            <p style={style.alumpara}>
              丰田章男是日本企业高管，现任丰田汽车公司总裁。他是日本实业家丰田佐吉的曾孙，
              也是丰田汽车创始人丰田喜一郎和高岛屋百货公司饭田新七创始人的孙子。
            </p>
          </Grid.Column>
        </Grid.Row>
      </Grid>
      <div style={style.bar}></div>
    </div>
    )
  }
}

export default withRouter(BabsonCollege);
