<template>
  <div style="margin-top:101px">
    <van-tabs
      title-active-color="#2599e6"
      line-width="90px"
      :sticky="true"
      :ellipsis="false"
      @click="onClick"
      :offset-top="101"
      title-inactive-color="#333333"
    >
      <van-tab name="1">
        <div slot="title" style="font-size:15px;display:flex;">
          <img id="tab1" :src="img1" class="tabimg" />
          <div id="tab1_div"  style="margin-left:4px;">项目详情</div>
        </div>

        <div style="height:46px;background:#F1F4F6;">
          <div style="position:relative;height:46px;padding-left: 18px;">
            <div style="height: 11px;"></div>
            <div
            class="deali_title_style"
              style="border-left:2px solid #3097FB;color: #3097FB;text-align: left;padding-left: 13px;height: 20px;"
            >项目基本详情</div>
            <img
              style="height: 40px;position: absolute;left: 35%;top: 0px;"
              src="../../../../../assets/img/bg-bt.png"
            />
            <img
              v-if="itemEnti.hasCamera=='1'"
              @click="openApp(itemEnti,$event)"
              style="height: 22px;position: absolute;right: 18px;top: 11px;"
              src="../../../../../assets/img/details_camera.png"
            />
          </div>
        </div>
        <div style="margin: 20px;text-align: left;font-size:18px;">
          <div style="display:flex;">
            <img class="deali_small_img_style" src="../../../../../assets/img/1icon-xmbh.png" />
            <div class="deali_font_style" style="color: #999999;">项目编号</div>
          </div>
          <div class="deali_font_style" style="color: #333333;margin-top: 10px;">{{itemEnti.projectCode}}</div>
        </div>
        <div style="margin: 20px;text-align: left;font-size:18px;">
          <div style="display:flex;">
            <img class="deali_small_img_style" src="../../../../../assets/img/1icon-xmmc.png"  />
            <div class="deali_font_style" style="color: #999999;">项目名称</div>
          </div>
          <div class="deali_font_style" style="color: #333333;margin-top: 10px;">{{itemEnti.projectName}}</div>
        </div>
        <van-divider :style="{ padding: '0 20px' }"></van-divider>
        <div style="margin: 20px;text-align: left;font-size:18px;">
          <div style="display:flex;">
            <div style="width: 48%;">
              <div style=" display:flex;">
                <img class="deali_small_img_style" src="../../../../../assets/img/1icon-ry.png"  />
                <div class="deali_font_style" style="color: #999999;">包联领导</div>
              </div>
              <div class="deali_font_style" v-if="itemEnti.contractPerson!=''" style="color: #333333;margin-top: 8px;">{{itemEnti.contractPerson}}</div>
              <div class="deali_font_style" v-if="itemEnti.contractPerson==''"  style="color: #333333;margin-top: 8px;">暂无</div>
            </div>
            <div
              style="height: 25px;width: 1px;background: #dddddd;margin-right:4%;margin-top: 10px;"
            ></div>
            <div style="width: 48%;">
              <div style="display:flex;">
                <img class="deali_small_img_style" src="../../../../../assets/img/1icon-xmjsxz.png" />
                <div class="deali_font_style" style="color: #999999;">项目建设性质</div>
              </div>
              <div class="deali_font_style" style="color: #333333;margin-top: 8px;">{{itemEnti.projectNatureName}}</div>
            </div>
          </div>
          <div style="display:flex;margin-top: 20px;">
            <div style="width: 48%;">
              <div style=" display:flex;">
                <img class="deali_small_img_style" src="../../../../../assets/img/1icon-zdxmlx.png"  />
                <div class="deali_font_style" style="color: #999999;">重点项目类型</div>
              </div>
              <div class="deali_font_style" style="color: #333333;margin-top: 8px;">{{itemEnti.zdProTypeName}}</div>
            </div>
            <div
              style="height: 25px;width: 1px;background: #dddddd;margin-right:4%;margin-top: 10px;"
            ></div>
            <div style="width: 48%;">
              <div style="display:flex;">
                <img class="deali_small_img_style" src="../../../../../assets/img/1icon-zdxmdj.png" />
                <div class="deali_font_style"  style="color: #999999;">重点项目等级</div>
              </div>
              <div class="deali_font_style"  style="color: #333333;margin-top: 8px;">{{itemEnti.zdProLevelName}}</div>
            </div>
          </div>
        </div>
        <div style="display:flex;margin: 20px;text-align: left;font-size:18px;">
          <div style="width: 48%;">
            <div style=" display:flex;">
              <img class="deali_small_img_style"  src="../../../../../assets/img/1icon-xmsuhy.png" />
              <div class="deali_font_style"  style="color: #999999;">项目所属行业</div>
            </div>
            <div class="deali_font_style"  style="color: #333333;margin-top: 8px;">{{itemEnti.projectIndustryName}}</div>
          </div>
          <div
            style="height: 25px;width: 1px;background: #dddddd;margin-right:4%;margin-top: 10px;"
          ></div>
          <div style="width: 48%;">
            <div style="display:flex;">
              <img class="deali_small_img_style"  src="../../../../../assets/img/1icon-cylxdl.png" />
              <div class="deali_font_style"  style="color: #999999;">产业类型大类</div>
            </div>
            <div class="deali_font_style" v-if="itemEnti.industryFirstType!=''"  style="color: #333333;margin-top: 8px;">{{itemEnti.industryFirstType}}</div>
             <div class="deali_font_style" v-if="itemEnti.industryFirstType==''"   style="color: #333333;margin-top: 8px;">暂无</div>
          </div>
        </div>

        <div style="margin: 20px;text-align: left;">
          <div style="display:flex;">
            <img class="deali_small_img_style"  src="../../../../../assets/img/1icon-cylx.png" />
            <div class="deali_font_style"  style="color: #999999;">产业类型</div>
          </div>
          <div class="deali_font_style"  style="color: #333333;margin-top: 10px;">{{itemEnti.industryType}}</div>
        </div>
        <van-divider :style="{ padding: '0 20px' }"></van-divider>
        <div style="margin: 20px;text-align: left;font-size:18px;">
          <div style="display:flex;">
            <div style="width: 48%;">
              <div style=" display:flex;">
                <img src="../../../../../assets/img/1icon-jhkgnx.png"  class="deali_small_img_style"  />
                <div class="deali_font_style"  style="color: #999999;">计划开工年限</div>
              </div>
              <div class="deali_font_style"  style="color: #333333;margin-top: 8px;">{{itemEnti.planWorkDate}}</div>
            </div>
            <div
              style="height: 25px;width: 1px;background: #dddddd;margin-right:4%;margin-top: 10px;"
            ></div>
            <div style="width: 48%;">
              <div style="display:flex;">
                <img src="../../../../../assets/img/1icon-jhwgnx.png"  class="deali_small_img_style"  />
                <div class="deali_font_style"  style="color: #999999;">计划完工年限</div>
              </div>
              <div class="deali_font_style"  style="color: #333333;margin-top: 8px;">{{itemEnti.planEndDate}}</div>
            </div>
          </div>
        </div>
        <div style="margin: 20px;text-align: left;font-size:18px;">
          <div style="display:flex;">
            <div style="width: 48%;">
              <div style=" display:flex;">
                <img src="../../../../../assets/img/1icon-xmgsztz.png"  class="deali_small_img_style"  />
                <div class="deali_font_style"  style="color: #999999;">项目估算总投资</div>
              </div>
              <div class="deali_font_style"  style="color: #333333;margin-top: 8px;">{{itemEnti.projectEstimatedTotal}}亿</div>
            </div>
            <div
              style="height: 25px;width: 1px;background: #dddddd;margin-right:4%;margin-top: 10px;"
            ></div>
            <div style="width: 48%;">
              <div style="display:flex;">
                <img src="../../../../../assets/img/1icon-bnjhtz.png"  class="deali_small_img_style"  />
                <div class="deali_font_style"  style="color: #999999;">本年计划投资</div>
              </div>
              <div class="deali_font_style"  style="color: #333333;margin-top: 8px;">{{itemEnti.yearPlanInvest}}亿</div>
            </div>
          </div>
        </div>
        <div style="margin: 20px;text-align: left;">
          <div style="display:flex;">
            <img src="../../../../../assets/img/1icon-tzwce.png"  class="deali_small_img_style"  />
            <div class="deali_font_style"  style="color: #999999;">投资完成额</div>
          </div>
          <div class="deali_font_style" style="color: #333333;margin-top: 10px;">{{itemEnti.investment}}亿</div>
        </div>
        <van-divider :style="{ padding: '0 20px' }"></van-divider>
        <div style="margin:20px;display:flex;">
          <img src="../../../../../assets/img/1icon-xpxx.png"  class="deali_small_img_style"  />
          <div class="deali_font_style"  style="color: #3ca1ec;">审批信息</div>
        </div>
        <div style="display: flex;margin-left: 20px;text-align: left;font-size: 18px;">
          <img src="../../../../../assets/img/sp.png" class="deali_jdimg_style" style="width: 7px;" />
          <div style="margin-left:20px;">
            <div class="deali_font_style"  style="color: #999999;">国土审批文号</div>
            <div class="deali_font_style"  style="margin-top:10px;color: #333333;">{{itemEnti.land}}</div>
            <div class="deali_font_style"  style="margin-top:15px;color: #999999;">环保审批文号</div>
            <div class="deali_font_style"  style="margin-top:10px;color: #333333;">{{itemEnti.eia}}</div>
            <div class="deali_font_style" style="margin-top:15px;color: #999999;">立项审批文号</div>
            <div class="deali_font_style"  style="margin-top:10px;color: #333333;">{{itemEnti.approval}}</div>
            <div class="deali_font_style"  style="margin-top:15px;color: #999999;">规划审批文号</div>
            <div class="deali_font_style"  style="margin-top:10px;color: #333333;">{{itemEnti.plan}}</div>
          </div>
        </div>
        <van-divider :style="{ padding: '0 20px' }"></van-divider>
        <div style="margin: 20px;text-align: left;">
          <div style="display:flex;">
            <img src="../../../../../assets/img/1icon-jsgmjnr.png"  class="deali_small_img_style"  />
            <div class="deali_font_style" style="color: #999999;">建设规模及内容</div>
          </div>
          <div class="deali_font_style" style="color: #333333;margin-top: 10px;">{{itemEnti.scaleAndContent}}</div>
        </div>
        <div style="margin: 20px;text-align: left;">
          <div style="display:flex;">
            <img src="../../../../../assets/img/1icon-bnjsnr.png"  class="deali_small_img_style"  />
            <div class="deali_font_style" style="color: #999999;">本年建设内容</div>
          </div>
          <div class="deali_font_style" style="color: #333333;margin-top: 10px;">{{itemEnti.mainContent}}</div>
        </div>
        <div style="height:47px;background:#F1F4F6;">
          <div style="position:relative;height:46px;padding-left: 18px;">
            <div style="height: 11px;"></div>
            <div
              class="deali_title_style"
              style="border-left:2px solid #3097FB;color: #3097FB;text-align: left;padding-left: 13px;height: 20px;"
            >项目单位信息</div>
            <img
              style="height: 40px;position: absolute;left: 35%;top: 0px;"
              src="../../../../../assets/img/bg-bt.png"
            />
          </div>
        </div>
        <div style="margin: 20px;text-align: left;font-size:18px;">
          <div style="display:flex;">
            <div style="width: 48%;">
              <div style=" display:flex;">
                <img src="../../../../../assets/img/1icon-dw.png"  class="deali_small_img_style"  />
                <div  class="deali_font_style" style="color: #999999;">建设单位</div>
              </div>
              <div class="deali_font_style" style="color: #333333;margin-top: 8px;">{{itemEnti.comName}}</div>
            </div>
            <div
              style="height: 25px;width: 1px;background: #dddddd;margin-right:4%;margin-top: 10px;"
            ></div>
            <div style="width: 48%;">
              <div style="display:flex;">
                <img src="../../../../../assets/img/1icon-dw.png"  class="deali_small_img_style"  />
                <div  class="deali_font_style" style="color: #999999;">负责单位</div>
              </div>
              <div class="deali_font_style" style="color: #333333;margin-top: 8px;">{{itemEnti.comName}}</div>
            </div>
          </div>
        </div>
        <div style="margin: 20px;text-align: left;font-size:18px;">
          <div style="display:flex;">
            <img src="../../../../../assets/img/1icon-zjdm.png"  class="deali_small_img_style"  />
            <div class="deali_font_style" style="color: #999999;">证照代码</div>
          </div>
          <div class="deali_font_style" style="color: #333333;margin-top: 10px;">{{itemEnti.licenceCode}}</div>
        </div>
        <van-divider :style="{ padding: '0 20px' }"></van-divider>
        <div style="margin: 20px;text-align: left;font-size:18px;">
          <div style="display:flex;">
            <div style="width: 48%;">
              <div style=" display:flex;">
                <img src="../../../../../assets/img/1icon-ry.png"  class="deali_small_img_style"  />
                <div class="deali_font_style" style="color: #999999;">法人代表姓名</div>
              </div>
              <div class="deali_font_style" style="color: #333333;margin-top: 8px;">{{itemEnti.zdgcProComInfoId.legalPerson}}</div>
            </div>
            <div
              style="height: 25px;width: 1px;background: #dddddd;margin-right:4%;margin-top: 10px;"
            ></div>
            <div style="width: 48%;">
              <div style="display:flex;">
                <img src="../../../../../assets/img/1icon-zjdm.png"  class="deali_small_img_style"  />
                <div class="deali_font_style" style="color: #999999;">法人联系方式</div>
              </div>
              <div class="deali_font_style" v-if="itemEnti.zdgcProComInfoId.legalPhone!=''" style="color: #333333;margin-top: 8px;">{{itemEnti.zdgcProComInfoId.legalPhone}}</div>
              <div class="deali_font_style" v-if="itemEnti.zdgcProComInfoId.legalPhone==''" style="color: #333333;margin-top: 8px;">暂无</div>
            </div>
          </div>
        </div>
        <div style="margin: 20px;text-align: left;font-size:18px;">
          <div style="display:flex;">
            <div style="width: 48%;">
              <div style=" display:flex;">
                <img src="../../../../../assets/img/1icon-ry.png"  class="deali_small_img_style"  />
                <div class="deali_font_style" style="color: #999999;">负责人姓名</div>
              </div>
              <div class="deali_font_style" style="color: #333333;margin-top: 8px;">{{itemEnti.zdgcProComInfoId.chargeName}}</div>
            </div>
            <div
              style="height: 25px;width: 1px;background: #dddddd;margin-right:4%;margin-top: 10px;"
            ></div>
            <div style="width: 48%;">
              <div style="display:flex;">
                <img src="../../../../../assets/img/1icon-zjdm.png"  class="deali_small_img_style"  />
                <div class="deali_font_style" style="color: #999999;">负责人联系方式</div>
              </div>
              <div class="deali_font_style" style="color: #333333;margin-top: 8px;">{{itemEnti.zdgcProComInfoId.chargePhone}}</div>
            </div>
          </div>
        </div>
        <div style="margin: 20px;text-align: left;font-size:18px;">
          <div style="display:flex;">
            <div style="width: 48%;">
              <div style=" display:flex;">
                <img src="../../../../../assets/img/1icon-ry.png"  class="deali_small_img_style"  />
                <div class="deali_font_style" style="color: #999999;">报表人姓名</div>
              </div>
              <div class="deali_font_style" style="color: #333333;margin-top: 8px;">{{itemEnti.zdgcProComInfoId.reportName}}</div>
            </div>
            <div
              style="height: 25px;width: 1px;background: #dddddd;margin-right:4%;margin-top: 10px;"
            ></div>
            <div style="width: 48%;">
              <div style="display:flex;">
                <img src="../../../../../assets/img/1icon-zjdm.png"  class="deali_small_img_style"  />
                <div class="deali_font_style" style="color: #999999;">报表人联系方式</div>
              </div>
              <div class="deali_font_style" style="color: #333333;margin-top: 8px;">{{itemEnti.zdgcProComInfoId.reportPhone}}</div>
            </div>
          </div>
        </div>
        <van-divider :style="{ padding: '0 20px' }"></van-divider>
        <div style="margin: 20px;text-align: left;font-size:18px;">
          <div   class="deali_title_style" style="color: #333333;">项目规划图</div>
          <van-swipe :autoplay="3000">
            <van-swipe-item v-for="(image, index) in images" :key="index">
              <img v-lazy="image" style="width: 100%;" @click="imgPreview(index)" />
            </van-swipe-item>
          </van-swipe>
        </div>
      </van-tab>
      <van-tab name="2" :click="reshye()">
        <div slot="title" style="font-size:15px;display:flex;">
          <img id="tab2" :src="img2" class="tabimg" />
          <div id="tab2_div" style="margin-left:4px;color:#666666;">项目简介</div>
        </div>
        <div style="width: 92%;padding: 2% 4% 2% 4%;">
          <div id="pmJjdivid" style="width:100%;" v-html="jjEntity.content"></div>
        </div>
      </van-tab>
      <van-tab name="3">
        <div slot="title" style="font-size:15px;display:flex;">
          <img id="tab3" :src="img3" class="tabimg" />
          <div id="tab3_div" style="margin-left:4px;color:#666666;">阶段汇报</div>
        </div>

        <div style="margin-top: 10px;">
          <van-popup position="bottom" :style="{ height: '200px' }">
            <van-datetime-picker
              v-model="currentDate"
              type="date"
              style="height: 200px;"
              @confirm="onconfirm"
            />
          </van-popup>
          <div style="display: none;height:1px;">
            <input
              @click="showDatePicker(1)"
              v-model="date1"
              type="text"
              placeholder="请输入开始时间"
              style="width: 40%;height:30px;margin-left: 5%;border-radius:5px;background: #F1F4F6;border: none;text-align: center;"
            />
            <div style="width: 10%;line-height: 30px;vertical-align: middle;text-align: center;">-</div>
            <input
              @click="showDatePicker(2)"
              v-model="date2"
              type="text"
              placeholder="请输入结束时间"
              style="width: 40%;height:30px;border-radius:5px;background: #F1F4F6;border: none;text-align: center;"
            />
          </div>
          <van-divider style="margin-top: 10px;margin-bottom: 0px;"></van-divider>
          <van-popup
            v-model="show"
            position="bottom"
            round
            style="background:#ffffff;"
            :style="{ height: '80%' }"
          >
            <div>
              <div
                style="display: flex;height: 40px;margin-top: 20px;margin-left: 10px;margin-right: 10px;"
              >
                <div style="width:50%;position:relative;">
                  <div @click="selectTab(1)" id="tabdiv1" class="pop_tab_select_div1">
                    <img class="pop_xxjd_img" :src="tabimg1" />
                    <div style="margin-right:15px;">形象进度</div>
                  </div>
                </div>
                <div style="width:50%;position:relative;">
                  <div @click="selectTab(2)" id="tabdiv2" class="pop_tab_noselect_div2">
                    <img class="pop_xxjd_img" :src="tabimg2" />
                    <div style="margin-right:15px;">存在问题</div>
                  </div>
                </div>
              </div>
              <div
                id="jiedContent"
                class="deali_jdhb_font_style"
                v-show="isFlag"
                style="height: 300px;padding: 28px;line-height: 26px;overflow: auto;"
              ></div>
              <div v-show="!isFlag" style="height:346px;">
                <div
                  v-for="(item,index) in dataList"
                  :key="index"
                  style="padding-bottom:6px;padding-top:2px;margin-left: 10px;margin-right: 10px;box-shadow: 1px 1px 1px 1px #cccccc;border-radius: 3px;"
                >
                  <div style="display:flex;margin-top:7px;">
                    <div class="vantlist_block">
                      <div style="margin-top:9px;font-size:15px;">{{index+1}}</div>
                    </div>

                    <div>
                      <div style="margin-left:11px;color:#b6b6b6;font-size: 14px;">存在问题</div>
                      <div
                        class="van-multi-ellipsis--l2"
                        v-if="item.existingProblem==''"
                        style="font-size: 12px;margin-left: 11px;width: 243px;"
                      >暂无</div>
                      <div
                        class="van-multi-ellipsis--l2"
                         v-if="item.existingProblem!=''"
                        style="font-size: 12px;margin-left: 11px;width: 243px;"
                      >{{item.existingProblem}}</div>
                    </div>
                  </div>
                  <div style="display:flex;margin-top:10px;">
                    <img
                      style="height: 14px;margin-left: 21px;margin-top:3px;"
                      src="../../../../../assets/img/zdgc-responsible.png"
                    />
                    <div style="color:#999999;font-size:14px;margin-left: 6px;">问题解决责任单位</div>
                  </div>
                  <div
                    style="margin-left: 21px;color:#333333;font-size:12px;margin-top:5px;"
                  >{{item.solutionsAndDept}}</div>
                  <!-- <div class="van-hairline--bottom"></div> -->
                  <!-- <div
                    style="margin-top: 4px;color: rgb(229, 229, 229);height: 1px;background: rgb(229, 229, 229);width: 94%;margin-left: 10px;margin-right: 10px;"
                  ></div>-->
                </div>
              </div>
              <div
              class="volice_out_img_style"
                style="background: rgb(39, 150, 231);border-radius: 50%;text-align: center;margin: 0 auto;position: absolute;bottom: 10px;left: 42%;"
              >
                <img
                  class="volice_img_style" style="padding-bottom:4px;"
                  src="../../../../../assets/img/icon_voice.png"
                />
              </div>
            </div>
          </van-popup>
          <van-list v-model="loading" :finished="finished" @load="onLoad" :offset="10">
            <div
              style="display: flex;height:100px;padding: 10px 10px;border-bottom: 2px solid #F1F4F6; background: #ffffff;"
              v-for="item of list"
              :key="item.id"
              @click="getZdgcProProgress(item.id)"
            >
              <img src="../../../../../assets/img/deimg.jpg" style="width: 35%;" />
              <div style="margin-left:10px;text-align: left;width: 65%;font-size: 15px">
                <div class="deali_jdhb_font_style" style="color:#333333;">{{item.reportDate}}</div>
                <div class="van-multi-ellipsis--l3" style="-webkit-line-clamp:4;font-size:14px;">{{item.imageProgress}}</div>
                <!-- <textarea
                class="deali_jdhb_font_style"
                  style="color:#999999;height: 80px;width: 100%;border:none;resize: none;overflow:hidden"
                  readonly
                ></textarea> -->
              </div>
            </div>
          </van-list>
        </div>
      </van-tab>
    </van-tabs>
  </div>
