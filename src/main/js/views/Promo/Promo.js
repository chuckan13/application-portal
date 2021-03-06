import React from 'react';
import './Promo.css';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Button } from 'react-bootstrap';

class Promo extends React.Component {
	constructor(props, context) {
		super(props, context);
	}

	render() {
		return (
			<div>
				<div>
					<div class="iconcontainer first">
						<a href="https://alimtas.herokuapp.com/" target="_blank">
							<img class="invertimage" src="https://i.ibb.co/r402zTc/Alimtas.png" />
						</a>
					</div>
					<div class="iconcontainer second">
						<p class="right">Alimtas</p>
						<p class="description-right">
							Alimtas is a subteam of E-Club focused on promoting life science entrepreneurship and the
							biotechnology industry to Princeton University undergraduates through hands-on learning.
						</p>
					</div>
				</div>
				<div class="whitealternate">
					<div class="iconcontainer first">
						<a href="https://www.princetoneclub.com/alumni" target="_blank">
							<img class="invertimage" src="https://i.ibb.co/tzvGHGh/Alum-Relations.png" />
						</a>
					</div>
					<div class="iconcontainer second">
						<p class="right">Alumni Outreach</p>
						<p class="description-right">
							The goal of the E-Club Alumni Relations Team is to further the mission of the club by
							developing and maintaining relations with Princeton University alumni interested in
							entrepreneurship.
						</p>
					</div>
				</div>
				<div>
					<div class="iconcontainer first">
						<a href="https://www.eclubdesign.com/" target="_blank">
							<img class="pie" src="https://i.ibb.co/kG2sHSY/Design-Team-Logo.png" />
						</a>
					</div>
					<div class="iconcontainer second">
						<p class="right">Design</p>
						<p class="description-right">
							The design team establishes branding guidelines and visual identity for E-Club and its
							programs. They create all visual assets for E-Club as well as help subteams strengthen their
							branding and design language.
						</p>
					</div>
				</div>
				<div class="whitealternate">
					<div class="iconcontainer first">
						<img class="invertimage" src="https://i.ibb.co/74dHspz/Development.png" />
					</div>
					<div class="iconcontainer second">
						<p class="right">Development</p>
						<p class="description-right">
							The web development team is responsible for the creation and maintenance of E-Club subteam
							websites and infrastructure.
						</p>
					</div>
				</div>
				<div>
					<div class="iconcontainer first">
						<a href="https://www.hackprinceton.com/" target="_blank">
							<img class="invertimage" src="https://i.ibb.co/gMnL6Nb/Hack-Princeton.png" />
						</a>
					</div>
					<div class="iconcontainer second">
						<p class="right">HackPrinceton</p>
						<p class="description-right">
							HackPrinceton is Princeton’s biannual hackathon, attracting students from all over the world
							come together for 36 hours each fall and spring to create incredible software and hardware
							projects, learn new skills, and meet other hackers and company resentatives.
						</p>
					</div>
				</div>
				<div class="whitealternate">
					<div class="iconcontainer first">
						<img class="invertimage" src="https://i.ibb.co/mtL9ncV/istt.png" />
					</div>
					<div class="iconcontainer second">
						<p class="right">ISTT</p>
						<p class="description-right">
							Israel TigerTrek introduces Princeton undergraduates to the Israeli high-tech ecosystem
							through a one-week trip where they participate in conversations with Israeli entrepreneurs,
							venture capitalists, and executives.
						</p>
					</div>
				</div>
				<div>
					<div class="iconcontainer first">
						<a href="https://www.ignitestem.org/" target="_blank">
							<img class="invertimage" src="https://i.ibb.co/SvqCxXw/Ignite-STEM.png" />
						</a>
					</div>
					<div class="iconcontainer second">
						<p class="right">IgniteStem</p>
						<p class="description-right">
							IgniteSTEM is transforming K-12 STEM education by disrupting traditional learning techniques
							and promoting project-based learning to foster students’ curiosity and creativity.
						</p>
					</div>
				</div>
				<div class="whitealternate">
					<div class="iconcontainer first">
						<a href="https://www.makeventures.io/" target="_blank">
							<img class="invertimage" src="https://i.ibb.co/R06GCj6/MVP.png" />
						</a>
					</div>
					<div class="iconcontainer second">
						<p class="right">MVP</p>
						<p class="description-right">
							Make Ventures Princeton (MVP) is Princeton's premier startup incubator.
						</p>
					</div>
				</div>
				<div>
					<div class="iconcontainer first">
						<a href="http://nytigertrek.com/" target="_blank">
							<img class="invertimage" src="https://i.ibb.co/rGDmMt5/NYTT.png" />
						</a>
					</div>
					<div class="iconcontainer second">
						<p class="right">New York Tiger Trek</p>
						<p class="description-right">
							New York TigerTrek is a weeklong trip in NYC to meet with some of the city’s leading CEOs,
							VCs, founders, and more in closed-door, one-on-one sessions.
						</p>
					</div>
				</div>
				<div class="whitealternate">
					<div class="iconcontainer first">
						<a href="" target="_blank">
							<img src="https://i.ibb.co/xs2sW14/newoutput.png" />
						</a>
					</div>
					<div class="iconcontainer second">
						<p class="right">Output</p>
						<p class="description-right">
							Founded in the spring of 2020, Output has a mission to bring social entrepreneurship to the forefront of problem solving on Princeton’s campus, specifically focusing on non-traditionally engaged academic communities.
						</p>
					</div>
				</div>
				<div>
					<div class="iconcontainer first">
						<img class="invertimage" src="https://i.ibb.co/mFhY2q9/COFF.png" />
					</div>
					<div class="iconcontainer second">
						<p class="right">Princeton Women in Entrepreneurship</p>
						<p class="description-right">
							PWE is a community of kick ass women bringing female entrepreneurs together. We connect
							women engaged and interested in entrepreneurship and bring their stories into focus. Through
							panels, discussions, and mentorship, we enable everyone to learn from the experience of
							female founders.
						</p>
					</div>
				</div>
				<div class="whitealternate">
					<div class="iconcontainer first">
						<a href="https://medium.com/profiles-in-entrepreneurship" target="_blank">
							<img class="pie" src="https://i.ibb.co/C5Xb29B/finalpie.png" />
						</a>
					</div>
					<div class="iconcontainer second">
						<p class="right">Profiles in Entrepreneurship</p>
						<p class="description-right">
							PIE is an online publication whose mission is to be the largest and best source of
							actionable career advice for student entrepreneurs across the country.
						</p>
					</div>
				</div>
				<div>
					<div class="iconcontainer first">
						<a href="https://rehack.co/" target="_blank">
							<img class="invertimage" src="https://i.ibb.co/kcCDFRB/Rehack.png" />
						</a>
					</div>
					<div class="iconcontainer second">
						<p class="right">Rehack</p>
						<p class="description-right">
							Rehack will be organizing a tech + design + ethics “reverse hackathon” on campus to
							encourage dialogue in and support the development of creative solutions that allow for
							greater and healthier relationships between people and their technology.
						</p>
					</div>
				</div>
				<div class="whitealternate">
					<div class="iconcontainer first">
						<a href="http://svtigertrek.com/" target="_blank">
							<img class="invertimage" src="https://i.ibb.co/51Vgxqd/SVTT.png" />
						</a>
					</div>
					<div class="iconcontainer second">
						<p class="right">Silicon Valley Tiger Trek</p>
						<p class="description-right">
							Silicon Valley TigerTrek is a fall break trip that brings together 20 of Princeton’s most
							curious engineers, designers, creators, and student entrepreneurs for a one week trip to
							meet with Silicon Valley’s legends.
						</p>
					</div>
				</div>
				<div>
					<div class="iconcontainer first">
						<a href="https://www.tigerlaunch.com/" target="_blank">
							<img class="invertimage" src="https://i.ibb.co/gZVgHwg/Tiger-Launch.png" />
						</a>
					</div>
					<div class="iconcontainer second">
						<p class="right">TigerLaunch</p>
						<p class="description-right">
							TigerLaunch is the nation’s largest student-run entrepreneurship competition of its kind
							dedicated to building a network of student founders at the university, regional, and
							national levels.
						</p>
					</div>
				</div>
				<div class="whitealternate">
					<div class="iconcontainer first">
						<img src="https://i.ibb.co/zHmvXkP/Tiger-Tables-Logo-Final.png" />
					</div>
					<div class="iconcontainer second">
						<p class="right">TigerTables</p>
						<p class="description-right">
							TigerTables provides the opportunity for Princeton students to have small-setting
							unscripted, off-the-record discussions with CEOs, entrepreneurs, VC’s and other industry
							leaders in the startup community that focus on engaging the audience in various settings.
						</p>
					</div>
				</div>
				<div>
					<div class="iconcontainer first">
						<img src="https://i.ibb.co/BPQS8Tt/newtip.png" />
					</div>
					<div class="iconcontainer second">
						<p class="right">Tigers in Product</p>
						<p class="description-right">
							Tigers In Product’s mission is to create product-minded thinkers/leaders on Princeton’s campus by strengthening student networks within industry, by providing access to recruiting information and mentorship, and by providing hands-on experience.
						</p>
					</div>
				</div>
			</div>
		);
	}
}

export default Promo;
