// =============================================================
// IFC Exam Flashcards (350 questions)

// =============================================================

const flashcards = [

  // ============ CHAPTER 1: ROLE OF SALES REPRESENTATIVE (Questions 1-8) ============
  { id: 1, category: "Introduction to Mutual Funds Marketplace", topic: "Role of Sales Representative", difficulty: "Easy", question: "What are the three main types of responsibilities for a mutual fund sales representative?", answer: "Legal responsibility (ensuring suitable investments), Ethical responsibility (maintaining high professional standards), and Professional responsibility (maintaining knowledge and competence)" },

  { id: 2, category: "Introduction to Mutual Funds Marketplace", topic: "Role of Sales Representative", difficulty: "Medium", question: "What does the 'Know Your Client' (KYC) rule require?", answer: "The mutual fund sales representative must use due diligence to learn essential facts about every client including financial status, investment objectives, risk tolerance, and personal circumstances before making recommendations" },

  { id: 3, category: "Introduction to Mutual Funds Marketplace", topic: "Role of Sales Representative", difficulty: "Hard", question: "If a client refuses to provide KYC information, what should a sales representative do?", answer: "The representative must refuse to accept the order or proceed with the transaction. If KYC is incomplete, the representative cannot make suitable recommendations and should not proceed" },

  { id: 4, category: "Introduction to Mutual Funds Marketplace", topic: "Role of Sales Representative", difficulty: "Easy", question: "What is the primary purpose of licensing for mutual fund sales representatives?", answer: "To demonstrate competence in understanding mutual fund features, characteristics, types, suitability requirements, and ethical obligations to clients and regulators" },

  { id: 5, category: "Introduction to Mutual Funds Marketplace", topic: "Role of Sales Representative", difficulty: "Medium", question: "Can a mutual fund sales representative provide advice on individual stocks?", answer: "No, they can only discuss and provide advice on mutual fund products unless they hold additional licenses to sell other investment products" },

  { id: 6, category: "Introduction to Mutual Funds Marketplace", topic: "Role of Sales Representative", difficulty: "Hard", question: "A client wants to invest all their money in a single high-risk fund that does not match their conservative profile. What should you do?", answer: "Refuse the order or escalate to compliance. You have a legal responsibility to ensure suitability. Document the discussion, explain the risks, and suggest suitable alternatives. Cannot proceed with unsuitable investment" },

  { id: 7, category: "Introduction to Mutual Funds Marketplace", topic: "Role of Sales Representative", difficulty: "Medium", question: "What is the difference between a dealing representative and an advising representative?", answer: "Dealing representative: trades securities and provides advice. Advising representative: provides advice only, does not execute trades. Different registration categories with different proficiency requirements" },

  { id: 8, category: "Introduction to Mutual Funds Marketplace", topic: "Role of Sales Representative", difficulty: "Hard", question: "What are the consequences of violating Know Your Client rules?", answer: "Personal liability for advisor, firm penalties, regulatory sanctions, possible license revocation, restitution to affected clients, reputation damage, criminal charges if fraud involved" },

  // ============ CHAPTER 2: CANADIAN FINANCIAL MARKETPLACE (Questions 9-15) ============
  { id: 9, category: "Introduction to Mutual Funds Marketplace", topic: "Canadian Financial Marketplace", difficulty: "Easy", question: "What is capital in the context of financial markets?", answer: "Capital refers to money or other assets that are available for investment purposes, used by businesses, governments, and individuals to generate income or support economic activity" },

  { id: 10, category: "Introduction to Mutual Funds Marketplace", topic: "Canadian Financial Marketplace", difficulty: "Medium", question: "What is the difference between the primary market and secondary market?", answer: "Primary market: where new securities are issued and sold for the first time (e.g., IPOs). Secondary market: where previously issued securities are traded between investors (e.g., stock exchanges)" },

  { id: 11, category: "Introduction to Mutual Funds Marketplace", topic: "Canadian Financial Marketplace", difficulty: "Hard", question: "What are the main types of financial intermediaries in Canada?", answer: "Deposit-taking intermediaries (banks, trust companies, credit unions) and non-deposit taking intermediaries (investment dealers, brokers, life insurance companies, mutual fund companies)" },

  { id: 12, category: "Introduction to Mutual Funds Marketplace", topic: "Canadian Financial Marketplace", difficulty: "Medium", question: "What is the role of CIRO (Canadian Investment Regulatory Organization)?", answer: "CIRO is the national self-regulatory organization that oversees investment dealers, mutual fund dealers, and trading activity on Canada's debt and equity marketplaces (formed from merger of IIROC and MFDA in 2023)" },

  { id: 13, category: "Introduction to Mutual Funds Marketplace", topic: "Canadian Financial Marketplace", difficulty: "Easy", question: "What is an auction market?", answer: "A market where buyers and sellers submit bids and offers simultaneously, and securities trade at prices determined by supply and demand (e.g., stock exchanges like TSX)" },

  { id: 14, category: "Introduction to Mutual Funds Marketplace", topic: "Canadian Financial Marketplace", difficulty: "Medium", question: "What is underwriting in the context of new securities?", answer: "The process where investment dealers buy new securities from issuers and resell them to investors. Underwriters assume the risk of selling the securities and facilitate capital raising" },

  { id: 15, category: "Introduction to Mutual Funds Marketplace", topic: "Canadian Financial Marketplace", difficulty: "Hard", question: "What is liquidity in financial markets?", answer: "The ability to quickly buy or sell an asset at a fair price without significantly affecting its price. High liquidity means easy trading with tight bid-ask spreads" },

  // ============ CHAPTER 3: ECONOMICS (Questions 16-25) ============
  { id: 16, category: "Introduction to Mutual Funds Marketplace", topic: "Economics", difficulty: "Easy", question: "What is GDP (Gross Domestic Product)?", answer: "The total market value of all final goods and services produced within a country's borders in a specific time period, calculated using: GDP = C + I + G + (X - M)" },

  { id: 17, category: "Introduction to Mutual Funds Marketplace", topic: "Economics", difficulty: "Medium", question: "What is the difference between real GDP and nominal GDP?", answer: "Nominal GDP measures output at current prices. Real GDP adjusts for inflation to measure output at constant prices, providing a true measure of economic growth" },

  { id: 18, category: "Introduction to Mutual Funds Marketplace", topic: "Economics", difficulty: "Hard", question: "What is the Consumer Price Index (CPI) and how is inflation calculated using it?", answer: "CPI measures the average change in prices of a basket of goods and services. Inflation rate = (CPI current year - CPI previous year) / CPI previous year × 100%" },

  { id: 19, category: "Introduction to Mutual Funds Marketplace", topic: "Economics", difficulty: "Medium", question: "What are the four phases of the business cycle?", answer: "1) Expansion (recovery/growth), 2) Peak (top of cycle), 3) Contraction (recession/decline), 4) Trough (bottom of cycle)" },

  { id: 20, category: "Introduction to Mutual Funds Marketplace", topic: "Economics", difficulty: "Hard", question: "What is the relationship between interest rates and inflation?", answer: "Interest rates and inflation have a direct positive relationship. When inflation increases, central banks typically raise interest rates to control it. Higher rates make borrowing more expensive, reducing spending and inflation" },

  { id: 21, category: "Introduction to Mutual Funds Marketplace", topic: "Economics", difficulty: "Medium", question: "What is the difference between monetary policy and fiscal policy?", answer: "Monetary policy: controlled by central bank (Bank of Canada), uses interest rates and money supply to manage economy. Fiscal policy: controlled by government, uses taxation and spending to influence economy" },

  { id: 22, category: "Introduction to Mutual Funds Marketplace", topic: "Economics", difficulty: "Medium", question: "What is the output gap?", answer: "The difference between actual GDP and potential GDP. Positive gap (actual > potential) suggests inflation pressure. Negative gap suggests unemployment and unused capacity" },

  { id: 23, category: "Introduction to Mutual Funds Marketplace", topic: "Economics", difficulty: "Hard", question: "What are the components of Balance of Payments?", answer: "1) Current Account: trade in goods/services, investment income. 2) Capital Account: acquisition of assets, foreign investment flows. Surplus/deficit affects currency value" },

  { id: 24, category: "Introduction to Mutual Funds Marketplace", topic: "Economics", difficulty: "Medium", question: "What are the four types of unemployment?", answer: "1) Frictional: temporary between jobs. 2) Structural: skills mismatch. 3) Cyclical: due to economic downturn. 4) Seasonal: predictable seasonal patterns" },

  { id: 25, category: "Introduction to Mutual Funds Marketplace", topic: "Economics", difficulty: "Hard", question: "What is quantitative easing (QE) and how does it affect investments?", answer: "Central bank purchases long-term bonds to inject money into economy and lower long-term interest rates. Often increases stock valuations, pushes investors to riskier assets, inflates asset prices" },

  // ============ CHAPTER 4: CLIENT PROFILING (Questions 26-35) ============
  { id: 26, category: "Know Your Client Communication", topic: "Client Profiling", difficulty: "Easy", question: "What are the three main components of Know Your Client (KYC)?", answer: "1) Financial circumstances (income, assets, liabilities, net worth), 2) Investment objectives and goals, 3) Risk tolerance and time horizon" },

  { id: 27, category: "Know Your Client Communication", topic: "Client Profiling", difficulty: "Medium", question: "What is the difference between investment objectives focused on growth vs income?", answer: "Growth: seeking capital appreciation through price increases (suited for equity investments). Income: seeking regular cash flow from dividends/interest (suited for bonds, income funds)" },

  { id: 28, category: "Know Your Client Communication", topic: "Client Profiling", difficulty: "Hard", question: "What is the difference between risk tolerance and risk capacity?", answer: "Risk tolerance: emotional/psychological ability to handle market fluctuations. Risk capacity: financial ability to absorb losses based on assets, income, time horizon, and goals" },

  { id: 29, category: "Know Your Client Communication", topic: "Client Profiling", difficulty: "Medium", question: "Why is time horizon important in investment planning?", answer: "Time horizon determines investment suitability. Longer horizons (10+ years) can tolerate more volatility and equity exposure. Shorter horizons require conservative, liquid investments to preserve capital" },

  { id: 30, category: "Know Your Client Communication", topic: "Client Profiling", difficulty: "Easy", question: "What information must be collected when opening a non-registered mutual fund account?", answer: "Full legal name, permanent address, date of birth, social insurance number (optional but recommended), investment objectives, financial circumstances, risk tolerance, and employment information" },

  { id: 31, category: "Know Your Client Communication", topic: "Client Profiling", difficulty: "Hard", question: "A 65-year-old retiree with $500,000 in savings wants aggressive growth. How do you assess suitability?", answer: "Consider: limited time horizon for recovery, need for capital preservation/income, risk capacity vs tolerance conflict. Recommend balanced/conservative approach with some growth allocation, not aggressive portfolio" },

  { id: 32, category: "Know Your Client Communication", topic: "Client Profiling", difficulty: "Medium", question: "What is a permitted client?", answer: "Sophisticated investor meeting specific criteria (e.g., $5M+ assets, registered advisor). Subject to different regulatory requirements, can waive certain protections" },

  { id: 33, category: "Know Your Client Communication", topic: "Client Profiling", difficulty: "Medium", question: "What is discretionary account management and what is required?", answer: "Client grants authority to advisor to make investment decisions without prior approval. Requires written authorization, regular reporting, compliance supervision, client suitability confirmation, ability to override anytime" },

  { id: 34, category: "Know Your Client Communication", topic: "Client Profiling", difficulty: "Hard", question: "A client's circumstances change: receives promotion (higher income), gets married, wants to buy home in 3 years. What action required?", answer: "Update KYC record, reassess risk tolerance and time horizon, review suitability of current portfolio, may need to rebalance toward more conservative allocation for near-term goal" },

  { id: 35, category: "Know Your Client Communication", topic: "Client Profiling", difficulty: "Medium", question: "What are the three categories of investment objectives?", answer: "1) Safety/Capital Preservation: minimize risk, protect principal (GICs, money market). 2) Income: regular cash flow (bonds, dividend funds). 3) Growth/Capital Appreciation: increase value (equity funds)" },

  // ============ CHAPTER 5: BEHAVIORAL FINANCE (Questions 36-43) ============
  { id: 36, category: "Know Your Client Communication", topic: "Behavioral Finance", difficulty: "Easy", question: "What is anchoring bias?", answer: "The tendency to rely too heavily on the first piece of information received (the 'anchor'), such as fixating on a stock's original purchase price when making investment decisions" },

  { id: 37, category: "Know Your Client Communication", topic: "Behavioral Finance", difficulty: "Medium", question: "What is loss aversion in behavioral finance?", answer: "The tendency for investors to feel the pain of losses more strongly than the pleasure of equivalent gains, often leading to holding losing investments too long or selling winners too early" },

  { id: 38, category: "Know Your Client Communication", topic: "Behavioral Finance", difficulty: "Hard", question: "What is overconfidence bias and how does it affect investing?", answer: "Overconfidence bias is when investors overestimate their knowledge and ability to predict markets, leading to excessive trading, taking on too much risk, and underestimating the likelihood of losses" },

  { id: 39, category: "Know Your Client Communication", topic: "Behavioral Finance", difficulty: "Medium", question: "What is herd behavior (or herd mentality)?", answer: "The tendency to follow the crowd and make investment decisions based on what others are doing, rather than independent analysis, often creating bubbles and market crashes" },

  { id: 40, category: "Know Your Client Communication", topic: "Behavioral Finance", difficulty: "Easy", question: "What is confirmation bias?", answer: "The tendency to seek out information that confirms existing beliefs while ignoring contradictory information, leading to poor investment decisions based on incomplete analysis" },

  { id: 41, category: "Know Your Client Communication", topic: "Behavioral Finance", difficulty: "Medium", question: "What is recency bias?", answer: "Giving more weight to recent events and extrapolating recent trends into the future. Example: assuming recent strong performance will continue, or avoiding stocks after recent market crash" },

  { id: 42, category: "Know Your Client Communication", topic: "Behavioral Finance", difficulty: "Hard", question: "How can representatives help clients overcome behavioral biases?", answer: "Education, establishing investment policy statement, regular rebalancing discipline, long-term perspective, avoiding frequent portfolio checking, using systematic investment plans (PAC)" },

  { id: 43, category: "Know Your Client Communication", topic: "Behavioral Finance", difficulty: "Medium", question: "What is herding behavior during market crashes?", answer: "When many investors sell simultaneously based on fear rather than fundamental analysis, creating panic-driven price declines. Can turn market corrections into crashes through self-reinforcing cycle" },

  // ============ CHAPTER 6: TAX AND RETIREMENT PLANNING (Questions 44-54) ============
  { id: 44, category: "Know Your Client Communication", topic: "Tax and Retirement Planning", difficulty: "Easy", question: "What is the main difference between RRSP and TFSA contributions?", answer: "RRSP contributions are tax-deductible (pre-tax dollars) and withdrawals are taxed. TFSA contributions are not tax-deductible (after-tax dollars) but withdrawals are completely tax-free" },

  { id: 45, category: "Know Your Client Communication", topic: "Tax and Retirement Planning", difficulty: "Medium", question: "At what age must an RRSP be converted to a RRIF or annuity?", answer: "By December 31 of the year you turn 71. RRIF withdrawals must begin the year you turn 72" },

  { id: 46, category: "Know Your Client Communication", topic: "Tax and Retirement Planning", difficulty: "Hard", question: "What are the RRSP and TFSA contribution limits for 2025?", answer: "RRSP: $32,490 or 18% of previous year's earned income (whichever is less), minus pension adjustment. TFSA: $7,000 annual limit" },

  { id: 47, category: "Know Your Client Communication", topic: "Tax and Retirement Planning", difficulty: "Medium", question: "What happens to unused TFSA contribution room?", answer: "Unused contribution room carries forward indefinitely. Additionally, any amount withdrawn is added back to contribution room the following year" },

  { id: 48, category: "Know Your Client Communication", topic: "Tax and Retirement Planning", difficulty: "Easy", question: "What is a spousal RRSP?", answer: "An RRSP where one spouse contributes but the plan is owned by the other spouse, allowing income splitting in retirement. The contributor gets the tax deduction, but withdrawals are taxed in the annuitant's hands" },

  { id: 49, category: "Know Your Client Communication", topic: "Tax and Retirement Planning", difficulty: "Hard", question: "What is the Home Buyers' Plan (HBP)?", answer: "Allows first-time homebuyers to withdraw up to $35,000 from RRSP tax-free for down payment. Must be repaid over 15 years starting second year after withdrawal, or amounts become taxable" },

  { id: 50, category: "Know Your Client Communication", topic: "Tax and Retirement Planning", difficulty: "Medium", question: "What is the Lifelong Learning Plan (LLP)?", answer: "Allows withdrawing up to $10,000/year (max $20,000 total) from RRSP for education expenses. Must repay over 10 years. Student must be enrolled full-time" },

  { id: 51, category: "Know Your Client Communication", topic: "Tax and Retirement Planning", difficulty: "Hard", question: "How are different types of investment income taxed in Canada?", answer: "Interest income: fully taxable at marginal rate. Dividend income: eligible for dividend tax credit (favorable). Capital gains: 50% inclusion rate (only half is taxable)" },

  { id: 52, category: "Know Your Client Communication", topic: "Tax and Retirement Planning", difficulty: "Medium", question: "What is tax-loss harvesting strategy?", answer: "Deliberately realizing capital losses to offset capital gains, reducing tax bill. Can carry forward unused losses. Common in December tax-planning. Must follow adjusted cost base (ACB) rules" },

  { id: 53, category: "Know Your Client Communication", topic: "Tax and Retirement Planning", difficulty: "Medium", question: "What is estate equalization and why might it affect investment recommendations?", answer: "Ensuring fair distribution of assets to beneficiaries. May influence investment approach - different accounts for different beneficiaries, consideration of probate fees, tax-efficient structuring" },

  { id: 54, category: "Know Your Client Communication", topic: "Tax and Retirement Planning", difficulty: "Medium", question: "What is TFSA contribution room if you over-contribute?", answer: "Over-contributions are subject to 1% per month penalty tax on the excess amount until withdrawn. No tax deduction benefit for TFSA contributions" },

  // ============ CHAPTER 7: INVESTMENT PRODUCTS (Questions 55-65) ============
  { id: 55, category: "Understanding Investment Products", topic: "Investment Products", difficulty: "Easy", question: "What is the main difference between stocks (equities) and bonds (fixed income)?", answer: "Stocks represent ownership in a company with potential for capital gains and dividends but higher risk. Bonds are debt instruments providing fixed interest payments with lower risk but limited upside" },

  { id: 56, category: "Understanding Investment Products", topic: "Investment Products", difficulty: "Medium", question: "What is a Guaranteed Investment Certificate (GIC)?", answer: "A deposit investment issued by financial institutions that guarantees the principal amount and a fixed rate of return for a specified term, insured by CDIC up to $100,000" },

  { id: 57, category: "Understanding Investment Products", topic: "Investment Products", difficulty: "Hard", question: "What are derivatives and name three main types?", answer: "Derivatives are financial instruments whose value is derived from an underlying asset. Three main types: 1) Options, 2) Futures contracts, 3) Forwards" },

  { id: 58, category: "Understanding Investment Products", topic: "Investment Products", difficulty: "Medium", question: "What is the difference between common shares and preferred shares?", answer: "Common shares: voting rights, variable dividends, higher growth potential, last claim on assets. Preferred shares: no voting rights, fixed dividends, priority over common shares, less price volatility" },

  { id: 59, category: "Understanding Investment Products", topic: "Investment Products", difficulty: "Easy", question: "What is a money market instrument?", answer: "Short-term debt securities with maturity less than one year, highly liquid and low risk (e.g., T-bills, commercial paper, bankers' acceptances)" },

  { id: 60, category: "Understanding Investment Products", topic: "Investment Products", difficulty: "Hard", question: "What is duration in bond investing?", answer: "Measures bond price sensitivity to interest rate changes. Higher duration = greater price volatility. A duration of 5 means bond price changes ~5% for every 1% change in interest rates" },

  { id: 61, category: "Understanding Investment Products", topic: "Investment Products", difficulty: "Medium", question: "What is a Treasury Bill (T-Bill)?", answer: "Short-term government debt security (≤1 year maturity), sold at discount to face value, no coupon payments. Considered virtually risk-free, highly liquid" },

  { id: 62, category: "Understanding Investment Products", topic: "Investment Products", difficulty: "Hard", question: "What is a strip bond (zero-coupon bond)?", answer: "A bond with coupons 'stripped' off and sold separately. No periodic interest payments, sold at deep discount to face value, matures at par. Locked-in yield but subject to phantom income tax" },

  { id: 63, category: "Understanding Investment Products", topic: "Investment Products", difficulty: "Medium", question: "What is a convertible bond?", answer: "A bond that can be converted into a predetermined number of common shares. Offers fixed income with equity upside potential, typically lower yield than regular bonds" },

  { id: 64, category: "Understanding Investment Products", topic: "Investment Products", difficulty: "Medium", question: "What is a corporate bond fund?", answer: "Invests in bonds issued by corporations. Higher yield than government bonds but higher credit risk. Quality varies from investment-grade to high-yield (junk) bonds" },

  { id: 65, category: "Understanding Investment Products", topic: "Investment Products", difficulty: "Hard", question: "What is convexity in bond investing?", answer: "Describes the curved relationship between bond prices and interest rates (beyond linear duration). Positive convexity: price increases more when rates fall than it decreases when rates rise. Favors bondholders" },

  // ============ CHAPTER 8: PORTFOLIO CONSTRUCTION (Questions 66-74) ============
  { id: 66, category: "Understanding Investment Products", topic: "Portfolio Construction", difficulty: "Easy", question: "What is diversification?", answer: "Spreading investments across different asset classes, sectors, and geographic regions to reduce risk. The principle that 'do not put all your eggs in one basket'" },

  { id: 67, category: "Understanding Investment Products", topic: "Portfolio Construction", difficulty: "Medium", question: "What is asset allocation?", answer: "The process of dividing an investment portfolio among different asset categories (stocks, bonds, cash) based on the investor's goals, risk tolerance, and time horizon" },

  { id: 68, category: "Understanding Investment Products", topic: "Portfolio Construction", difficulty: "Hard", question: "What is the relationship between risk and return in investing?", answer: "Generally, higher potential returns come with higher risk. The risk-return trade-off means investors must accept more volatility and uncertainty for the opportunity to earn greater returns" },

  { id: 69, category: "Understanding Investment Products", topic: "Portfolio Construction", difficulty: "Medium", question: "What is rebalancing and why is it important?", answer: "Rebalancing is adjusting portfolio weights back to target allocations. It's important to maintain desired risk levels, enforce discipline (sell high, buy low), and ensure alignment with investment objectives" },

  { id: 70, category: "Understanding Investment Products", topic: "Portfolio Construction", difficulty: "Easy", question: "What are the three main asset classes?", answer: "1) Cash and cash equivalents (money market), 2) Fixed income (bonds), 3) Equities (stocks)" },

  { id: 71, category: "Understanding Investment Products", topic: "Portfolio Construction", difficulty: "Hard", question: "What is Modern Portfolio Theory (MPT)?", answer: "Theory by Harry Markowitz: investors can construct efficient portfolios to maximize returns for given risk level through diversification. Emphasizes correlation between assets to reduce portfolio volatility" },

  { id: 72, category: "Understanding Investment Products", topic: "Portfolio Construction", difficulty: "Medium", question: "What is correlation in portfolio construction?", answer: "Measures how assets move together. +1 = perfect positive correlation, 0 = no correlation, -1 = perfect negative correlation. Low/negative correlation improves diversification benefits" },

  { id: 73, category: "Understanding Investment Products", topic: "Portfolio Construction", difficulty: "Hard", question: "What is the efficient frontier?", answer: "The curve showing combinations of risk and return offering optimal portfolio construction. Portfolios on frontier are efficient (maximum return for given risk). Investors choose based on risk preference" },

  { id: 74, category: "Understanding Investment Products", topic: "Portfolio Construction", difficulty: "Easy", question: "What is dollar-cost averaging?", answer: "Investing a fixed amount at regular intervals regardless of market price. Reduces impact of volatility, results in lower average cost per unit over time when practiced consistently" },
  // ============ CHAPTER 9: FINANCIAL STATEMENTS (Questions 75-82) ============
  { id: 75, category: "Understanding Investment Products", topic: "Financial Statements", difficulty: "Easy", question: "What are the three main financial statements?", answer: "1) Income Statement (Statement of Earnings), 2) Balance Sheet (Statement of Financial Position), 3) Cash Flow Statement" },

  { id: 76, category: "Understanding Investment Products", topic: "Financial Statements", difficulty: "Medium", question: "What is the basic accounting equation shown on a balance sheet?", answer: "Assets = Liabilities + Shareholders' Equity" },

  { id: 77, category: "Understanding Investment Products", topic: "Financial Statements", difficulty: "Hard", question: "What is the difference between the income statement and cash flow statement?", answer: "Income statement shows revenues and expenses using accrual accounting (may not reflect actual cash). Cash flow statement shows actual cash inflows and outflows from operating, investing, and financing activities" },

  { id: 78, category: "Understanding Investment Products", topic: "Financial Statements", difficulty: "Medium", question: "What does the current ratio measure?", answer: "Current Ratio = Current Assets / Current Liabilities. It measures a company's ability to pay short-term obligations. A ratio above 1.0 indicates good short-term liquidity" },

  { id: 79, category: "Understanding Investment Products", topic: "Financial Statements", difficulty: "Hard", question: "What is Return on Equity (ROE)?", answer: "ROE = Net Income / Shareholders' Equity. Measures profitability and efficiency in generating returns for shareholders. Higher ROE generally better, but compare within same industry" },

  { id: 80, category: "Understanding Investment Products", topic: "Financial Statements", difficulty: "Medium", question: "What is the Price-to-Earnings (P/E) ratio?", answer: "P/E = Share Price / Earnings Per Share. Indicates how much investors pay per dollar of earnings. High P/E may suggest growth expectations or overvaluation; low P/E may indicate value or problems" },

  { id: 81, category: "Understanding Investment Products", topic: "Financial Statements", difficulty: "Medium", question: "What is the quick ratio (acid test)?", answer: "Quick Ratio = (Current Assets - Inventory) / Current Liabilities. More conservative than current ratio, measures ability to meet short-term obligations with liquid assets only" },

  { id: 82, category: "Understanding Investment Products", topic: "Financial Statements", difficulty: "Medium", question: "What is Debt-to-Equity ratio and Earnings Per Share (EPS)?", answer: "Debt-to-Equity: D/E = Total Debt / Shareholders' Equity. Measures financial leverage. Higher D/E = higher risk. EPS = Net Income / Outstanding Shares. Indicates profit per share and company profitability" },

  // ============ CHAPTER 10: MODERN MUTUAL FUND STRUCTURE (Questions 83-96) ============
  { id: 83, category: "Modern Mutual Fund", topic: "Mutual Fund Structure", difficulty: "Easy", question: "What is an open-end mutual fund?", answer: "A mutual fund that continuously issues and redeems units at Net Asset Value Per Share (NAVPS). The number of units outstanding changes daily based on investor purchases and redemptions" },

  { id: 84, category: "Modern Mutual Fund", topic: "Mutual Fund Structure", difficulty: "Hard", question: "What is the NAVPS formula and what does it represent?", answer: "NAVPS = (Total Assets - Total Liabilities) / Number of Outstanding Units. It represents the per-unit value of a mutual fund, calculated at the end of each business day" },

  { id: 85, category: "Modern Mutual Fund", topic: "Mutual Fund Structure", difficulty: "Medium", question: "What is a mutual fund prospectus?", answer: "A legal disclosure document that provides detailed information about the fund including investment objectives, strategies, risks, fees, past performance, and management" },

  { id: 86, category: "Modern Mutual Fund", topic: "Mutual Fund Structure", difficulty: "Easy", question: "What is Fund Facts?", answer: "A short, plain-language document (maximum 4 pages) that provides key information about a mutual fund including performance, risks, and costs. Must be delivered before or at the time of purchase" },

  { id: 87, category: "Modern Mutual Fund", topic: "Mutual Fund Structure", difficulty: "Medium", question: "What is the difference between a mutual fund and a closed-end fund?", answer: "Mutual funds (open-end): continuously issue/redeem at NAVPS, unlimited units. Closed-end funds: fixed number of shares, trade on exchange at market price (can be premium/discount to NAV)" },

  { id: 88, category: "Modern Mutual Fund", topic: "Mutual Fund Structure", difficulty: "Hard", question: "Calculate NAVPS if fund has $100M in assets, $5M in liabilities, and 10M units outstanding.", answer: "NAVPS = ($100M - $5M) / 10M units = $95M / 10M = $9.50 per unit" },

  { id: 89, category: "Modern Mutual Fund", topic: "Mutual Fund Structure", difficulty: "Medium", question: "What is the role of a fund custodian?", answer: "Holds and safeguards fund's securities and cash, settles trades, collects income, and maintains records. Separate from fund manager to protect investor assets" },

  { id: 90, category: "Modern Mutual Fund", topic: "Mutual Fund Structure", difficulty: "Hard", question: "What is a labour-sponsored fund?", answer: "Venture capital fund sponsored by labor organizations, invests in small/medium Canadian businesses. Offers federal and provincial tax credits but has restrictions on withdrawals and higher risk" },

  { id: 91, category: "Modern Mutual Fund", topic: "Mutual Fund Structure", difficulty: "Medium", question: "What is the difference between Class A and Class F units?", answer: "Class A: includes embedded advisor compensation (higher MER). Class F (fee-based): no embedded commission, lower MER, client pays advisor fee separately. For fee-based accounts" },

  { id: 92, category: "Modern Mutual Fund", topic: "Mutual Fund Structure", difficulty: "Easy", question: "What is an index fund?", answer: "A passively managed fund that aims to replicate the performance of a specific market index (e.g., S&P/TSX 60). Lower MER than actively managed funds" },

  { id: 93, category: "Modern Mutual Fund", topic: "Mutual Fund Structure", difficulty: "Hard", question: "What is a manager-of-managers fund?", answer: "Fund managed by one manager who allocates to multiple sub-managers for different strategies/asset classes. Provides professional selection of managers and diversification" },

  { id: 94, category: "Modern Mutual Fund", topic: "Mutual Fund Structure", difficulty: "Medium", question: "What is a mutual fund's fiscal year-end and why is it important?", answer: "Date when fund's financial year ends (varies by fund, often Dec 31 or Mar 31). Important for tax reporting, distribution calculations, financial statement preparation, and year-end performance measurement" },

  { id: 95, category: "Modern Mutual Fund", topic: "Mutual Fund Structure", difficulty: "Easy", question: "What is a fund prospectus update and when is it required?", answer: "Document update reflecting material changes to fund (strategy, MER, manager change). Must be delivered to new investors, existing investors if material changes occur. Required by securities law" },

  { id: 96, category: "Modern Mutual Fund", topic: "Mutual Fund Structure", difficulty: "Hard", question: "What is a fund-of-funds?", answer: "Fund managed by one manager who allocates to other mutual funds rather than directly in stocks/bonds. Provides diversification across multiple fund managers but typically has higher fees (layered MERs)" },

  // ============ CHAPTER 11: CONSERVATIVE FUNDS (Questions 97-104) ============
  { id: 97, category: "Analysis of Mutual Funds", topic: "Conservative Funds", difficulty: "Easy", question: "What is a money market mutual fund?", answer: "A mutual fund that invests in short-term, highly liquid, low-risk debt securities (T-bills, commercial paper) with maturities under one year. Offers stability and liquidity with modest returns" },

  { id: 98, category: "Analysis of Mutual Funds", topic: "Conservative Funds", difficulty: "Medium", question: "What is a bond mutual fund and what is its main risk?", answer: "A fund that invests primarily in fixed-income securities (government and corporate bonds). Main risk is interest rate risk - bond prices fall when interest rates rise" },

  { id: 99, category: "Analysis of Mutual Funds", topic: "Conservative Funds", difficulty: "Hard", question: "What is the relationship between bond prices and interest rates?", answer: "Inverse relationship: when interest rates rise, existing bond prices fall (because new bonds offer higher rates). When interest rates fall, existing bond prices rise. This is called interest rate risk" },

  { id: 100, category: "Analysis of Mutual Funds", topic: "Conservative Funds", difficulty: "Medium", question: "What is a mortgage mutual fund?", answer: "A fund that invests in a portfolio of residential and/or commercial mortgages. Provides higher yield than money market funds but with more risk and less liquidity" },

  { id: 101, category: "Analysis of Mutual Funds", topic: "Conservative Funds", difficulty: "Easy", question: "What is the typical yield relationship between T-Bills, GICs, and corporate bonds?", answer: "T-Bills (lowest risk, lowest yield) < GICs < Investment-grade corporate bonds < High-yield bonds (highest risk, highest yield). Risk-return relationship" },

  { id: 102, category: "Analysis of Mutual Funds", topic: "Conservative Funds", difficulty: "Medium", question: "What is the function of a bond ladder strategy?", answer: "Buying bonds with different maturities (e.g., 1, 2, 3, 4, 5 years). Provides regular income, reduces interest rate risk, provides liquidity from regular maturities. Common income strategy" },

  { id: 103, category: "Analysis of Mutual Funds", topic: "Conservative Funds", difficulty: "Hard", question: "What is the yield curve and what does it indicate?", answer: "A graph showing yields of bonds with different maturities. Normal curve (upward sloping): longer bonds have higher yields. Inverted curve: short-term yields exceed long-term, often predicts recession" },

  { id: 104, category: "Analysis of Mutual Funds", topic: "Conservative Funds", difficulty: "Medium", question: "What is the difference between government and corporate bonds?", answer: "Government bonds: issued by federal, provincial, or local governments. Lower default risk, lower yield. Corporate bonds: issued by companies. Higher default risk, higher yield. Credit quality varies" },

  // ============ CHAPTER 12: EQUITY FUNDS (Questions 105-116) ============
  { id: 105, category: "Analysis of Mutual Funds", topic: "Equity Funds", difficulty: "Easy", question: "What is an equity mutual fund?", answer: "A fund that invests primarily in stocks (common and/or preferred shares). Offers higher growth potential but with greater volatility and risk compared to fixed-income funds" },

  { id: 106, category: "Analysis of Mutual Funds", topic: "Equity Funds", difficulty: "Medium", question: "What is a balanced mutual fund?", answer: "A fund that holds both equities and fixed-income securities, typically in a predetermined ratio (e.g., 60% stocks, 40% bonds). Provides diversification and moderate risk between pure equity and bond funds" },

  { id: 107, category: "Analysis of Mutual Funds", topic: "Equity Funds", difficulty: "Hard", question: "What is the difference between growth funds and value funds?", answer: "Growth funds: invest in companies expected to grow faster than market average, higher P/E ratios, reinvest earnings. Value funds: invest in undervalued companies trading below intrinsic value, lower P/E ratios, often pay dividends" },

  { id: 108, category: "Analysis of Mutual Funds", topic: "Equity Funds", difficulty: "Medium", question: "What is a dividend fund?", answer: "An equity fund that focuses on stocks that pay regular dividends. Provides current income and potential for capital appreciation, suitable for income-oriented investors" },

  { id: 109, category: "Analysis of Mutual Funds", topic: "Equity Funds", difficulty: "Easy", question: "What is a global mutual fund?", answer: "A fund that invests in securities from countries around the world, including Canada. Provides international diversification but includes currency and country risk" },

  { id: 110, category: "Analysis of Mutual Funds", topic: "Equity Funds", difficulty: "Medium", question: "What is the difference between international and global funds?", answer: "International funds: invest only in foreign markets excluding Canada. Global funds: invest worldwide including Canada. Both provide geographic diversification" },

  { id: 111, category: "Analysis of Mutual Funds", topic: "Equity Funds", difficulty: "Hard", question: "What is a market capitalization and how do small-cap, mid-cap, and large-cap funds differ?", answer: "Market cap = share price × shares outstanding. Large-cap (>$10B): stable, lower growth. Mid-cap ($2-10B): moderate risk/return. Small-cap (<$2B): higher growth potential but volatile" },

  { id: 112, category: "Analysis of Mutual Funds", topic: "Equity Funds", difficulty: "Medium", question: "What is a target-date fund?", answer: "A fund that automatically adjusts asset allocation based on target retirement date. Becomes more conservative as target date approaches (glide path). Used in retirement planning" },

  { id: 113, category: "Analysis of Mutual Funds", topic: "Equity Funds", difficulty: "Hard", question: "What is an emerging markets fund?", answer: "Invests in developing countries (e.g., Brazil, India, China). Higher growth potential but significant risks: political instability, currency fluctuations, lower liquidity, less regulation" },

  { id: 114, category: "Analysis of Mutual Funds", topic: "Equity Funds", difficulty: "Medium", question: "What is a Concentrated Fund?", answer: "Fund holding relatively few positions (typically fewer than 30 stocks). Provides focused strategy but higher risk due to lack of diversification. Suitable for experienced/risk-tolerant investors" },

  { id: 115, category: "Analysis of Mutual Funds", topic: "Equity Funds", difficulty: "Hard", question: "What is the difference between fundamental and technical analysis for fund holdings?", answer: "Fundamental: analyzes company financials, earnings, competitive position. Technical: analyzes price patterns and trading volume. Mutual funds typically use fundamental analysis for security selection" },

  { id: 116, category: "Analysis of Mutual Funds", topic: "Equity Funds", difficulty: "Hard", question: "What is stock picking vs market timing as investment approaches?", answer: "Stock picking: selecting individual stocks expected to outperform market (active management). Market timing: trying to buy/sell based on market cycle predictions. Both are notoriously difficult, most underperform passive approach" },

  // ============ CHAPTER 13: ALTERNATIVE PRODUCTS (Questions 117-123) ============
  { id: 117, category: "Alternative Managed Products", topic: "Alternative Investments", difficulty: "Easy", question: "What is an Exchange-Traded Fund (ETF)?", answer: "An investment fund that trades on stock exchanges like individual stocks. Typically tracks an index, sector, or commodity with lower MERs than traditional mutual funds" },

  { id: 118, category: "Alternative Managed Products", topic: "Alternative Investments", difficulty: "Medium", question: "What is a segregated fund?", answer: "An insurance product similar to mutual funds but with guarantees on maturity (typically 75-100% of deposits after 10 years) and death benefits. Offers creditor protection and potential to bypass probate" },

  { id: 119, category: "Alternative Managed Products", topic: "Alternative Investments", difficulty: "Hard", question: "What is a hedge fund and how does it differ from mutual funds?", answer: "Hedge funds: use sophisticated strategies (short selling, leverage, derivatives), less regulated, higher minimum investments, limited liquidity, performance fees. Mutual funds: more regulated, lower minimums, daily liquidity, no performance fees" },

  { id: 120, category: "Alternative Managed Products", topic: "Alternative Investments", difficulty: "Medium", question: "What is a principal-protected note (PPN)?", answer: "Structured product guaranteeing return of principal at maturity while providing exposure to equity/commodity returns. Complex, illiquid, higher fees, may sacrifice some upside for protection" },

  { id: 121, category: "Alternative Managed Products", topic: "Alternative Investments", difficulty: "Hard", question: "What are the advantages of segregated funds over mutual funds?", answer: "1) Maturity/death guarantees, 2) Creditor protection (potential), 3) Bypass probate (named beneficiary), 4) Estate planning benefits. Disadvantages: higher MER, 10-year lockup for guarantees" },

  { id: 122, category: "Alternative Managed Products", topic: "Alternative Investments", difficulty: "Medium", question: "What is the main advantage of a currency-hedged version of international funds?", answer: "Reduces currency risk - hedging protects against unfavorable exchange rate movements. Disadvantage: hedging costs reduce returns when currency favorable. Choose based on currency outlook" },

  { id: 123, category: "Alternative Managed Products", topic: "Alternative Investments", difficulty: "Hard", question: "What is a REIT (Real Estate Investment Trust)?", answer: "An investment that owns and operates income-producing real estate. Offers exposure to real estate without direct property ownership, typically provides regular income through rent distributions" },

  // ============ CHAPTER 14: FUND PERFORMANCE (Questions 124-135) ============
  { id: 124, category: "Evaluating and Selecting Funds", topic: "Fund Performance", difficulty: "Easy", question: "What is a benchmark in mutual fund performance evaluation?", answer: "A standard or index used to compare and measure a fund's performance (e.g., S&P/TSX Composite Index for Canadian equity funds, S&P 500 for U.S. equity funds)" },

  { id: 125, category: "Evaluating and Selecting Funds", topic: "Fund Performance", difficulty: "Medium", question: "What is the Sharpe Ratio?", answer: "A measure of risk-adjusted return: (Fund Return - Risk-free Rate) / Standard Deviation. Higher Sharpe ratio indicates better risk-adjusted performance" },

  { id: 126, category: "Evaluating and Selecting Funds", topic: "Fund Performance", difficulty: "Hard", question: "What do Alpha and Beta measure in mutual fund analysis?", answer: "Alpha: excess return above benchmark (positive alpha = outperformance). Beta: volatility relative to market (Beta > 1 = more volatile, Beta < 1 = less volatile, Beta = 1 = same as market)" },

  { id: 127, category: "Evaluating and Selecting Funds", topic: "Fund Performance", difficulty: "Medium", question: "What is standard deviation in mutual fund analysis?", answer: "A measure of volatility showing how much a fund's returns deviate from its average return. Higher standard deviation indicates higher risk and volatility" },

  { id: 128, category: "Evaluating and Selecting Funds", topic: "Fund Performance", difficulty: "Easy", question: "What is a quartile ranking?", answer: "Performance ranking that divides funds into four equal groups (1st quartile = top 25%, 4th quartile = bottom 25%). Used to compare a fund's performance against peers" },

  { id: 129, category: "Evaluating and Selecting Funds", topic: "Fund Performance", difficulty: "Hard", question: "A fund has 12% return, risk-free rate is 2%, standard deviation is 10%. Calculate the Sharpe Ratio.", answer: "Sharpe Ratio = (12% - 2%) / 10% = 10% / 10% = 1.0. A Sharpe ratio of 1.0 indicates good risk-adjusted returns" },

  { id: 130, category: "Evaluating and Selecting Funds", topic: "Fund Performance", difficulty: "Medium", question: "What is R-squared in mutual fund analysis?", answer: "Measures how much of a fund's movement is explained by its benchmark (0-100%). R² of 100 = perfect correlation with benchmark. High R² suggests passive management or index-like behavior" },

  { id: 131, category: "Evaluating and Selecting Funds", topic: "Fund Performance", difficulty: "Hard", question: "If a fund has Beta of 1.3 and market returns 10%, what return would you expect from the fund?", answer: "Beta 1.3 means 30% more volatile than market. Expected return ≈ 13% (assuming similar direction). Fund amplifies market movements by 30%" },

  { id: 132, category: "Evaluating and Selecting Funds", topic: "Fund Performance", difficulty: "Medium", question: "What is a risk-adjusted return?", answer: "Return earned per unit of risk taken. Accounts for volatility/risk when evaluating performance. Metrics include Sharpe ratio, Sortino ratio, and Information ratio" },

  { id: 133, category: "Evaluating and Selecting Funds", topic: "Fund Performance", difficulty: "Easy", question: "Why is past performance not a guarantee of future results?", answer: "Market conditions change, fund manager changes, strategy drift, luck vs skill, reversion to mean. Past performance is one factor but not predictive, especially for short periods" },

  { id: 134, category: "Evaluating and Selecting Funds", topic: "Fund Performance", difficulty: "Hard", question: "What is the Information Ratio?", answer: "Information Ratio = Alpha / Tracking Error. Measures excess return per unit of risk taken relative to benchmark. Higher is better - indicates skill in generating alpha consistently" },

  { id: 135, category: "Evaluating and Selecting Funds", topic: "Fund Performance", difficulty: "Medium", question: "What is tracking error?", answer: "Standard deviation of difference between fund returns and benchmark returns. Measures consistency of outperformance/underperformance. Low tracking error = closely follows benchmark" },

  // ============ CHAPTER 15: FUND SELECTION (Questions 136-142) ============
  { id: 136, category: "Evaluating and Selecting Funds", topic: "Fund Selection", difficulty: "Easy", question: "What factors should be considered when selecting a mutual fund?", answer: "Investment objectives, risk level, fees (MER), past performance, fund manager experience, fund size, investment philosophy, and alignment with client's needs" },

  { id: 137, category: "Evaluating and Selecting Funds", topic: "Fund Selection", difficulty: "Medium", question: "What is the importance of fund manager tenure?", answer: "Longer tenure indicates stability and that past performance was likely achieved by the current manager. Frequent manager changes can signal instability and make historical performance less relevant" },

  { id: 138, category: "Evaluating and Selecting Funds", topic: "Fund Selection", difficulty: "Hard", question: "What is style drift in mutual funds?", answer: "When a fund manager deviates from the stated investment style or mandate (e.g., a value fund buying growth stocks). Can indicate lack of discipline or attempts to chase performance" },

  { id: 139, category: "Evaluating and Selecting Funds", topic: "Fund Selection", difficulty: "Medium", question: "Why is fund size important in fund selection?", answer: "Very large funds may face challenges deploying capital efficiently. Very small funds may lack economies of scale (higher MER) and face closure risk. Mid-sized funds often offer optimal balance" },

  { id: 140, category: "Evaluating and Selecting Funds", topic: "Fund Selection", difficulty: "Medium", question: "How should you evaluate fund's track record?", answer: "Look at: multiple time periods (1, 3, 5, 10+ years), against appropriate benchmark, risk-adjusted metrics, consistency of performance, manager tenure, market conditions during period" },

  { id: 141, category: "Evaluating and Selecting Funds", topic: "Fund Selection", difficulty: "Medium", question: "What is performance chasing and why is it problematic?", answer: "Investing in funds with best recent performance. Problematic because: recent performance regresses to mean, higher entry valuations, emotional decision-making. Often leads to buying high and selling low" },

  { id: 142, category: "Evaluating and Selecting Funds", topic: "Fund Selection", difficulty: "Hard", question: "A fund manager leaves and is replaced. What steps should advisor take?", answer: "Understand new manager's experience/track record, assess continuity of strategy, review any changes in investment approach, consider impact on clients' suitability, communicate changes to clients" },

  // ============ CHAPTER 16: FEES AND CHARGES (Questions 143-155) ============
  { id: 143, category: "Evaluating and Selecting Funds", topic: "Fees and Charges", difficulty: "Easy", question: "What is the Management Expense Ratio (MER)?", answer: "The total annual cost of operating a mutual fund expressed as a percentage, including management fees, operating expenses, and trailer fees. Deducted before returns are reported" },

  { id: 144, category: "Evaluating and Selecting Funds", topic: "Fees and Charges", difficulty: "Medium", question: "What are the three main purchase options for mutual funds?", answer: "1) Front-end load: commission paid upfront (0-5%), 2) Deferred Sales Charge (DSC/back-end load): declining penalty if sold within 5-7 years, 3) No-load: no commission charged" },

  { id: 145, category: "Evaluating and Selecting Funds", topic: "Fees and Charges", difficulty: "Hard", question: "What is a trailer fee and how does it work?", answer: "An ongoing commission (typically 0.25%-1%) paid by the fund company to the dealer/advisor annually for as long as client holds the fund. Embedded in MER, compensates for ongoing service and advice" },

  { id: 146, category: "Evaluating and Selecting Funds", topic: "Fees and Charges", difficulty: "Medium", question: "What is a Deferred Sales Charge (DSC) schedule?", answer: "A declining redemption fee schedule if units are sold before a specified period (typically 5-7 years). Example: Year 1=5.5%, Year 2=5%, declining to 0% after year 6-7" },

  { id: 147, category: "Evaluating and Selecting Funds", topic: "Fees and Charges", difficulty: "Easy", question: "What is a systematic withdrawal plan (SWP)?", answer: "An arrangement allowing investors to withdraw a fixed dollar amount or percentage from their mutual fund at regular intervals (monthly, quarterly) for income purposes" },

  { id: 148, category: "Evaluating and Selecting Funds", topic: "Fees and Charges", difficulty: "Medium", question: "What is a Pre-Authorized Contribution (PAC) plan?", answer: "An automatic investment plan where a fixed amount is regularly withdrawn from your bank account and invested in a mutual fund. Provides dollar-cost averaging benefits" },

  { id: 149, category: "Evaluating and Selecting Funds", topic: "Fees and Charges", difficulty: "Hard", question: "A fund has MER of 2.5% with front-end load of 3%. You invest $10,000. What's actually invested in the fund initially?", answer: "$10,000 - 3% = $9,700 invested. The $300 commission goes to dealer/advisor. MER of 2.5% is deducted annually from fund assets thereafter" },

  { id: 150, category: "Evaluating and Selecting Funds", topic: "Fees and Charges", difficulty: "Medium", question: "What is the free amount in a DSC schedule?", answer: "The percentage of fund value (typically 10% annually) that can be redeemed without paying DSC penalty. Allows some liquidity while holding DSC units" },

  { id: 151, category: "Evaluating and Selecting Funds", topic: "Fees and Charges", difficulty: "Hard", question: "Compare the cost impact of a 2% MER vs 1% MER on $100,000 invested over 20 years assuming 6% gross return.", answer: "2% MER: net 4% return = ~$219,000. 1% MER: net 5% return = ~$265,000. Difference: ~$46,000. Lower fees significantly impact long-term wealth accumulation" },

  { id: 152, category: "Evaluating and Selecting Funds", topic: "Fees and Charges", difficulty: "Medium", question: "What is asset-based fee arrangement?", answer: "Client pays advisor a percentage of assets under management (AUM) annually instead of commissions. Uses Class F or fee-based units. Aligns advisor interest with client growth" },

  { id: 153, category: "Evaluating and Selecting Funds", topic: "Fees and Charges", difficulty: "Easy", question: "What is a switch fee?", answer: "A fee charged when moving between funds within the same fund family. Often waived or low fee (1-2%). Different from redemption which exits the fund family entirely" },

  { id: 154, category: "Evaluating and Selecting Funds", topic: "Fees and Charges", difficulty: "Medium", question: "What is the difference between fixed fees and performance-based fees?", answer: "Fixed fees: flat percentage of AUM regardless of performance. Performance-based: additional fee if fund beats benchmark. Performance fees align advisor incentives with client returns but can incentivize excess risk" },

  { id: 155, category: "Evaluating and Selecting Funds", topic: "Fees and Charges", difficulty: "Hard", question: "Compare investing $50,000 in: A) 2% MER, 2% front-end load vs B) 1.5% MER, no load. Assume 6% gross return, 5-year holding period.", answer: "A: $50k - 2% = $49k invested, 4% net = $59,551. B: $50k invested, 4.5% net = $64,773. No-load better despite higher MER due to avoiding upfront fee impact on compounding" },

  // ============ CHAPTER 17: REGULATIONS (Questions 156-163) ============
  { id: 156, category: "Ethics and Compliance", topic: "Regulations", difficulty: "Easy", question: "What is CIRO and when was it formed?", answer: "Canadian Investment Regulatory Organization - the national SRO formed January 1, 2023 from the merger of IIROC and MFDA. Regulates investment dealers, mutual fund dealers, and marketplace trading" },

  { id: 157, category: "Ethics and Compliance", topic: "Regulations", difficulty: "Medium", question: "What is National Instrument 31-103?", answer: "NI 31-103 Registration Requirements, Exemptions and Ongoing Registrant Obligations - the primary regulation governing registration, conduct, and compliance for all registrants in Canada" },

  { id: 158, category: "Ethics and Compliance", topic: "Regulations", difficulty: "Hard", question: "What are the Client Focused Reforms (CFR)?", answer: "Regulatory changes requiring registrants to: 1) Put client's interest first, 2) Address conflicts of interest in client's best interest, 3) Enhanced KYC/KYP/suitability requirements. Came into force 2021" },

  { id: 159, category: "Ethics and Compliance", topic: "Regulations", difficulty: "Medium", question: "What is required to maintain mutual fund dealer registration?", answer: "Complete required proficiency courses (IFC or CIFC), work for a sponsoring member firm, meet continuing education requirements, maintain good conduct, and comply with all regulatory requirements" },

  { id: 160, category: "Ethics and Compliance", topic: "Regulations", difficulty: "Easy", question: "What is the role of provincial securities commissions?", answer: "Regulate securities markets in their province, enforce securities laws, oversee registrants, protect investors, and approve SRO rules (e.g., OSC in Ontario, AMF in Quebec)" },

  { id: 161, category: "Ethics and Compliance", topic: "Regulations", difficulty: "Medium", question: "What is CIPF (Canadian Investor Protection Fund)?", answer: "Protects eligible customers if a CIRO member firm becomes insolvent. Covers up to $1 million per account category for cash and securities (does not protect against market losses)" },

  { id: 162, category: "Ethics and Compliance", topic: "Regulations", difficulty: "Hard", question: "What is the Canadian Securities Administrators (CSA)?", answer: "Umbrella organization of provincial and territorial securities regulators. Coordinates and harmonizes regulation across Canada. Develops national instruments and policies. No federal regulator exists" },

  { id: 163, category: "Ethics and Compliance", topic: "Regulations", difficulty: "Hard", question: "What is the purpose of National Instrument 81-102?", answer: "NI 81-102 governs mutual fund operations: investment restrictions, leverage limits, diversification requirements, derivatives usage, valuation, disclosure requirements" },

  // ============ CHAPTER 18: ETHICAL STANDARDS (Questions 164-200) ============
  { id: 164, category: "Ethics and Compliance", topic: "Ethical Standards", difficulty: "Easy", question: "What are prohibited sales practices for mutual fund representatives?", answer: "Churning (excessive trading), misrepresentation, unsuitable recommendations, accepting discretionary authority without authorization, guaranteeing against losses, sharing in client profits/losses, borrowing from clients" },

  { id: 165, category: "Ethics and Compliance", topic: "Ethical Standards", difficulty: "Medium", question: "What is churning and why is it prohibited?", answer: "Excessive buying and selling in a client's account to generate commissions for the representative, without regard for client's best interests. It's a serious breach of fiduciary duty" },

  { id: 166, category: "Ethics and Compliance", topic: "Ethical Standards", difficulty: "Hard", question: "What are the key principles of the Code of Ethics for mutual fund representatives?", answer: "1) Put client interests first, 2) Act with integrity and honesty, 3) Maintain professionalism and competence, 4) Comply with laws and regulations, 5) Protect confidential information, 6) Avoid conflicts of interest" },

  { id: 167, category: "Ethics and Compliance", topic: "Ethical Standards", difficulty: "Medium", question: "When must suspicious transaction reports be filed?", answer: "Under Anti-Money Laundering (AML) rules, when there are reasonable grounds to suspect a transaction is related to money laundering or terrorist financing, regardless of amount" },

  { id: 168, category: "Ethics and Compliance", topic: "Ethical Standards", difficulty: "Easy", question: "What is the purpose of KYP (Know Your Product)?", answer: "Representatives must understand the features, risks, fees, and characteristics of products they recommend to ensure they are suitable for clients and can properly explain them" },

  { id: 169, category: "Ethics and Compliance", topic: "Ethical Standards", difficulty: "Hard", question: "What are the requirements for handling client complaints?", answer: "Acknowledge promptly (within 5 business days), investigate thoroughly, respond in writing within 90 days, inform client of right to escalate to Ombudsman if dissatisfied, maintain complaint records" },

  { id: 170, category: "Ethics and Compliance", topic: "Ethical Standards", difficulty: "Medium", question: "What is the difference between suitability and appropriateness?", answer: "Suitability: making recommendations appropriate for client's circumstances (applies when providing advice). Appropriateness: assessing client's knowledge/experience before executing order-only trades (no advice given)" },

  { id: 171, category: "Ethics and Compliance", topic: "Ethical Standards", difficulty: "Easy", question: "Can a representative accept gifts from clients?", answer: "Generally prohibited or strictly limited. Most firms have policies limiting gifts/entertainment to token amounts (e.g., under $100) to avoid conflicts of interest" },

  { id: 172, category: "Ethics and Compliance", topic: "Ethical Standards", difficulty: "Medium", question: "What is the privacy obligation regarding client information?", answer: "Must keep all client information confidential, only share with consent or as required by law, implement safeguards to protect data, comply with privacy legislation (PIPEDA)" },

  { id: 173, category: "Ethics and Compliance", topic: "Ethical Standards", difficulty: "Hard", question: "What are material conflicts of interest and how should they be addressed?", answer: "Conflicts that could reasonably influence recommendations (e.g., proprietary products, referral fees). Must be: 1) Identified, 2) Addressed in client's best interest (not just disclosed), 3) Documented" },

  { id: 174, category: "Ethics and Compliance", topic: "Ethical Standards", difficulty: "Medium", question: "What is Anti-Money Laundering (AML) compliance in mutual fund dealing?", answer: "Verification of client identity, source of funds, ongoing monitoring for suspicious transactions. File Suspicious Transaction Reports (STRs) with FINTRAC. Critical for regulatory compliance" },

  { id: 175, category: "Ethics and Compliance", topic: "Ethical Standards", difficulty: "Medium", question: "What is suitability documentation and why is it important?", answer: "Written record of why a product was recommended for specific client. Must be based on KYC, product understanding, and conclusion of suitability. Protects client and firm, required for compliance" },

  { id: 176, category: "Ethics and Compliance", topic: "Ethical Standards", difficulty: "Medium", question: "What are the requirements for handling outside business activities (OBA)?", answer: "Representatives must disclose all OBAs to sponsoring firm and obtain approval. Ensures no conflicts with primary responsibilities, compliance with regulations, and adequate supervision" },

  { id: 177, category: "Ethics and Compliance", topic: "Ethical Standards", difficulty: "Medium", question: "What is the four-eyes principle in compliance?", answer: "Requires two people to review critical transactions or decisions. Reduces error and fraud risk. Common for account openings, large transactions, and sensitive operations" },

  { id: 178, category: "Ethics and Compliance", topic: "Ethical Standards", difficulty: "Hard", question: "What are the requirements for record-keeping by investment dealers?", answer: "Must maintain: client files (KYC, account records), transaction records, correspondence, compliance files, complaints log, trade confirmations for minimum 6 years. Secure storage required" },

  { id: 179, category: "Ethics and Compliance", topic: "Ethical Standards", difficulty: "Hard", question: "What is the Standard of Conduct under Client Focused Reforms?", answer: "When making a suitability determination, registrant must put client's interest first by: 1) Understanding client circumstances, 2) Understanding product, 3) Concluding product is suitable for client's best interests" },

  { id: 180, category: "Ethics and Compliance", topic: "Ethical Standards", difficulty: "Medium", question: "What are the continuing education (CE) requirements for CIRO mutual fund representatives?", answer: "Complete required CE credits per 2-year cycle: typically 30 total credits including compliance credits, business conduct credits. Helps maintain knowledge and professional standards" },

  { id: 181, category: "Ethics and Compliance", topic: "Ethical Standards", difficulty: "Hard", question: "What is the difference between a conflict of interest and perceived conflict of interest?", answer: "Actual conflict: situation that does/could influence decisions against client interest. Perceived conflict: situation that appears problematic even if not. Both must be addressed, not just disclosed" },

  { id: 182, category: "Ethics and Compliance", topic: "Ethical Standards", difficulty: "Medium", question: "What is a relationship disclosure document?", answer: "Document provided to clients explaining: firm's services, products offered, fees and compensation, conflicts of interest, complaint procedures. Updated when material changes occur" },

  { id: 183, category: "Ethics and Compliance", topic: "Ethical Standards", difficulty: "Easy", question: "What is the role of the Ombudsman for Banking Services and Investments (OBSI)?", answer: "Independent dispute resolution service for consumers with complaints against financial firms. Free to consumers, can recommend compensation up to $350,000. Final recourse if firm doesn't resolve complaint" },

  { id: 184, category: "Ethics and Compliance", topic: "Ethical Standards", difficulty: "Hard", question: "A client hints that they'd like the advisor to hide some income on tax return. What should you do?", answer: "Refuse absolutely. Cannot assist with tax evasion or fraud. Maintain professional boundaries, advise them to consult with tax accountant, document refusal. May need to report depending on circumstances" },

  { id: 185, category: "Ethics and Compliance", topic: "Ethical Standards", difficulty: "Medium", question: "What is the difference between registration and licensing?", answer: "Licensing: provincial authority to sell specific products. Registration: with regulator and SRO (CIRO) to conduct securities business. Need both - education, employment with member firm, compliance" },

  { id: 186, category: "Ethics and Compliance", topic: "Ethical Standards", difficulty: "Medium", question: "What is a Compliance Officer's role at a mutual fund firm?", answer: "Oversees regulatory compliance, investigates violations, ensures staff training, manages audits, handles client complaints escalation, maintains compliance policies, reports to CIRO/regulators" },

  { id: 187, category: "Ethics and Compliance", topic: "Ethical Standards", difficulty: "Hard", question: "What is the difference between fiduciary duty and suitability obligation?", answer: "Fiduciary duty: highest duty to act in client's best interest (all circumstances). Suitability: ensuring investment is appropriate for client's profile. Fiduciary duty is broader and more stringent" },

  { id: 188, category: "Ethics and Compliance", topic: "Ethical Standards", difficulty: "Medium", question: "How should representatives handle client pressure for unsuitable investments?", answer: "Document in writing, explain risks and why unsuitable, offer suitable alternatives, escalate to compliance if necessary, do not proceed if truly unsuitable. Protect both client and firm" },

  { id: 189, category: "Ethics and Compliance", topic: "Ethical Standards", difficulty: "Hard", question: "What are the key aspects of suitability assessment according to CFR?", answer: "1) Know the client (financial circumstances, investment experience, investment objectives, risk tolerance), 2) Know the product (features, risks, costs), 3) Determine suitability in client's best interest" },

  { id: 190, category: "Ethics and Compliance", topic: "Ethical Standards", difficulty: "Medium", question: "What is the 'most suitable' vs 'suitable' investment?", answer: "Suitable: meets client's objectives and risk profile. Most suitable: best option among all suitable investments. Must select most suitable that aligns with client's specific circumstances" },

  // ============ FINAL ADVANCED SCENARIO QUESTIONS (191-200) ============
  { id: 191, category: "Introduction to Mutual Funds Marketplace", topic: "Economics", difficulty: "Hard", question: "What is the Canadian dollar exchange rate impact on mutual fund performance?", answer: "Stronger CAD: reduces returns on foreign investments (conversion headwind). Weaker CAD: increases returns on foreign investments (conversion benefit). Currency-hedged funds reduce this impact" },

  { id: 192, category: "Know Your Client Communication", topic: "Client Profiling", difficulty: "Hard", question: "How do life stage and family situation affect investment recommendations?", answer: "Young/Single: higher risk tolerance, longer horizon, growth-focused. Married with children: moderate risk, education planning, insurance needs. Nearing retirement: lower risk, income focus, capital preservation" },

  { id: 193, category: "Understanding Investment Products", topic: "Investment Products", difficulty: "Hard", question: "What is the impact of inflation on real returns?", answer: "Nominal return is stated return. Real return = Nominal return - Inflation rate. Conservative investments may not keep pace with inflation, eroding purchasing power over time" },

  { id: 194, category: "Modern Mutual Fund", topic: "Mutual Fund Structure", difficulty: "Hard", question: "What happens to a mutual fund during market stress or redemption crisis?", answer: "Fund may restrict redemptions, implement redemption fees, suspend distribution. Worst case: suspension if cannot meet redemptions. Liquidity risk increases during market turmoil" },

  { id: 195, category: "Analysis of Mutual Funds", topic: "Equity Funds", difficulty: "Hard", question: "How does sector rotation strategy work in equity fund management?", answer: "Managers shift allocation among sectors based on economic cycle stage. Example: move to defensive stocks in recession, cyclicals in recovery, tech/growth in expansion. Attempts to optimize returns" },

  { id: 196, category: "Evaluating and Selecting Funds", topic: "Fund Performance", difficulty: "Hard", question: "What is survivorship bias and how does it affect fund performance data?", answer: "Tendency to only include surviving funds in performance statistics, excluding poor performers that closed. Overstates average fund performance. Important to consider when evaluating historical data" },

  { id: 197, category: "Evaluating and Selecting Funds", topic: "Fees and Charges", difficulty: "Hard", question: "What is the total cost of ownership for a mutual fund over 10 years?", answer: "Include: front-end load, annual MER, sales tax, redemption fees, impact of fees on compound returns. Can reduce final value by 20-40% depending on fee structure and performance" },

  { id: 198, category: "Ethics and Compliance", topic: "Ethical Standards", difficulty: "Hard", question: "What is the advertising and marketing compliance for mutual fund representatives?", answer: "All marketing materials must: be fair, balanced, not misleading, include risk disclosure, be approved by compliance, include contact information, comply with CIRO/NI 31-103, not guarantee returns" },

  { id: 199, category: "Ethics and Compliance", topic: "Regulations", difficulty: "Hard", question: "What is the enforcement process if a representative violates regulations?", answer: "Investigation by CIRO/provincial regulator, disciplinary hearing, possible sanctions: fine, suspension, revocation of license, restitution, public reprimand, criminal charges if fraud" },

  { id: 200, category: "Introduction to Mutual Funds Marketplace", topic: "Economics", difficulty: "Hard", question: "How do interest rate changes affect different asset classes in a portfolio?", answer: "Bonds: inverse relationship (rates up = prices down). Stocks: mixed impact (rates up = discounted cash flows lower, but may reduce economic growth). Cash: direct positive relationship (rates up = higher returns)" },

  { id: 201, category: "Know Your Client Communication", topic: "Client Profiling", difficulty: "Hard", question: "Sarah, 28, just inherited $150,000. She's single, earns $65,000/year as a teacher, has no debt, and says she wants to 'invest aggressively for quick gains.' How should you proceed?", answer: "Complete thorough KYC, assess risk tolerance and product knowledge, prioritize an emergency fund, then propose a diversified portfolio with a growth tilt appropriate to her profile; educate on long-term investing vs speculation." },

  { id: 202, category: "Know Your Client Communication", topic: "Client Profiling", difficulty: "Hard", question: "A 55-year-old client with $800,000 in RRSPs wants to move everything to cryptocurrency ETFs because 'crypto is the future.' What are your obligations?", answer: "Do not recommend an unsuitable concentrated allocation; explain volatility and concentration risk, consider a small alternatives sleeve only if appropriate, document advice, and decline if the client refuses suitable options." },

  { id: 203, category: "Know Your Client Communication", topic: "Behavioral Finance", difficulty: "Medium", question: "Your client calls panicking during a 15% market drop, wanting to sell all equity funds and move to cash after 6 months invested. How do you handle this?", answer: "Acknowledge emotions, revisit goals and horizon, explain normal volatility and the cost of panic selling; if misaligned, consider gradual rebalancing rather than wholesale liquidation." },

  { id: 204, category: "Know Your Client Communication", topic: "Tax and Retirement Planning", difficulty: "Hard", question: "A 45-year-old client has maxed RRSP and TFSA and has $50,000 to invest in a 43% tax bracket. What’s your recommendation?", answer: "Use tax‑efficient non‑registered options: Canadian dividend funds, capital‑gains‑oriented strategies, corporate‑class structures; avoid interest-heavy funds; consider spousal TFSA if room exists." },

  { id: 205, category: "Know Your Client Communication", topic: "Client Profiling", difficulty: "Medium", question: "A retired couple (67, 65) with $1.2M wants 100% equities 'to beat inflation.' How do you respond?", answer: "Explain sequence‑of‑returns risk, recommend a balanced mix (e.g., 40–60% equities, laddered fixed income, real‑return/REIT sleeve) to address inflation with capital preservation." },

  { id: 206, category: "Ethics and Compliance", topic: "Ethical Standards", difficulty: "Hard", question: "A long‑term client offers you $5,000 cash for 'excellent service' after a large investment. Policy limits gifts to $100. What should you do?", answer: "Politely decline, explain policy and conflict concerns, document the incident, notify compliance, and suggest acceptable alternatives such as testimonials or referrals." },

  { id: 207, category: "Ethics and Compliance", topic: "Ethical Standards", difficulty: "Hard", question: "You learn a colleague pushes higher‑fee proprietary funds when lower‑cost equivalents exist. What is your obligation?", answer: "Escalate with documentation to compliance; avoid direct confrontation; client‑first and suitability standards must be upheld and investigated." },

  { id: 208, category: "Ethics and Compliance", topic: "Regulations", difficulty: "Medium", question: "A client asks you to make trades without documentation because they 'trust you completely.' How do you respond?", answer: "Explain mandatory documentation, no discretionary authority without written approval, and proceed only in full compliance to protect the client." },

  { id: 209, category: "Ethics and Compliance", topic: "Ethical Standards", difficulty: "Hard", question: "During KYC, a client mentions a cash‑heavy business but is evasive about details. Are there AML red flags?", answer: "Yes—cash intensity and evasiveness warrant enhanced due diligence and source‑of‑funds verification; file an STR if suspicions persist; do not proceed without complete KYC." },

  { id: 210, category: "Ethics and Compliance", topic: "Regulations", difficulty: "Medium", question: "A client threatens legal action after losses and claims you guaranteed returns. How to proceed?", answer: "Document the complaint, notify compliance, review records, respond within prescribed timelines, clarify risks, and provide OBSI details if unresolved." },

  { id: 211, category: "Understanding Investment Products", topic: "Investment Products", difficulty: "Hard", question: "Rates rose 0.75%. A bond fund’s duration is 7 years. What’s the expected impact?", answer: "Approximate price decline of ~5.25%; explain duration effects, eventual benefit from reinvestment at higher yields, and discourage panic selling." },

  { id: 212, category: "Understanding Investment Products", topic: "Portfolio Construction", difficulty: "Medium", question: "Portfolio: 40% Canada equity, 40% U.S. equity, 20% Canada bonds; CAD strengthens 10% vs USD. Impact?", answer: "About a 4% portfolio drag from currency on the 40% U.S. sleeve; discuss hedged vs unhedged funds and long‑term perspective." },

  { id: 213, category: "Understanding Investment Products", topic: "Financial Statements", difficulty: "Hard", question: "A company shows 20% revenue growth but 15% profit decline; stock down 25%. Concern?", answer: "Investigate margin compression or one‑offs; diversified fund exposure limits single‑name risk; review manager’s thesis and actions." },

  { id: 214, category: "Understanding Investment Products", topic: "Investment Products", difficulty: "Medium", question: "Client wants preferred shares for 'guaranteed dividends.' What to explain?", answer: "Dividends can be suspended; preferreds are rate‑sensitive with limited upside and issuer credit risk; suitable for informed income investors." },

  { id: 215, category: "Understanding Investment Products", topic: "Portfolio Construction", difficulty: "Hard", question: "Stock‑bond correlation spikes to 0.8 during stress. Diversification impact?", answer: "Diversification benefits diminish; consider alternatives (commodities, REITs, market‑neutral) and maintain rebalancing discipline as correlations normalize." },

  { id: 216, category: "Analysis of Mutual Funds", topic: "Equity Funds", difficulty: "Hard", question: "A growth fund lags its benchmark by 3% annually for 3 years, same manager. Assessment?", answer: "Review for style drift, MER drag, asset bloat, process deterioration; persistent lag suggests replacement absent compelling rationale." },

  { id: 217, category: "Analysis of Mutual Funds", topic: "Conservative Funds", difficulty: "Medium", question: "Money market yields 2.5% while inflation is 4.5%. Client wants 'safety.' Options?", answer: "Short‑term bonds, GIC ladder, real‑return bonds, HISA, modest dividend sleeve to balance safety and inflation erosion." },

  { id: 218, category: "Analysis of Mutual Funds", topic: "Equity Funds", difficulty: "Hard", question: "EM fund down 30% vs developed markets down 10%; client wants to sell. Advice?", answer: "Explain higher EM volatility and recovery potential; avoid locking in losses; trim gradually if over‑allocated; consider DCA with long horizon." },

  { id: 219, category: "Analysis of Mutual Funds", topic: "Equity Funds", difficulty: "Medium", question: "A 60/40 fund drifts to 75/25 after an equity rally. Rebalance?", answer: "Yes—restore target risk via sales, directing new contributions, or auto‑rebalancing; weigh taxes and costs." },

  { id: 220, category: "Analysis of Mutual Funds", topic: "Conservative Funds", difficulty: "Hard", question: "Bond fund holds 30% high‑yield; credit spreads widening. What to expect?", answer: "Likely underperformance vs government bonds; if stability is priority, move to IG; otherwise accept volatility for income potential." },

  { id: 221, category: "Evaluating and Selecting Funds", topic: "Fund Performance", difficulty: "Hard", question: "Fund A: 10% return, 15% SD; Fund B: 8% return, 10% SD; risk‑free 3%. Which is better risk‑adjusted?", answer: "Sharpe A ≈ 0.47, B ≈ 0.50; Fund B is superior risk‑adjusted; also consider alpha, MER, fit, and consistency." },

  { id: 222, category: "Evaluating and Selecting Funds", topic: "Fees and Charges", difficulty: "Hard", question: "$100k in DSC (5.5% penalty, 2.8% MER) vs F‑class at 1.8% MER; 5+ year hold. Analysis?", answer: "Break‑even ≈ 5.5 years; over 5+ years, F‑class likely saves materially; recommend switch if horizon is firm and document." },

  { id: 223, category: "Evaluating and Selecting Funds", topic: "Fund Selection", difficulty: "Medium", question: "Fund X (15‑year manager, 2.1% MER) vs Fund Y (new manager, 1.6% MER). Evaluation?", answer: "Tenure favors X; MER favors Y; assess manager change rationale, process stability, and multi‑period consistency before choosing." },

  { id: 224, category: "Evaluating and Selecting Funds", topic: "Fund Performance", difficulty: "Hard", question: "1‑year top quartile but 3/5‑year bottom quartile. Red flags?", answer: "Yes—possible style drift, risk changes, or luck; prefer consistent long‑term records unless a credible process upgrade is proven." },

  { id: 225, category: "Evaluating and Selecting Funds", topic: "Fees and Charges", difficulty: "Medium", question: "Client calls MER 'hidden' after seeing daily deduction. How to explain?", answer: "MER is disclosed and reflected in NAV; it funds management/operations/advice; compare to DIY costs; review Fund Facts together." },

  { id: 226, category: "Modern Mutual Fund", topic: "Mutual Fund Structure", difficulty: "Hard", question: "Two funds are merging; client owns both. Implications?", answer: "New objectives/MER/manager; potential tax events in non‑registered accounts; holdings typically auto‑convert; confirm continued suitability." },

  { id: 227, category: "Alternative Managed Products", topic: "Alternative Investments", difficulty: "Hard", question: "Client wants 40% gold ETF as a 'safe haven.' Response?", answer: "Excessive concentration; suggest 5–10% max; consider broader commodities or real‑return bonds; gold complements diversification, not replaces it." },

  { id: 228, category: "Ethics and Compliance", topic: "Regulations", difficulty: "Hard", question: "A new CIRO rule you don’t fully understand affects your clients. Obligation?", answer: "Pause affected activity, study official guidance, attend training, consult compliance/legal, and resume only when fully compliant." },

  { id: 229, category: "Know Your Client Communication", topic: "Tax and Retirement Planning", difficulty: "Hard", question: "Age 69 client wants $75k RRSP withdrawal for renovations. Discuss?", answer: "RRSP withdrawals fully taxable; consider splitting over years, TFSA first, HELOC, or staged RRIF; manage brackets and timing." },

  { id: 230, category: "Understanding Investment Products", topic: "Portfolio Construction", difficulty: "Hard", question: "Advisor suggests 80% real estate funds because 'it always goes up.' Assessment?", answer: "Concentration risk; real estate is cyclical; propose diversified multi‑asset allocation with a modest real‑estate sleeve." },

  { id: 231, category: "Ethics and Compliance", topic: "Ethical Standards", difficulty: "Hard", question: "Fee‑based clients are in Class A with trailers instead of Class F. What do you do?", answer: "Report immediately; clients are double‑paying; firm must rectify and compensate; document and escalate if not addressed." },

  { id: 232, category: "Know Your Client Communication", topic: "Client Profiling", difficulty: "Hard", question: "HNW client wants $2M (40%) in one EM fund for 'diversification.' Suitable?", answer: "No—excessive concentration in a volatile asset; suggest 10–15% within a broader international sleeve; document if they insist." },

  { id: 233, category: "Understanding Investment Products", topic: "Investment Products", difficulty: "Medium", question: "Tech up 45%; balanced fund up 15%; client wants to chase tech. Response?", answer: "Explain performance chasing bias; consider a small tactical tilt if appropriate; maintain IPS discipline and risk controls." },

  { id: 234, category: "Evaluating and Selecting Funds", topic: "Fund Performance", difficulty: "Hard", question: "Manager has personal legal issues; fund performance steady. How to handle?", answer: "Monitor stability, succession, and operations risk; keep clients informed; switch if impairment risk rises or performance suffers." },

  { id: 235, category: "Alternative Managed Products", topic: "Alternative Investments", difficulty: "Medium", question: "Age 72 client considers seg‑fund reset; fund up 25%. Reset?", answer: "Resets lock in a higher guarantee; weigh health, liquidity, and new 10‑year clock; often beneficial for long‑term estate goals." },

  { id: 236, category: "Modern Mutual Fund", topic: "Mutual Fund Structure", difficulty: "Hard", question: "Small‑cap fund is closing due to redemptions. What happens?", answer: "Notice, liquidation, and cash distribution at final NAV (taxable if non‑registered); select a replacement and review allocation." },

  { id: 237, category: "Analysis of Mutual Funds", topic: "Conservative Funds", difficulty: "Medium", question: "Client fears rising rates; bond duration is 8. Strategies?", answer: "Shift to shorter duration, ladder, floating‑rate, or real‑return bonds; maintain some bonds for stability; long‑run yields improve." },

  { id: 238, category: "Ethics and Compliance", topic: "Regulations", difficulty: "Hard", question: "Client asks to backdate an order to get a lower price. Response?", answer: "Refuse; it’s illegal and unethical; document request and refusal; inform compliance if they persist." },

  { id: 239, category: "Evaluating and Selecting Funds", topic: "Fund Selection", difficulty: "Medium", question: "Client wants to invest in friend’s new fund with no track record. Evaluate?", answer: "High risk; review team, process, fees; if proceeding, cap at a small speculative allocation and document risks." },

  { id: 240, category: "Know Your Client Communication", topic: "Behavioral Finance", difficulty: "Hard", question: "Client made 15 switches in 2 months based on news. Intervention?", answer: "Quantify costs, compare to staying the course, implement cooling‑off rules and scheduled rebalancing, reinforce IPS discipline." },

  { id: 241, category: "Understanding Investment Products", topic: "Financial Statements", difficulty: "Hard", question: "Earnings are strong but operating cash flow is negative; manager is adding. Concern?", answer: "Investigate earnings quality, capex, and working capital; diversified fund limits single‑name risk; monitor manager’s thesis." },

  { id: 242, category: "Analysis of Mutual Funds", topic: "Equity Funds", difficulty: "Medium", question: "Canadian equity fund has 45% financials. Is this diversified?", answer: "Overconcentrated; Canada skews to financials, but 45% is high; add other sectors/funds; target <25–30% in any single sector." },

  { id: 243, category: "Evaluating and Selecting Funds", topic: "Fees and Charges", difficulty: "Hard", question: "Fund MER rose from 1.8% to 2.1% mid‑year without notice. Normal?", answer: "Unusual; investigate cause and disclosures; clients may redeem if material change; escalate if process breached." },

  { id: 244, category: "Modern Mutual Fund", topic: "Mutual Fund Structure", difficulty: "Medium", question: "NAVPS fell 5% overnight with no market move. Why?", answer: "Likely a distribution; also possible hedging adjustment or large redemption; verify notices; total return likely unchanged post‑payout." },

  { id: 245, category: "Ethics and Compliance", topic: "Ethical Standards", difficulty: "Medium", question: "Client considers discount brokerage to reduce fees. Professional response?", answer: "Explain advice value (planning, suitability, discipline, tax), respect their choice, and assist a professional transition if they move." },

  { id: 246, category: "Alternative Managed Products", topic: "Alternative Investments", difficulty: "Hard", question: "Private equity fund: $250k minimum, 7‑year lock. Suitable?", answer: "Only for accredited clients who accept illiquidity and loss risk; cap allocation (<10%), disclose fees/risks, and confirm fit." },

  { id: 247, category: "Know Your Client Communication", topic: "Tax and Retirement Planning", difficulty: "Hard", question: "Business owner wants HoldCo investing for tax efficiency. Considerations?", answer: "Passive income rules, RDTOH, integration frictions, complexity/cost; often better to invest personally; involve tax professionals." },

  { id: 248, category: "Understanding Investment Products", topic: "Portfolio Construction", difficulty: "Hard", question: "Correlations rose from 0.6 to 0.95 in stress. Explain and adjust?", answer: "Crisis spikes are normal; maintain diversification and rebalance; consider uncorrelated sleeves like market‑neutral or alternatives." },

  { id: 249, category: "Analysis of Mutual Funds", topic: "Equity Funds", difficulty: "Hard", question: "ESG fund underperforms by 2% annually; client questions 'cost of values.' Response?", answer: "Revisit goals; ESG may reduce risks longer term; consider broader ESG options and ensure alignment of values vs return objectives." },

  { id: 250, category: "Evaluating and Selecting Funds", topic: "Fund Performance", difficulty: "Hard", question: "Fund is under regulatory investigation; performance is still good. Duty?", answer: "Inform clients, monitor developments, document decisions, consider alternatives, and exit if client harm risk rises; client interest first." },

  { id: 251, category: "Modern Mutual Fund", topic: "Mutual Fund Structure", difficulty: "Hard", question: "A fund has assets of $250M, liabilities of $8M, and 20M units outstanding. If the fund charges a 2.5% MER annually, what is the current NAVPS and daily MER charge?", answer: "NAVPS = ($250M - $8M) ÷ 20M = $12.10 per unit. Daily MER charge = (2.5% ÷ 365) × $12.10 = $0.000831 per unit per day or about $16,620 total daily" },

  { id: 252, category: "Evaluating and Selecting Funds", topic: "Fund Performance", difficulty: "Hard", question: "Fund A returns 8% with 12% standard deviation. Fund B returns 6% with 8% standard deviatioe is 2.5%. Calculate and compare Sharpe ratios.", answer: "Fund A Sharpe = (8% - 2.5%) ÷ 12% = 0.458. Fund B Sharpe = (6% - 2.5%) ÷ 8% = 0.438. Fund A has slightly better risk-adjusted returns" },

  { id: 253, category: "Know Your Client Communication", topic: "Tax and Retirement Planning", difficulty: "Medium", question: "Client invests $50,000 in RRSP (gets $20,000 tax refund at 40% rate). After 15 years at 6% annual growth, what's the pre-tax value and tax owing on full withdrawal?", answer: "Future value = $50,000 × (1.06)^15 = $119,717. Tax owing at 40% = $119,717 × 0.40 = $47,887. Net after-tax = $71,830" },

  { id: 254, category: "Evaluating and Selecting Funds", topic: "Fees and Charges", difficulty: "Hard", question: "DSC fund: $100,000 initial, 5% penalty Year 1, declining 1% annually. MER 2.8%. Compare to No-Load fund with 1.5%MER over 5 years at 7% gross return.", answer: "DSC: Net return = 4.2%, Value = $122,867. No-Load: Net return = 5.5%, Value = $131,384. No-Load wins by $8,517 despite no switching penalty paid" },

  { id: 255, category: "Understanding Investment Products", topic: "Investment Products", difficulty: "Medium", question: "Bond with 4% coupon, 8 years to maturity, duration 6.5. Interest rates rise 1.25%. Calculate approximateprice change.", answer: "Price change ≈ -Duration × Rate change = -6.5 × 1.25% = -8.125% price decline. If bond was $1,000, new price ≈ $918.75" },

  { id: 256, category: "Modern Mutual Fund", topic: "Mutual Fund Structure", difficulty: "Medium", question: "Fund declares $0.75 distribution on 5M units outstanding. NAVPS before distribution is $18.50. What's the new NAVPS after distribution?", answer: "New NAVPS = $18.50 -$0.75 = $17.75. Total distribution paid = $0.75 × 5M = $3.75M reduces fund assets by this amount" },

  { id: 257, category: "Know Your Client Communication", topic: "Tax and Retirement Planning", difficulty: "Hard", question: "Client has $75,000 TFSA room, contributes $80,000. What's the penalty and how long to correct?", answer: "Over-contribution = $5,000. Penalty = 1% per month on excess = $50/month until withdrawn. Must withdraw excess ASAP to stop penalty accumulation" },

  { id: 258, category: "Evaluating and Selecting Funds", topic: "Fund Performance", difficulty: "Hard", question: "Fund has Beta of 1.4, Alpha of 2%, R-squared of 0.85. Market return is 10%, risk-free rate 3%. Calculate expected return and explain R-squared.", answer: "Expected return = 3% + 1.4(10% - 3%) = 12.8%. Actual return with Alpha = 14.8%. R-squared 0.85 means 85% of fund's movement explained by market" },

  { id: 259, category: "Analysis of Mutual Funds", topic: "Conservative Funds", difficulty: "Medium", question: "Money market fund yields 3.2% when inflation is 4.8%. Client invests $500,000. What's the real return and purchasing powerloss after one year?", answer: "Real return = 3.2% - 4.8% = -1.6%. Purchasing power loss = $500,000 × 1.6% = $8,000. Nominal value = $516,000 but real value = $492,000" },

  { id: 260, category: "Understanding Investment Products", topic: "Portfolio Construction", difficulty: "Hard", question: "Portfolio: $400,000 (60% stocks, 40% bonds). Stocks gain 15%, bonds lose 5%. Calculate new values and allocation without rebalancing.", answer: "Stocks: $240,000 × 1.15 = $276,000. Bonds: $160,000 × 0.95 = $152,000. New total = $428,000. New allocation = 64.5% stocks, 35.5% bonds" },

  { id: 261, category: "Evaluating and Selecting Funds", topic: "Fees and Charges", difficulty: "Medium", question: "Front-end load 4%, MER 2.2% vs No-load with 2.7% MER. Investment $25,000, hold 8 years, 8% gross return. Which is better?", answer: "Front-end: Invested = $24,000, net return = 5.8%, final = $39,445. No-load: Invested = $25,000, net return = 5.3%, final = $38,081. Front-end wins by $1,364" },

  { id: 262, category: "Know Your Client Communication", topic: "Tax and Retirement Planning", difficulty: "Hard", question: "Age 71 client must convert $800,000 RRSP to RRIF. Minimum withdrawal rate Year 1 is 5.28%. What's minimum withdrawaland tax at 35% rate?", answer: "Minimum withdrawal = $800,000 × 5.28% = $42,240. Tax owing = $42,240 × 35% = $14,784. Net after-tax income = $27,456" },

  { id: 263, category: "Understanding Investment Products", topic: "Investment Products", difficulty: "Hard", question: "Preferred share pays $3.75 dividend, current price $62. New issue rate for similar preferreds is 5.5%. What should the preferred trade at?", answer: "Fair value = $3.75 ÷ 5.5% = $68.18. Current yield = $3.75 ÷ $62 = 6.05%. Preferred is undervalued by about $6.18 or 10%" },

  { id: 264, category: "Analysis of Mutual Funds", topic: "Equity Funds", difficulty: "Medium", question: "Global fund: 40% Canadian (CAD), 35% US (USD), 25% Europe (EUR). CAD strengthens 8% vs USD, weakens 3% vs EUR. Currency impact on returns?", answer: "USportion: -8% currency impact on 35% = -2.8%. Europe portion: +3% currency impact on 25% = +0.75%. Net currency impact = -2.05% portfolio drag" },

  { id: 265, category: "Modern Mutual Fund", topic: "Mutual Fund Structure", difficulty: "Hard", question: "Fund merger: Fund A (12M units at $15 NAVPS), Fund B (8M units at $22 NAVPS). Merger ratio 0.68:1 (A to B). How many B units do A shareholders receive?", answer: "Fund A shareholders get 12M × 0.68 = 8.16M units of Fund B. Total combined units = 8M + 8.16M = 16.16M units in surviving Fund B" },

  { id: 266, category: "Evaluating and Selecting Funds", topic: "Fund Performance", difficulty: "Hard", question: "Fund tracking error is 4.2%, Alpha is 1.8%. Calculate Information Ratio and interpret the result.", answer: "Information Ratio = Alpha÷ Tracking Error = 1.8% ÷ 4.2% = 0.43. This shows moderate skill - generating 0.43% excess return per unit of tracking error taken" },

  { id: 267, category: "Know Your Client Communication", topic: "Tax and Retirement Planning", difficulty: "Medium", question: "Capital loss carryforward $15,000. Current year capital gains $8,000, dividend income $12,000. What's taxable income from investments?", answer: "Capital gains offset by losses: $8,000 - $8,000 = $0. Remaining loss carryforward = $7,000. Dividend income fully taxable = $12,000. Total taxable = $12,000" },

  { id: 268, category: "Understanding Investment Products", topic: "Financial Statements", difficulty: "Hard", question: "Company shows: Current assets $500M, Current liabilities $300M, Inventory $180M, Total debt $800M, Equity $400M. Calculate current ratio, quick ratio, and debt-to-equity.", answer: "Current ratio = $500M ÷ $300M = 1.67. Quick ratio = ($500M - $180M) ÷ $300M = 1.07. Debt-to-equity = $800M ÷ $400M = 2.0" },

  { id: 269, category: "Analysis of Mutual Funds", topic: "Conservative Funds", difficulty: "Medium", question: "Bond ladder: $200,000 split equally into 1, 2, 3, 4, 5-year bonds at 4%, 4.5%, 5%, 5.5%, 6% respectively. What'sweighted average yield?", answer: "Each bond = $40,000. Weighted yield = (4% + 4.5% + 5% + 5.5% + 6%) ÷ 5 = 5.0% average yield across the ladder" },

  { id: 270, category: "Alternative Managed Products", topic: "Alternative Investments", difficulty: "Hard", question: "Segregated fund: $100,000 initial, 75% maturity guarantee after 10 years. Fund grows to $140,000 after 8 years, then drops to $65,000 at maturity. What does investor receive?", answer: "Guaranteed amount = $100,000 × 75% = $75,000. Fund value at maturity = $65,000. Investor receives the higher amount = $75,000 guaranteed minimum" },

  { id: 271, category: "Evaluating and Selecting Funds", topic: "Fees and Charges", difficulty: "Medium", question: "Fund with $50M assets, 2.1% MER. Management fee 1.5%, operating expenses 0.4%, trailer fees 0.2%. What's total annual cost and cost per $1,000 invested?", answer: "Total MER = 1.5% + 0.4% + 0.2% = 2.1%. Annual cost = $50M × 2.1% = $1.05M. Cost per $1,000 = $1,000 × 2.1% = $21 annually" },

  { id: 272, category: "Know Your Client Communication", topic: "Tax and Retirement Planning", difficulty: "Hard", question: "Spousal RRSP: Contributor spouse in 45% tax bracket contributes $18,000. 3 years later, annuitant spouse (25% bracket) withdraws $5,000. Tax implications?", answer: "Contribution saves $18,000 × 45% = $8,100 in taxes. Withdrawal attribution rule applies (less than 3 years). $5,000 taxed to contributor at 45% = $2,250 tax" },

  { id: 273, category: "Understanding Investment Products", topic: "Portfolio Construction", difficulty: "Hard", question: "Target allocation 70% equity, 30% bonds. Portfolio drifts to 78% equity due to growth. Need to rebalance $500,000 portfolio. How much to sell/buy?", answer: "Current: $390,000 equity, $110,000 bonds. Target: $350,000 equity, $150,000 bonds. Sell $40,000 equity, buy $40,000 bonds to rebalance" },

  { id: 274, category: "Modern Mutual Fund", topic: "Mutual Fund Structure", difficulty: "Medium", question: "Fund pays quarterly distribution $0.25/unit. NAVPS drops from $20.00 to $19.75 on ex-dividend date. Client owns 5,000 units. What do they receive?", answer: "Distribution received = 5,000 units × $0.25 = $1,250. NAVPS drop exactly equals distribution, so total value unchanged: (5,000 × $19.75) + $1,250 = $100,000" },

  { id: 275, category: "Analysis of Mutual Funds", topic: "Equity Funds", difficulty: "Hard", question: "Value fund P/E ratio 12, dividend yield 4.2%. Growth fund P/E ratio 28, dividend yield 0.8%. Market P/E is 18. Which isexpensive relative to market?", answer: "Value fund: 12 ÷ 18 = 0.67 (33% cheaper than market). Growth fund: 28 ÷ 18 = 1.56 (56% premium to market). Growth fund is relatively expensive" },

  { id: 276, category: "Ethics and Compliance", topic: "Regulations", difficulty: "Hard", question: "Under Client Focused Reforms, what are the three key obligations when addressing conflicts of interest?", answer: "1) Identify all material conflicts, 2) Address conflicts in the client's best interest (not just disclose), 3) Document how conflicts were addressed and monitor ongoing" },

  { id: 277, category: "Ethics and Compliance", topic: "Regulations", difficulty: "Medium", question: "NI 31-103 requires KYC updates. What triggers a mandatory KYC review?", answer: "Significant changes in client circumstances, complaints about suitabry request, material changes in investment objectives, at least every 36 months, or when opening new account types" },

  { id: 278, category: "Ethics and Compliance", topic: "Ethical Standards", difficulty: "Hard", question: "AML suspicious transaction report (STR) - what dollar threshold triggers mandatory reporting and to whom?", answer: "No dollar threshold - based on reasonable suspicion of money laundering/terrorist financing regardless of amount. Report to FINTRAC within prescribed timelines. Cannot tip off client about STR filing" },

  { id: 279, category: "Ethics and Compliance", topic: "Regulations", difficulty: "Medium", question: "CIRO complaint handling: What are the required response timelines?", answer: "Acknowledge complaintwithin 5 business days,complete investigation and provide written response within 90 days, inform client of OBSI escalation rights if dissatisfied with resolution" },

  { id: 280, category: "Ethics and Compliance", topic: "Ethical Standards", difficulty: "Hard", question: "What constitutes 'enhanced due diligence' under AML requirements?", answer: "Additional identity verification, source of wealth/funds documentation, increased monitoring, senior management approval, more frequent KYC updates, third-party references, understanding business operations if applicable" },

  { id: 281, category: "Ethics and Compliance", topic: "Regulations", difficulty: "Medium", question: "Under what circumstances can a representative accept discretionary authority over client accounts?", answer: "Writtenclient authorization, firm compliance approval, appropriate registration category, suitable supervision arrangements, documented investment policy, ability for client to revoke anytime" },

  { id: 282, category: "Ethics and Compliance", topic: "Ethical Standards", difficulty: "Hard", question: "What are the recordkeeping requirements for investment dealers under CIRO rules?", answer: "Maintain all recordsminimum 6 years, securestorage, client files (KYC, correspondence, complaints), transaction records, compliance documentation, readily accessible for regulatory inspection" },

  { id: 283, category: "Ethics and Compliance", topic: "Regulations", difficulty: "Medium", question: "What triggers a 'material change' requiring updated Fund Facts delivery?", answer: "Change in investment objectives, management company change, significant fee increases, fundamental alteration of risk profile, merger/reorganization, change in redemption terms" },

  { id: 284, category: "Ethics and Compliance", topic: "Ethical Standards", difficulty: "Hard", question: "Under CFR, what constitutes putting the client's interest first in conflict situations?", answer: "Avoid conflicts where possible, select best available product amongsuitable options, transparent disclosure insufficient alone, document decision rationale, ongoing monitoring of conflicts and their resolution" },

  { id: 285, category: "Ethics and Compliance", topic: "Regulations", difficulty: "Medium", question: "What are the continuing education requirements for CIRO registered representatives?", answer: "30 CE credits per 2-year cycle, including compliance and business conduct credits, participate in firm training programs, maintain competency, report completion to regulator" },

  { id: 286, category: "Ethics and Compliance", topic: "Ethical Standards", difficulty: "Hard", question: "What constitutes market manipulation in mutual fund transactions?", answer: "Artificial pricing, coordinated trading, spreading false information,             late trading            , market tim            ing schemes, front-running, improper use of material non-public information" },

  { id: 287, category: "Ethics and Compliance", topic: "Regulations", difficulty: "Medium", question: "Under NI 31-103, what personal trading restrictions apply to registrants?", answer: "Pre-clearance of personal trades, disclosure of holdings, prohibition on trading ahe            ad of client             orders, bla            ckout periods, reporting requirements, avoiding conflicts with client interests" },

  { id: 288, category: "Ethics and Compliance", topic: "Ethical Standards", difficulty: "Hard", question: "What are the key elements of an effective compliance system?", answer: "Policies and procedures manual, designated compliance officer, regular             training, mo            nitoring sys            tems, audit trails, incident reporting, disciplinary procedures, regulatory liaison" },

  { id: 289, category: "Ethics and Compliance", topic: "Regulations", difficulty: "Medium", question: "What information must be disclosed in a relationship disclosure document?", answer: "Services offered, product types available, fee structures, compensation methods,             conflicts o            f interest,             complaint procedures, regulatory information, contact details for oversight body" },

  { id: 290, category: "Ethics and Compliance", topic: "Ethical Standards", difficulty: "Hard", question: "Under what circumstances must a representative decline a client order?", answer: "Unsuitable for client profile, insufficient documentation, suspe            cted money l            aundering, e            xceeds position limits, violates regulations, client lacks capacity, conflicts with firm policy" },

  { id: 291, category: "Ethics and Compliance", topic: "Regulations", difficulty: "Medium", question: "What are the registration categories for mutual fund dealing?", answer: "Dealing Representative (trades and advice), Advising Representative (advice o            nly), Chief             Compliance O            fficer, Ultimate Designated Person, each with specific proficiency requirements" },

  { id: 292, category: "Ethics and Compliance", topic: "Ethical Standards", difficulty: "Hard", question: "How should representatives handle material non-public information?", answer: "Cannot trade on it, cannot tip others, maintain confidentiality, implement information barriers, document receipt and handling, report breaches, avoid conflicts of interest" },

  { id: 293, category: "Ethics and Compliance", topic: "Regulations", difficulty: "Medium", question: "What constitutes adequate KYC for business accounts?", answer: "Business registration documents, beneficial ownership information, source of funds, authorized signatories, business purpose, expected activity levels, regulatory compliance status" },

  { id: 294, category: "Ethics and Compliance", topic: "Ethical Standards", difficulty: "Hard", question: "What are the requirements for advertising mutual funds?", answer: "Fair, balanced, not misleading, include risk disclosures, comply with brand requirements, no performance guarantees, appropriate             disclaimers, regulatory approval where required" },

  { id: 295, category: "Ethics and Compliance", topic: "Regulations", difficulty: "Medium", question: "Under PIPEDA, what are the privacy obligations for client information?", answer: "Collect only necessary information, obtain consent, protect with safeguards, limit use to stated purposes, provide             access rights, retain only as needed, report breaches" },

  { id: 296, category: "Alternative Managed Products", topic: "Alternative Investments", difficulty: "Hard", question: "How does ETF creation/redemption process work and what prevents large premiums/discounts to NAV?", answer: "Authorized participants create/redeem large blocks (creation units) d            irectly with ETF company using in-kind securities transfers. Arbitrage opportunities keep ETF price close to NAV through this mechanism" },

  { id: 297, category: "Modern Mutual Fund", topic: "Mutual Fund Structure", difficulty: "Medium", question: "What happens to accrued distributions when a fund merger occurs?", answer: "Accrued distribution            s are typically paid out before merger completion, or transferred to the surviving fund. Unitholders receive cash or additional units. May trigger taxable events in non-registered accounts" },

  { id: 298, category: "Alternative Managed Products", topic: "Alternative Investments", difficulty: "Hard", question: "Segregated fund maturity guarantee resets - what are the advantages and disadvantages?", answer: "Advantages: locks in gains, higher gua            rantee base, better estate protection. Disadvantages: new 10-year commitment, continued fees, may not be optimal if near original maturity" },

  { id: 299, category: "Understanding Investment Products", topic: "Investment Products", difficulty: "Medium", question: "How do currency-hedged international funds work and when might they underperform unhedged versions?", answer: "Use derivatives to off            set currency movements. May underperform when foreign currency strengthens vs CAD because hedging eliminates favorable currency gains while incurring hedging costs" },

  { id: 300, category: "Modern Mutual Fund", topic: "Mutual Fund Structure", difficulty: "Hard", question: "What triggers a fund liquidation and how are final proceeds distributed to unitholders?", answer: "Triggers: poor performan            ce, shrinking assets, regulatory issues, strategic decisions. Process: stop new purchases, sell all holdings, pay expenses, distribute net proceeds at final NAVPS to unitholders proportionally" },

  { id: 301, category: "Analysis of Mutual Funds", topic: "Conservative Funds", difficulty: "Medium", question: "How do floating rate bonds protect against interest rate risk?", answer: "Interest payments adjust periodically (q            uarterly/semi-annually) based on reference rate (Prime, LIBOR). When rates rise, coupon payments increase, maintaining stable principal value" },

  { id: 302, category: "Alternative Managed Products", topic: "Alternative Investments", difficulty: "Hard", question: "What are the key differences between mutual funds and labour-sponsored funds regarding liquidity and taxation?", answer: "Labour funds: restricted redemptions (8+             year hold), tax credits on purchase, potential tax recapture on early redemption, higher risk investments, different regulatory framework vs mutual funds" },

  { id: 303, category: "Modern Mutual Fund", topic: "Mutual Fund Structure", difficulty: "Medium", question: "How are fund distributions classified and what are the tax implications for each type?", answer: "Income             distributions: taxable as income. Capital gains distributions: 50% inclusion rate. Return of capital: reduces ACB, not immediately taxable. Classification affects investor tax liability" },

  { id: 304, category: "Understanding Investment Products", topic: "Investment Products", difficulty: "Hard", question: "What is the difference between physical replication and synthetic replication in index funds?", answer: "Physical: buys actual in            dex securities (full or sampling). Synthetic: uses derivatives (swaps) to replicate returns. Synthetic has counterparty risk but may track better and have lower costs" },

  { id: 305, category: "Alternative Managed Products", topic: "Alternative Investments", difficulty: "Medium", question: "How do REITs generate income and what are the main risk factors?", answer: "Income from rent, property sales, mo            rtgage interest. Risks: interest rate sensitivity, property market cycles, tenant quality, geographic concentration, leverage levels, management quality" },

  { id: 306, category: "Modern Mutual Fund", topic: "Mutual Fund Structure", difficulty: "Hard", question: "What is the difference between ex-dividend date and record date for fund distributions?", answer: "Ex-dividend date: NAVPS drops by distribution amount, new             purchases don't receive distribution. Record date: who owns units receives distribution. Settlement timing determines eligibility" },

  { id: 307, category: "Understanding Investment Products", topic: "Investment Products", difficulty: "Medium", question: "How do target-date funds adjust their asset allocation over time?", answer: "Follow glide path becoming more conservative as target d            ate approaches. Typically start equity-heavy (80-90%) and gradually shift to bond-heavy (30-40%) for capital preservation near retirement" },

  { id: 308, category: "Alternative Managed Products", topic: "Alternative Investments", difficulty: "Hard", question: "What are the key features distinguishing principal-protected notes from regular mutual funds?", answer: "PPNs: principal guarantee at mat            urity, structured returns, illiquid, higher fees, credit risk of issuer, complex payoff formulas. Mutual funds: daily liquidity, no guarantees, transparent pricing" },

  { id: 309, category: "Analysis of Mutual Funds", topic: "Equity Funds", difficulty: "Medium", question: "How do dividend reinvestment plans (DRIPs) work within mutual funds?", answer: "Distributions automatically purchase additi            onal fund units at NAVPS on distribution date, no sales charges typically, compound growth effect, fractional units allowed, can usually opt out anytime" },

  { id: 310, category: "Modern Mutual Fund", topic: "Mutual Fund Structure", difficulty: "Hard", question: "What happens to fund performance and MER when funds of different sizes merge?", answer: "Performance blends based on asset weighting. MER typically adopts survi            ving fund's rate. Economies of scale may reduce MER if combined fund is larger. Unitholders receive notice of changes" },

  { id: 311, category: "Know Your Client Communication", topic: "Client Profiling", difficulty: "Hard", question: "Multi-generational family: Grandparents (80s, conservative), parents (50s, moderate), adult children (30s, aggressive). How to structure investment re            commendations?", answer: "Separate strategies: Grandparents need income/preservation, parents balanced growth/income for retirement, children growth-focused. Consider family trusts, estate planning, education funding coordination" },

  { id: 312, category: "Know Your Client Communication", topic: "Tax and Retirement Planning", difficulty: "Hard", question: "Business owner with $2M corpor            ation, $500K personal savings. Retire in 5 years. What investment structure considerations?", answer: "Personal: max RRSP/TFSA first. Corporate: consider passive income rules, small business deduction impacts, capital gains exemption planning, individual pension plan, estate freeze strategies" },

  { id: 313, category: "Ethics and Compliance", topic: "Ethical Standards", difficulty: "Hard", question: "Divorcing couple with joint account containing $800K in mutual funds. Both want control. How t            o handle?", answer: "Freeze account until legal resolution, require court order or mutual consent for transactions, document all communications, maintain neutrality, separate statements, legal separation of assets per court directive" },

  { id: 314, category: "Know Your Client Communication", topic: "Client Profiling", difficulty: "Hard", question: "Client becomes mentally incapacitated. Family members disagree on investment decisions. What's your o            bligation?", answer: "Freeze discretionary activities, require power of attorney documentation, follow legal guardian instructions only, document capacity concerns, may need legal/medical opinions, protect client's interests first" },

  { id: 315, category: "Understanding Investment Products", topic: "Portfolio Construction", difficulty: "Hard", question: "Client has three goals: Retirement (20 years), child's education (12 years), vacation home (8 years). How to prioritize and structure investments?", answer: "Separate accounts/time horizons: Vacation home - conservative, education - balanced with education funds, retirement - growth focused. Prioritize retirement savings (tax advantages), then education, then vacation" },

  { id: 316, category: "Know Your Client Communication", topic: "Tax and Retirement Planning", difficulty: "Hard", question: "Cross-border client (US citizen, Canadian resident) with $1M to invest. What tax considerations affect fund selection?", answer: "US tax treaty, PFIC rules on Canadian mutual funds, FATCA reporting, consider US-listed funds, tax-efficient structures, professional cross-border tax advice essential" },

  { id: 317, category: "Ethics and Compliance", topic: "Ethical Standards", difficulty: "Hard", question: "Client's adult child (not your client) pressures you to change elderly parent's conservative investments to aggressive growth. How to respond?", answer: "Client confidentiality paramount, only take instructions from authorized client, assess if elder abuse/undue influence, document interactions, may need to report concerns to appropriate authorities" },

  { id: 318, category: "Know Your Client Communication", topic: "Client Profiling", difficulty: "Hard", question: "Professional athlete (age 25) earns $5M annually but career likely ends by 35. Investment strategy considerations?", answer: "Short earning window requires aggressive savings rate, tax-efficient investments, disability insurance critical, diversified portfolio, professional management, career transition planning, avoid lifestyle inflation" },

  { id: 319, category: "Understanding Investment Products", topic: "Portfolio Construction", difficulty: "Hard", question: "Client receives $2M inheritance but also $500K debt. Keep investments or pay debt first?", answer: "Compare after-tax investment returns vs after-tax cost of debt. Generally pay high-interest debt first (credit cards, personal loans), may keep low-rate debt (mortgage) and invest remainder" },

  { id: 320, category: "Know Your Client Communication", topic: "Behavioral Finance", difficulty: "Hard", question: "Widowed client (age 70) becomes extremely risk-averse after spouse's death, wants everything in cash despite inflation risk. How to help?", answer: "Acknowledge emotional trauma, gradual approach, education on inflation impact, small steps into conservative investments, GIC ladders, potential grief counseling referral, family involvement if appropriate" },

  { id: 321, category: "Ethics and Compliance", topic: "Ethical Standards", difficulty: "Hard", question: "Client asks you to coordinate with their tax accountant on investment strategy but accountant suggests strategies you believe are inappropriate. How to handle?", answer: "Maintain professional boundaries, focus on investment suitability, document concerns, cannot provide tax advice, client should seek additional tax opinion, prioritize regulatory compliance over referral relationship" },

  { id: 322, category: "Know Your Client Communication", topic: "Client Profiling", difficulty: "Hard", question: "Tech startup founder with highly concentrated stock position worth $10M, no other assets, company going public soon. Diversification strategy?", answer: "Post-IPO diversification plan, phased selling to avoid market impact, tax-loss harvesting, avoid wash sale rules, concentrated stock risk education, consider hedging strategies during lockup period" },

  { id: 323, category: "Understanding Investment Products", topic: "Portfolio Construction", difficulty: "Hard", question: "Retired couple needs $80K annual income from $1.5M portfolio. Current yield 3.5%. How to structure for sustainable withdrawals?", answer: "Current income = $52,500. Need additional $27,500 from growth/capital. Use bucket strategy: cash (2 years expenses), bonds (3-5 years), equities (long-term growth). Total withdrawal rate = 5.3% (high)" },

  { id: 324, category: "Know Your Client Communication", topic: "Tax and Retirement Planning", difficulty: "Hard", question: "Client's employer pension reduces atage 65 by $2,000/monthwhen government benefits begin. How to bridge this gap?", answer: "Bridge strategy: temporary higher withdrawals from RRSP/RRIF until 65, then reduce when pension decreases but government benefits start. Coordinate with CPP/OAS optimization timing" },

  { id: 325, category: "Ethics and Compliance", topic: "Ethical Standards", difficulty: "Hard", question: "Family business succession: Parent (your client) wants conservative investments, adult children want growth for business expansion. How to navigate conflicting interests?", answer: "Client's interests first, separate business needs from personal investing, may need separate accounts/strategies, professional business succession planning, potential family meeting with clear roles defined" },

  { id: 326, category: "Evaluating and Selecting Funds", topic: "Fund Performance", difficulty: "Hard", question: "Fund consistently in 2nd quartile but never 1st quartile over 10 years. Is this good or concerning performance?", answer: "Generally positive - consistent above-average performance with lower volatility. Preferable to erratic 1st/4th quartile swings. Shows disciplined process, though may indicate lack of conviction or conservative management" },

  { id: 327, category: "Evaluating and Selecting Funds", topic: "Fund Selection", difficulty: "Medium", question: "How do you select appropriate benchmark for a Canadian balanced fund?", answer: "Composite benchmark reflecting actual allocation: e.g., 60% S&P/TSX Composite + 40% FTSE TMX Canada Universe Bond Index. Adjust weightings to match fund's target allocation, rebalance periodically" },

  { id: 328, category: "Evaluating and Selecting Funds", topic: "Fund Performance", difficulty: "Hard", question: "Fund with high tracking error (8%) but positive alpha (3%). What does this indicate about management style?", answer: "Active management with high conviction - takes significant positions different from benchmark. Generating alpha but with high active risk. Style may be growth vs value, sector bets, or concentrated holdings" },
  
  { id: 329, category: "Analysis of Mutual Funds", topic: "Equity Funds", difficulty: "Medium", question: "How do you interpret a fund's style box drift from large-cap value to mid-cap growth over 3 years?", answer: "Possible style drift - fund changing character, maybe manager change, performance chasing, market cap drift due to growth, or intentional strategy evolution. May no longer fit client's allocation needs" },
  
  { id: 330, category: "Evaluating and Selecting Funds", topic: "Fund Performance", difficulty: "Hard", question: "Fund shows positive alpha during bull markets but negative alpha in bear markets. What does this suggest?", answer: "Manager may be taking systematic risk (high beta, growth tilt, momentum) that appears as skill in rising markets but hurts in declining markets. Not true alpha - compensation for additional risk" },
 
  { id: 331, category: "Evaluating and Selecting Funds", topic: "Fund Selection", difficulty: "Medium", question: "When comparing sector funds, why might standard performance metrics be misleading?", answer: "Sector funds have higher volatility and concentration risk. Standard deviation or Sharpe ratios may not be comparable to diversified funds. Always compare to a sector-specific benchmark and consider sector cycle timing." },
  
  { id: 332, category: "Analysis of Mutual Funds", topic: "Equity Funds", difficulty: "Hard", question: "A fund’s rolling 3-year Sharpe ratios are Year 1: 0.8, Year 2: 1.2, Year 3: 0.3, Year 4: 0.9. How should you interpret this pattern?", answer: "Inconsistent risk-adjusted performance suggests the manager may be changing strategy, taking on different risks, or responding to varying market conditions. Evaluate process stability, mandate adherence, and any manager changes." },

  { id: 333, category: "Evaluating and Selecting Funds", topic: "Fund Performance", difficulty: "Hard", question: "How should you evaluate a fund’s performance during market regime changes, such as a rotation from growth to value?", answer: "Compare the fund against style-appropriate benchmarks, assess the manager’s style bias, and evaluate adaptability versus consistency. Determine if underperformance is due to temporary style headwinds or poor security selection." },

  { id: 334, category: "Analysis of Mutual Funds", topic: "Conservative Funds", difficulty: "Medium", question: "A bond fund’s duration matches its benchmark but underperforms by 0.5% annually. What could explain this difference?", answer: "Possible causes include higher MER, lower credit quality, sector allocation differences, currency hedging costs, cash drag from redemptions, trading expenses, or weak security selection within duration targets." },

  { id: 335, category: "Evaluating and Selecting Funds", topic: "Fund Selection", difficulty: "Hard", question: "How can you fairly compare funds with different benchmarks but overlapping investment mandates?", answer: "Construct a common blended benchmark, use risk-adjusted metrics like the Sharpe ratio, analyze holdings overlap, and evaluate consistency of returns versus both category peers and the broad market." },
  
  { id: 336, category: "Know Your Client Communication", topic: "Tax and Retirement Planning", difficulty: "Hard", question: "A client sells a mutual fund for $80,000 (ACB $100,000) in December and buys a similar fund for $75,000 in January. What are the tax implications?", answer: "The $20,000 capital loss is denied under the superficial-loss rule because the repurchase occurred within 30 days of the sale. The loss is added to the new investment’s adjusted cost base and deferred until that position is sold without repurchase." },
  
  { id: 337, category: "Know Your Client Communication", topic: "Tax and Retirement Planning", difficulty: "Hard", question: "Client dies with $500K RRSP. Spouse is beneficiary but already72 years old. What are the rollover options?", answer: "Can rollover to spouse's RRIF, purchase annuity, or take as taxable lump sum. If spouse over 71, must use RRIF. Rollover preserves tax deferral, lump sum fully taxable in year of death" },

  { id: 338, category: "Know Your Client Communication", topic: "Tax and Retirement Planning", difficulty: "Medium", question: "Attribution rules: Husband (45% tax rate) gives wife (25% tax rate) $50K to invest. What income is attributed back?", answer: "All investment income attributed back to husband at 45% rate. Capital gains not attributed. To avoid attribution: use spousal loan at prescribed rate or invest in spouse's business" },

  { id: 339, category: "Know Your Client Communication", topic: "Tax and Retirement Planning", difficulty: "Hard", question: "Client over-contributes $8,000 to TFSA, earns $400 investment income on excess, then withdraws the over-contribution. Tax consequences?", answer: "1% monthly penalty on $8,000 until withdrawn. $400 income becomes taxable. Penalty continues until over-contribution removed. Cannot re-contribute excess amount until following year" },

  { id: 340, category: "Know Your Client Communication", topic: "Tax and Retirement Planning", difficulty: "Hard", question: "Deemed disposition rules: Canadian resident moves to US with $200K mutual fund portfolio (ACB $150K). Tax implications?", answer: "Deemed disposition at fair market value $200K. Capital gain $50K taxable in year of departure. May elect to post security and defer tax. Double taxation relief may apply under tax treaty" },

  { id: 341, category: "Know Your Client Communication", topic: "Tax and Retirement Planning", difficulty: "Medium", question: "Client receives $15K capital gains distribution from mutual fund but fund's unit price dropped $15K same amount. Why is this taxable?", answer: "Capital gains distribution is taxable event even though NAVPS drops by same amount. Client receives additional units or cash equal to distribution. Total return unchanged but creates tax liability" },

  { id: 342, category: "Know Your Client Communication", topic: "Tax and Retirement Planning", difficulty: "Hard", question: "Corporate class funds: How do they defer taxes and what are the risks?", answer: "Multiple funds within one corporation switch between funds without triggering capital gains. Risks: rule changes, all funds affected if one fails, potential for large future tax bill, higher fees" },

  { id: 343, category: "Know Your Client Communication", topic: "Tax and Retirement Planning", difficulty: "Hard", question: "Client has $30K capital loss carryforward from 2020. In current year: $10K capital gains, $5K capital loss. How are losses applied?", answer: "Current year loss offsets current gains first: $10K - $5K = $5K net gain. Can apply $5K of carryforward loss to eliminate net gain. Remaining carryforward: $25K for future years" },

  { id: 344, category: "Know Your Client Communication", topic: "Tax and Retirement Planning", difficulty: "Medium", question: "Dividend gross-up and tax credit: $1,000 eligible Canadian dividends received. Calculate gross-up at 38% and federal tax credit at 25%.", answer: "Grossed-up dividend: $1,000 × 1.38 = $1,380 (taxable amount). Federal tax credit: $1,380 × 25% = $345. Net tax depends on marginal rate minus credits" },

  { id: 345, category: "Know Your Client Communication", topic: "Tax and Retirement Planning", difficulty: "Hard", question: "Alternative Minimum Tax (AMT): Client has large capital gains and uses tax shelter. How might AMT apply to mutual fund investors?", answer: "AMT calculated on adjusted taxable income with fewer deductions. Capital gains inclusion may be higher, fewer tax preferences allowed. Ensures minimum tax paid regardless of deductions/credits used" },

  { id: 346, category: "Ethics and Compliance", topic: "Regulations", difficulty: "Medium", question: "Recent CIRO guidance on crypto ETFs: What additional suitability considerations apply?", answer: "Enhanced risk disclosure, concentration limits, volatility assessment, client knowledge verification, regulatory uncertainty acknowledgment, speculative nature emphasis, portfolio allocation limits recommended" },

  { id: 347, category: "Alternative Managed Products", topic: "Alternative Investments", difficulty: "Hard", question: "ESG fund regulations: What disclosure requirements have been enhanced for sustainable investing products?", answer: "Clear ESG methodology disclosure, portfolio screening criteria, impact measurement metrics, greenwashing prevention, comparison benchmarks, voting policies, engagement activities documentation" },

  { id: 348, category: "Modern Mutual Fund", topic: "Mutual Fund Structure", difficulty: "Medium", question: "Fund merger notifications: What recent changes affect investor notice requirements?", answer: "Enhanced disclosure timelines, clearer impact explanations, comparison of before/after features, redemption rights without penalty, independent review committee involvement, plain language requirements" },

  { id: 349, category: "Ethics and Compliance", topic: "Ethical Standards", difficulty: "Hard", question: "Digital advice platforms: How do regulatory requirements apply to robo-advisors offering mutual fund recommendations?", answer: "Same suitability obligations, KYC requirements, appropriate supervision, algorithm transparency, human oversight availability, complaint handling procedures, regulatory registration requirements" },

  { id: 350, category: "Understanding Investment Products", topic: "Investment Products", difficulty: "Medium", question: "Climate risk disclosure: How are mutual funds now required to address climate-related financial risks?", answer: "Risk factor disclosure in prospectus, portfolio exposure assessment, scenario analysis consideration, governance oversight, strategy integration, metrics and targets disclosure where material to fund performance" }

];

// For module usage uncomment the following line:
// export default flashcards;