</template>
<script>
import $ from "jquery";
import { httpMethod } from "../../../../../api/getData.js";
import Vue from "vue";
import { Tab, Tabs } from "vant";
import { Divider } from "vant";
import { Swipe, SwipeItem } from "vant";
import Vant, { Lazyload } from "vant";
import { ImagePreview } from "vant";
import { PullRefresh } from "vant";
import { Field } from "vant";
import { Popup,Dialog} from "vant";

Vue.use(Popup);
Vue.use(PullRefresh);
Vue.use(Field);
Vue.use(ImagePreview);
Vue.use(Lazyload);
Vue.use(Swipe).use(SwipeItem);
Vue.use(Divider);
Vue.use(Tab).use(Tabs).use(Dialog);
export default {
  name: "zdgcdetile",
  beforeCreate() {
    document.querySelector("body").setAttribute("style", "background:#FFFFFF");
  },
  mounted() {
    this.itemEnti = this.$route.params.entity;
    console.log(this.$route.params.entity);
    this.getzdgcProReportInfoAtt(this.itemEnti.id);
    this.getZdgcProProgressList(this.itemEnti.id);
    this.getzdgcProReportInfoAttJJ(this.itemEnti.id);
    // for (let i = 0; i < this.itemEnti.pathList.length; i++) {
    //   this.images.push(
    //     httpMethod.returnBaseUrlFun() + this.itemEnti.pathList[i]
    //   );
    // }
    //this.getZdgcProProgressList(this.itemEnti.id);
    $("#pmJjdivid p").each(function() {
      $(this).attr("style", "font-size:15px;");
    });
  },
  data() {
    return {
      dataList: [],
      isFlag: true,
      tabimg1: require("../../../../../assets/img/icon_report1_selected.png"),
      tabimg2: require("../../../../../assets/img/icon_report2.png"),
      images: [],
      jjEntity: [{ content: "" }],
      list: [],
      loading: false, //是否处于加载状态
      finished: false, //是否已加载完所有数据
      isLoading: false, //是否处于下拉刷新状态
      currentDate: new Date(),
      show: false,
      date1: "2019-01-01",
      date2: "2019-12-31",
      flage: 1,
      backgroundDiv: {
        backgroundImage:
          "url(" + require("../../../../../assets/img/bg-bt.png") + ")"
      },
      img1: require("../../../../../assets/img/icon-xmxq.png"),
      img2: require("../../../../../assets/img/icon-xmjj2.png"),
      img3: require("../../../../../assets/img/icon-jdhb2.png"),
      itemEnti: { zdgcProComInfoId: { legalPerson: "" } },
      imageBaseUrl: httpMethod.returnBaseUrlFun()
    };
  },
  updated() {},
  methods: {
    
    openApp: function(item, e) {
      var isTip = localStorage.getItem("isTip");
      if (isTip != undefined) {
        var regionName = item.regionName;
        var hasCamera = item.hasCamera + "";
        if (hasCamera == "1") {
          window.location.href =
            "m://com.hikvision.sdk.app/openwith?projname=" + regionName;
        }
      } else {
        Dialog.alert({
          message: "请先确定已经安装《项目视频监控》apk"
        }).then(() => {
          localStorage.setItem("isTip", "1");
          var regionName = item.regionName;
          var hasCamera = item.hasCamera + "";
          if (hasCamera == "1") {
            window.location.href =
              "m://com.hikvision.sdk.app/openwith?projname=" + regionName;
          }
        });
      }
      e.stopPropagation(); //非IE浏览器
    },
    selectTab: function(flag) {
      console.log(flag);
      switch (flag) {
        case 1: //形象进度
          this.isFlag = true;
          $("#tabdiv1").removeClass("pop_tab_noselect_div1");
          $("#tabdiv1").addClass("pop_tab_select_div1");
          $("#tabdiv2").addClass("pop_tab_noselect_div2");
          $("#tabdiv2").removeClass("pop_tab_select_div2");
          this.tabimg1 = require("../../../../../assets/img/icon_report1_selected.png");
          this.tabimg2 = require("../../../../../assets/img/icon_report2.png");
          break;
        case 2: //存在问题
          this.isFlag = false;
          $("#tabdiv1").removeClass("pop_tab_select_div1");
          $("#tabdiv1").addClass("pop_tab_noselect_div1");
          $("#tabdiv2").addClass("pop_tab_select_div2");
          $("#tabdiv2").removeClass("pop_tab_noselect_div2");
          this.tabimg1 = require("../../../../../assets/img/icon_report1.png");
          this.tabimg2 = require("../../../../../assets/img/icon_report2_selected.png");
          break;
        default:
          break;
      }
    },
    reshye: function() {
      //console.log("刷新");
      setTimeout(() => {
        $("#pmJjdivid p").each(function() {
          $(this).attr("style", "font-size:15px;");
        });
        $("#pmJjdivid div").each(function() {
          $(this).attr("style", "width:100%;font-size:15px;");
        });
         $("#pmJjdivid span").each(function() {
          $(this).attr("style", "font-size:15px;");
        });
      }, 100);
    },
    imgPreview: function(index) {
      ImagePreview({
        images: this.images,
        startPosition: index,
        onClose() {
          // do something
        }
      });
    },
    //获取图片
    getzdgcProReportInfoAtt: function(id) {
      var params = {
        zdgcProReportInfoId: id
      };

      httpMethod
        .getzdgcProReportInfoAtt(params)
        .then(res => {
          console.log("获取图片");

          if (res.success == "1") {
            var dataList = res.dataList;
            for (var i = 0; i < dataList.length; i++) {
              this.images.push(
                httpMethod.returnBaseUrlFun() + dataList[i].realpath
              );
            }
            console.log("获取图片");
            console.log(this.images);
          }
        })
        .catch(err => {
          this.$toast(err);
        });
    },
    //存在问题列表
    getVoExistiongPro: function(id) {
      var params = {
        proId: id
      };

      httpMethod
        .getVoExistiongPro(params)
        .then(res => {
          if (res.success == "1") {
            this.dataList = res.dataList;
          }
        })
        .catch(err => {
          this.$toast(err);
        });
    },
    //项目阶段汇报
    getZdgcProProgressList: function(id) {
      var params = {
        proReportInfoId: id
      };

      httpMethod
        .getZdgcProProgressList(params)
        .then(res => {
          //console.log("项目阶段汇报==="+JSON.stringify(res));
          if (res.success == "1") {
            var dataList = res.dataList;
            this.list = dataList;
          }
        })
        .catch(err => {
          this.$toast(err);
        });
    },

    //项目详情
    getZdgcProProgress: function(id) {
      this.show = true;
      var params = {
        zdgcProProgressId: id
      };

      httpMethod
        .getZdgcProProgress(params)
        .then(res => {
          console.log("项目详情===" + JSON.stringify(res));
          if (res.success == "1") {
            this.showPopData(res.data);
          }
        })
        .catch(err => {
          this.$toast(err);
        });
    },
    showPopData: function(data) {
      console.log(data.imageProgress);
      this.getVoExistiongPro(data.id);
      $("#jiedContent").html(data.imageProgress);
    },
    //项目简介
    getzdgcProReportInfoAttJJ: function(id) {
      var params = {
        zdgcProReportInfoId: id
      };

      httpMethod
        .getzdgcProReportInfoAttJJ(params)
        .then(res => {
          //console.log("项目简介==="+JSON.stringify(res));
          if (res.success == "1") {
            var data = res.data;
            this.jjEntity = data;
          }
        })
        .catch(err => {
          this.$toast(err);
        });
    },
    onRefresh() {
      setTimeout(() => {
        this.isLoading = false;
      }, 500);
    },
    onLoad() {
      //上拉加载
      this.finished = true;
    },
    goDetile() {},
    showDatePicker(index) {
      this.show = true;
      this.flage = index;
    },
    timeFormat(time) {
      // 时间格式化 2019-09-08
      let year = time.getFullYear();
      let month = time.getMonth() + 1;
      let day = time.getDate();
      return year + "-" + month + "-" + day;
    },
    onconfirm() {
      if (this.flage == 1) {
        this.date1 = this.timeFormat(this.currentDate);
      } else {
        this.date2 = this.timeFormat(this.currentDate);
      }

      this.show = false;
    },
    onClick(name, title) {
      if (name == "1") {
        this.img1 = require("../../../../../assets/img/icon-xmxq.png");
        this.img2 = require("../../../../../assets/img/icon-xmjj2.png");
        this.img3 = require("../../../../../assets/img/icon-jdhb2.png");
        $("#tab1_div").css("color", "#3097FB");
        $("#tab2_div").css("color", "#666666");
        $("#tab3_div").css("color", "#666666");
      } else if (name == "2") {
        this.img1 = require("../../../../../assets/img/icon-xmxq2.png");
        this.img2 = require("../../../../../assets/img/icon-xmjj.png");
        this.img3 = require("../../../../../assets/img/icon-jdhb2.png");
        $("#tab1_div").css("color", "#666666");
        $("#tab2_div").css("color", "#3097FB");

        $("#tab3_div").css("color", "#666666");
      } else {
        this.img1 = require("../../../../../assets/img/icon-xmxq2.png");
        this.img2 = require("../../../../../assets/img/icon-xmjj2.png");
        this.img3 = require("../../../../../assets/img/icon-jdhb.png");
        $("#tab1_div").css("color", "#666666");
        $("#tab2_div").css("color", "#666666");
        $("#tab3_div").css("color", "#3097FB");
      }
    }
  }
};
</script>

<style scoped>
@import "../../../../../page/zdgz/zdgc/zdgc_xmlb/zdgc_xmdeali/zdgc_xmdeali.css";
</style>